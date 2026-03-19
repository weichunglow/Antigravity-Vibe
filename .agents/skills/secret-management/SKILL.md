---
name: secret-management
description: Guidelines for securing sensitive credentials and managing environment variables. Triggers when the user asks to secure sensitive credentials, manage environment variables, or scan for secrets.
---

# 🔐 Secret Management Skill

This skill provides guidelines for securing API keys, database URLs, and cloud secrets within an AI workspace.

---

## 🛠️ Principles

### 1. Zero Exposure in Source Code
Never commit real secrets (`sk-`, passwords) to Git.

### 2. Standardize `.env.example`
Always create an example template for local development. Make sure variables are placeholder values like `YOUR_KEY_HERE`.

```bash
# .env.example
DATABASE_URL=postgres://user:password@localhost:5432/db
GEMINI_API_KEY=your_key_here
```

### 3. Verification Gating
Run `grep_search` or secret detection before pushing to remote repository.

---

## ☁️ Cloud Providers

### GCP Secret Manager
Use the direct GCP Secret Manager tool if available. Do not store secrets in standard Cloud Run environment variables unless encrypted.

#### Accessing Secrets via Node.js:
```javascript
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const client = new SecretManagerServiceClient();

async function accessSecret() {
  const [version] = await client.accessSecretVersion({ name: 'projects/MY_PROJECT_ID/secrets/MY_SECRET/versions/latest' });
  return version.payload.data.toString();
}
```

---

> [!CAUTION]
> If you detect active secrets in git logs, immediately deactivate them and rotate!
