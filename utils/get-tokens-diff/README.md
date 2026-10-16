# get-tokens-diff

Утилита для сравнения токенов из исходных файлов тем с токенами, экспортированными из Pixso-плагина.

## Структура папок

```
get-tokens-diff/
├── scripts/
│   ├── parse-tokens.mjs   # Шаг 1: парсит токены из .ts-файлов тем
│   └── compare-tokens.mjs # Шаг 2: сравнивает с данными из плагина
├── from-themes/           # Результат parse-tokens — JSON по каждой теме
├── from-plugin/           # Данные из Pixso-плагина (входные файлы для сравнения)
└── diff/                  # Результат compare-tokens — файлы с расхождениями
```

## Порядок запуска

Скрипты запускаются из папки `utils/get-tokens-diff/`.

### Шаг 1 — `parse-tokens.mjs`

Читает пары файлов `{theme}__dark.ts` / `{theme}__light.ts` из `packages/themes/sdds-themes/src/themes`, преобразует CSS-токены в Pixso-совместимый формат и сохраняет результат в `from-themes/{theme}.json`.

```bash
node scripts/parse-tokens.mjs
```

Каждый токен преобразуется по правилам:

| Поле       | Правило                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| Вариант    | `dark` → `🌑`, `light` → `🌕`                                                                               |
| Подтема    | `on-dark-` → `onDark`, `on-light-` → `onLight`, `dark-` → `Dark`, `inverse-` → `Inverse`, иначе → `Default` |
| Группа     | первый сегмент после подтемы; `text` → `Text&Icons`, остальные — с заглавной буквы                          |
| Имя токена | полное имя в camelCase                                                                                      |
| Формат     | `{emoji} {Группа} {подтема}/{camelCaseИмя}`                                                                 |

Исключаются токены с префиксами `shadow`, `border-radius`, `spacing`, `plasma-typo`, а также заканчивающиеся на `-hover` и `-active`.

### Шаг 2 — `compare-tokens.mjs`

Берёт `initialName` из файла в `from-plugin/`, убирает средний сегмент пути (категорию внутри группы, например `/Status/`), и сравнивает с токенами из `from-themes/`. Несовпадающие записи сохраняет в `diff/`.

```bash
node scripts/compare-tokens.mjs
```

Формат результирующего файла:

```json
[
    {
        "wrong": "🌑 Outline Inverse/Status/InverseOutlinePositiveTransparent",
        "correct": "🌑 Outline Inverse/InverseOutlineTransparentPositive"
    }
]
```

-   `wrong` — оригинальное `initialName` из файла плагина
-   `correct` — соответствующий токен из `from-themes/`, `null` если совпадение не найдено

## Настройка путей для другой темы

### Изменить тему для сравнения в `compare-tokens.mjs`

В начале файла заменить имя темы в трёх константах:

```js
// compare-tokens.mjs
const EXISTED_PATH = join(__dirname, '../from-plugin/sdds_finai.json');
const GENERATED_PATH = join(__dirname, '../from-themes/sdds_finai.json');
const OUTPUT_PATH = join(__dirname, '../diff/sdds_finai.json');
```

Например, для темы `sdds_dfa`:

```js
const EXISTED_PATH = join(__dirname, '../from-plugin/sdds_dfa.json');
const GENERATED_PATH = join(__dirname, '../from-themes/sdds_dfa.json');
const OUTPUT_PATH = join(__dirname, '../diff/sdds_dfa.json');
```

Файл `from-themes/sdds_dfa.json` будет создан автоматически при запуске `parse-tokens.mjs`. Файл `from-plugin/sdds_dfa.json` нужно добавить вручную — это экспорт из Pixso-плагина.

### Изменить путь к исходным файлам тем в `parse-tokens.mjs`

По умолчанию скрипт читает темы из `packages/themes/sdds-themes/src/themes`. Если нужно указать другую директорию:

```js
// parse-tokens.mjs
const THEMES_DIR = join(__dirname, '../../../packages/themes/sdds-themes/src/themes');
```
