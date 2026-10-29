# Contributing

Процесс внесения изменений в репозиторий

## Node, npm versions

Для корректной работы, необходимо использовать:

-   **Node** из `.nvmrc`;
-   **npm** из поставки Node;

Для этого нужно выполнить команду в корне репозитория:

```sh
 nvm use
```

## Установка зависимостей

Для внесения правок в нескольких пакетах одновременно, можно выполнить следующие команды в корне проекта:

Установить все зависимости, применить патчи и собрать workspace-пакеты:

```sh
npm run setup
```

Установка выполняется на уровне корня monorepo. Фильтрацию по пакетам нужно применять на уровне запуска команд:

```sh
npx lerna run [команда] --scope [имя пакета 1] --include-dependencies
```

Если возникла какая-либо проблема со сборкой, можно попробовать полностью удалить все зависимости и установить их заново:

```sh
rm -rf ./node_modules/
npm run setup
```

## Обновление package-lock.json

При изменении `dependencies`, `devDependencies` или `peerDependencies` в корневом или пакетном `package.json` необходимо синхронизировать lock-файлы.

**Рекомендуемый способ (полная регенерация, как в CI):**

```sh
npm install --no-audit --no-progress --package-lock-only --ignore-scripts
```

**Не делайте так:**

-   `cd packages/foo && npm install` — изолированная установка перегенерирует lock и может изменить дерево зависимостей;
-   `npm install --package-lock-only` без флагов, используемых в рекомендуемой команде;
-   форматирование `package-lock.json` через Prettier — lock-файлы генерируются npm.

Проверка: `git diff` по lock-файлам должен отражать только изменения зависимостей, а не массовую смену отступов.

## Создание core-компонента

При создании нового компонента в ядре и его подключении к пакетам вертикалей используйте инструкцию из навыка [create-core-component](./.agents/skills/create-core-component/SKILL.md).

## Запуск Storybook

Все команды ниже выполняются из корня репозитория. Укажите workspace нужного пакета вертикали:

```sh
npm run storybook --workspace=@salutejs/plasma-web
```

Для статической сборки:

```sh
npm run storybook:build --workspace=@salutejs/plasma-web
```

## Линтинг и проверка типов

Проверка отдельного пакета:

```sh
npm run lint --workspace=@salutejs/plasma-new-hope
```

Общий `npm run lint` также проверяет скрипты и структуру пакетов. Его Lerna-часть выбирает изменения относительно `origin/dev`, поэтому эта ссылка должна быть доступна локально.

CI запускает lint изменённых пакетов относительно SHA базы PR или merge group без предварительной сборки workspace-пакетов. `@salutejs/plasma-colors` исключён из этой проверки: его `src` генерируется при сборке и проверяется командой `build:colors`.

При изменении публичных props, generic-типов или экспортов компонентов обновите API-тесты в `utils/api-tests/src/components/` и выполните:

```sh
npm run test --workspace=@salutejs/sdds-api-tests
```

Перед запуском должны быть собраны пакеты вертикалей и их декларации типов. Устройство тестов, подготовка и примеры описаны в навыке [api-test](./.agents/skills/api-test/SKILL.md).

## Issues

