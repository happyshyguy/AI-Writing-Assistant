# 📚 Developer's Guide - AI Writing Assistant

This guide covers everything you need to understand and work with the AI Writing Assistant codebase.

---

## 🏗️ Project Architecture

### Client-Server Model
```
┌─────────────────────────────┐
│   React Frontend (Port 5173) │
│                             │
│  ├─ Home Page              │
│  ├─ Editor Page (Main Tool) │
│  ├─ About Page             │
│  └─ Navbar (Navigation)    │
└──────────────┬──────────────┘
               │ Axios HTTP
               ▼
┌─────────────────────────────┐
│   Express Server (Port 8000) │
│                             │
│  ├─ /api/spellCheck        │
│  ├─ /api/grammarCheck      │
│  └─ /api/analyze           │
└──────────────┬──────────────┘
               │ Axios POST
               ▼
┌─────────────────────────────┐
│    GROQ LLM API            │
│  (Llama 3.1 8B Instant)    │
└─────────────────────────────┘
```

---

## 📁 Frontend Structure

### Components Overview

#### 1. **Navbar.jsx** - Navigation Component
**Purpose:** Header with navigation and authentication
**Key Features:**
- Logo with branding
- Navigation links to Home, Write, About
- Privy authentication (Login/Logout)
- Mobile responsive hamburger menu
- Displays logged-in user's email

**Key State:**
- `mobileMenuOpen` - Controls mobile menu visibility
- Uses Privy: `authenticated`, `login`, `logout`, `user`

**Key Functions:**
- `toggleMobileMenu()` - Opens/closes mobile menu

**Dependencies:**
- React Router - for navigation links
- Privy - for authentication
- React Icons (FiMenu, FiX) - for icons

---

#### 2. **Home.jsx** - Landing Page
**Purpose:** Welcome page with features and call-to-action
**Key Sections:**
- Hero section with main heading and CTA button
- Features section (3 cards: Spell Check, Grammar Check, Rephrase)
- Use cases section (4 scenarios: Students, Writers, Non-natives, Professionals)
- Call-to-action section with big button
- Footer with tech info

**Key Components:**
- No state management (purely presentational)
- All links use React Router Link component

**Icons Used:**
- FiCheckCircle, FiBook, FiPenTool (feature icons)
- FiArrowRight (CTA buttons)
- FiTarget (use case icons)

---

#### 3. **Editor.jsx** - Main Processing Tool
**Purpose:** Text processing interface with API integration

**State Variables:**
```javascript
inputText       // User's text input
outputText      // Corrected/processed text
loading         // Is API call in progress?
error           // Error message (if any)
success         // Success message
activeTab       // Selected tool: 'spell', 'grammar', 'analyze'
copyTooltip     // Show "Copied!" message temporarily
```

**Key Functions:**

```javascript
handleApiCall(endpoint)
// Calls backend API with user's text
// endpoints: 'spellCheck', 'grammarCheck', 'analyze'
// Shows loading, handles errors, displays results

copyToClipboard()
// Copies output text to clipboard
// Shows tooltip "Copied!" for 2 seconds

clearAll()
// Clears all state (input, output, errors)

useOutput()
// Moves output text to input for further processing
```

**API Integration:**
- Base URL: `http://localhost:8000/api`
- Uses Axios for HTTP POST requests
- Request format: `{ sentence: "text" }`
- Response format: `{ success: true, result: "text", provider: "groq" }`
- Error handling for network issues and API errors

**Tabs/Tools:**
1. **Spell Check** (Green)
   - Endpoint: `/api/spellCheck`
   - Fixes spelling mistakes only
   
2. **Grammar Check** (Blue)
   - Endpoint: `/api/grammarCheck`
   - Corrects grammar errors

3. **Rephrase** (Purple)
   - Endpoint: `/api/analyze`
   - Makes text more natural and fluent

**UI Features:**
- Loading spinner during API call
- Error messages in red boxes
- Success messages in green boxes
- Copy button with tooltip
- "Use This" button to reprocess output
- Instructions section
- Server status info

---

#### 4. **About.jsx** - Project Information
**Purpose:** Detailed project information and documentation

**Sections:**
1. Project Overview - Description of the app
2. Core Features - Three main features explained
3. Technology Stack - Frontend, Backend, AI/LLM details
4. Architecture - Flow diagram of how data moves
5. Use Cases - Who benefits from the app
6. Author Info - Creator details
7. Future Improvements - Planned enhancements
8. Footer - Copyright and credits

**No State Management:** Purely presentational component

---

### App.jsx - Root Component
**Purpose:** Main application wrapper with routing

**Structure:**
```jsx
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/write" element={<Editor />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

**Key Points:**
- React Router handles client-side routing
- No page reloads when navigating
- Navbar is always visible

---

### main.jsx - Application Entry Point
**Purpose:** Initialize React app and Privy authentication

**Key Setup:**
1. Mounts React to `#root` div
2. Wraps app with PrivyProvider
3. Configures Privy with:
   - App ID: `cmjkl2a6u01iakz0cj7mmz55hv`
   - Login methods: Email, Google
   - Dark theme enabled
