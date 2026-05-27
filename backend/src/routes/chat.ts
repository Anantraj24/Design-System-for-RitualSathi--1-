import { Router, Request, Response } from 'express';
import { getChatCompletion } from '../services/geminiService';

const router = Router();

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  history?: ChatMessage[];
  userContext?: {
    selectedCeremony?: string;
    city?: string;
    budget?: number;
  };
}

/**
 * POST /api/chat
 * Handle chat messages and return AI responses
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { message, history = [], userContext = {} }: ChatRequest = req.body;

    // Validate request
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        error: 'Message is required and must be a non-empty string',
      });
    }

    // Validate history format
    if (!Array.isArray(history)) {
      return res.status(400).json({
        error: 'History must be an array',
      });
    }

    // Limit message length
    if (message.length > 1000) {
      return res.status(400).json({
        error: 'Message is too long (max 1000 characters)',
      });
    }

    // Limit history length to prevent token overflow
    const limitedHistory = history.slice(-10); // Keep last 10 messages

    // Get AI response
    const reply = await getChatCompletion(message, limitedHistory, userContext);

    // Return response
    return res.json({
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Chat endpoint error:', error);

    // Return appropriate error
    return res.status(500).json({
      error: 'Sorry, Sathi Assistant is unavailable right now. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

export default router;
