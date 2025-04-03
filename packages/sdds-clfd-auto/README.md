# Библиотека компонентов SDDS CLFD AUTO

Реализация компонентов для создания веб-приложений.

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) , [styled-components](https://styled-components.com/)

Использование данного пакета предполагает установку зависимостей: `react` & `react-dom`;

Использование `styled-components` на проект необязательно, так же как и использование `typescript`.

**Но** для того чтобы компоненты работали корректно необходимо установить `styled-components`.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-clfd-auto @salutejs/plasma-typo @salutejs/plasma-themes
```

Так же надо установить пакет styled-components

```bash
$ npm install --save styled-components@5.3.1
```

## Настройка при работе с пакетом `styled-components`

Создайте компонент для подключения глобальных стилей:

```jsx title="GlobalStyle.tsx"
import { createGlobalStyle } from 'styled-components';
import { standard } from '@salutejs/plasma-typo';
import { plasma_b2c__light } from '@salutejs/plasma-themes';

const ThemeStyle = createGlobalStyle(plasma_b2c__light);
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

Для корректной работы server side rendering приложение нужно обернуть `SSRProvider` (доступен в sdds-clfd-auto);

### Использование компонентов

Все компоненты styled-components доступны из директории `components` или напрямую из пакета:

```jsx
// App.tsx
import { Button } from '@salutejs/sdds-clfd-auto';
import { textAccent } from '@salutejs/plasma-tokens/brands/sdds-clfd-auto';

export const App = () => {
    return (
        <>
            <Button>Hello, Plasma!</Button>

            <p style={{ color: textAccent }}>Token usage example</p>
        </>
    );
};
```
