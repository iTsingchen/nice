import {
  isDigit,
  isDot,
  isLetter,
  isSpace,
  isNegativeSign,
  isPositiveSign,
  isOpenBracket,
} from './helpers';

class CharCollector {
  private readonly chars: string[] = [];

  public add(char: string): void {
    this.chars.push(char);
  }

  public consume(): string {
    const result = this.chars.join('');
    this.chars.length = 0;
    return result;
  }
}

/**
 * 将一个中缀表达式字符串转为中缀表达式数组
 *
 * 注意：正负号与加减号相似，所以将所有的正负号前面进行补零处理
 *
 * @param text  - 中缀表达式字符串，例：1 + 2 * (3 / 4)
 * @returns token 中缀表达式数组
 */
export const text2token = (text: string): string[] => {
  const result: string[] = [];

  const collector = new CharCollector();

  let prevNonSpaceChar: string | undefined;

  for (const char of text) {
    switch (true) {
      case isSpace(char):
        break;
      case isDigit(char):
      case isDot(char):
        collector.add(char); // 数字都是连续的
        break;
      case isLetter(char):
        collector.add(char); // 字母都是连续的
        break;
      case isNegativeSign(char):
      case isPositiveSign(char):
        /**
         *  处理 +、- 作为正负号的情况
         *    第一种情况：-1 + 2
         *    第二种情况：1 + (-2)
         *
         *  使用“补零”的矫正为将正负矫正为加减
         */
        if (!prevNonSpaceChar || isOpenBracket(prevNonSpaceChar)) {
          result.push('0');
          result.push(char);
        } else {
          result.push(collector.consume());
          result.push(char);
        }
        break;

      default:
        result.push(collector.consume());
        result.push(char);
    }

    if (!isSpace(char)) {
      prevNonSpaceChar = char;
    }
  }

  result.push(collector.consume());

  return result.filter((str) => str.length > 0);
};
