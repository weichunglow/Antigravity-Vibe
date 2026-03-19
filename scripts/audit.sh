#!/bin/bash

echo "🕵️ Running Antigravity Vibe Workspace Audit..."

# 1. Scan for Secrets (API Keys)
echo "🔍 Scanning for secrets..."
grep -rE "(sk-[a-zA-Z0-9]{32,}|AKIA[0-9A-Z]{16}|ghp_[a-zA-Z0-9]{36})" . --exclude-dir=.git --exclude-dir=node_modules --exclude-dir=.agents/scratch

# 2. Verify .gitignore contains .env
echo "🔍 Checking .gitignore..."
grep -q "\.env" .gitignore && echo "✅ .env is ignored" || echo "⚠️ .env is NOT ignored!"

# 3. Check for Dangerous JavaScript Functions
echo "🔍 Checking for eval()..."
grep -rn "eval(" . --exclude-dir=.git --exclude-dir=node_modules

# 4. Check for curating Typography
echo "🔍 Checking for curated typography (Inter/Outfit/Roboto)..."
grep -rnE "(Inter|Outfit|Roboto)" . --exclude-dir=.git --exclude-dir=node_modules

echo "✅ Audit Complete!"
