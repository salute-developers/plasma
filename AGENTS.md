# Работа с Plasma

## Структура репозитория

-   Это монорепозиторий дизайн-системы Plasma/SDDS на npm workspaces и Lerna.
-   `packages/plasma-new-hope` — ядро (core) дизайн-системы с общими реализациями компонентов.
-   Пакеты вертикалей в `packages/`, например `plasma-web`, `plasma-b2c` и `sdds-serv`, используют компоненты из ядра и задают собственные конфигурации. Перед правкой определи, относится ли она к общей реализации или конкретной вертикали.
-   `packages/themes/` — пакеты тем; `utils/` — общие утилиты, включая `plasma-sb-utils`, `plasma-cy-utils` и `api-tests`.
-   `website/` — сайты документации; `cypress/` — инфраструктура компонентных тестов и снимки.

## Окружение и зависимости

-   Используй Node из `.nvmrc` (`nvm use`) и npm из его поставки.
-   Устанавливай зависимости из корня репозитория. Для первичной подготовки окружения предусмотрен `npm run setup`: зависимости, патчи, Cypress и сборка workspace-пакетов.
-   Для сборки выбранного пакета с зависимостями используй `npx lerna run prepare --scope <имя-пакета> --include-dependencies`.
-   При изменении зависимостей синхронизируй lock-файл из корня: `npm install --no-audit --no-progress --package-lock-only --ignore-scripts`.
-   Не форматируй `package-lock.json` через Prettier. Проверь, что diff отражает изменения зависимостей без посторонних массовых изменений.

## Проверки

-   Выбирай проверки по затронутым пакетам и характеру изменения. Проверяй доступные команды в соответствующем `package.json` и настройки CI в `.github/workflows/`.
-   Подробные команды подготовки и проверок описаны в [CONTRIBUTING.md](CONTRIBUTING.md). Процедуры создания core-компонентов и API-тестов хранятся в соответствующих навыках. При изменении scripts или тестовой инфраструктуры обновляй связанные инструкции.
-   Пример линтинга: `npm run lint --workspace=@salutejs/plasma-new-hope`.
-   Пример запуска Storybook: `npm run storybook --workspace=@salutejs/plasma-web`.
-   Компонентные тесты через Docker: `PACKAGE_NAME=plasma-web COMPONENTS=Button npm run cy:run`. Подставляй нужный пакет вертикали и компоненты; настройки находятся в `cypress.config.ts` и `scripts/cy-run.js`.
-   API-тесты редактируй в `utils/api-tests/src/components/`; `utils/api-tests/tests/` генерируется заново. Проверка выполняется через `tsc`, без запуска Node test runner. Перед ней пересобери изменённые пакеты вертикалей и их декларации типов.
-   Для изменений публичных типов учитывай API-тесты в `utils/api-tests`; команда пакета: `npm run test --workspace=@salutejs/sdds-api-tests`.
-   При изменении поведения или внешнего вида компонента добавляй или обновляй соответствующие тесты. Проверяй визуальные изменения перед обновлением эталонных снимков.
-   В результате работы укажи выполненные проверки и причины, если какую-либо нужную проверку выполнить не удалось.

## Навыки

Основные файлы навыков находятся в `.agents/skills/<имя>/SKILL.md`. Каталог `.claude/skills` — относительная символическая ссылка на `../.agents/skills` для Claude Code. Редактируй и добавляй навыки в `.agents/skills/`; они также доступны через `.claude/skills/` без создания дополнительных ссылок.

Перед соответствующей задачей прочитай нужный навык:

-   [api-test](.agents/skills/api-test/SKILL.md) — создание API type-check тестов компонента.
-   [create-core-component](.agents/skills/create-core-component/SKILL.md) — создание компонента с нуля в ядре и его подключение к пакетам вертикалей.
-   [migrate-test](.agents/skills/migrate-test/SKILL.md) — перенос Cypress-тестов на паттерн `plasma-new-hope`.
-   [migrate-stories](.agents/skills/migrate-stories/SKILL.md) — миграция stories на общую фабрику из `plasma-sb-utils`.
-   [remove-old-test](.agents/skills/remove-old-test/SKILL.md) — удаление старых тестов и снимков по запросу.
-   [figma-component](.agents/skills/figma-component/SKILL.md) — создание и изменение компонентов дизайн-системы по Figma.
-   [figma-layout](.agents/skills/figma-layout/SKILL.md) — реализация продуктовых экранов на готовых компонентах.

## Коммиты и PR

-   Следуй процессу из `CONTRIBUTING.md`, сверяя команды с текущим кодом.
-   Используй Conventional Commits на английском; изменения одного коммита должны относиться к одному пакету.
-   Не поднимай версии пакетов вручную: версионирование автоматизировано.
-   Обычные PR направляются в `dev`. Описывай конкретное изменение поведения и проведённые проверки.
