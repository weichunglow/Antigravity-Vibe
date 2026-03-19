#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = process.cwd();
const sourceDir = path.resolve(__dirname, '..');

console.log('🚀 Initializing Antigravity Vibe environment...');

// Helper to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        copyDir(srcPath, destPath);
      }
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Copy .agents and rules
console.log('📦 Copying .agents and rules templates...');
const itemsToCopy = ['.agents', 'rules'];

itemsToCopy.forEach(item => {
  const srcPath = path.join(sourceDir, item);
  const destPath = path.join(targetDir, item);
  if (fs.existsSync(srcPath)) {
    copyDir(srcPath, destPath);
    console.log(`✅ Copied ${item}`);
  } else {
    console.warn(`⚠️ Warning: ${item} source not found!`);
  }
});

// 2. Create .cursorrules with MCP and Typography
console.log('⚙️ Configuring .cursorrules...');
const cursorrulesContent = `# 🚀 Antigravity Vibe Workspace Rules

## 🎨 Typography & Styles
-   **Typography**: Default to modern curated fonts (Inter, Roboto, Outfit). No browser defaults.
-   **Colors**: Use curated HSL tokens for dynamic UI.
-   **Aesthetics**: Sleek dark modes, glassmorphism, vibrant gradients.

## 🔌 Model Context Protocol (MCP) Live Reference
This workspace uses MCP to query fresh documentation and external services.

\`\`\`json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@context7/mcp-server"]
    }
  }
}
\`\`\`

## 🚦 PR Checks & Verification
-   Run \`scripts/audit.sh\` before pushing code.
`;

fs.writeFileSync(path.join(targetDir, '.cursorrules'), cursorrulesContent);
console.log('✅ Created .cursorrules');

console.log('\n🎉 Setup Complete! To get started:');
console.log('1. Open this workspace in Cursor or your standard editor.');
console.log('2. Feed the prompt in .cursorrules to Gemini to load the context.');
