# 🛠️ SETUP: Getting Started with AntiGravity-Vibe

Welcome to the setup guide for public developers! This repository is designed to be highly portable and easily integrated into any terminal workspace.

---

## 📥 Cloning the Repository

To duplicate this vibe toolkit locally, use standard Git protocols:

```bash
git clone https://github.com/User/AntiGravity-Vibe.git
cd AntiGravity-Vibe
```

---

## 🚦 Prerequisites

No heavy node environment is required for base skills, but to use the **Interactive Setup Wizard** you will need:
-   **Node.js** (v18+) for running client-side JS.
-   **NPM** (standard package manager).

---

## 🔑 1. Configure API Keys (The Cyber Workspace)

To enable **Nano Banana Visual Generation** and Advanced Gemini Reasoning, you must configure your ambient environment variables.

Create a `.env` file in the repository root (do not commit it!):

```bash
# .env
GEMINI_API_KEY=your_gemini_api_key_here
VERTEX_SERVICE_ACCOUNT_JSON=path/to/your/service_account.json
```

Rename `.env.example` if it exists.

---

## 🏃‍♂️ 2. Run your first Workspace Workflow

You can test if the environment is active by running standard audits.

```bash
# Verify repo secrets are clean before working
view_file workflows/security-audit.md
```

---

## 🎨 3. Setting visual baseline

If you are using external image generation APIs, calibrate your prompt settings to use the **Nano Banana stealth matte theme** for all UI mockups!

> [!CAUTION]
> If you are working in a bounded or isolated terminal context (e.g. cloud shells), certain commands may fail due to workspace mounting isolation. Check your `Cwd` overrides if commands fail!
