---
name: add-ai-kit
description: Подключить AI-kit (Answer, Container, Header, Input, Markdown, UserMessage) к пакету вертикали Plasma/SDDS, отдельная точка входа `/ai`, сборка, Storybook, документация. Использовать, когда просят добавить, перенести или поставить AI-компоненты/AI Kit в вертикаль.
allowed-tools: Glob, Grep, Read, Write, Edit, Bash, Agent
---

# Подключение AI-kit к вертикали **\$ARGUMENTS**

Эталоны: `packages/sdds-serv` (css + styled-components + emotion) и `packages/sdds-bizcom` (css + styled-components). Ядро (`plasma-new-hope`) и фабрики stories (`plasma-sb-utils`) не меняются: вертикаль получает тонкие обёртки `mergeConfig(coreConfig, config)` и свои токены темы.

## Чек-лист

```
- [ ] 1. Разведка вертикали
- [ ] 2. Копирование исходников и документации (скрипт)
- [ ] 3. Точка входа и сборка
- [ ] 4. Документация
- [ ] 5. Проверки
- [ ] 6. Коммиты
```

## 1. Разведка

Определи и запиши:

-   Имя пакета и каталог: `packages/<pkg>`, `name` из `package.json`.
-   Модуль токенов темы — как его импортирует, например, `src/components/Button/Button.config.ts`: `@salutejs/sdds-themes/tokens/sdds_<theme>` или `@salutejs/plasma-themes/tokens/plasma_<theme>`.
-   Варианты поставки: есть ли в `exports` `./emotion`. AI-входы повторяют набор вариантов вертикали — без emotion в вертикали нет и `./ai/emotion`.
-   Особенности сборки: `rollup.config.mjs`, `scripts/copy-linaria-components.sh`, наличие `_beta` и `--ignore` в `swc`-скриптах, отдельные rollup-конфиги.
-   Сайт документации: `website/<pkg>-docs`.

Если в вертикали нет `rollup.config.mjs` или `copy-linaria-components.sh`, схема отличается от эталона: опиши расхождение пользователю до правок.

## 2. Копирование

Выполни из корня репозитория:

```bash
.agents/skills/add-ai-kit/scripts/copy-ai-kit.sh <pkg> <tokens-import>
# пример
.agents/skills/add-ai-kit/scripts/copy-ai-kit.sh sdds-finai @salutejs/sdds-themes/tokens/sdds_finai
```

Скрипт:

-   копирует `packages/sdds-serv/src/components/_ai` и `src/ai.ts`, заменяя токены `sdds_serv` на указанный модуль;
-   проверяет, что в вертикали есть компоненты, которые импортируют AI stories (`Button`, `Chip`, `ChipGroup`, `EmbedIconButton`, `Flow`, `IconButton`);
-   проверяет, что модуль токенов экспортирует все токены AI-конфигов (сейчас 41);
-   копирует `website/sdds-serv-docs/docs/ai` в `website/<pkg>-docs/docs/ai` с заменой `@salutejs/sdds-serv` на имя пакета.

Код выхода `2` и строки `MISSING ...` — блокер. Не подменяй токены и компоненты молча: сообщи пользователю, какие отсутствуют, и предложи варианты (добавить компонент в вертикаль, подобрать эквивалентный токен, убрать вариант из stories). Пример: в `sdds_cs` нет девяти `surfaceTransparent*` токенов и компонента `EmbedIconButton`.

Повторный запуск поверх существующего `_ai` — только с `--force`.

## 3. Точка входа и сборка

AI не экспортируется из `src/index.ts`. Отдельный вход — `src/ai.ts`.

**`package.json` → `exports`** (добавить после существующих входов):

```json
"./ai": {
  "import": "./dist/ai/css/es/index.js",
  "require": "./dist/ai/css/cjs/index.js",
  "types": "./types/ai.d.ts"
},
"./ai/styled-components": {
  "import": "./dist/ai/styled-components/es/index.js",
  "require": "./dist/ai/styled-components/cjs/index.js",
  "types": "./types/ai.d.ts"
}
```

`types/ai.d.ts` генерирует существующий `generate:typings` (`tsc`) из `src/ai.ts` — отдельный шаг не нужен.

**CSS (rollup):** превратить объект конфигурации в фабрику и собрать два входа:

