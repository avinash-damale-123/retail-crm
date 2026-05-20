# Authentication Setup Foundation

## Purpose

This document describes the initial authentication foundation implemented for Issue #3.

## Implemented Routes

- `/login` - Public login page (currently mock authentication)
- `/dashboard` - Protected route requiring an active session

## Current Auth Flow

1. User submits credentials on `/login`.
2. Temporary mock login validates credentials.
3. Session payload is created and stored in a secure HTTP-only cookie.
4. Middleware guards protected routes.
5. Authenticated users reach `/dashboard`.
6. Logout clears the auth cookie and redirects to `/login`.

## Session Foundation

Current configuration in `frontend/lib/auth/session.ts`:

- Session timeout: **15 minutes**
- Short session threshold: **2 minutes** (placeholder for future warnings)
- Cookie name: `retail_crm_session`

## Foundation for Future Prisma Integration

The implementation intentionally separates:

- `auth-types.ts` for core auth/session typing
- `auth-utils.ts` for login/check/logout behavior
- `session.ts` for session payload and cookie handling

This makes it straightforward to replace mock login with Prisma-backed User lookup, password verification, user active-status checks, and future audit logging.

## RBAC & Permission Readiness

The foundation includes:

- role type (`AuthRole`)
- permission keys (`PermissionKey`)
- permission set array per user
- helper functions for permission and role checks

Full role/permission module is not implemented yet by design.

## Inactive User Placeholder

Inactive-user blocking is represented in `isUserActive()` and enforced in mock login flow. Replace with DB user status checks once Prisma User model is connected.
