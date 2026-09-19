# Forms Quick Recall

- Controlled input: `value` or `checked` comes from state.
- Text/select/number controls read `event.target.value`.
- Checkboxes read `event.target.checked`.
- Use `name` plus a computed property for shared change handlers.
- Call `event.preventDefault()` during client-handled submission.
- Keep errors by field and validate on submit or at an intentional time.
- Convert numeric strings before sending normalized data.
- Client validation improves UX; server validation remains required.

