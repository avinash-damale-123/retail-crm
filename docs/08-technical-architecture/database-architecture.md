# Database Architecture

## 1. Purpose

This document defines the database architecture direction for the Retail CRM.

The database must support:

- relational business data
- auditability
- transactional integrity
- reporting
- scalability
- branch-based ownership
- user-based accountability

## 2. Recommended Database

- PostgreSQL

## 3. ORM Direction

- Prisma ORM

## 4. Database Design Principles

### Relational Design

The CRM is relationship-heavy.

Examples:

- Lead -> Customer
- Customer -> Booking
- User -> Branch
- Role -> Permission Set
- Task -> Lead/Customer

### Auditability

Important records should maintain history and ownership.

### Soft Delete Preference

Avoid hard deletes where business history matters.

### Status-Based Lifecycle

Use statuses rather than destructive operations.

## 5. Core Entity Relationships

### Organization Layer

```text
Country
Region
Branch
Department
Role
User
```

### Business Layer

```text
Lead
-> Customer
-> Booking
```

### Activity Layer

```text
Lead/Customer
-> Meeting
-> Call
-> Task
```

## 6. Audit Fields Standard

Most tables should include:

```text
id
created_at
updated_at
created_by
updated_by
status
is_active
```

## 7. Important Database Rules

### Lead

- lead_id unique
- duplicate detection support
- conversion tracking

### Customer

- linked to source lead
- cannot exist without valid source

### Booking

- linked to customer
- cannot exist directly from lead

### User

- linked to role
- linked to branch
- active/inactive status

## 8. Reporting Considerations

The schema should support:

- conversion reports
- branch performance
- user performance
- revenue reports
- activity tracking

## 9. Future Database Considerations

Future support may include:

- partitioning
- read replicas
- reporting optimization
- warehouse integration

## 10. Database Philosophy

The database should prioritize:

```text
consistency
-> integrity
-> auditability
-> scalability
```
