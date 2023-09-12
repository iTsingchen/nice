import { assureDefined } from '@nice/type-fest';
import type { ExpressionFactory, Expression } from '../calculator.interface';

export const calculate = (
  suffixExpr: string[],
  exprFactory: ExpressionFactory,
): number => {
  const exprStack: Expression[] = [];

  for (const token of suffixExpr) {
    const consumeExprCount = exprFactory.getConsumeExprCount(token);

    switch (consumeExprCount) {
      case 0:
        exprStack.push(exprFactory.create(token));
        break;
      case 1: {
        const expr = exprStack.pop();
        if (!expr) {
          throw new Error('Invalid expression');
        }
        exprStack.push(exprFactory.create(token, expr));
        break;
      }
      case 2: {
        const expr1 = exprStack.pop();
        const expr2 = exprStack.pop();
        if (!expr1 || !expr2) {
          throw new Error('Invalid expression');
        }
        exprStack.push(exprFactory.create(token, expr2, expr1));
        break;
      }
      default:
        throw new Error('The program will not be executed here.');
    }
  }

  if (exprStack.length !== 1) {
    throw new Error('Invalid expression');
  }

  const [resultExpr] = exprStack;
  return assureDefined(resultExpr).interpreter();
};
