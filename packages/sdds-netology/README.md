# SDDS-NETOLOGY

Набор компонентов и утилит для создания web-приложений на базе [ReactJS](https://reactjs.org/).

## Использование

Библиотека реализована с помощью:

-   [typescript](https://www.typescriptlang.org/)
-   [styled-components](https://styled-components.com/) (рекомендуем использовать версию `5.3.1`)

Однако их использование **необязательно**!

### Установка зависимостей

```bash
$ npm install --save @salutejs/sdds-netology @salutejs/plasma-themes
```

Для работы со `styled-components`, необходимо установить

```bash
$ npm install --save styled-components@5.3.1
```

### Использование компонентов

Все компоненты доступны напрямую из пакета

```jsx
import styled from 'styled-components';
import { Button } from '@salutejs/sdds-netology';
import { textAccent } from '@salutejs/plasma-themes/tokens';

export const App = () => {
    const StyledP = styled.p`
        color: ${textAccent};
    `;

    return (
        <>
            <Button>Hello, Plasma!</Button>
            <StyledP>Token usage example</StyledP>
        </>
    );
};
```

Так же библиотека поставляет компоненты собранные с помощью `styled-components`

```js
import { Button } from '@salutejs/sdds-netology/styled-components';
```

## Подключение шрифтов

Типографическая система основана на фирменных шрифтах.

Для того чтобы шрифт было удобно поставлять в web-приложения, шрифт был загружен на **CDN**

Для использования типографической системы необходимо загрузить два `css` файла в зависимости от используемых шрифтов в теме.

### Create react app

Добавить внутрь тега `head`.

```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css" />
        <link
            rel="stylesheet"
            href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css"
        />
        <title>Wep App</title>
    </head>
    <body>
        ...
    </body>
</html>
```

### NextJs

```tsx
import Head from 'next/head';

import { H2, Button } from '@salutejs/sdds-netology';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App with sdds-netology components</title>
                <link
                    rel="stylesheet"
                    href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css"
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

### CSS

Возможные дополнительные настройки bundle tools для проекта:

<ul>
    <li>
        <a href="https://webpack.js.org/loaders/css-loader/">webpack + css</a>
    </li>
    <li>
        <a href="https://vite.dev/guide/features.html#css-pre-processors">vite</a>
    </li>
</ul>

В файле, где происходит подключение всех стилей, например `index.css`

```css
@import '@salutejs/plasma-themes/css/plasma_b2c__dark.css';
```

```jsx
import React from 'react';
import { Button, BodyL } from '@salutejs/sdds-netology';

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

### Styled-components

```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Button, BodyL } from '@salutejs/sdds-netology/styled-components';
import { plasma_b2c__light } from '@salutejs/plasma-themes';

const Theme = createGlobalStyle(plasma_b2c__light);

const App = () => {
    return (
        <>
            <Theme />
            <BodyL>Hello world</BodyL>
            <Button text="This is themed button" />
        </>
    );
};

export default App;
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

-   Из вертикали `@salutejs/plasma-themes/tokens` (подходит в большинстве случаев, т.к там лежит весь базовый набор токенов)
-   Непосредственно из темы `@salutejs/plasma-themes/tokens/plasma_b2c` (следует использовать, когда необходимо импортировать уникальные токены, которые используются только в этой теме)

### Использование

```jsx
import React from 'react';
import styled from 'styled-components';
import { textAccent, backgroundPrimary, textL } from '@salutejs/plasma-themes/tokens';

const AppStyled = styled.div`
    padding: 2rem;
    color: ${textAccent};
    background-color: ${backgroundPrimary};
`;

const Container = styled.div`
    ${textL};
    margin: 1rem;
`;

const App = () => {
    return (
        <AppStyled>
            <Container>
                <span>Hello world</span>
            </Container>
        </AppStyled>
    );
};

export default App;
```

## Типографика

Рекомендуем использовать типографические компоненты, которые поставляет библиотека.

```ts
import { BodyL, DsplL, H3 } from '@salutejs/sdds-netology';
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
