# Руководство по созданию core компонентов

Это руководство описывает процесс создания новых компонентов в экосистеме SDDS.

Архитектура построена на разделении **ядра** (логика и структура) и **вертикалей** (токены и стилизация для конкретного бренда).

## Содержание

1. [Обзор архитектуры](#обзор-архитектуры)
2. [Создание компонента](#создание-компонента)
3. [Работа с токенами](#работа-с-токенами)
4. [Variations (вариации)](#variations-вариации)
5. [Intersections (пересечения вариаций)](#intersections-пересечения-вариаций)
6. [Сложные компоненты](#сложные-компоненты)
7. [Композиция компонентов](#композиция-компонентов)
8. [Accessibility](#accessibility)
9. [Тестирование](#тестирование)
10. [Checklist перед PR](#checklist-перед-pr)
11. [Полезные команды](#полезные-команды)
12. [Частые вопросы и проблемы](#частые-вопросы-и-проблемы)
13. [Ссылки](#ссылки)

---

## Обзор архитектуры

```
┌─────────────────────────────────────────────────────────────┐
│                    Вертикали (15 брендов)                   │
│  sdds-serv, plasma-web, plasma-b2c, ...                     │
│  ─────────────────────────────────────────────────────────  │
│  • Токены (цвета, размеры, отступы)                         │
│  • Вариации view/size с конкретными значениями              │
│  • Дефолтные значения пропсов                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ mergeConfig()
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 Ядро (plasma-new-hope)                      │
│  ─────────────────────────────────────────────────────────  │
│  • Layout (JSX-структура компонента)                        │
│  • Базовые CSS-стили                                        │
│  • Логика поведения                                         │
│  • TypeScript типы                                          │
│  • CSS-переменные (токены) без значений                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ component()
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Engines (движки)                        │
│  ─────────────────────────────────────────────────────────  │
│  • Linaria (по умолчанию)                                   │
│  • Emotion                                                  │
│  • styled-components                                        │
└─────────────────────────────────────────────────────────────┘
```

### Ключевые концепции

-   **Ядро (`plasma-new-hope`)** — содержит логику, структуру и CSS-переменные компонентов
-   **Вертикаль** — библиотека/пакет для конкретного бренда/продукта (sdds-serv, plasma-giga и т.д.)
-   **Токены** — CSS-переменные, которые определяют внешний вид
-   **Variations** — набор стилей для разных значений пропсов (view, size, disabled)
-   **mergeConfig** — функция слияния конфигурации ядра с конфигурацией вертикали
-   **component** — фабрика, создающая React-компонент из конфигурации

---

## Создание компонента

### Порядок действий

1. Создать файлы компонента в ядре (`plasma-new-hope`)
2. Создать конфигурацию и сборку в вертикали (например, `sdds-serv`)
3. Проверить через Storybook и build пакета

### Структура файлов

**В ядре** (`packages/plasma-new-hope/src/components/MyComponent/`):

```
MyComponent/
├── index.ts                    # Публичный API компонента
├── MyComponent.tsx             # Layout-функция и конфигурация
├── MyComponent.types.ts        # TypeScript типы
├── MyComponent.tokens.ts       # CSS-переменные (токены)
├── MyComponent.styles.ts       # Базовые стили и styled-компоненты
└── variations/                 # Стили для каждой вариации
    ├── _view/
    │   └── base.ts             # CSS для view (обязательно)
    ├── _size/
    │   └── base.ts
    └── _disabled/              # Дополнительные вариации по необходимости
        └── base.ts
```

> **Примечание:** В вариациях могут присутствовать файлы `tokens.json` — они опциональны и используются для документирования, не влияют на работу компонента.

**В вертикали** (`packages/sdds-serv/src/components/MyComponent/`):

```
MyComponent/
├── index.ts                    # Экспорт компонента
├── MyComponent.ts              # Сборка компонента
└── MyComponent.config.ts       # Конфигурация токенов для бренда
```

---

### 1. Определите токены

Файл `MyComponent.tokens.ts` — описание ключей CSS-переменных. Каждый ключ — имя CSS-переменной, которая получит конкретное значение в конфигурации вертикали.

```typescript
// CSS-классы для состояний и модификаторов
export const classes = {
    active: 'plasma-component-name-active',
    disabled: 'plasma-component-name-disabled',
};

// Публичные токены (переопределяются в вертикалях)
export const tokens = {
    // Цвета
    color: '--plasma-component-name-color',
    backgroundColor: '--plasma-component-name-background-color',
    colorHover: '--plasma-component-name-color-hover',
    contentBeforeColor: '--plasma-component-name-content-before-color',

    // Размеры и отступы
    height: '--plasma-component-name-height',
    padding: '--plasma-component-name-padding',
    borderRadius: '--plasma-component-name-border-radius',
    gap: '--plasma-component-name-gap',

    // Типографика для title
    titleFontFamily: '--plasma-component-name-title-font-family',
    titleFontSize: '--plasma-component-name-title-font-size',
    titleFontStyle: '--plasma-component-name-title-font-style',
    titleFontWeight: '--plasma-component-name-title-font-weight',
    titleLetterSpacing: '--plasma-component-name-title-letter-spacing',
    titleLineHeight: '--plasma-component-name-title-line-height',

    // Состояния
    disabledOpacity: '--plasma-component-name-disabled-opacity',
    focusColor: '--plasma-component-name-focus-color',

    // Вложенные элементы
    closeIconSize: '--plasma-component-name-close-icon-size',
    closeIconColor: '--plasma-component-name-close-icon-color',
    closeIconColorOnHover: '--plasma-component-name-close-icon-color-on-hover',
};
```

Связь между объявлением и использованием:

```typescript
// tokens.ts — объявление ключа
padding: '--plasma-component-name-padding',
    // MyComponent.config.ts (вертикаль) — присвоение значения
    `${tokens.padding}: 0.75rem;`;
```

---

### 2. Определите типы

Файл `MyComponent.types.ts`:

```typescript
import type { ReactNode, HTMLAttributes } from 'react';

export type MyComponentProps = {
    /**
     * Заголовок компонента
     */
    title?: ReactNode;
    /**
     * Текст компонента
     */
    text?: ReactNode;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Наличие кнопки закрытия
     */
    hasClose?: boolean;
    /**
     * Callback при нажатии на кнопку закрытия
     */
    onCloseButtonClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;
```

---

### 3. Создайте базовые стили

Файл `MyComponent.styles.ts`:

```typescript
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from './MyComponent.tokens';

// Базовые стили для корневого элемента
export const base = css`
    position: relative;
    display: flex;
    box-sizing: border-box;
`;

// Styled-компоненты для внутренних элементов
export const ContentBefore = styled.div`
    display: flex;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    box-sizing: border-box;
`;
```

---

### 4. Создайте вариации

#### Файл `variations/_view/base.ts`:

```typescript
import { css } from '@linaria/core';

import { tokens } from '../../MyComponent.tokens';
import { ContentBefore } from '../../MyComponent.styles';

export const base = css`
    background: var(${tokens.backgroundColor});
    color: var(${tokens.color});

    /* Стилизация вложенных styled-компонентов через CSS */
    ${ContentBefore} {
        color: var(${tokens.contentBeforeColor});
        fill: var(${tokens.contentBeforeColor});
    }
`;
```

#### Файл `variations/_size/base.ts`:

```ts
import { css } from '@linaria/core';

import { classes, tokens } from '../../MyComponent.tokens';
import { ContentBefore, Title } from '../../MyComponent.styles';

export const base = css`
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    gap: var(${tokens.gap});

    /* Модификатор stretch через CSS-класс */
    &.${classes.stretch} {
        width: 100%;
        height: 100%;
    }

    /* Стилизация вложенных элементов */
    ${ContentBefore} {
        width: var(${tokens.closeIconSize});
        height: var(${tokens.closeIconSize});
    }

    /* Типографика */
    ${Title} {
        font-family: var(${tokens.titleFontFamily});
        font-size: var(${tokens.titleFontSize});
        font-style: var(${tokens.titleFontStyle});
        font-weight: var(${tokens.titleFontWeight});
        letter-spacing: var(${tokens.titleLetterSpacing});
        line-height: var(${tokens.titleLineHeight});
    }
`;
```

---

### 5. Создайте layout и конфигурацию

Файл `MyComponent.tsx` — содержит layout-функцию (JSX-структуру) и конфигурацию компонента.

-   **`RootProps<RefElement, Props>`** — тип из `../../engines`, описывающий корневой React-компонент, который engine создаёт на основе конфигурации. Первый параметр — тип HTML-элемента (должен соответствовать `tag` в конфигурации), второй — тип пропсов компонента.
-   **`cx(...classes)`** — утилита из `../../utils`, аналог `classnames`/`clsx`. Объединяет строки и условные классы: `cx('a', false && 'b', 'c')` → `'a c'`.

```tsx
import React, { forwardRef } from 'react';

import { cx } from '../../utils';
import type { RootProps } from '../../engines';

import type { MyComponentProps } from './MyComponent.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base, ContentBefore, ContentWrapper, Title } from './MyComponent.styles';
import { classes } from './MyComponent.tokens';

export const myComponentRoot = (Root: RootProps<HTMLDivElement, MyComponentProps>) =>
    forwardRef<HTMLDivElement, MyComponentProps>(
        (
            { className, title, text, contentBefore, size, view, stretch, hasClose, onCloseButtonClick, ...rest },
            ref,
        ) => {
            return (
                <Root ref={ref} className={cx(className, stretch && classes.stretch)} view={view} size={size} {...rest}>
                    {contentBefore && <ContentBefore>{contentBefore}</ContentBefore>}
                    <ContentWrapper>{title && <Title>{title}</Title>}</ContentWrapper>
                </Root>
            );
        },
    );

export const myComponentConfig = {
    name: 'MyComponent',
    tag: 'div',
    layout: myComponentRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
```

> **Примечание:** Значения в `defaults` определяются для каждого компонента индивидуально. Например, Button использует `view: 'secondary'`, а Note — `view: 'default'`. Выбирайте значения, соответствующие наиболее частому сценарию использования.

---

### 6. Экспортируйте компонент из ядра

Файл `index.ts`:

```ts
export { myComponentRoot, myComponentConfig } from './MyComponent';
export { tokens as myComponentTokens } from './MyComponent.tokens';

// Экспорт classes опционален — добавляйте, если классы нужны снаружи компонента
// export { classes as myComponentClasses } from './MyComponent.tokens';

// Типы экспортируются отдельно
export type { MyComponentProps } from './MyComponent.types';
```

> **Примечание:** Токены (`tokens`) экспортируются всегда — они используются в конфигурациях вертикалей. Экспорт `classes` опционален — только если CSS-классы нужны внешним потребителям.

---

### 7. Создайте конфигурацию в вертикали

Файл `MyComponent.config.ts` — заполняет токены конкретными значениями бренда:

```ts
import { css, myComponentTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: var(--surface-transparent-secondary);
                ${tokens.color}: var(--text-primary);
                ${tokens.contentBeforeColor}: var(--text-accent);
            `,
            positive: css`
                ${tokens.backgroundColor}: var(--surface-transparent-positive);
                ${tokens.color}: var(--text-primary);
                ${tokens.contentBeforeColor}: var(--text-positive);
            `,
        },
        size: {
            s: css`
                ${tokens.padding}: 0.625rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.gap}: 0.375rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.closeIconSize}: 1rem;
            `,
        },
    },
};
```

---

### 8. Соберите компонент в вертикали

Файл `MyComponent.ts`:

```typescript
import { myComponentConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './MyComponent.config';

const mergedConfig = mergeConfig(myComponentConfig, config);

export const MyComponent = component(mergedConfig);
```

---

### 9. Экспортируйте из вертикали

> **Важно:** Вертикаль не создаёт собственные токены — она реэкспортирует их из `@salutejs/plasma-new-hope/styled-components`. Это гарантирует единый источник правды для имён CSS-переменных. Реэкспорт `classes` — только если они экспортированы из ядра.

Файл `index.ts`:

```typescript
export { MyComponent } from './MyComponent';

// Токены реэкспортируются из ядра, а не определяются заново
export { myComponentTokens } from '@salutejs/plasma-new-hope/styled-components';

// Классы реэкспортируются только если они были экспортированы из ядра (шаг 6)
// export { myComponentClasses } from '@salutejs/plasma-new-hope/styled-components';
```

---

### 10. Проверьте

```bash
# Bootstrap зависимостей
npm run bootstrap

# Сборка пакета
cd packages/sdds-serv && npm run build

# Запуск Storybook
npm run storybook
```

> Примеры реальных компонентов: [Note](../../packages/plasma-new-hope/src/components/Note/), [Button](../../packages/plasma-new-hope/src/components/Button/), [Attach](../../packages/plasma-new-hope/src/components/Attach/).

---

## Работа с токенами

### Именование токенов

```
--plasma-{component}-{element}-{property}[-{state}]

Примеры:
--plasma-button-color
--plasma-button-background-color-hover
--plasma-note-title-font-size
--plasma-attach-cell-label-color
```

### Категории токенов

```typescript
export const tokens = {
    // Цвета основного элемента
    color: '--plasma-component-color',
    backgroundColor: '--plasma-component-background-color',

    // Цвета состояний
    colorHover: '--plasma-component-color-hover',
    colorActive: '--plasma-component-color-active',

    // Размеры
    height: '--plasma-component-height',
    width: '--plasma-component-width',
    padding: '--plasma-component-padding',
    gap: '--plasma-component-gap',
    borderRadius: '--plasma-component-border-radius',

    // Типографика (для каждого текстового элемента)
    titleFontFamily: '--plasma-component-title-font-family',
    titleFontSize: '--plasma-component-title-font-size',
    // ... остальные font-*

    textFontFamily: '--plasma-component-text-font-family',
    // ...

    // Вложенные элементы
    iconSize: '--plasma-component-icon-size',
    iconColor: '--plasma-component-icon-color',

    // Состояния
    disabledOpacity: '--plasma-component-disabled-opacity',
    focusColor: '--plasma-component-focus-color',
};
```

### Приватные токены

Для внутренних вычислений используйте приватные токены:

```typescript
export const privateTokens = {
    computedWidth: '--plasma_private-component-width',
    computedOffset: '--plasma_private-component-offset',
};
```

Приватные токены:

-   Начинаются с `--plasma_private-`
-   Не переопределяются в вертикалях
-   Используются для динамических значений, вычисляемых в runtime

### Использование тем

```ts
// Токен компонента → переменная темы
`
${tokens.backgroundColor}: var(--surface-accent);
${tokens.color}: var(--text-primary);
${tokens.titleFontFamily}: var(--plasma-typo-body-m-font-family);
`;
```

---

## Variations (вариации)

### Стандартные вариации

| Вариация   | Назначение                                                    |
| ---------- | ------------------------------------------------------------- |
| `view`     | Визуальный вид (default, accent, positive, warning, negative) |
| `size`     | Размер (xs, s, m, l, xl)                                      |
| `disabled` | Неактивное состояние                                          |
| `focused`  | Состояние фокуса                                              |

### Дополнительные вариации

Для сложных компонентов можно добавлять специфичные вариации:

```ts
export const config = {
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
            // Добавляет HTML-атрибут disabled к элементу
        },
        focused: {
            css: focusedCSS,
        },
        helperTextView: {
            css: helperTextViewCSS,
        },
        // Дополнительная вариация
    },
    defaults: {
        view: 'default',
        size: 'm',
        helperTextView: 'default',
    },
};
```

#### Параметр `attrs`

Параметр `attrs: true` в вариации указывает, что значение пропса должно быть также добавлено как HTML-атрибут к корневому DOM-элементу.

По умолчанию engine использует значение пропса только для выбора CSS-класса вариации. С `attrs: true` значение дополнительно пробрасывается как HTML-атрибут. Это критично для нативного поведения браузера.

**Когда использовать:**

-   `disabled` — нативный атрибут, отключающий интерактивность элемента (фокус, клик, форма)
-   Другие булевые атрибуты, которые должны отражаться в DOM для accessibility или нативного поведения

**Пример:** Без `attrs: true` пропс `disabled` применит только CSS-стили (opacity, pointer-events), но элемент останется фокусируемым и доступным для форм. С `attrs: true` к DOM-элементу добавляется `disabled="true"`, что обеспечивает корректное нативное поведение.

```ts
// Без attrs: рендерится <button class="button-disabled">
// С attrs: true: рендерится <button class="button-disabled" disabled>
export const config = {
    ...,
    disabled: {
        css: disabledCSS,
            attrs
    :
        true,
    }
}
```

### Стилизация вложенных элементов в вариациях

```ts
// variations/_size/base.ts
import { ContentBefore, Title } from '../../MyComponent.styles';

export const base = css`
    padding: var(${tokens.padding});

    /* Стилизация styled-компонентов */
    ${ContentBefore} {
        color: var(${tokens.contentBeforeColor});
    }

    ${Title} {
        font-size: var(${tokens.titleFontSize});
    }
`;
```

---

## Intersections (пересечения вариаций)

Intersections позволяют задать стили, которые применяются при **комбинации нескольких значений вариаций одновременно**. Это advanced-механизм — он нужен не каждому компоненту, но незаменим, когда отдельные вариации (view, size, itemView и др.) недостаточно описывают все визуальные состояния.

### Когда нужны intersections

Если компонент имеет две и более вариации, и при определённой комбинации их значений нужны дополнительные стили, которые невозможно выразить через каждую вариацию по отдельности.

**Пример:** Компонент `Steps` имеет вариации `view` и `itemView`. При `view: 'accent'` + `itemView: 'default'` нужно изменить цвет индикатора — это нельзя сделать только через `view` или только через `itemView`.

### Синтаксис

Intersections добавляются в конфигурацию компонента (как в ядре, так и в вертикали) как массив объектов. Каждый объект содержит значения вариаций и `style` с CSS:

```ts
export const config = {
    ...,
    variations: {
        view: {
            default: css`...`,
            accent: css`...`,
        },
        itemView: {
            default: css`...`,
            negative: css`...`,
        },
    },
    intersections: [
        {
            view: 'accent',
            itemView: 'default',
            style: css`
                ${tokens.activeIndicatorBorder}: solid var(--text-accent);
                ${tokens.activeIndicatorColor}: var(--text-accent);
            `,
        },
        {
            view: 'accent',
            itemView: 'negative',
            style: css`
                ${tokens.activeIndicatorBorder}: solid var(--text-negative);
            `,
        },
    ],
};
```

### Как это работает

1. Engine применяет стили каждой вариации по отдельности (view, itemView, size и т.д.)
2. Затем проверяет массив `intersections` — если текущая комбинация пропсов совпадает со всеми ключами объекта, применяется его `style`
3. Стили из intersections имеют приоритет над стилями отдельных вариаций

### Реальный пример

Компонент `Steps` в вертикали (`packages/sdds-serv/src/components/Steps/Steps.config.ts`) использует intersections для комбинации `view` и `itemView`:

```typescript
export const config = {
    ...,
    intersections: [
        {
            view: 'accent',
            itemView: 'default',
            style: css`
            ${tokens.activeIndicatorBorder}: solid var(--text-accent);
            ${tokens.activeIndicatorColor}: var(--text-accent);
            ${accentConfig};
        `,
        },
        {
            view: 'accent',
            itemView: 'negative',
            style: css`
            ${accentConfig};
        `,
        },
        // ... аналогично для warning, positive
    ],
}
```

> **Совет:** Если вы обнаружили, что добавляете условную логику в layout для стилизации комбинаций пропсов — это сигнал, что нужны intersections.

---

## Сложные компоненты

### Структура папок

Для компонентов с под-компонентами используйте:

-   `components/` — составные части, которые экспортируются наружу
-   `ui/` — внутренние UI-элементы, не экспортируемые
-   `utils/` — вспомогательные функции

```
MyComponent/
├── components/          # Экспортируемые подкомпоненты
│   ├── index.ts
│   └── MyComponentItem/
├── ui/                  # Внутренние элементы
│   ├── index.ts
│   └── InternalButton/
└── utils/               # Утилиты
    ├── index.ts
    └── helpers.ts
```

### Токены для под-компонентов

Все токены под-компонентов определяются в основном `tokens.ts`:

```ts
export const tokens = {
    // Основной компонент
    color: '--plasma-attach-color',

    // Токены для Button
    buttonColor: '--plasma-attach-button-color',
    buttonHeight: '--plasma-attach-button-height',
    // ...

    // Токены для Cell
    cellColor: '--plasma-attach-cell-color',
    cellPadding: '--plasma-attach-cell-padding',
    // ...

    // Токены для IconButton
    iconButtonColor: '--plasma-attach-icon-button-color',
    // ...
};
```

---

## Композиция компонентов

Компонент может использовать другие компоненты из ядра. Например, Note использует Button для кнопки закрытия, а Attach — Button, Cell и IconButton.

### Создание вложенного компонента

Вложенный компонент создаётся через `mergeConfig` + `component` прямо в файле стилей:

```typescript
// MyComponent.styles.ts
import { component, mergeConfig } from '../../engines';
import { buttonConfig } from '../Button';

// Создание Button без токенов вертикали — токены придут через родительский компонент
const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

// Стилизация через styled
export const CloseButton = styled(Button)`
    position: absolute;
    right: var(${tokens.gap});
`;
```

### Маппинг токенов вложенного компонента

Токены вложенного компонента, определяются в `tokens.ts` родителя с префиксом. В конфигурации вертикали эти токены заполняются значениями, которые пробрасываются во вложенный компонент:

```ts
// MyComponent.tokens.ts — токены родителя включают токены вложенного Button
export const tokens = {
    color: '--plasma-component-name-color',
    // ...
    // Токены для вложенного Button
    closeIconButtonSize: '--plasma-component-name-close-icon-button-size',
    closeIconColor: '--plasma-component-name-close-icon-color',
    closeIconColorOnHover: '--plasma-component-name-close-icon-color-on-hover',
};
```

```ts
// MyComponent.config.ts (вертикаль) — заполняем токены вложенного компонента
export const config = {
    ...,
    size: {
        m: css`
        ${tokens.closeIconButtonSize}: 1.5rem;
        ${tokens.closeIconColor}: var(--text-secondary);
        ${tokens.closeIconColorOnHover}: var(--text-primary);
    `,
    }
}
```

### Передача пропсов во вложенные компоненты

В layout-функции деструктурируйте пропсы для вложенного компонента и передайте их явно:

```tsx
export const myComponentRoot = (Root: RootProps<HTMLDivElement, MyComponentProps>) =>
    forwardRef<HTMLDivElement, MyComponentProps>((props, ref) => {
        const { hasClose, onCloseButtonClick, ...rest } = props;

        return (
            <Root ref={ref} {...rest}>
                {/* Контент */}
                {hasClose && (
                    <CloseButton view="clear" size="s" onClick={onCloseButtonClick}>
                        <IconClose />
                    </CloseButton>
                )}
            </Root>
        );
    });
```

---

## Тестирование

> Подход к тестированию компонентов находится в процессе обновления. Руководство по тестированию будет описано в отдельном документе.

---

## Accessibility

При создании компонентов придерживайтесь рекомендаций [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/).

### Базовые требования

-   **Семантический HTML:** Используйте подходящий `tag` в конфигурации компонента (`button` для кнопок, `nav` для навигации, `input` для полей ввода). Не используйте `div` для интерактивных элементов без веских причин.
-   **Клавиатурная навигация:** Интерактивные компоненты должны быть доступны с клавиатуры (Tab, Enter, Space, Escape). Если компонент использует нативный HTML-тег (button, input), клавиатурная навигация работает из коробки.
-   **ARIA-атрибуты:** Добавляйте `role`, `aria-label`, `aria-expanded`, `aria-disabled` и другие атрибуты, где нативной семантики недостаточно. Передавайте их через `...rest` в layout-функции.
-   **Вариация `disabled`:** Используйте `attrs: true` для пробрасывания нативного HTML-атрибута (см. [Параметр attrs](#параметр-attrs)).
-   **Фокус:** Обеспечьте видимый индикатор фокуса. В системе Plasma для этого есть вариация `focused`.

### Пример

```tsx
// В layout-функции — пробрасываем aria-атрибуты через ...rest
export const myComponentRoot = (Root: RootProps<HTMLButtonElement, MyComponentProps>) =>
    forwardRef<HTMLButtonElement, MyComponentProps>(({ children, ...rest }, ref) => (
        <Root ref={ref} {...rest}>
            {children}
        </Root>
    ));

// В конфигурации — семантический тег
export const myComponentConfig = {
    name: 'MyComponent',
    tag: 'button', // не 'div'
    // ...
};
```

> **Совет:** Проверяйте компонент через tab-навигацию и screen reader перед отправкой PR.

---

## Checklist перед PR

### Ядро (plasma-new-hope)

-   [ ] Созданы все файлы компонента
-   [ ] Токены именованы по конвенции `--plasma-{component}-{element}-{property}`
-   [ ] Приватные токены начинаются с `--plasma_private-`
-   [ ] Типы описаны с JSDoc-комментариями
-   [ ] Базовые стили используют токены
-   [ ] Вложенные элементы стилизуются через styled-компоненты
-   [ ] Все вариации имеют `base.ts` (файлы `tokens.json` опциональны)
-   [ ] CSS-классы определены в `classes`
-   [ ] Экспорты добавлены в `index.ts` (токены обязательно, классы — опционально)
-   [ ] Intersections добавлены при необходимости (если есть зависимости между вариациями)
-   [ ] Учтены базовые требования accessibility (семантический HTML, aria-атрибуты)

### Вертикаль

-   [ ] Создан `*.config.ts` со всеми токенами
-   [ ] Компонент собран через `mergeConfig` + `component`
-   [ ] Токены (и при необходимости classes) реэкспортированы из `@salutejs/plasma-new-hope/styled-components`
-   [ ] Экспорты добавлены в `index.ts` пакета
-   [ ] Проверена работа во всех темах (light/dark)

### Общее

-   [ ] Код проходит lint (`npm run lint` из директории пакета)
-   [ ] Сборка проходит (`npm run build` из директории пакета)
-   [ ] PR содержит описание изменений

---

## Полезные команды

Проект использует Lerna для управления монорепозиторием. Команды выполняются из корня проекта или из директории конкретного пакета.

### Из корня проекта

```bash
# Bootstrap зависимостей
npm run bootstrap

# Линтинг изменённых пакетов (относительно ветки dev)
npm run lint

# Cypress компонентные тесты для вертикали (пример для sdds-insol)
npm run cy:insol:run
npm run cy:insol:run --components=Button
npm run cy:insol:open  # Открыть Cypress UI

# Обновление скриншотов Cypress
npm run cy:insol:update --components=Button
```

### Из директории пакета

```bash
# Перейти в пакет
cd packages/plasma-new-hope
# или
cd packages/sdds-serv

# Сборка пакета
npm run build

# Запуск Storybook
npm run storybook

# Генерация типов
npm run generate:typings
```

---

## Частые вопросы и проблемы

### Пропс передаётся, но стили не применяются

**Причина:** Скорее всего, для вариации не задано значение в конфигурации вертикали.

Engine выбирает CSS-класс по значению пропса. Если в `config.variations.view` нет ключа `'positive'`, а пропс `view="positive"` передан — стили не применятся.

**Решение:** Убедитесь, что конфигурация вертикали содержит все нужные значения вариации.

### Пропс `null`, `undefined` или `''` заменяется на default

Это ожидаемое поведение. Функция `mergeWithoutNullable()` в engine заменяет `null`, `undefined` и пустую строку `''` на значения из `defaults`.

Если нужно явно "сбросить" вариацию — это невозможно через пустое значение. Создайте отдельное значение вариации (например, `view: 'none'`).

### Токены не переопределяются в вертикали

**Причина:** Конфигурация вертикали не содержит CSS для нужных токенов.

**Решение:** Проверьте `MyComponent.config.ts` — убедитесь, что для нужного view/size определены все токены, используемые в базовых стилях и вариациях ядра.

### Вложенный компонент не стилизуется через токены родителя

**Причина:** Вложенный компонент создан через `mergeConfig(buttonConfig)` без передачи токенов.

**Решение:** Определите токены вложенного компонента в `tokens.ts` родителя (см. [Маппинг токенов вложенного компонента](#маппинг-токенов-вложенного-компонента)) и используйте `styled(Button)` для привязки стилей через CSS-переменные родителя.

### `mergeConfig` не перетирает дефолты

`mergeConfig` объединяет defaults с приоритетом пользовательского конфига. Если вертикаль задаёт `defaults: { view: 'positive' }`, а ядро — `defaults: { view: 'default', size: 'm' }`, результат будет `{ view: 'positive', size: 'm' }`.

### Сборка падает с ошибкой типов

**Возможные причины:**

-   Токен из `tokens.ts` не экспортирован через `index.ts`
-   Тип пропсов не экспортирован или экспортирован неправильно (не через `export type`)
-   В вертикали импортируется из `@salutejs/plasma-new-hope` вместо `@salutejs/plasma-new-hope/styled-components`

### Где найти доступные CSS-переменные темы?

Переменные темы (`--surface-accent`, `--text-primary`, `--plasma-typo-body-m-font-family` и т.д.) определяются в пакете `@salutejs/sdds-themes`. Для просмотра доступных переменных используйте DevTools на работающем Storybook или изучите файлы тем в `@salutejs/sdds-themes/tokens`.

---

## Ссылки

-   Примеры компонентов:
    -   [Button (простой)](../../packages/plasma-new-hope/src/components/Button/) — базовый пример
    -   [Note (средний)](../../packages/plasma-new-hope/src/components/Note/) — с ContentBefore и hasClose
    -   [Attach (сложный)](../../packages/plasma-new-hope/src/components/Attach/) — с подкомпонентами и ui/
-   [Button в вертикали](../../packages/sdds-serv/src/components/Button/)
