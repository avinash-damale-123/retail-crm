# Retail CRM Implementation Phases

## 1. Purpose

This document defines the recommended implementation roadmap for the Retail CRM project.

The goal is to:

- Build the CRM in stable layers.
- Avoid uncontrolled scope.
- Ensure foundation modules are completed before dependent modules.
- Support structured GitHub issues and Codex implementation.
- Keep development reviewable and testable.

## 2. Development Strategy

The CRM should not be built as one large delivery.

The implementation must follow:

```text
Foundation -> Core Modules -> Activities -> Reporting -> Advanced Integrations
```

Each phase must:

1. Be documented.
2. Be implemented in smaller GitHub issues.
3. Be reviewed before merge.
4. Be tested before moving forward.

## 3. Standard Development Workflow

The agreed workflow for every module is:

```text
Final documents
-> Requirement summary
-> GitHub task/issue
-> Codex implementation
-> Review
-> Commit
-> Test
```

Codex should never receive vague instructions like:

```text
Build CRM
```

Instead, each issue should represent one clean implementation unit.

## 4. Phase 0 — Repository and Documentation Foundation

### Objective

Prepare repository structure and project documentation before coding begins.

### Scope

- Create repository structure.
- Create README.
- Create documentation folders.
- Add project overview.
- Add current system reference summary.
- Add final requirement summaries.
- Define implementation roadmap.

### Deliverables

- GitHub repository initialized.
- Documentation structure finalized.
- Source-of-truth documents prepared.

### Status

Currently in progress.

## 5. Phase 1 — Technical Foundation

### Objective

Set up the technical architecture and development environment.

### Recommended Stack

- Frontend: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Database: PostgreSQL
- ORM: Prisma
- API Style: REST-first
- Authentication: JWT/session-based RBAC

### Scope

- Frontend setup.
- Backend setup.
- Database setup.
- Prisma configuration.
- Environment configuration.
- Base layout and navigation.
- Authentication foundation.
- User session management foundation.

### Suggested GitHub Issues

- Initialize Next.js project.
- Configure Tailwind CSS.
- Configure Prisma and PostgreSQL.
- Create base application layout.
- Create authentication foundation.
- Configure protected routes.
- Configure environment setup.

### Exit Criteria

- Application runs locally.
- Authentication works.
- Database connection works.
- Basic layout and routing work.

## 6. Phase 2 — Master Modules

### Objective

Build the organizational and reference foundation.

### Modules

- Country
- Region
- Branch
- Department

### Why This Phase Comes Early

These modules are dependencies for:

- User Management
- Role hierarchy
- Reporting
- Lead assignment
- Branch visibility
- Dashboard segmentation

### Suggested Build Order

1. Country
2. Region
3. Branch
4. Department

### Common Requirements

- List page
- Create form
- Edit form
- Read view
- Search
- Filters
- Pagination
- Export
- Audit fields
- Active/Inactive status
- No-delete architecture

### Exit Criteria

- Master records are manageable.
- Branch and organizational structure works.
- Dependencies are stable.

## 7. Phase 3 — Access Control and User Management

### Objective

Build the access-control engine and user foundation.

### Modules

- Roles
- Permission Sets
- User Management
- Branch Access
- Field-Level Security foundation

### Core Concepts

```text
Role = hierarchy and reporting
Permission Set = capabilities and actions
```

### Scope

- User creation.
- Role assignment.
- Reporting manager assignment.
- Branch assignment.
- Permission Set assignment.
- Active/Inactive user lifecycle.
- Record visibility framework.
- Branch access model.

### Important Rules

- Only Super Admin can create users in Phase 1.
- No hard delete for users.
- Inactive users cannot log in.
- Permission changes must be auditable.

### Exit Criteria

- Authentication works with RBAC.
- Users can log in.
- Branch visibility works.
- Permissions work consistently.

## 8. Phase 4 — Lead Module

### Objective

Build the Lead pipeline and qualification workflow.

### Scope

