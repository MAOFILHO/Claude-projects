**Introduction**

So far, every prompt you've written has been self-contained — you stuff everything Claude needs into one message and submit. That works for one-off tasks, but breaks down the moment you have a real workflow that spans days, projects, or conversations. 

In this project, you will learn the three layers of context retention available in Claude — in-conversation history, Projects, and Memory — and when to use each. You will also learn the production pattern for Claude Code: the CLAUDE.md file that gives Claude lasting knowledge of your codebase. 

By the end of this project, you will have a real working setup where Claude remembers your role, your codebase conventions, your active project, and your current goals — without you having to re-explain every time. 

<img width="662" height="381" alt="Screenshot 2026-05-29 at 9 41 55 PM" src="https://github.com/user-attachments/assets/7bb8ade4-5348-4ecb-8555-64baf6050c82" />



**What We Will Cover in This Project:** 

Understanding the three distinct layers of Claude’s memory: Conversation, Projects, and Memory.
Building multi-turn workflows to observe context decay and recency bias.
Creating a Claude Project equipped with persistent knowledge files and custom instructions.
Configuring Claude Memory to retain personal preferences across unrelated conversations.
Writing a production-grade CLAUDE.md file to give Claude Code lasting knowledge of your codebase.
Applying conversation hygiene rules to prevent context pollution and degraded AI responses.

**Overview & Key Concepts**
In this section, we’ll cover key concepts used in this guide, including an overview of what’s covered in this guide.

**The Three Layers of Claude’s Memory**
Claude has memory at three different scopes. Understanding them is the difference between a frustrating user experience and a smooth one: 

Layer
Scope
Survives Across...
Conversation
Everything sent and received in one chat session.
Within a single chat. Lost when you start a new chat.
Projects
A reusable bundle of files and instructions that Claude consults in every chat inside that project.
Across all chats inside the same Project. Lost across different projects.
Memory
Specific facts about you, Claude saves and recalls across all your chats.
Across all chats and all projects, until you delete the memory.




**When to Use Which Layer**
Conversation context: Best for a single task or thread. Anything you say in chat 1 is invisible in chat 2.
Projects: Best for ongoing work that has a stable scope (a codebase, a course, a client). Project files (style guides, references, code) are always available.
Memory: Best for persistent personal preferences ("I work at a SaaS company", "I prefer Tailwind over Bootstrap"). Not for project-specific information.
CLAUDE.md (for Claude Code): Best for codebase-specific knowledge that any Claude Code session needs (commands, conventions, patterns). Loaded automatically by Claude Code.

**Layer 1 - In-Conversation Context**

How Claude Uses Conversation History

Inside a single chat, Claude has access to every message — yours and its own. This means you can build up context progressively: define a persona in message 1, give a task in message 2, and refine the output in message 3. Claude remembers the conversation up to its context window limit. 

Two important properties: 
Recency bias: Claude weights recent messages more heavily than old ones.
Context decay: once the chat gets very long, earlier messages may be summarised or partially forgotten.

**Layer 2 - Claude Projects (Persistent Project Context)**

What Projects Solve
Suppose you start 5 different chats about the same codebase. Without Projects, you re-explain the codebase 5 times. With Projects, you upload the codebase or summary documents ONCE, and every chat inside that project automatically has access. 

A Project consists of:
Project knowledge: Files you upload (code, PDFs, style guides, transcripts) that Claude reads in every chat.
Custom instructions: A system prompt that applies to every chat in this project ("Always respond in the K21 voice", "Use ES Modules").
Chats: Individual conversations within the project, each with its own context but inheriting the project knowledge and instructions.

**Layer 3 - Claude Memory (Cross-Conversation)**

What Memory Is and Isn’t
Memory is Claude's ability to retain specific facts about you across all your chats and all your Projects. When you say "Remember that I work at K21 Academy", Claude can save that and recall it next week in an unrelated chat. 
Memory is great for: Your role and team, your tooling preferences, your style preferences, your long-running goals.
Memory is NOT for: Project-specific code or files (use Projects instead), sensitive information (passwords, API keys, PII), active task state.

**Building a Custom Context System for Production**

The CLAUDE.md File for Claude Code
For Claude Code specifically, there is a fourth context mechanism — the CLAUDE.md file. When Claude Code starts a session in a project, it automatically reads the CLAUDE.md file at the project root and treats its contents as authoritative context for the codebase. 
CLAUDE.md is the production-grade equivalent of Project knowledge for codebases. It's checked into Git, reviewed in pull requests, and travels with the repo. Every developer (and every Claude Code session) gets the same context automatically.


**Conversation Hygiene — Avoiding Context Pollution**

Even with all four context layers in place, you can still degrade results through poor conversation hygiene. The most common mistake: keeping a single chat open for too many unrelated tasks. 

Symptoms of context pollution:
Claude responds with style or assumptions from a previous task you've moved on from.
Outputs feel slower or less coherent over time.
Claude refers to old code that's been replaced.
Practical hygiene rules: 
Start a new chat for each new task. Don't switch from "write a SQL query" to "draft a marketing email" in the same chat.
Inside Projects still spawns a new chat for each new sub-task. The Project knowledge persists; only the conversation context resets.
If a chat goes 30+ messages, consider summarising the key decisions and starting fresh: "Summarise our progress so far in 5 bullet points so I can paste it into a new chat."
Don't paste large documents repeatedly — upload them to the Project once instead.



**Documentation Links**
Claude Projects: 
https://support.claude.com/en/articles/9519177-using-projects-on-claude 


Claude Memory: 
https://support.claude.com/en/articles/10185728-understanding-memory-on-claude 


CLAUDE.md for Claude Code: 
https://docs.claude.com/en/docs/claude-code/memory 

**Screenshots:**

<img width="1429" height="724" alt="Screenshot 2026-05-29 at 9 07 49 PM" src="https://github.com/user-attachments/assets/b71e4b02-dbf8-4d0c-b4c1-f7019553567b" />

<img width="1125" height="650" alt="Screenshot 2026-05-29 at 9 15 01 PM" src="https://github.com/user-attachments/assets/3aa449a8-d82d-495c-8d15-9f0aa675b762" />

<img width="1141" height="683" alt="Screenshot 2026-05-29 at 9 18 08 PM" src="https://github.com/user-attachments/assets/4d40085f-3630-434b-a37e-712e29642711" />

<img width="1426" height="772" alt="Screenshot 2026-05-29 at 9 27 43 PM" src="https://github.com/user-attachments/assets/78206fd6-1ac5-46bf-990e-989ae5860ad7" />

<img width="963" height="650" alt="Screenshot 2026-05-29 at 9 33 46 PM" src="https://github.com/user-attachments/assets/fa000d76-7319-4d0c-8acb-00d10e63727b" />
















