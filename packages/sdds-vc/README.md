# Библиотека компонентов для вертикали SDDS VC

Реализация компонентов для создания веб-приложений.

Компоненты реализованы с помощью [React](https://react.dev/) и поставляются на предсобранном CSS.

## Ссылки

-   [Задать вопрос или сообщить о проблеме](https://github.com/salute-developers/plasma/issues)

## Установка

Требуются `react` и `react-dom` версии `16.13.1` или выше:

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-vc @salutejs-ds/sdds_sbcom
```

Пакет поставляется на предсобранном CSS и дополнительных css-in-js зависимостей не требует.

## Подключение шрифтов

Типографическая система основана на фирменных шрифтах, они поставляются с CDN.

Добавьте три css-файла внутрь тега `<head>`.

```html
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css" />
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css" />
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansTextMono.0.2.0.css" />
```

## Подключение темы

Тема подключается один раз в корне приложения.

> **Примечание:** Для [Next.js](https://nextjs.org/) — в `pages/_app.tsx`.

Тема включает в себя цветовые и типографические токены. Доступны светлая и тёмная темы — `sdds_sbcom__light` и `sdds_sbcom__dark`.

```jsx
import '@salutejs-ds/sdds_sbcom/css/sdds_sbcom__light.css';
```

## Использование компонентов

```jsx
// App.tsx
import { Button, TextField } from '@salutejs/sdds-vc';
import '@salutejs-ds/sdds_sbcom/css/sdds_sbcom__light.css';

export const App = () => {
    return (
        <>
            <TextField label="Лейбл" labelPlacement="inner" />
            <Button text="Кнопка" />
        </>
    );
};
```

Дизайн-токены доступны в виде js-переменных из `@salutejs-ds/sdds_sbcom/theme/tokens`:

```jsx
import { textAccent } from '@salutejs-ds/sdds_sbcom/theme/tokens';

<p style={{ color: textAccent }}>Пример использования токена</p>;
```

## SSR и Next.js

-   Библиотека поддерживает React Server Components (App Router) **только** при **явном** использовании директивы `'use client'` в модулях, импортирующих компоненты.
-   Добавьте пакеты в `transpilePackages` в `next.config.js`:

```js
const nextConfig = {
    transpilePackages: [
        '@salutejs/sdds-vc',
        '@salutejs/plasma-new-hope',
        '@salutejs/plasma-icons',
        '@salutejs-ds/sdds_sbcom',
    ],
};
```
