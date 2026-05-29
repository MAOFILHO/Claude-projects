---
name: project-testing-conventions
description: Testing framework, file naming, and assertion conventions for the Project3-2-pipelines codebase
metadata:
  type: project
---

Testing framework: Jest (v30, devDependency). No additional assertion libraries — plain Jest `expect` matchers only.

File naming: test files live in `/tests/` at the project root, named `<module>.test.js` (e.g., `utils.test.js` for `src/utils.js`).

Module system: CommonJS throughout — use `require()`/`module.exports`, never ESM `import`/`export`.

Run tests: `npx jest <file>` or `npm test`. Coverage: `npm run test:coverage`.

Grouping: use nested `describe` blocks to separate happy path, whitespace handling, domain-specific cases, and invalid input. Flat `test()` calls inside each group.

Error assertions: assert both the error class and the message string in separate `expect` calls for TypeError cases (avoids one-liner that could miss class vs. message mismatches).

[[project-testing-conventions]]
