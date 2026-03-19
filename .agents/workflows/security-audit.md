---
description: Run automated security scans for secrets and hardcoded credentials.
---

# 🛡️ Security Audit Workflow

Run this workflow before pushing code to verify there are no leaked secrets or obvious security flaws.

---

## 🚦 Pre-requisites

This workflow uses standard `grep` and does not require complex installations.

---

## 🏃‍♂️ Execution Steps

### 1. Scan for Secrets (API Keys)
Run a quick regex check for standard credentials.

// turbo
```bash
# Scan for OpenAI sk- keys, AWS AKIA keys, etc.
grep -rE "(sk-[a-zA-Z0-9]{32,}|AKIA[0-9A-Z]{16}|ghp_[a-zA-Z0-9]{36})" . --exclude-dir=.git --exclude-dir=node_modules
```

---

### 2. Verify `.gitignore` contains `.env`
Ensure secrets are not accidentally tracked!

// turbo
```bash
# Check if .env is ignored
grep -q "\.env" .gitignore && echo "✅ .env is ignored" || echo "⚠️ .env is NOT ignored!"
```

---

### 3. Check for Dangerous JavaScript Functions
Audit for `eval` or `setTimeout` with strings.

// turbo
```bash
# Check for eval()
grep -rn "eval(" . --exclude-dir=.git --exclude-dir=node_modules
```

---

> [!CAUTION]
> If any matches are found, **DO NOT COMMIT** until they are resolved or verified as safe (false positives).
