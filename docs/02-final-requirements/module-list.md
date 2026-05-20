# Retail CRM Module List

## 1. Purpose

This document defines the complete module list for the new Retail CRM. It acts as the high-level scope reference for planning, GitHub issues, Codex tasks, implementation, and testing.

## 2. Module Classification

The Retail CRM is divided into the following module groups:

1. Master Data Modules
2. Access Control and User Modules
3. Core Business Modules
4. Activity and Engagement Modules
5. System Control Modules
6. Reporting and Dashboard Modules
7. Advanced Integration Modules

## 3. Master Data Modules

These modules create the foundation of the CRM.

### 3.1 Country Module

Purpose:

- Maintain standardized country records.
- Support lead, customer, booking, reporting, and filters.
- Enforce no-delete architecture.
- Allow only active countries to be used in new records.

Primary access:

- Super Admin only.

### 3.2 Region Module

Purpose:

- Define internal operational groupings.
- Support branch grouping and reporting segmentation.
- Region is independent from Country.

Primary access:

- Super Admin only.

### 3.3 Branch Module

Purpose:

- Represent physical or operational offices.
- Connect Region and Country independently.
- Drive user assignment, branch visibility, reporting, and operational ownership.

Primary access:

- Super Admin only.

### 3.4 Department Module

Purpose:

- Define organizational functional hierarchy.
- Support Department -> Sub Department -> Team.
- Support role creation and user classification.

Primary access:

- Super Admin only.

## 4. Access Control and User Modules

These modules control who can access the CRM and what they can do.

### 4.1 Role and Permission Module

Purpose:

- Define organizational hierarchy.
- Separate Role from Permission Set.
- Define module access, action access, record visibility, branch access, and field-level security.

Core principle:

```text
Role = hierarchy and reporting
Permission Set = capabilities and actions
```

### 4.2 Permission Set Module

Purpose:

- Define reusable permission bundles.
- Control view, create, edit, delete, export, import, assign, approve, convert, merge, and other actions.
- Support field-level permissions.

### 4.3 User Management Module

Purpose:

- Create and manage CRM users.
- Assign department, role, branch, reporting manager, and user status.
- Only Super Admin can create/edit/activate/deactivate users in Phase 1.

Important rules:

- No user deletion.
- Active/Inactive only.
- Inactive users cannot log in or be assigned new records.

## 5. Core Business Modules

These modules define the main revenue pipeline.

### 5.1 Lead Module

Purpose:

- Capture raw retail inquiries and prospects.
- Track qualification, assignment, follow-up, status, and conversion.

Key rules:

- Lead is the entry point.
- Contact Number is mandatory.
- Email is optional.
- Lead Source is a single field in create form.
- Services Interested is multi-select.
- Lead Score is removed from Phase 1.
- Lead Status uses flexible transition model.
- Quotation Sent remains a manual lead status in Phase 1.
- Converted leads become read-only and audit-locked.

### 5.2 Customer Module

Purpose:

- Represent converted and validated business entities.
- Act as the central client record.
- Hold relationship history, bookings, and activities.

Key rules:

- Customer cannot be created directly in Phase 1.
- Customer must be created through Lead conversion.
- No silent duplicate customer creation.

### 5.3 Booking Module

Purpose:

- Represent confirmed business transactions and revenue.
- Act as the money layer of the CRM.

Key rules:

- Booking must be created from Customer.
- Booking cannot be created directly from Lead.
- Booking cannot be deleted.
- Booking can only be cancelled or marked inactive where applicable.
- Cancellation reason is mandatory when booking is cancelled.

## 6. Activity and Engagement Modules

These modules track interactions and execution.

### 6.1 Meeting Module

Purpose:

- Capture physical and virtual meetings with Leads or Customers.
- Record discussion, outcomes, follow-up, and linked tasks.

Key rules:

- Meeting must link to Lead or Customer.
- Meeting Type: Virtual or Physical.
- End time must be greater than start time.
- Outcome/summary is mandatory.
- Follow-up date is mandatory when follow-up is required.

### 6.2 Call Module

Purpose:

