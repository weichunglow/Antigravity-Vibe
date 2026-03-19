#!/bin/bash

echo "🚀 Antigravity Vibe Workspace Deployment..."

if [ "$#" -lt 1 ]; then
    echo "Usage: ./scripts/deploy.sh [gcp|aws|azure] [target_name]"
    echo "Example: ./scripts/deploy.sh gcp my-vibe-service"
    exit 1
fi

PROVIDER=$1
TARGET=$2

if [ "$PROVIDER" == "gcp" ]; then
    echo "☁️ Deploying to GCP Cloud Run..."
    gcloud run deploy "$TARGET" --source . --region us-central1 --allow-unauthenticated
elif [ "$PROVIDER" == "aws" ]; then
    echo "🌩️ Deploying to AWS Amplify..."
    aws amplify create-app --name "$TARGET" --repository "https://github.com/weichunglow/Antigravity-Vibe.git"
elif [ "$PROVIDER" == "azure" ]; then
    echo "🔷 Deploying to Azure Static Web Apps..."
    az staticwebapp create --name "$TARGET" --resource-group "Antigravity-RG" --source "https://github.com/weichunglow/Antigravity-Vibe.git" --branch main
else
    echo "❌ Unknown provider: $PROVIDER"
    exit 1
fi

echo "✅ Deployment Command Issued!"
