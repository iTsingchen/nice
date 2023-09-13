import { test, expect } from 'vitest';
import { calculate } from './calculate';
import { CalcExpressionFactory } from './expressions';

test('+-x/', () => {
  const factory = new CalcExpressionFactory();

  expect(calculate(['1', '1', '+'], factory)).toBe(2);
  expect(calculate(['1', '1', '+'], factory)).toBe(2);
  expect(calculate(['1', '1', '-'], factory)).toBe(0);
  expect(calculate(['1', '1', '*'], factory)).toBe(1);
  expect(calculate(['1', '1', '/'], factory)).toBe(1);

  expect(calculate(['1', '2', '3', '+', '+'], factory)).toBe(6);
  expect(calculate(['2', '4', '6', '+', '*'], factory)).toBe(20);
  expect(calculate(['2', '4', '6', '+', '/'], factory)).toBe(0.2);

  expect(calculate(['1', '2', '3', '-', '-'], factory)).toBe(2);
  expect(calculate(['2', '4', '6', '-', '*'], factory)).toBe(-4);
  expect(calculate(['2', '4', '6', '-', '/'], factory)).toBe(-1);
});

test('三角函数', () => {
  const factory = new CalcExpressionFactory();

  expect(calculate(['30', 'sin'], factory)).toBe(0.49999999999999994);
  expect(calculate(['60', 'cos'], factory)).toBe(0.5000000000000001);
  expect(calculate(['45', 'tan'], factory)).toBe(0.9999999999999999);
});

test('复合模式', () => {
  const factory = new CalcExpressionFactory();

  expect(calculate(['12', '30', 'sin', '/'], factory)).toBe(24.000000000000004);
  expect(calculate(['60', 'cos', '5', '+'], factory)).toBe(5.5);
  expect(calculate(['25', '20', '+', 'tan'], factory)).toBe(0.9999999999999999);
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
