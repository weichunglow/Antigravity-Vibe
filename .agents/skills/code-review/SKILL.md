---
name: Code Review Agent Skill
description: Instructions for how AI agents should perform code reviews and quality gating.
---

# 🕵️ Code Review Agent Skill

This skill provides modular instructions for AI agents to perform structural and style reviews on Pull Requests or local file changes.

---

## 🚦 Review Checklist

### 1. 🔏 Security Breach Check
-   **No Hardcoded Secrets**: Scan for `sk-`, personal paths `/Users/...`.
-   **Unencrypted Passwords**: Detect any `.env` commits.

### 2. 🎨 Aesthetic Alignment (Web Vibe)
-   **HSL Over Ad-Hoc hex**: Verify `hsl()` variables.
-   **Semantic Markup**: Check for `<main>`, `<section>`, unique IDs.

### 3. 🏗️ Architectural Separation
-   **Drift Detection**: Verify business logic doesn't bleed into UI files.

---

## 🛠️ Performing a Review

When asked to review a change, use `diff` or `view_file` to analyze chunks.

### Propose Diffs
Always present your findings in standard diff format for visual clarity!

```diff
-old_broken_code()
+new_fixed_code()
```

---

> [!TIP]
> Standardize on constructive feedback. If a line is unoptimized, provide a drop-in replacement snippet rather than abstract descriptions.
