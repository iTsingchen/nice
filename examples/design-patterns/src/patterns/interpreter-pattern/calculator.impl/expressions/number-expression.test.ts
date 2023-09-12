import { test, expect } from 'vitest';
import { NumberExpression } from './number-expression';

test('消费表达式数量', () => {
  expect(NumberExpression.getConsumeExprCount()).toBe(0);
});

test('NumberExpression', () => {
  Array.from({ length: 10 }, (_, i): number => Math.random() * 10 ** i).forEach(
    (value): void => {
      expect(new NumberExpression(`${value}`).interpreter()).toBe(value);
    },
  );
});
