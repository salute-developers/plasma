# Release notes

## Core

### Notification

-   добавлен логика для переопределения color: `title`, `icon`, `content`

[PR](https://github.com/salute-developers/plasma/pull/1778)

## Сore

### TextField, TextArea, Range

-   обновлено отображение readOnly

[PR](https://github.com/salute-developers/plasma/pull/1770)

## Core

### Tabs

-   при программном выборе таба происходит скролл к выбранному табу

[PR](https://github.com/salute-developers/plasma/pull/1780)

## Core

### Autocomplete

-   переведен на **новую** архитектуру с использованием `@floating-ui`

[PR](https://github.com/salute-developers/plasma/pull/1794)

## Core

### Calendar

-   Добавлены новые токены цвета текста при `disabled`

### Datepicker

-   Добавлены новые токены цвета текста при `disabled`

[PR](https://github.com/salute-developers/plasma/pull/1785)

## Core

### Select

-   добавлена опциональная виртуализация в выпадающий список;

[PR](https://github.com/salute-developers/plasma/pull/1797)

## Core

### Tree

-   добавлен пропс `renderTitle`;

[PR](https://github.com/salute-developers/plasma/pull/1799)

## Core

### Tree

-   добавлен явный экспорт типов;

[PR](https://github.com/salute-developers/plasma/pull/1798)

## SDDS-CS

### ViewContainer

-   Добавлена view `onDark`

### Tooltip

-   Добавлена документация для компонента, описывающая возможность использования `ViewContainer`

[PR](https://github.com/salute-developers/plasma/pull/1804)

## Core

### createApplyPaperMixin

-   Добавлен билдер миксина `applyPaper`

## SDDS-CS

### applyPaper

-   Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы sdds_cs:
    -   backgroundColor - отвечает за цвет подложки в котором можно выбрать токены цветов и градиентов;
    -   borderRadius - отвечает за скругление углов блока;
    -   shadow - отвечает за применение стилей теней для блока;
    -   styles - отвечает за все доступные css свойства.

Например:

```ts
<div
    style={applyPaper({
        backgroundColor: 'surfaceAccent',
        borderRadius: 'borderRadiusM',
        shadow: 'shadowDownHardM',
        styles: {
            color: 'white',
            width: '10rem',
            height: '10rem',
        },
    })}
>
    Test card
</div>
```

## SDDS-FINPORTAL

### applyPaper

-   Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы sdds_finportal:
    -   backgroundColor - отвечает за цвет подложки в котором можно выбрать токены цветов и градиентов;
    -   borderRadius - отвечает за скругление углов блока;
    -   shadow - отвечает за применение стилей теней для блока;
    -   styles - отвечает за все доступные css свойства.

Например:

```ts
<div
    style={applyPaper({
        backgroundColor: 'surfaceAccent',
        borderRadius: 'borderRadiusM',
        shadow: 'shadowDownHardM',
        styles: {
            color: 'white',
            width: '10rem',
            height: '10rem',
        },
    })}
>
    Test card
</div>
```

## SDDS-DFA

### applyPaper

-   Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы sdds_dfa:
    -   backgroundColor - отвечает за цвет подложки в котором можно выбрать токены цветов и градиентов;
    -   borderRadius - отвечает за скругление углов блока;
    -   shadow - отвечает за применение стилей теней для блока;
    -   styles - отвечает за все доступные css свойства.

Например:

```ts
<div
    style={applyPaper({
        backgroundColor: 'surfaceAccent',
        borderRadius: 'borderRadiusM',
        shadow: 'shadowDownHardM',
        styles: {
            color: 'white',
            width: '10rem',
            height: '10rem',
        },
    })}
>
    Test card
</div>
```

## SDDS-INSOL

### applyPaper

-   Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы sdds_insol:
    -   backgroundColor - отвечает за цвет подложки в котором можно выбрать токены цветов и градиентов;
    -   borderRadius - отвечает за скругление углов блока;
    -   shadow - отвечает за применение стилей теней для блока;
    -   styles - отвечает за все доступные css свойства.

Например:

```ts
<div
    style={applyPaper({
        backgroundColor: 'surfaceAccent',
        borderRadius: 'borderRadiusM',
        shadow: 'shadowDownHardM',
        styles: {
            color: 'white',
            width: '10rem',
            height: '10rem',
        },
    })}
>
    Test card
</div>
```

## SDDS-SERV

### applyPaper

-   Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы sdds_serv:
    -   backgroundColor - отвечает за цвет подложки в котором можно выбрать токены цветов и градиентов;
    -   borderRadius - отвечает за скругление углов блока;
    -   shadow - отвечает за применение стилей теней для блока;
    -   styles - отвечает за все доступные css свойства.

Например:

```ts
<div
    style={applyPaper({
        backgroundColor: 'surfaceAccent',
        borderRadius: 'borderRadiusM',
        shadow: 'shadowDownHardM',
        styles: {
            color: 'white',
            width: '10rem',
            height: '10rem',
        },
    })}
>
    Test card
</div>
```

## PLASMA-GIGA

### applyPaper

-   Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы plasma_giga:
    -   backgroundColor - отвечает за цвет подложки в котором можно выбрать токены цветов и градиентов;
    -   borderRadius - отвечает за скругление углов блока;
    -   shadow - отвечает за применение стилей теней для блока;
    -   styles - отвечает за все доступные css свойства.

Например:

```ts
<div
    style={applyPaper({
        backgroundColor: 'surfaceAccent',
        borderRadius: 'borderRadiusM',
        shadow: 'shadowDownHardM',
        styles: {
            color: 'white',
            width: '10rem',
            height: '10rem',
        },
    })}
>
    Test card
</div>
```

[PR](https://github.com/salute-developers/plasma/pull/1784)

## SDDS-CS

### Counter

-   изменен размер шрифта с `xxs` на `s`

[PR](https://github.com/salute-developers/plasma/pull/1808)

## Core

### Dropzone

-   изменен `type` на ReactNode для свойств `title`, `description`

[PR](https://github.com/salute-developers/plasma/pull/1801)

## PLASMA-UI

-   добавлена поддержка `StarOS` устройств

[PR](https://github.com/salute-developers/plasma/pull/1800)

## Core

### Segment

-   добавлено свойство `singleSelectedRequired`, которое делает один сегмент обязательно активным

## SDDS-INSOL

### Segment

-   исправлены отступы и скругления

[PR](https://github.com/salute-developers/plasma/pull/1787)

## Core

### Segment

-   добавлен `view='accent'` для SegmentItem

[PR](https://github.com/salute-developers/plasma/pull/1793)

## Core

### Autocomplete

-   добавлена опциональная виртуализация в выпадающий список;

[PR](https://github.com/salute-developers/plasma/pull/1817)

## Core

### Dropdown

-   добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1803)

## Core

### Segment

-   добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1802)

## Core

### Checkbox

-   добавлен токен `labelColor`

## SDDS-CS

### Checkbox

-   актуализирован согласно макетам

[PR](https://github.com/salute-developers/plasma/pull/1811)
