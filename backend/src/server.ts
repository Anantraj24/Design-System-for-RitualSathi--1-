import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from './routes/chat';

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.GOOGLE_API_KEY) {
  console.error('ERROR: GOOGLE_API_KEY is not set in environment variables');
  console.error('Please create a .env file with your Google API key');
  process.exit(1);
}

// Initialize Express app
const app: Express = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req: Request, res: Response, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'RitualSathi Backend API',
  });
});

// Chat API routes
app.use('/api/chat', chatRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path,
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Start server only when not running in Vercel Serverless environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🚀 RitualSathi Backend API Server');
    console.log('='.repeat(50));
    console.log(`📡 Server running on: http://localhost:${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🤖 Google Gemini API: ${process.env.GOOGLE_API_KEY ? 'Configured ✓' : 'Missing ✗'}`);
    console.log('='.repeat(50));
    console.log('\nAvailable endpoints:');
    console.log(`  GET  /health          - Health check`);
    console.log(`  POST /api/chat        - Chat with Sathi Assistant`);
    console.log('='.repeat(50));
  });
}

export default app;
