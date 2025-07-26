# Course Registration System

## Overview

This is a full-stack web application for course registration built with React, Express.js, and PostgreSQL. The system provides a modern, responsive interface for users to register for courses and includes an admin panel for viewing registration data. The application uses a monorepo structure with shared schemas and types between frontend and backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state, React Hook Form for form state
- **Routing**: Wouter for lightweight client-side routing
- **Validation**: Zod for type-safe validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for fast bundling

### Data Storage
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema migrations
- **Current Storage**: In-memory storage (MemStorage) for development/testing
- **Schema**: Shared between frontend and backend using Zod validation

## Key Components

### Database Schema
- **registrations table**: Stores course registration data
  - id (UUID, primary key)
  - name (text, required)
  - email (text, required)
  - phone (text, required)
  - experience (text, required)
  - motivation (text, optional)
  - createdAt (timestamp)

### API Endpoints
- `POST /api/registrations`: Create new registration
- `GET /api/registrations`: Retrieve all registrations (admin)

### Frontend Pages
- **Home Page**: Course information and registration form
- **404 Page**: Error handling for unknown routes

### UI Components
- Complete shadcn/ui component library
- Form components with validation
- Toast notifications for user feedback
- Responsive design with mobile support

## Data Flow

1. **Registration Process**:
   - User fills out registration form on home page
   - Form validation using react-hook-form + Zod
   - Data submitted to POST /api/registrations endpoint
   - Server validates data and stores in database
   - Success/error feedback via toast notifications

2. **Admin View**:
   - GET /api/registrations retrieves all registration data
   - Data displayed in admin interface (to be implemented)

3. **Error Handling**:
   - Client-side validation prevents invalid submissions
   - Server-side validation with detailed error responses
   - Global error handling for API requests

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **@tanstack/react-query**: Async state management
- **@hookform/resolvers**: Form validation integration
- **drizzle-orm**: Type-safe database ORM
- **connect-pg-simple**: PostgreSQL session store
- **date-fns**: Date manipulation utilities

### Development Tools
- **Vite**: Frontend build tool with HMR
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety across the stack
- **Drizzle Kit**: Database migration tool

### UI Framework
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **class-variance-authority**: Utility for component variants

## Deployment Strategy

### Development
- Frontend: Vite dev server with HMR
- Backend: tsx for TypeScript execution
- Database: Uses DATABASE_URL environment variable
- Replit integration with cartographer plugin for development

### Production Build
- Frontend: Vite build to `dist/public`
- Backend: esbuild bundle to `dist/index.js`
- Static assets served by Express in production
- Database migrations via `npm run db:push`

### Environment Configuration
- **NODE_ENV**: Controls development vs production behavior
- **DATABASE_URL**: PostgreSQL connection string (required)
- **REPL_ID**: Replit-specific environment detection

### Key Architectural Decisions

1. **Monorepo Structure**: Shared types and schemas between client/server prevent API contract mismatches
2. **In-Memory Storage**: Current implementation uses memory storage for rapid development; designed to easily switch to PostgreSQL
3. **Type Safety**: End-to-end TypeScript with Zod validation ensures data integrity
4. **Component Library**: shadcn/ui provides consistent, accessible UI components
5. **Server-Side Rendering**: Uses Vite's SSR capabilities for production builds
6. **Error Boundaries**: Comprehensive error handling at both client and server levels

The architecture prioritizes developer experience, type safety, and maintainability while providing a solid foundation for scaling the application.