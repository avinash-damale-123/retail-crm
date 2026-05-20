# Current System Reference Summary

## 1. Purpose of This Document

This document summarizes the existing Satguru Retail CRM system based on the current user manual. It is used as a benchmark and reference while building the new Retail CRM from scratch.

This document does not override the finalized requirement documents. Where the current system and final requirements differ, the final requirement documents will be treated as the source of truth.

## 2. Current System Reference

Reference document:

- Satguru Retail CRM User Manual v2.0
- Version: May 2026
- Scope: Sales, Operations, and Administration

The current system includes features across lead handling, customer conversion, booking management, activities, tasks, dashboard analytics, integrations, settings, user management, permissions, and activity monitoring.

## 3. Major Modules in Current System

The current CRM includes the following major modules:

- Home
- Dashboard
- Leads
- Customers
- Bookings
- Calendar
- Activities
- Meetings
- Calls
- Tasks
- Campaigns
- Approvals
- Reports
- Notifications
- Settings
- Profile

## 4. Current Business Flow

The current system follows a broadly similar business flow:

```text
Lead -> Customer -> Booking
```

### Lead

A Lead represents a prospective customer who has shown interest but has not yet become a paying customer.

### Customer

Customers are created by converting leads. The manual clearly states that customers cannot be created directly from the UI. Every customer must originate from a lead so source attribution is preserved.

### Booking

A Booking represents a confirmed travel arrangement. It includes itinerary, payment status, departure dates, destination, party details, and revenue information.

## 5. Existing Lead Module Behavior

The Leads module is the largest and most-used module in the current CRM.

Current Lead features include:

- Lead list page
- Live update badge
- Search
- Quick filters
- Advanced filters
- CSV export
- Excel export
- Print
- Copy
- Import
- Add Lead
- Lead detail page
- Audit history
- Timeline
- Email action
- WhatsApp action
- Follow-up action
- Convert to Customer action
- Soft delete / archive

### Current Lead Creation

Manual lead creation currently requires only:

- First Name
- Mobile

Other fields are optional but recommended.

### Current Duplicate Detection

On save, the system checks existing leads using:

- Mobile number
- Email

If duplicates are found, the user receives a warning and can either go back/edit or create anyway.

### Current Lead Detail Page

The current Lead detail page includes:

- Overview
- Travel Details
- Follow-ups
- Notes
- History
- Timeline

### Current Lead Audit Trail

The History tab records:

- Field name
- Old value
- New value
- User who changed it
- Date and time

Tracked event types include:

- Status change
- Main status change
- Assignee change
- Field update
- Archived
- Auto routed
- Webhook intake
- Meta Lead Ad
- Bulk import / update
- Email sent / failed
- WhatsApp sent / received / failed

## 6. Existing Customer Module Behavior

Customers are converted leads.

Current customer behavior includes:

- Customer ID generation
- Loyalty tier
- Total trips
- Lifetime value
- Active / inactive / dormant status
- VIP flag
- Blacklist flag
- Search
- Filters
- Pagination
- Exports

Important current rule:

```text
Customers cannot be created directly through the UI.
```

This aligns well with the new CRM direction where Customer is created from Lead conversion.

## 7. Existing Booking Module Behavior

A Booking is a confirmed travel arrangement.

Current booking lifecycle includes:

- Draft
- Confirmed
- Ticketed
- Departed
- Completed
- Cancelled

Bookings support:

- Destination
- Dates
- Party composition
- Total amount
- Currency
- Payment status
- Booking status
- Link to originating lead or customer
- Follow-up workflow
- Calendar visibility for departure dates

The new CRM requirement should simplify and control Booking as the revenue layer connected to Customer.

## 8. Existing Calendar Behavior

The Calendar module provides a cross-module monthly calendar.

It shows:

- Follow-ups
- Meetings
- Booking departure dates
- Task due dates

Clicking an event opens the related source record.

## 9. Existing Tasks Module Behavior

Tasks are work items linked to Lead or Customer.

Current task features include:

- List view
- Kanban board view
- Status filters
- Due date
- Assignee
- Priority
- Category
- Reminder
- Overdue badge
- Drag-and-drop status movement
- Completion remarks required when marking task as completed

Current task statuses include:

- Pending
- In Progress
- Rescheduled
- Completed
- Cancelled

The finalized new requirement keeps Task as a core Phase 1 activity module but may use simplified statuses such as Open, In Progress, Completed, and Cancelled.

## 10. Existing Activities, Meetings, and Calls

The current system has an Activities module that aggregates interactions.

It includes sub-tabs for:

- Meetings
- Calls
- Emails

The current system also has dedicated pages for:

- Meetings
- Calls

### Meetings

Current Meetings support:

- Scheduled / held outcomes
- Type filters
- Search by title or attendee
- Link to lead or customer
- Location or platform details
- Follow-up date

### Calls

Current Calls support:

- Direction
- Call nature
- Outcome
- Duration
- Next-call date
- Link to lead or customer

The new CRM requirement keeps Meetings and Calls as dedicated structured activity modules.

