@echo off
where node >nul 2>nul || (echo Install Node.js from https://nodejs.org first & pause & exit /b)
call npm install
call npm run dist
echo.
echo Done. EXE is in the dist folder.
pause
