# Next.js build check

Проверяет, что конкретный build-вариант из `package.json#exports` конечного пакета (`packages/<pkg>`) не вызовет ошибок сборки, при использовании библиотеки внутри Next.js-приложения.

## 🎯 Назначение

Ошибки, с которыми может столкнуться внешний потребитель: сломанные `exports`/`files` в `package.json`, забытый `transpilePackages` для CSS-бандла, недостающий peer-зависимость.

Инструмент подготавливает нужный пакет через `npm pack` (как перед реальной публикацией) и ставит получившийся тарболл в изолированное Next.js-приложение, как это сделал бы реальный пользователь. А затем выполняет `next build`.

## Как это работает

1. **Определение пакета и build-варианта** (`lib/resolve-target.ts`) — по флагам `--package`/
   `--build` или интерактивными промптами (`inquirer`), как в `scripts/cy-cli.js`. Список
   алиасов пакетов — общий с ним (`scripts/lib/final-packages.js`).
2. **Проверка, что пакет уже собран** — `packages/<pkg>/dist` должен существовать (`npm run prepare` в конечном пакете, аалогично для запуска Cypress-тестов)
3. **`npm pack --ignore-scripts`** в `packages/<pkg>` — получаем тот же `.tgz`, что уйдёт в
   registry при публикации.
4. **Список компонентов build-варианта** (`lib/target.ts#getExportedComponentNames`) — читаем
   настоящие имена экспортируемых компонентов из скомпилированного бандла (`export { A, B } from './components/…'`)
5. **Подбор примера на компонент** (`lib/docs-example.ts`) — имя `.mdx`-файла в доках 1-в-1
   совпадает с именем компонента (`Button.mdx`, `ButtonGroup.mdx`…). Если в
   `website/<pkg>-docs/docs/components/<Name>.mdx` (или `docs/ai/<Name>.mdx` — для
   build-вариантов `./ai*`) есть блок ` ```tsx live ` , который либо импортирует тестируемый
   пакет, либо просто использует `<Name` (без импорта — часть примеров полагается на то, что
   live-плеер Docusaurus сам подставляет в scope компонент документируемой страницы, например
   `Table.mdx`) — берём этот блок целиком (реальные пропы, соседние импорты вроде иконок),
   подставляем вместо импорта пакета нужный build-путь и, если явного импорта самого
   компонента не было, дописываем его (`ensureComponentImport`). **Если файла/блока нет —
   компонент пропускается**
6. **`_app.jsx` и SSR-флаг у Popup-провайдеров** (`lib/target.ts#findPopupProviderExportName`,
   `lib/fixture.ts#buildAppSource`) — `Popup`/`Drawer`/`Modal`/`Notification` рендерят портал
   через `document`/`window` напрямую и без явного разрешения падают на `next build` с
   `document is not defined` (см. `PopupContext.tsx` в `plasma-new-hope`). Если бандл
   реэкспортирует `PopupProvider` — генерируемый `_app.jsx` оборачивает им всё приложение с
   пропом `UNSAFE_SSR_ENABLED`. Имя компонента не всегда `PopupProvider` — `plasma-b2c`
   реэкспортирует его как `PopupProvider as PopupBaseProvider` (а в разных build-вариантах
   даже под разным именем папки — `Popup` у styled-components/`sdds-serv`, `PopupBase` у
   styled-components/`plasma-b2c`), поэтому резолвится настоящее имя, а не
   захардкоженное.
7. **Установка в шаблон** (`fixture/`, см. ниже) — тарболл, `peerDependencies` пакета
   (`styled-components`, `@emotion/*`, `@salutejs/plasma-icons` и т.п.) и сторонние импорты из
   всех подобранных примеров ставятся `npm install --no-save --ignore-scripts`.
8. **`next build`** в шаблоне — на каждый компонент создается своя страница (`pages/<name>.tsx`, имя в
   нижнем регистре), Next компилирует и пререндерит их все за один прогон.

> Если CSS-бандл (target-путь из `exports` содержит `/css/`) — в `next.config.js` подставляется `transpilePackages` (сам пакет + все его `@salutejs/*` зависимости), иначе Next упадёт с `Global CSS cannot be imported from within node_modules`.

`fixture/pages/` целиком генерируется на каждый прогон (включая `_app.jsx`) — в git ничего из
неё не коммитится, `writeFixtureFiles` пересоздаёт директорию, если её нет.

## Локальный запуск

```bash
# соберите пакет, если ещё не собран
npm run build --prefix packages/sdds-serv

# интерактивно (выбор пакета и build через промпты)
npm run next:build

# явно
npm run next:build -- --package=sdds-serv --build=styled-components --ci
```

`--build` — это ключ из `exports` без ведущего `./` (`.`, `styled-components`, `ai/emotion`…).
`--ci` отключает интерактивные промпты и требует `--package`/`--build` явно.

## CI

`.github/workflows/next-build-check.yml`:

-   комментарий в PR — `/next-build <package> [build]` (без `build` — прогоняются все варианты из `exports`), доступно пользователям с правами `write`, `maintain` или `admin` на репозиторий;
-   вручную — `workflow_dispatch` с теми же `package`/`build`.