## 11. Existing Email Integration

The current system supports outbound email from lead and customer records.

Features include:

- Compose dialog
- Template picker
- Placeholder replacement
- SMTP configuration
- Email timeline logging
- Email success/failure tracking

Email templates support placeholders such as:

- first name
- last name
- destination
- reference number
- mobile
- email

Email is useful but should be treated as an advanced phase unless required earlier.

## 12. Existing WhatsApp Business Integration

The current system supports WhatsApp Business through Meta Cloud API.

Features include:

- Outbound text messages
- Template messages
- 24-hour customer service window handling
- Inbound message logging
- Phone matching against leads
- Delivery/read receipts
- Timeline updates

This is an advanced integration and should be placed after core CRM foundation unless prioritized separately.

## 13. Existing Import Wizard

The current system includes a robust import wizard for leads.

Capabilities:

- CSV upload
- Excel upload
- Template download
- Auto column mapping
- Validation preview
- Duplicate detection
- Duplicate strategies: Skip, Update, Force
- Failed row CSV download
- Routing engine integration

This is a strong feature but should come after core Lead module stability.

## 14. Existing Auto Routing Engine

The current system has rules-based auto-assignment.

Routing can evaluate:

- Source
- Priority
- Travel type
- Retail category
- Branch
- Destination

Assignment modes:

- Specific user
- Round-robin pool

This is useful for future lead automation after the core Lead/User/Branch foundation is stable.

## 15. Existing Website and Meta Lead Ads Capture

The current system supports:

- Website webhook capture
- HMAC-signed public endpoint
- Meta Lead Ads webhook
- Per-form mapping
- Default source and branch mapping

These are advanced lead capture channels and should be treated as later-phase integrations.

## 16. Existing Dashboard and Reports

The current Dashboard includes:

- KPI cards
- Previous-period delta arrows
- Conversion funnel
- Revenue trend
- Source breakdown
- Branch breakdown
- Sales leaderboard
- Print/PDF export

Reports include:

- Conversion report
- Revenue report
- Destinations report
- Source attribution
- Agent performance

These are important but should be implemented after core data modules are stable.

## 17. Existing Settings and Admin Modules

The current Settings area includes:

- Masters
- Lead Sources
- Routing Rules
- Email Integration
- Email Templates
- WhatsApp Business
- Website/Webhook Capture
- Meta Lead Ads
- Regions
- Departments
- Branch Management
- User Management
- Roles
- Permission Sets
- Roles and Permissions legacy matrix
- Field-Level Security
- Sharing Rules
- Access Delegation
- Approval Rules
- SLA / Escalation
- Voice AI Calling
- Audit Logs
- Active Sessions
- Activity Intelligence

The new CRM should not blindly copy all of these at once. These should be divided into foundation, Phase 1, and future phases.

## 18. Existing User and Access Control Concepts

The current manual references:

- User Management
- Roles
- Permission Sets
- Field-Level Security
- Sharing Rules
- Access Delegation
- Audit Logs
- Active Sessions
- Activity Intelligence

This aligns with the new CRM direction, but the new system should follow the finalized Role and Permission documentation as the primary source of truth.

## 19. Key Items to Reuse Conceptually

The following ideas from the current system are valuable and should be considered in the new build:

- Lead audit history
- Timeline view
- Lead duplicate detection
- Customer created only from Lead conversion
- Booking as revenue object
- Export capability
- Import wizard design
- Task Kanban concept
- Completion remarks for tasks
- Calendar integration
- Email / WhatsApp integrations
- User activity monitoring
- Active session monitoring
- Field-level security
- Permission sets

## 20. Key Items to Rebuild More Cleanly

The new CRM should rebuild the following areas using finalized documents:

- Country, Region, Branch, Department foundation
- Role and Permission model
- User Management model
- Branch-based access logic
- Lead status and conversion rules
- Customer creation rules
- Booking dependency on Customer
- Meetings, Calls, and Tasks as structured activity modules
- User Activity and Session Tracking dashboard

## 21. Suggested Phase Classification

### Phase 1 Foundation

- Authentication
- User Management
- Roles and Permissions
- Country
- Region
- Branch
- Department

### Phase 1 Business Core

- Lead
- Customer
- Booking
- Meetings
- Calls
- Tasks

### Phase 1 System Control

- Audit logging
- User activity tracking
- Session tracking
- Basic dashboard
- Basic reports

### Phase 2 Advanced Features

- Import wizard
- Lead source administration
- Auto routing engine
- Calendar enhancement
- Task Kanban
- Email templates
- Email integration

### Phase 3 Integrations

- WhatsApp Business
- Website webhook
- Meta Lead Ads
- Campaigns
- Live updates
- Voice AI calling

## 22. Final Interpretation

The current system is a useful benchmark, but the new Retail CRM should be built from clean requirements.

The final implementation should follow this priority:

```text
Final requirement documents first
Current system manual second
Codex tasks third
```

This keeps the new CRM structured, scalable, and aligned with the finalized business architecture.
