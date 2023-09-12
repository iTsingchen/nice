export interface Calculator {
  calc: (text: string) => number;
}

export interface Expression {
  interpreter: () => number;
}

export interface ExpressionFactory {
  getPriority: (text: string) => Priority;

  getConsumeExprCount: (token: string) => number;

  create: (token: string, ...exprs: Expression[]) => Expression;
}

export enum Priority {
  LOWEST = 0,
  LOW,
  MEDIUM,
  HIGH,
  HIGHEST,
}
