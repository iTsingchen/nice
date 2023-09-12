import { test, expectTypeOf } from 'vitest';
import { assertIsDefined, assureDefined } from './types';

test('assertIsDefined', () => {
  expectTypeOf(assertIsDefined).asserts.not.toBeNull();
  expectTypeOf(assertIsDefined).asserts.not.toBeUndefined();

  expectTypeOf(assertIsDefined<null>).asserts.toBeNever();
  expectTypeOf(assertIsDefined<undefined>).asserts.toBeNever();
});

test('assureDefined', () => {
  expectTypeOf(assureDefined<number>).returns.toBeNumber();
  expectTypeOf(assureDefined<string>).returns.toBeString();

  expectTypeOf(assureDefined<null>).returns.toBeNever();
  expectTypeOf(assureDefined<undefined>).returns.toBeNever();
});
