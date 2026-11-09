# Colony Zero → EXE

Игра лежит в `game/index.html`. GitHub Actions сам собирает из неё Windows-exe (Electron, portable — установка не нужна).

## Как получить exe
1. Создай на GitHub новый репозиторий (можно приватный).
2. Загрузи в него все файлы из этой папки (включая скрытую папку `.github`).
   Через сайт: Add file → Upload files. Папку `.github` надёжнее залить через git:
   `git init && git add . && git commit -m "init" && git branch -M main && git remote add origin <URL> && git push -u origin main`
3. Открой вкладку **Actions** — сборка запустится сама (3–5 минут).
4. Готовый файл: Actions → последний запуск → **Artifacts → ColonyZero-exe** (скачается zip с exe).

## Постоянная ссылка на exe (Releases)
Создай тег: `git tag v1.0.0 && git push origin v1.0.0` — exe появится в разделе **Releases**.

## Обновить игру
Замени `game/index.html` новой версией и сделай push — exe соберётся заново.

## Заметки
- F11 — полный экран. Сохранения хранятся в профиле пользователя.
- Windows может показать предупреждение SmartScreen («Windows защитила ваш компьютер»): exe не подписан. «Подробнее → Выполнить в любом случае».
- Иконка по умолчанию — от Electron. Чтобы поставить свою, положи `build/icon.ico` (256×256) и добавь в `package.json` → `build.win.icon`: `"build/icon.ico"`.
