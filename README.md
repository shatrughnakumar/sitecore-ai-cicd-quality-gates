# SitecoreAI CI/CD Quality Gates

An independent, community-oriented reference for engineering quality in SitecoreAI-oriented Next.js teams. This is a standalone demo with mock content, not an official Sitecore product or a connected Content SDK application. No tenant, API key, or paid service is needed.

## Quick start (Windows PowerShell or Bash)

Install Git and Node.js 22, then run these commands inside this folder (initialize Git only if it is not already a repository):

```sh
git init -b main
npm install --global pnpm@10.28.2
pnpm install --no-frozen-lockfile
pnpm format
pnpm check
git add .
git commit -m "chore: initialize quality gates lab"
pnpm dev
```

Open http://localhost:3000. Stop the dev server before testing a production build.

**First-run requirement:** the distribution does not contain a generated lockfile because registry access was unavailable during packaging. The install command creates `pnpm-lock.yaml`. Review and commit it; all subsequent installs use `pnpm install --frozen-lockfile`. CI intentionally fails without it. `pnpm format` normalizes the sample with the installed formatter. Review its changes before committing. Never substitute a fabricated lockfile.

## Publish to GitHub

Create an empty public GitHub repository named `sitecore-ai-cicd-quality-gates` (no initial README/license). Then:

```sh
git remote add origin https://github.com/YOUR-USERNAME/sitecore-ai-cicd-quality-gates.git
git push -u origin main
```

Review the Actions tab. Configure branch protection using [the setup guide](docs/github-setup.md). If using an existing repository, clone it instead and copy these files into it; do not overwrite existing work without review.

## Quality checks

| Gate | Local commit | Local push | CI |
| --- | --- | --- | --- |
| Staged secret guard | Yes | No | All tracked files |
| Formatting and lint | Staged source | No | Full source |
| TypeScript | No | Yes | Yes |
| Unit and scanner tests | No | Yes | Yes |
| Coverage (85% on content boundary) | No | No | Yes |
| Dependency audit (high/critical) | No | No | Yes |
| Production build and smoke tests | No | No | Yes |
| Gitleaks history, dependency review, CodeQL | No | No | Security workflow |

Run `pnpm check` for formatting, lint, types, coverage, scanner tests and build. Run `pnpm audit` separately (network required). Use `pnpm start` in one terminal and `pnpm smoke` in another for runtime checks. The coverage target covers the mock content boundary only, not all UI or integration behavior.

## Architecture and adoption

- [Architecture](docs/architecture.md)
- [Quality gates and failure lab](docs/quality-gates.md)
- [GitHub setup](docs/github-setup.md)
- [Validation status](docs/validation.md)
- [Contributing](CONTRIBUTING.md)

Phase 1–3 scope: application, local gates, CI and security checks. Sitecore tenant deployment, hosting, environment approval and actual SDK integration are future work. This repository does not deploy anything or use generative AI for code review.

MIT licensed. Sitecore is a trademark of its respective owner; this project is unaffiliated.
