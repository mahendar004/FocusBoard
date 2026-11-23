# FocusBoard

FocusBoard is a responsive personal task dashboard built with React and Vite. It brings task planning, progress tracking, and short focus reminders into one screen.

## Features

- Six sample tasks on first use, covering multiple categories, priorities, and statuses.
- Create, edit, and delete tasks, with confirmation before deletion.
- Change task status directly from its task row.
- Search task titles and combine status tabs with a priority filter.
- Dynamic total, in-progress, completed, and completion-rate statistics.
- Three manually navigable Focus Notes slides.
- Task data saved in browser `localStorage` under `focusboard_tasks`.
- Responsive sidebar navigation and task layout for desktop, tablet, and mobile.
- Labeled controls, keyboard focus styles, and semantic landmarks.

## Technology

React 18, JavaScript, Vite, and CSS. `App.jsx` owns dashboard filters and task operations. `useLocalStorage` restores saved tasks on first render and persists task changes; the sample dataset is used only when no valid saved array exists. `useMemo` derives the visible task list from search, status, and priority filters. Statistics use the complete task collection, independently of active filters. The Focus Notes carousel keeps its active slide in component state.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Project structure

```text
src/
  components/   Sidebar, header, statistics, carousel, form, filters, and task list
  data/         Sample tasks, carousel notes, and storage key
  hooks/        Reusable localStorage state hook
  App.jsx       Dashboard composition, task operations, statistics, and filters
  styles.css    Responsive dashboard and form styling
  main.jsx      React entry point
```

The assignment guide references Figma frames, but those frames and a source repository were not included. The design follows the available written requirements. GitHub and hosted application links can be added after publication.