4. Enables StrictMode for development warnings

---

### Styling

#### index.css - Global Styles
- Imports TailwindCSS
- Sets dark theme by default
- Configures typography
- Button and link hover states
- Responsive breakpoints

#### App.css - Custom Styles
- Scrollbar customization
- Smooth scrolling
- Loading spinner animation
- Slide-in animation

**TailwindCSS Usage:**
- Utility-first approach
- Dark mode classes: `dark:` prefix
- Responsive classes: `md:`, `lg:`, etc.
- Colors: `bg-blue-500`, `text-white`, etc.
- Spacing: `p-4`, `mb-3`, etc.

---

## 🔧 Backend Structure

### app.js - Server Setup
**Purpose:** Express server initialization

**Key Setup:**
```javascript
require("dotenv").config();      // Load .env variables
const express = require("express");
const cors = require("cors");    // Enable cross-origin requests

// Middleware
app.use(cors());                           // CORS
app.use(express.json());                   // JSON parsing
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarCheck", grammarCheckRoute);
app.use("/api/spellCheck", spellCheckRoute);

// Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

**Configuration:**
- Port: `process.env.PORT || 8000`
- CORS: Enabled for development

---

### Routes Structure

Each route file follows the same pattern:

#### analyze.js - Rephrase/Improve Endpoint
```
POST /api/analyze
Content-Type: application/json

Request:
{
  "sentence": "The weather is bad"
}

Response:
{
  "success": true,
  "result": "The weather is rather unfavorable",
  "provider": "groq"
}
```

**System Prompt:**
"You are a professional English rewriter. Rephrase the given sentence into a more natural, friendly, and fluent version. Do NOT explain. Return ONLY the improved sentence."

#### grammarCheck.js - Grammar Correction Endpoint
```
POST /api/grammarCheck
Content-Type: application/json

Request:
{
  "sentence": "She go to school"
}

Response:
{
  "success": true,
  "result": "She goes to school",
  "provider": "groq"
}
```

**System Prompt:**
"Correct grammar mistakes in the sentence. Return ONLY the corrected sentence."

#### spellCheck.js - Spelling Correction Endpoint
```
POST /api/spellCheck
Content-Type: application/json

Request:
{
  "sentence": "Ths is incorect speling"
}

Response:
{
  "success": true,
  "result": "This is incorrect spelling",
  "provider": "groq"
}
```

**System Prompt:**
"Fix spelling mistakes ONLY. Do not change sentence structure. Return ONLY the corrected sentence."

---

### GROQ API Integration

**Configuration:**
- Base URL: `https://api.groq.com/openai/v1/chat/completions`
- Model: `llama-3.1-8b-instant`
- Temperature: 0.3 (deterministic - consistent results)
- Authentication: Bearer token (GROQ_API_KEY)

**Request Format:**
```javascript
{
  model: "llama-3.1-8b-instant",
  messages: [
    {
      role: "system",
      content: "Task-specific system prompt"
    },
    {
      role: "user",
      content: sentence
    }
  ],
  temperature: 0.3
}
```

**Response Handling:**
```javascript
response.data.choices[0].message.content  // The AI response
```

**Error Handling:**
```javascript
try {
  // API call
} catch (error) {
  // Log error: error.response?.data || error.message
  // Return 500 with error details
}
```

---

## 🔑 Environment Variables

### server/.env
```env
PORT=8000                          # Server port
GROQ_API_KEY=gsk_...              # GROQ API key (REQUIRED)
```

### client/.env
```env
App ID - cmjkl2a6u01iakz0cj7mmz55h        # Privy App ID
App Secret - privy_app_secret_...         # Privy App Secret
```

---

## 📡 API Flow

### Complete User Interaction Flow

1. **User opens app**
   - Client loads at http://localhost:5173
   - Navbar renders with Privy auth status
   - Home page displays

2. **User clicks "Start Writing"**
   - React Router navigates to `/write`
   - Editor component loads

3. **User enters text and selects tool**
   - State updates: `inputText = "user text"`
   - Active tab changes: `activeTab = 'spell'` | 'grammar' | 'analyze'

4. **User clicks action button**
   - `handleApiCall(endpoint)` triggered
   - State: `loading = true`
   - Axios POST request sent to backend

5. **Backend receives request**
   - Route handler validates `sentence` field
   - Calls GROQ API with task-specific prompt
   - Receives result from GROQ

6. **Backend responds**
   - Sends: `{ success: true, result: "corrected text", provider: "groq" }`
   - Or error: `{ success: false, error: "message" }`

7. **Frontend receives response**
   - State: `loading = false`
   - If success: `outputText = result`, `success = message`
   - If error: `error = error message`
   - Messages auto-clear after 3 seconds

