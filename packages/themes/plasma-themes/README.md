# Plasma Themes

Пакет предоставляет набор _дизайн-токенов_, а также _тем_, реализующих дизайн вертикали «Plasma».

## Конфигурация пакета

| Тема           | Библиотека             | Шрифты                                                                                                                                                                                               |
| -------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `plasma_b2c`   | `@salutejs/plasma-b2c` | [SB Sans Display](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css), [SB Sans Text](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css) |
| `plasma_web`   | `@salutejs/plasma-web` | [SB Sans Display](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css), [SB Sans Text](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css) |
| `stylesSalute` | -                      | [SB Sans Display](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css), [SB Sans Text](https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css) |

## Установка и подключение

Установка зависимости:

```sh
npm i --save @salutejs/plasma-themes
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

import { Button, BodyL } from '@salutejs/plasma-b2c';
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

Подключение с помощью импорта `css` файла:

```jsx
import React from 'react';

import { Button, BodyL } from '@salutejs/plasma-b2c';

import '@salutejs/plasma-themes/css/plasma_b2c__dark.css';

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

import { Button, BodyL } from '@salutejs/plasma-b2c';

import styles from '@salutejs/plasma-themes/css/plasma_b2c.module.css';

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

import { textAccent, backgroundPrimary, textL } from '@salutejs/plasma-themes/tokens';

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

## Смена тем

Пример на `styled-components`:

```jsx
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { Switch } from '@salutejs/plasma-b2c';
import { plasma_b2c__light, plasma_b2c__dark } from '@salutejs/plasma-themes';

import './style.css';

const LightTheme = createGlobalStyle(plasma_b2c__light);
const DarkTheme = createGlobalStyle(plasma_b2c__dark);

const App = () => {
    const [theme, setTheme] = useState('light');

    return (
        <>
            {theme === 'light' ? <LightTheme /> : <DarkTheme />}

            <div className="wrapper">
                <Switch
                    label="dark theme: "
                    onChange={() => {
                        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
                    }}
                />
            </div>
        </>
    );
};

export default App;
```

Пример на `emotion`:

```jsx
import React, { useState } from 'react';

import { Global, css } from '@emotion/react';
import { Switch } from '@salutejs/plasma-b2c';
import { plasma_b2c__light, plasma_b2c__dark } from '@salutejs/plasma-themes';

import './style.css';

const lightThemeStyle = css(plasma_b2c__light);
const darkThemeStyle = css(plasma_b2c__dark);

const App = () => {
    const [theme, setTheme] = useState('light');

    return (
        <>
            <Global styles={theme === 'light' ? lightThemeStyle : darkThemeStyle} />

            <div className="wrapper">
                <Switch
                    label="dark theme: "
                    onChange={() => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))}
                />
            </div>
        </>
    );
};

export default App;
```

Пример на `css-modules`:

```jsx
import React, { useLayoutEffect, useState } from 'react';

import { Switch } from '@salutejs/plasma-b2c';
import webThemes from '@salutejs/plasma-themes/css/plasma_b2c.module.css';

import './style.css';

const App = () => {
    const [theme, setTheme] = useState('light');

    useLayoutEffect(() => {
        document.documentElement.className = webThemes[theme];
    }, [theme]);

    return (
        <div className="wrapper">
            <Switch
                label="dark theme: "
                onChange={() => {
                    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
                }}
            />
        </div>
    );
};

export default App;
```

Пример на `css`:

```jsx
import React, { useLayoutEffect, useState } from 'react';

import { Switch } from '@salutejs/plasma-b2c';

// добавьте импорт в css файл
// @import '@salutejs/plasma-themes/css/plasma_b2c.module.css';
import './style.css';

const App = () => {
    const [theme, setTheme] = useState('light');

    useLayoutEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <div className="wrapper">
            <Switch
                label="dark theme: "
                onChange={() => {
                    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
                }}
            />
        </div>
    );
};

export default App;
```
