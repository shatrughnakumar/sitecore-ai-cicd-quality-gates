# Quality gates and failure lab

Use a disposable branch (`git switch -c lab/failure-demo`). Do not push intentional credential fixtures or real secrets.

| Experiment | Expected outcome |
| --- | --- |
| Introduce formatting drift in a source file | Hook fixes it; CI format check rejects remaining drift |
| Add an unused variable in a TS file | ESLint reports it (warnings may not fail; CI uses max-warnings=0) |
| Assign a number to a string field | Pre-push typecheck fails |
| Change a test expectation | Unit tests fail |
| Add uncovered branches to the content boundary | Coverage can fall below 85% and fail |
| Stage an empty `.env.local` with `git add -f .env.local` | Local scanner rejects the file path; unstage and remove immediately |
| Remove the health route | Production smoke check fails |

The local scanner reads Git index contents, not working-tree contents, and never prints matched credential values. It is a heuristic guard, not a complete secret detector. It skips binary content and does not inspect history. Gitleaks scans Git history in CI. False positives and false negatives are possible. Rotate any exposed real credential immediately; deleting it in a later commit is not sufficient.

Use `git restore --staged <file>` to unstage a lab change and manually revert your test edits. Avoid destructive resets in shared branches. Hooks can be bypassed; required CI checks cannot be treated as optional.

Audit policy fails on high/critical findings and network/service errors. Review advisory applicability and update affected packages. Do not silently disable security checks to achieve a green build.
