# Recruit Raptor Recruitment Workflow

Recruit Raptor is structured around a practical small-agency hospitality and tourism workflow. A recruiter first records a client and vacancy, then adds or imports a candidate, reviews the candidate against the vacancy, schedules interviews and follow-ups, records an approved or offer stage, tracks the candidate’s start date, and finally manages placement guarantees and commission collection.

| Stage | Required information | Typical next action |
|---|---|---|
| New | Candidate identity, contact details, source, location, work eligibility, preferred role, hospitality experience | Screen candidate |
| Screening | Recruiter notes, salary expectation, notice period, language skills, work permit status, transport or relocation needs | Shortlist or decline |
| Shortlisted | Vacancy match, client fit, availability, references, key strengths, concerns | Schedule interview |
| Interview | Interview date, interviewer, feedback, score, candidate follow-up date | Approve, hold, or reject |
| Approved | Client approval, offer details, agreed salary, start date, conditions | Confirm placement |
| Placed | Start date, client, commission basis, guarantee period, invoice state | Track guarantee and payment |
| Closed | Outcome, reason, archived documents, retention/deletion date | Retain or delete according to agency policy |

Candidate records should support hospitality-specific fields such as role family, property type, guest-facing experience, food-and-beverage exposure, housekeeping or rooms experience, lodge or safari experience, shift flexibility, language capability, relocation readiness, right-to-work status, salary expectation in ZAR, and notice period. These fields should be editable after AI extraction and should never be treated as verified until the recruiter confirms them.

The dashboard should measure candidates in each stage, interviews due, start dates, open vacancies, placements this month, expected commission, invoiced commission, paid commission, and overdue commission. Calendar tasks should link to a candidate, client, vacancy, or placement whenever possible.

The CV parser should create a draft candidate, not an automatic final record. Each extracted field should eventually carry a confidence value and source evidence such as page number or section. The recruiter must be able to edit, accept, reject, or leave a field blank before saving.

The first product version can use session-persistent UI state for visual testing. The next implementation phase should map these concepts to tenant-aware database tables: agencies, users, clients, vacancies, candidates, candidate-stage-events, interviews, placements, commissions, documents, reminders, and ai-provider-settings.
