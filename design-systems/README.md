# Дизайн-системы пользовательских вертикалей

Каждая вертикаль хранится в отдельной директории:

```
design-systems/
└── <vertical_name>/
    ├── .sdds/
    │   └── config.json   # декларация дизайн-системы, коммитится
    └── output/           # сгенерированный пакет
```

-   `.sdds/config.json` — декларация дизайн-системы вертикали, создаётся командой `dsbuilder init`. Остальное содержимое `.sdds/` загружается из DS Builder и игнорируется git (см. [.gitignore](.gitignore)).
-   `output/` — пакет, сгенерированный по метаданным. Артефакты сборки и архив `*.tgz` игнорируются `output/.gitignore` из заготовки пакета.

## Генерация и публикация темы

Нужны CLI `dsbuilder` и локальный клон репозитория DS Builder с установленными зависимостями `js/cli` (`npm ci` в `js/cli`).

Все команды выполняются из директории вертикали:

```sh
cd design-systems/<vertical_name>
```

1. Авторизация в DS Builder в prom:

    ```sh
    dsbuilder auth login --username <system_admin_name> --api-url https://gateway.design-system-builder.ru
    ```

2. Создание декларации `.sdds/config.json` (один раз для вертикали):

    ```sh
    dsbuilder init --project-id <project_id> --design-system-id <design_system_id> --platform react
    ```

3. Загрузка темы в `.sdds/`:

    ```sh
    dsbuilder theme fetch --api-url https://gateway.design-system-builder.ru
    ```

4. Генерация пакета темы в `output/`:

    ```sh
    export DSBUILDER_WEB_TOOL=<absolute_path_to_design_system_builder_js_cli>
    dsbuilder theme generate --platform react --output ./output -- --package --name <sdds_name> --ds-version <package_version>
    ```

    `--ds-version` — версия публикуемого пакета: перед каждой публикацией её нужно поднять.

5. Сборка и упаковка:

    ```sh
    cd output
    npm pack
    ```

    `npm pack` собирает пакет и кладёт архив в `output/`, имя архива выводится в конце команды.

6. Публикация:

    ```sh
    NPM_TOKEN=*** sh -c 'npm publish ./<file_name>.tgz --//registry.npmjs.org/:_authToken=$NPM_TOKEN'
    ```

## Breakpoints

По умолчанию адаптивная типографика темы генерируется с breakpoints `screenS` (до 559px), `screenM` (560–959px) и `screenL` (от 960px). Чтобы задать свои, добавь в `.sdds/config.json` поле `breakpoints` и перегенерируй тему (шаг 4):

```json
{
    "breakpoints": [
        { "name": "screenS", "to": 959 },
        { "name": "screenM", "from": 960, "to": 1280 },
        { "name": "screenL", "from": 1281 }
    ]
}
```

-   `name` — `screenS`, `screenM` или `screenL`, в этом порядке; экран можно пропустить.
-   `from` — минимальная ширина, `to` — максимальная, в пикселях, обе включительно; целые неотрицательные числа.
-   У первого экрана указывается только `to`, у последнего — только `from`, у средних — оба, причём `from` не больше `to`.
-   Если экран один, у него нет ни `from`, ни `to`.
