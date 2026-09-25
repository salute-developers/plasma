# Библиотека компонентов "PLASMA WEB"

[![license](https://img.shields.io/github/license/salute-developers/plasma)](https://github.com/salute-developers/plasma/blob/master/LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/@salutejs/plasma-web.svg)](https://www.npmjs.com/package/@salutejs/plasma-web)
[![typescript](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/dev/typescript)](https://www.typescriptlang.org/)
[![plasma-themes](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/@salutejs/plasma-themes?filename=packages%2Fplasma-web%2Fpackage.json)](https://www.npmjs.com/package/@salutejs/plasma-themes)

Реализация компонентов для создания веб-приложений.

Компоненты реализованы с помощью [React](https://react.dev/) и поставляются в двух вариантах:

-   на [styled-components](https://styled-components.com/) (по умолчанию),
-   на предсобранном CSS.

## Ссылки

-   [Документация](https://plasma.sberdevices.ru/web/) — гайды, список компонентов с примерами и API
-   [Подключение в Next.js](https://plasma.sberdevices.ru/web/next/)
-   [Задать вопрос или сообщить о проблеме](https://github.com/salute-developers/plasma/issues)

## Установка

Требуются `react` и `react-dom` версии `16.13.1` или выше:

```bash
$ npm install --save react react-dom
$ npm install --save @salutejs/plasma-web @salutejs/plasma-themes
```

Дальнейшие шаги зависят от выбранного [варианта поставки](#варианты-поставки).

Для варианта на styled-components:

```bash
$ npm install --save styled-components@5.3.1
```

CSS-вариант дополнительных зависимостей не требует.

## Варианты поставки

> **Примечание:** Вариант на styled-components является поставкой по умолчанию.

Один и тот же набор компонентов доступен из двух точек входа:

| Точка входа                | Реализация         | Дополнительные зависимости |
| --------------------------- | ------------------ | --------------------------- |
| `@salutejs/plasma-web`      | styled-components  | `styled-components@5.3.1`  |
| `@salutejs/plasma-web/css`  | предсобранный CSS  | нет                          |

```jsx
import { Button } from '@salutejs/plasma-web';
// или
import { Button } from '@salutejs/plasma-web/css';
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

Доступны светлая и тёмная темы — `plasma_web__light` и `plasma_web__dark`.

### Через импорт css-файла

```jsx
import '@salutejs/plasma-themes/css/plasma_web__light.css';
```

### Через styled-components

```jsx
import { createGlobalStyle } from 'styled-components';
import { plasma_web__light } from '@salutejs/plasma-themes';

const Theme = createGlobalStyle(plasma_web__light);

// вызовите <Theme /> в корне приложения
```

Переключение темы в рантайме и подключение через css-модули описаны в [документации](https://plasma.sberdevices.ru/web/).

## Использование компонентов

```jsx
// App.tsx
import { Button, BodyL } from '@salutejs/plasma-web';
import '@salutejs/plasma-themes/css/plasma_web__light.css';

export const App = () => {
    return (
        <>
            <BodyL>Hello, Plasma!</BodyL>
            <Button>Кнопка</Button>
        </>
    );
};
```

Дизайн-токены доступны в виде js-переменных:

-   базовый набор — из `@salutejs/plasma-themes/tokens`
-   уникальные токены темы — из `@salutejs/plasma-themes/tokens/plasma_web`.

```jsx
import { textAccent } from '@salutejs/plasma-themes/tokens';

<p style={{ color: textAccent }}>Пример использования токена</p>;
```

## SSR и Next.js

-   Библиотека поддерживает React Server Components (App Router) **только** при **явном** использовании директивы `'use client'` в модулях, импортирующих компоненты.
-   Для CSS-варианта поставки добавьте пакеты в `transpilePackages` в `next.config.js`:

```js
const nextConfig = {
    transpilePackages: ['@salutejs/plasma-web', '@salutejs/plasma-new-hope', '@salutejs/plasma-icons'],
};
```

Подробности — в [гайде по Next.js](https://plasma.sberdevices.ru/web/next/).

## MCP-сервер для AI-агентов

> **Примечание**: Поддерживаются версии библиотеки начиная с `1.613.0` — нужная указывается параметром `--version`.

Библиотека предоставляет [MCP-сервер](https://plasma.sberdevices.ru/web/how-to-mcp/) `@salutejs/sdds-mcp` — через него LLM-агент (Claude Code, Cursor и др.) получает актуальную документацию:

-   список компонентов
-   описание props
-   примеры использования
-   токены и гайды.

Сервер работает по `stdio`:

```bash
npx -y @salutejs/sdds-mcp@latest --lib plasma-web
```

Если агент настраивается через конфигурацию, используйте шаблон:

```json
{
    "mcpServers": {
        "plasma-web": {
            "command": "npx",
            "args": ["-y", "@salutejs/sdds-mcp@latest", "--lib", "plasma-web"]
        }
    }
}
```

Подробности и список инструментов — в [гайде по MCP](https://plasma.sberdevices.ru/web/how-to-mcp/).
