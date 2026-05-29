const { normalizeName } = require('../src/utils');

describe('normalizeName', () => {
  describe('happy path', () => {
    test('title-cases a multi-word name', () => {
      expect(normalizeName('john doe')).toBe('John Doe');
    });

    test('title-cases a single-word name', () => {
      expect(normalizeName('alice')).toBe('Alice');
    });

    test('is idempotent on an already-normalized name', () => {
      expect(normalizeName('John Doe')).toBe('John Doe');
    });

    test('lowercases letters after the first in an all-uppercase input', () => {
      expect(normalizeName('JOHN DOE')).toBe('John Doe');
    });

    test('handles a three-word name', () => {
      expect(normalizeName('mary jane watson')).toBe('Mary Jane Watson');
    });
  });

  describe('whitespace handling', () => {
    test('trims leading whitespace', () => {
      expect(normalizeName('   john')).toBe('John');
    });

    test('trims trailing whitespace', () => {
      expect(normalizeName('john   ')).toBe('John');
    });

    test('trims both leading and trailing whitespace', () => {
      expect(normalizeName('  john doe  ')).toBe('John Doe');
    });

    test('collapses multiple internal spaces to a single space', () => {
      expect(normalizeName('john   doe')).toBe('John Doe');
    });

    test('collapses tab characters between words', () => {
      expect(normalizeName('john\tdoe')).toBe('John Doe');
    });

    test('collapses newline characters between words', () => {
      expect(normalizeName('john\ndoe')).toBe('John Doe');
    });

    test('collapses mixed whitespace runs between words', () => {
      expect(normalizeName('john \t \n doe')).toBe('John Doe');
    });
  });

  describe('hyphenated names', () => {
    test('capitalizes both parts of a hyphenated word', () => {
      expect(normalizeName('mary-anne')).toBe('Mary-Anne');
    });

    test('handles hyphenated name in a multi-word full name', () => {
      expect(normalizeName('mary-anne smith')).toBe('Mary-Anne Smith');
    });

    test('lowercases after the first letter in each hyphen segment', () => {
      expect(normalizeName('MARY-ANNE')).toBe('Mary-Anne');
    });

    test('handles multiple hyphenated segments', () => {
      expect(normalizeName('jean-paul-marie')).toBe('Jean-Paul-Marie');
    });
  });

  describe('invalid input', () => {
    test('throws TypeError for null', () => {
      expect(() => normalizeName(null)).toThrow(TypeError);
      expect(() => normalizeName(null)).toThrow('Name must be a string');
    });

    test('throws TypeError for undefined', () => {
      expect(() => normalizeName(undefined)).toThrow(TypeError);
      expect(() => normalizeName(undefined)).toThrow('Name must be a string');
    });

    test('throws TypeError for a number', () => {
      expect(() => normalizeName(42)).toThrow(TypeError);
      expect(() => normalizeName(42)).toThrow('Name must be a string');
    });

    test('throws TypeError for an array', () => {
      expect(() => normalizeName(['john'])).toThrow(TypeError);
      expect(() => normalizeName(['john'])).toThrow('Name must be a string');
    });

    test('throws TypeError for an object', () => {
      expect(() => normalizeName({ name: 'john' })).toThrow(TypeError);
      expect(() => normalizeName({ name: 'john' })).toThrow('Name must be a string');
    });

    test('throws TypeError for an empty string', () => {
      expect(() => normalizeName('')).toThrow(TypeError);
      expect(() => normalizeName('')).toThrow('Name must not be empty');
    });

    test('throws TypeError for a whitespace-only string', () => {
      expect(() => normalizeName('   ')).toThrow(TypeError);
      expect(() => normalizeName('   ')).toThrow('Name must not be empty');
    });

    test('throws TypeError for a tab-only string', () => {
      expect(() => normalizeName('\t\t')).toThrow(TypeError);
      expect(() => normalizeName('\t\t')).toThrow('Name must not be empty');
    });

    test('throws TypeError for a newline-only string', () => {
      expect(() => normalizeName('\n')).toThrow(TypeError);
      expect(() => normalizeName('\n')).toThrow('Name must not be empty');
    });
  });
});
