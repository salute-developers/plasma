---
name: web-preview-plugin-flow
description: Порядок правок web-генератора DS Builder (js/cli, npm @sddsjs/design-system-builder-generator) и web-плагина превью (plasma packages/sdds-preview-web-plugin) и доставки плагина в DS Builder. Использовать перед любой правкой генератора, web-adapter.json, манифестов генератора, web-плагина превью, его story или ядра, которое он рисует. Файл одинаков в репозиториях DS Builder и plasma.
---

# Генератор DS Builder и web-плагин превью

Файл лежит в двух репозиториях с одинаковым содержимым: DS Builder (`design-system-builder`) и plasma. Меняя его, меняйте обе копии.

## Где что живёт

| Что                                                                                                     | Репозиторий | Путь                                                                                           |
| ------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| Web-генератор пакета ДС, импортёр `import:plasma`, `web-adapter.json`, манифесты компонентов генератора | DS Builder  | `js/cli` (npm `@sddsjs/design-system-builder-generator`)                                       |
| Общие с плагином правила маппинга (чистые функции без Node.js и без ядра)                               | DS Builder  | `js/cli/src/web-mapping`, точка входа пакета `./web-mapping`                                   |
| Web-плагин превью: мост `sdds.preview.*`, разбор payload `WEB`, story, реестр, упаковка                 | plasma      | `packages/sdds-preview-web-plugin` (`@salutejs/sdds-preview-web-plugin`, private)              |
| Ядро, которое рисует плагин                                                                             | plasma      | `packages/plasma-new-hope` (из workspace)                                                      |
| Контракт Preview Protocol (схема и фикстуры payload)                                                    | DS Builder  | `backend-kt/preview/contract`                                                                  |
| Архив плагина для локального стенда DS Builder                                                          | DS Builder  | `local-dev/web-preview/preview-web-plugin.zip` и блок `web-provenance` в `local-dev/README.md` |

Плагин подключает генератор из npm точной версией. В `js/cli/src/web-mapping` попадает только то, что вызывает сам генератор; логика превью (payload, протокол, выбор параметра состояния, шаблон по всем конфигурациям) остаётся в плагине.

## 1. Правка генератора (DS Builder, `js/cli`)

Сначала определи, касается ли правка плагина.

**Плагина не касается** (код пакета ДС, темы, обёртки, импортёр):

1. Правка в `js/cli`; проверка `npm run typecheck && npm test` в `js/cli`, при необходимости `npm run generate:ds` на локальной `.sdds`.
2. Подними `version` в `js/cli/package.json` и `package-lock.json`: `npm version patch --no-git-tag-version` (несовместимое изменение — `minor`). Один подъём на ветку.
3. Публикация пакета (`npm publish` в `js/cli`, вручную, владелец scope) — когда новая версия нужна пользователям генератора.

**Касается плагина** — правки в `src/web-mapping/*`, `src/data/web-adapter.json` (шаблоны `$1`, `compose`, имена), `src/generator/templates/*/component.json` (имена экспортов ядра), построении меты (`generate-api-meta.ts`):

1. Правка, тесты и подъём версии, как выше.
2. Публикация `npm publish` в `js/cli`. Реестр показывает новую версию через несколько минут (`npm view @sddsjs/design-system-builder-generator versions`).
3. В plasma: `npm install @sddsjs/design-system-builder-generator@<версия> --save-exact` в `packages/sdds-preview-web-plugin`, затем lock-файл из корня (`npm install --no-audit --no-progress --package-lock-only --ignore-scripts`).
4. Дальше — раздел 2: проверки плагина, архив, доставка.

Проверка плагина до публикации генератора: `npm pack` в `js/cli`, затем `npm install <tgz> --no-save` в пакете плагина — `package.json` и lock-файл не меняются.

## 2. Правка web-плагина (plasma, `packages/sdds-preview-web-plugin`)

**Подготовка** — из корня plasma, один раз и после каждой правки ядра:

```bash
npm install
npx lerna run prepare --scope @salutejs/sdds-preview-web-plugin --include-dependencies
```

Без свежей сборки ядра мета (`dsbuilder-web-generator api-meta` читает `types/**/*.tokens.d.ts`) и бандл возьмут устаревшие `types`/`dist`: превью разойдётся с исходниками ядра. Перед `dev`, `build`, `test` скрипт `npm run generate` строит `public/api-meta.json` и `src/generated/component-manifests.json` (не в Git); в IDE или при прямом `vitest` запусти его вручную.

**Правка и проверки** в пакете:

1. Story, реестр (`src/registry.ts` и `components` в `public/preview-plugin.json` в одном порядке), разбор payload — в `src`. Правка ядра — в `packages/plasma-new-hope`, затем пересборка (см. подготовку).
2. `npm test`, `npm run lint`, `npm run build`. Pre-commit plasma проверяет eslint и prettier всех файлов коммита, включая `test` и конфиги. Prettier в plasma 2.0.5: не используй `import { x, type Y }` — пиши отдельный `import type`.
3. React — общий для plasma (19). `vite.config.ts`/`vitest.config.ts` направляют `react`, `react-dom`, `styled-components` на зависимости плагина; не меняй их версии на отличные от корня plasma — второй React ломает хуки.
4. Версии пакета вручную не поднимать: пакет приватный, версионирование plasma автоматизировано.

**Быстрая проверка на локальном стенде DS Builder без коммита:**

-   `npm run dev` в пакете (порт 3011) и клиенту DS Builder `VITE_WEB_PREVIEW_PLUGIN_URL=http://localhost:3011/`;
-   или архив `PREVIEW_WEB_PLUGIN_ALLOW_DIRTY=1 npm run package` и публикация `./publish-preview-plugin.sh --platform react --from <архив>` из корня DS Builder. Сборка с тем же `commit`, но другим содержимым повторно не публикуется: для повторной проверки без коммита номер сборки бери из хеша содержимого `dist` (функции `enrichManifest`, `validateWebManifest`, `zipDirectory` из `scripts/package.mjs`).

## 3. Доставка плагина в DS Builder

После коммита в plasma:

1. `npm run package` в пакете, без `PREVIEW_WEB_PLUGIN_ALLOW_DIRTY`: проверяет, что пакет, ядро, `plasma-b2c` и `plasma-icons` закоммичены, пишет `archive/preview-web-plugin.zip` (в манифесте `commit` plasma, `plasmaNewHopeVersion`, `apiMetaSha256`) и печатает блок происхождения.
2. Локальный стенд коллег: скопируй архив в `local-dev/web-preview/preview-web-plugin.zip` DS Builder, замени напечатанным блоком `<!-- web-provenance:start -->…<!-- web-provenance:end -->` в `local-dev/README.md`, закоммить в DS Builder.
3. Стенды dev/prod: `dsbuilder preview-plugin publish --platform react --from <архив>` — сначала без `--apply` (пробный запуск покажет расхождения меты с глобальным слоем, например «Property type mismatches»), затем с `--apply`.

## 4. Изменение протокола превью

Контракт payload живёт в DS Builder, плагин его не копирует и тестами не сверяет. После изменения формата payload в DS Builder (клиент, ассемблер, схема) открой превью web-компонентов на стенде и проверь вручную; если плагин отвечает «Не удалось построить превью» (`invalid_payload`), правка — в plasma по разделу 2.
