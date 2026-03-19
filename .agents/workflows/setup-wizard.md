---
description: Interactive wizard to scaffold new web applications using standard frameworks.
---

# 🧙 Interactive Setup Wizard

This workflow guides you through setting up a new project stack using standard frameworks (Next.js, Vite) while adhering to **Web Vibe** aesthetics.

---

## 🚦 Phase 1: Exploration & Help

Before initializing a new app, check the available options to ensure headless non-interactive mode.

// turbo
```bash
npx --help create-next-app
```

---

## 🏃‍♂️ Phase 2: Scaffolding a Vite App (Fast + React)

For rapid UI development, use Vite + React with non-interactive flags.

// turbo
```bash
npx -y create-vite@latest ./ -- --template react
```

---

## 🚀 Phase 3: Scaffolding a Next.js App (Server-Side)

For full-stack SaaS apps, use Next.js App Router.

// turbo
```bash
npx -y create-next-app@latest ./ --ts --tailwind false --eslint --app --src-dir false --import-alias "@/*" --use-npm
```

---

## 🎨 Phase 4: Applying Web Vibe Baseline

Once the project is scaffolded, immediately override styles with the standard **Web Vibe** theme.

1.  Create `index.css` or edit existing baseline layout.
2.  Import standard HSL tokens.

---

> [!CAUTION]
> Ensure you are running in the correct target directory before initializing scaffolding, or use `./` as the path to avoid nested folder confusion.
