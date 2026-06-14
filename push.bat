@echo off

set /p MSG="Commit message (Enter = 'update'): "
if "%MSG%"=="" set MSG=update

echo.
echo [1/3] git add .
git add .

echo [2/3] git commit -m "%MSG%"
git commit -m "%MSG%"

echo [3/3] git push
git push

echo.
echo Done!
pause
