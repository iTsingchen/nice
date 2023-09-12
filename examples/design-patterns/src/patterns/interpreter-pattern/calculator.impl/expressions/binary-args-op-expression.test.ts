import { test, expect } from 'vitest';
import {
  AddOpExpression,
  SubOpExpression,
  MulOpExpression,
  DivOpExpression,
} from './binary-args-op-expression';
import { NumberExpression } from './number-expression';

test('消费表达式数量', () => {
  [AddOpExpression, SubOpExpression, MulOpExpression, DivOpExpression].forEach(
    (OpExpression) => {
      expect(OpExpression.getConsumeExprCount()).toBe(2);
    },
  );
});

test('AddOpExpression', () => {
  const n1 = new NumberExpression('1');
  const n2 = new NumberExpression('2');
  const n3 = new NumberExpression('3');

  expect(new AddOpExpression(n1, n2).interpreter()).toBe(3);
  expect(new AddOpExpression(n1, n3).interpreter()).toBe(4);
  expect(new AddOpExpression(n2, n3).interpreter()).toBe(5);
});

test('SubOpExpression', () => {
  const n1 = new NumberExpression('1');
  const n2 = new NumberExpression('2');
  const n3 = new NumberExpression('3');

  expect(new SubOpExpression(n1, n2).interpreter()).toBe(-1);
  expect(new SubOpExpression(n1, n3).interpreter()).toBe(-2);
  expect(new SubOpExpression(n2, n3).interpreter()).toBe(-1);
});

test('MulOpExpression', () => {
  const n1 = new NumberExpression('1');
  const n2 = new NumberExpression('2');
  const n3 = new NumberExpression('3');

  expect(new MulOpExpression(n1, n2).interpreter()).toBe(2);
  expect(new MulOpExpression(n1, n3).interpreter()).toBe(3);
  expect(new MulOpExpression(n2, n3).interpreter()).toBe(6);
});

test('DivOpExpression', () => {
  const n1 = new NumberExpression('1');
  const n2 = new NumberExpression('2');
  const n3 = new NumberExpression('3');

  expect(new DivOpExpression(n1, n2).interpreter()).toBe(1 / 2);
  expect(new DivOpExpression(n1, n3).interpreter()).toBe(1 / 3);
  expect(new DivOpExpression(n2, n3).interpreter()).toBe(2 / 3);
});
