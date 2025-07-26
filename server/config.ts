import 'dotenv/config';

export const config = {
  // Database
  DATABASE_URL: process.env.DATABASE_URL,
  
  // Server
  PORT: parseInt(process.env.PORT || '5000', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Development
  VITE_API_URL: process.env.VITE_API_URL || '/api',
} as const;

// Validate required environment variables
if (!config.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export default config;