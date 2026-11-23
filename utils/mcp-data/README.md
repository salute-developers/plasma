# @salutejs/sdds-mcp-data

Генерирует MCP-данные из документации вертикалей (`website/<lib>-docs`). Эти данные CI загружает в S3 (`.github/workflows/mcp-data-upload.yml`), а `@salutejs/sdds-mcp` отдаёт их через tools.

Один пакет на все сайты: отличия сайта задаются в его `mcp.config.mjs`, код генерации общий.

## Шаги

```text
docs/**/*.mdx + .docusaurus/docusaurus-plugin-react-docgen-typescript
        │  index
        ▼
index.json                      — страницы: текст, код, props, URL, категория
        │  mcp-data
        ▼
mcpData/<категория>/*.json      — паспорта компонентов и текстовые страницы
mcpData/<категория>/index.json  — списки для list_components и др.
mcpData/manifest.json           — версия пакета, tools, пути категорий
```

- **index** обходит `docs/`, пропуская файлы и папки с префиксом `_` (partials). Их содержимое попадает в страницу через импорт. Вместо `<PropsTable name="X" />` подставляются props из docgen-данных. Docgen-данные пишет сборка Docusaurus, поэтому сначала нужно собрать сайт.
- **mcp-data** раскладывает страницы по категориям (первый сегмент пути в `docs/`). Страницы `components/` и категорий из `extraComponentCategories` становятся паспортами компонентов (`summary`, `api.props`, `examples`), остальные сохраняются текстом. Имя компонента берётся из `title` во frontmatter, `slug` на него не влияет. Версия в манифесте берётся из `packages/<lib>/package.json`.
- **Токены** (категория `tokens`) берутся из установленного пакета темы, а не из файла в репозитории: модуль `tokens.entry` разрешается от `packages/<lib>/package.json`, читается лежащий рядом с ним `.d.ts`, из `var(--token, fallback)` убираются fallback-значения. Так данные соответствуют версии темы, с которой публикуется вертикаль. Пакеты тем монорепозитория должны быть собраны. Если модуль не найден или в его `.d.ts` нет `export declare const`, шаг завершается ошибкой.

## Запуск

Из сайта, как в CI:

```bash
NODE_OPTIONS=--max_old_space_size=10240 npm run build --prefix=./website/sdds-serv-docs -- --no-minify
npm run generate-index --prefix=./website/sdds-serv-docs
npm run generate-mcp-data --prefix=./website/sdds-serv-docs
```

Или напрямую:

```bash
node utils/mcp-data/src/cli.ts index --lib sdds-serv
node utils/mcp-data/src/cli.ts mcp-data --lib sdds-serv
```

`--lib` — имя вертикали: по нему находятся `website/<lib>-docs` и `packages/<lib>`, оно же пишется в `productId`.

Код на TypeScript исполняется Node напрямую, без сборки и без `tsx`. Нужна версия Node из `.nvmrc`. Поэтому в `src/` допустим только стираемый синтаксис TS: никаких `enum`, `namespace`, parameter properties, а импорты пишутся с расширением `.ts`.

## Конфиг сайта

`website/<lib>-docs/mcp.config.mjs`:

```js
/** @type {import('../../utils/mcp-data/src/config.ts').McpDataConfig} */
export default {
    baseUrl: 'https://plasma.sberdevices.ru/sdds-serv/',
    tools: ['list_components', 'search_icons', 'get_installation_guide', 'get_form_guide', 'get_tokens', 'get_component'],
    tokens: { entry: '@salutejs/sdds-themes/tokens/sdds_serv' },
    extraComponentCategories: {
        ai: { package: 'sdds-serv/ai' },
        beta: { package: 'sdds-serv/beta', stability: 'beta' },
    },
};
```

| Поле | Обязательное | Описание |
| --- | --- | --- |
| `baseUrl` | да | Адрес сайта, от него строятся ссылки на страницы. |
| `tools` | да | Разрешённые tools в порядке `manifest.tools`. Допустимые значения — `KNOWN_TOOLS` в `src/config.ts`. |
| `tokens.entry` | если в `tools` есть `get_tokens` | Модуль, из которого импортируются токены темы: `@salutejs/sdds-themes/tokens/sdds_serv`, для внешней темы — например `@sddsjs/sdds_finai/theme/tokens`. Пакет должен быть зависимостью `packages/<lib>`. |
| `extraComponentCategories` | нет | Категории, страницы которых описывают компоненты (например `ai`). Они собираются как паспорта и добавляются в `components/index.json`. `package` — точка входа для импорта. `stability: 'beta'` — см. ниже. |
| `exclude` | нет | Дополнительные исключения при обходе `docs/`. Префикс `_` исключается и без него. |
| `qdrantConfig` | нет | Перенесено из старых конфигов, генератор поле не читает. |

Конфиг проверяется схемой: неизвестный ключ или tool — ошибка.

### Beta-компоненты

Категория с `stability: 'beta'` (сейчас включена только в sdds-finai) собирается так, чтобы агент не спутал beta-компонент со стабильным:

- `name` получает префикс `beta/` (`beta/Popover`). Сервер ищет компонент по точному имени, поэтому `get_component('Popover')` по-прежнему отдаёт стабильный компонент, а beta-версию — `get_component('beta/Popover')`. Файл остаётся `beta/Popover.json`.
- `summary` в паспорте и в `components/index.json` начинается с `[BETA]` — это видно и в `list_components`, который отдаёт только `name`, `href`, `summary`, `category`.
- В паспорт добавляются поля `stability: "beta"` и `warning` — текст с путём импорта и рекомендацией предпочитать beta-версию одноимённому стабильному компоненту. Путь собирается из имени npm-пакета вертикали: `sdds-finai/beta` → `@salutejs/sdds-finai/beta`.
- В паспорт одноимённого стабильного компонента из `components` добавляется поле `recommendation` — ссылка на beta-версию (`beta/Popover`, путь импорта) с советом предпочесть её. Так агент узнаёт о beta-версии, даже если сразу вызвал `get_component('Popover')`.

Сервер `@salutejs/sdds-mcp` отдаёт паспорт целиком, поэтому новые поля доходят до агента без изменений в сервере.

## Новый сайт документации

1. Создать `website/<lib>-docs/mcp.config.mjs`.
2. Добавить в `package.json` сайта:

    ```json
    "generate-index": "node ../../utils/mcp-data/src/cli.ts index --lib <lib>",
    "generate-mcp-data": "node ../../utils/mcp-data/src/cli.ts mcp-data --lib <lib>"
    ```

3. Добавить в `.gitignore` сайта строки `/mcpData` и `index.json`.
4. Чтобы данные публиковались, добавить `<lib>` в матрицы `upload-mcp-data` и `test-mcp-data` в `.github/workflows/mcp-data-upload.yml`.

## Проверки

```bash
npm run typecheck --workspace=@salutejs/sdds-mcp-data
npm run test --workspace=@salutejs/sdds-mcp-data
npm run lint --workspace=@salutejs/sdds-mcp-data
```

Тесты (`node --test`) гоняют оба шага на мини-сайте из `tests/fixtures/site`.
