import { test, expect } from 'vitest';
import {
  isDigit,
  isDot,
  isLetter,
  isSpace,
  isNegativeSign,
  isPositiveSign,
  isCloseBracket,
  isOpenBracket,
  isNumber,
} from './helpers';

test('isDigit', () => {
  expect(isDigit('0')).toBe(true);
  expect(isDigit('1')).toBe(true);
  expect(isDigit('2')).toBe(true);
  expect(isDigit('3')).toBe(true);
  expect(isDigit('4')).toBe(true);
  expect(isDigit('5')).toBe(true);
  expect(isDigit('6')).toBe(true);
  expect(isDigit('7')).toBe(true);
  expect(isDigit('8')).toBe(true);
  expect(isDigit('9')).toBe(true);
  expect(isDigit('-1')).toBe(false);
  expect(isDigit('a')).toBe(false);
  expect(isDigit('b')).toBe(false);
  expect(isDigit('.')).toBe(false);
});

test('isDot', () => {
  expect(isDot('.')).toBe(true);
  expect(isDot('0')).toBe(false);
  expect(isDot('a')).toBe(false);
});

test('isLetter', () => {
  for (const letter of 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    expect(isLetter(letter)).toBe(true);
  }

  expect(isLetter('0')).toBe(false);
  expect(isLetter('.')).toBe(false);
});

test('isSpace', () => {
  expect(isSpace(' ')).toBe(true);
  expect(isSpace('\t')).toBe(true);
  expect(isSpace('\n')).toBe(true);
  expect(isSpace('\r')).toBe(true);
  expect(isSpace('\f')).toBe(true);
  expect(isSpace('\v')).toBe(true);
  expect(isSpace('\u00A0')).toBe(true);
});

test('isPositiveSign', () => {
  expect(isPositiveSign('+')).toBe(true);
  expect(isPositiveSign('-')).toBe(false);
  expect(isPositiveSign('0')).toBe(false);
});

test('isNegativeSign', () => {
  expect(isNegativeSign('-')).toBe(true);
  expect(isNegativeSign('+')).toBe(false);
  expect(isNegativeSign('0')).toBe(false);
});

test('isOpenBracket', () => {
  expect(isOpenBracket('(')).toBe(true);
  expect(isOpenBracket(')')).toBe(false);
});

test('isCloseBracket', () => {
  expect(isCloseBracket(')')).toBe(true);
  expect(isCloseBracket('(')).toBe(false);
});

test('isNumber', () => {
  expect(isNumber('-1')).toBe(true);
  expect(isNumber('0')).toBe(true);
  expect(isNumber('1')).toBe(true);
  expect(isNumber('1.1')).toBe(true);
  expect(isNumber('-1.1')).toBe(true);
  expect(isNumber('a')).toBe(false);
  expect(isNumber('.')).toBe(false);
});
