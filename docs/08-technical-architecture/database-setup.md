# Database Setup (Prisma + PostgreSQL)

This document defines the initial database foundation setup for Retail CRM using Prisma ORM with PostgreSQL.

## 1. Prerequisites

- Node.js 18+ and npm
- Running PostgreSQL instance
- Access to `frontend` folder of this repository

## 2. Environment Configuration

1. Copy the example environment file:

```bash
cp frontend/.env.example frontend/.env
```

2. Update `DATABASE_URL` in `frontend/.env` to match your PostgreSQL connection.

Example format:

```text
postgresql://<username>:<password>@<host>:<port>/<database>?schema=public
```

## 3. Install Dependencies

From the project root:

```bash
cd frontend
npm install
```

This installs Prisma CLI and `@prisma/client`.

## 4. Prisma Schema Location

The Prisma schema is located at:

```text
frontend/prisma/schema.prisma
```

It currently includes foundational models for:

- User
- Role
- PermissionSet
- Country
- Region
- Branch
- Department
- Lead
- Customer
- Booking
- AuditLog

## 5. Generate Prisma Client

From `frontend`:

```bash
npm run prisma:generate
```

## 6. Run Initial Migration

From `frontend`:

```bash
npm run prisma:migrate -- --name init_foundation
```

This creates and applies the first migration against PostgreSQL.

## 7. Open Prisma Studio

From `frontend`:

```bash
npm run prisma:studio
```

## 8. Notes

- This setup only establishes technical database foundations.
- Authentication, UI pages, and business workflows are intentionally out of scope for this phase.
- Seed data is intentionally not included in this setup.
