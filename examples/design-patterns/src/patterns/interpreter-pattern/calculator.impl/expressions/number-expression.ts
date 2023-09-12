import type { Expression } from '../../calculator.interface';

export class NumberExpression implements Expression {
  static readonly getConsumeExprCount = (): number => 0;

  public constructor(private value: string) {}
  public interpreter(): number {
    return Number(this.value);
  }
}
