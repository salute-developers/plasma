# Библиотека компонентов SDDS SERV EMOTION

Реализация компонентов для создания веб-приложений.

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) и [emotion](https://emotion.sh/);

Использование данного пакета предполагает установку зависимостей: `react` & `react-dom`;

Для того чтобы компоненты работали корректно необходимо установить `@emotion/react` & `@emotion/styled` 11 версии.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save @emotion/styled@11 @emotion/react@11
$ npm install --save @salutejs/sdds-serv-emotion @salutejs/sdds-themes
```

## Настройка

Создайте компонент для подключения глобальных стилей:

```jsx title="GlobalStyle.tsx"
import { Global, css } from '@emotion/react';
import { sdds_serv__light } from '@salutejs/sdds-themes';

const themeStyle = css(sdds_serv__light);

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

Для корректной работы server side rendering приложение нужно обернуть `SSRProvider` (доступен в sdds-serv-emotion);

### Использование компонентов

Все компоненты доступны из папки `components` или напрямую из пакета:

```jsx
// App.tsx
import { Button } from '@salutejs/sdds-serv-emotion';
import { textAccent } from '@salutejs/sdds-themes/tokens/sdds-serv-emotion';

export const App = () => {
    return (
        <Button>Hello, SDDS SERV!</Button>

        <p style={{color: textAccent}}>
            Token usage example
        </p>
    );
};
```
