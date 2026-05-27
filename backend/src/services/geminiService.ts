import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Google Gemini client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// System prompt for Sathi Assistant
const SYSTEM_PROMPT = `You are Sathi Assistant, the helpful AI guide inside RitualSathi, an Indian ceremony planning app.

Help users plan Indian ceremonies such as:
- Wedding
- Puja
- Annaprashan (baby's first rice ceremony)
- Shraddh (ancestral rites)
- Funeral ceremonies
- Engagement
- Thread Ceremony (Upanayana)
- Griha Pravesh (housewarming)

You can:
1. Suggest vendors from our mock database
2. Recommend budget splits based on ceremony type
3. Provide checklist items for ceremonies
4. Explain the booking flow
5. Guide users through the demo UPI Scan & Pay flow
6. Help track mock booking status

Important guidelines:
- Keep answers simple, practical and friendly
- Use Indian Rupees (₹) for all pricing
- Prefer Kolkata examples when city is not specified
- Do NOT claim real vendor availability - these are demo vendors
- Do NOT confirm real payments - explain this is a demo UPI payment prototype
- If asked about topics outside ceremony planning, politely guide users back to RitualSathi features

Mock vendor examples to reference:
1. Maa Durga Decorators — Decorator — Kolkata — Rating 4.7 — Starting ₹15,000
2. Royal Mandap Creations — Decorator — Salt Lake — Rating 4.8 — Starting ₹25,000
3. Shri Santosh Catering Service — Caterer — Tollygunge — Rating 4.9 — Starting ₹25,000
4. Annapurna Caterers — Caterer — Howrah — Rating 4.6 — Starting ₹18,000
5. Pandit Ramesh Sharma — Priest — Kolkata — Rating 4.8 — Starting ₹3,000
6. Pandit Subhash Mishra — Priest — Dum Dum — Rating 4.7 — Starting ₹4,000
7. Shubh Moments Photography — Photographer — Park Street — Rating 4.8 — Starting ₹12,000
8. Royal Frame Studio — Photographer — New Town — Rating 4.7 — Starting ₹15,000

Budget suggestion template for ₹2,50,000 wedding:
- Catering: ₹90,000 (36%)
- Decoration: ₹50,000 (20%)
- Venue: ₹50,000 (20%)
- Photography: ₹35,000 (14%)
- Priest & ritual items: ₹15,000 (6%)
- Music & lights: ₹10,000 (4%)

For smaller ceremonies, suggest proportionally lower practical splits.`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface UserContext {
  selectedCeremony?: string;
  city?: string;
  budget?: number;
}

/**
 * Get AI chat completion from Google Gemini
 * @param userMessage - The user's message
 * @param history - Previous conversation history
 * @param userContext - User context (ceremony, city, budget)
 * @returns AI assistant's reply
 */
export async function getChatCompletion(
  userMessage: string,
  history: ChatMessage[] = [],
  userContext: UserContext = {}
): Promise<string> {
  try {
    // Build context-aware system message
    let contextualSystemPrompt = SYSTEM_PROMPT;

    if (userContext.selectedCeremony || userContext.city || userContext.budget) {
      contextualSystemPrompt += '\n\nCurrent user context:';
      if (userContext.selectedCeremony) {
        contextualSystemPrompt += `\n- Planning: ${userContext.selectedCeremony}`;
      }
      if (userContext.city) {
        contextualSystemPrompt += `\n- Location: ${userContext.city}`;
      }
      if (userContext.budget) {
        contextualSystemPrompt += `\n- Budget: ₹${userContext.budget.toLocaleString('en-IN')}`;
      }
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Build conversation history for Gemini
    let chatHistory = history.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // Gemini requires the history to start with a 'user' message.
    // If the first message is from the model (e.g. welcome greeting), remove it.
    if (chatHistory.length > 0 && chatHistory[0].role === 'model') {
      chatHistory = chatHistory.slice(1);
    }

    // Start chat with history
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    // Combine system prompt with user message
    const fullMessage = history.length === 0
      ? `${contextualSystemPrompt}\n\nUser: ${userMessage}`
      : userMessage;

    // Send message and get response
    const result = await chat.sendMessage(fullMessage);
    const response = await result.response;
    const reply = response.text() || 'I apologize, but I could not generate a response. Please try again.';

    return reply;
  } catch (error: any) {
    console.error('Google Gemini API Error:', error);

    // Handle specific error types
    if (error.message?.includes('API key')) {
      throw new Error('Invalid Google API key');
    } else if (error.message?.includes('quota')) {
      throw new Error('Google API quota exceeded');
    }

    throw new Error('Failed to get AI response');
  }
}
