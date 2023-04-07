# Babel плагин babel-plugin-import-replacer

Данный плагин предназначен для простой замены источников импорта.

## Описание

С помощью плагина происходит "плоская" (т.е. без учёта вложенности) подмена импортов на основе синонимов (`alias`). Параметр `alias` принимает в себя массив объектов в формате "<имя__синонима>:<целевой__путь>".

## Пример использования

Пример замены импорта в зависимости от переменной окружения `env`.

**fileName.ts**

```ts
/* eslint-disable @typescript-eslint/ban-ts-comment, no-underscore-dangle */
// @ts-ignore
import _package from '@pkg';

...
```

**.babelrc.js**

```js
module.exports = {
    env: {
        cjs: {
            plugins: [
                [
                    '../../scripts/babel-plugin-import-replacer',
                    {
                        alias: {
                            '@pkg': './package.json',
                        },
                    },
                ],
            ],
        },
        esm: {
            plugins: [
                [
                    '../../scripts/babel-plugin-import-replacer',
                    {
                        alias: {
                            '@pkg': '../package.json',
                        },
                    },
                ],
            ],
        },
    },
```

Получивший результат после работы плагина.

**fileName.js with cjs**

```js
var _package2 = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("./package.json"));

...
```

**fileName.js with esm**

```js
/* eslint-disable @typescript-eslint/ban-ts-comment, no-underscore-dangle */
// @ts-ignore
import _package from "../package.json";

...
```