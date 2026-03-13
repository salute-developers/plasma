# SDDS-SBCOM

Набор компонентов и утилит для создания web-приложений на базе [ReactJS](https://reactjs.org/).

## Использование

Библиотека реализована с помощью:

-   [typescript](https://www.typescriptlang.org/)

Однако их использование **необязательно**!

### Установка зависимостей

```bash
$ npm install --save @salutejs/sdds-sbcom @salutejs/sdds-themes
```

### Использование компонентов

Все компоненты доступны напрямую из пакета

```jsx
import { Button } from '@salutejs/sdds-sbcom';

export const App = () => {
    return (
        <>
            <Button>Hello, sbcom!</Button>
            <StyledP>Token usage example</StyledP>
        </>
    );
};
```

## Подключение шрифтов

Типографическая система основана на фирменных шрифтах.

Для того чтобы шрифт было удобно поставлять в web-приложения, шрифт был загружен на **CDN**

Для использования типографической системы необходимо загрузить два `css` файла в зависимости от используемых шрифтов в теме.

### Create react app

Добавить внутрь тега `head`.

```html
<html lang="ru">
    <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400..700;1,400..700&display=swap"
            rel="stylesheet"
        />
        <title>...</title>
    </head>
    <body>
        ...
    </body>
</html>
```

### NextJs

```tsx
import Head from 'next/head';

import { H2, Button } from '@salutejs/sdds-sbcom';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next App with sdds-sbcom components</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400..700;1,400..700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <main>
                    <div>
                        <H2> Salute </H2>
                        <Button text="Hello" />
                    </div>
                </main>
            </div>
        </>
    );
}
```

## Подключение темы

Точкой входа является корень приложения:

-   Если вы используете [Create React App](https://create-react-app.dev), делайте вызов внутри `src/index.tsx`.
-   Если вы используете [Next.js](https://nextjs.org/), создайте файл `pages/_app.tsx` и подключите стили в нем.

В файле, где происходит подключение всех стилей, например `index.css`

```css index.css
@import '@salutejs/sdss-themes/css/sdds_sbcom__light.css';
```

```jsx
import React from 'react';
import { Button, BodyL } from '@salutejs/sdds-sbcom';

import 'index.css';

const App = () => {
    return (
        <>
            <BodyL>Hello world</BodyL>
            <Button text="This is themed button" />
        </>
    );
};

export default App;
```

## Переключение темы

```jsx
import React, { useLayoutEffect, useState } from 'react';
import { Switch } from '@salutejs/sdds-sbcom';

import './index.css';

const App = () => {
    const [theme, setTheme] = useState('light');

    useLayoutEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <div className="wrapper">
            <Switch
                label={`app theme: ${theme}`}
                onChange={() => {
                    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
                }}
            />
        </div>
    );
};

export default App;
```

В файле, где происходит подключение всех стилей, например `index.css`

```css
@import '@salutejs/sdss-themes/css/sdds_sbcom__light.css';
```

### Возможные дополнительные настройки в проекте для работы с css:

Возможные дополнительные настройки bundle tools для проекта:

<ul>
    <li>
        <a href="https://webpack.js.org/loaders/css-loader/">webpack + css</a>
    </li>
    <li>
        <a href="https://vite.dev/guide/features.html#css-pre-processors">vite</a>
    </li>
</ul>

## Советы при работе с NextJS

Next не разрешает импорт CSS из сторонних модулей, поэтому важно не забыть добавить наши библиотеки в `next.config.js` следующим образом:

```js
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@salutejs/sdds-sbcom', '@salutejs/plasma-new-hope', '@salutejs/plasma-icons'],
};
```

**RSC - React Server Components (App router)**

Библиотека поддерживает работу с **RSC** только при **явном использовании** директивы **'use client'**.

```ts
'use client'

import { Button } from '@salutejs/sdds-sbcom';

...
```

## Токены

Все `css` токены завернуты в `js` переменные для более удобного доступа:

```js
/** Основной цвет текста */
export const textPrimary = 'var(--text-primary, #F5F5F5)';
/** Основной фон */
export const backgroundPrimary = 'var(--background-primary, #000000)';
```

### Способы подключения

Есть два пути импорта токенов:

-   Из вертикали `@salutejs/sdds-themes/tokens` (подходит в большинстве случаев, т.к там лежит весь базовый набор токенов)
-   Непосредственно из темы `@salutejs/sdds-themes/tokens/sdds-sbcom` (следует использовать, когда необходимо импортировать уникальные токены, которые используются только в этой теме)

## Типографика

Рекомендуем использовать типографические компоненты, которые поставляет библиотека.

```ts
import { BodyL, DsplL, H3 } from '@salutejs/sdds-sbcom';
```

### Токены типографики на примере компонента `DsplL`

Так же в пакете есть типографические токены, для случаев, когда необходимо точечно применить типографику к контейнеру.

```tsx
import { CSSObject } from 'styled-components';

export const dsplL = ({
    fontFamily: 'var(--plasma-typo-dspl-l-font-family)',
    fontSize: 'var(--plasma-typo-dspl-l-font-size)',
    fontStyle: 'var(--plasma-typo-dspl-l-font-style)',
    fontWeight: 'var(--plasma-typo-dspl-l-font-weight)',
    letterSpacing: 'var(--plasma-typo-dspl-l-letter-spacing)',
    lineHeight: 'var(--plasma-typo-dspl-l-line-height)',
} as unknown) as CSSObject;
```
