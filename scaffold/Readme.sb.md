## Как добавить stories для компонента в целевом пакете?

Например, для пакета `@salutejs/sdds-serv`, выполните команду в корне проекта:

```bash
npm run scaffold:stories:update --packages="sdds-serv" --components="button"
```

## Что будет если не указать аргумент packages?

Тогда скрипт обновит stories для целевого компонента во всех библиотеках.

Список доступных библиотек берется из файла - `meta.js`.

```bash
npm run scaffold:stories:update --components="button"
```

## Примечание

-   аргумент components является обязательным
