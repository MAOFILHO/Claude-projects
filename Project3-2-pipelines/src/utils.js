/**
 * Normalizes a name string: trims whitespace, collapses internal runs,
 * and applies title case (including both parts of hyphenated words).
 * @param {string} name
 * @returns {string}
 * @throws {TypeError} if name is not a string or is empty/whitespace-only
 */
function titleCaseWord(word) {
  return word
    .split('-')
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('-');
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }

  const trimmed = name.trim();

  if (trimmed.length === 0) {
    throw new TypeError('Name must not be empty');
  }

  const collapsed = trimmed.replace(/\s+/g, ' ');

  return collapsed.split(' ').map(titleCaseWord).join(' ');
}

module.exports = { normalizeName };
