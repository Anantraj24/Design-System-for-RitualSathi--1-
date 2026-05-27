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
 * Intelligent local fallback responder when the Gemini API is unavailable or blocked.
 */
function generateLocalFallbackResponse(message: string, userContext: UserContext): string {
  const lowerMessage = message.toLowerCase().trim();

  // 1. Math solver
  // Matches expressions like: 2+2, 5 * 10, 100 / 4, 500 - 200, 2 + 2 = ?
  const mathMatch = message.match(/(\d+(?:\.\d+)?)\s*([\+\-\*\/])\s*(\d+(?:\.\d+)?)/);
  if (mathMatch) {
    const num1 = parseFloat(mathMatch[1]);
    const operator = mathMatch[2];
    const num2 = parseFloat(mathMatch[3]);
    let result = 0;
    
    switch (operator) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': 
        result = num2 !== 0 ? num1 / num2 : 0; 
        break;
    }
    
    // Format response nicely
    const formattedResult = Number.isInteger(result) ? result : result.toFixed(2);
    return `The answer to **${num1} ${operator} ${num2}** is **${formattedResult}**. Can I help you with any other planning calculations?`;
  }

  // 2. Budget breakdowns
  if (lowerMessage.includes('budget') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('price')) {
    // Extract any large numbers (e.g. 50000, 250000, etc.)
    const numbers = message.match(/\b\d{4,9}\b/g);
    let budget = userContext.budget || 250000;
    
    if (numbers && numbers.length > 0) {
      budget = parseInt(numbers[0], 10);
    }
    
    const formattedBudget = budget.toLocaleString('en-IN');
    const ceremony = userContext.selectedCeremony || 'wedding';
    const city = userContext.city || 'Kolkata';

    return `Here is a recommended budget split for your **${ceremony}** in **${city}** with a total budget of **₹${formattedBudget}**:\n\n` +
           `• **Catering (36%)**: ₹${Math.floor(budget * 0.36).toLocaleString('en-IN')}\n` +
           `• **Decoration (20%)**: ₹${Math.floor(budget * 0.20).toLocaleString('en-IN')}\n` +
           `• **Venue & Accommodation (20%)**: ₹${Math.floor(budget * 0.20).toLocaleString('en-IN')}\n` +
           `• **Photography & Video (14%)**: ₹${Math.floor(budget * 0.14).toLocaleString('en-IN')}\n` +
           `• **Priest & Ritual Items (6%)**: ₹${Math.floor(budget * 0.06).toLocaleString('en-IN')}\n` +
           `• **Music, DJ & Lights (4%)**: ₹${Math.floor(budget * 0.04).toLocaleString('en-IN')}\n\n` +
           `Would you like to browse decorators or caterers within these price ranges?`;
  }

  // 3. Vendor recommendations
  if (
    lowerMessage.includes('vendor') || 
    lowerMessage.includes('decorator') || 
    lowerMessage.includes('caterer') || 
    lowerMessage.includes('pandit') || 
    lowerMessage.includes('priest') || 
    lowerMessage.includes('photo')
  ) {
    const city = userContext.city || 'Kolkata';
    return `Here are some of our top-rated vendor recommendations in **${city}**:\n\n` +
           `🎨 **Decorators:**\n` +
           `• Maa Durga Decorators — Rating: 4.7 ⭐ (Starting ₹15,000)\n` +
           `• Royal Mandap Creations — Rating: 4.8 ⭐ (Starting ₹25,000)\n\n` +
           `🍽️ **Caterers:**\n` +
           `• Shri Santosh Catering Service — Rating: 4.9 ⭐ (Starting ₹25,000)\n` +
           `• Annapurna Caterers — Rating: 4.6 ⭐ (Starting ₹18,000)\n\n` +
           `🕉️ **Priests/Pandits:**\n` +
           `• Pandit Ramesh Sharma — Rating: 4.8 ⭐ (Starting ₹3,000)\n` +
           `• Pandit Subhash Mishra — Rating: 4.7 ⭐ (Starting ₹4,000)\n\n` +
           `📸 **Photographers:**\n` +
           `• Shubh Moments Photography — Rating: 4.8 ⭐ (Starting ₹12,000)\n` +
           `• Royal Frame Studio — Rating: 4.7 ⭐ (Starting ₹15,000)\n\n` +
           `You can view and book these directly from the Home Screen!`;
  }

  // 4. Ceremony checklists & planning guides
  if (lowerMessage.includes('checklist') || lowerMessage.includes('plan') || lowerMessage.includes('step') || lowerMessage.includes('how to')) {
    const ceremony = userContext.selectedCeremony || 'ceremony';
    return `To successfully plan your **${ceremony}**, here is your step-by-step checklist:\n\n` +
           `1️⃣ **Define the budget** and split it among categories.\n` +
           `2️⃣ **Secure the Venue** for the dates chosen.\n` +
           `3️⃣ **Book the Priest/Pandit** to lock in the auspicious timing (Muhurat).\n` +
           `4️⃣ **Finalize the Caterer** and food menu.\n` +
           `5️⃣ **Design the Decor** theme with a decorator.\n` +
           `6️⃣ **Hire a Photographer** to capture the moments.\n\n` +
           `Would you like me to recommend vendors for any of these steps?`;
  }

  // 5. Small Talk & FAQ
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('namaste')) {
    return `Namaste! 🙏 I'm Sathi Assistant, your friendly ceremony planning guide.\n\nI can help you budget, find vendors, customize checklists, and guide you through booking processes. What are we planning today?`;
  }
  
  if (lowerMessage.includes('how are you')) {
    return `I am doing great! Ready to help you plan your next ceremony. What event are we organizing today?`;
  }

  if (lowerMessage.includes('who are you') || lowerMessage.includes('your name')) {
    return `I am Sathi Assistant, your personal AI planner built into the RitualSathi platform.`;
  }

  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return `You're very welcome! I'm glad I could help. Let me know if you have more questions.`;
  }

  if (lowerMessage.includes('joke')) {
    return `Why did the wedding coordinator get kicked out of the ceremony? Because she kept calling it 'the production'! 😄`;
  }

  // Default response
  return `I'm Sathi Assistant, your planning companion. I can suggest vendors, recommend budgets, and show checklists for ceremonies like Weddings, Pujas, and baby naming events.\n\nTry asking me: \n• *"Suggest some caterers"* \n• *"What is the budget split for a Puja?"* \n• *"Checklist for a wedding"*`;
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
    console.error('Google Gemini API Error (switching to local smart fallback):', error);

    // Fall back to the intelligent local conversational engine
    return generateLocalFallbackResponse(userMessage, userContext);
  }
}
