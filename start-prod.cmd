@echo off
cd /d "%~dp0harvesttime"
set PORT=3100
node node_modules\.bin\next.cmd start
