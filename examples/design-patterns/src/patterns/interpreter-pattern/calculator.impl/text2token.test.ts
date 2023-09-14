import { test, expect } from 'vitest';
import { text2token } from './text2token';

test('普通的加减乘除', () => {
  expect(text2token('1+2')).toEqual(['1', '+', '2']);
  expect(text2token('1-2')).toEqual(['1', '-', '2']);
  expect(text2token('1*2')).toEqual(['1', '*', '2']);
  expect(text2token('1/2')).toEqual(['1', '/', '2']);
});

test('含有括号的情况', () => {
  expect(text2token('1+(2*3)')).toEqual(['1', '+', '(', '2', '*', '3', ')']);
  expect(text2token('(1+2)/3')).toEqual(['(', '1', '+', '2', ')', '/', '3']);
  expect(text2token('((1+2)/3)*4')).toEqual([
    '(',
    '(',
    '1',
    '+',
    '2',
    ')',
    '/',
    '3',
    ')',
    '*',
    '4',
  ]);
});

test('三角函数', () => {
  expect(text2token('sin(1)')).toEqual(['sin', '(', '1', ')']);
  expect(text2token('cos(1)')).toEqual(['cos', '(', '1', ')']);
  expect(text2token('tan(1)')).toEqual(['tan', '(', '1', ')']);
});

test('含有正负号', () => {
  expect(text2token('-1')).toEqual(['0', '-', '1']);
  expect(text2token('-1+2')).toEqual(['0', '-', '1', '+', '2']);
  expect(text2token('-1+(-2)')).toEqual([
    '0',
    '-',
    '1',
    '+',
    '(',
    '0',
    '-',
    '2',
    ')',
  ]);

  expect(text2token('+1')).toEqual(['0', '+', '1']);
  expect(text2token('1+(+2)')).toEqual(['1', '+', '(', '0', '+', '2', ')']);
});
