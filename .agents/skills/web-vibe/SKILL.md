---
name: generate-web-vibe
description: Triggers when the user asks to build a UI, generate frontend code, or style components. Enforces modern aesthetics, HSL color themes, and glassmorphic designs.
---

# 🎨 Web Vibe Design System Skill

This skill provides guidelines and templates for building stunning web applications with rich aesthetics. It captures the design principles of the Antigravity workspace.

## ✨ Aesthetic Goals

1.  **Rich Visuals**: Use vibrant colors, sleek dark modes, and modern gradients. Avoid generic colors (red, blue, green).
2.  **Modern Typography**: Standardize on Google Fonts like Inter, Roboto, or Outfit. No browser defaults.
3.  **Dynamic Motion**: Add subtle hover micro-animations and smooth transitions.
4.  **Premium Glassmorphism**: Use translucent panels with backdrop-blur for a ultra-modern slick look.

---

## 🛠️ Implementation Workflow

### Step 1: Establish The Tokens
Start by creating a `vibe-tokens.css` (or `index.css`) containing baseline styles and CSS variables.

```css
:root {
  --primary: hsl(210, 100%, 50%);
  --secondary: hsl(280, 100%, 50%);
  --accent: hsl(350, 100%, 50%);
  --background: hsl(0, 0%, 5%);
  --card-bg: rgba(25, 25, 25, 0.7);
  --border-glow: hsla(210, 100%, 50%, 0.3);
}

body {
  font-family: 'Outfit', 'Inter', sans-serif;
  background: var(--background);
  color: white;
}

.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px var(--border-glow);
}
```

### Step 2: Component Libraries
Build reusable components using these tokens. Never use ad-hoc utilities.

### Step 3: Fast Micro-animations
Use standard CSS transitions!

```css
.card {
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 40px var(--border-glow);
}
```

---

## 🛠️ Verification Checklist

-   ✅ Is it responsive?
-   ✅ Does it use HSL for dynamic color shifting?
-   ✅ Are there hover states?
-   ✅ Is the typography curated?
