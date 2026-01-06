# 🚀 QUICK START REFERENCE CARD

## Start Your Application in 30 Seconds

### Option 1: Windows Batch File (Easiest)
```bash
cd AI-Writing-Assistant
run.bat
```
✅ Opens two windows automatically  
✅ Starts server and client  
✅ Opens browser

---

### Option 2: PowerShell
```bash
cd AI-Writing-Assistant
powershell -ExecutionPolicy Bypass -File run.ps1
```

---

### Option 3: Manual (Full Control)

**Terminal 1 - Start Server:**
```bash
cd server
node app.js
# Should show: "Server is running on port 8000"
```

**Terminal 2 - Start Client:**
```bash
cd client
npm run dev
# Should show: "Local: http://localhost:5173"
```

**Open Browser:**
```
http://localhost:5173
```

---

## ✅ Check Before Running

1. **GROQ API Key Set?**
   - Open `server/.env`
   - Make sure `GROQ_API_KEY=your_key_here`
   - Get key from https://groq.com

2. **Node.js Installed?**
   ```bash
   node --version
   ```
   Should show: v18+ or higher

3. **Dependencies Installed?**
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

---

## 🎯 What to Test First

1. **Home Page** → Should see beautiful landing page
2. **Click "Write"** → Should see editor with text areas
3. **Enter text:** "Ths is a sentnce"
4. **Click "Spell Check"** → Should see corrected text
5. **Copy button** → Should copy text to clipboard
6. **Click "About"** → Should see project info

---

## ⚠️ Common Issues & Quick Fixes

### Problem: Blank page or "Cannot GET /"
**Fix:** Make sure both servers are running. Check terminals.

### Problem: "API Error" when processing
**Fix:** 
1. Check server terminal - should say "running on port 8000"
2. Verify GROQ_API_KEY in server/.env is correct
3. Restart both servers

### Problem: Port 5173 already in use
**Fix:** Run client with different port:
```bash
npm run dev -- --port 5174
```

### Problem: Port 8000 already in use
**Fix:** Change PORT in server/.env:
```
PORT=8001
```

Then update Editor.jsx line 16:
```javascript
const API_BASE_URL = 'http://localhost:8001/api'
```

---

## 🔧 File Locations - Quick Reference

| What | Where |
|------|-------|
| Frontend Code | `client/src/` |
| Components | `client/src/Components/` |
| Backend Code | `server/` |
| API Routes | `server/routes/` |
| Config (Server) | `server/.env` |
| Config (Client) | `client/.env` |
| Setup Guide | `SETUP_AND_RUN.md` |
| Tech Details | `DEVELOPER_GUIDE.md` |

---

## 📱 Access Points

| What | URL |
|------|-----|
| Frontend App | http://localhost:5173 |
| Server API | http://localhost:8000/api |
| Spell Check | POST http://localhost:8000/api/spellCheck |
| Grammar Check | POST http://localhost:8000/api/grammarCheck |
| Rephrase | POST http://localhost:8000/api/analyze |

---

## 📚 Documentation

**Read These:**
1. `SETUP_AND_RUN.md` - Full setup instructions
2. `DEVELOPER_GUIDE.md` - How everything works
3. `PROJECT_COMPLETION_SUMMARY.md` - What's done

**Reference:**
- `FINAL_VERIFICATION_CHECKLIST.md` - Test everything

---

## 🎨 Key Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | F12 |
| Toggle Mobile View | Ctrl + Shift + M |
| Hard Refresh | Ctrl + Shift + R |
| Open Console | F12 → Console |
| Stop Server | Ctrl + C |

---

## 🧪 Quick Tests

### Test Spell Check
Input: "Ths is a test"  
Expected Output: "This is a test"

### Test Grammar Check
Input: "She go home"  
Expected Output: "She goes home"

### Test Rephrase
Input: "I am happy"  
Expected Output: "I'm delighted" (or similar)

---

## 📞 Help Resources

1. **Setup issues?** → Read `SETUP_AND_RUN.md`
2. **Code questions?** → Check `DEVELOPER_GUIDE.md`
3. **Bugs/errors?** → See troubleshooting section above
4. **Want to learn more?** → Open `DEVELOPER_GUIDE.md`

---

## ✨ What's Included

✅ Complete React Frontend  
✅ Express.js Backend  
✅ GROQ LLM Integration  
✅ TailwindCSS Styling  
✅ Error Handling  
✅ Mobile Responsive  
✅ Full Documentation  
✅ Startup Scripts  

---

## 🎉 You're Ready!

Your project is **complete and production-ready**.

**Next Step:** Follow the instructions above to start it!

---

## 📝 Pro Tips

- **Save frequently** - Both your changes and your work!
- **Read docs** - They have all the answers
- **Check console** - F12 shows errors clearly
- **Check terminal** - Server errors show there
- **Use DevTools** - Network tab shows API calls
- **Test mobile** - F12 → device toolbar

---

**Created:** January 2026  
**Status:** Production Ready ✅  
**Difficulty:** Beginner-Friendly  

**Happy Coding! 🚀**
