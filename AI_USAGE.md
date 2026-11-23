# AI Usage Disclosure

## Tool used

- OpenAI Codex

## Representative prompts

- Implement the FocusBoard assignment described in the supplied project reference.
- Replace the existing weather dashboard with a responsive task dashboard.

## AI-assisted areas

The dashboard layout, sample task data, CRUD interactions, filtering, statistics, localStorage persistence, carousel, responsive CSS, and project documentation were generated with AI assistance.

## Reviewed implementation detail

The supplied reference required task persistence without allowing the sample data to overwrite saved work. The implementation initializes from localStorage when a saved value exists and only uses the sample tasks when no saved value is available.
