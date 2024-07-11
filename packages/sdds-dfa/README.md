# Библиотека компонентов SDDS DFA

Реализация компонентов для создания веб-приложений.

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) и [styled-components](https://styled-components.com/);

Использование данного пакета предполагает установку зависимостей: `react` & `react-dom`;

Использование `styled-components` на проект необязательно, так же как и использование `typescript`.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save styled-components@5.3.1
$ npm install --save @salutejs/sdds-dfa @salutejs/sdds-themes
```

## Настройка

Создайте компонент для подключения глобальных стилей:

```jsx title="GlobalStyle.tsx"
import { createGlobalStyle } from 'styled-components';
import { sdds_dfa__light } from '@salutejs/sdds-themes';

const ThemeStyle = createGlobalStyle(sdds_dfa__light);

export const GlobalStyle = () => (
    <>
        <ThemeStyle />
    </>
);
```

### Корень приложения

В корне приложения вызовите компонент глобальных стилей `GlobalStyle`:

-   Если вы используете [Create React App](https://create-react-app.dev), делайте вызов внутри `src/index.tsx`.
-   Если вы используете [Next.js](https://nextjs.org/), создайте файл `pages/_app.tsx` и подключите стили в нем.

Для корректной работы `SSR - server side rendering` - приложение нужно обернуть в `SSRProvider` (доступен в `sdds-dfa`);

### Использование компонентов

Все компоненты доступны из папки `components` или напрямую из пакета:

```jsx
// App.tsx
import { Button } from '@salutejs/sdds-dfa';
import { textAccent } from '@salutejs/sdds-themes/tokens/sdds-dfa';

export const App = () => {
    return (
        <Button>Hello, SDDS DFA!</Button>

        <p style={{color: textAccent}}>
            Token usage example
        </p>
    );
};
```
