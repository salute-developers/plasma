# Библиотека компонентов для вертикали SDDS FINAI

[![license](https://img.shields.io/github/license/salute-developers/plasma)](https://github.com/salute-developers/plasma/blob/master/LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/@salutejs/sdds-finai.svg)](https://www.npmjs.com/package/@salutejs/sdds-finai)
[![typescript](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/dev/typescript)](https://www.typescriptlang.org/)
[![sdds-themes](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/@salutejs/sdds-themes?filename=packages%2Fsdds-finai%2Fpackage.json)](https://www.npmjs.com/package/@salutejs/sdds-themes)

Реализация компонентов для создания веб-приложений.

Компоненты реализованы с помощью [React](https://react.dev/) и поставляются в трёх вариантах:

-   на [styled-components](https://styled-components.com/) (по умолчанию),
-   на предсобранном CSS,
-   на [emotion](https://emotion.sh/).

## Ссылки

-   [Документация](https://plasma.sberdevices.ru/sdds-finai/) — гайды, список компонентов с примерами и API
-   [Подключение в Next.js](https://plasma.sberdevices.ru/sdds-finai/next/)
-   [Changelog](https://plasma.sberdevices.ru/changelog/?vertical=SDDSFinAI&platform=React&version=0.360.0)
-   [Задать вопрос или сообщить о проблеме](https://github.com/salute-developers/plasma/issues)

## Установка

Требуются `react` и `react-dom` версии `16.13.1` или выше:

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-finai @salutejs/sdds-themes
```

Дальнейшие шаги зависят от выбранного [варианта поставки](#варианты-поставки).

Для варианта на styled-components:

```bash
$ npm install --save styled-components@5.3.1
```

Для варианта на emotion:

```bash
$ npm install --save @emotion/styled @emotion/react
```

CSS-вариант дополнительных зависимостей не требует.

## Варианты поставки

> **Примечание:** Вариант на styled-components является поставкой по умолчанию.

Один и тот же набор компонентов доступен из трёх точек входа:

| Точка входа                     | Реализация         | Дополнительные зависимости          |
| -------------------------------- | ------------------ | ------------------------------------ |
| `@salutejs/sdds-finai`           | styled-components  | `styled-components@5.3.1`            |
| `@salutejs/sdds-finai/css`       | предсобранный CSS  | нет                                   |
| `@salutejs/sdds-finai/emotion`   | emotion            | `@emotion/styled`, `@emotion/react`  |

```jsx
import { Button } from '@salutejs/sdds-finai';
// или
import { Button } from '@salutejs/sdds-finai/css';
// или
import { Button } from '@salutejs/sdds-finai/emotion';
```

Beta-компоненты доступны из точки входа `@salutejs/sdds-finai/beta`. Подробнее — в [документации](https://plasma.sberdevices.ru/sdds-finai/beta/embedded-button/).

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

Доступны светлая и тёмная темы — `sdds_finai__light` и `sdds_finai__dark`.

### Через импорт css-файла

```jsx
import '@salutejs/sdds-themes/css/sdds_finai__light.css';
```

### Через styled-components

```jsx
import { createGlobalStyle } from 'styled-components';
import { sdds_finai__light } from '@salutejs/sdds-themes';

const Theme = createGlobalStyle(sdds_finai__light);

// вызовите <Theme /> в корне приложения
```

### Через emotion

```jsx
import { Global, css } from '@emotion/react';
import { sdds_finai__light } from '@salutejs/sdds-themes';

const themeStyle = css(sdds_finai__light);

// вызовите <Global styles={themeStyle} /> в корне приложения
```

Переключение темы в рантайме и подключение через css-модули описаны в [документации](https://plasma.sberdevices.ru/sdds-finai/).

## Использование компонентов

```jsx
// App.tsx
import { Button, BodyL } from '@salutejs/sdds-finai';
import '@salutejs/sdds-themes/css/sdds_finai__light.css';

export const App = () => {
    return (
        <>
            <BodyL>Hello, SDDS FINAI!</BodyL>
            <Button>Кнопка</Button>
        </>
    );
};
```

Дизайн-токены доступны в виде js-переменных:

-   базовый набор — из `@salutejs/sdds-themes/tokens`
-   уникальные токены темы — из `@salutejs/sdds-themes/tokens/sdds_finai`.

```jsx
import { textAccent } from '@salutejs/sdds-themes/tokens';

<p style={{ color: textAccent }}>Пример использования токена</p>;
```

## SSR и Next.js

-   Библиотека поддерживает React Server Components (App Router) **только** при **явном** использовании директивы `'use client'` в модулях, импортирующих компоненты.
-   Для CSS-варианта поставки добавьте пакеты в `transpilePackages` в `next.config.js`:

```js
const nextConfig = {
    transpilePackages: ['@salutejs/sdds-finai', '@salutejs/plasma-new-hope', '@salutejs/plasma-icons'],
};
```

Подробности — в [гайде по Next.js](https://plasma.sberdevices.ru/sdds-finai/next/).

## MCP-сервер для AI-агентов

> **Примечание**: Поддерживаются версии библиотеки начиная с `0.334.0` — нужная указывается параметром `--version`.

Библиотека предоставляет [MCP-сервер](https://plasma.sberdevices.ru/sdds-finai/how-to-mcp/) `@salutejs/sdds-mcp` — через него LLM-агент (Claude Code, Cursor и др.) получает актуальную документацию:

-   список компонентов
-   описание props
-   примеры использования
-   токены и гайды.

Сервер работает по `stdio`:

```bash
npx -y @salutejs/sdds-mcp@latest --lib sdds-finai
```

Если агент настраивается через конфигурацию, используйте шаблон:

```json
{
    "mcpServers": {
        "sdds-finai": {
            "command": "npx",
            "args": ["-y", "@salutejs/sdds-mcp@latest", "--lib", "sdds-finai"]
        }
    }
}
```

Подробности и список инструментов — в [гайде по MCP](https://plasma.sberdevices.ru/sdds-finai/how-to-mcp/).
