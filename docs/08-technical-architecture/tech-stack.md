# Retail CRM Technical Stack

## 1. Purpose

This document defines the recommended technical stack for the Retail CRM project.

The stack must support:

- modular CRM development
- role-based access control
- strong database relationships
- audit logging
- reporting
- future integrations
- Codex-friendly implementation

## 2. Recommended Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

Recommended initial approach:

- Next.js API routes or server actions for early development

Scalable future approach:

- Separate Node.js/NestJS backend if the project grows significantly

### Database

- PostgreSQL

### ORM

- Prisma

### Authentication

- Session/JWT-based authentication
- Role-Based Access Control
- Permission Set-based authorization

### Validation

- Zod for frontend/backend validation consistency

### State and Data Fetching

- React server components where suitable
- TanStack Query if client-side data fetching becomes complex

### UI Components

- Tailwind CSS
- Reusable internal component library
- Optional future: shadcn/ui or custom design system

## 3. Why This Stack

### Next.js

Next.js allows fast full-stack development with React and TypeScript. It supports routing, server rendering, API routes, and deployment flexibility.

### TypeScript

TypeScript provides type safety and reduces errors across forms, APIs, and business logic.

### PostgreSQL

PostgreSQL is suitable for CRM systems because it supports relational data, transactions, indexing, reporting queries, and long-term scalability.

### Prisma

Prisma provides clean schema definition, migrations, and type-safe database access.

### Tailwind CSS

Tailwind CSS supports fast UI development and consistent styling across modules.

## 4. Initial Project Direction

Start with a full-stack Next.js architecture for speed and simplicity.

Recommended structure:

```text
frontend app and backend API can initially live in one Next.js application.
```

If the backend grows complex, it can later be extracted into a separate service.

## 5. Core Technical Requirements

The stack must support:

- protected routes
- user login/logout
- role and permission checks
- branch-based visibility
- master module CRUD
- transactional module workflows
- audit logging
- export support
- file import support later
- reporting queries
- integration APIs later

## 6. Environment Requirements

Required environment variables may include:

```text
DATABASE_URL
NEXTAUTH_SECRET or AUTH_SECRET
JWT_SECRET
APP_URL
```

Future integration variables may include:

```text
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
WHATSAPP_ACCESS_TOKEN
META_APP_SECRET
WEBHOOK_SECRET
```

## 7. Recommended Package Categories

### Core

- next
- react
- react-dom
- typescript

### Database

- prisma
- @prisma/client

### Validation

- zod

### Authentication

- next-auth or custom session/JWT implementation

### UI

- tailwindcss
- postcss
- autoprefixer

### Utilities

- date-fns
- clsx

## 8. Technical Decision

For the first implementation phase, use:

```text
Next.js + TypeScript + Tailwind CSS + Prisma + PostgreSQL
```

This will be the default technical direction unless changed before coding begins.
