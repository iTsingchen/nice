import type { Expression } from '../../calculator.interface';

abstract class BinaryArgsOpExpression implements Expression {
  static readonly getConsumeExprCount = (): number => 2;

  constructor(
    protected left: Expression,
    protected right: Expression,
  ) {}
  public abstract interpreter(): number;
}

export class AddOpExpression extends BinaryArgsOpExpression {
  public interpreter(): number {
    return this.left.interpreter() + this.right.interpreter();
  }
}
export class SubOpExpression extends BinaryArgsOpExpression {
  public interpreter(): number {
    return this.left.interpreter() - this.right.interpreter();
  }
}
export class MulOpExpression extends BinaryArgsOpExpression {
  public interpreter(): number {
    return this.left.interpreter() * this.right.interpreter();
  }
}
export class DivOpExpression extends BinaryArgsOpExpression {
  public interpreter(): number {
    return this.left.interpreter() / this.right.interpreter();
  }
}
