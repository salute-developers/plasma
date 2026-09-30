# SDDS (Plasma)

[![license](https://img.shields.io/github/license/salute-developers/plasma)](https://github.com/salute-developers/plasma/blob/master/LICENSE.txt)
[![typescript](https://img.shields.io/github/package-json/dependency-version/salute-developers/plasma/dev/typescript)](https://www.typescriptlang.org/)
[![node](https://img.shields.io/badge/node-24.11.1-339933?logo=nodedotjs&logoColor=white)](./.nvmrc)
[![npm](https://img.shields.io/badge/npm-11.6.2-CB3837?logo=npm&logoColor=white)](./.nvmrc)

Дизайн-система для веб-приложений на React. Репозиторий содержит ядро компонентов и пакеты конечных **продуктовых** вертикалей.

Вертикаль — это **готовый** набор компонентов со своими темами и конфигурацией для конкретного продукта или направления.

## С чего начать

1. Выберите пакет вертикали в таблице ниже.
2. Установите пакет и его тему по инструкции из README пакета или со страницы документации.
3. Импортируйте компоненты из пакета вертикали, например `import { Button } from '@salutejs/sdds-serv'`.

## Пакеты компонентов

| Пакет                                                                                  | README                                          | Документация                                                        | Storybook                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [@salutejs/plasma-web](https://www.npmjs.com/package/@salutejs/plasma-web)             | [README](./packages/plasma-web/README.md)       | [web](https://plasma.sberdevices.ru/web/)                           | [web-storybook](https://plasma.sberdevices.ru/web-storybook/)                           |
| [@salutejs/plasma-b2c](https://www.npmjs.com/package/@salutejs/plasma-b2c)             | [README](./packages/plasma-b2c/README.md)       | [b2c](https://plasma.sberdevices.ru/b2c/)                           | [b2c-storybook](https://plasma.sberdevices.ru/b2c-storybook/)                           |
| [@salutejs/plasma-giga](https://www.npmjs.com/package/@salutejs/plasma-giga)           | [README](./packages/plasma-giga/README.md)      | [giga](https://plasma.sberdevices.ru/giga/)                         | [giga-storybook](https://plasma.sberdevices.ru/giga-storybook/)                         |
| [@salutejs/plasma-homeds](https://www.npmjs.com/package/@salutejs/plasma-homeds)       | [README](./packages/plasma-homeds/README.md)    | [homeds](https://plasma.sberdevices.ru/homeds/)                     | [homeds-storybook](https://plasma.sberdevices.ru/homeds-storybook/)                     |
| [@salutejs/sdds-serv](https://www.npmjs.com/package/@salutejs/sdds-serv)               | [README](./packages/sdds-serv/README.md)        | [sdds-serv](https://plasma.sberdevices.ru/sdds-serv/)               | [sdds-serv-storybook](https://plasma.sberdevices.ru/sdds-serv-storybook/)               |
| [@salutejs/sdds-cs](https://www.npmjs.com/package/@salutejs/sdds-cs)                   | [README](./packages/sdds-cs/README.md)          | [sdds-cs](https://plasma.sberdevices.ru/sdds-cs/)                   | [sdds-cs-storybook](https://plasma.sberdevices.ru/sdds-cs-storybook/)                   |
| [@salutejs/sdds-bizcom](https://www.npmjs.com/package/@salutejs/sdds-bizcom)           | [README](./packages/sdds-bizcom/README.md)      | [sdds-bizcom](https://plasma.sberdevices.ru/sdds-bizcom/)           | [sdds-bizcom-storybook](https://plasma.sberdevices.ru/sdds-bizcom-storybook/)           |
| [@salutejs/sdds-dfa](https://www.npmjs.com/package/@salutejs/sdds-dfa)                 | [README](./packages/sdds-dfa/README.md)         | [sdds-dfa](https://plasma.sberdevices.ru/sdds-dfa/)                 | [sdds-dfa-storybook](https://plasma.sberdevices.ru/sdds-dfa-storybook/)                 |
| [@salutejs/sdds-finai](https://www.npmjs.com/package/@salutejs/sdds-finai)             | [README](./packages/sdds-finai/README.md)       | [sdds-finai](https://plasma.sberdevices.ru/sdds-finai/)             | [sdds-finai-storybook](https://plasma.sberdevices.ru/sdds-finai-storybook/)             |
| [@salutejs/sdds-insol-next](https://www.npmjs.com/package/@salutejs/sdds-insol-next)   | [README](./packages/sdds-insol-next/README.md)  | [sdds-insol-next](https://plasma.sberdevices.ru/sdds-insol-next/)   | [sdds-insol-next-storybook](https://plasma.sberdevices.ru/sdds-insol-next-storybook/)   |
| [@salutejs/sdds-netology](https://www.npmjs.com/package/@salutejs/sdds-netology)       | [README](./packages/sdds-netology/README.md)    | [sdds-netology](https://plasma.sberdevices.ru/sdds-netology/)       | [sdds-netology-storybook](https://plasma.sberdevices.ru/sdds-netology-storybook/)       |
| [@salutejs/sdds-platform-ai](https://www.npmjs.com/package/@salutejs/sdds-platform-ai) | [README](./packages/sdds-platform-ai/README.md) | [sdds-platform-ai](https://plasma.sberdevices.ru/sdds-platform-ai/) | [sdds-platform-ai-storybook](https://plasma.sberdevices.ru/sdds-platform-ai-storybook/) |
| [@salutejs/sdds-sbcom](https://www.npmjs.com/package/@salutejs/sdds-sbcom)             | [README](./packages/sdds-sbcom/README.md)       | [sdds-sbcom](https://plasma.sberdevices.ru/sdds-sbcom/)             | [sdds-sbcom-storybook](https://plasma.sberdevices.ru/sdds-sbcom-storybook/)             |
| [@salutejs/sdds-scan](https://www.npmjs.com/package/@salutejs/sdds-scan)               | [README](./packages/sdds-scan/README.md)        | [sdds-scan](https://plasma.sberdevices.ru/sdds-scan/)               | [sdds-scan-storybook](https://plasma.sberdevices.ru/sdds-scan-storybook/)               |
| [@salutejs/sdds-os](https://www.npmjs.com/package/@salutejs/sdds-os)                   | [README](./packages/sdds-os/README.md)          | —                                                                   | [sdds-os-storybook](https://plasma.sberdevices.ru/sdds-os-storybook/)                   |

> **!!ВАЖНО!!:** Пакет `plasma-ui` переехал в отдельный репозиторий [salute-developers/plasma-ui](https://github.com/salute-developers/plasma-ui).

## Темы и иконки

-   [@salutejs/plasma-themes](https://www.npmjs.com/package/@salutejs/plasma-themes) и [@salutejs/sdds-themes](https://www.npmjs.com/package/@salutejs/sdds-themes) содержат темы и дизайн-токены вертикалей. Какой пакет тем нужен вашей вертикали, указано в README её пакета.
-   [@salutejs/plasma-icons](https://www.npmjs.com/package/@salutejs/plasma-icons) и [@salutejs/sdds-icons](https://www.npmjs.com/package/@salutejs/sdds-icons) содержат React-иконки. Весь набор можно посмотреть на странице [иконок](https://plasma.sberdevices.ru/icons/).

## Для AI-агентов

-   Компоненты, их свойства и примеры для вертикали отдаёт MCP-сервер `@salutejs/sdds-mcp`. Список поддерживаемых пакетов и настройка описаны в разделе «Как работать с MCP» документации вертикали. Запуск:

    ```bash
    npx -y @salutejs/sdds-mcp@latest --lib <пакет-вертикали>
    ```

-   `llms.txt` есть у сайта документации в каждой вертикали и находится по адресу `<сайт документации>/llms.txt`, например `https://plasma.sberdevices.ru/sdds-serv/llms.txt`.
-   В коде приложения импортируйте компоненты и токены только из пакета вертикали и её пакета тем, а иконки из пакета иконок. Остальные пакеты в `packages/`, включая ядро `plasma-new-hope`, служат зависимостями вертикалей и напрямую не подключаются.
-   Для работы внутри этого репозитория следуйте [AGENTS.md](./AGENTS.md).

## Разработка

-   [AGENTS.md](./AGENTS.md) описывает структуру монорепозитория, команды сборки и проверок, навыки агентов.
-   [CONTRIBUTING.md](./CONTRIBUTING.md) содержит правила внесения изменений.

## Обратная связь

Чтобы предложить новый компонент, пришлите пулл-реквест по [правилам разработки](./CONTRIBUTING.md) или [заведите задачу](https://github.com/salute-developers/plasma/issues/new). Там же можно сообщить о некорректном поведении существующего компонента.
