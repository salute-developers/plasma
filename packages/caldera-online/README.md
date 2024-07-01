# Библиотека компонентов Caldera-online

Реализация компонентов для создания веб-приложений.

<p align="center">
  <img width="800" src="https://github.com/salute-developers/plasma/assets/1813468/8a672284-f470-4b9e-9234-877ae8daf7a4" alt="caldera-online" />
</p>

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) и [emotion](https://emotion.sh/);

Использование данного пакета предполагает установку зависимостей: `react` & `react-dom`;

**Но** для того чтобы компоненты работали корректно необходимо установить `@emotion/react` & `@emotion/styled` 11 версии.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save @emotion/styled@11 @emotion/react@11
$ npm install --save @salutejs/caldera-online @salutejs/caldera-online-themes
```

## Настройка

Создайте компонент для подключения глобальных стилей:

```jsx title="GlobalStyle.tsx"
import { Global, css } from '@emotion/react';
import { caldera_online__light } from '@salutejs/caldera-online-themes';

const themeStyle = css(caldera_online__light);

export const GlobalStyle = () => (
    <>
        <Global styles={themeStyle} />
    </>
);
```

### Корень приложения

В корне приложения вызовите компонент глобальных стилей `GlobalStyle`:

-   Если вы используете [Create React App](https://create-react-app.dev), делайте вызов внутри `src/index.tsx`.
-   Если вы используете [Next.js](https://nextjs.org/), создайте файл `pages/_app.tsx` и подключите стили в нем.

Для корректной работы server side rendering приложение нужно обернуть `SSRProvider` (доступен в caldera-online);

### Использование компонентов

Все компоненты доступны из папки `components` или напрямую из пакета:

```jsx
// App.tsx
import { Button } from '@salutejs/caldera-online';
import { textAccent } from '@salutejs/caldera-online-themes/tokens';

export const App = () => {
    return (
        <Button>Hello, Caldera Online!</Button>

        <p style={{color: textAccent}}>
            Token usage example
        </p>
    );
};
```
