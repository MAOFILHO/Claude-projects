# K21 Sales Dashboard

An interactive SaaS sales performance dashboard built with React and Recharts.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-latest-646CFF?logo=vite) ![Recharts](https://img.shields.io/badge/Recharts-2.8-22B5BF)

---

## Overview

K21 Sales Dashboard is a fictional quarterly performance dashboard for a SaaS company. It features KPI cards, an interactive area chart, and a bar chart — all filterable by time period.

## Features

- **4 KPI Cards** — Total Revenue, Active Customers, Churn Rate, Avg Deal Size
- **Area Chart** — Monthly revenue trend with gradient fill (last 12 or 6 months)
- **Bar Chart** — Revenue breakdown by product tier (Free, Pro, Enterprise)
- **Period Filter** — Dropdown that updates both charts simultaneously
- **Light theme** — White background, navy accents, card-based layout

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Recharts](https://recharts.org) | Chart components |

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher

### Installation

```bash
# Download the project
https://download-directory.github.io/?url=https://github.com/MAOFILHO/Claude-artifacts/tree/main/k21-dashboard

cd Claude-artifacts/k21-dashboard

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project Structure

```
k21-dashboard/
├── public/
├── src/
│   ├── App.jsx        # Main dashboard component
│   └── main.jsx       # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Screenshots

> Dashboard includes a responsive 4-column KPI header, area chart, and bar chart with a shared period filter.

---

Built with [Claude](https://claude.ai) · Part of the [Claude Artifacts](https://github.com/MAOFILHO/Claude-artifacts) collection
