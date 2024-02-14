# Библиотека компонентов SDDS SERV

Реализация компонентов для создания веб-приложений.

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) и [styled-components](https://styled-components.com/);

Использование данного пакета предполагает установку зависимостей: `react` & `react-dom`;

Использование `styled-components` на проект необязательно, так же как и использование `typescript`.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save styled-components@5.1.1
$ npm install --save @salutejs/sdds-serv @salutejs/plasma-typo @salutejs/plasma-tokens
```

## Настройка

Создайте компонент для подключения глобальных стилей:

```jsx title="GlobalStyle.tsx"
import { createGlobalStyle } from 'styled-components';
import { standard } from '@salutejs/plasma-typo';
import { sdds_serv__light } from '@salutejs/plasma-tokens';

const ThemeStyle = createGlobalStyle(sdds_serv__light);
const TypoStyle = createGlobalStyle(standard);

export const GlobalStyle = () => (
    <>
        <ThemeStyle />
        <TypoStyle />
    </>
);
```

### Корень приложения

В корне приложения вызовите компонент глобальных стилей `GlobalStyle`:

-   Если вы используете [Create React App](https://create-react-app.dev), делайте вызов внутри `src/index.tsx`.
-   Если вы используете [Next.js](https://nextjs.org/), создайте файл `pages/_app.tsx` и подключите стили в нем.

При использовании react ниже 18
Для корректной работы server side rendering приложение нужно обернуть `SSRProvider` (доступен в sdds-serv);

### Использование компонентов

Все компоненты доступны из папки `components` или напрямую из пакета:

```jsx
// App.tsx
import { Button } from '@salutejs/sdds-serv';
import { textAccent } from '@salutejs/plasma-tokens/brands/sdds-serv';

export const App = () => {
    return (
        <Button>Hello, SDDS!</Button>

        <p style={{color: textAccent}}>
            Token usage example
        </p>
    );
};
```
