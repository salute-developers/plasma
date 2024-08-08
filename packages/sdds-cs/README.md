# Библиотека компонентов SDDS CS

Реализация компонентов для создания веб-приложений.

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) , [styled-components](https://styled-components.com/) и [emotion](https://emotion.sh/);

Использование данного пакета предполагает установку зависимостей: `react` & `react-dom`;

Использование `styled-components` и `emotion` на проект необязательно, так же как и использование `typescript`.

**Но** для того чтобы компоненты работали корректно необходимо установить `styled-components` или `emotion`.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-cs @salutejs/plasma-typo @salutejs/sdds-themes
```

Так же надо установить пакет styled-components

```bash
$ npm install --save styled-components@5.3.1
```

Или, если вы используете пакет @emotion

```bash
$ npm install --save @emotion/styled @emotion/react @emotion/css
```

## Настройка при работе с пакетом `styled-components`

Создайте компонент для подключения глобальных стилей:

```jsx title="GlobalStyle.tsx"
import { createGlobalStyle } from 'styled-components';
import { standard } from '@salutejs/plasma-typo';
import { sdds_cs__light } from '@salutejs/sdds-themes';

const ThemeStyle = createGlobalStyle(sdds_cs__light);
const TypoStyle = createGlobalStyle(standard);

export const GlobalStyle = () => (
    <>
        <ThemeStyle />
        <TypoStyle />
    </>
);
```

## Настройка при работе с пакетом `@emotion`

Создайте компонент для подключения глобальных стилей:

```jsx title="GlobalStyle.tsx"
import { Global, css } from '@emotion/react';
import { standard } from '@salutejs/plasma-typo';
import { sdds_cs__light } from '@salutejs/sdds-themes';

const themeStyle = css(sdds_cs__light);
const typoStyle = css(standard);

export const GlobalStyle = () => (
    <>
        <Global styles={themeStyle} />
        <Global styles={typoStyle} />
    </>
);
```

### Корень приложения

В корне приложения вызовите компонент глобальных стилей `GlobalStyle`:

-   Если вы используете [Create React App](https://create-react-app.dev), делайте вызов внутри `src/index.tsx`.
-   Если вы используете [Next.js](https://nextjs.org/), создайте файл `pages/_app.tsx` и подключите стили в нем.

Для корректной работы server side rendering приложение нужно обернуть `SSRProvider` (доступен в sdds-cs);

### Использование компонентов

Все компоненты styled-components доступны из директории `components` или напрямую из пакета:

```jsx
// App.tsx
import { Button } from '@salutejs/sdds-cs';
import { textAccent } from '@salutejs/plasma-tokens/brands/sdds-cs';

export const App = () => {
    return (
        <>
            <Button>Hello, Plasma!</Button>

            <p style={{ color: textAccent }}>Token usage example</p>
        </>
    );
};
```

#### `@emotion`

Все компоненты `@emotion` доступны из директории `emotion`:

```jsx
// App.tsx
import { Button } from '@salutejs/sdds-cs/emotion';
import { textAccent } from '@salutejs/plasma-tokens/brands/sdds-cs';

export const App = () => {
    return (
        <>
            <Button>Hello, Plasma!</Button>

            <p style={{ color: textAccent }}>Token usage example</p>
        </>
    );
};
```
