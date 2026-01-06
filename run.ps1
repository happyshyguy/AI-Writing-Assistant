# AI Writing Assistant - Quick Start Script for PowerShell
# Run this script to start both server and client automatically

Write-Host "`n========================================"
Write-Host "  AI Writing Assistant - Quick Start"
Write-Host "========================================`n" -ForegroundColor Cyan

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please download from https://nodejs.org/"
    Read-Host "Press Enter to exit"
    exit
}

# Install server dependencies if needed
if (-not (Test-Path "server\node_modules")) {
    Write-Host "Installing server dependencies..." -ForegroundColor Yellow
    Push-Location server
    npm install
    Pop-Location
}

# Install client dependencies if needed
if (-not (Test-Path "client\node_modules")) {
    Write-Host "Installing client dependencies..." -ForegroundColor Yellow
    Push-Location client
    npm install
    Pop-Location
}

Write-Host "`n========================================"
Write-Host "  Starting AI Writing Assistant..."
Write-Host "========================================`n" -ForegroundColor Cyan

# Check if .env file exists
if (-not (Test-Path "server\.env")) {
    Write-Host "⚠️  WARNING: server\.env not found!" -ForegroundColor Yellow
    Write-Host "Please create server\.env with your GROQ_API_KEY"
    Write-Host "See SETUP_AND_RUN.md for instructions`n"
}

# Start server
Write-Host "Starting server on port 8000..." -ForegroundColor Green
Start-Process PowerShell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\server'; node app.js" -WindowStyle Normal

# Wait for server to start
Start-Sleep -Seconds 2

# Start client
Write-Host "Starting client on port 5173..." -ForegroundColor Green
Start-Process PowerShell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\client'; npm run dev" -WindowStyle Normal

Write-Host "`n========================================"
Write-Host "  ✓ Servers starting..."
Write-Host "========================================`n" -ForegroundColor Green

Write-Host "📌 Server:   http://localhost:8000"
Write-Host "📌 Client:   http://localhost:5173`n"

Write-Host "🌐 Open http://localhost:5173 in your browser`n" -ForegroundColor Cyan

Start-Sleep -Seconds 3
