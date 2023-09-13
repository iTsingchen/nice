import { assureDefined } from '@nice/type-fest';
import type { ExpressionFactory, Expression } from '../calculator.interface';

export const calculate = (
  suffixExpr: string[],
  exprFactory: ExpressionFactory,
): number => {
  const exprStack: Expression[] = [];

  for (const token of suffixExpr) {
    const consumeExprCount = exprFactory.getConsumeExprCount(token);

    const args = Array.from({ length: consumeExprCount })
      .map(() => exprStack.pop()) // WARNING: 该行具有副作用，不是纯函数
      .reverse();

    if (args.some((expr) => !expr)) {
      throw new Error('Invalid expression');
    }

    exprStack.push(exprFactory.create(token, ...(args as Expression[])));
  }

  if (exprStack.length !== 1) {
    throw new Error('Invalid expression');
  }

  const [resultExpr] = exprStack;
  return assureDefined(resultExpr).interpreter();
};