```js
const createConfig = (inputFile, outputDir) => ({
    input: { index: path.join(inputDir, inputFile) },
    // ...прежние treeshake и plugins; в output: dir: `${outputDir}/es` и `${outputDir}/cjs`
});

export default [createConfig('index.ts', 'dist/css'), createConfig('ai.ts', 'dist/ai/css')];
```

**`scripts/copy-linaria-components.sh`:** исключить `_ai` из основного цикла и скопировать AI отдельно до удаления stories и замены `/styled-components` → `/css`:

```bash
components=$(grep -R plasma-new-hope src/components | cut -d / -f 3 | grep -v '^_ai$' | sort -u)
# ...цикл без изменений...
cp -R src/components/_ai src-css/components/_ai;
cp src/ai.ts src-css/ai.ts;
```

**Scripts.** Основная сборка не должна содержать `_ai`; AI собирается во временный `src-ai` с `ai.ts` как `index.ts`. Эталон — `packages/sdds-bizcom/package.json`:

```json
"build:css": "rm -rf dist/css dist/ai/css && rollup -c",
"prebuild:styled-components": "rm -rf src-styled-components src-ai && cp -R src src-styled-components && rm -rf src-styled-components/components/_ai && mkdir -p src-ai/components && cp -R src/components/_ai src-ai/components/_ai && cp src/ai.ts src-ai/index.ts",
"build:styled-components": "rm -rf dist/styled-components dist/ai/styled-components && npm run build:styled-components:esm && npm run build:styled-components:cjs",
"build:styled-components:cjs": "swc ./src-styled-components -d ./dist/styled-components/cjs ... -C module.type=commonjs && swc ./src-ai -d ./dist/ai/styled-components/cjs ... -C module.type=commonjs",
"build:styled-components:esm": "swc ./src-styled-components -d ./dist/styled-components/es ... -C module.type=es6 && swc ./src-ai -d ./dist/ai/styled-components/es ... -C module.type=es6",
"postbuild:styled-components": "rm -rf src-styled-components src-ai"
```

Сохраняй особенности вертикали: флаги `--ignore`, `_beta`, порядок шагов в `build`. Если `prebuild:styled-components` уже есть — дополни его, а не заменяй.

**Emotion** (только если в вертикали есть `./emotion`): добавить вход `./ai/emotion` → `dist/ai/emotion/{es,cjs}` и повторить схему `packages/sdds-serv/package.json` (`prebuild:emotion`, `build:emotion`, `postbuild:emotion` с `src-ai-emotion` и `replaceStyledComponentsToEmotion.js src-ai-emotion`). Скрипт замены должен принимать каталог через `process.argv[2]`.

**README пакета:** раздел «AI-kit» с импортами каждого варианта поставки (образец — `packages/sdds-bizcom/README.md`).

## 4. Документация

-   `website/<pkg>-docs/docs/ai/*` уже скопирован скриптом.
-   `src/theme/ReactLiveScope/index.tsx`: `import * as AiPackage from '@salutejs/<pkg>/ai';` и `...AiPackage` в scope — без этого live-примеры не рендерятся.
-   `docusaurus.config.js` (если есть блок llms): добавить `'ai/**'` в `includeOrder` после `'components/**'` и упомянуть AI-входы в `rootContent`.

## 5. Проверки

1. `npm run lint --workspace=<name>`.
2. `npm run build --workspace=<name>`; затем:
    - `dist/ai/css/es/index.js` и `dist/ai/styled-components/es/index.js` экспортируют шесть компонентов;
    - основной `dist/css/es/index.js` не содержит `_ai`;
    - `types/ai.d.ts` существует.
3. Storybook вертикали (`npm run storybook --workspace=<name>`), истории `AI Kit/*` на светлой и тёмной теме: акцентная кнопка отправки Input, ссылка Markdown, вид `accent` UserMessage берут цвета темы вертикали.
    - Надпись «No Preview» в iframe часто остаётся скрытым оверлеем при отрисованной истории — проверяй DOM и computed styles.
    - Тема переключается кнопкой тулбара; query-параметр `globals` для темы ненадёжен.
4. Расхождение цвета с макетом сначала сверяй с токеном темы (`src/themes/<theme>__light.ts`), а не с конфигом компонента. Файлы тем помечены «Generated by robots»: правка значения токена делается в источнике токенов, иначе следующая генерация её перезапишет.
5. В отчёте перечисли выполненные проверки и то, что выполнить не удалось.

Cypress-тестов AI-компонентов в вертикалях нет (в Serv тоже); API-тесты для AI отсутствуют.
