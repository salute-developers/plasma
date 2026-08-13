# Библиотека компонентов для вертикали SDDS SERV

[![license](https://img.shields.io/github/license/salute-developers/plasma)](https://github.com/salute-developers/plasma/blob/master/LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/@salutejs/sdds-serv.svg)](https://www.npmjs.com/package/@salutejs/sdds-serv)
[![typescript](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/dev/typescript)](https://www.typescriptlang.org/)
[![sdds-themes](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/@salutejs/sdds-themes?filename=packages%2Fsdds-serv%2Fpackage.json)](https://www.npmjs.com/package/@salutejs/sdds-themes)

Реализация компонентов для создания веб-приложений.

Компоненты реализованы с помощью [React](https://react.dev/) и поставляются в трёх вариантах:

-   на предсобранном CSS,
-   на [styled-components](https://styled-components.com/)
-   на [emotion](https://emotion.sh/).

## Ссылки

-   [Документация](https://plasma.sberdevices.ru/sdds-serv/) — гайды, список компонентов с примерами и API
-   [Подключение в Next.js](https://plasma.sberdevices.ru/sdds-serv/next/)
-   [Changelog](https://plasma.sberdevices.ru/changelog/?vertical=SDDSService&platform=React&version=0.359.0)
-   [Задать вопрос или сообщить о проблеме](https://github.com/salute-developers/plasma/issues)

## Установка

Требуются `react` и `react-dom` версии `16.13.1` или выше:

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-serv @salutejs/sdds-themes
```

Дальнейшие шаги зависят от выбранного [варианта поставки](#варианты-поставки).

Для варианта на styled-components:

```bash
$ npm install --save styled-components@5.3.1
```

Для варианта на emotion:

```bash
$ npm install --save @emotion/styled @emotion/react @emotion/css
```

CSS-вариант дополнительных зависимостей не требует.

## Варианты поставки

> **Примечание:** CSS-вариант является поставкой по умолчанию.

Один и тот же набор компонентов доступен из трёх точек входа:

| Точка входа                             | Реализация        | Дополнительные зависимости                          |
| --------------------------------------- | ----------------- | --------------------------------------------------- |
| `@salutejs/sdds-serv`                   | предсобранный CSS | нет                                                 |
| `@salutejs/sdds-serv/styled-components` | styled-components | `styled-components@5.3.1`                           |
| `@salutejs/sdds-serv/emotion`           | emotion           | `@emotion/styled`, `@emotion/react`, `@emotion/css` |

```jsx
import { Button } from '@salutejs/sdds-serv';
// или
import { Button } from '@salutejs/sdds-serv/styled-components';
// или
import { Button } from '@salutejs/sdds-serv/emotion';
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

Доступны светлая и тёмная темы — `sdds_serv__light` и `sdds_serv__dark`, а также вариант с акцентным цветом малахит — `sdds_serv_malachite__light`.

### Через импорт css-файла

```jsx
import '@salutejs/sdds-themes/css/sdds_serv__light.css';
```

### Через styled-components

```jsx
import { createGlobalStyle } from 'styled-components';
import { sdds_serv__light } from '@salutejs/sdds-themes';

const Theme = createGlobalStyle(sdds_serv__light);

// вызовите <Theme /> в корне приложения
```

### Через emotion

```jsx
import { Global, css } from '@emotion/react';
import { sdds_serv__light } from '@salutejs/sdds-themes';

const themeStyle = css(sdds_serv__light);

// вызовите <Global styles={themeStyle} /> в корне приложения
```

Переключение темы в рантайме и подключение через css-модули описаны в [документации](https://plasma.sberdevices.ru/sdds-serv/).

## Использование компонентов

```jsx
// App.tsx
import { Button, BodyL } from '@salutejs/sdds-serv';
import '@salutejs/sdds-themes/css/sdds_serv__light.css';

export const App = () => {
    return (
        <>
            <BodyL>Hello, SDDS SERV!</BodyL>
            <Button>Кнопка</Button>
        </>
    );
};
```

Дизайн-токены доступны в виде js-переменных:

-   базовый набор — из `@salutejs/sdds-themes/tokens`
-   уникальные токены темы — из `@salutejs/sdds-themes/tokens/sdds_serv`.

```jsx
import { textAccent } from '@salutejs/sdds-themes/tokens';

<p style={{ color: textAccent }}>Пример использования токена</p>;
```

## AI-kit

Компоненты для построения AI-интерфейсов — доступны из отдельных точек входа с теми же тремя вариантами поставки:

```jsx
import { Answer } from '@salutejs/sdds-serv/ai';
// или
import { Answer } from '@salutejs/sdds-serv/ai/styled-components';
// или
import { Answer } from '@salutejs/sdds-serv/ai/emotion';
```

## SSR и Next.js

-   Библиотека поддерживает React Server Components (App Router) **только** при **явном** использовании директивы `'use client'` в модулях, импортирующих компоненты.
-   Для CSS-варианта поставки добавьте пакеты в `transpilePackages` в `next.config.js`:

```js
const nextConfig = {
    transpilePackages: ['@salutejs/sdds-serv', '@salutejs/plasma-new-hope', '@salutejs/plasma-icons'],
};
```

Подробности — в [гайде по Next.js](https://plasma.sberdevices.ru/sdds-serv/next/).

## MCP-сервер для AI-агентов

> **Примечание**: Поддерживаются версии библиотеки начиная с `0.343.0` — нужная указывается параметром `--version`.

Библиотека предоставляет [MCP-сервер](https://plasma.sberdevices.ru/sdds-serv/how-to-mcp/) `@salutejs/sdds-mcp` — через него LLM-агент (Claude Code, Cursor и др.) получает актуальную документацию:

-   список компонентов
-   описание props
-   примеры использования
-   токены и гайды.

Сервер работает по `stdio`:

```bash
npx -y @salutejs/sdds-mcp@latest --lib sdds-serv
```

Если агент настраивается через конфигурацию, используйте шаблон:

```json
{
    "mcpServers": {
        "sdds-serv": {
            "command": "npx",
            "args": ["-y", "@salutejs/sdds-mcp@latest", "--lib", "sdds-serv"]
        }
    }
}
```

Подробности и список инструментов — в [гайде по MCP](https://plasma.sberdevices.ru/sdds-serv/how-to-mcp/).
