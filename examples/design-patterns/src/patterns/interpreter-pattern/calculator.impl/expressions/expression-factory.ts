import type { Expression, ExpressionFactory } from '../../calculator.interface';
import { Priority } from '../../calculator.interface';
import { isNumber } from '../helpers';
import { NumberExpression } from './number-expression';
import {
  AddOpExpression,
  SubOpExpression,
  MulOpExpression,
  DivOpExpression,
} from './binary-args-op-expression';
import {
  SinOpExpression,
  CosOpExpression,
  TanOpExpression,
} from './single-args-op-expression';

interface OpExpressionConstructor {
  getConsumeExprCount: () => number;
  new (...exprs: Expression[]): Expression;
}
interface NumberExpressionConstructor {
  getConsumeExprCount: () => number;
  new (value: string): Expression;
}

interface Definition {
  ExprConstructor: OpExpressionConstructor | NumberExpressionConstructor;
  priority: Priority;
}

export class CalcExpressionFactory implements ExpressionFactory {
  private dict = new Map<string, Definition>([
    ['#', { ExprConstructor: NumberExpression, priority: Priority.LOWEST }],
    ['+', { ExprConstructor: AddOpExpression, priority: Priority.LOW }],
    ['-', { ExprConstructor: SubOpExpression, priority: Priority.LOW }],
    ['*', { ExprConstructor: MulOpExpression, priority: Priority.MEDIUM }],
    ['/', { ExprConstructor: DivOpExpression, priority: Priority.MEDIUM }],
    ['sin', { ExprConstructor: SinOpExpression, priority: Priority.HIGH }],
    ['cos', { ExprConstructor: CosOpExpression, priority: Priority.HIGH }],
    ['tan', { ExprConstructor: TanOpExpression, priority: Priority.HIGH }],
  ]);

  private token2symbol(token: string): string {
    return isNumber(token) ? '#' : token;
  }

  private getDefinitionByToken(token: string): Definition {
    const found = this.dict.get(this.token2symbol(token));
    if (!found) {
      throw new Error(`Not supported operation: ${token}`);
    }
    return found;
  }

  getPriority(token: string): Priority {
    return this.getDefinitionByToken(token).priority;
  }

  getConsumeExprCount(token: string): number {
    const { ExprConstructor } = this.getDefinitionByToken(token);
    return ExprConstructor.getConsumeExprCount();
  }

  create(token: string, ...exprs: Expression[]): Expression {
    const definition = this.getDefinitionByToken(token);

    if (isNumber(token)) {
      const Ctor = definition.ExprConstructor as NumberExpressionConstructor;
      return new Ctor(token);
    }

    const Ctor = definition.ExprConstructor as OpExpressionConstructor;
    return new Ctor(...exprs);
  }
}
