@echo off
cd /d "%~dp0harvestime"
set PORT=3100
node node_modules\.bin\next.cmd start
