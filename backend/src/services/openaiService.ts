import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface UserContext {
  selectedCeremony?: string;
  city?: string;
  budget?: number;
}

/**
 * Get AI chat completion from OpenAI
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

    // Build messages array
    const messages: ChatMessage[] = [
      { role: 'system', content: contextualSystemPrompt },
      ...history,
      { role: 'user', content: userMessage },
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Affordable and fast model
      messages: messages as any,
      max_tokens: 500, // Keep responses concise
      temperature: 0.7, // Balanced creativity
    });

    const reply = completion.choices[0]?.message?.content || 'I apologize, but I could not generate a response. Please try again.';

    return reply;
  } catch (error: any) {
    console.error('OpenAI API Error:', error);

    // Handle specific error types
    if (error.status === 401) {
      throw new Error('Invalid OpenAI API key');
    } else if (error.status === 429) {
      throw new Error('OpenAI API rate limit exceeded');
    } else if (error.status === 500) {
      throw new Error('OpenAI service error');
    }

    throw new Error('Failed to get AI response');
  }
}
