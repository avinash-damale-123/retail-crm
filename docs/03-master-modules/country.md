# Country Module

## 1. Purpose

The Country Module is a master/reference module used across the Retail CRM for destination, nationality, address, booking, reporting, and filter-related use cases.

Country is a foundational master and should be implemented before Lead, Customer, and Booking modules.

## 2. Business Role

Country supports:

- Lead nationality
- Lead travel destination
- Customer nationality
- Customer address country
- Booking destination
- Reports and dashboards
- Search and filters
- Future integrations

## 3. Access Control

Phase 1 access:

- Super Admin: Full access
- Admin: View only or controlled access, based on permission set
- Other users: No direct master management access

Country creation and updates should be controlled because it affects data consistency across the CRM.

## 4. Lifecycle Rules

Country follows a master-data lifecycle:

```text
Create -> Read -> Update -> Active/Inactive
```

Hard delete is not allowed.

## 5. Status Rules

### Active

Active countries are selectable in new operational records.

### Inactive

Inactive countries:

- remain visible in Country list
- remain visible in historical records
- remain visible in reports
- are not selectable in new records

## 6. Core Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| Country ID | System | Yes | Auto-generated display ID |
| Country Name | Text | Yes | Unique country name |
| Country Code | Text | Yes | Unique operational code |
| ISO Code | Text | Optional | Future integration support |
| Dial Code | Text | Optional | Phone country code support |
| Currency Code | Text | Optional | Default country currency |
| Status | Enum | Yes | Active / Inactive |
| Remarks | Text | Optional | Internal notes |
| Created By | System | Yes | Audit field |
| Created At | System | Yes | Audit field |
| Updated By | System | Yes | Audit field |
| Updated At | System | Yes | Audit field |

## 7. Validation Rules

- Country Name is mandatory.
- Country Name must be unique, case-insensitive.
- Country Code is mandatory.
- Country Code must be unique.
- Country Code should be uppercase.
- ISO Code should be uppercase if provided.
- Status defaults to Active.
- Whitespace should be trimmed.

## 8. Duplicate Handling

Duplicate prevention should check:

- Country Name
- Country Code
- ISO Code where provided

Duplicate checks must be case-insensitive.

## 9. Table/List View

Default columns:

- Country ID
- Country Name
- Country Code
- ISO Code
- Dial Code
- Currency Code
- Status
- Created At
- Updated At

## 10. Search Scope

Search should support:

- Country Name
- Country Code
- ISO Code
- Dial Code
- Currency Code

## 11. Filter Scope

Filters should include:

- Status
- Currency Code

## 12. Row Actions

Allowed row actions:

- View
- Edit
- Activate / Inactivate

Delete is not allowed.

## 13. API Direction

Recommended endpoints:

```text
GET /api/countries
POST /api/countries
GET /api/countries/{id}
PUT /api/countries/{id}
PATCH /api/countries/{id}/status
```

## 14. UI Direction

Country UI should support:

- list page
- create form
- edit form
- read/details view
- search
- filters
- pagination
- status badge

## 15. Audit Requirements

Audit should capture:

- country creation
- country update
- status change
- user performing the action
- timestamp

## 16. Phase 1 Implementation Scope

Phase 1 should implement:

- route/page foundation
- table layout foundation
- sample static rows if database integration is not ready
- API-ready structure
- field model and validation planning

Full database-backed CRUD can follow after the shared master module pattern is stable.

## 17. Final Rule

Country is a controlled master. It must remain clean, unique, auditable, and non-destructive.
