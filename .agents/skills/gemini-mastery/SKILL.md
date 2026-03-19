---
name: gemini-mastery
description: Guidelines and prompt strategies for leveraging Gemini 3.1 Pro and Flash capabilities to the fullest. Triggers when the user asks to use advanced prompt strategies, verify massive contexts, or choose between Pro and Flash models.
---

# 🧠 Gemini 3.1 Mastery Skill

This skill provides advanced guidelines for using **Gemini 3.1 Pro** and **Gemini 3.1 Flash** effectively within the Antigravity agent harness.

## 🚀 Capabilities

### 📏 1. Massive Context Windows
Gemini 3.1 models support massive context windows (up to 1M+ tokens). Use this to analyze entire codebases or long documentation threads.

-   **Strategy**: Instead of reading files one-by-one, aggregate complex related files when doing architectural analysis if possible (though check your context limit tools).
-   **Structure**: Group your questions logically and specify "Look at File A and File B to answer X."

### 👁️ 2. Multimodal Search & Generation
Gemini 3.1 excels at visual reasoning.

-   **Searching**: Use image-based search if building UIs.
-   **Generating**: Use `generate_image` or external APIs to create UI mockups or icons.

### ⚡ 3. Fast Inference vs Deep Reasoning
Understand the trade-offs between Flash and Pro.

-   **Flash**: Best for rapid iterations, simple edits, quick searches, and batch tasks.
-   **Pro**: Best for complex reasoning, architectural refactoring, and subtle bugs.

---

## 🛠️ Prompting Strategies

### Task Breakdown
Always break down complex tasks into a `task.md` list. Gemini works best when it can attack a single sub-problem at a time.

### Context Setting
When asking Gemini to solve a problem, use the **Context-First** pattern:
1.  State the **Goal**.
2.  Provide the **Context** (relevant files, previous errors).
3.  Define the **Constraints** (tech stack, style guides).
4.  Specify the **Output format** (JSON, Markdown, artifact).

---

## 📝 Best Practices

-   ✅ **Always verify**: Large language models can hallucinate. Verify with terminal commands or linting.
-   ✅ **Check knowledge items first**: Local knowledge prevents redundant web searches.
-   ✅ **Keep it clean**: Clear, concise prompts yield better results than verbose ones.
