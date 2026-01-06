@echo off
REM AI Writing Assistant - Quick Start Script for Windows
REM This script will start both server and client in separate windows

echo.
echo ========================================
echo   AI Writing Assistant - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js found
echo.

REM Check if dependencies are installed
if not exist "server\node_modules" (
    echo Installing server dependencies...
    cd server
    call npm install
    cd ..
)

if not exist "client\node_modules" (
    echo Installing client dependencies...
    cd client
    call npm install
    cd ..
)

echo.
echo ========================================
echo   Starting AI Writing Assistant...
echo ========================================
echo.

REM Check if .env file exists in server
if not exist "server\.env" (
    echo WARNING: server\.env not found!
    echo Please create server\.env with:
    echo   PORT=8000
    echo   GROQ_API_KEY=your_api_key_here
    echo.
)

REM Start server in new window
echo Starting server on port 8000...
start "AI Writing Assistant - SERVER" cmd /k "cd server && node app.js"

REM Wait a bit for server to start
timeout /t 2 /nobreak

REM Start client in new window
echo Starting client on port 5173...
start "AI Writing Assistant - CLIENT" cmd /k "cd client && npm run dev"

echo.
echo ========================================
echo   ✓ Starting servers...
echo ========================================
echo.
echo Server: http://localhost:8000
echo Client: http://localhost:5173
echo.
echo Browser will open automatically or visit:
echo http://localhost:5173 in your browser
echo.
echo Press any key in the server/client windows to stop them.
echo.
pause
