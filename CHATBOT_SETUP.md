# RitualSathi AI Chatbot Setup Guide

This guide will help you set up and run the Sathi Assistant AI chatbot feature.

## Overview

Sathi Assistant is an AI-powered chatbot integrated into RitualSathi that helps users:
- Plan Indian ceremonies (weddings, puja, annaprashan, etc.)
- Discover vendors from our mock database
- Get budget recommendations
- Understand the booking and payment flow
- Track mock bookings

## Architecture

The chatbot uses a **secure backend architecture**:

```
User → Frontend (React) → Backend API (Express) → OpenAI API
```

**Security**: The OpenAI API key is ONLY stored in the backend server, never exposed to the frontend.

## Prerequisites

1. **Node.js** (v18 or higher)
2. **OpenAI API Key** - Get one from https://platform.openai.com/api-keys
3. **pnpm** or **npm** package manager

## Step 1: Backend Setup

### 1.1 Navigate to backend directory

```bash
cd backend
```

### 1.2 Install dependencies

```bash
pnpm install
# or
npm install
```

### 1.3 Create environment file

```bash
cp .env.example .env
```

### 1.4 Configure OpenAI API Key

Edit `backend/.env` and add your OpenAI API key:

```env
OPENAI_API_KEY=sk-your-actual-openai-api-key-here
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**How to get an OpenAI API Key:**
1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Name it "RitualSathi Chatbot"
5. Copy the key and paste it in your `.env` file

### 1.5 Start the backend server

```bash
pnpm run dev
# or
npm run dev
```

You should see:

```
==================================================
🚀 RitualSathi Backend API Server
==================================================
📡 Server running on: http://localhost:3001
🌍 Environment: development
🤖 OpenAI API: Configured ✓
==================================================
```

**Keep this terminal running!**

## Step 2: Frontend Setup

### 2.1 Open a new terminal and navigate to project root

```bash
cd /workspaces/default/code
```

### 2.2 Create frontend environment file (if not exists)

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_URL=http://localhost:3001
```

### 2.3 Start the frontend dev server

```bash
pnpm run dev
# or
npm run dev
```

## Step 3: Test the Chatbot

1. **Open the app** in your browser at `http://localhost:5173`

2. **Navigate to Profile screen**
   - Click on the "Profile" tab in the bottom navigation

3. **Click "Ask Sathi Assistant"**
   - You'll see a prominent orange gradient card
   - Click it to open the chatbot

4. **Try quick suggestions** or type your own message:
   - "Plan my wedding"
   - "Find pandit"
   - "Suggest budget"
   - "Help me with UPI payment"

5. **Expected behavior:**
   - User message appears on the right
   - Typing indicator shows (three bouncing dots)
   - AI response appears on the left
   - Conversation history is maintained

## Troubleshooting

### Problem: "Cannot connect to server" error

**Solution:**
1. Make sure the backend server is running on port 3001
2. Check `backend/.env` has correct `OPENAI_API_KEY`
3. Check frontend `.env` has correct `VITE_API_URL`
4. Restart both servers

### Problem: "Invalid OpenAI API key" error

**Solution:**
1. Verify your OpenAI API key is correct
2. Make sure you have credits in your OpenAI account
3. Check for any trailing spaces in the `.env` file

### Problem: Backend won't start

**Solution:**
1. Make sure you're in the `backend` directory
2. Run `pnpm install` again
3. Check that port 3001 is not already in use: `lsof -i :3001`
4. Try a different port in `backend/.env`: `PORT=3002`

### Problem: ChatbotScreen shows blank

**Solution:**
1. Check browser console for errors (F12)
2. Make sure all dependencies are installed: `pnpm install`
3. Clear browser cache and refresh

## API Endpoints

### Health Check
```bash
curl http://localhost:3001/health
```

### Test Chat API
```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Help me plan my wedding",
    "history": [],
    "userContext": {
      "selectedCeremony": "Wedding",
      "city": "Kolkata",
      "budget": 250000
    }
  }'
```

## File Structure

```
backend/
├── src/
│   ├── server.ts              # Main Express server
│   ├── routes/
│   │   └── chat.ts            # Chat API endpoint
│   └── services/
│       └── openaiService.ts   # OpenAI integration
├── .env                       # Environment variables (SECRET!)
├── .env.example              # Template
├── package.json
└── tsconfig.json

src/
├── app/
│   ├── screens/
│   │   ├── ChatbotScreen.tsx  # Main chatbot UI
│   │   └── ProfileScreen.tsx  # Updated with chatbot button
│   └── components/
│       ├── ChatBubble.tsx     # Message bubble
│       ├── TypingIndicator.tsx
│       └── QuickSuggestionChips.tsx
└── services/
    └── chatService.ts         # Frontend API client
```

## Cost Considerations

The chatbot uses the **gpt-4o-mini** model which is very affordable:
- Input: ~$0.15 per 1M tokens
- Output: ~$0.60 per 1M tokens

A typical conversation with 10 messages costs **less than $0.01**.

For a college project with moderate testing, expect **less than $1-2 total cost**.

## Security Best Practices

✅ **DO:**
- Keep `.env` files in `.gitignore`
- Store API keys only in backend environment variables
- Use CORS to restrict backend access
- Validate all user inputs on backend

❌ **DON'T:**
- Never commit `.env` files to Git
- Never expose OpenAI API key in frontend code
- Never hardcode API keys in source code
- Never disable CORS in production

## Next Steps

1. **Customize the system prompt** in `backend/src/services/openaiService.ts`
2. **Add more quick suggestions** in `ChatbotScreen.tsx`
3. **Integrate with real vendor data** instead of mock examples
4. **Add conversation history persistence** (localStorage or database)
5. **Implement rate limiting** to prevent API abuse

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review backend logs in the terminal
3. Check browser console for frontend errors
4. Verify API key and environment variables

## Demo Tips for College Project

**For demonstration:**
1. Prepare the backend in advance (start server before demo)
2. Have a few example questions ready:
   - "I need to plan a wedding in Kolkata with ₹2,50,000 budget"
   - "Suggest some good decorators"
   - "How does the UPI payment work?"
3. Show both successful responses and the typing indicator
4. Explain the security architecture (backend API key storage)
5. Mention cost-effectiveness of gpt-4o-mini model

**Important**: Make sure both backend and frontend are running before your demo!

---

Built with ❤️ for RitualSathi College Project
