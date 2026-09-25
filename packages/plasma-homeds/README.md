# Библиотека компонентов для вертикали PLASMA HOMEDS

[![license](https://img.shields.io/github/license/salute-developers/plasma)](https://github.com/salute-developers/plasma/blob/master/LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/@salutejs/plasma-homeds.svg)](https://www.npmjs.com/package/@salutejs/plasma-homeds)
[![typescript](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/dev/typescript)](https://www.typescriptlang.org/)
[![plasma-themes](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/@salutejs/plasma-themes?filename=packages%2Fplasma-homeds%2Fpackage.json)](https://www.npmjs.com/package/@salutejs/plasma-themes)

Реализация компонентов для создания веб-приложений.

Компоненты реализованы с помощью [React](https://react.dev/) и поставляются в варианте на [styled-components](https://styled-components.com/).

## Ссылки

-   [Документация](https://plasma.sberdevices.ru/homeds/) — гайды, список компонентов с примерами и API
-   [Подключение в Next.js](https://plasma.sberdevices.ru/homeds/next/)
-   [Задать вопрос или сообщить о проблеме](https://github.com/salute-developers/plasma/issues)

## Установка

Требуются `react` и `react-dom` версии `16.13.1` или выше, а также `styled-components` версии `5.3.1`:

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/plasma-homeds @salutejs/plasma-themes
$ npm install --save styled-components@5.3.1
```

## Варианты поставки

| Точка входа               | Реализация         | Дополнительные зависимости |
| -------------------------- | ------------------ | --------------------------- |
| `@salutejs/plasma-homeds` | styled-components  | `styled-components@5.3.1`  |

```jsx
import { Button } from '@salutejs/plasma-homeds';
```

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

Тема включает в себя цветовые и типографические токены.

Доступны светлая и тёмная темы — `plasma_homeds__light` и `plasma_homeds__dark`.

```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { plasma_homeds__light } from '@salutejs/plasma-themes';

const Theme = createGlobalStyle(plasma_homeds__light);

// вызовите <Theme /> в корне приложения
```

Переключение темы в рантайме описано в [документации](https://plasma.sberdevices.ru/homeds/).

## Использование компонентов

```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Button, BodyL } from '@salutejs/plasma-homeds';
import { plasma_homeds__light } from '@salutejs/plasma-themes';

const Theme = createGlobalStyle(plasma_homeds__light);

export const App = () => {
    return (
        <>
            <Theme />
            <BodyL>Hello, PLASMA HOMEDS!</BodyL>
            <Button>Кнопка</Button>
        </>
    );
};
```

Дизайн-токены доступны в виде js-переменных:

-   базовый набор — из `@salutejs/plasma-themes/tokens`
-   уникальные токены темы — из `@salutejs/plasma-themes/tokens/plasma_homeds`.

```jsx
import { textAccent } from '@salutejs/plasma-themes/tokens';

<p style={{ color: textAccent }}>Пример использования токена</p>;
```

## SSR и Next.js

-   Библиотека поддерживает React Server Components (App Router) **только** при **явном** использовании директивы `'use client'` в модулях, импортирующих компоненты.
-   Добавьте пакеты в `transpilePackages` в `next.config.js`:

```js
const nextConfig = {
    transpilePackages: ['@salutejs/plasma-homeds', '@salutejs/plasma-new-hope', '@salutejs/plasma-icons'],
};
```

Подробности — в [гайде по Next.js](https://plasma.sberdevices.ru/homeds/next/).

## MCP-сервер для AI-агентов

> **Примечание**: Поддерживаются версии библиотеки начиная с `0.349.0` — нужная указывается параметром `--version`.

Библиотека предоставляет [MCP-сервер](https://plasma.sberdevices.ru/homeds/how-to-mcp/) `@salutejs/sdds-mcp` — через него LLM-агент (Claude Code, Cursor и др.) получает актуальную документацию:

-   список компонентов
-   описание props
-   примеры использования
-   токены и гайды.

Сервер работает по `stdio`:

```bash
npx -y @salutejs/sdds-mcp@latest --lib plasma-homeds
```

Если агент настраивается через конфигурацию, используйте шаблон:

```json
{
    "mcpServers": {
        "plasma-homeds": {
            "command": "npx",
            "args": ["-y", "@salutejs/sdds-mcp@latest", "--lib", "plasma-homeds"]
        }
    }
}
```

Подробности и список инструментов — в [гайде по MCP](https://plasma.sberdevices.ru/homeds/how-to-mcp/).
