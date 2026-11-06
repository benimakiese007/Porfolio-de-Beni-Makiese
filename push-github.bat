@echo off
setlocal enabledelayedexpansion
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

:: Verifier s'il y a des fichiers modifies ou non suivis
set "HAS_CHANGES="
for /f "tokens=*" %%i in ('git status --porcelain') do (
    set "HAS_CHANGES=1"
)

if defined HAS_CHANGES (
    echo  --- Fichiers modifies detectes ---
    git status --short
    echo.

    :: Demander le message de commit
    set "COMMIT_MSG="
    set /p "COMMIT_MSG= Message de commit (Entree = "Update portfolio") : "
    if not defined COMMIT_MSG set "COMMIT_MSG=Update portfolio"

    echo.
    echo  [1/4] Ajout de tous les fichiers...
    git add -A

    echo  [2/4] Commit : "!COMMIT_MSG!"
    git commit -m "!COMMIT_MSG!"
    if !errorlevel! neq 0 (
        echo.
        echo  [ERREUR] Le commit a echoue.
        pause
        exit /b 1
    )
) else (
    echo  [INFO] Aucun nouveau fichier modifie.
)

:: Synchronisation avec le depot distant pour eviter les rejets
echo.
echo  [3/4] Synchronisation avec GitHub (recuperation des nouveautes)...
git pull --rebase origin main
if %errorlevel% neq 0 (
    echo.
    echo  ============================================
    echo    [ERREUR] Conflit ou probleme de connexion.
    echo  ============================================
    echo.
    pause
    exit /b 1
)

:: Verifier s'il y a des commits en attente de push
set "UNPUSHED=0"
for /f %%c in ('git rev-list --count @{u}..HEAD 2^>nul') do set "UNPUSHED=%%c"
if "%UNPUSHED%"=="" (
    for /f %%c in ('git rev-list --count origin/main..HEAD 2^>nul') do set "UNPUSHED=%%c"
)

if "%UNPUSHED%"=="0" (
    echo.
    echo  ============================================
    echo    [OK] Tout est deja a jour sur GitHub !
    echo  ============================================
    echo.
    pause
    exit /b 0
)

echo.
echo  [4/4] Push vers GitHub (commits a envoyer : %UNPUSHED%)...
git push origin main

if %errorlevel% == 0 (
    echo.
    echo  ============================================
    echo    [OK] Push reussi avec succes !
    echo  ============================================
    echo.
) else (
    echo.
    echo  ============================================
    echo    [ERREUR] Le push a echoue.
    echo    Verifie ta connexion et tes droits GitHub.
    echo  ============================================
    echo.
)

pause
