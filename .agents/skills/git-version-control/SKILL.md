---
name: git-version-control
description: Manage Git version control, atomic commits, conventional commit syntax, branch strategies, and safe rollback/recovery procedures for web projects.
---

# Git & Version Control Skill

Operational runbook for clean version control, atomic commits, branch hygiene, and safe rollbacks.

## 1. Conventional Commits Standard

Format: `<type>(<optional-scope>): <description>`

Common Types:
- `feat`: New feature or page (e.g., `feat(hero): add emergency hours callout and click-to-call CTA`)
- `fix`: Bug fix (e.g., `fix(a11y): correct contrast ratio on secondary button text`)
- `perf`: Performance improvement (e.g., `perf(images): add priority and avif format to hero banner`)
- `style`: Visual styling, design token adjustments without logic changes
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `docs`: Documentation or README updates
- `chore`: Build config, dependencies, or tool settings (`chore(tailwind): add brand color palette`)

Rules:
- Write in the imperative mood ("add", "fix", "update", not "added" or "adds").
- Keep subject line under 72 characters.
- Explain "why" in the commit body if a decision is non-obvious.

## 2. Atomic Commits Discipline

- Every commit should represent a single logical unit of work.
- Do not mix dependency upgrades, style changes, and feature code in a single commit.
- Before committing, verify the staged diff:
  ```bash
  git diff --staged
  ```

## 3. Rollback & Recovery Runbook

- **Safe Rollback of a Published Commit**:
  Create a new commit that inverts the changes without rewriting history:
  ```bash
  git revert <commit-hash>
  ```
- **Discard Uncommitted Local Changes**:
  - Discard all modified files in working tree:
    ```bash
    git restore .
    ```
  - Unstage a file without losing edits:
    ```bash
    git restore --staged <file-path>
    ```
- **Review Commit History**:
  ```bash
  git log --oneline -n 10
  ```
- **Emergency Recovery (Undo accidental reset)**:
  ```bash
  git reflog
  git checkout <reflog-hash>
  ```

## 4. Pre-Deployment Cleanliness

- Ensure `.gitignore` includes:
  ```text
  node_modules/
  .next/
  out/
  .env*.local
  .DS_Store
  *.log
  ```
- Verify `git status` shows no stray artifacts or uncommitted secrets before building or deploying.
