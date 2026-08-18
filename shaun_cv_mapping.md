# Shaun CV Parsing Validation Mapping

This note records the parser validation mapping without storing the original identity number, email address, phone number, or reference contact numbers in application source code.

| Recruit Raptor field | Extracted value | Evidence |
|---|---|---|
| Candidate name | Shaun Gordon | CV page 1 header |
| Preferred role | Network Administrator / Network Engineer / IT Manager | Current and historical job titles across pages 3–8 |
| Location signal | South Africa with regional Southern Africa travel | Work history references Cape Town, Johannesburg, Eastern Cape, and regional African sites |
| Languages | English native; Afrikaans fair | CV page 1 |
| Education | Damelin College matriculated 1998; Microsoft A+, N+, MCP; Executrain Microsoft server/network training | CV page 1 |
| Core skills | Windows, Microsoft Office, Exchange, server administration, Active Directory, network infrastructure, call-centre technology, backups, security/antivirus, procurement, support | CV pages 1–8 |
| Hospitality relevance | Indirect industry adjacency through KLM Royal Dutch Airlines and Kenya Airways Southern Africa; no direct hotel, lodge, restaurant, or tourism employer identified | CV pages 3–5 |
| Current/most recent experience | Trustco Financial Services — Network Administrator; June 2012–Current in the supplied CV | CV page 8 |
| Candidate review flags | Verify current employment dates, confirm desired role, confirm current location, confirm salary and notice period, verify references before submission | Recruiter review rule |

The parser should route this candidate to a technical or aviation-support search rather than a hospitality role by default. If the agency is recruiting for hospitality and tourism technology roles, the recruiter can manually associate the candidate with a relevant vacancy after reviewing the extracted history.

Sensitive contact fields should be extracted into protected candidate fields only after the recruiter confirms them. They should not be echoed in logs, client-side analytics, demo fixtures, or source-controlled test data.
