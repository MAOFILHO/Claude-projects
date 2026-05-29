# Claude Artifacts

> The goal is to build, iterate, and publish interactive content with Claude AI Artifacts.

---

## Overview

This repository accompanies a practical lab course on **Claude Artifacts** — the dedicated side-panel workspace in Claude.ai where generated content renders live, stays editable, and can be shared as a public link.

Rather than working with plain text replies in a chat thread, Artifacts give you a real workspace for code, documents, diagrams, and interactive applications. This lab walks you through creating five distinct Artifact types from scratch, iterating on them, and publishing them as shareable assets.

---

## What You'll Learn

- Understand what Artifacts are and how the side-panel workspace works
- Create formatted **Markdown** documents for reports and technical notes
- Build and preview live **HTML/CSS** single-page web designs
- Develop interactive **React** dashboards with charts and filters
- Generate **Mermaid** architecture diagrams and flowcharts from code
- Produce scalable **SVG** vector graphics and infographics
- Edit and refine work using chat prompts and version history
- Publish and share finalized Artifacts as public links

---

## Artifact Types Covered

| Type | What It Is | Typical Use |
|------|-----------|-------------|
| **Markdown** | Formatted text with headings, tables, code blocks, and links | Reports, READMEs, BRDs, technical docs, meeting notes |
| **HTML / CSS** | Standalone web pages with embedded styles, rendered live | Landing pages, mockups, email templates, simple sites |
| **React** | Interactive components with state and event handlers | Dashboards, calculators, forms, mini-apps, prototypes |
| **Mermaid** | Diagrams as code — flowcharts, ER diagrams, Gantt charts | Architecture diagrams, workflows, data models |
| **SVG** | Vector graphics in XML — shapes, paths, gradients, text | Icons, infographics, illustrations, slide-ready visuals |

> **Note:** Code in other languages (Python, SQL, Java, etc.) also renders as a code Artifact but does not execute interactively — you copy and run it locally.

---

## The Artifact Side Panel

When an Artifact is generated, Claude.ai splits into a **chat pane** (left) and an **Artifact panel** (right). Key controls in the panel:

| Control | Description |
|---------|-------------|
| **Preview / Code toggle** | Switch between the rendered output and raw source |
| **Copy** | Copy Artifact contents to clipboard |
| **Download** | Save the Artifact as a local file |
| **Publish** | Generate a public URL — no login required for viewers |
| **Version History** | View, compare, and revert to earlier versions |
| **Remix / Continue** | Fork a published Artifact into your own Claude account |

---

## When Artifacts Appear

Claude automatically decides when content warrants an Artifact. The general triggers are:

- Code longer than ~15 lines
- Standalone documents (reports, articles, structured docs)
- Anything renderable — HTML, React, Mermaid, SVG
- Content you're likely to copy, save, or share

**Artifacts do NOT appear for:**
- Conversational answers or short replies
- Short code snippets (under ~15 lines)
- Bulleted lists or step-by-step instructions in chat

> **Tip:** If Claude doesn't generate an Artifact automatically, ask explicitly:  
> *"Put this in an Artifact"* or *"Generate this as an HTML Artifact."*

---

## Deliverables

By the end of this project you will have a small portfolio of five published Artifacts — one of each type — demonstrating the full range of Claude's Artifact capabilities.

---

## Prerequisites

- A [Claude.ai](https://claude.ai) account (Free, Pro, or Team)
- Basic familiarity with prompting Claude conversationally
- No coding experience required (though it helps for the React and HTML labs)

---

## Getting Started

1. Open [claude.ai](https://claude.ai) and start a new conversation.
2. Follow the lab exercises in order — each builds on concepts from the previous one.
3. Use the prompts provided in each section to generate, iterate, and publish your Artifacts.
4. Save your public Artifact links as you go to build your portfolio.

---

## Resources

- [Claude Documentation](https://docs.claude.ai)
- [Claude Support](https://support.claude.ai)
- [Prompt Engineering Guide](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview)

---

*Built with ❤️ using Claude AI.*
