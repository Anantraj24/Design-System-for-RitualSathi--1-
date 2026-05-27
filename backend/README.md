# RitualSathi Backend API

Backend server for the RitualSathi AI chatbot powered by OpenAI.

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
# or
pnpm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```bash
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:

```env
OPENAI_API_KEY=sk-your-actual-openai-api-key-here
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Get OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key and paste it in your `.env` file

## Running the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2026-05-19T10:30:00.000Z",
  "service": "RitualSathi Backend API"
}
```

### Chat
```
POST /api/chat
```

Request:
```json
{
  "message": "Help me plan my wedding",
  "history": [
    { "role": "user", "content": "Hello" },
    { "role": "assistant", "content": "Hi! How can I help you today?" }
  ],
  "userContext": {
    "selectedCeremony": "Wedding",
    "city": "Kolkata",
    "budget": 250000
  }
}
```

Response:
```json
{
  "reply": "I'd be happy to help you plan your wedding!...",
  "timestamp": "2026-05-19T10:30:00.000Z"
}
```

## Security Notes

- **Never commit your `.env` file** - it contains sensitive API keys
- The OpenAI API key is only used on the backend server
- Frontend calls the backend `/api/chat` endpoint, never OpenAI directly
- CORS is configured to only allow requests from the frontend URL

## Tech Stack

- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **OpenAI API** - AI chat completions (gpt-4o-mini model)
- **dotenv** - Environment variable management

## Cost Optimization

The backend uses the `gpt-4o-mini` model which is affordable:
- ~$0.15 per 1M input tokens
- ~$0.60 per 1M output tokens

A typical chat message costs less than $0.001.
