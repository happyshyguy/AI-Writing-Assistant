# AI Writing Assistant ✅

**AI Writing Assistant** is a lightweight web application that helps users improve text by correcting spelling and grammar mistakes and rephrasing sentences to be more natural and fluent. This repository contains a React-based client (Vite) and an Express.js server that wraps calls to the GROQ LLM API (Llama models) to perform the NLP operations.

---

## Table of Contents

- [Features](#features)
- [Demo / Use Cases](#demo--use-cases)
- [Architecture & Design](#architecture--design)
- [Tech Stack & Tools](#tech-stack--tools)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Getting Started (Local Development)](#getting-started-local-development)
- [Environment Variables & Security](#environment-variables--security)
- [Testing & Debugging](#testing--debugging)
- [Contributing](#contributing)
- [Future Improvements](#future-improvements)
- [License](#license)
- [Author](#author)

---

## Features

- ✅ Spell check: Fixes spelling mistakes and returns the corrected sentence only.
- ✅ Grammar check: Corrects grammar errors while preserving meaning.
- ✅ Rephrase / Improve: Rewrites a sentence to sound more natural and fluent.
- ✅ Simple, minimal UI (React + Tailwind-ready) with an API-powered backend.

---

## Demo / Use Cases

- Students polishing essays and assignments.
- Authors and content creators improving readability.
- Non-native English speakers seeking natural phrasing and grammar corrections.
- Fast single-sentence corrections, suitable for editors and chat UIs.

---

## Architecture & Design 🔧

The application follows a simple client-server model:

- Client (React + Vite): Presents a minimal UI to enter sentences and select actions (spell check, grammar check, rephrase). The client sends requests to the server and renders the corrected/rephrased result.
- Server (Node + Express): Exposes three endpoints to perform the three NLP tasks. Each endpoint forwards the user input to the GROQ API (Llama family models) with a small system prompt tailored for the desired behavior and returns the model's response to the client.

Security consideration: The GROQ API key is stored in server environment variables and never shipped to the client.

---

## Tech Stack & Tools 🛠️

- Frontend
  - React 19 (JSX components)
  - Vite (dev server & build)
  - TailwindCSS (project prepared for styling)
  - Axios (client HTTP requests)

- Backend
  - Node.js + Express (server & routes)
  - Axios (server -> external LLM API)
  - dotenv (environment variable management)
  - CORS (cross-origin requests in development)

- LLM Provider
  - GROQ's LLM endpoint (via `https://api.groq.com/openai/v1/chat/completions`) using models such as `llama-3.1-8b-instant` (as configured in the project).

- Development tools
  - ESLint (linting)
  - Optional: Postman / curl for API testing

---

## Project Structure

```
AI-Writing-Assistant/
├─ client/                # React client (Vite)
│  ├─ public/
│  ├─ src/
│  │  ├─ assets/
│  │  └─ Components/
│  │     ├─ Navbar.jsx
│  │     ├─ Home.jsx
│  │     ├─ Editor.jsx
│  │     └─ About.jsx
│  ├─ package.json
│  └─ vite.config.js
├─ server/                # Express server
│  ├─ routes/
│  │  ├─ analyze.js      # Rephrase / improve
│  │  ├─ grammarCheck.js # Grammar correction
│  │  └─ spellCheck.js   # Spelling correction
│  ├─ app.js
│  └─ package.json
└─ README.md
```

Notes:
- UI components are intentionally minimal and can be extended with TailwindCSS or other UI libraries.
- Server routes are small, focused routers that call the GROQ API with task-specific system prompts.

---

## API Reference 📡

Base URL (development): http://localhost:8000/api

All endpoints accept POST requests with JSON body:

```json
{ "sentence": "Your sentence here." }
```

Endpoints:

- POST /api/spellCheck
  - Purpose: Fix spelling mistakes ONLY (do not change sentence structure).
  - Response: { success: true, result: "Corrected sentence", provider: "groq" }

- POST /api/grammarCheck
  - Purpose: Correct grammar mistakes and return the corrected sentence only.
  - Response: { success: true, result: "Corrected sentence", provider: "groq" }

- POST /api/analyze
  - Purpose: Rephrase / improve the sentence (make it more natural, friendly, fluent). Return only the improved sentence.
  - Response: { success: true, result: "Rephrased sentence", provider: "groq" }

Example curl request:

```bash
curl -X POST http://localhost:8000/api/spellCheck \
  -H "Content-Type: application/json" \
  -d '{"sentence":"Ths is a sentnce with spelng"}'
```

Example axios request (client-side):

```js
import axios from 'axios';

const { data } = await axios.post('/api/spellCheck', { sentence: text });
console.log(data.result);
```

---

## Getting Started (Local Development) 🚀

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- A valid GROQ API key (set as `GROQ_API_KEY` in your environment)

### Setup

1. Clone the repository and install dependencies:

```bash
# from project root
cd client && npm install
cd ../server && npm install
```

2. Create a `.env` file in the `server/` directory with the following:

```
GROQ_API_KEY=your_groq_api_key_here
PORT=8000
```

3. Run the server:

```bash
cd server
node app.js
# or use nodemon for development
```

4. Run the client in another terminal:

```bash
cd client
npm run dev
```

The client will typically be served at `http://localhost:5173` (Vite default) and will make requests to `http://localhost:8000` (server).

---

## Environment Variables & Security ⚠️

- Never commit secrets (like the `GROQ_API_KEY`) to version control.
- Use `.env` files or secret managers in production and CI environments.
- Limit permissions and rotate keys regularly.

---

## Testing & Debugging 🔍

- Use Postman / curl to directly test the server endpoints.
- Server logs print GROQ provider errors to console for quick debugging.
- If you encounter 500 responses, inspect `error.response?.data` printed in server logs.

---

## Contributing 🤝

Contributions are welcome. A suggested workflow:

1. Fork the repository
2. Create a branch for your feature/fix
3. Open a pull request with a clear description of changes

Please run linting and basic checks before submitting a PR.

---

## Future Improvements ✨

- Add comprehensive unit/integration tests.
- Expand the UI with a feature-rich editor panel (multiple sentences, diff view).
- Add user authentication and usage limits.
- Add caching for repeated queries and rate limiting to optimize costs.
- Provide localization support for non-English languages.

---

## License

This project is currently under the ISC license (see `server/package.json`). Modify or add a LICENSE file if you want to change terms.

---

## Author 👤

**Aryan Gupta**

Contact: (add a contact email or GitHub profile link here)

---

If you’d like, I can also add example client UI code snippets (Editor component to call the API), or create a `.env.example` file and scripts for starting server and client concurrently. Let me know which you'd prefer next. ✅
