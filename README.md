# SitecoreAI CI/CD Quality Gates

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Next.js](https://img.shields.io/badge/Next.js-Framework-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-blue)
![DevSecOps](https://img.shields.io/badge/DevSecOps-Quality%20First-orange)

An open-source CI/CD reference implementation designed to help SitecoreAI and Next.js development teams establish consistent engineering standards, automated quality gates, and secure software delivery practices.

## Why This Repository?

Building a modern digital experience platform is not just about delivering features. It is equally important to ensure that every code change meets the expected quality, security, and maintainability standards.

This repository demonstrates how teams can introduce automated validation throughout the development lifecycle, from a developer's first commit to production build readiness.

The objective is simple: **detect issues early, reduce delivery risks, and build quality into the engineering process.**

## Key Features

- Automated pre-commit and pre-push validation
- ESLint and Prettier integration
- TypeScript type checking
- Unit testing using Vitest
- Automated code coverage enforcement
- Secret and credential detection
- Dependency vulnerability scanning
- GitHub Actions CI workflows
- CodeQL static security analysis
- Gitleaks secret scanning
- Dependabot configuration
- Production build validation
- Application health checks and smoke testing
- Pull request governance

## Quality Gates

| Quality Gate | Pre-Commit | Pre-Push | CI |
|---|---|---|---|
| Secret detection | Yes | — | Yes |
| Code formatting | Yes | — | Yes |
| ESLint validation | Yes | — | Yes |
| TypeScript validation | — | Yes | Yes |
| Unit testing | — | Yes | Yes |
| Code coverage | — | — | Yes |
| Dependency auditing | — | — | Yes |
| Security analysis | — | — | Yes |
| Production build | — | — | Yes |
| Smoke testing | — | — | Yes |

The sample enforces an 85% code coverage threshold for its content-processing boundary.

Local Git hooks provide early developer feedback, while GitHub Actions provides independent validation. Required status checks and branch protection should be configured to enforce merge policies.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework |
| React | Component development |
| TypeScript | Type safety |
| pnpm | Dependency management |
| Vitest | Unit testing |
| ESLint | Code quality |
| Prettier | Code formatting |
| Husky | Git hooks |
| lint-staged | Staged-file validation |
| GitHub Actions | Continuous integration |
| Gitleaks | Secret detection |
| CodeQL | Static security analysis |
| Dependabot | Dependency maintenance |

## Getting Started

### Prerequisites

- Node.js 22
- Git
- pnpm 10.28.2

### Clone and Install

```bash
git clone https://github.com/shatrughnakumar/sitecore-ai-cicd-quality-gates.git

cd sitecore-ai-cicd-quality-gates

npm install --global pnpm@10.28.2

pnpm install --frozen-lockfile
```

### Run the Application

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

### Execute Quality Checks

```bash
pnpm check
```

### Security Audit

```bash
pnpm audit
```

### Production Build

```bash
pnpm build
```

### Runtime Validation

Start the production application:

```bash
pnpm start
```

In a separate terminal:

```bash
pnpm smoke
```

## Shift-Left Security

Security should be part of everyday development rather than a separate activity performed at the end of a release.

This implementation demonstrates how dependency auditing, secret detection, static analysis, and automated validation can help identify potential security risks earlier in the delivery lifecycle.

## Who Can Benefit?

- Sitecore developers
- Technical and Solution Architects
- Next.js development teams
- DevOps engineers
- Engineering leads
- Teams modernizing traditional CMS implementations

The repository can be used as a learning resource, an engineering reference, or a starting point for establishing project-specific quality standards.

## Documentation

- [Architecture Overview](docs/architecture.md)
- [Quality Gates and Failure Scenarios](docs/quality-gates.md)
- [GitHub Configuration](docs/github-setup.md)
- [Validation Status](docs/validation.md)
- [Contribution Guidelines](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)

## Roadmap

- [x] Next.js application foundation
- [x] Local Git quality gates
- [x] Automated CI workflows
- [x] Dependency and security scanning
- [x] Unit testing and coverage enforcement
- [ ] Sitecore Content SDK integration
- [ ] SitecoreAI deployment automation
- [ ] Environment-based deployment approvals
- [ ] End-to-end testing with Playwright
- [ ] Automated accessibility testing
- [ ] AI-assisted code reviews
- [ ] Release and rollback strategies

## Contributing

Community contributions, suggestions, architectural discussions, and improvements are welcome.

Feel free to open an issue or submit a pull request.

## About the Project

This project is an independent community contribution focused on engineering excellence, DevSecOps, and modern digital experience architecture.

The current implementation uses mock content and does not require a Sitecore tenant, API credentials, or a paid service. Live Sitecore Content SDK integration and deployment automation are planned enhancements.

## Author

**Shatrughna Kumar**

Technical Architect | Digital Experience Platforms | Software Architecture | Sitecore | .NET | AI

- [Technical Blog](https://www.shatrughnakumar.com/)
- [GitHub](https://github.com/shatrughnakumar)

## License

This project is licensed under the MIT License.

Sitecore is a trademark of its respective owner. This is an independent community project and is not affiliated with or endorsed by Sitecore.

---

**Quality is not a final checkpoint. It is an engineering practice.**