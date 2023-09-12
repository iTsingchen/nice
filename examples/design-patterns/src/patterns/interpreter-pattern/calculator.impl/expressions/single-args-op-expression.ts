import type { Expression } from '../../calculator.interface';

abstract class SingleArgsOpExpression implements Expression {
  static readonly getConsumeExprCount = (): number => 1;

  public constructor(protected value: Expression) {}
  public abstract interpreter(): number;
}

export class SinOpExpression extends SingleArgsOpExpression {
  public interpreter(): number {
    return Math.sin((this.value.interpreter() / 180) * Math.PI);
  }
}

export class CosOpExpression extends SingleArgsOpExpression {
  public interpreter(): number {
    return Math.cos((this.value.interpreter() / 180) * Math.PI);
  }
}

export class TanOpExpression extends SingleArgsOpExpression {
  public interpreter(): number {
    return Math.tan((this.value.interpreter() / 180) * Math.PI);
  }
}
