---
description: Standard Codebase Audit for Antigravity Workspace
---

# 🕵️ Standard Codebase Audit Workflow

Use this workflow to quickly assess the structure, health, and dependencies of a workspace.

---

// turbo
### 1. File & Directory Exploration
List the top-level files to understand the project type (Python, Node, Go).

```bash
ls -la
```

---

// turbo
### 2. Dependency Discovery
Look for lockfiles and configurations. Use `view_file` on them to understand external libraries.

-   Node: `package.json`, `pnpm-workspace.yaml`
-   Python: `requirements.txt`, `Pipfile`, `pyproject.toml`
-   Rust: `Cargo.toml`

```bash
find . -maxdepth 2 -name "package.json" -o -name "requirements.txt" -o -name "Pipfile"
```

---

// turbo
### 3. Search for Anti-Patterns
Scan for dangerous defaults or forgotten TODOs using `grep_search` or terminal tools.

```bash
grep -rnI "TODO" .
grep -rnI "FIXME" .
```

---

// turbo
### 4. Code Quality & Lint Checks
Run standard linters if available in the repo. Look at `package.json` scripts if Node.

```bash
npm run lint
```

---

> [!NOTE]
> Review the findings and create a summary `knowledge_item` if you find persistent architectural patterns!
