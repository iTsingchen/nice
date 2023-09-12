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
 * @param text  - 中缀表达式字符串，例：1 + 2 * (3 / 4)
 * @returns token 中缀表达式数组
 */
export const text2token = (text: string): string[] => {
  const result: string[] = [];

  const numberCollector = new CharCollector();
  const letterCollector = new CharCollector();

  let prevNonSpaceChar: string | undefined;

  for (const char of text) {
    switch (true) {
      case isSpace(char):
        break;
      case isDigit(char):
      case isDot(char):
        numberCollector.add(char);
        break;
      case isNegativeSign(char):
      case isPositiveSign(char):
        /**
         *  处理 +、- 作为正负号的情况
         *    第一种情况：-1 + 2
         *    第二种情况：1 + (-2)
         */
        if (!prevNonSpaceChar || isOpenBracket(prevNonSpaceChar)) {
          numberCollector.add(char);
        } else {
          result.push(numberCollector.consume());
          result.push(letterCollector.consume());
          result.push(char);
        }
        break;
      case isLetter(char):
        letterCollector.add(char);
        break;
      default:
        result.push(numberCollector.consume());
        result.push(letterCollector.consume());
        result.push(char);
    }

    if (!isSpace(char)) {
      prevNonSpaceChar = char;
    }
  }

  result.push(numberCollector.consume());
  result.push(letterCollector.consume());

  return result.filter((str) => str.length > 0);
};
