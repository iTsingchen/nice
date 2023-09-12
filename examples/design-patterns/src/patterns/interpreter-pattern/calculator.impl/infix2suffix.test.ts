import { test, expect } from 'vitest';
import { infix2suffix } from './infix2suffix';
import { CalcExpressionFactory } from './expressions';

test('infix2suffix', () => {
  const expressionFactory = new CalcExpressionFactory();

  const getPriority = expressionFactory.getPriority.bind(expressionFactory);
  const testFn = (input: string[], expected: string[]): void => {
    expect(infix2suffix(input, getPriority)).toEqual(expected);
  };

  testFn([], []);
  testFn(['1'], ['1']);
  testFn(['1', '+', '2'], ['1', '2', '+']);
  testFn(['1', '/', '2'], ['1', '2', '/']);
  testFn(['1', '/', '2', '/', '3'], ['1', '2', '/', '3', '/']);
  testFn(
    ['1', '+', '2', '*', '(', '3', '-', '4', ')', '-', '5', '/', '6'],
    ['1', '2', '3', '4', '-', '*', '+', '5', '6', '/', '-'],
  );
  testFn(
    ['1', '+', '(', '(', '2', '-', '3', ')', '*', '4', ')'],
    ['1', '2', '3', '-', '4', '*', '+'],
  );
  testFn(
    ['2', '*', 'sin', '(', '60', '+', '30', ')'],
    ['2', '60', '30', '+', 'sin', '*'],
  );
});
