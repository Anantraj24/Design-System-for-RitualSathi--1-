# Quick Start - Sathi Assistant Chatbot

## 🚀 Get Started in 3 Steps

### Step 1: Setup Backend

```bash
cd backend
pnpm install
cp .env.example .env
```

**Edit `backend/.env` and add your OpenAI API key:**
```env
OPENAI_API_KEY=sk-your-key-here
```

**Get API Key:** https://platform.openai.com/api-keys

### Step 2: Start Backend Server

```bash
pnpm run dev
```

✅ Look for: "OpenAI API: Configured ✓"

### Step 3: Start Frontend (New Terminal)

```bash
cd /workspaces/default/code
cp .env.example .env
pnpm run dev
```

## 🎯 Using the Chatbot

1. Open http://localhost:5173
2. Click **Profile** tab (bottom right)
3. Click **"Ask Sathi Assistant"** (orange card)
4. Try: "Help me plan my wedding in Kolkata"

## ⚡ Quick Commands

**Backend:**
```bash
cd backend
pnpm run dev    # Start dev server
pnpm run build  # Build for production
pnpm start      # Run production build
```

**Frontend:**
```bash
pnpm run dev    # Start dev server
```

## 🐛 Troubleshooting

**Connection Error?**
1. Make sure backend is running on port 3001
2. Check `backend/.env` has `OPENAI_API_KEY`
3. Check `.env` has `VITE_API_URL=http://localhost:3001`

**Backend Won't Start?**
1. Run `cd backend && pnpm install`
2. Check port 3001 is available
3. Verify OpenAI API key in `.env`

## 💰 Costs

- Model: gpt-4o-mini (very affordable)
- ~$0.001 per conversation
- Perfect for college projects!

## 📚 Full Documentation

- **Setup Guide:** `CHATBOT_SETUP.md`
- **Implementation:** `CHATBOT_IMPLEMENTATION.md`
- **Backend README:** `backend/README.md`

---

**Need Help?** Check the full setup guide in `CHATBOT_SETUP.md`
