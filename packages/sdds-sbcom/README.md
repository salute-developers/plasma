# Библиотека компонентов для вертикали SDDS SBCOM

[![license](https://img.shields.io/github/license/salute-developers/plasma)](https://github.com/salute-developers/plasma/blob/master/LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/@salutejs/sdds-sbcom.svg)](https://www.npmjs.com/package/@salutejs/sdds-sbcom)
[![typescript](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/dev/typescript)](https://www.typescriptlang.org/)

Реализация компонентов для создания веб-приложений.

Компоненты реализованы с помощью [React](https://react.dev/) и поставляются в виде предсобранного CSS.

## Ссылки

-   [Документация](https://plasma.sberdevices.ru/sdds-sbcom/) — гайды, список компонентов с примерами и API
-   [Задать вопрос или сообщить о проблеме](https://github.com/salute-developers/plasma/issues)

## Установка

Требуются `react` и `react-dom` версии `16.13.1` или выше:

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-sbcom @salutejs-ds/sdds_sbcom
```

## Варианты поставки

Единственный вариант поставки — предсобранный CSS.

| Точка входа            | Реализация         | Дополнительные зависимости |
| ----------------------- | ------------------ | --------------------------- |
| `@salutejs/sdds-sbcom`  | предсобранный CSS  | нет                          |

```jsx
import { Button } from '@salutejs/sdds-sbcom';
```

Beta-компоненты доступны из точки входа `@salutejs/sdds-sbcom/beta`. Подробнее — в [документации](https://plasma.sberdevices.ru/sdds-sbcom/beta/popover/).

## Подключение шрифтов

Типографическая система основана на фирменных шрифтах, они поставляются с CDN.

Добавьте два css-файла внутрь тега `<head>`.

```html
<link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet"
/>
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansTextMono.0.2.0.css" />
```

## Подключение темы

Тема подключается один раз в корне приложения.

> **Примечание:** Для [Next.js](https://nextjs.org/) — в `pages/_app.tsx`.

Тема включает в себя цветовые и типографические токены.

Доступны светлая и тёмная темы — `sdds_sbcom__light` и `sdds_sbcom__dark`.

```jsx
import '@salutejs-ds/sdds_sbcom/css/sdds_sbcom__light.css';
```

Переключение темы в рантайме и подключение через css-модули описаны в [документации](https://plasma.sberdevices.ru/sdds-sbcom/).

## Использование компонентов

```jsx
// App.tsx
import { Button, BodyL } from '@salutejs/sdds-sbcom';
import '@salutejs-ds/sdds_sbcom/css/sdds_sbcom__light.css';

export const App = () => {
    return (
        <>
            <BodyL>Hello, SDDS SBCOM!</BodyL>
            <Button>Кнопка</Button>
        </>
    );
};
```

Дизайн-токены доступны в виде js-переменных из `@salutejs-ds/sdds_sbcom/theme/tokens`:

```jsx
import { textPrimary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

<p style={{ color: textPrimary }}>Пример использования токена</p>;
```

## SSR и Next.js

-   Библиотека поддерживает React Server Components (App Router) **только** при **явном** использовании директивы `'use client'` в модулях, импортирующих компоненты.
-   Добавьте пакеты в `transpilePackages` в `next.config.js`:

```js
const nextConfig = {
    transpilePackages: ['@salutejs/sdds-sbcom', '@salutejs/plasma-new-hope', '@salutejs/plasma-icons', '@salutejs-ds/sdds_sbcom'],
};
```
