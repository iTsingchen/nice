import { expect, test } from 'vitest';
import { CalculatorImpl } from './calculator.impl';

test('+', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('1+2')).toBe(3);
  expect(calculator.calc('1+2+3')).toBe(6);
  expect(calculator.calc('1 + 2')).toBe(3);
  expect(calculator.calc(' 1+2')).toBe(3);
  expect(calculator.calc('1+2 ')).toBe(3);
});

test('-', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('1-2')).toBe(-1);
  expect(calculator.calc('1-2-3')).toBe(-4);
  expect(calculator.calc('1 - 2')).toBe(-1);
  expect(calculator.calc(' 1-2')).toBe(-1);
  expect(calculator.calc('1-2 ')).toBe(-1);
});

test('*', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('1*2')).toBe(2);
  expect(calculator.calc('1*2*3')).toBe(6);
  expect(calculator.calc('1 * 2')).toBe(2);
  expect(calculator.calc(' 1*2')).toBe(2);
  expect(calculator.calc('1*2 ')).toBe(2);
});

test('÷', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('1÷2')).toBe(0.5);
  expect(calculator.calc('1÷2÷3')).toBe(0.16666666666666666);
  expect(calculator.calc('1 ÷ 2')).toBe(0.5);
  expect(calculator.calc(' 1÷2')).toBe(0.5);
  expect(calculator.calc('1÷2 ')).toBe(0.5);

  expect(calculator.calc('1÷0')).toBe(Infinity);
});
