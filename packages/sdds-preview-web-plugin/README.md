# @salutejs/sdds-preview-web-plugin

Web-плагин превью компонентов для DS Builder. Редактор DS Builder открывает его в iframe и передаёт payload по протоколу превью (`sdds.preview.*`); плагин отрисовывает компонент `@salutejs/plasma-new-hope` с CSS-переменными темы и конфигурации дизайн-системы. Пакет приватный: в npm не публикуется, в DS Builder попадает архивом.

## Зависимости

-   `@salutejs/plasma-new-hope`, `@salutejs/plasma-b2c`, `@salutejs/plasma-icons` — из workspace, точными версиями, как у вертикалей.
-   React и `styled-components` — свои; `resolve.dedupe` в `vite.config.ts` и `vitest.config.ts` оставляет в бандле по одному экземпляру.
-   Общие с генератором DS Builder правила (`web-adapter.json`, шаблоны `$1`, единицы, имена переменных темы, имена экспортов ядра) — из npm-пакета `@sddsjs/design-system-builder-generator` (точка входа `./web-mapping`). Новые правила приходят с новой версией этого пакета.

## Подготовка

Из корня репозитория:

```bash
npm install
npx lerna run prepare --scope @salutejs/sdds-preview-web-plugin --include-dependencies
```

Ядро должно быть собрано: API-мета строится из его `types/**/*.tokens.d.ts`.

Перед `dev`, `build`, `test` и `test:watch` скрипт `npm run generate` строит файлы, которых нет в Git:

-   `public/api-meta.json` — `dsbuilder-web-generator api-meta` по аннотациям установленного ядра;
-   `src/generated/component-manifests.json` — `dsbuilder-web-generator manifests`, манифесты компонентов генератора.

В IDE или при прямом запуске `vitest`/`tsc` выполните `npm run generate` один раз.

## Команды

```bash
npm run dev       # dev-сервер на :3011 (CORS), его открывает клиент DS Builder при локальной разработке
npm test          # vitest
npm run build     # tsc -b и vite build в dist
npm run lint      # eslint plasma
npm run package   # архив для публикации в ds-service
```

## Архив для DS Builder

`npm run package` собирается только из закоммиченного состояния пакета и пакетов plasma из бандла (ядро, `plasma-b2c`, `plasma-icons`). Он пишет `archive/preview-web-plugin.zip`: в `preview-plugin.json` дописываются `commit` (коммит plasma), `version` (ID сборки), `coreRelease` (координаты Core), `plasmaNewHopeVersion` и `apiMetaSha256`. В конце команда печатает блок происхождения.

Публикация архива в DS Builder с зарегистрированным Web Core:

```bash
dsbuilder preview-plugin publish --platform react --channel dev \
    --from archive/preview-web-plugin.zip --api-url https://api.example.com --apply
```

Укажите `stable` для соответствующего зарегистрированного релиза. Канал задаётся при публикации.

-   Локальный стенд DS Builder: скопировать архив в `local-dev/web-preview/preview-web-plugin.zip` и заменить напечатанным блоком `<!-- web-provenance:start -->…<!-- web-provenance:end -->` в `local-dev/README.md`.

## Совместимость с DS Builder

Формат payload задаёт контракт Preview Protocol в DS Builder (`backend-kt/preview/contract`). Копии контракта в пакете нет: после изменений протокола в DS Builder превью web-компонентов проверяется вручную на стенде.
