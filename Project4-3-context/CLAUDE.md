# CLAUDE.md


   Context for Claude Code sessions in this repo.


   ## Project
   K21 Lab 4.3 reference utility library. Small Node.js library used to demonstrate context retention in the Claude Code Mastery program.


   ## Tech stack
   - Node.js 20 LTS
   - ES Modules (export / import)
   - Jest for tests
   - No external runtime dependencies for utility functions


   ## Layout
   - src/        — utility modules (math.js, string.js, etc.)
   - tests/      — Jest tests, one file per module
   - docs/       — README and reference docs


   ## Common commands
   - npm test               — run all tests
   - npm test -- --watch    — run tests in watch mode
   - node src/<module>.js   — run a module directly


   ## Conventions
   - Always use ES Modules — never module.exports
   - New utility functions go in src/<topic>.js + tests/<topic>.test.js
   - Code comments only for non-obvious decisions
   - No external deps for utility code


   ## Never
   - Delete or modify .env files
   - Commit anything to main directly — work in feature branches
   - Add console.log to production code
