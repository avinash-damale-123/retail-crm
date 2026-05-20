# Coding Standards

## 1. Purpose

This document defines coding standards and development practices for the Retail CRM project.

The goal is to keep the project:

- consistent
- maintainable
- reviewable
- scalable
- Codex-friendly

## 2. General Principles

The codebase should prioritize:

```text
clarity
-> consistency
-> maintainability
-> scalability
```

Avoid overly complex patterns during early development.

## 3. Language Standards

### Frontend

- TypeScript mandatory
- Avoid unnecessary any usage
- Prefer explicit types

### Backend

- Use typed service inputs/outputs
- Validate all external input
- Keep business logic isolated

## 4. Naming Standards

### Files

Use:

```text
kebab-case
```

Examples:

```text
lead-service.ts
customer-table.tsx
booking-form.tsx
```

### Components

Use:

```text
PascalCase
```

Examples:

```text
LeadTable
CustomerCard
BookingForm
```

### Variables and Functions

Use:

```text
camelCase
```

## 5. Folder Standards

Every module should remain isolated.

Example:

```text
modules/lead/
├── components/
├── forms/
├── services/
├── validation/
└── hooks/
```

## 6. API Standards

### REST Naming

Use plural REST resources.

Examples:

```text
/api/leads
/api/customers
/api/bookings
```

### Validation

All API inputs must be validated.

### Authorization

All protected APIs must validate:

- authentication
- permissions
- branch access

## 7. Database Standards

### Soft Delete Preference

Avoid hard delete where business history matters.

### Audit Fields

Most tables should contain:

```text
created_at
updated_at
created_by
updated_by
```

### Status Lifecycle

Prefer statuses instead of destructive actions.

## 8. UI Standards

### Tables

Standard features:

- search
- filters
- pagination
- sorting
- export

### Forms

Forms should:

- validate properly
- display inline errors
- maintain consistent spacing
- support auditability

## 9. Security Standards

### Frontend

Do not rely only on frontend authorization.

### Backend

All business-sensitive logic must be enforced server-side.

### Passwords

Passwords must be hashed securely.

## 10. Git and Commit Standards

### Commit Messages

Use clear commit messages.

Examples:

```text
Initialize CRM repository structure
Add Country module schema
Implement Lead create API
Add Task completion validation
```

### Small Commits Preferred

Avoid extremely large commits.

## 11. GitHub Issue Standards

Each issue should:

- represent one logical implementation task
- contain clear scope
- reference documentation
- avoid vague requirements

Bad example:

```text
Build CRM
```

Good example:

```text
Implement Country module create/edit/list API using Prisma schema
```

## 12. Codex Usage Standards

Codex should:

- receive small focused tasks
- receive documentation references
- avoid architectural decision-making
- avoid uncontrolled generation

Workflow:

```text
Requirements
-> GitHub Issue
-> Codex
-> Review
-> Commit
-> Test
```

## 13. Review Standards

Before merging code:

- validate requirements
- review business rules
- review permissions
- review validation
- test flows manually

## 14. Final Engineering Philosophy

The Retail CRM codebase should always prioritize:

```text
business clarity
-> predictable structure
-> maintainable modules
-> scalable architecture
```
