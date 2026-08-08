@echo off
title Codex Studio - React
color 0b
echo ========================================================
echo   CODEX STUDIO (codexstudio.az) - React Vebsayti
echo ========================================================
echo.
echo Server basladilir ve brauzer acilir...
cd /d "D:\Workspace\react-academy-project"
start http://localhost:3000
call npm run dev
pause
