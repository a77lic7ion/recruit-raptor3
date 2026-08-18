# Visual verification notes

- The live dashboard renders with the full sidebar and the main workspace.
- The collapse control successfully changes the sidebar into a narrow icon rail.
- After collapse, the main workspace expands and the hamburger reopen control appears in the top-left area.
- The browser preview currently shows the KPI cards stacked vertically at the captured viewport size; this should be reviewed during the next responsive refinement pass.
- The page is in Preview mode and therefore cannot be shared directly until the project is published.

- Calendar navigation renders and is reachable from the sidebar.
- Calendar shows selectable October days, existing interview/start-date/follow-up chips, and a selected-day agenda.
- Selected day 14 correctly shows the Nadine Williams interview at 10:30.
- The captured preview confirms the add-reminder and add-task controls are visible; task modal interaction still needs a dedicated click-through check.

- The Add reminder dialog opens from the calendar and exposes reminder title, type, time, and a 30-minute reminder checkbox.
- A sample title can be entered and the task type selector is interactive.
- The save button remains disabled until a title is entered, providing a useful validation state.

- The responsive calendar check renders the calendar grid and selected-day agenda without a runtime error.
- Calendar task labels remain readable in the captured responsive view, and the completion control is present.
- The selected-day agenda now shows the linked candidate and reminder state, confirming that the data model is reflected in the UI.

- Settings now presents provider-native rows for OpenAI, Mistral, Gemini, OpenRouter, Nous, and a custom endpoint option.
- Provider endpoint fields are prefilled, and the selected provider exposes API-key entry, Test connection, Fetch models, model selection, and Save provider settings controls.
- The settings page renders successfully in the live preview with the new black-orange treatment.

- The Candidates workspace now exposes edit actions on each candidate card.
- Nadine Williams’s edit modal opens with role, location, and pipeline stage controls plus Save candidate and Cancel actions.
- The edit flow is wired to local UI state so saved changes update the candidate card during the current session.

- The CV Parser now moves from document selection to a draft candidate review state.
- The review state exposes editable name, suggested role, and location fields, a confidence control, source-evidence text, and an explicit Save candidate draft action.
- The extraction transition is represented with a loading state before the review form appears.

- Shaun’s CV preview now shows a protected mapping preview label and the manual fallback control.
- The failure state clearly says that no candidate was saved and offers Continue with manual entry.
- The fallback path was verified in the live preview without a runtime error.

- The Clients workspace now shows local workspace record counts, an Add client action, and edit controls on each client row.
- The same management component is used for vacancies, placements, and commissions with context-specific labels and seeded test records.

- Dashboard commission values now render through the shared ZAR formatter as R amounts using the en-ZA locale.
- The activity feed’s commission amount also uses the shared formatter.
- Settings continues to expose the AI provider configuration area alongside the South African currency standardization work.

- Candidate salary ranges now render as localized ZAR amounts such as R 28 000–R 34 000.
- The Commissions workspace shows paid and expected values as ZAR amounts.
- The commission record editor explicitly labels its monetary field as Commission / invoice value (ZAR).

- The Placements workspace now displays commission values as ZAR amounts, including R 42 500 and R 34 000, alongside candidate and client context.
- This confirms the placement money surface is covered by the shared currency formatting approach.
- Reference alignment pass: the supplied Raptor Recruiter logo renders in the sidebar and onboarding card; signup and existing-user login tabs render as separate aligned controls; the logged-in desktop header shows Workspace, workspace selector, green readiness indicator, recruiter identity, and avatar in one centered row.
- Placements workspace shows the centered Add placement action alongside Filter and Add record controls.
- The 375px onboarding screenshot shows the logo, auth toggle, stacked inputs, and centered orange action button without overlap.
- A separate Playwright mobile logged-in viewport attempt was unavailable because the configured Firefox executable was not installed; responsive mobile onboarding was verified instead.
- Final desktop geometry measurement: workspace selector group rendered as flex with 8px gap and centered alignment; status/recruiter group rendered as flex with 10px gap and centered alignment; Upload CV rendered inline-flex with center/center alignment; Add candidate rendered inline-flex with center/center alignment; Filter, Add record, and Add placement were measured earlier with the same center alignment rules.
- Final login submit measurement: Log in rendered inline-flex with align-items:center, justify-content:center, and text-align:center.
