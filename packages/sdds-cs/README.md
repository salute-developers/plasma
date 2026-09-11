# Библиотека компонентов SDDS CS

[![license](https://img.shields.io/github/license/salute-developers/plasma)](https://github.com/salute-developers/plasma/blob/master/LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/@salutejs/sdds-cs.svg)](https://www.npmjs.com/package/@salutejs/sdds-cs)
[![typescript](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/dev/typescript)](https://www.typescriptlang.org/)
[![sdds-themes](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/@salutejs/sdds-themes?filename=packages%2Fsdds-cs%2Fpackage.json)](https://www.npmjs.com/package/@salutejs/sdds-themes)

Реализация компонентов для создания веб-приложений.

Компоненты реализованы с помощью [React](https://react.dev/) и поставляются в варианте на [emotion](https://emotion.sh/).

## Ссылки

-   [Документация](https://plasma.sberdevices.ru/sdds-cs/) — гайды, список компонентов с примерами и API
-   [Подключение в Next.js](https://plasma.sberdevices.ru/sdds-cs/next/)
-   [Changelog](https://plasma.sberdevices.ru/changelog/?vertical=SDDSCS&platform=React&version=0.370.0)
-   [Задать вопрос или сообщить о проблеме](https://github.com/salute-developers/plasma/issues)

## Установка

Требуются `react` и `react-dom` версии `16.13.1` или выше, а также `@emotion/react` и `@emotion/styled` версии `11` или выше:

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-cs @salutejs/sdds-themes
$ npm install --save @emotion/react @emotion/styled
```

## Варианты поставки

| Точка входа         | Реализация | Дополнительные зависимости          |
| ------------------- | ---------- | ----------------------------------- |
| `@salutejs/sdds-cs` | emotion    | `@emotion/react`, `@emotion/styled` |

```jsx
import { Button } from '@salutejs/sdds-cs';
```

Beta-компоненты доступны из точки входа `@salutejs/sdds-cs/beta`. Подробнее — в [документации](https://plasma.sberdevices.ru/sdds-cs/beta/popover/).

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

Доступны светлая и тёмная темы — `sdds_cs__light`.

```jsx
import { Global, css } from '@emotion/react';
import { sdds_cs__light } from '@salutejs/sdds-themes';

const themeStyle = css(sdds_cs__light);

// вызовите <Global styles={themeStyle} /> в корне приложения
```

Переключение темы в рантайме описано в [документации](https://plasma.sberdevices.ru/sdds-cs/).

## Использование компонентов

```jsx
// App.tsx
import { Global, css } from '@emotion/react';
import { Button, BodyL } from '@salutejs/sdds-cs';
import { sdds_cs__light } from '@salutejs/sdds-themes';

const themeStyle = css(sdds_cs__light);

export const App = () => {
    return (
        <>
            <Global styles={themeStyle} />
            <BodyL>Hello, SDDS CS!</BodyL>
            <Button>Кнопка</Button>
        </>
    );
};
```

Дизайн-токены доступны в виде js-переменных:

-   базовый набор — из `@salutejs/sdds-themes/tokens`
-   уникальные токены темы — из `@salutejs/sdds-themes/tokens/sdds_cs`.

```jsx
import { textAccent } from '@salutejs/sdds-themes/tokens';

<p style={{ color: textAccent }}>Пример использования токена</p>;
```

## SSR и Next.js

-   Библиотека поддерживает React Server Components (App Router) **только** при **явном** использовании директивы `'use client'` в модулях, импортирующих компоненты.
-   Добавьте пакеты в `transpilePackages` в `next.config.js`:

```js
const nextConfig = {
    transpilePackages: ['@salutejs/sdds-cs', '@salutejs/plasma-new-hope', '@salutejs/plasma-icons'],
};
```

Подробности — в [гайде по Next.js](https://plasma.sberdevices.ru/sdds-cs/next/).

## MCP-сервер для AI-агентов

> **Примечание**: Поддерживаются версии библиотеки начиная с `0.348.0` — нужная указывается параметром `--version`.

Библиотека предоставляет [MCP-сервер](https://plasma.sberdevices.ru/sdds-cs/how-to-mcp/) `@salutejs/sdds-mcp` — через него LLM-агент (Claude Code, Cursor и др.) получает актуальную документацию:

-   список компонентов
-   описание props
-   примеры использования
-   токены и гайды.

Сервер работает по `stdio`:

```bash
npx -y @salutejs/sdds-mcp@latest --lib sdds-cs
```

Если агент настраивается через конфигурацию, используйте шаблон:

```json
{
    "mcpServers": {
        "sdds-cs": {
            "command": "npx",
            "args": ["-y", "@salutejs/sdds-mcp@latest", "--lib", "sdds-cs"]
        }
    }
}
```

Подробности и список инструментов — в [гайде по MCP](https://plasma.sberdevices.ru/sdds-cs/how-to-mcp/).
