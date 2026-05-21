# Contributing to IAPEX Web Portal

## Workflow (GitHub Flow)

1. Create a **branch** from `main`
2. Make **commits** in English with [Conventional Commits](https://www.conventionalcommits.org/)
3. Open a **Pull Request (PR)**
4. Get **approval** from a maintainer
5. **Merge** via PR only

## Branch Naming

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feat/` | New features | `feat/facial-recognition` |
| `fix/` | Bug fixes | `fix/search-validation` |
| `refactor/` | Code improvements | `refactor/patient-service` |
| `docs/` | Documentation | `docs/api-endpoints` |
| `test/` | Tests | `test/search-algorithm` |

## Commit Convention

Use `type: subject` format in English:

| Type | Description | Example |
|------|-------------|---------|
| `feat:` | New feature | `feat: implement hybrid search` |
| `fix:` | Bug fix | `fix: correct similarity calculation` |
| `refactor:` | Code restructure | `refactor: modularize search logic` |
| `docs:` | Documentation | `docs: update installation guide` |
| `test:` | Add/modify tests | `test: add patient search tests` |

## PR Process

1. Keep `main` updated:
   ```bash
   git switch main
   git pull origin main
   ```
2. Create your branch:
   ```bash
   git switch -c feat/your-feature
   ```
3. Make small, frequent commits
4. Push and open a PR:
   ```bash
   git push -u origin feat/your-feature
   ```
5. In the PR description, include:
   - **What** — summary of changes
   - **Why** — justification
   - **How to test** — steps for reviewer
   - **Notes** — breaking changes, cross-service impact

## Merge Requirements

- [ ] Approval from at least one maintainer
- [ ] No conflicts with `main`
- [ ] Correct branch/commit naming
- [ ] Documentation updated (if applicable)

## Questions?

Open an [issue](https://github.com/iapex-org/web-app/issues) or contact any maintainer.
