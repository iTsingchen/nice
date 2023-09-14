import { expect, test } from 'vitest';
import { CalculatorImpl } from './calculator';

test('+', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('1+2')).toBeCloseTo(3);
  expect(calculator.calc('1+2+3')).toBeCloseTo(6);
  expect(calculator.calc('1 + 2')).toBeCloseTo(3);
  expect(calculator.calc(' 1+2')).toBeCloseTo(3);
  expect(calculator.calc('1+2 ')).toBeCloseTo(3);
  expect(calculator.calc('1+(-1)')).toBeCloseTo(0);
});

test('-', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('1-2')).toBeCloseTo(-1);
  expect(calculator.calc('1-2-3')).toBeCloseTo(-4);
  expect(calculator.calc('1 - 2')).toBeCloseTo(-1);
  expect(calculator.calc(' 1-2')).toBeCloseTo(-1);
  expect(calculator.calc('1-2 ')).toBeCloseTo(-1);
});

test('*', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('1*2')).toBeCloseTo(2);
  expect(calculator.calc('1*2*3')).toBeCloseTo(6);
  expect(calculator.calc('1 * 2')).toBeCloseTo(2);
  expect(calculator.calc(' 1*2')).toBeCloseTo(2);
  expect(calculator.calc('1*2 ')).toBeCloseTo(2);
});

test('/', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('1/2')).toBeCloseTo(0.5);
  expect(calculator.calc('1/2/3')).toBeCloseTo(0.16666666666666666);
  expect(calculator.calc('1 / 2')).toBeCloseTo(0.5);
  expect(calculator.calc(' 1/2')).toBeCloseTo(0.5);
  expect(calculator.calc('1/2 ')).toBeCloseTo(0.5);

  expect(calculator.calc('1/0')).toBeCloseTo(Infinity);
});

test('sin/cos/tan', () => {
  const calculator = new CalculatorImpl();

  expect(calculator.calc('sin(0)')).toBeCloseTo(0);
  expect(calculator.calc('cos(0)')).toBeCloseTo(1);
  expect(calculator.calc('tan(0)')).toBeCloseTo(0);

  expect(calculator.calc('-sin(30)')).toBeCloseTo(-0.5);
  expect(calculator.calc('-cos(60)')).toBeCloseTo(-0.5);
  expect(calculator.calc('-tan(45)')).toBeCloseTo(-1);

  expect(calculator.calc('1 + sin(180)')).toBeCloseTo(1);
  expect(calculator.calc('cos(90 - 30) * 3')).toBeCloseTo(1.5);
});
