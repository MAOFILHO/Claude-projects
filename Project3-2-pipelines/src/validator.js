function validateAge(age) {
  if (typeof age !== "number" || !Number.isFinite(age)) {
    return { valid: false, error: "Age must be a finite number" };
  }
  if (!Number.isInteger(age)) {
    return { valid: false, error: "Age must be an integer" };
  }
  if (age < 0) {
    return { valid: false, error: "Age cannot be negative" };
  }
  if (age > 150) {
    return { valid: false, error: "Age cannot exceed 150" };
  }
  return { valid: true };
}

module.exports = { validateAge };
