# Библиотека компонентов для вертикали SDDS PLATFORM AI

[![license](https://img.shields.io/github/license/salute-developers/plasma)](https://github.com/salute-developers/plasma/blob/master/LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/@salutejs/sdds-platform-ai.svg)](https://www.npmjs.com/package/@salutejs/sdds-platform-ai)
[![typescript](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/dev/typescript)](https://www.typescriptlang.org/)
[![sdds-themes](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/@salutejs/sdds-themes?filename=packages%2Fsdds-platform-ai%2Fpackage.json)](https://www.npmjs.com/package/@salutejs/sdds-themes)

Реализация компонентов для создания веб-приложений.

Компоненты реализованы с помощью [React](https://react.dev/) и поставляются в двух вариантах:

-   на предсобранном CSS,
-   на [styled-components](https://styled-components.com/).

## Ссылки

-   [Документация](https://plasma.sberdevices.ru/sdds-platform-ai/) — гайды, список компонентов с примерами и API
-   [Подключение в Next.js](https://plasma.sberdevices.ru/sdds-platform-ai/next/)
-   [Changelog](https://plasma.sberdevices.ru/changelog/?vertical=SDDSPlatformAI&platform=React&version=0.368.0)
-   [Задать вопрос или сообщить о проблеме](https://github.com/salute-developers/plasma/issues)

## Установка

Требуются `react` и `react-dom` версии `16.13.1` или выше:

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/sdds-platform-ai @salutejs/sdds-themes
```

Дальнейшие шаги зависят от выбранного [варианта поставки](#варианты-поставки).

Для варианта на styled-components:

```bash
$ npm install --save styled-components@5.3.1
```

CSS-вариант дополнительных зависимостей не требует.

## Варианты поставки

> **Примечание:** CSS-вариант является поставкой по умолчанию.

Один и тот же набор компонентов доступен из двух точек входа:

| Точка входа                                     | Реализация        | Дополнительные зависимости |
| ------------------------------------------------ | ----------------- | --------------------------- |
| `@salutejs/sdds-platform-ai`                     | предсобранный CSS | нет                          |
| `@salutejs/sdds-platform-ai/styled-components`   | styled-components | `styled-components@5.3.1`    |

```jsx
import { Button } from '@salutejs/sdds-platform-ai';
// или
import { Button } from '@salutejs/sdds-platform-ai/styled-components';
```

## Подключение шрифтов

Типографическая система основана на фирменных шрифтах, они поставляются с CDN.

Добавьте два css-файла внутрь тега `<head>`.

```html
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css" />
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css" />
```

## Подключение темы

Тема подключается один раз в корне приложения.

> **Примечание:** Для [Next.js](https://nextjs.org/) — в `pages/_app.tsx`.

Тема включает в себя цветовые и типографические токены.

Доступны светлая и тёмная темы — `sdds_platform_ai__light` и `sdds_platform_ai__dark`.

### Через импорт css-файла

```jsx
import '@salutejs/sdds-themes/css/sdds_platform_ai__light.css';
```

### Через styled-components

```jsx
import { createGlobalStyle } from 'styled-components';
import { sdds_platform_ai__light } from '@salutejs/sdds-themes';

const Theme = createGlobalStyle(sdds_platform_ai__light);

// вызовите <Theme /> в корне приложения
```

Переключение темы в рантайме и подключение через css-модули описаны в [документации](https://plasma.sberdevices.ru/sdds-platform-ai/).

## Использование компонентов

```jsx
// App.tsx
import { Button, BodyL } from '@salutejs/sdds-platform-ai';
import '@salutejs/sdds-themes/css/sdds_platform_ai__light.css';

export const App = () => {
    return (
        <>
            <BodyL>Hello, SDDS PLATFORM AI!</BodyL>
            <Button>Кнопка</Button>
        </>
    );
};
```

Дизайн-токены доступны в виде js-переменных:

-   базовый набор — из `@salutejs/sdds-themes/tokens`
-   уникальные токены темы — из `@salutejs/sdds-themes/tokens/sdds_platform_ai`.

```jsx
import { textAccent } from '@salutejs/sdds-themes/tokens';

<p style={{ color: textAccent }}>Пример использования токена</p>;
```

## SSR и Next.js

-   Библиотека поддерживает React Server Components (App Router) **только** при **явном** использовании директивы `'use client'` в модулях, импортирующих компоненты.
-   Для CSS-варианта поставки добавьте пакеты в `transpilePackages` в `next.config.js`:

```js
const nextConfig = {
    transpilePackages: ['@salutejs/sdds-platform-ai', '@salutejs/plasma-new-hope', '@salutejs/plasma-icons'],
};
```

Подробности — в [гайде по Next.js](https://plasma.sberdevices.ru/sdds-platform-ai/next/).

## MCP-сервер для AI-агентов

> **Примечание**: Поддерживаются версии библиотеки начиная с `0.343.0` — нужная указывается параметром `--version`.

Библиотека предоставляет [MCP-сервер](https://plasma.sberdevices.ru/sdds-platform-ai/how-to-mcp/) `@salutejs/sdds-mcp` — через него LLM-агент (Claude Code, Cursor и др.) получает актуальную документацию:

-   список компонентов
-   описание props
-   примеры использования
-   токены и гайды.

Сервер работает по `stdio`:

```bash
npx -y @salutejs/sdds-mcp@latest --lib sdds-platform-ai
```

Если агент настраивается через конфигурацию, используйте шаблон:

```json
{
    "mcpServers": {
        "sdds-platform-ai": {
            "command": "npx",
            "args": ["-y", "@salutejs/sdds-mcp@latest", "--lib", "sdds-platform-ai"]
        }
    }
}
```

Подробности и список инструментов — в [гайде по MCP](https://plasma.sberdevices.ru/sdds-platform-ai/how-to-mcp/).
