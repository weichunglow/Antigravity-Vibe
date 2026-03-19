---
name: Continuous Learning & Instinct Selection
description: Guidelines for extracting lessons and patterns from an AI session to update local rules.
---

# 🧠 Continuous Learning Skill

This skill allows the agent to extract automated lessons and "Instincts" from recent workspace edits and commands. Use this to ensure we don't repeat mistakes!

---

## 🛠️ When to Use

Use this skill:
-   At the **end of a session** to summarize what was learned.
-   After a **large bug fix** to document the root cause.
-   When **new tools are introduced** to capture usage patterns.

---

## 📋 Steps to Learn

### 1. Identify the Trigger
What went wrong? What was fixed?
-   Did a command fail due to pathing issues?
-   Did a build break because of a missing dependency?

### 2. Formulate the "Instinct"
An instinct is a short, punchy rule.
-   *Bad*: "We should make sure to check if the path is correct before running commands."
-   *Good*: "Check `Cwd` against the active workspace before running shell commands."

### 3. Persist the Lesson
Do not let the lesson die in the prompt window.

-   **Option A: Standard Rules** (Human-readable): Add to `rules/common/general.md`.
-   **Option B: Automated JSON** (Machine-readable): Append to `.agents/scratch/instincts.json`.

---

## 📝 Example Extraction

> [!NOTE]
> Suppose we failed to run a command because it wasn't in the active workspace. The instinct extracted is "Verify command paths against active workspace URIs".

Updating `rules/common/general.md`:
```diff
+ 4. **Workspace Isolation**: Verify you are in the correct active workspace before running commands.
```

---

> [!TIP]
> Keep instincts **atomic**. If you have 5 lessons, create 5 single-line rules rather than one massive paragraph.
