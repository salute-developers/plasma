# Caldera Online Themes

Пакет предоставляет набор _дизайн-токенов_, а также _тем_, реализующих дизайн вертикали «Caldera Online».

## Конфигурация пакета

| Тема             | Библиотека                 | Шрифты                                                                                                                                                                                               |
| ---------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `caldera`        | `@salutejs/caldera`        | [SB Sans Display](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css), [SB Sans Text](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css) |
| `caldera_online` | `@salutejs/caldera-online` | [SB Sans Display](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css), [SB Sans Text](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css) |

## Установка и подключение

Установка зависимости:

```sh
npm i --save @salutejs/caldera-online-themes
```

Типографическая система основана на фирменных шрифтах. Для того чтобы шрифт было удобно поставлять в web-приложения, шрифт был загружен на [CDN](https://ru.wikipedia.org/wiki/Content_Delivery_Network).

Для использования типографической системы необходимо загрузить два `css` файла в зависимости от [используемых шрифтов](##Конфигурация-пакета) в теме.
Их необходимо добавить внутрь тега `head`. Если в качестве основы web-приложения вы используете [create-react-app](https://create-react-app.dev), вам необходимо изменить файл `./public/index.html`.

```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css" />
        <link
            rel="stylesheet"
            href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css"
        />
    </head>
    <body>
        ...
    </body>
</html>
```

Подключение с помощью `styled-component`:

```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Button, BodyL } from '@salutejs/caldera-online';
import { caldera_online__light } from '@salutejs/caldera-online-themes';

const Theme = createGlobalStyle(caldera_online__light);

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

Подключение с помощью импорта `css` файла:

```jsx
import React from 'react';

import { Button, BodyL } from '@salutejs/caldera-online';

import '@salutejs/caldera-online-themes/css/caldera_online__dark.css';

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

Подключение с помощью импорта модульного `css` файла:

> Потребуется дополнительно настроить TypeScript

```jsx
import React from 'react';

import { Button, BodyL } from '@salutejs/caldera-online';

import styles from '@salutejs/caldera-online-themes/css/caldera_online.module.css';

const App = () => {
    return (
        <div className={styles.dark}>
            <BodyL>Hello world</BodyL>
            <Button text="This is themed button" />
        </div>
    );
};

export default App;
```

## Использование токенов

Все `css` токены завернуты в `js` переменные для более удобного доступа:

```js
/** Основной цвет текста */
export const textPrimary = 'var(--text-primary, #F5F5F5)';
/** Основной фон */
export const backgroundPrimary = 'var(--background-primary, #000000)';
```

Так же в пакете есть типографические токены, для случаев, когда необходимо точечно применить типографику к контейнеру.

```js
/** Токены типографики для компонента DsplL */
export const dsplL = ({
    fontFamily: 'var(--plasma-typo-dspl-l-font-family)',
    fontSize: 'var(--plasma-typo-dspl-l-font-size)',
    fontStyle: 'var(--plasma-typo-dspl-l-font-style)',
    fontWeight: 'var(--plasma-typo-dspl-l-font-weight)',
    letterSpacing: 'var(--plasma-typo-dspl-l-letter-spacing)',
    lineHeight: 'var(--plasma-typo-dspl-l-line-height)',
} as unknown) as CSSObject;
```

Пример использования:

```jsx
import React from 'react';
import styled from 'styled-components';

import { textAccent, backgroundPrimary, textL } from '@salutejs/caldera-online-themes/tokens';

const AppStyled = styled.div`
    padding: 30px;
    color: ${textAccent};
    background-color: ${backgroundPrimary};
`;

const Container = styled.div`
    ${textL};
    margin: 15px;
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
