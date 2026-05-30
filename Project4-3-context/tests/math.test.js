import { add, multiply } from '../src/math.js';

test('add returns sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiply returns product of two numbers', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('multiply by zero returns zero', () => {
  expect(multiply(5, 0)).toBe(0);
});

test('multiply handles negative numbers', () => {
  expect(multiply(-2, 3)).toBe(-6);
});
