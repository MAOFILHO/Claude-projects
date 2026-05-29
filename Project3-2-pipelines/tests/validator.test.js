const { validateAge } = require("../src/validator");

test("validateAge returns valid for 25", () => {
  expect(validateAge(25)).toEqual({ valid: true });
});
