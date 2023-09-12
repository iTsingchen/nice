/**
 * 判断一个字符是不是数字
 * @param char - 任意字符
 * @returns 如果是返回 true，如果不是返回 false
 *
 * 0 的 code: 48
 * 9 的 code: 57
 */
export const isDigit = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return code >= 48 && code <= 57;
};

/**
 * 判断字符是否在A-Z或者a-z之间
 * @param char - 任意字符
 * @returns 如果是返回 true，如果不是返回 false
 *
 * a 的 code: 97
 * z 的 code: 122
 * A 的 code: 65
 * Z 的 code: 90
 */
export const isLetter = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

export const isDot = (char: string): boolean => char === '.';

export const isSpace = (char: string): boolean => char.trim() === '';

export const isPositiveSign = (char: string): boolean => char === '+';

export const isNegativeSign = (char: string): boolean => char === '-';

export const isOpenBracket = (char: string): boolean => char === '(';

export const isCloseBracket = (char: string): boolean => char === ')';

export const isNumber = (value: string): boolean => {
  return /^-?\d+(?:\.\d+)?$/.test(value);
};
