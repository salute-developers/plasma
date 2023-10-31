# Plasma

<p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/1813468/98610527-d37ba500-2300-11eb-87c3-80cc1c08ecb4.png" alt="plasma" />
</p>

Использование дизайн-системы Plasma позволяет реализовать [Canvas App](https://bit.ly/3Mx0UQq) как часть экосистемы виртуальных ассистентов семейства "Салют" и клиентские приложения B2B- и B2C-ориентированности. Все текущие приложения в экосистеме Salute реализованы с помощью Plasma.

## Состав:

-   @salutejs/plasma-ui
-   @salutejs/plasma-web
-   @salutejs/plasma-b2c
-   @salutejs/plasma-tokens
-   @salutejs/plasma-icons

### plasma-ui

Пакет с набором готовых компонентов и утилит для создания Canvas App. Компоненты реализованы с помощью [React](https://reactjs.org/). Для компонентов доступны [Storybook](https://bit.ly/3xRatFG) и [документация](https://bit.ly/3HWggy3).

[![npm ui](https://img.shields.io/npm/v/@salutejs/plasma-ui?label=%40salutejs%2Fplasma-ui&style=for-the-badge)](https://www.npmjs.com/package/@salutejs/plasma-ui)

### plasma-web

Пакет с набором готовых компонентов для создания веб-приложений направленных на B2B-сегмент. [Документация](https://bit.ly/3OtwX5v) и [Storybook](https://bit.ly/3EH1x7b).

[![npm ui](https://img.shields.io/npm/v/@salutejs/plasma-web?label=%40salutejs%2Fplasma-web&style=for-the-badge)](https://www.npmjs.com/package/@salutejs/plasma-web)

### plasma-b2c

Пакет с набором готовых компонентов для создания веб-приложений ориентированных на B2C-сегмент. [Документация](https://bit.ly/3OtwX5v) и [Storybook](https://bit.ly/44CjWib).

[![npm ui](https://img.shields.io/npm/v/@salutejs/plasma-b2c?label=%40salutejs%2Fplasma-b2c&style=for-the-badge)](https://www.npmjs.com/package/@salutejs/plasma-b2c)

### plasma-tokens, plasma-tokens-web, plasma-tokens-b2c

Пакеты с набором _дизайн-токенов_. В пакет входят типографические и цветовые константы. Дизайн-токены поставляются в качестве [CSS custom propperties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) и JavaScript переменных. Перед использованием рекомендуется ознакомится с документацией по [токенам](https://bit.ly/3KflkeS).

[![npm ui](https://img.shields.io/npm/v/@salutejs/plasma-tokens?label=%40salutejs%2Fplasma-tokens&style=for-the-badge)](https://www.npmjs.com/package/@salutejs/plasma-tokens)
[![npm ui](https://img.shields.io/npm/v/@salutejs/plasma-tokens-web?label=%40salutejs%2Fplasma-tokens-web&style=for-the-badge)](https://www.npmjs.com/package/@salutejs/plasma-tokens-web)
[![npm ui](https://img.shields.io/npm/v/@salutejs/plasma-tokens-b2c?label=%40salutejs%2Fplasma-tokens-b2c&style=for-the-badge)](https://www.npmjs.com/package/@salutejs/plasma-tokens-b2c)

### plasma-icons

Пакет с набором иконок, которые доступны к просмотру в [хранилище](https://bit.ly/42hgVSf), а также в [Storybook](https://bit.ly/3LhwBwC) и [документации](https://bit.ly/3xQMjuM).

[![npm ui](https://img.shields.io/npm/v/@salutejs/plasma-icons?label=%40salutejs%2Fplasma-icons&style=for-the-badge)](https://www.npmjs.com/package/@salutejs/plasma-icons)

## Быстрый старт

`Canvas App` это web-приложение, для его создания вам потребуется:

-   `Node.js` & `npm` [установка](https://nodejs.org/ru/)
-   `Create React App` – для быстрого создания основы вашего приложения. [CRA](https://create-react-app.dev/docs/getting-started#quick-start)
-   `React` Как основа для web интерфейса. Погружение для новичков: https://ru.reactjs.org/tutorial/tutorial.html

### Установка

После создания [основы приложения](https://create-react-app.dev/docs/getting-started#quick-start):

```sh
npm i -S styled-components@5.1.1 @salutejs/plasma-ui @salutejs/plasma-tokens @salutejs/plasma-icons
```

_Компоненты реализованы с помощью [styled-components](http://styled-components.com/). Поэтому необходимо поставить их в зависимость._

NB: Если вы решили не использовать `Create React App`, то вам потребуется установить `react` и `react-dom`:

```sh
npm i -S react react-dom
```

Более подробно можно ознакомиться на странице [документации](https://bit.ly/3HWggy3#%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0).

### Использование

```jsx
// ./src/App.jsx
import React from 'react';

import { Button } from '@salutejs/plasma-ui';

function App() {
    return (
        <div className="App">
            <p>
                <Button view="primary">Hello Plasma</Button>
            </p>
        </div>
    );
}

export default App;
```

Более подробно можно ознакомиться на странице [документации](https://bit.ly/3HWggy3#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5).

## Обратная связь

Разработка дизайн-системы Plasma ведется в репозитории https://github.com/salute-developers/plasma.
Если вы хотите добавить новый компонент, вы можете прислать пулл-реквест следуя [правилам разработки](./CONTRIBUTING.md). Также вы можете [завести задачу](https://github.com/salute-developers/plasma/issues/new) на создание нового компонента или описать некоректное поведение текущего.
