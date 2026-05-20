# Backend Architecture

## 1. Purpose

This document defines the backend architecture direction for the Retail CRM project.

The backend must support:

- authentication
- authorization
- transactional workflows
- audit logging
- reporting
- integrations
- scalable APIs
- future automation

## 2. Recommended Backend Direction

Initial approach:

- Next.js API routes or server actions

Possible future scaling:

- Dedicated Node.js/NestJS backend service

## 3. Backend Responsibilities

The backend must handle:

- authentication
- permission validation
- CRUD operations
- business workflows
- audit logging
- reporting queries
- integrations
- file processing
- background jobs later

## 4. API Design Principles

### REST-First Approach

Use structured REST APIs initially.

Examples:

```text
/api/leads
/api/customers
/api/bookings
/api/tasks
```

### Consistent Response Format

Responses should follow predictable structure.

### Validation Required

All inputs must be validated server-side.

### Authorization Required

Every protected endpoint must validate:

- authentication
- role
- permissions
- branch access

## 5. Business Logic Principles

Business rules must live in backend services, not only in frontend forms.

Examples:

- booking cannot originate from lead
- converted lead becomes locked
- inactive users cannot log in
- task completion requires remarks

## 6. Suggested Backend Structure

```text
backend/
├── modules/
├── services/
├── repositories/
├── middleware/
├── auth/
├── permissions/
├── audit/
├── utils/
└── jobs/
```

## 7. Authentication Strategy

Authentication should support:

- login
- logout
- protected sessions
- inactivity timeout
- secure password handling

## 8. Authorization Strategy

Authorization must support:

- role hierarchy
- permission sets
- field-level permissions later
- branch access
- module visibility

## 9. Audit Logging Strategy

Important actions should generate audit events.

Examples:

- create
- update
- status change
- assignment change
- login/logout
- permission changes
- lead conversion

## 10. Future Integration Support

The backend should later support:

- email integration
- WhatsApp integration
- webhook APIs
- Meta Lead Ads
- import processing
- auto-routing

## 11. Background Job Direction

Future background processing may include:

- email sending
- WhatsApp retries
- report generation
- scheduled reminders
- automation jobs

## 12. Backend Development Philosophy

The backend should prioritize:

```text
security
-> business-rule consistency
-> auditability
-> scalability
-> maintainability
```
