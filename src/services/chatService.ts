/**
 * Chat Service
 * Handles communication with the backend chat API
 */

// Safe environment variable access for different build environments
const getApiUrl = () => {
  try {
    return (import.meta.env?.VITE_API_URL as string) || 'http://localhost:3001';
  } catch {
    return 'http://localhost:3001';
  }
};

const API_BASE_URL = getApiUrl();

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export interface UserContext {
  selectedCeremony?: string;
  city?: string;
  budget?: number;
}

interface ChatResponse {
  reply: string;
  timestamp: string;
}

/**
 * Get mock AI response for demo purposes
 */
function getMockResponse(message: string, userContext: UserContext): string {
  const lowerMessage = message.toLowerCase();

  // Budget-related queries
  if (lowerMessage.includes('budget') || lowerMessage.includes('cost')) {
    const budget = userContext.budget || 250000;
    return `For a ${userContext.selectedCeremony || 'wedding'} in ${userContext.city || 'Kolkata'} with a budget of ₹${budget.toLocaleString('en-IN')}, here's a recommended breakdown:\n\n• Catering: ₹${Math.floor(budget * 0.36).toLocaleString('en-IN')} (36%)\n• Decoration: ₹${Math.floor(budget * 0.20).toLocaleString('en-IN')} (20%)\n• Venue: ₹${Math.floor(budget * 0.20).toLocaleString('en-IN')} (20%)\n• Photography: ₹${Math.floor(budget * 0.14).toLocaleString('en-IN')} (14%)\n• Priest & rituals: ₹${Math.floor(budget * 0.06).toLocaleString('en-IN')} (6%)\n• Music & lights: ₹${Math.floor(budget * 0.04).toLocaleString('en-IN')} (4%)\n\nWould you like vendor recommendations for any category?`;
  }

  // Vendor recommendations
  if (lowerMessage.includes('vendor') || lowerMessage.includes('decorator') || lowerMessage.includes('caterer') || lowerMessage.includes('pandit') || lowerMessage.includes('priest')) {
    return `I can help you find the perfect vendors! Here are some top-rated options in ${userContext.city || 'Kolkata'}:\n\n🎨 Decorators:\n• Maa Durga Decorators - Rating 4.7 ⭐ - Starting ₹15,000\n• Royal Mandap Creations - Rating 4.8 ⭐ - Starting ₹25,000\n\n🍽️ Caterers:\n• Shri Santosh Catering Service - Rating 4.9 ⭐ - Starting ₹25,000\n• Annapurna Caterers - Rating 4.6 ⭐ - Starting ₹18,000\n\n🕉️ Priests:\n• Pandit Ramesh Sharma - Rating 4.8 ⭐ - Starting ₹3,000\n• Pandit Subhash Mishra - Rating 4.7 ⭐ - Starting ₹4,000\n\nYou can browse more vendors in the Home screen!`;
  }

  // Wedding planning
  if (lowerMessage.includes('wedding') || lowerMessage.includes('marriage')) {
    return `Planning a wedding is exciting! Here's what I can help you with:\n\n✅ Find top-rated vendors (decorators, caterers, priests, photographers)\n✅ Set and manage your budget\n✅ Get venue recommendations\n✅ Book vendors through the app\n✅ Track your bookings\n\nFor a typical wedding in ${userContext.city || 'Kolkata'}, you'll need:\n• Venue/Banquet\n• Catering service\n• Decorator\n• Priest/Pandit\n• Photographer\n• Music/DJ\n\nWhat would you like to explore first?`;
  }

  // Booking questions
  if (lowerMessage.includes('book') || lowerMessage.includes('reservation')) {
    return `Booking vendors is easy with RitualSathi! Here's how:\n\n1️⃣ Browse vendors by category on the Home screen\n2️⃣ View vendor details, ratings, and packages\n3️⃣ Click "Book Now" on your preferred vendor\n4️⃣ Fill in ceremony details and select a package\n5️⃣ Review booking summary\n6️⃣ Complete payment via UPI\n7️⃣ Get instant confirmation!\n\nYou can track all your bookings in the "Bookings" tab. Want to start browsing vendors?`;
  }

  // Default greeting
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return `Namaste! 🙏 I'm Sathi Assistant, your AI guide for ceremony planning.\n\nI can help you with:\n• Finding and booking vendors\n• Budget planning and recommendations\n• Ceremony checklists\n• Vendor comparisons\n• Booking management\n\nWhat would you like help with today?`;
  }

  // Default response
  return `I'm Sathi Assistant, here to help you plan your ${userContext.selectedCeremony || 'ceremony'}! I can assist with:\n\n• Vendor recommendations\n• Budget planning\n• Booking process\n• Ceremony checklists\n\nTry asking me about vendors, budget breakdowns, or how to book services. What would you like to know?`;
}

/**
 * Send a message to the chatbot and get a response
 * @param message - User's message
 * @param history - Previous conversation history
 * @param userContext - User context (ceremony, city, budget)
 * @returns Assistant's reply
 */
export async function sendMessage(
  message: string,
  history: ChatMessage[] = [],
  userContext: UserContext = {}
): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
        userContext,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || 'Failed to get response from server');
    }

    const data: ChatResponse = await response.json();
    return data.reply;
  } catch (error: any) {
    // Check if it's a network error - use mock response as fallback
    if (error.message === 'Failed to fetch' || error.name === 'TypeError' || !navigator.onLine) {
      // Silently fall back to mock responses when backend is unavailable
      return getMockResponse(message, userContext);
    }

    // Log other errors
    console.error('Chat service error:', error);
    throw new Error(error.message || 'Sorry, Sathi Assistant is unavailable right now. Please try again.');
  }
}

/**
 * Check if the backend server is healthy
 * @returns true if server is healthy, false otherwise
 */
export async function checkHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    return false;
  }
}