- Lead list.
- Lead create/edit/read.
- Lead statuses.
- Assignment.
- Follow-ups.
- Duplicate detection.
- Conversion flow.
- Audit tracking.
- Timeline foundation.

### Important Rules

- Contact Number mandatory.
- Email optional.
- Lead conversion creates Customer.
- Converted leads become locked.
- No direct Booking from Lead.

### Suggested Features

- Search.
- Filters.
- Export.
- Pagination.
- Duplicate warning.
- Activity linkage.

### Exit Criteria

- Leads can move through lifecycle.
- Lead conversion works.
- Audit tracking works.

## 9. Phase 5 — Customer Module

### Objective

Build the validated customer entity.

### Scope

- Customer list.
- Customer read/edit.
- Customer ownership.
- Customer activity timeline.
- Relationship history.

### Important Rules

- Customer must originate from Lead.
- No direct customer creation in Phase 1.
- Customer remains linked to source Lead.

### Exit Criteria

- Customer conversion stable.
- Customer history retained.

## 10. Phase 6 — Booking Module

### Objective

Build the revenue transaction layer.

### Scope

- Booking creation.
- Booking lifecycle.
- Payment tracking foundation.
- Booking status tracking.
- Cancellation flow.

### Important Rules

- Booking must come from Customer.
- Booking cannot be deleted.
- Cancellation reason mandatory.

### Exit Criteria

- Revenue pipeline functional.
- Booking lifecycle stable.

## 11. Phase 7 — Activity Modules

### Objective

Build structured engagement tracking.

### Modules

- Meeting
- Call
- Task
- Calendar

### Scope

- Lead/customer linkage.
- Follow-up management.
- Task assignment.
- Task completion.
- Meeting tracking.
- Call tracking.
- Calendar reminders.

### Important Rules

- Tasks require completion remarks.
- Meetings require outcome.
- Calls require discussion and outcome.
- Activities must connect to Lead or Customer.

### Exit Criteria

- Activity tracking stable.
- Follow-up visibility works.

## 12. Phase 8 — System Control Modules

### Objective

Build monitoring, governance, and accountability systems.

### Modules

- Audit Logs
- User Activity Tracking
- Session Tracking
- Approval framework foundation

### Scope

- Login tracking.
- Logout tracking.
- Session duration.
- User action tracking.
- Active sessions dashboard.
- Audit event tracking.

### Locked Rules

- Session timeout = 15 minutes.
- Short session threshold = 2 minutes.
- Tracking level = Detailed.

### Exit Criteria

- User monitoring operational.
- Audit visibility operational.

## 13. Phase 9 — Dashboard and Reporting

### Objective

Provide operational and business visibility.

### Scope

- KPI cards.
- Lead conversion reports.
- Booking revenue reports.
- User performance.
- Branch performance.
- Pending tasks.
- Overdue activities.

### Exit Criteria

- Basic reporting operational.
- Dashboard stable.

## 14. Phase 10 — Advanced Features and Integrations

### Objective

Add advanced automation and integrations.

### Modules and Features

- Import Wizard
- Lead Source administration
- Email integration
- Email templates
- WhatsApp Business integration
- Website webhook capture
- Meta Lead Ads integration
- Auto routing engine
- Live updates
- Task Kanban
- Campaigns
- Voice AI calling

### Important Note

These features should come only after the CRM foundation is stable.

## 15. Phase-by-Phase GitHub Strategy

Each phase should:

1. Be broken into small issues.
2. Have one clear purpose per issue.
3. Be implemented by Codex in isolated tasks.
4. Be reviewed before merge.
5. Be tested before next phase.

### Example

Instead of:

```text
Build Lead module
```

Use:

```text
Create Lead database schema
Create Lead API endpoints
Create Lead list page
Create Lead create form
Create Lead detail page
Implement Lead duplicate detection
Implement Lead conversion flow
```

## 16. Final Recommendation

The safest build strategy is:

```text
Strong foundation first
Business pipeline second
Advanced automation later
```

This keeps the Retail CRM:

- scalable
- maintainable
- reviewable
- testable
- Codex-friendly
