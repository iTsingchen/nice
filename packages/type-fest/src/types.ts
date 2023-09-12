class AssertionError extends Error {}

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new AssertionError(
      `Expected 'val' to be defined, but received ${String(val)}`,
    );
  }
}

export function assureDefined<T>(val: T): NonNullable<T> {
  assertIsDefined(val);
  return val;
}
