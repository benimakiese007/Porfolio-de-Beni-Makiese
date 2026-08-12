@echo off
title Portfolio Beni - Serveur Local
color 0A

echo.
echo  ============================================
echo    PORTFOLIO BENI - LANCEMENT LOCAL
echo  ============================================
echo.

cd /d "%~dp0"

:: Essayer Python d'abord
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo  [OK] Python detecte - Demarrage du serveur...
    echo.
    echo  Adresse : http://localhost:8000
    echo  Appuie sur CTRL+C pour arreter
    echo.
    start "" http://localhost:8000
    python -m http.server 8000
    goto :end
)

:: Essayer Python3
python3 --version >nul 2>&1
if %errorlevel% == 0 (
    echo  [OK] Python3 detecte - Demarrage du serveur...
    echo.
    echo  Adresse : http://localhost:8000
    echo  Appuie sur CTRL+C pour arreter
    echo.
    start "" http://localhost:8000
    python3 -m http.server 8000
    goto :end
)

:: Essayer npx serve (Node.js)
npx --version >nul 2>&1
if %errorlevel% == 0 (
    echo  [OK] Node.js detecte - Demarrage avec npx serve...
    echo.
    echo  Adresse : http://localhost:3000
    echo  Appuie sur CTRL+C pour arreter
    echo.
    start "" http://localhost:3000
    npx -y serve .
    goto :end
)

:: Aucun outil disponible
echo  [ERREUR] Aucun serveur local trouve.
echo.
echo  Solutions :
echo    - Installe Python : https://www.python.org/downloads/
echo    - Installe Node.js : https://nodejs.org/
echo.
pause

:end
