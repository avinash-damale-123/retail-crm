# Frontend Architecture

## 1. Purpose

This document defines the frontend architecture for the Retail CRM project.

The frontend must support:

- scalable module development
- reusable UI components
- role-based visibility
- responsive layouts
- clean navigation
- form-heavy workflows
- dashboard and reporting screens

## 2. Recommended Frontend Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## 3. Frontend Design Principles

### Modular Structure

Every module should be isolated and maintainable.

### Reusable Components

Common UI elements should be reusable.

Examples:

- table
- modal
- form field
- dropdown
- pagination
- filter panel
- status badge
- tabs
- cards

### Consistent Layout

All modules should follow the same layout structure.

### Responsive Design

The CRM should work properly on:

- desktop
- laptop
- tablet

Mobile support can be optimized later.

## 4. Recommended App Structure

Suggested high-level structure:

```text
frontend/
├── app/
├── components/
├── modules/
├── layouts/
├── services/
├── hooks/
├── lib/
├── styles/
└── types/
```

## 5. Module Structure Recommendation

Each business module should follow a consistent structure.

Example:

```text
modules/lead/
├── components/
├── forms/
├── tables/
├── services/
├── validation/
├── hooks/
└── pages/
```

## 6. Layout Structure

The CRM layout should support:

- left sidebar
- top navigation
- breadcrumbs
- page title area
- filters/actions toolbar
- responsive content area

## 7. Navigation Structure

Suggested sidebar grouping:

### Masters

- Country
- Region
- Branch
- Department

### CRM

- Leads
- Customers
- Bookings

### Activities

- Meetings
- Calls
- Tasks
- Calendar

### Reports

- Dashboard
- Reports

### Settings

- Users
- Roles
- Permission Sets
- Activity Tracking
- Audit Logs

## 8. Table Standards

Most modules will use data tables.

Standard table features:

- search
- filters
- pagination
- sorting
- export
- status badges
- row actions

## 9. Form Standards

All forms should:

- support validation
- support inline error messages
- support draft save where applicable later
- use consistent spacing and styling
- support audit fields

## 10. Frontend Security Principles

The frontend must:

- hide unauthorized modules
- hide unauthorized actions
- respect field-level permissions
- avoid exposing sensitive APIs

Frontend checks do not replace backend authorization.

## 11. Recommended Styling Approach

Tailwind CSS should be used with:

- reusable utility classes
- shared spacing standards
- shared color tokens later
- responsive layout helpers

## 12. Dashboard Direction

Dashboard should support:

- KPI cards
- charts
- branch summaries
- user summaries
- pending activities
- overdue tasks
- conversion funnel

## 13. UI Development Philosophy

The UI should prioritize:

```text
clean layout
-> fast navigation
-> business usability
-> consistency
-> scalability
```