8. **User sees result**
   - Output text displays in right textarea
   - Can copy, use as new input, or clear all

---

## 🧪 Testing

### Manual Testing Checklist

**Navigation:**
- [ ] Navbar displays correctly on desktop and mobile
- [ ] All links work: Home, Write, About
- [ ] Login button shows (if not authenticated)
- [ ] Hamburger menu works on mobile

**Editor Tool:**
- [ ] Can type in input textarea
- [ ] All three tabs are clickable
- [ ] "Clear" button clears all text
- [ ] Buttons are disabled when input is empty

**Spell Check:**
- [ ] Input: "Ths is a sentnce"
- [ ] Output: "This is a sentence"
- [ ] Copy button copies text
- [ ] "Use This" moves output to input

**Grammar Check:**
- [ ] Input: "She go to school"
- [ ] Output: "She goes to school"
- [ ] Success message appears
- [ ] Loading spinner shows during processing

**Rephrase:**
- [ ] Input: "Very short text"
- [ ] Output: Rephrased version
- [ ] Can process multiple times
- [ ] Error handling works (test with server off)

**Error Handling:**
- [ ] Try processing with empty input → error message
- [ ] Stop server and try processing → API error message
- [ ] Check browser console (F12) for errors
- [ ] Error message clears after 3 seconds

**Responsive Design:**
- [ ] Test on desktop (fullscreen)
- [ ] Test on tablet (iPad size)
- [ ] Test on mobile (iPhone size)
- [ ] Check buttons are clickable
- [ ] Text wraps properly

---

## 🐛 Common Issues & Solutions

### Issue: "Cannot find module" error
**Solution:** Run `npm install` in the directory

### Issue: API returns 500 error
**Possible Causes:**
1. GROQ_API_KEY is invalid → Get new key from groq.com
2. GROQ API is down → Check status
3. Rate limit exceeded → Wait before retrying

### Issue: Components not rendering
**Solution:**
1. Check browser console (F12) for errors
2. Verify React Router setup
3. Check component imports in App.jsx

### Issue: Styling looks broken
**Solution:**
1. Make sure TailwindCSS is imported in index.css
2. Clear browser cache (Ctrl+Shift+Del)
3. Restart dev server

---

## 🚀 Development Workflow

### Adding a New Feature

1. **Create component** in `client/src/Components/`
   ```jsx
   import React from 'react'
   
   const MyComponent = () => {
     return <div className="...">...</div>
   }
   
   export default MyComponent
   ```

2. **Add route** in `App.jsx`
   ```jsx
   import MyComponent from './Components/MyComponent'
   // ...
   <Route path="/mypath" element={<MyComponent />} />
   ```

3. **Add navigation** in `Navbar.jsx`
   ```jsx
   <Link to="/mypath">My Link</Link>
   ```

4. **Test the feature**
   - Start dev server
   - Navigate to new route
   - Check styling and functionality

### Adding a New API Endpoint

1. **Create route file** in `server/routes/`
   ```javascript
   const express = require("express");
   const router = express.Router();
   
   router.post("/", async (req, res) => {
     // Implementation
   });
   
   module.exports = router;
   ```

2. **Register in `app.js`**
   ```javascript
   const myRoute = require("./routes/myroute");
   app.use("/api/myendpoint", myRoute);
   ```

3. **Call from frontend**
   ```javascript
   const response = await axios.post(
     'http://localhost:8000/api/myendpoint',
     { /* data */ }
   );
   ```

---

## 📚 Useful Resources

### React Documentation
- https://react.dev - Official React docs
- React Router: https://reactrouter.com
- TailwindCSS: https://tailwindcss.com

### Backend
- Express.js: https://expressjs.com
- Axios: https://axios-http.com
- dotenv: https://github.com/motdotla/dotenv

### APIs
- GROQ: https://groq.com
- Privy: https://privy.io

---

## 🎓 Learning Points

**Frontend Concepts Covered:**
- React hooks (useState, useEffect)
- React Router for SPA routing
- Component composition
- State management
- Axios for API calls
- TailwindCSS for styling
- Responsive design

**Backend Concepts Covered:**
- Express.js server setup
- Route handlers
- Middleware (CORS, JSON parsing)
- Environment variables
- Error handling
- External API integration

**Full-Stack Concepts:**
- Client-server architecture
- HTTP request/response cycle
- API design
- Error handling across layers

---

## 📝 Notes for Future Enhancements

1. **Authentication**: Currently uses Privy, could add backend JWT
2. **Database**: Add MongoDB/PostgreSQL for user history
3. **Testing**: Add Jest for unit tests, Cypress for E2E tests
4. **Performance**: Add caching, optimize API calls
5. **Analytics**: Track feature usage
6. **Mobile App**: React Native version

---

**Happy Coding! 🚀**

For questions or issues, refer back to the SETUP_AND_RUN.md guide.
