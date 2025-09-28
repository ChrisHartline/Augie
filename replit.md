# AI Chat Application

## Overview

This is a modern full-stack AI chat application built with React, TypeScript, Express, and LangGraph. The application features a beautiful glass morphism UI with a cathedral background and integrates LangGraph with OpenAI GPT-4o to provide wisdom-based responses synthesizing insights from great Catholic thinkers including John Paul II, G.K. Chesterton, and Archbishop Fulton Sheen.

## Recent Changes (August 18, 2025)

- **Deployment Ready**: Successfully converted from Python/LangGraph to Node.js-only stack for reliable deployment
- **Knowledge Base**: Built comprehensive Catholic wisdom database with 1,981 text chunks (598 Chesterton + 1,074 John Paul II + 309 Fulton Sheen) using PostgreSQL vector storage
- **AI Integration**: Implemented OpenAI GPT-4o with semantic search for authentic Catholic wisdom responses
- **Database Migration**: Switched from in-memory storage to PostgreSQL with proper Drizzle ORM integration
- **Build Optimization**: Eliminated all Python dependencies - clean 12.1KB server bundle ready for production
- **Vector Search**: Created embeddings system for semantic matching with Catholic theological texts

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React 18 with TypeScript, Vite for bundling, and Tailwind CSS for styling
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom glass morphism design

## Key Components

### Frontend Architecture
- **React SPA**: Single-page application using Wouter for routing
- **Component Library**: Complete shadcn/ui component system with Radix UI primitives
- **State Management**: TanStack Query for API state with custom query client configuration
- **Styling**: Tailwind CSS with glass morphism design, custom CSS variables for theming
- **TypeScript**: Full type safety with shared types between client and server

### Backend Architecture
- **Express Server**: RESTful API with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL, configured for Neon Database
- **Storage Pattern**: Interface-based storage with in-memory implementation (easily swappable)
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development Tools**: Vite integration for seamless development experience

### AI Integration (Fully Implemented)
- **OpenAI GPT-4o**: Live AI chat system providing Catholic wisdom guidance
- **Vector Search**: Semantic search through 1,981 Catholic wisdom chunks (Chesterton, John Paul II & Fulton Sheen) with embeddings
- **Knowledge Base**: PostgreSQL database storing embedded wisdom from Catholic sources
- **Authentic Responses**: AI draws from real Catholic theological texts, not synthetic content
- **Future Expansion**: Ready for additional sources (John Paul II, Fulton Sheen) post-deployment

### Database Schema
- **Users Table**: Basic user authentication structure (username, password)
- **Messages Table**: Chat messages with content, role (user/assistant), and timestamps
- **Knowledge Chunks**: Vector embeddings of Catholic texts (1,981 entries: 598 Chesterton + 1,074 John Paul II + 309 Fulton Sheen)
- **Vector Storage**: PostgreSQL with embedding vectors for semantic search
- **Type Safety**: Drizzle-zod integration for runtime validation and TypeScript types

## Data Flow

1. **Message Creation**: User types message → Frontend validates → API call to `/api/messages`
2. **Vector Search**: User message creates embedding → PostgreSQL searches 1,981 Catholic text chunks  
3. **AI Processing**: OpenAI GPT-4o receives context from relevant Chesterton passages
4. **Wisdom Response**: AI synthesizes authentic Catholic guidance based on source material
5. **Real-time Updates**: Frontend polls for new messages every 2 seconds with TanStack Query caching

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router

### UI and Styling
- **@radix-ui/**: Complete primitive component library for accessible UI
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Tailwind variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production builds

## Deployment Strategy

### Development
- **Hot Reload**: Vite development server with HMR
- **TypeScript**: Real-time type checking and compilation
- **Database**: Drizzle migrations with `npm run db:push`

### Production Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Serving**: Express serves built frontend in production
4. **Database**: PostgreSQL with Drizzle ORM migrations

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (configured via Replit Database)
- **OPENAI_API_KEY**: Required for AI chat functionality and embeddings generation
- **NODE_ENV**: Environment detection for development/production modes
- **PORT**: Server port configuration (defaults to 5000)
- **Replit Integration**: Custom plugins for Replit development environment

### Deployment Architecture
- **Node.js Only**: Streamlined to single-language stack for reliable deployment
- **Replit Database**: PostgreSQL database configured through Replit's managed service
- **Build Optimization**: Removed heavy ML dependencies to prevent disk quota issues
- **Environment Variables**: All necessary secrets configured for production deployment
- **Static Asset Serving**: Express serves built React frontend in production

### Key Architectural Decisions

1. **Monorepo Structure**: Keeps client, server, and shared code together for easier development and type sharing
2. **Glass Morphism UI**: Beautiful, modern design with cathedral background for premium feel
3. **Type-Safe Database**: Drizzle ORM provides compile-time safety and runtime validation
4. **Interface-Based Storage**: Allows easy swapping between in-memory and database storage
5. **Polling Strategy**: Simple message polling for real-time feel (can be upgraded to WebSockets)
6. **Component Library**: shadcn/ui provides consistent, accessible components
7. **Production AI**: Live OpenAI GPT-4o integration with authentic Catholic wisdom knowledge base

## Current Status

The application is **ready for deployment** with a fully functional AI chat system. Current features:
- ✅ Live AI chat with OpenAI GPT-4o
- ✅ 1,981 Catholic wisdom chunks (598 Chesterton + 1,074 John Paul II + 309 Fulton Sheen)
- ✅ Vector search for relevant Catholic wisdom
- ✅ Clean Node.js-only stack (no Python dependencies)
- ✅ Production build ready (12.1KB server, 322KB client)
- ✅ **Post-deployment expansion**: Added 1,074 John Paul II text chunks from 27 papal documents
- ✅ **Audio Processing**: Added 309 Fulton Sheen chunks via OpenAI Whisper transcription from 26 MP3 files

The application maintains a clean, type-safe codebase designed for easy extension with additional Catholic sources.