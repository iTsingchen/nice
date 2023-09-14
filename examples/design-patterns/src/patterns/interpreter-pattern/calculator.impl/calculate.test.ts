import { test, expect } from 'vitest';
import { calculate } from './calculate';
import { CalcExpressionFactory } from './expressions';

test('+-x/', () => {
  const factory = new CalcExpressionFactory();

  expect(calculate(['1', '1', '+'], factory)).toBeCloseTo(2);
  expect(calculate(['1', '1', '+'], factory)).toBeCloseTo(2);
  expect(calculate(['1', '1', '-'], factory)).toBeCloseTo(0);
  expect(calculate(['1', '1', '*'], factory)).toBeCloseTo(1);
  expect(calculate(['1', '1', '/'], factory)).toBeCloseTo(1);

  expect(calculate(['1', '2', '3', '+', '+'], factory)).toBeCloseTo(6);
  expect(calculate(['2', '4', '6', '+', '*'], factory)).toBeCloseTo(20);
  expect(calculate(['2', '4', '6', '+', '/'], factory)).toBeCloseTo(0.2);

  expect(calculate(['1', '2', '3', '-', '-'], factory)).toBeCloseTo(2);
  expect(calculate(['2', '4', '6', '-', '*'], factory)).toBeCloseTo(-4);
  expect(calculate(['2', '4', '6', '-', '/'], factory)).toBeCloseTo(-1);
});

test('三角函数', () => {
  const factory = new CalcExpressionFactory();

  expect(calculate(['30', 'sin'], factory)).toBeCloseTo(0.5);
  expect(calculate(['60', 'cos'], factory)).toBeCloseTo(0.5);
  expect(calculate(['45', 'tan'], factory)).toBeCloseTo(1.0);
});

test('复合模式', () => {
  const factory = new CalcExpressionFactory();

  expect(calculate(['12', '30', 'sin', '/'], factory)).toBeCloseTo(24);
  expect(calculate(['60', 'cos', '5', '+'], factory)).toBeCloseTo(5.5);
  expect(calculate(['25', '20', '+', 'tan'], factory)).toBeCloseTo(1.0);
});

test('错误情况', () => {
  const factory = new CalcExpressionFactory();

  expect(() => calculate(['sin'], factory)).toThrowError('Invalid expression');
  expect(() => calculate(['sin', 'cos'], factory)).toThrowError(
    'Invalid expression',
  );
  expect(() => calculate(['1', '+'], factory)).toThrowError(
    'Invalid expression',
  );
  expect(() => calculate(['+', '1', '1'], factory)).toThrowError(
    'Invalid expression',
  );
  expect(() => calculate(['1', '1', '-', '2'], factory)).toThrowError(
    'Invalid expression',
  );
});
