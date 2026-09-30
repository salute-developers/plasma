## Why

Компонентным библиотекам нужен единый машиночитаемый формат Style API metadata. На первом этапе достаточно зарегистрировать существующий объект CSS-токенов компонента, получить список параметров и предусмотреть постепенное описание их связи с общим конфигом.

## What Changes

- Добавить пакет `components-style-dsl` с декларацией `defineStyleTokenApi`.
- Добавить генератор `style-api-meta.json`, который находит `*.style-api.ts` и собирает зарегистрированные декларации.
- Для каждого ключа переданного объекта `tokens` создавать параметр с `paramName`.
- Добавить `mapping`, ключом которого является `id` свойства общего конфига, а значение описывает тип, связанные токены компонента, части составного свойства и токены состояний.
- Поддержать типы `value`, `boolean`, `integer`, `float`, `dimension`, `color`, `typography`, `shape`, `shadow`, `icon` и `component_style`.
- Добавить первую декларацию Style API для компонента `Button` с примерами mapping цвета фона по состояниям и составной типографики.

## Capabilities

### New Capabilities

- `react-component-style-api-annotations`: декларация и генерация Style API metadata для React-компонентов на примере `Button`.

### Modified Capabilities

Нет.

## Impact

- `packages/components-style-dsl`: DSL, runtime registry, генератор и тесты.
- `packages/plasma-new-hope/src/components/Button/Button.style-api.ts`: декларация токенов Button.
- `packages/plasma-new-hope/resources/style-api-meta.json`: сгенерированная metadata для Button.
- `packages/plasma-new-hope/package.json`: команда генерации и публикация metadata-файла.
