---
description: Conventional Commit Standards for Portfolio Project
---

# Conventional Commit Workflow

This workflow ensures all commits follow industry-standard Conventional Commits specification.

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Commit Types

### **Primary Types** (Most Used)

- **feat**: New feature or functionality
  - Example: `feat(hero): add animated typing effect`
  - Example: `feat(projects): implement project filtering`

- **fix**: Bug fix
  - Example: `fix(navbar): resolve mobile menu overflow`
  - Example: `fix(footer): correct terminal command parsing`

- **docs**: Documentation changes
  - Example: `docs: update README with installation guide`
  - Example: `docs(api): add JSDoc comments to utils`

- **style**: Code style changes (formatting, missing semicolons, etc.)
  - Example: `style: format code with prettier`
  - Example: `style(components): fix indentation`

- **refactor**: Code refactoring (no feature change or bug fix)
  - Example: `refactor(hero): extract button component`
  - Example: `refactor: migrate to TypeScript strict mode`

- **perf**: Performance improvements
  - Example: `perf(images): optimize image loading`
  - Example: `perf: implement lazy loading for components`

- **test**: Adding or updating tests
  - Example: `test(navbar): add unit tests for navigation`
  - Example: `test: increase coverage to 80%`

- **build**: Build system or external dependencies
  - Example: `build: upgrade next.js to 16.0`
  - Example: `build(deps): update framer-motion to latest`

- **ci**: CI/CD configuration changes
  - Example: `ci: add GitHub Actions workflow`
  - Example: `ci(vercel): configure deployment settings`

- **chore**: Maintenance tasks
  - Example: `chore: update .gitignore`
  - Example: `chore(deps): bump dependencies`

### **Secondary Types**

- **revert**: Revert a previous commit
  - Example: `revert: revert "feat: add dark mode toggle"`

- **security**: Security improvements
  - Example: `security: update dependencies with vulnerabilities`

## Scope Guidelines

Scopes should represent the area of the codebase being modified:

- `hero` - Hero section component
- `navbar` - Navigation component
- `footer` - Footer component
- `projects` - Projects section
- `bento` - Bento grid component
- `ui` - UI components
- `styles` - Styling changes
- `config` - Configuration files
- `deps` - Dependencies
- `api` - API routes
- `types` - TypeScript types

## Subject Guidelines

- Use imperative mood ("add" not "added" or "adds")
- Don't capitalize first letter
- No period at the end
- Maximum 50 characters
- Be concise but descriptive

✅ Good: `add responsive navigation menu`
❌ Bad: `Added responsive navigation menu.`

## Body Guidelines (Optional but Recommended)

- Separate from subject with blank line
- Explain **what** and **why**, not **how**
- Wrap at 72 characters
- Use bullet points for multiple changes

Example:
```
feat(projects): add project filtering functionality

- Implement filter by technology stack
- Add search by project name
- Include status filter (passing/failing/in-progress)
- Update UI to show active filters
```

## Footer Guidelines (Optional)

Use for:
- Breaking changes: `BREAKING CHANGE: <description>`
- Issue references: `Fixes #123`, `Closes #456`
- Co-authors: `Co-authored-by: Name <email>`

## Examples

### Simple Commit
```bash
git commit -m "feat(hero): add magnetic button effect"
```

### Detailed Commit
```bash
git commit -m "feat(projects): implement project status badges

- Add passing/failing/in-progress status indicators
- Include color-coded badges with icons
- Update project card layout to accommodate badges
- Add hover animations for status badges

Closes #42"
```

### Breaking Change
```bash
git commit -m "refactor(api)!: change API response structure

BREAKING CHANGE: API now returns data in nested format.
Update all API consumers to use response.data instead of direct response."
```

### Bug Fix
```bash
git commit -m "fix(navbar): resolve mobile menu z-index issue

The mobile menu was appearing behind the hero section on small screens.
Updated z-index from 10 to 50 to ensure proper layering."
```

### Documentation
```bash
git commit -m "docs: add contributing guidelines to README

- Include code style guide
- Add commit message conventions
- Document PR process
- Add code of conduct"
```

## Commit Workflow

### 1. Stage Changes
```bash
git add <files>
```

### 2. Check Status
```bash
git status
```

### 3. Commit with Conventional Format
```bash
git commit -m "<type>(<scope>): <subject>

<body>

<footer>"
```

### 4. Push to Remote
```bash
git push
```

## Quick Reference

| Type | When to Use | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(hero): add scroll animation` |
| `fix` | Bug fix | `fix(navbar): correct link routing` |
| `docs` | Documentation | `docs: update API documentation` |
| `style` | Formatting | `style: apply prettier formatting` |
| `refactor` | Code restructure | `refactor: extract reusable hooks` |
| `perf` | Performance | `perf: optimize image loading` |
| `test` | Tests | `test: add component unit tests` |
| `build` | Dependencies | `build: upgrade to React 19` |
| `ci` | CI/CD | `ci: add automated testing` |
| `chore` | Maintenance | `chore: update .gitignore` |

## Benefits

✅ **Automated Changelog Generation**
✅ **Clear Project History**
✅ **Easier Code Reviews**
✅ **Semantic Versioning Support**
✅ **Better Team Communication**
✅ **Professional Standards**

## Tools (Optional)

- **commitizen**: Interactive commit message builder
- **commitlint**: Validate commit messages
- **husky**: Git hooks for commit validation
- **standard-version**: Automated versioning and changelog

## Installation (Optional)

```bash
# Install commitizen for interactive commits
npm install -g commitizen cz-conventional-changelog

# Use commitizen
git cz
```

---

**Remember**: Good commit messages are a gift to your future self and your team! 🎁
