# AntiGravity-Vibe: The Advanced Toolkit for Gemini 3.1 & Antigravity

Welcome to **AntiGravity-Vibe**, a performance optimization system and developer toolkit designed specifically for **Antigravity** (the AI Agent) powered by **Gemini 3.1**.

Inspired by `everything-claude-code`, this repository goes beyond static prompts. It leverages **executable skills**, **reproducible workflows**, and **rich design aesthetics** to supercharge your development experience.

---

## 🚀 Key Features

### 🧠 1. Gemini 3.1 Mastery
Optimized routines for leveraging Gemini's strengths:
-   **Massive Context Handling**: Strategies for codebase analysis.
-   **Multimodal Reasoning**: Tips for image/video understanding.
-   **Fast Responses**: Using `gemini-3-flash` for rapid iterations vs `gemini-3-pro` for deep reasoning.

### 🎨 2. Web Vibe (Rich Aesthetics)
Guidelines and templates for building stunning web applications:
-   Modern typography (Inter/Outfit).
-   Vibrant color palettes (hsl themes).
-   Micro-animations and smooth transitions.
-   Zero-dependency layouts (Vanilla CSS).

### 🛠️ 3. Reproducible Workflows
Terminal-ready workflows for standard tasks:
-   `Standard Audit`: Analyze codebase health.
-   `Deploy CloudRun`: Fast path to production.

### 🔌 4. MCP (Model Context Protocol)
Connect to external data sources and documentation hubs.
-   **Live Reference**: Use `context7` for up-to-date library context.
-   **Machine-readable schemas**: Standard `mcp-config.json` templates.

---

## 📂 Repository Structure

```text
├── .agents/
│   ├── skills/          # Executable skills (markdown + scripts)
│   │   ├── gemini-mastery/
│   │   └── web-vibe/
│   └── workflows/       # Reproducible terminal workflows
│       └── standard-audit.md
├── rules/               # Static linting and styling rules
└── README.md
```

## 🛠️ Usage

### Skills
Drop these skills into your `.agents/skills/` directory to enable advanced capabilities. Use `view_file` to read their instructions.

### Workflows
Use `view_file` on `workflows/*.md` to see step-by-step instructions for complex tasks. Use standard tools to execute them.

---

## 🤖 How to use this Toolkit (For Humans & AI Agents)

This repository is designed to be **ingested** by AI agents to calibrate their behavior!

### 🧑‍💻 1. For Human Developers
Use this repository as a **Shared Style Contract** between you and any AI agent you hire in the future.
-   **Onboarding fresh sessions**: Instead of re-explaining HSL vs hex preferences, point agents to the `rules/` directory or `README.md`.
-   **Standardizing aesthetics**: Inform the agent to use prompt keywords from `architecture-design/SKILL.md` to get consistent glassmorphic results.

### 🕵️ 2. For AI Agents (Ingestion Mechanism)
Agents utilize this toolkit dynamically:
-   **Context Discovery RAG**: Agents run `grep_search` or `view_file` on skills when encountering unknown tasks (e.g., choosing database tools).
-   **Hard Injection (System Directives)**: If your IDE harness supports it (e.g. Claude Code, Cursor), append these rules automatically to the startup config!

> [!TIP]
> When starting a new conversation, make your very first prompt:
> *"Analyze the `.agents/` and `rules/` directories to understand the local styles and coding conventions of this workspace before proposing changes."*

---

## 🤝 Contributing

Feel free to open PRs for new skills or workflows!

> [!TIP]
> Always check for existing Knowledge Items (KIs) before proposing new skills to avoid redundant work.
