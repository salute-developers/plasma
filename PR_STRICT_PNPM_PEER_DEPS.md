# peerDeps для re-export-ируемых транзитивов

## Проблема

`plasma-giga/dist/css/es/index.js` и `plasma-new-hope/dist/css/es/index.js` реэкспортируют наружу `react-number-format`, `@floating-ui/*`, `@popperjs/*`, `@salutejs/plasma-new-hope/css` и ещё с десяток пакетов. Эти пакеты живут в `dependencies`, а не в `peerDependencies`.

Под классическим npm flat-hoist это работало: транзитивы попадали в верхний `node_modules/` host-проекта, его резолвер их находил.

Под `pnpm` strict транзитивы лежат изолированно в `.pnpm/<pkg>/node_modules/`, и Vite 8 / Rolldown их не видят:

```
Failed to resolve import "@salutejs/plasma-new-hope/css"
  from "node_modules/@salutejs/plasma-giga/dist/css/es/index.js"
Failed to resolve import "react-number-format"
  from "node_modules/@salutejs/plasma-new-hope/dist/css/es/index.js"
```

Host-проектам приходится дублировать десятки транзитивов плазмы в собственном `package.json` или плодить `public-hoist-pattern[]=` в `.npmrc` — оба варианта плохо переживают мажоры плазмы.

## Фикс

В `plasma-new-hope` и `plasma-giga` транзитивы, которые попадают в публичный API через bare specifier, переехали из `dependencies` в `peerDependencies`. Для пакетов из специфических компонентов (`react-number-format` → `NumberFormat`, `rc-tree` → `Tree`, `@tanstack/react-table` → `Table` и т. п.) — `peerDependenciesMeta.optional = true`, чтобы host получал warning только когда реально использует соответствующий компонент.

Список — в дифе `packages/plasma-new-hope/package.json` и `packages/plasma-giga/package.json`.

## Совместимость

Не ломает существующих потребителей:

-   **npm/yarn classic** — peer ставятся автоматически (npm v7+), поведение не меняется.
-   **pnpm 8+** — `auto-install-peers=true` по умолчанию, peer подтягиваются сами.
-   **pnpm strict без auto-install-peers** — host получает корректное «missing peer dependency», что и нужно.

SemVer: minor. Публичный API компонентов и типы не трогаются.

## Тест-план

-   [ ] CI плазмы (`lint`, `test`, `build`) зелёный.
-   [ ] Storybook-сборки `plasma-giga` и `plasma-new-hope` собираются.
-   [ ] Smoke на pnpm strict монорепе (`pnpm@11`, без `public-hoist-pattern`): `vite build` и `vitest run` host-проекта проходят без `Failed to resolve import` на бывшие транзитивы.
