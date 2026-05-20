# Retail CRM Business Flow

## 1. Purpose

This document defines the finalized high-level business flow of the new Retail CRM.

It explains:

- how records move through the CRM
- how modules connect
- which modules depend on others
- what the operational lifecycle looks like
- which business rules are critical

This document acts as the conceptual implementation guide before detailed module-level development.

## 2. Core Business Philosophy

The CRM is designed around a structured sales and service lifecycle.

The system must:

- track prospects
- convert qualified prospects into customers
- generate bookings from customers
- maintain activity history
- track follow-ups and tasks
- preserve accountability and auditability

The CRM should not behave like disconnected modules.

Every important record must connect logically to the business lifecycle.

## 3. Primary Business Pipeline

The main business flow is:

```text
Lead -> Customer -> Booking
```

This is the most important flow in the system.

## 4. Organizational Foundation Flow

Before operational data can exist, organizational structure must exist.

The organizational hierarchy is:

```text
Organization
-> Region
-> Branch
-> Department
-> Role
-> User
```

### Important Principles

- Region is independent from Country.
- Branch is the operational ownership layer.
- Department organizes functional structure.
- Role defines hierarchy.
- Permission Set defines capabilities.

## 5. Access Control Flow

The access-control model is:

```text
Role
+ Permission Set
+ Branch Access
+ Visibility Rules
= Final User Access
```

### Role

Defines:

- hierarchy
- reporting structure
- upward visibility

### Permission Set

Defines:

- actions
- module access
- field permissions
- sensitive operations

### Branch Access

Defines:

- where the user can operate

### Visibility Rules

Defines:

- which records the user can see

## 6. Lead Lifecycle Flow

Lead is the entry point of the CRM.

### Lead Creation Sources

Leads may originate from:

- Manual entry
- Website form
- Meta Lead Ads
- WhatsApp
- Import wizard
- Walk-in
- Referral
- Campaigns
- Other integrations

### Lead Creation Flow

```text
Lead Create
-> Assignment
-> Follow-up
-> Qualification
-> Quotation
-> Negotiation
-> Conversion or Closure
```

### Important Lead Rules

- Contact Number mandatory.
- Email optional.
- Duplicate detection required.
- Assignment must be tracked.
- Status changes must be auditable.
- Converted leads become locked.

### Lead Outcomes

A Lead can:

- Convert to Customer
- Become Lost
- Become Duplicate
- Become Invalid/Junk
- Be Archived

## 7. Customer Lifecycle Flow

Customer represents a validated and active business entity.

### Customer Creation

```text
Lead Conversion
-> Customer Creation
```

### Important Customer Rules

- Customer cannot be created directly in Phase 1.
- Customer must originate from Lead.
- Customer keeps historical linkage to Lead.
- Customer becomes the central relationship entity.

### Customer Capabilities

Customer can:

- have bookings
- have meetings
- have calls
- have tasks
- have communication history
- have activity timeline

## 8. Booking Lifecycle Flow

Booking represents confirmed business and revenue.

### Booking Creation

```text
Customer
-> Booking Create
```

### Important Booking Rules

- Booking cannot originate directly from Lead.
- Booking belongs to Customer.
- Booking is the revenue layer.
- Booking cannot be deleted.
- Cancellation requires reason.

### Booking Lifecycle Example

```text
Draft
-> Confirmed
-> Ticketed
-> Departed
-> Completed
```

Alternative outcome:

```text
Draft/Confirmed
-> Cancelled
```

## 9. Activity Flow

Activities support business execution and follow-up.

The CRM has three primary activity modules:

- Meetings
- Calls
- Tasks

## 10. Meeting Flow

Meetings represent structured discussions.

### Meeting Flow

```text
Lead or Customer
-> Meeting
-> Outcome
-> Follow-up
-> Optional Task
```

### Important Rules

