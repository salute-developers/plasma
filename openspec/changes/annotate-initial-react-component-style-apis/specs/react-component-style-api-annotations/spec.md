## ADDED Requirements

### Requirement: Style API declarations use defineStyleTokenApi

Компонент SHALL объявлять источник Style API metadata через `defineStyleTokenApi`. Декларация SHALL содержать `commonInfo.componentName`, `commonInfo.source.packageName`, непустой список `tokens` и блок `mapping`.

#### Scenario: Button declaration is loaded

- **WHEN** генератор загружает `Button.style-api.ts`
- **THEN** декларация регистрирует компонент `Button`
- **AND** передаёт существующий объект `Button.tokens.ts`
- **AND** описывает `backgroundColor` для базового, hovered и pressed состояний
- **AND** описывает составной `labelStyle` с частями типографики

### Requirement: Token keys become Style API parameters

Генератор SHALL создавать один metadata-параметр для каждого собственного ключа каждого объекта из `tokens`.

Параметр SHALL содержать `paramName`, равный ключу токена. `type` и `id` SHALL отсутствовать, пока для токена не добавлен mapping к общему конфигу.

#### Scenario: Button tokens are collected

- **WHEN** генератор обрабатывает декларацию Button
- **THEN** каждый публичный ключ `Button.tokens.ts` представлен отдельным параметром
- **AND** каждый неразмеченный параметр содержит только `paramName`

### Requirement: Common config mappings are declared separately

DSL SHALL позволять описать mapping без изменения `*.tokens.ts`. Mapping SHALL быть объектом, ключи которого являются непустыми `id` свойств общего конфига. Значение SHALL содержать `type` из поддерживаемого контракта и ключ одного токена либо непустой объект `part → token` для составного свойства.

Поддерживаемыми типами SHALL быть `value`, `boolean`, `integer`, `float`, `dimension`, `color`, `typography`, `shape`, `shadow`, `icon` и `component_style`.

#### Scenario: A token is mapped to a common config property

- **WHEN** декларация содержит `mapping: { surface: color('background') }`
- **THEN** metadata-параметр `background` содержит `type: "color"` и `id: "surface"`
- **AND** исходный token-объект остаётся без DSL-аннотаций

#### Scenario: A compound property maps named parts to tokens

- **WHEN** декларация содержит `labelStyle: typography({ fontFamily: 'fontFamilyToken', fontSize: 'fontSizeToken' })`
- **THEN** параметры `fontFamilyToken` и `fontSizeToken` содержат `type: "typography"` и одинаковый `id: "labelStyle"`
- **AND** параметры содержат соответственно `part: "fontFamily"` и `part: "fontSize"`
- **AND** `component_style` SHALL поддерживать такую же форму составного mapping

#### Scenario: A property maps a state token

- **WHEN** декларация содержит `backgroundColor: color('background').state('hovered', 'backgroundHover')`
- **THEN** параметр `background` содержит `type: "color"` и `id: "backgroundColor"`
- **AND** параметр `backgroundHover` дополнительно содержит `state: "hovered"`

#### Scenario: A compound property maps state parts

- **WHEN** составной helper вызывает `state` с объектом `part → token`
- **THEN** каждый state-параметр содержит `id`, `type`, `part` и `state`
- **AND** состояние MAY переопределять только части, объявленные базовым mapping

#### Scenario: A mapping refers to an unknown token

- **WHEN** значение mapping содержит ключ, отсутствующий во всех переданных token-объектах
- **THEN** декларация завершается диагностикой с именем компонента и неизвестным ключом

### Requirement: Declaration validation is deterministic

DSL SHALL отклонять пустые обязательные source-поля, повторную декларацию имени компонента, повторяющиеся token keys внутри одной декларации, пустые mapping ids, пустые составные mappings, неизвестные token keys, повторное использование одного токена, повторные состояния и неизвестные части состояния.

#### Scenario: Duplicate token key is supplied

- **WHEN** два объекта в `tokens` содержат один ключ
- **THEN** декларация завершается диагностикой с именем компонента и ключа

### Requirement: Metadata generation is deterministic

Генератор SHALL сортировать компоненты по `componentName`, параметры по `paramName` и записывать JSON с завершающим переводом строки.

#### Scenario: Metadata is generated twice

- **WHEN** генерация выполняется дважды по неизменённым исходникам
- **THEN** оба результата побайтово идентичны

### Requirement: Button runtime remains unchanged

Добавление декларации Style API SHALL NOT менять token values, DOM, стили или runtime-поведение Button.

#### Scenario: Button declaration is excluded from runtime builds

- **WHEN** `plasma-new-hope` собирает runtime bundles
- **THEN** `Button.style-api.ts` не включается в runtime output
