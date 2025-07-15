

# Week 3 Assignment  - Task Management Application

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-06B6D4)](https://tailwindcss.com/)

A modern task management application built with React.js and styled with Tailwind CSS, featuring dark/light mode toggle, API integration, and responsive design.

![Application Screenshot](./public/screenshot.png)

## Features

- 🌓 **Theme Switching**: Light/dark mode with system preference detection
- 📱 **Responsive Design**: Works on all device sizes
- 📝 **Task Management**: Create, edit, and organize tasks
- 📰 **API Integration**: Fetch and display posts from JSONPlaceholder
- 🏠 **Multi-page Navigation**: Home, Tasks, and Posts pages
- 💾 **Local Storage**: Persists theme preference across sessions


## Project Structure

 ```tree
src/
├── api/ # API service functions
│ └── posts.js # Posts API integration
├── assets/ # Static assets
├── components/ # Reusable components
│ ├── Button.jsx # Custom button component
│ ├── Card.jsx # Card component
│ ├── Footer.jsx # Page footer
│ ├── Layout.jsx # Application layout
│ ├── Navbar.jsx # Navigation bar
│ ├── Posts.jsx # Posts page component
│ └── TaskManager.jsx # Task management component
├── context/ # Context providers
│ └── ThemeContext.jsx # Theme management
├── pages/ # Page components
│ └── Home.jsx # Home page
├── utils/ # Utility functions
│ └── useLocalStorage.js # Custom hook
├── App.jsx # Main application
├── main.jsx # Entry point
└── index.css # Global styles
 ```

## Installation

1. Clone the repository:
   ```bash
   git clone hhttps://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Anthonyyos22.git
   cd week-3-react-js-assignment-Anthonyyos22
   ```
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```
4. Open your browser at:
## 🌐 Live Demo

[![Visit on Vercel](https://img.shields.io/badge/Live%20Site-vercel.app-blue?logo=vercel)](https://wk3-task-manager.vercel.app/)
[![Run Locally](https://img.shields.io/badge/Localhost-5173-orange?logo=localhost)](http://localhost:5173)

