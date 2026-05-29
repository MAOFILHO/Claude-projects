# K21 Sales Dashboard

An interactive SaaS sales performance dashboard built with React and Recharts.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-latest-646CFF?logo=vite&logoColor=white) ![Recharts](https://img.shields.io/badge/Recharts-2.8-22B5BF?logo=react&logoColor=white) ![License](https://img.shields.io/badge/License-MIT-green)

---

## Overview

K21 Sales Dashboard is a fictional quarterly performance dashboard for a SaaS company. It visualises revenue trends, customer metrics, and product tier breakdowns in a clean, card-based UI — with a period filter that updates all charts simultaneously.

---

## Screenshot

![K21 Sales Dashboard](./screenshot.png)
> *Add a screenshot by capturing the running app and saving it as `screenshot.png` in the project root.*

---

## Features

- **4 KPI Cards** — Total Revenue, Active Customers, Churn Rate, and Avg Deal Size, each with a quarter-over-quarter change indicator
- **Area Chart** — Monthly revenue trend with a soft gradient fill, switchable between last 12 or 6 months
- **Bar Chart** — Revenue breakdown by product tier (Free, Pro, Enterprise)
- **Period Filter** — Single dropdown that updates both charts simultaneously
- **Light theme** — White background, navy accents, subtle card shadows, Plus Jakarta Sans typography

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Recharts 2.8](https://recharts.org) | Chart components |

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- npm (included with Node.js)

### Installation

```bash
# Clone the repo
git clone https://github.com/MAOFILHO/Claude-artifacts.git

# Navigate into the project folder
cd Claude-artifacts/k21-dashboard

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Output lands in the `dist/` folder — ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## Project Structure

```
k21-dashboard/
├── public/
├── src/
│   ├── App.jsx        # Main dashboard component (KPIs, charts, filter logic)
│   └── main.jsx       # React entry point
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

## Roadmap

- [ ] Add a donut chart for customer segment breakdown
- [ ] Dark mode toggle
- [ ] CSV data export
- [ ] Responsive layout for mobile

---

## License

This project is open source under the [MIT License](LICENSE).

---

## About

Built with [Claude](https://claude.ai) · Part of the [Claude Artifacts](https://github.com/MAOFILHO/Claude-artifacts) collection
