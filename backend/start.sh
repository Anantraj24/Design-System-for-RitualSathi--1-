#!/bin/bash

echo "=========================================="
echo "🚀 Starting RitualSathi Backend Server"
echo "=========================================="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Warning: .env file not found!"
    echo "📝 Creating .env from .env.example..."
    cp .env.example .env
    echo ""
    echo "❗ IMPORTANT: Edit backend/.env and add your OpenAI API key!"
    echo "   Get your key from: https://platform.openai.com/api-keys"
    echo ""
    read -p "Press Enter after you've added your API key to continue..."
fi

# Check if node_modules exists
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    pnpm install || npm install
    echo ""
fi

# Start the server
echo "🚀 Starting server..."
pnpm run dev || npm run dev
