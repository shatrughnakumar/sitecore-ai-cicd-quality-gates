# GitHub setup

1. Push the initial commit including the generated lockfile. Enable Actions, dependency graph and code scanning as appropriate for the repository.
2. Run CI and Security and open a sample PR so check names appear.
3. In Settings > Rules > Rulesets (or Branches > Branch protection), target `main`, require pull requests and status checks. Select `Quality gates`, `Secret history scan`, `Dependency review` and `CodeQL analysis` from the actual check list. Require the branch to be current before merge. Prevent bypasses where possible. Require one approval when you have a second reviewer; for a solo demo use required checks without a self-approval requirement.
4. Configure code scanning merge protection to block serious alerts if available. CodeQL analysis completion alone does not gate alert severity.
5. Keep default workflow token permissions read-only. Security workflow grants only the permissions needed to upload CodeQL results. Review changes to workflow files and dependencies.

GitHub feature availability varies with plan, visibility and organization policy. Dependency review and CodeQL are intended for public repositories here; private repos may require paid features. If default CodeQL setup conflicts with the advanced workflow, use one setup rather than both. For fork PRs, GitHub may require approval before workflows run.

Before calling the repository production-ready: pin actions and container digest; verify initial run; check dependency audit; review branch protection; exercise a failing PR; and document the result with actual Actions links. Deployment is not part of this release.

References: https://docs.github.com/en/actions ; https://docs.github.com/en/code-security ; https://nextjs.org/docs ; https://pnpm.io/ ; https://github.com/gitleaks/gitleaks
