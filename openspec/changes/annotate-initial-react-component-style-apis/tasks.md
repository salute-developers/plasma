## 1. Style API DSL

- [x] 1.1 Добавить типы декларации, metadata-компонента, параметра, составных частей, состояний и mapping к общему конфигу.
- [x] 1.2 Реализовать `defineStyleTokenApi`, типовые mapping helpers с методом `state`, runtime registry и валидацию деклараций.

## 2. Metadata generator

- [x] 2.1 Добавить поиск и загрузку `*.style-api.ts` деклараций.
- [x] 2.2 Собирать каждый ключ из `tokens` как `{ paramName }` и добавлять `type`, `id`, `part` и `state` только из `mapping`.
- [x] 2.3 Обеспечить детерминированную сортировку и запись `style-api-meta.json`.

## 3. Button declaration

- [x] 3.1 Добавить `Button.style-api.ts` с существующим объектом `tokens` и примерами mapping для состояний фона и составной типографики.
- [x] 3.2 Подключить генерацию и публикацию `style-api-meta.json` в `plasma-new-hope`.

## 4. Verification

- [x] 4.1 Проверить DSL-тесты, типизацию и lint декларации Button.
- [x] 4.2 Перегенерировать metadata дважды, проверить идентичность результата и строгую OpenSpec-валидацию.

## 5. Documentation

- [x] 5.1 Добавить README с назначением DSL, текущим контрактом, примером и возможными улучшениями.
