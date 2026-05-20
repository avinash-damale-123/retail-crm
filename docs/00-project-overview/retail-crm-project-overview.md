# Retail CRM Project Overview

## 1. Purpose

Retail CRM is a custom customer relationship management system designed for retail travel business operations. The system is being built from scratch using finalized business requirement documents and the current Satguru Retail CRM user manual as reference.

The goal is to create a clean, scalable, and implementation-ready CRM that supports lead handling, customer management, bookings, activities, access control, reporting, and user activity monitoring.

## 2. Source of Truth

This project will use two reference groups:

1. Final Retail CRM requirement documents
   - These define the new CRM business rules and final module behavior.

2. Current system user manual
   - This is used as a benchmark for the existing system behavior, already available modules, and advanced features.

The final requirement documents will take priority where there is any difference between old system behavior and the new CRM design.

## 3. Core Business Flow

The primary business pipeline is:

```text
Lead -> Customer -> Booking
```

### Lead

Lead is the entry point of business. It represents a raw inquiry or prospective customer. Revenue is not created at the Lead stage.

### Customer

Customer is created after a Lead is converted. Customer becomes the central business entity and can have multiple bookings and activities.

### Booking

Booking is the confirmed transaction and revenue layer. Booking must be created from Customer, not directly from Lead.

## 4. CRM Architecture Layers

The CRM is organized into four major layers.

### 4.1 Master Data Layer

This layer defines the organizational and reference foundation.

Modules:

- Country
- Region
- Branch
- Department

### 4.2 Core Business Layer

This layer defines the revenue pipeline.

Modules:

- Lead
- Customer
- Booking

### 4.3 Engagement Layer

This layer tracks user interactions and follow-up execution.

Modules:

- Meetings
- Calls
- Tasks
- Calendar

### 4.4 Control and System Layer

This layer controls users, permissions, governance, monitoring, and reporting.

Modules:

- User Management
- Roles and Permissions
- Permission Sets
- Field-Level Security
- User Activity Tracking
- Session Tracking
- Reports
- Dashboard
- Audit Logs

## 5. Key Design Principles

The new Retail CRM must follow these principles:

1. Build from finalized requirements, not assumptions.
2. Keep business rules documented before coding.
3. Use modular implementation.
4. Keep access control configurable and scalable.
5. Preserve historical records; avoid hard deletes where business history matters.
6. Derive branch and reporting context consistently.
7. Keep audit trails for important actions.
8. Use small GitHub issues for Codex implementation.
9. Review and test before every commit is treated as complete.

## 6. Development Workflow

The agreed development workflow is:

```text
Final documents -> Requirement summary -> GitHub tasks/issues -> Codex implementation -> Review -> Commit -> Test
```

This means Codex should be used only after requirements are converted into clear tasks.

## 7. Recommended Implementation Order

### Phase 0: Repository and Documentation Foundation

- Create repository structure
- Add project overview
- Add current system reference summary
- Add final requirement summary
- Add implementation roadmap

### Phase 1: Technical Foundation

- Frontend setup
- Backend setup
- Database setup
- Authentication foundation
- Base layout and navigation

### Phase 2: Master Modules

- Country
- Region
- Branch
- Department

### Phase 3: Access Control and Users

- Roles
- Permission Sets
- User Management
- Branch access
- Field-level security foundation

### Phase 4: Core Business Modules

- Lead
- Customer
- Booking

### Phase 5: Activity Modules

- Meetings
- Calls
- Tasks
- Calendar integration

### Phase 6: System and Reporting Modules

- User Activity Tracking
- Session Tracking
- Reports
- Dashboard
- Audit Logs

### Phase 7: Advanced Features

- Import wizard
- Email integration
- WhatsApp integration
- Website webhook capture
- Meta Lead Ads
- Auto routing
- Live updates
- Task Kanban board

## 8. Initial Technical Direction

Recommended starting stack:

- Frontend: Next.js / React
- Language: TypeScript
- Styling: Tailwind CSS
- Database: PostgreSQL
- ORM: Prisma
- API: REST-first approach
- Authentication: JWT/session-based authentication with RBAC

The final technical stack can still be refined before development begins.

## 9. Repository Structure

```text
retail-crm/
├── README.md
├── docs/
│   ├── 00-project-overview/
│   ├── 01-current-system-reference/
│   ├── 02-final-requirements/
│   ├── 03-master-modules/
│   ├── 04-access-control/
│   ├── 05-core-business-modules/
│   ├── 06-activity-modules/
│   ├── 07-system-modules/
│   └── 08-technical-architecture/
├── frontend/
├── backend/
├── database/
├── api/
└── deployment/
```

## 10. Current Status

The repository foundation has been initialized. The next documentation step is to add the current system reference summary and final requirement summary so that future Codex tasks have clear context.
