# components-style-dsl

`@sdds/components-style-dsl` описывает Style API React-компонентов и генерирует машиночитаемый `style-api-meta.json` на основе уже существующих CSS-токенов.

Пакет нужен, чтобы связать внутренние токены компонента со свойствами общего конфига, не добавляя служебную разметку в `*.tokens.ts` и не меняя runtime компонента. Полученную metadata смогут использовать генераторы конфигов и другие инструменты дизайн-системы.

## Как это работает

1. Компонент экспортирует обычный объект `tokens` из `*.tokens.ts`.
2. Рядом создаётся `*.style-api.ts` с вызовом `defineStyleTokenApi`.
3. Генератор рекурсивно находит такие файлы, загружает декларации и собирает их во временном registry.
4. Ключ каждого переданного token-объекта попадает в metadata как `paramName`.
5. Блок `mapping` дополняет известные параметры типом и связью со свойством общего конфига.

Ключ верхнего уровня в `mapping` — `id` свойства общего конфига. Значение создаётся helper-функцией соответствующего типа:

```ts
import { color, defineStyleTokenApi, typography } from '@sdds/components-style-dsl';

import { tokens } from './Button.tokens';

export const buttonStyleTokenApi = defineStyleTokenApi({
    commonInfo: {
        componentName: 'Button',
        source: {
            packageName: '@salutejs/plasma-new-hope/styled-components',
        },
    },
    tokens: [tokens],
    mapping: {
        backgroundColor: color('buttonBackgroundColor')
            .state('hovered', 'buttonBackgroundColorHover')
            .state('pressed', 'buttonBackgroundColorActive'),
        labelStyle: typography({
            fontFamily: 'buttonFontFamily',
            fontSize: 'buttonFontSize',
            fontStyle: 'buttonFontStyle',
            fontWeight: 'buttonFontWeight',
            letterSpacing: 'buttonLetterSpacing',
            lineHeight: 'buttonLineHeight',
        }),
    },
});
```

Простой mapping создаёт параметр с `paramName`, `type` и `id`. Вызов `state` дополнительно записывает состояние:

```json
{
  "paramName": "buttonBackgroundColorHover",
  "type": "color",
  "id": "backgroundColor",
  "state": "hovered"
}
```

Составной mapping задаётся объектом `part → token`. Он разворачивается в отдельные параметры с общими `type` и `id`:

```json
{
  "paramName": "buttonFontFamily",
  "type": "typography",
  "id": "labelStyle",
  "part": "fontFamily"
}
```

`componentStyle` использует ту же модель составных частей, что и `typography`. Ссылки на другие компоненты текущий контракт не описывает.

Неразмеченные токены также остаются в metadata, но содержат только `paramName`. Это позволяет добавлять точные связи с общим конфигом постепенно.

## Поддерживаемые типы

- `value`
- `boolean`
- `integer`
- `float`
- `dimension`
- `color`
- `typography`
- `shape`
- `shadow`
- `icon`
- `component_style`

DSL проверяет обязательные данные компонента, повторные декларации, дубликаты token keys, неизвестные токены, повторное использование токена в mappings, пустые составные mappings, повторные состояния и неизвестные части состояния.

## Генерация

Для `plasma-new-hope` metadata генерируется командой:

```bash
npm run generate:style-api-meta --workspace @salutejs/plasma-new-hope
```

Генератор сортирует компоненты и параметры, поэтому повторный запуск по тем же исходникам создаёт идентичный файл.

## Возможные улучшения

- Принимать прямые ссылки `tokens.buttonBackgroundColor` вместо строковых ключей. Генератор должен будет находить исходный ключ по значению и сообщать о неизвестных или неоднозначных значениях.
- Типизировать допустимые части составных типов. Например, `typography` сможет ограничивать ключи набором `fontFamily`, `fontSize`, `fontWeight`, `lineHeight` и других известных частей.
- Формализовать набор состояний и при необходимости поддержать комбинации состояний.
- Уточнить семантику `component_style`, если появится необходимость ссылаться на Style API другого компонента.
- Добавить версию формата и JSON Schema для `style-api-meta.json`.
- Рассмотреть статический анализ деклараций вместо их исполнения во время генерации.
