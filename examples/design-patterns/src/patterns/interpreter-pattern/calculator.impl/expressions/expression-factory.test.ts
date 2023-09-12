import { test, expect } from 'vitest';
import { Priority } from '../../calculator.interface';
import { CalcExpressionFactory } from './expression-factory';
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
import { NumberExpression } from './number-expression';

test('getPriority', () => {
  const factory = new CalcExpressionFactory();
  expect(factory.getPriority('1')).toBe(Priority.LOWEST);
  expect(factory.getPriority('+')).toBe(Priority.LOW);
  expect(factory.getPriority('-')).toBe(Priority.LOW);
  expect(factory.getPriority('*')).toBe(Priority.MEDIUM);
  expect(factory.getPriority('/')).toBe(Priority.MEDIUM);
  expect(factory.getPriority('sin')).toBe(Priority.HIGH);
  expect(factory.getPriority('cos')).toBe(Priority.HIGH);
  expect(factory.getPriority('tan')).toBe(Priority.HIGH);

  expect(() => factory.getPriority('ThisIsInvalidToken')).toThrowError(
    /Not supported operation/,
  );
});

test('getConsumeExprCount', () => {
  const factory = new CalcExpressionFactory();

  expect(factory.getConsumeExprCount('1')).toBe(0);
  expect(factory.getConsumeExprCount('+')).toBe(2);
  expect(factory.getConsumeExprCount('-')).toBe(2);
  expect(factory.getConsumeExprCount('*')).toBe(2);
  expect(factory.getConsumeExprCount('/')).toBe(2);
  expect(factory.getConsumeExprCount('sin')).toBe(1);
  expect(factory.getConsumeExprCount('cos')).toBe(1);
  expect(factory.getConsumeExprCount('tan')).toBe(1);
});

test('create', () => {
  const factory = new CalcExpressionFactory();
  const n1 = factory.create('1');
  const n2 = factory.create('2');

  expect(n1).toBeInstanceOf(NumberExpression);
  expect(n2).toBeInstanceOf(NumberExpression);

  expect(factory.create('+', n1, n2)).toBeInstanceOf(AddOpExpression);
  expect(factory.create('-', n1, n2)).toBeInstanceOf(SubOpExpression);
  expect(factory.create('*', n1, n2)).toBeInstanceOf(MulOpExpression);
  expect(factory.create('/', n1, n2)).toBeInstanceOf(DivOpExpression);

  expect(factory.create('sin', n1)).toBeInstanceOf(SinOpExpression);
  expect(factory.create('cos', n1)).toBeInstanceOf(CosOpExpression);
  expect(factory.create('tan', n1)).toBeInstanceOf(TanOpExpression);
});
