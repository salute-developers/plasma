# Библиотека компонентов Plasma ASDK

Реализация компонентов для создания веб-приложений.

<p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/1813468/98609687-ea20fc80-22fe-11eb-8d84-cd26385f01ed.png" alt="plasma-asdk" />
</p>

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) и [styled-components](https://styled-components.com/);

Использование данного пакета предполагает установку зависимостей: `react` & `react-dom`;

Использование `styled-components` на проект необязательно, так же как и использование `typescript`.

**Но** для того чтобы компоненты работали корректно необходимо установить `styled-components`.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save styled-components
$ npm install --save @salutejs/plasma-asdk @salutejs/plasma-tokens @salutejs/plasma-typo
```

## Настройка

Создайте компонент для подключения глобальных стилей:

```jsx title="GlobalStyle.tsx"
import { createGlobalStyle } from 'styled-components';
import { standard } from '@salutejs/plasma-typo';
import { stylesSalute__light as stylesSaluteLight } from '@salutejs/plasma-asdk';

const ThemeStyle = createGlobalStyle(stylesSaluteLight);
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

Для корректной работы server side rendering приложение нужно обернуть `SSRProvider` (доступен в plasma-asdk);

### Использование компонентов

Все компоненты доступны из папки `components` или напрямую из пакета:

```jsx
// App.tsx
import { Button } from '@salutejs/plasma-asdk';

export const App = () => {
    return <Button>Hello, Plasma!</Button>;
};
```
