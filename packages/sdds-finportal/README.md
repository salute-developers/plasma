# Библиотека компонентов SDDS FinPortal

Реализация компонентов для создания веб-приложений.

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) , [styled-components](https://styled-components.com/).

Использование данного пакета предполагает установку зависимостей: `react` & `react-dom`;

Использование `styled-components` на проекте необязательно, так же как и использование `typescript`.

**Но** для того чтобы компоненты работали корректно необходимо установить `styled-components`.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-finportal @salutejs/plasma-typo @salutejs/sdds-themes
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
import { sdds_finportal__light } from '@salutejs/sdds-themes';

const ThemeStyle = createGlobalStyle(sdds_finportal__light);
const TypoStyle = createGlobalStyle(standard);

export const GlobalStyle = () => (
    <>
        <ThemeStyle />
        <TypoStyle />
    </>
);
```
