## Как добавить пакет документации для целевого пакета?

Для развертывания нового пакета документации, например для пакета `"@salutejs/plasma-asdk"`, выполните команду в корне проекта:

```bash
npm run scaffold:docs --package="plasma-asdk" --vertical="plasma-themes" --theme="stylesSalute" --url="asdk"
```

#### `--package`

Название пакета для которого создаем документацию.

Например, для команды выше получиться директория - `website/plasma-asdk-docs`

#### `--vertical`

Дизайн вертикаль агрегирующая в себе набор тем.

Например, пакет `plasma-themes` содержит в себе темы для `plasma-{web,b2c}` и `plasma-askd` aka `stylesSalute`.

##### Список доступных вертикалей:

-   plasma-themes
-   sdds-themes

#### `--theme`

Тема которая должна применятся/использоваться.

Например, для:

-   `plasma-asdk`: `stylesSalute__light/__dark`
-   `sdds-serv`: `sdds_serv__dark/__light`

**Примечание:**

-   Название `themes` не консистентны, поэтому нужен аргумент `--theme` чтобы указать, что **именно** использовать;
-   Постфикс `__dark/__light` указывать не нужно;

#### `--url`

То какой url будет на конце, например для команды выше - `plasma.sberdevices.ru/asdk/`

Если не указать будет использовано значение указанное в `--package`.

## FAQ

### Couldn't parse file with handlebars, returning original content

Возникает когда в `Component-Name.template-doc.mdx` встречается код типа: `style={{flexDirection: 'column'}}`.

`{{ }}` являются регулярной частью `Handlebars.js` и в наших шаблонах используются для замены `{{ placeholder }}`.

Чтобы избежать данного warning нужно использовать экранирование `\`.

Например: `style=\{{flexDirection: 'column'}}`

### Как обновить список компонентов в уже имеющейся документации?

Есть отдельная команда - `npm run scaffold:update-components-docs`.

Например, для пакета `sdds-serv`:

```console
npm run scaffold:update-components-docs --vertical="sdds-themes" --package="sdds-serv" --exclude="sheet"
```

Обновит/добавит/синхронизирует список компонентов документации и библиотеки, при этом **исключит** компонент `Sheet`.

**Примечание:**

Аргумент `exclude` принимает перечисление компонентов через запятую: `--exclude="sheet,textarea,etc"`