- Capture call-based interactions with Leads or Customers.
- Record call direction, nature, duration, discussion, outcome, and next action.

Key rules:

- Call must link to Lead or Customer.
- Call Start Time and End Time are mandatory.
- Duration is auto-calculated.
- Detailed notes and outcome are mandatory.
- Follow-up details are required when follow-up is marked Yes.

### 6.3 Task Module

Purpose:

- Capture actionable follow-up work after calls, meetings, or general business needs.
- Ensure no commitment is missed.

Key rules:

- Task must link to Lead or Customer.
- Assigned user is mandatory.
- Due date is mandatory.
- Completion remarks are mandatory when task is completed.
- Overdue logic applies when due date is passed and task is not completed.

### 6.4 Calendar Module

Purpose:

- Display meetings, calls, task due dates, follow-ups, and booking-related dates.
- Support reminders and execution visibility.

Phase:

- Basic calendar can be Phase 1 or Phase 2 depending on development priority.

## 7. System Control Modules

These modules support governance, monitoring, and auditability.

### 7.1 User Activity and Session Tracking Module

Purpose:

- Track login, logout, session timeout, user actions, active sessions, and detailed CRM usage.

Locked rules:

- Session timeout = 15 minutes.
- Short session threshold = 2 minutes.
- Tracking level = Detailed.
- Idle time beyond 15 minutes is excluded from active duration.
- Unified activity and session dashboard is mandatory.

### 7.2 Audit Log Module

Purpose:

- Track important system and data changes.
- Support investigation and accountability.

Initial scope:

- Record create/update/status changes.
- User and permission changes.
- Lead conversion.
- Assignment changes.
- Sensitive action logs.

### 7.3 Approval Module

Purpose:

- Control sensitive business actions such as discounts, exceptions, refunds, special bookings, or overrides.

Phase:

- Basic approval framework can be designed early but implemented after core modules.

## 8. Reporting and Dashboard Modules

### 8.1 Dashboard

Purpose:

- Provide high-level business performance visibility.

Possible metrics:

- Leads created.
- Leads converted.
- Booking revenue.
- Branch performance.
- User performance.
- Pending tasks.
- Overdue follow-ups.

### 8.2 Reports

Purpose:

- Provide structured reporting for business review.

Initial reports:

- Lead conversion report.
- Booking revenue report.
- Branch performance report.
- User performance report.
- Activity performance report.

## 9. Advanced Integration Modules

These modules are useful but should come after the core CRM foundation is stable.

### 9.1 Import Wizard

Purpose:

- Bulk import leads with validation, duplicate detection, mapping, and result summary.

### 9.2 Email Integration

Purpose:

- Send emails from Lead/Customer records.
- Support templates and timeline logs.

### 9.3 WhatsApp Business Integration

Purpose:

- Send and receive WhatsApp messages using Meta Cloud API.
- Link inbound replies to leads/customers.

### 9.4 Website Webhook Capture

Purpose:

- Capture leads from website forms through secure API endpoints.

### 9.5 Meta Lead Ads Integration

Purpose:

- Capture Facebook/Instagram Lead Ads automatically.

### 9.6 Auto Routing Engine

Purpose:

- Assign incoming leads automatically based on rules.

### 9.7 Live Updates

Purpose:

- Real-time updates for dashboard and lead list using SSE or WebSocket.

### 9.8 Campaigns

Purpose:

- Manage outbound lead/customer communication campaigns.

## 10. Final Phase 1 Scope Recommendation

The recommended Phase 1 scope is:

- Authentication foundation
- Country
- Region
- Branch
- Department
- Roles and Permissions
- User Management
- Lead
- Customer
- Booking
- Meeting
- Call
- Task
- Basic Audit Logs
- Basic User Activity and Session Tracking
- Basic Dashboard and Reports

## 11. Future Scope Recommendation

Future scope should include:

- Import wizard
- Email integration
- WhatsApp Business
- Website webhook
- Meta Lead Ads
- Auto routing
- Campaigns
- Advanced approvals
- Advanced dashboard analytics
- Live updates
- Voice AI calling
