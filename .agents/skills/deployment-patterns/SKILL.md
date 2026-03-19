---
name: Multi-Cloud & Local Deployment Patterns
description: Instructions for deploying web applications to GCP, AWS, Azure, or local environments.
---

# 🚀 Multi-Cloud & Local Deployment Patterns

This skill provides modular snippets and walkthroughs for deploying applications across multiple clouds and local staging.

---

## ☁️ Google Cloud Platform (GCP)

### 🐳 1. Cloud Run (Serverless Container)
Best for Next.js or FastAPI dockerized apps.

```bash
# Verify credentials are set
gcloud auth login
gcloud config set project [YOUR_PROJECT_ID]

# Deploy
gcloud run deploy [SERVICE_NAME] --source . --region [REGION] --allow-unauthenticated
```

---

## 🌩️ Amazon Web Services (AWS)

### 🗃️ 1. Amplify (Static / Next.js app)
Best for React single-page frontend.

```bash
aws amplify create-app --name [APP_NAME] --repository [REPO_URL]
aws amplify create-branch --app-id [APP_ID] --branch-name main
```

### ⚡ 2. App Runner (Serverless Container)
Equivalent to GCP Cloud Run.

---

## 🔷 Microsoft Azure

### 🏗️ 1. Static Web Apps (SWA)
Best for lightweight web apps.

```bash
az staticwebapp create --name [APP_NAME] --resource-group [RG_NAME] --source [REPO_URL] --branch main --location [REGION]
```

### 🚢 2. App Service (Full-stack)

---

## 🏠 Local & Bare Metal

### 📦 1. Docker Compose
Standardize your local environments without polling NPM.

```yaml
# docker-compose.yml
services:
  app:
    build: .
    ports:
      - "5173:5173"
```

---

> [!CAUTION]
> Ensure all `.env` files and unencrypted secrets are placed in `.dockerignore` or `.gitignore` before building images!
