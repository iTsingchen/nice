import { assureDefined } from '@nice/type-fest';
import type { Priority } from '../calculator.interface';
import { isCloseBracket, isOpenBracket, isNumber } from './helpers';

export const infix2suffix = (
  infixExpr: string[],
  getPriority: (token: string) => Priority,
): string[] => {
  const stack: string[] = [];
  const result: string[] = [];

  for (const token of infixExpr) {
    switch (true) {
      case isNumber(token):
        result.push(token);
        break;
      case isOpenBracket(token):
        stack.push(token);
        break;
      case isCloseBracket(token): {
        let opToken = stack.pop();
        while (opToken && !isOpenBracket(opToken)) {
          result.push(opToken);
          opToken = stack.pop();
        }
        break;
      }
      default: {
        while (stack.length > 0) {
          if (
            isOpenBracket(assureDefined(stack.at(-1))) ||
            getPriority(assureDefined(stack.at(-1))) < getPriority(token)
          ) {
            break;
          }
          result.push(assureDefined(stack.pop()));
        }
        stack.push(token);
      }
    }
  }

  result.push(...stack.reverse());

  return result;
};
