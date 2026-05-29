#!/usr/bin/env bash
set -euo pipefail

RESULTS_FILE="$(mktemp)"
trap 'rm -f "$RESULTS_FILE"' EXIT

npm test -- --json --outputFile="$RESULTS_FILE" 2>/dev/null || true

if [[ ! -s "$RESULTS_FILE" ]]; then
  echo '{"error":"No test output produced"}' | jq .
  exit 1
fi

jq '{
  success:         .success,
  timestamp:       (.startTime / 1000 | todate),
  numTotalTests:   .numTotalTests,
  numPassedTests:  .numPassedTests,
  numFailedTests:  .numFailedTests,
  numPendingTests: .numPendingTests,
  testSuites: [.testResults[] | {
    file:    (.name | split("/") | last),
    status:  .status,
    passed:  ([.assertionResults[] | select(.status == "passed")] | length),
    failed:  ([.assertionResults[] | select(.status == "failed")] | length),
    failures: [.assertionResults[] | select(.status == "failed") | {
      name:    .fullName,
      message: (.failureMessages[0] // "" | split("\n")[0])
    }]
  }]
}' "$RESULTS_FILE"