- Meeting must link to Lead or Customer.
- Outcome mandatory.
- Follow-up date mandatory when required.
- Calendar integration supported.

## 11. Call Flow

Calls represent telephonic interactions.

### Call Flow

```text
Lead or Customer
-> Call
-> Outcome
-> Follow-up
-> Optional Task
```

### Important Rules

- Call must link to Lead or Customer.
- Call notes mandatory.
- Outcome mandatory.
- Follow-up logic supported.

## 12. Task Flow

Tasks represent actionable execution items.

### Task Creation Sources

Tasks may originate from:

- Meeting
- Call
- Lead follow-up
- Customer follow-up
- Internal work
- Booking support

### Task Flow

```text
Task Create
-> Assignment
-> In Progress
-> Completion
```

### Important Rules

- Assigned user mandatory.
- Due date mandatory.
- Completion remarks mandatory.
- Overdue logic supported.

## 13. Calendar Flow

Calendar acts as the visibility layer for execution.

Calendar may display:

- Meetings
- Calls
- Follow-ups
- Task due dates
- Booking dates

The calendar should support:

- reminders
- visibility
- operational planning

## 14. User Activity and Session Flow

The CRM must track user behavior and operational usage.

### Session Flow

```text
Login
-> Active Session
-> Activity Tracking
-> Logout or Timeout
```

### Locked Rules

- Session timeout = 15 minutes.
- Short session threshold = 2 minutes.
- Detailed tracking enabled.

### Tracking Examples

- login time
- logout time
- module visits
- actions performed
- session duration
- active sessions

## 15. Audit and Accountability Flow

Important operations must be auditable.

### Audit Scope

Examples:

- record create
- record update
- status changes
- assignment changes
- lead conversion
- permission changes
- sensitive operations

### Important Principle

```text
No important business action should happen silently.
```

## 16. Reporting Flow

Reports and dashboards derive information from operational modules.

### Reporting Sources

- Leads
- Customers
- Bookings
- Activities
- Users
- Branches

### Dashboard Examples

- lead conversion
- booking revenue
- branch performance
- user performance
- overdue tasks
- pending follow-ups

## 17. Integration Flow (Future)

Advanced integrations should connect cleanly into the business pipeline.

### Website/Webhook Flow

```text
Website Form
-> API/Webhook
-> Lead Create
-> Routing
-> Assignment
```

### Meta Lead Ads Flow

```text
Meta Lead Form
-> Webhook
-> Lead Create
-> Assignment
```

### WhatsApp Flow

```text
WhatsApp Message
-> CRM Log
-> Lead/Customer Match
-> Timeline Update
```

### Email Flow

```text
Email Send
-> Communication Log
-> Timeline Update
```

## 18. High-Level Dependency Map

```text
Country
Region
Branch
Department
    ↓
Roles & Permissions
    ↓
Users
    ↓
Lead
    ↓
Customer
    ↓
Booking
    ↓
Activities
    ↓
Reports & Dashboard
```

## 19. Business Flow Priorities

### Foundation First

Must exist before business modules:

- Country
- Region
- Branch
- Department
- Roles
- Permission Sets
- Users

### Revenue Pipeline Second

- Lead
- Customer
- Booking

### Execution Layer Third

- Meeting
- Call
- Task
- Calendar

### Governance Layer Fourth

- Audit logs
- User activity tracking
- Session tracking
- Reporting
- Dashboard

### Advanced Integrations Last

- Import wizard
- WhatsApp
- Email
- Meta Lead Ads
- Website webhook
- Auto routing
- Live updates

## 20. Final Architectural Principle

The Retail CRM should behave as one connected business ecosystem.

The system should always preserve:

- organizational structure
- accountability
- ownership
- auditability
- follow-up visibility
- conversion traceability
- revenue linkage

The final implementation philosophy is:

```text
Strong foundation
-> Controlled business flow
-> Structured execution
-> Transparent reporting
-> Advanced automation later
```
