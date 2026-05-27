"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const chat_1 = __importDefault(require("./routes/chat"));
// Load environment variables
dotenv_1.default.config();
// Validate required environment variables
if (!process.env.GOOGLE_API_KEY) {
    console.error('ERROR: GOOGLE_API_KEY is not set in environment variables');
    console.error('Please create a .env file with your Google API key');
    process.exit(1);
}
// Initialize Express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middleware
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'RitualSathi Backend API',
    });
});
// Chat API routes
app.use('/api/chat', chat_1.default);
// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.path,
    });
});
// Error handler
app.use((err, req, res, next) => {
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
exports.default = app;
