# React Notes App

A simple note-taking application built with React and Vite.

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Design Decisions

### Storage Strategy
- Using localStorage for client-side persistence
- Key naming ('react-notes-app') chosen for clarity and namespace isolation
- Notes stored as JSON array for easy serialization/deserialization

### Component Design
- AddNote: Form component with controlled inputs for predictable state management
- NotesList: Display component with useEffect for storage synchronization
- App: Parent component managing navigation state

### State Management
- useState for form and UI state (simple, sufficient for app scope)
- Props for component communication
- No complex state management needed given the app's size

### Styling
- Tailwind CSS for rapid development and consistent design
- Custom gradient background for visual appeal
- Responsive design with mobile-first approach

### Navigation
- Simple tab-based navigation
- Clear visual feedback for active state
- Automatic switch to view after adding note