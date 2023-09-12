import { test, expect } from 'vitest';
import {
  SinOpExpression,
  CosOpExpression,
  TanOpExpression,
} from './single-args-op-expression';
import { NumberExpression } from './number-expression';

test('消费表达式数量', () => {
  [SinOpExpression, CosOpExpression, TanOpExpression].forEach(
    (OpExpression) => {
      expect(OpExpression.getConsumeExprCount()).toBe(1);
    },
  );
});

test('SinOpExpression', () => {
  const testFn = (num: number): void => {
    const n = new NumberExpression(num.toString());
    const expected = Math.sin((num / 180) * Math.PI);
    expect(new SinOpExpression(n).interpreter()).toBe(expected);
  };

  testFn(0);
  testFn(60);
  testFn(90);
  testFn(180);
});

test('CosOpExpression', () => {
  const testFn = (num: number): void => {
    const n = new NumberExpression(num.toString());
    const expected = Math.cos((num / 180) * Math.PI);
    expect(new CosOpExpression(n).interpreter()).toBe(expected);
  };

  testFn(0);
  testFn(60);
  testFn(90);
  testFn(180);
});

test('TanOpExpression', () => {
  const testFn = (num: number): void => {
    const n = new NumberExpression(num.toString());
    const expected = Math.tan((num / 180) * Math.PI);
    expect(new TanOpExpression(n).interpreter()).toBe(expected);
  };

  testFn(0);
  testFn(60);
  testFn(90);
  testFn(180);
});
