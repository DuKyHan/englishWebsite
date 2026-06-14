@echo off

set /p MSG="Commit message (Enter = 'update'): "
if "%MSG%"=="" set MSG=update

echo.
echo [1/4] git add .
git add .

echo [2/4] git commit -m "%MSG%"
git commit -m "%MSG%"

echo [3/4] git pull --rebase
git pull --rebase

echo [4/4] git push
git push

echo.
echo Done!
pause