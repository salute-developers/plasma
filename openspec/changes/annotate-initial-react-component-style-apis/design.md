## Context

CSS-токены React-компонентов уже собраны в экспортируемые объекты `tokens`, но отдельного контракта для их обнаружения и публикации как Style API metadata нет. Семантическая связь с общим конфигом будет добавляться постепенно, поэтому первая версия должна работать без `id`.

## Goals / Non-Goals

**Goals:**

- Определить минимальный контракт `defineStyleTokenApi`.
- Автоматически получать параметры из ключей переданных token-объектов.
- Генерировать детерминированный `style-api-meta.json`.
- Проверить контракт на одном компоненте `Button`.
- Позволить постепенно описывать связи с общим конфигом внутри `mapping`.

**Non-Goals:**

- Определять `id` свойств общего конфига.
- Размечать `Button.tokens.ts` или менять значения CSS-токенов.
- Добавлять Style API декларации другим компонентам.
- Менять runtime, DOM или стили Button.
- Генерировать component configs из полученной metadata.

## Decisions

### 1. Декларация регистрируется через defineStyleTokenApi

Файл `Button.style-api.ts` передаёт в `defineStyleTokenApi` имя компонента, имя пакета, существующий объект `tokens` и mapping примеров. Дополнительная сущность `ComponentStyle` не вводится.

### 2. Параметры выводятся из token keys

Каждый собственный ключ объекта `tokens` становится отдельным параметром:

```json
{
  "paramName": "buttonBackground"
}
```

`paramName` совпадает с ключом токена. Пока связь с общим конфигом не описана, `type` и `id` отсутствуют.

### 3. Common info содержит только исходную идентичность

`commonInfo` содержит `componentName` и `source.packageName`. Данные общего конфига не включаются до появления mapping.

### 4. Mapping содержит всю связь с общим конфигом

Ключ `mapping` является `id` свойства общего конфига, а значение создаётся типовым DSL helper'ом. Helper принимает ключ одного токена либо объект `part → token` для составного свойства. Метод `state` связывает состояние с отдельным токеном или с частями составного свойства:

```ts
mapping: {
    backgroundColor: color('buttonBackgroundColor'),
    labelStyle: typography({
        fontFamily: 'buttonFontFamily',
        fontSize: 'buttonFontSize',
        fontWeight: 'buttonFontWeight',
        lineHeight: 'buttonLineHeight',
    }),
    contentStyle: componentStyle({
        backgroundColor: 'buttonContentBackground',
        radius: 'buttonContentRadius',
    }),
    iconColor: color('buttonIconColor')
        .state('hovered', 'buttonIconColorHover')
        .state('pressed', 'buttonIconColorActive'),
}
```

Первая запись создаёт `{ paramName: 'buttonBackgroundColor', type: 'color', id: 'backgroundColor' }`. Составная запись разворачивается в несколько параметров с одинаковыми `type` и `id` и индивидуальным `part`. Токен состояния получает поле `state`. `component_style` использует тот же механизм составного mapping, что и `typography`; ссылки на другие компоненты в контракт не входят.

Неразмеченные токены остаются в metadata только с `paramName`. Декларация Button показывает mapping `backgroundColor` для базового, hovered и pressed состояний и составной mapping `labelStyle` для токенов типографики.

Файлы `*.tokens.ts` остаются обычными словарями CSS-токенов без DSL-аннотаций.

### 5. Генерация детерминирована

Генератор сортирует компоненты по имени, а параметры — по `paramName`. Повторный запуск по тем же исходникам создаёт идентичный JSON.
