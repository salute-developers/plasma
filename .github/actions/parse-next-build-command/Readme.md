# Parse next-build command for GitHub Actions

Этот скрипт разбирает триггер workflow `next-build-check.yml` (комментарий `/next-build` в PR или ручной `workflow_dispatch`) и резолвит, что и откуда собирать. Интегрирован как часть GitHub Actions workflow.

## 🎯 Назначение

-   `workflow_dispatch` — берёт `package`/`build` из входных параметров, ref для чекаута — текущий коммит.
-   `issue_comment` — проверяет, что комментарий оставлен на PR, разбирает команду `/next-build <package> [build]`, проверяет `author_association` комментатора (`OWNER`/`MEMBER`/`COLLABORATOR`), резолвит sha PR-ветки для чекаута и ставит реакцию 👀 на комментарий.

Если запуск не авторизован (не PR, команда не распознана, автор не из списка) — выставляет `allowed=false`, остальные джобы workflow это учитывают и не запускаются.
