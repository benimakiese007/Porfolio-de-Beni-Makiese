@echo off
title Portfolio Beni - Push Git
color 0B

echo.
echo  ============================================
echo    PORTFOLIO BENI - PUSH VERS GITHUB
echo  ============================================
echo.

cd /d "%~dp0"

:: Verifier si c'est un repo Git
if not exist ".git" (
    echo  [ERREUR] Ce dossier n'est pas un depot Git.
    echo  Lance : git init
    pause
    exit /b 1
)

:: Afficher le statut actuel
echo  --- Statut actuel ---
git status --short
echo.

:: Demander le message de commit
set /p COMMIT_MSG= Message de commit (Entree = "Update portfolio") : 

if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update portfolio

echo.
echo  [1/3] Ajout de tous les fichiers...
git add .

echo  [2/3] Commit : "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"

if %errorlevel% neq 0 (
    echo.
    echo  [INFO] Rien a commiter ou erreur de commit.
    pause
    exit /b 0
)

echo  [3/3] Push vers origin...
git push

if %errorlevel% == 0 (
    echo.
    echo  ============================================
    echo    [OK] Push reussi !
    echo  ============================================
    echo.
) else (
    echo.
    echo  [ERREUR] Le push a echoue.
    echo  Verifie ta connexion et tes droits sur le repo.
    echo.
)

pause