Если в процессе разработки выяснилось, что необходимо сделать какое-то изменение в будущем или встретился какой-либо баг, то требуется создать новый [Issue](https://github.com/salute-developers/plasma/issues), добавить в нём описание и требования, а также отметить данный участок кода комментарием с ключевым словом `TODO` и ссылкой на ишью:

```javascript
// TODO: https://github.com/salute-developers/plasma/issues/438
```

## Unit тесты

Поведение компонента (колбэки, события, значения, фокус) проверяется unit-тестами, внешний вид — снимками Cypress. Проверки между ними не дублируются.

-   `*.test.ts` — логика, выполняется в Node.
-   `*.test.tsx` — поведение компонентов, выполняется в Chromium. Компоненты берутся из `src/examples/components`, поэтому тест запускается один раз, а не в каждой вертикали.

Тесты лежат в `packages/plasma-new-hope` рядом с кодом. Пример — `DatePicker.test.tsx`.

Запуск (перед первым запуском: `npx playwright install chromium`):

```sh
npm run test --workspace=@salutejs/plasma-new-hope
```

## Cypress тесты

При изменении внешнего вида компонента добавляйте или обновляйте снимки.

### Запуск через Docker

После установки зависимостей и сборки пакетов запустите Docker. Команда `cy:run` использует образ, указанный в `scripts/cy-run.js`; локальная установка Chromium для этого способа не нужна.

```sh
PACKAGE_NAME=plasma-web npm run cy:run
```

`PACKAGE_NAME` — имя каталога пакета вертикали без `@salutejs/`. Конфигурация ищет тесты как в этом пакете, так и в `plasma-new-hope`.

Для отдельных компонентов передайте имена через запятую:

```sh
PACKAGE_NAME=plasma-web COMPONENTS=Button,Checkbox npm run cy:run
```

По умолчанию используется Chromium. Для WebKit:

```sh
PACKAGE_NAME=plasma-web COMPONENTS=Button BROWSER=webkit npm run cy:run
```

CI также запускает Chromium и WebKit; матрицы описаны в `.github/workflows/cypress.yml`.

### Обновление снимков

```sh
PACKAGE_NAME=plasma-web COMPONENTS=Button CYPRESS_updateSnapshots=true npm run cy:run
```

Для снимков WebKit дополнительно задайте `BROWSER=webkit`. Проверьте визуальные изменения и добавьте нужные эталонные снимки из `cypress/snapshots/` в коммит.

### Локальная отладка

Для интерактивного запуска нужны локальные Cypress и Chromium. Cypress устанавливается при `npm run setup`; отдельно его можно установить командой `npm run setup:cypress`.

```sh
PACKAGE_NAME=plasma-web COMPONENTS=Button npm run cy:open
```

`cy:open` запускает локальный Chromium, без Docker. Переменные и правила выбора тестов описаны в `cypress.config.ts`.

## Git hooks

После установки зависимостей с `--ignore-scripts` установите hooks отдельно:

```sh
npm run prepare
```

Текущий `pre-commit` запускает `lint-staged`, а `commit-msg` — `commitlint`. Они не генерируют API-отчёты и не заменяют запуск API- или Cypress-тестов.

## Commit step

Мы используем Conventional Commits (<https://www.conventionalcommits.org/>). Git commit message должен быть на английском языке.
Изменения в коммите должны затрагивать только один пакет.
Версионирование пакетов происходит автоматически, руками версию в `package.json` не поднимаем.

```sh
git commit -m "fix(plasma-web): Fix component Y"
```

Использование Conventional Commits обязательно:

-   `fix` - если вносится исправление в существующую функциональность. Приведет к выпуску _патча_ пакета по [semver](https://semver.org/lang/ru/);
-   `feat` - если в кодовую базу добавляется новая функциональность. Приведет к выпуску _минорной_ версии пакета;
-   `docs` - если вносится изменение в контент документации, например в файлах с расширениями `*.md` и `*.mdx`;
-   `chore` - если вносимые изменения не относятся ни к кодовой базе пакетов, ни к документации;
-   `build` - сборка пакетов и утилит;
-   `test` - для добавления / обновления тестов и снапшотов;
-   `ci` - для всех коммитов в папке .github

## Pull request

-   Создаем PR в ветку `dev`, дожидаемся успешного завершения работы CI.
-   Для canary-публикации оставьте комментарий `/release-canary` в открытом PR из этого же репозитория. Команда доступна пользователям с правами `write`, `maintain` или `admin`; PR из форков не публикуются.
-   Дописываем в главный коммент описание того, что было сделано и для чего.
-   Дожидаемся аппрува от всех ревьюеров ПРа.
-   Добавляем PR в очередь на мёрж.

## Release

Обычные изменения направляются в `dev`. Подготовка релизного PR автоматизирована в [.github/workflows/create-release-pr.yml](./.github/workflows/create-release-pr.yml): workflow обрабатывает создание веток `release_*` и ручной запуск.

Публикацией управляет [.github/workflows/publish-npm.yml](./.github/workflows/publish-npm.yml):

-   комментарий `/release-canary` обрабатывает отдельный workflow [Request canary publication](./.github/workflows/publish-canary-request.yml): после проверки прав автора и PR он запускает `Publish npm` через `workflow_dispatch`;
-   push в `master` запускает публикацию `latest`, после которой обновляется changelog;
-   ручной запуск поддерживает `rc`, `next-sbcom` и `canary`. Для canary выберите workflow из `dev` и укажите `pull-request-number`. Необязательный `expected-head-sha` позволяет потребовать конкретный head SHA; без него собирается merge ref PR.

Точка входа trusted publishing остаётся `publish-npm.yml`. После комментария в Actions появятся два запуска: `Request canary publication` для проверки запроса и `Publish npm` для публикации. Обработчик комментария использует `GITHUB_TOKEN` с `actions: write` и передаёт head SHA PR; общий workflow проверяет, что PR не изменился. Если проверка не прошла, повторите `/release-canary` для новой ревизии.

Версии и публикация выполняются через общий workflow `publish-common.yml`. Документация, Storybook и Cypress имеют отдельные workflows; состав выполненных проверок и публикаций смотрите в конкретном запуске CI.

Jobs добавления preview-комментариев в `sdds-landing-pr.yml` и `documentation-deploy-pr.yml` загружают helper-скрипты из `github.workflow_sha`, чтобы их версия совпадала с workflow. Для `pull_request_target` это ревизия default-ветки `dev`; база релизного PR (`master`) может ещё не содержать новых helper-скриптов.

### HotFix

Для hotfix создайте ветку на базе `master` и откройте PR в `master`. После публикации hotfix необходимо обновить ветку `dev`: влейте в неё ветку `master` через `merge --no-ff`.
