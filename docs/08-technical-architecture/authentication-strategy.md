# Authentication Strategy

## 1. Purpose

This document defines the authentication and authorization direction for the Retail CRM.

The authentication system must support:

- secure login
- role-based access
- permission-based access
- branch visibility
- session management
- auditability
- user activity tracking

## 2. Authentication Goals

The authentication system should:

- protect all business modules
- prevent unauthorized access
- support inactive-user blocking
- support session timeout
- support scalable permission checks

## 3. Recommended Initial Approach

Use:

- session-based authentication or JWT
- secure password hashing
- protected routes
- middleware authorization

## 4. User Login Flow

```text
User Login
-> Credential Validation
-> Active Status Check
-> Session Create
-> Permission Load
-> Dashboard Redirect
```

## 5. Session Management Rules

Locked requirements:

- Session timeout = 15 minutes
- Short session threshold = 2 minutes
- Detailed activity tracking enabled

## 6. Authorization Layers

Authorization depends on:

```text
Role
+ Permission Set
+ Branch Access
+ Visibility Rules
```

## 7. Protected Areas

The following must always require authentication:

- dashboard
- leads
- customers
- bookings
- meetings
- calls
- tasks
- reports
- settings

## 8. Inactive User Rules

Inactive users:

- cannot log in
- cannot create records
- cannot receive assignments
- retain historical ownership for audit purposes

## 9. Audit Requirements

Authentication events should be logged.

Examples:

- login
- logout
- failed login
- password reset
- permission changes
- forced logout

## 10. Security Principles

The authentication layer should prioritize:

```text
security
-> accountability
-> traceability
-> maintainability
```
