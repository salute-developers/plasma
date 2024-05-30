# v1.249.0 (Thu May 30 2024)

### Release Notes

#### Release by 29.05.2024 ([#1222](https://github.com/salute-developers/plasma/pull/1222))

## Components

### Calendar

- добавлен пропс для включения/исключения минимума и максимума диапазона дат
 
feat: add calendar edge dates control (https://github.com/salute-developers/plasma/pull/1203)

### Slider

- добавлен компонент Slider
 
feat(plasma-new-hope): add slider component (https://github.com/salute-developers/plasma/pull/1194)

### Textarea

- изменен `padding` для `label`
 
fix(plasma-*): Fix padding on textarea (https://github.com/salute-developers/plasma/pull/1209)

### Range

- включен в поставку `plasma-{b2c,web} / sdds-serv`
- написаны тесты и документация
 
feat: Add range component (https://github.com/salute-developers/plasma/pull/1208)

### IconButton

- включен в поставку `sdds-serv`
- добавлена документация в `sdds-serv-docs`
 
feat(sdds-serv): add icon button (https://github.com/salute-developers/plasma/pull/1214)

### Tabs

- добавлен корректный проброс `className` в `Tab` и `TabItem`
- поправлена документация для `Tab` и `Segment`

#### ДО:

![image](https://github.com/salute-developers/plasma/assets/40370966/797f897d-95cc-4114-b54a-8629b281b2c7)
![image](https://github.com/salute-developers/plasma/assets/40370966/8a0e6de3-f6cd-4e7b-b87b-a1a26b5dd4e7)

#### ПОСЛЕ:

![image](https://github.com/salute-developers/plasma/assets/40370966/9dd690cc-e8ed-4623-baa0-52e1f22cf71c)
![image](https://github.com/salute-developers/plasma/assets/40370966/0c8bb69e-b2d3-4ae9-aed4-2fd4c4b5bd9b)
 
feat(plasma-new-hope): fix tabs styles (https://github.com/salute-developers/plasma/pull/1220)

### Button

- добавлено отображение `value`
- исправлены внутренние отступы от `contentLeft`, `contentRight`
- дополнены тесты и документация
- исправлены тесты, зависящие от `Button: Notification, Pagination, Toast, Toolbar`
- добавлен токен переопределения цвета `value` в `ButtonGroup`
 
feat: add button value (https://github.com/salute-developers/plasma/pull/1213)


## Tokens

### Tokens

- добавлены токены прозрачности для positive, warning, negative цветов
- добавлены токены с active, hover модификаторами
 
tokens: add surface transparent tokens to sdds (https://github.com/salute-developers/plasma/pull/1206)


## Misc

### Checkbox/Radiobox

-  исправлен types компонентов для библиотек `plasma-asdk`, `sdds-serv` и `caldera-online`  
 
Fix checkbox types (https://github.com/salute-developers/plasma/pull/1217)

---

#### 🚀 Enhancement

- Release by 29.05.2024 [#1222](https://github.com/salute-developers/plasma/pull/1222) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@akhdrv](https://github.com/akhdrv) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.248.0 (Thu May 16 2024)

#### 🚀 Enhancement

- Release by 15.05.2024 [#1205](https://github.com/salute-developers/plasma/pull/1205) ([@renovate[bot]](https://github.com/renovate[bot]) [@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@renovate[bot]](https://github.com/renovate[bot])
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.247.0 (Thu Apr 25 2024)

### Release Notes

#### Release by 24.04.2024 ([#1196](https://github.com/salute-developers/plasma/pull/1196))

## Components

### Tooltip

- исправлено позиционирование стрелочки
- добавлен тест на много-строчный сценарий

#### Before: 

![image](https://github.com/salute-developers/plasma/assets/40370966/230bbda5-2c2f-4628-b5b4-7a7a14ffc2c9)

#### After: 

![image](https://github.com/salute-developers/plasma/assets/40370966/6c142730-0b4b-47de-a64d-1c6ad2c4fc77)

fix(plasma-new-hope): fix tooltip arrow placing (https://github.com/salute-developers/plasma/pull/1171)

### Radiobox

- расширен пример в `stories` с учетом `a11y` возможностей  

plasma-new-hope(radiobox): Improved a11y (https://github.com/salute-developers/plasma/pull/1188)

### Storybook 

- исправлено некорректное поведение свойства `placement`
- исправлено свойство `enableContentLeft` и `enableContentRight` в TextField

feat(plasma-new-hope, b2c, web, sdds): Fix storybook argTypes (https://github.com/salute-developers/plasma/pull/1182)

### Avatar

- добавлен `aria-label`
- расширены примеры с доступностью

plasma-new-hope(avatar): Refactoring + a11y (https://github.com/salute-developers/plasma/pull/1180)

### Chip

- удален лишнее свойство `hasClear` из примера в `story` 
- заменены со старого формата на новый токены в конфигурации (без приставки `--plasma-colors`)
- добавлена недостающие свойство `view=accent`
- обновлены `cypress snapshots` 

fix: remove extra chip prop in stories (https://github.com/salute-developers/plasma/pull/1179)

## Colors

- добавлены файлы фирменной палитры в формате `.json`
- добавлена директория `src` в gitignore, т.к. теперь его содержимое генерируется автоматически на основе `.json`

feat(plasma-color): Add generate color palette from json (https://github.com/salute-developers/plasma/pull/1172)

## Infra

### Audit vulnerabilities

- исправлены все уязвимости в клиентских пакетах (аля `plasma-web`)
- обновлен до `vite@4.5.3`
- обновлен `@babel` и его зависимости до latest 
- заменен `babel-plugin-transform-class-properties` на `@babel/plugin-transform-class-properties` 

### `@salutejs/plasma-sb-utils`

- обновлены `TS` до 4.2.4
- обновлен `@storybook/react` до 7.6.17
- исправлены все уязвимости
- поправлены мелкие ошибки в типах      

plasma-infra(sb-utils): Update dependencies versions (https://github.com/salute-developers/plasma/pull/1178)

---

#### 🚀 Enhancement

- Release by 24.04.2024 [#1196](https://github.com/salute-developers/plasma/pull/1196) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix: audit fix [#1184](https://github.com/salute-developers/plasma/pull/1184) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update deps ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.245.0 (Thu Apr 11 2024)

### Release Notes

#### Release by 10.04.2024 ([#1175](https://github.com/salute-developers/plasma/pull/1175))

## Components

### Dropdown

- добавлена прослойка для dropdown в `b2c` и `web` (работает на старом api и с dropdown из new-hope)

 
feat(plasma-new-hope, b2c, web): Dropdown interlayer (https://github.com/salute-developers/plasma/pull/1104)

### Cell

- добавлен в поставку `plasma-{web,b2c}`

 
feat(new-hope): Add cell (https://github.com/salute-developers/plasma/pull/1148)

### Chip

- поправлена типизация
- компонент добавлен в поставку для `sdds-serv`, включая документацию 

 
feat(plasma-new-hope): fix Chip types (https://github.com/salute-developers/plasma/pull/1155)

### Button

- добавлены токены состояний (active / hover) для конфигов компонента  в библиотеках `@salutejs/plasma-{b2c,web,asdk}`, `@salutejs/sdds-serv`, `@salutejs/caldera-online` .

 
fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update state tokens for `Button` component (https://github.com/salute-developers/plasma/pull/1167)

### Select

- убрана поддержка вложенности
- добавлена прослойка для компонента в `plasma-{b2c,web}` и `sdds-serv` (* работает на старом api и с select из new-hope).
- переделаны тесты и обновлена документация

 
feat(plasma-new-hope, b2c, web, sdds-serv): Select interlayer (https://github.com/salute-developers/plasma/pull/1161)

### TextField

- проведен рефакторинг и редизайн
- обновлены тесты и документация
- добавлен в поставку в sdds-serv

 
feat(plasma-new-hope): TextField redesign (https://github.com/salute-developers/plasma/pull/1160)


## Icons

### iOS

- добавлен конвертор SVG в PNG для iOS app  

 
plasma-icons: Convert SVG to PNG for iOS   (https://github.com/salute-developers/plasma/pull/1163)


## Tokens

### Tokens

* исправлена формула для расчёта `hover / active` состояний
* добавлены новые токены (но в выключенном состоянии) в существующие темы и схемы для библиотек `@salutejs/plasma-tokens`, `@salutejs/data-themes`, `@salutejs/caldera-online-themes`, `@salutejs/sdds-serv-themes`, `@salutejs/plasma-themes`, `@salutejs/flamingo-themes`
*  добавлены недостающие токены для обратной совместимости у библиотек `@salutejs/plasma-tokens-web`, `@salutejs/plasma-tokens-b2c`, `@salutejs/plasma-tokens-b2b`,
* добавлены недостающие токены в темы `plasma_b2c`, `plasma_web`, `sds_engineer` для библиотеки `@salutejs/plasma-new-hope`

 
feat(plasma-tokens,plasma-theme-builder): Add tokens to existed themes (https://github.com/salute-developers/plasma/pull/1165)


## Docs

### Popup

- исправлена ошибка в документации

 
fix(new-hope): Fix popup doc (https://github.com/salute-developers/plasma/pull/1168)


## Misc

### Plasma Theme Builder

* Добавлена генерация hover / active состояний для групп токенов.

 
feat(plasma-theme-builder): Add generate hover / active state for tokens (https://github.com/salute-developers/plasma/pull/1134)

### Pagination

- исправлена ошибка навигации с помощью кнопок `next` \ `pre`

 
fix(new-hope): Edit storybook content (https://github.com/salute-developers/plasma/pull/1154)

### Website icons grid

- исправлен поиск иконок по названию
- исправлен grid для набора иконок 

 
fix(plasma-website): Fix Icons (https://github.com/salute-developers/plasma/pull/1169)

---

#### 🚀 Enhancement

- Release by 10.04.2024 [#1175](https://github.com/salute-developers/plasma/pull/1175) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs) [@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.242.0 (Thu Mar 28 2024)

### Release Notes

#### Release by 27.03.2024 ([#1151](https://github.com/salute-developers/plasma/pull/1151))

## Components

### Progress

- добавлен в библиотеку в `new-hope`
- добавлен в поставку пакетов `plasma-{b2c, web}, sdds-serv`
- написаны тесты и документация

 
feat: Progress redesign refactor (https://github.com/salute-developers/plasma/pull/1126)

### Tooltip

-  добавлены fallback на следующие свойства: isVisible, arrow, animated

 
feat(plasma-new-hope): tooltip old api fallback (https://github.com/salute-developers/plasma/pull/1140)

### Divider

- включен в поставку `plasma-{b2c/web}` и `sdds-serv`
- написаны тесты и документация

 
feat(plasma-new-hope): Divider component (https://github.com/salute-developers/plasma/pull/1132)

### Pagination

- добавлен в поставку клиентских библиотек 

 
feat(new-hope): Pagination (https://github.com/salute-developers/plasma/pull/1107)

### Toolbar

- включили в поставку в `plasma-{b2c/web}` \ `sdds-serv`
- написаны тесты и документация

 
feat(plasma-new-hope): add toolbar component (https://github.com/salute-developers/plasma/pull/1150)


## Icons

### Icons for android

-  Добавлен скрипт генерации иконок под android на основе svg
-  Обновлена инструкция по добавлению иконок
 
plasma-icons: script to generate android icons (https://github.com/salute-developers/plasma/pull/1109)

### Icons publish

- добавлена директория `old` для обратной совместимости  

 
plasma-icons: Add `old` dir for publish (https://github.com/salute-developers/plasma/pull/1149)


## Infra

### Scaffold docs CLI

- добавлен CLI для создание **директории** документации по шаблону
- добавлен CLI для создание **компонента** документации по шаблону

 
plasma-infra: Scaffold docs dir CLI  (https://github.com/salute-developers/plasma/pull/1099)

### Retry  

- добавлен retry для шага `Update package-lock files` для обхода ошибки `ECONNRESET`
- добавлен `workflow` для ручного запуска `Update package-lock files`

 
plasma-infra: Retry failure step (https://github.com/salute-developers/plasma/pull/922)

### Deploy documentations artefacts

- распараллели процесс создания и загрузки артефактов документации
- добавили `marocchino/sticky-pull-request-comment` для приклеивания сообщения к одному комментарию в pr
- добавлена конфигурация: `config-ci.json` 
- удалены неиспользуемые переменные

 
plasma-infra: Refactoring deploy documentations artefacts [PR context]  (https://github.com/salute-developers/plasma/pull/1125)

### Build android icons plugin

- добавлен dispatch события для запуска `build icons` в `plasma-android`

 
plasma-infra: Dispatch build-icons event (https://github.com/salute-developers/plasma/pull/1145)

### Scaffold components docs

- добавлена генерация компонентов по заданному шаблону

 
plasma-infra: Scaffold components docs by template (https://github.com/salute-developers/plasma/pull/1128)


## Docs

### Docs

* Исправлена ошибка примера путём обновления токенов бэграундов в сторибуке для библиотек `plasma-web`, `plasma-b2c`, `plasma-asdk`.

#### До:
<img width="412" alt="Screenshot 2024-03-21 at 12 28 41" src="https://github.com/salute-developers/plasma/assets/26903236/5814e04f-1425-403c-8e20-1151a12063c6" />

#### После:
<img width="412" alt="Screenshot 2024-03-21 at 17 03 31" src="https://github.com/salute-developers/plasma/assets/26903236/259c6397-2e5c-4d82-a2a6-4d6fdcc31e79" />

 
fix(plasma-web,plasma-b2c,plasma-asdk): Replace tokens for background in storybook to new (https://github.com/salute-developers/plasma/pull/1139)


## Misc

### Drawer

- изменили величину измерения высоты на dvh в storybook

 
fix: change height for Drawer stories (https://github.com/salute-developers/plasma/pull/1116)

### Image

- поправлена передача `props` в `Image.stories`

 
fix: fix args for Image stories (https://github.com/salute-developers/plasma/pull/1119)

### Plasma Theme Builder

* произведён рефакторинг методов, которые генерируют токены
* актуализированы базовые токены, которые генерируются сервисом ThemeBuilder
* добавлена новая группа `outline`, используемая в обводках / рамках

 
feat(plasma-theme-builder): Actualize default tokens (https://github.com/salute-developers/plasma/pull/1127)

### Button

-  поправлен размер и отступ фокуса на кнопке

 
feat(plasma-new-hope): fix button focus (https://github.com/salute-developers/plasma/pull/1141)

### Badge

- поправлен токен фона для `transparent-accent` Badge
- поправлен токен цвета текста для `transparent-light`

#### До:

![image](https://github.com/salute-developers/plasma/assets/40370966/67673520-cfe8-4b6d-87eb-f700df308627)
![image](https://github.com/salute-developers/plasma/assets/40370966/aa9fb631-c1b3-4f58-aa0b-4e5a9dc9617c)

#### После:

![image](https://github.com/salute-developers/plasma/assets/40370966/59170271-0a32-4680-ab18-5aa4afde0cef)
![image](https://github.com/salute-developers/plasma/assets/40370966/9fdc8bea-add8-4798-955d-a896d6c32a40)

 
feat: update badge view tokens (https://github.com/salute-developers/plasma/pull/1142)

---

#### 🚀 Enhancement

- Release by 27.03.2024 [#1151](https://github.com/salute-developers/plasma/pull/1151) ([@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@akhdrv](https://github.com/akhdrv) [@eg-zhuravlev](https://github.com/eg-zhuravlev))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@iljs](https://github.com/iljs)
- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Evgeniy Zhuravlev ([@eg-zhuravlev](https://github.com/eg-zhuravlev))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.239.0 (Thu Mar 14 2024)

### Release Notes

#### Release by 13.03.2024 ([#1112](https://github.com/salute-developers/plasma/pull/1112))

## Components

### Calendar

-   добавлено возможность выбора одного дня для `range`

 
feat(new-hope): edit calendar range logic and fix name (https://github.com/salute-developers/plasma/pull/1084)

### TextField

- исправлен ошибка связанная с прозрачностью в `Safari`

 
feat(plasma-new-hope): TextField issue with opacity (https://github.com/salute-developers/plasma/pull/1082)

### Button

- удалены токены `scale` из кнопки и группы кнопок в пакетах `plasma-{b2c, web, sdds-serv}, caldera/-online`
- удалены токены `scale` из `example` для `plasma-new-hope`

 
feat: remove scale tokens from Button & ButtonGroup (https://github.com/salute-developers/plasma/pull/1110)

### Grid

- добавлен в поставку в `plasma-{b2c, web, new-hope}, sdds-serv`
- написаны тесты и обновлена документация

feat(plasma-new-hope): Grid refactor redesign (https://github.com/salute-developers/plasma/pull/1105)

### ButtonBase

-   добавлен базовый компонент для создания `custom` кнопок для библиотек `plasma-{b2c,new-hope}`

 
feat(plasma-new-hope, b2c): ButtonBase (https://github.com/salute-developers/plasma/pull/1080)


## Icons

### SVG

-   добавлен svg формат иконок (не попадают в итоговой билд)

 
feat(plasma-icons): Add svg icons (https://github.com/salute-developers/plasma/pull/1095)

### Icons generation

-  добавлена генерация компонентов иконок на основе svg во время билда
-  удалены компоненты и их assets из git
 
plasma-icons: build-time generate Icon components (https://github.com/salute-developers/plasma/pull/1101)


## Docs

### SDDS SERV DOCS

- добавлена новый пакет документации
 
plasma-docs: Setup `sdds-serv` package docs (https://github.com/salute-developers/plasma/pull/1062)


## Misc

### Tooltip

-   исправлена логика работы classname, теперь все наследуется корректно

 
fix(new-hope): remove wrapper from popover (https://github.com/salute-developers/plasma/pull/1083)

### Pickers

-  исправлена ошибка UI в документации 

 
fix(ui): fix pickers documentation bug with overflow (https://github.com/salute-developers/plasma/pull/1089)

---

#### 🚀 Enhancement

- Release by 13.03.2024 [#1112](https://github.com/salute-developers/plasma/pull/1112) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704) [@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-03-13 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(ui): fix pickers documentation bug with overflow [#1089](https://github.com/salute-developers/plasma/pull/1089) ([@iljs](https://github.com/iljs))
- chore(storybook): bump storybook to "@latest" [#1096](https://github.com/salute-developers/plasma/pull/1096) ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.237.1 (Tue Mar 05 2024)

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.237.0 (Fri Mar 01 2024)

### Release Notes

#### Release by 29.02.2024 ([#1079](https://github.com/salute-developers/plasma/pull/1079))

## Components

### Drawer

- добавлены компоненты `Drawer` и `Panel`
- включен в поставку `plasma-{b2c/web/sdds-serv}`
- для компонента `Drawer` написаны тесты

feat(plasma-new-hope): add Drawer (https://github.com/salute-developers/plasma/pull/1068)

### Indicator

-  добавлены тесты и документация
-  добавлен в поставку для библиотек: `plasma-{web,b2c}`
-  интегрирован в компонент `Avatar`

 
feat(plasma-new-hope, web, b2c): Indicator component (https://github.com/salute-developers/plasma/pull/1067)

### ButtonGroup

- добавлен новый компонент и тесты с документацией
- исправлена структура файлов для `Spiner`
- добавлен компонент `Button` в поставку в `plasma-{b2c,web}`
- обновлена документация для `Button`
- обновлены тесты зависящие от `Button`

 
feat(plasma-new-hope): add button group component (https://github.com/salute-developers/plasma/pull/1061)

### TextField [Note]

TextField перевезен на новую Архитектуру, могут быть незначительные отличия от текущего поведeния.

### Рефакторинг TextField

- поведение анимация `label` внутри поля стала запускаться одинаковым между `b2c` и `web`. Запуск на фокусе, а не на начале редактирования.
- при показе `label` внутри поля больше не учитывается `placeholder`

### TextField [plasma-b2c]

- исправлено поведение для цвет `placeholder`, больше не зависит от наличия `leftHelper`

 
feat(plasma-new-hope): TextField (https://github.com/salute-developers/plasma/pull/949)


## Infra

### Upload assets

- добавлена возможность указать пакет/релиз к которому нужно прикрепить assets  

 
plasma-infra: Upload assets for target package(-s) (https://github.com/salute-developers/plasma/pull/1054)

### plasma-temple
- удалены все упоминания о пакете `plasma-temple` из текущего репозитория
 
Remove `plasma-temple` from repo [Part 1] (https://github.com/salute-developers/plasma/pull/1048)


## Tokens

* Добавлен пакет `@salutejs/data-themes`, который содержит все созданные json-схемы, а также набор методов, позволяющие сгенерировать темы для web-платформы в формате js объектов для `styled-component` и css стилей для подключения с помощью нативных способов.

* В пакетах с наборами тем были объеденены токены с цветами и типографикой. 

* Так же если необходимы токены цвета или типографики отдельно, забрать их можно по пути `@salutejs/<vertical-name>-themes/tokens` для общих токенов и `@salutejs/<vertical-name>-themes/tokens/<theme-name>` для конкретных тем. 

* Добавлена новые пакеты с наборами тем для следующих дизайн вертикаль:
  * `@salutejs/plasma-themes` - для вертикали `Plasma` - пока нигде не используется;
  * `@salutejs/sdds-themes` - для вертикали `SDDS` - используется с библиотекой `@salutejs/sdds-serv`;
  * `@salutejs/cladera-online-themes` - для вертикали `Caldera Online`  - используется с библиотеками `@salutejs/cladera-online` и `@salutejs/cladera`;
  * `@salutejs/flamingo-themes` - для вертикали `Flamingo` - пока нигде не используется;

### New-hope

* Удалена зависимость `@salutejs/plasma-tokens` из пакета.

### SDDS-Serv

* Обновлена документация со способом установки и подключением;
* Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/sdds-themes`;
* Обновлён способ подключение темы в storybook;
* Исправлена сторис LiveDemo в компоненте `Toast`;
* Заменены токены цветов в конфигах компонента `Segment` на актуальные

### Caldera / Caldera Online

* Обновлена документация со способом установки и подключением;
* Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/caldera-online-themes`;
* Обновлён способ подключение темы в storybook;
* Исправлена сторис LiveDemo в компоненте `Toast`;
* Заменены токены цветов в конфигах компонента `Segment` на актуальные

 
Add new tokens architecture (https://github.com/salute-developers/plasma/pull/1074)


## Docs

### Сontributing Typos

- исправлены опечатки  в документации  
- добавлен параграф об обязательном наличие локально browser `chromium`

 
plasma-docs: Fix cypress cli commands (https://github.com/salute-developers/plasma/pull/1058)


## Misc

### SDDS Android

- добавлен `SDDS Android` проект, включающий: 

  -   Theme Builder Gradle Plugin
  -   SDDS Sandbox App
  -   UIKit
  -   UIKit Compose
  -   файл с лицензией и `README.md` в каждый модуль

 
chore[sdds-android]: SDDS Android project was created. (https://github.com/salute-developers/plasma/pull/1045)

### CI/CD Pipeline [SDDS Android]

- Project build system migration to composite builds was made to support multiproject structure. 
- Code quality check workflow was created. 
- Merge report tasks were added. 
- Codeowners file was modified.

 
chore[sdds-android, cicd]: code quality check workflow (https://github.com/salute-developers/plasma/pull/1070)

---

#### 🚀 Enhancement

- Release by 29.02.2024 [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike) [@malilex](https://github.com/malilex) [@shuga2704](https://github.com/shuga2704) [@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump manual package-locks [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Alexander Malishev ([@malilex](https://github.com/malilex))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.233.0 (Thu Feb 15 2024)

### Release Notes

#### Release by 14.02.2024 ([#1047](https://github.com/salute-developers/plasma/pull/1047))

## Components

### SSRProvider

- SSRProvider перенесен в библиотеку plasma-new-hope
- добавлен в поставку b2c/web/asdk
- из `plasma-asdk` удалена plasma-core зависимость

 
feat(plasma-new-hope): add ssr provider component (https://github.com/salute-developers/plasma/pull/1021)

### Calendar

- добавлено новое свойство `onChangeStartOfRange` в библиотеки `plasma-{web,b2c}`

### After 

<img width="600" alt="prop onChangeStartOfRange" src="https://github.com/salute-developers/plasma/assets/2895992/a2e01d6e-01f1-4041-b57f-57bb7d3de54e" />

 
plasma-web: Add `onChangeStartOfRange` prop into Calendar (https://github.com/salute-developers/plasma/pull/1014)

### Overlay

- добавлен в новой архитектуре
- добавлен в поставку для `plasma-{b2c/web}`
- написаны тесты и документация
- интегрирован в компоненты `Toast`, `Modal`

 
feat(plasma-new-hope/web/b2c): overlay component (https://github.com/salute-developers/plasma/pull/1033)

### Select

- Обновлены зависимости у callback onChangeValue, который вызывался при выборе элемента в `multiselect` режиме для библиотеки `@salutejs/plasma-hope`

 
fix(plasma-hope): Add value deps for `Select` component with multiselect mode (https://github.com/salute-developers/plasma/pull/1040)

### Tabs

-   выполнен редизайн компонента `Tabs`
-   компонент добавлен в `plasma-web/b2c` в новой архитектуре
-   добавлены новые свойства для `TabItem`
-   `TabsController` теперь deprecated.  Для подключения клавиатурной навигации необходимо дополнительно прокинуть свойства `index, itemIndex, onIndexChange`.

 
feat(plasma-web, plasma-b2c): Tabs refactor and redesign (https://github.com/salute-developers/plasma/pull/983)

### Avatar & AvatarGroup

-   Упрощен функционал аватара
-   Avatar и AvatarGroup были добавлены в web, b2c

 
feat(plasma-new-hope, plasma-web, plasma-b2c): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/1036)

### Combobox

- добавлен компонент `Combobox` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web, а также в `@salutejs/plasma-b2c` и `@salutejs/plasma-web`

single

![image](https://github.com/salute-developers/plasma/assets/26903236/9178c72d-15ca-4dc4-b722-cc32956a6820)

multiple 

![image](https://github.com/salute-developers/plasma/assets/26903236/972c419a-25f2-4ddc-9afe-9e59785e19d8)
  
 
feat(plasma-new-hope): Add `Combobox` component (https://github.com/salute-developers/plasma/pull/1032)


## Icons

-   поправлен `tree-shaking` пакета иконок
-   компонент `Icon` теперь **deprecated**

 
plasma-icons: fix tree-shaking (https://github.com/salute-developers/plasma/pull/1031)

## Fonts

- обновлены шрифты SBSans Display для CDN


## Infra

### Plasma-web-docs

- обновлен пакет `docusaurus` и все что с ним связано до `@latest` версии
- исправлены **все** уязвимости в пакете `plasma-web-docs`

 
plasma-infra: Bump `Docusaurus` to latest [plasma-web-docs] (https://github.com/salute-developers/plasma/pull/1025)

### Plasma-ui-docs

- обновлен пакет `docusaurus` и все что с ним связано до `@latest` версии
- исправлены **все** уязвимости в пакете `plasma-ui-docs`

 
plasma-infra: Bump `Docusaurus` to latest [plasma-ui-docs] (https://github.com/salute-developers/plasma/pull/1026)

### DEV Stage 

- добавлен dev stage для возможности сделать deploy dev branch. Нужен для QA     

 
plasma-infra: Setup s3 DEV stage – manual run (https://github.com/salute-developers/plasma/pull/1029)

### Fonts

- обновлены шрифты для документации, storybook , тестов

 
chore: update sb fonts (https://github.com/salute-developers/plasma/pull/1041)


## Misc

### Сборка без `styled-components`

- добавили возможность использовать `plasma-{web,b2c}`  без `styled-components`

Пример использования:

```js
import { TextArea } from @salutejs/plasma-web/css;
```

 
plasma-web/plasma-b2c: Добавлена сборка без styled-components (https://github.com/salute-developers/plasma/pull/942)

### SDDS SRVC

- добавлена библиотека sdds-srvc
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, Modal, Popup, Radiobox, Segment, Spinner, Switch

 
feat(sdds-srvc): add sdds srvc package (https://github.com/salute-developers/plasma/pull/1023)

### Caldera

- добавлена библиотека Caldera
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, ModalBase, PopupBase, Radiobox, Segment, Spinner, Switch

 
feat(caldera): add Caldera package (https://github.com/salute-developers/plasma/pull/990)

### Caldera-online

- добавлена библиотека Caldera-online
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, ModalBase, PopupBase, Radiobox, Segment, Spinner, Switch

 
feat(caldera): add caldera online package (https://github.com/salute-developers/plasma/pull/1012)

---

#### 🚀 Enhancement

- Release by 14.02.2024 [#1047](https://github.com/salute-developers/plasma/pull/1047) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yeti-or](https://github.com/Yeti-or) [@luizasok](https://github.com/luizasok) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update snapshots [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: update fonts for docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: update fonts for storybook ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-web, plasma-b2c): height, arrows design fixes ([@kayman233](https://github.com/kayman233))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.230.0 (Thu Feb 01 2024)

### Release Notes

#### Release by 31.01.2024 ([#1020](https://github.com/salute-developers/plasma/pull/1020))

## Components

### Modal

-   поправлена генерация id для `Modal, Popup`
-   добавлены тесты для `Modal, Popup`
 
plasma-new-hope: fix id generation for Modal, Popup (https://github.com/salute-developers/plasma/pull/1001)

### Avatar и Avatar Group

- добавлены компоненты Avatar и AvatarGroup
- Временно добавлен полифил `focus-visible` в linaria.tsx

 
feat(plasma-new-hope): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/962)

### Select

- добавлен компонент `Select` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web
- добавлена клавиатурная навигация со следующими комбинациями:
    -   Tab - переход на таргет (кнопку)
    -   Shift + tab - выход с него (теряем фокус)
    -   Пробел / стрелка вверх / стрелка вниз / enter - открыть выпадающий список и переместиться на первый элемент
    -   Стрелки вверх / вниз ходим по элементам 
    -   Пробел / enter - выбираем элемент, закрываем выпадающий список и переходим фокусом снова на таргет (кнопку)
    -   Если мы ходим по селекту и нажимаем Tab - выпадающий список закрывается и теряем фокус
    -   Если мы ходим по селекту и нажимаем Escape - выпадающий список закрывается и фокусом остаёмся на таргете
    -   В мультиселекте тоже самое кроме закрытия выпадающего списка при выборе элемента
    -   При активном состоянии у таргета, нажимаем стрелку влево / вправо - попадаем на первый чип
    -   Когда находимся на первом чипе, нажимаем стрелку влево / вправо - переходим по чипам
    -   Нажимаем backspace - удаляем выбранный чип и переходим на предыдущий
    -   Если удалили последний чип, то фокусируемся на таргете
    -   Если находимся в выборе элемента из выпадающего списка и нажимаем стрелку влево / вправо - попадаем на самый последний чип
    -   Если находимся в режиме выбора элемента и нажимаем стрелку вниз / вверх находясь на последнем / первом элементе, то перескакиваем в начало / в конец

### Icons

- добавлены новые иконки и изменена структура файлов старых в библиотеку `@salutejs/plasma-new-hope`

### Button

- добавлены токены для компонента `Button`, регулирующие высоту и scale при hover и active состояниях #706 
- исправлен баг, при котором у компонента `Button` будет отсутствовать бэкграунд в состоянии disabled и при hover'е

### Checkbox, Radiobox

- добавлены токены для компонент `Checkbox`, `Radiobox`, отвечающие за отступы

### Chip

- добавлен токен для компонента `Chip`, отвечающий за цвет иконки закрытия

### Dropdown

- добавлена поддержка react-компонент в props `contentLeft` и `contentRight`
- убрано свойство isNested, т.к. теперь можно вкладывать Dropdown друг в друга без него

 
feat(plasma-new-hope): Add `Select` component (https://github.com/salute-developers/plasma/pull/956)

### Toast

- добавлен компонент Toast в новой архитектуре
- добавлен в поставку в b2c/web
- обновлены тесты
- обновлена документация

 
feat(plasma-new-hope/web/b2c): toast refactor & redesign (https://github.com/salute-developers/plasma/pull/1010)

### TextArea

- добавлена поддержка переноса строки для свойства `placeholder`;
- исправлено поведение компонента при использовании свойств `defaultValue` и `placeholder`.

 
fix(plasma-new-hope): Fixes for `TextArea` component (https://github.com/salute-developers/plasma/pull/1017)


## Icons

### Hotfix

-   поправлена публикация пакета со всем содержимым билда

 
fix(plasma-icons): fix package publish (https://github.com/salute-developers/plasma/pull/989)


## Infra

### Workflow for `dev` branch

- добавлен отдельный workflow для **безусловной** сборки документация и storybook на основе dev ветки 

 
plasma-infra(documentation): Add documentation workflow for dev branch (https://github.com/salute-developers/plasma/pull/996)

### Коллаборативный прогон [Perftool]

- добавлен коллаборативный прогон (прогон одновременно двух веток в рамках одного процесса)  

 
ci: use perftool collaborative mode (https://github.com/salute-developers/plasma/pull/991)

### Override `lerna ls`

- переопределили логику `ignoreChanges` для команды `lerna ls` чтобы изменения файлов `*.component-test.tsx` тоже учитывалось      

 
plasma-infra: Override `lerna ls` config (https://github.com/salute-developers/plasma/pull/995)

### Mattermost notifications

- добавлено уведомление для упавшего процесса публикации релиз кандидата 

 
plasma-infra: Add notification when publish failed (https://github.com/salute-developers/plasma/pull/935)

### Release pull request 

- добавлен выбор ветки для создания release pull request   

 
plasma-infra: Refactoring release pull request workflow  (https://github.com/salute-developers/plasma/pull/1007)

### Versionate docs

- вынесли этот процесс в отдельный, от публикация релиза, workflow.  

 
plasma-infra: Move the `versionate_docs` job to a separate workflow (https://github.com/salute-developers/plasma/pull/1006)

### Perftool

- убиран verbose loglevel в `perftool`

 
Remove perftool max log verbosity (https://github.com/salute-developers/plasma/pull/1004)


## Misc

### Storybook

-   поправлено отображение примера Popup в storybook

 
chore: fix Popup storybook example (https://github.com/salute-developers/plasma/pull/997)

---

#### 🚀 Enhancement

- Release by 31.01.2024 [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@luizasok](https://github.com/luizasok) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv) [@nikewht](https://github.com/nikewht) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-ui): remove symlink on Toast tests ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-ui): fix Badge tests ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-01-31 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: closed img tag ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.228.1 (Fri Jan 19 2024)

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- chore: closed img tag [no ci] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.228.0 (Thu Jan 18 2024)

### Release Notes

#### Release by 18.01.2024 ([#981](https://github.com/salute-developers/plasma/pull/981))

## Components

### Carousel

-   добавлен пропс `scrollSnapStop` в `Carousel`

feat(plasma-core): Add new prop (scrollSnapStop) to the Carousel component (https://github.com/salute-developers/plasma/pull/940)

### Skeleton

-   добавлен компонент в новой архитектуре
-   включен в поставку b2c/web
-   удален из plasma-hope
-   написаны тесты
-   поправлен компонент Button для использования в styled

feat(plasma-new-hope/b2c/web): add skeleton with new architecture (https://github.com/salute-developers/plasma/pull/954)

### Skeleton

-   добавлены размеры под новую типографику

feat(plasma-b2c/web): add skeleton new typography sizes (https://github.com/salute-developers/plasma/pull/960)

### Header

-   добавлен prop, который позволяет применять mediaQuery для S-viewport по условию
-   добавлен тест на данный кейс

feat(plasma-ui): add property to show/hide subtitle on S viewport (https://github.com/salute-developers/plasma/pull/958)

### Popover arrow

-   Поправлено отображение `Popover arrow` в Safari, Firefox

fix(plasma-web): fix Popover arrow in Safari, Firefox (https://github.com/salute-developers/plasma/pull/963)

### Image

-   добавлен в поставку `plasma-{b2c, web}`
-   добавлен UI тесты
-   удален из `plasma-hope`

feat(plasma-new-hope/web/b2c): Image refactor & redesign (https://github.com/salute-developers/plasma/pull/968)

### Badge

-   добавлен в поставку `plasma-{b2c,web,new-hope}`
-   дополнены тесты

feat(plasma-new-hope/web/b2c): Badge refactor & redesign (https://github.com/salute-developers/plasma/pull/964)

### Counter

-   добавлен в поставку `plasma-{b2c,web,new-hope}`
-   написаны тесты и документация

feat(plasma-new-hope/web/b2c): Counter component (https://github.com/salute-developers/plasma/pull/965)

## Icons

-   добавлены **новые** иконки размера 24x24, 1025 штук
-   добавлены **новые** категории иконок в разделе icons на сайте

feat(plasma-icons): Add new 24x24 icons (https://github.com/salute-developers/plasma/pull/955)

## Infra

### Perftool

-   обновление версии @salutejs/perftool@0.24

Update perftool (https://github.com/salute-developers/plasma/pull/932)

### @Auto-it CLI

-   добавлена возможность прокинуть опции/флаги для запуска - **auto shipit**;
-   выключили генерацию changelog для pubslish: canary, RC;

plasma-infra: Pass cli options for "@auto-it" (https://github.com/salute-developers/plasma/pull/890)

### Changelog workflow

-   добавлена новая категория `Bugs`
-   экранирование спец символов

plasma-infra: Improve changelog workflow (https://github.com/salute-developers/plasma/pull/967)

## Tokens

### Tokens naming

-   изменена нотация с `camelCase` на `kebab-case` для старых токенов цветов и типографики

Было:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 54" src="https://github.com/salute-developers/plasma/assets/26903236/b83f776b-e4f9-43e1-9506-bff3d25f7e71" />

Стало:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 17" src="https://github.com/salute-developers/plasma/assets/26903236/10298375-1a54-4dd4-8fe3-8af74c3e40b1" />

feat(plasma-tokens-utils): Update formatting tokens name from camelCase to kebab-case (https://github.com/salute-developers/plasma/pull/971)

## Bugs

### Calendar

-   добавлен `ref` в `forwardRef` вторым аргументом

feat(plasma-new-hope): fix CalendarDouble ref (https://github.com/salute-developers/plasma/pull/959)

### Carousel

-   решен баг с пролистыванием (onDragScroll) в accessible mode - mobile & desktop.
-   control panel в карусели работает корректно (можно выбрать scrollAlign).

fix(plasma-hope/plasma-web): Turn onDragScroll off by default in accessibility mode in Carousel. Fix storybook control panel in it. (https://github.com/salute-developers/plasma/pull/957)

### Spinner

-   исправлено отображение компонента `Spinner` при размере 8px

fix(plasma-new-hope): Fix size for `Spinner` component (https://github.com/salute-developers/plasma/pull/966)

## Misc

### Typography

-   root для типографики вынесен в общий компонент
-   className, style теперь явно задаются в компоненте
-   исправлены конфиги для asdk поставки

feat(plasma-new-hope/b2c/web): redefining classnames for typography (https://github.com/salute-developers/plasma/pull/947)

---

#### 🚀 Enhancement

-   Release by 18.01.2024 [#981](https://github.com/salute-developers/plasma/pull/981) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-ui): add property to show/hide subtitle on S viewport [#958](https://github.com/salute-developers/plasma/pull/958) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.224.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

-   Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
-   feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(vite): bump to 4.5.1 ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 5

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.223.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

-   Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
-   feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore(plasma-ui): bump "default-browser-id" to 2.0.0 [#875](https://github.com/salute-developers/plasma/pull/875) ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): bump "vite" to 4.5.0 ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): npm audit fix vulnerabilities ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): delete unnecessary dep: "react-scripts" [#868](https://github.com/salute-developers/plasma/pull/868) ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): delete unnecessary sync data for about/tokens mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): refactoring environment mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): refactoring tokens mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): refactoring hocs mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): refactoring utils mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): refactoring device theme provider mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): refactoring theming mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): refactoring mixins mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): refactoring about mdx ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): bump storybook to @latest (7.5.3) ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): delete unnecessary dep: "@storybook/client-logger" ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): migrate "{Preview,Main}.ts" after bump SB 7 ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): add decorators: Theme, Toast, Docs ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): delete unnecessary dep: "@storybook/preset-create-react-app" ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): migrate to CSF 3 [Spacing](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Colors](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Typography](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Toast](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [TextField](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [TextBox](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [TextArea](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Tabs](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Switch](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Stepper](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Spinner](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Slider](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Skeleton](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Sheet](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Radiobox](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [ProductCard](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Price](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Pickers](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [PaginationDots](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Marquee](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [MarkedList](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Image](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Icon](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Header](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Grid](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Confirm](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Checkbox](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Cell](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Carousel](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Card](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Button](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-ui): migrate to CSF 3 [Badge](<[@Yakutoc](https://github.com/Yakutoc)>)
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.221.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

-   Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
-   feat: bump TS to 4.2.4 ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): add "@storybook/client-logger" ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.218.0 (Thu Nov 02 2023)

#### 🚀 Enhancement

-   Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
-   feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-new-hope): new classes API for Popup [#819](https://github.com/salute-developers/plasma/pull/819) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-ui, plasma-web, plasma-b2c): new animation API for PopupBase/ModalBase ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

-   [@kayman233](https://github.com/kayman233)
-   [@nikewht](https://github.com/nikewht)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.216.0 (Thu Oct 19 2023)

#### 🚀 Enhancement

-   Release 19.10.2023 [#815](https://github.com/salute-developers/plasma/pull/815) ([@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Yakutoc](https://github.com/Yakutoc) nikita.belyanskiy@south.rt.ru [@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-core): animation with other API ([@kayman233](https://github.com/kayman233))
-   feat(plasma-ui): add placement for Confirm ([@kayman233](https://github.com/kayman233))
-   feat(plasma-ui): add Popover, PopupBase, ModalBase to plasma-ui ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   fix(plasma-ui): PopupProvider inside Confirm added ([@kayman233](https://github.com/kayman233))
-   fix(plasma-core, plasma-ui): remove withAnimation from PopupBase ([@kayman233](https://github.com/kayman233))
-   fix(plasma-core, plasma-ui): minor refactoring and types fix ([@kayman233](https://github.com/kayman233))
-   feat(plasma-core, plasma-ui): add animation for PopupBase etc ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): change sheet-handler color ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### Authors: 6

-   [@kayman233](https://github.com/kayman233)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.215.0 (Fri Sep 29 2023)

#### 🚀 Enhancement

-   Update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-ui): add labels for time pickers [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): add prop "buttonsDirection" [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix: Bump package-lock versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update version [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.209.0 (Thu Sep 14 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): processing new line for title, subtitle [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.206.0 (Mon Sep 04 2023)

#### 🐛 Bug Fix

-   chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.202.0 (Fri Aug 18 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): add prop "extraContent" [Confirm][#660](https://github.com/salute-developers/plasma/pull/660) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   fix(plasma-ui): Update behavior scroll in `Sheet` component [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.201.0 (Thu Aug 03 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): Add some threshold fallbacks [#630](https://github.com/salute-developers/plasma/pull/630) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   fix(plasma-ui): Fix hide behavior in `Sheet` component on slow scroll [#635](https://github.com/salute-developers/plasma/pull/635) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-ui): fix scroll TimePicker on android [#619](https://github.com/salute-developers/plasma/pull/619) ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

-   Merge branch 'dev' ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.200.0 (Thu Jul 13 2023)

#### 🚀 Enhancement

-   feat(plasma-core): custom width/height for TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   fix(plasma-ui): Fix scrollable behavior for `Sheet` component [#620](https://github.com/salute-developers/plasma/pull/620) ([@neretin-trike](https://github.com/neretin-trike))
-   chore(storybook): avoid OpenSSL v3.0 breaking changes [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-core): new height/width types in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-core): fix cols/rows usage in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 4

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.199.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

-   chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.197.0 (Thu Jun 01 2023)

#### 🐛 Bug Fix

-   chore: use "paths" property in tsconfig.json [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: [packages] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

-   test(plasma-ui): add more performance tests, exclude perftests from tsconfig & type coverage ([@Troff8](https://github.com/Troff8))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Troff ([@Troff8](https://github.com/Troff8))

---

# v1.196.0 (Mon May 22 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

-   fix(plasma-web, plasma-b2c, plasma-ui): fix single/multiple lines in Checkbox/Radiobox ([@kayman233](https://github.com/kayman233))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.194.0 (Fri May 19 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.193.0 (Fri May 19 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.191.1 (Wed May 17 2023)

#### 🐛 Bug Fix

-   fix(plasma-ui): omit 'onResize', 'onResizeCapture', 'nonce' properties for ActionButtonProps [#506](https://github.com/salute-developers/plasma/pull/506) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.189.0 (Thu Apr 27 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): trailing symbols snapshots/test [TextField][#484](https://github.com/salute-developers/plasma/pull/484) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): handling trailing symbols ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.188.0 (Thu Apr 27 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): Add size tokens to `Button` component (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.187.0 (Wed Apr 26 2023)

#### 🐛 Bug Fix

-   fix(plasma-ui): fix jest config ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.186.1 (Tue Apr 25 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.186.0 (Mon Apr 24 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.184.0 (Thu Apr 20 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): Add new stories with scroll content and button [#482](https://github.com/salute-developers/plasma/pull/482) (neretinartem@Neretins-MBP.netis)
-   feat(plasma-ui): Add swipe for whole sheet (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.182.0 (Wed Apr 12 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): Add `collectPackageInfo` and custom babel config (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

-   ci: perftool for whole repo, fail on bad changes [#418](https://github.com/salute-developers/plasma/pull/418) ([@akhdrv](https://github.com/akhdrv))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

-   refactor(plasma-ui,plasma-core,plasma-hope): Refactor some components for clean re-export (neretinartem@Neretins-MBP.netis)

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.181.1 (Mon Apr 10 2023)

#### 🐛 Bug Fix

-   fix(plasma-ui): re-export "Image" from plasma-core ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.181.0 (Thu Apr 06 2023)

#### 🐛 Bug Fix

-   fix(plasma-ui): add offScrollSnapAlign prop ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.180.1 (Tue Apr 04 2023)

#### 🐛 Bug Fix

-   chore(docs): added CarouselLite docs and examples [#456](https://github.com/salute-developers/plasma/pull/456) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.178.1 (Wed Mar 22 2023)

#### 🐛 Bug Fix

-   fix(plasma-ui): omit 'onResize', 'onResizeCapture', 'nonce' in HeaderLogoProps [#434](https://github.com/salute-developers/plasma/pull/434) ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-ui): Sheet: fix storybook viewport [#433](https://github.com/salute-developers/plasma/pull/433) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.178.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

-   fix(plasma-\*): Fix some types by es-lint rules ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-ui): Remove storybook docs ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.177.0 (Fri Mar 17 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.176.0 (Thu Mar 16 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): Replace builder for storybook to Vite [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.174.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

-   feat(plasma-\*): Rename eslint rule and add temp rules [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-\*): Bump react-script version to 4.0.3 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasm-\*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.173.2 (Mon Mar 13 2023)

#### 🐛 Bug Fix

-   fix(plasma-ui): Remove storybook-addon-performance [#406](https://github.com/salute-developers/plasma/pull/406) ([@neretin-trike](https://github.com/neretin-trike))
-   ci: update perftool [#401](https://github.com/salute-developers/plasma/pull/401) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 2

-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.173.0 (Mon Mar 06 2023)

#### 🐛 Bug Fix

-   build(plasma-hope): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
-   build(plasma-ui): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.172.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): add cypress test symlink [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): re-export slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.171.0 (Mon Feb 20 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.170.0 (Fri Feb 17 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.169.1 (Thu Feb 16 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.169.0 (Wed Feb 15 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): add offset prop in storybook [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.168.1 (Wed Feb 15 2023)

#### 🐛 Bug Fix

-   fix(plasma-ui): Resolve "Importing from @storybook/addon-docs/blocks is deprecated" [#344](https://github.com/salute-developers/plasma/pull/344) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.168.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): Add InSpacingDecorator in stories [#335](https://github.com/salute-developers/plasma/pull/335) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-ui): Fix control.options warning in storybook [#335](https://github.com/salute-developers/plasma/pull/335) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(palsma-ui): Remove stories.mdx from components [#335](https://github.com/salute-developers/plasma/pull/335) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   feat(plasma-ui,plasma-temple): Solve warning problems in storyboook [#335](https://github.com/salute-developers/plasma/pull/335) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.167.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

-   feat: Update using title in toolBar instead of name in preview.js [#330](https://github.com/salute-developers/plasma/pull/330) ([@neretin-trike](https://github.com/neretin-trike))
-   feat: Bump storybook version to 6.5 [#330](https://github.com/salute-developers/plasma/pull/330) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.166.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

-   feat(plasma-\*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.165.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): add onHide action in storybook [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(plasma-ui): update perftool and config [#328](https://github.com/salute-developers/plasma/pull/328) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# v1.164.0 (Fri Feb 10 2023)

#### 🚀 Enhancement

-   feat(plasma-\*): Add .npmignore and remove file field for test files [#322](https://github.com/salute-developers/plasma/pull/322) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.163.0 (Wed Feb 08 2023)

#### 🐛 Bug Fix

-   feat(plasma-ui,plasma-b2c): Add breakWord props for storybook preview [#310](https://github.com/salute-developers/plasma/pull/310) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-typo,plasma-ui): Add breakWord props for global style root [#310](https://github.com/salute-developers/plasma/pull/310) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.162.0 (Thu Feb 02 2023)

#### 🚀 Enhancement

-   feat(plasma-\*): Remove source maps from bundles [#309](https://github.com/salute-developers/plasma/pull/309) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   chore(plasma-ui): enable preview source code [#308](https://github.com/salute-developers/plasma/pull/308) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.161.0 (Wed Feb 01 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): add onSearch event [#294](https://github.com/salute-developers/plasma/pull/294) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.160.0 (Wed Feb 01 2023)

#### 🐛 Bug Fix

-   fix(plasma-ui): add default return value [#304](https://github.com/salute-developers/plasma/pull/304) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.159.0 (Wed Jan 25 2023)

#### 🚀 Enhancement

-   feat(plasma-ui): use attrs in Button, add spatial class in Picker [#285](https://github.com/salute-developers/plasma/pull/285) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   feat(plasma-ui): add support of @salutejs/spatial, fix context memoization in Tabs [#285](https://github.com/salute-developers/plasma/pull/285) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### 🐛 Bug Fix

-   fix(plasma-ui): helpers => utils [#285](https://github.com/salute-developers/plasma/pull/285) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.158.1 (Wed Jan 25 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.158.0 (Wed Jan 25 2023)

#### 🚀 Enhancement

-   chore(plasma-ui): update perftool config [#286](https://github.com/salute-developers/plasma/pull/286) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# v1.157.0 (Tue Jan 24 2023)

#### 🐛 Bug Fix

-   chore(plasma-ui): add Stepper and Tabs perftests [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
-   chore(plasma-ui): add ProductCard perftest [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
-   chore(plasma-ui): add Carousel perftest [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
-   chore(plasma-ui): change perftest retries, add Card perftest [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
-   chore(plasma-ui): delete performance addon reports [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# v1.156.0 (Thu Jan 19 2023)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   ci: improve ts-coverage report [#282](https://github.com/salute-developers/plasma/pull/282) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.154.1 (Wed Jan 11 2023)

#### 🐛 Bug Fix

-   chore(plasma-ui): update perftool script, config [#274](https://github.com/salute-developers/plasma/pull/274) ([@akhdrv](https://github.com/akhdrv))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# v1.154.0 (Mon Dec 26 2022)

#### 🚀 Enhancement

-   chore(plasma-ui): add perftool to deps [#268](https://github.com/salute-developers/plasma/pull/268) ([@akhdrv](https://github.com/akhdrv))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# v1.153.0 (Mon Dec 26 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.151.1 (Wed Dec 21 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): hidden unnecessary pseudo-placeholder [#271](https://github.com/salute-developers/plasma/pull/271) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.150.0 (Wed Dec 14 2022)

#### 🐛 Bug Fix

-   fix(plasma-core): Toast hiding with react-18 [#261](https://github.com/salute-developers/plasma/pull/261) ([@Yeti-or](https://github.com/Yeti-or))
-   Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

-   Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.148.0 (Wed Dec 07 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): update sb-addon-performance version fixing measures and adding React 18 support [#249](https://github.com/salute-developers/plasma/pull/249) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# v1.147.5 (Fri Dec 02 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): hide controls when disabled/isSingleItem [#245](https://github.com/salute-developers/plasma/pull/245) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.147.3 (Wed Nov 30 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): fix using sb-addon-performance usages for future storybook versions [#248](https://github.com/salute-developers/plasma/pull/248) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# v1.147.2 (Thu Nov 24 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): improve type-coverage [#234](https://github.com/salute-developers/plasma/pull/234) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.147.1 (Thu Nov 24 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.147.0 (Thu Nov 24 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): [cypress] update tests [#229](https://github.com/salute-developers/plasma/pull/229) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): processing price periodicity [#229](https://github.com/salute-developers/plasma/pull/229) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.146.1 (Thu Nov 24 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.146.0 (Wed Nov 23 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.145.0 (Thu Nov 17 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): processing price periodicity [#220](https://github.com/salute-developers/plasma/pull/220) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.143.4 (Wed Nov 09 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.143.2 (Thu Nov 03 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): fix Pickers for React 18 [#207](https://github.com/salute-developers/plasma/pull/207) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# v1.143.1 (Thu Nov 03 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Increase area for touch in `Sheet` component [#208](https://github.com/salute-developers/plasma/pull/208) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.143.0 (Thu Nov 03 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Add ref for `TabItem` component [#209](https://github.com/salute-developers/plasma/pull/209) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.141.1 (Mon Oct 31 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.141.0 (Mon Oct 31 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): add storybook wrapper with margin top [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   fix(plasma-ui): handle tabs gap [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.140.1 (Thu Oct 27 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): delete unnecessary max-height property [#201](https://github.com/salute-developers/plasma/pull/201) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.140.0 (Thu Oct 27 2022)

#### 🚀 Enhancement

-   fix(plasma-ui): handle "Spinner" size [#193](https://github.com/salute-developers/plasma/pull/193) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): pass "deviceScale" prop for default spinner [#193](https://github.com/salute-developers/plasma/pull/193) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.139.0 (Thu Oct 27 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): pass product card text as ReactNode [#180](https://github.com/salute-developers/plasma/pull/180) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.138.1 (Thu Oct 27 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.136.2 (Mon Oct 10 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.136.1 (Mon Oct 10 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.136.0 (Mon Oct 10 2022)

#### 🚀 Enhancement

-   docs(plasma-ui-docs,plasma-web-docs): Add example with loader for `Button` [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-core): Add loader prop for `Button` component [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-ui): processing multiple badge [#175](https://github.com/salute-developers/plasma/pull/175) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.135.0 (Thu Oct 06 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): processing multiple badge [#175](https://github.com/salute-developers/plasma/pull/175) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.134.0 (Thu Oct 06 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): handle "Sheet" component transition [#178](https://github.com/salute-developers/plasma/pull/178) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.133.0 (Wed Oct 05 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): use useThemeContext hook for Carousel.stories [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): use useThemeContext hook for Picker [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): use useThemeContext hook for Slider [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): handle focus for when device kind is "sberbox" [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): handle readonly state when device kind is 'sberBox [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): add useDeviceKind hook [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): add useThemeContext hook [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.132.0 (Wed Oct 05 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): use useThemeContext hook for Carousel.stories [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): use useThemeContext hook for Picker [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): use useThemeContext hook for Slider [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): handle focus for when device kind is "sberbox" [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): handle readonly state when device kind is 'sberBox [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): add useDeviceKind hook [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-ui): add useThemeContext hook [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.131.0 (Mon Oct 03 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.130.0 (Wed Sep 28 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.129.2 (Mon Sep 26 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): scroll carousel on touch devices [#169](https://github.com/salute-developers/plasma/pull/169) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.129.1 (Tue Sep 20 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.129.0 (Thu Sep 15 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Add b2e theme to storybook [#165](https://github.com/salute-developers/plasma/pull/165) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.128.0 (Wed Sep 14 2022)

#### 🐛 Bug Fix

-   refactor(plasma-ui): Add addFocus mixin for `Checkbox` and `Radiobox` components [#135](https://github.com/salute-developers/plasma/pull/135) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.127.0 (Tue Sep 13 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): add CarouselLite component [#155](https://github.com/salute-developers/plasma/pull/155) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### Authors: 1

-   Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.126.1 (Mon Sep 12 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Fix component Sheet [#159](https://github.com/salute-developers/plasma/pull/159) (mokazakov@sberbank.ru)
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Misha Kazakov (mokazakov@sberbank.ru)

---

# v1.124.3 (Thu Sep 01 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Add sizes style for responsive typo in `DeviceThemeProvider` [#153](https://github.com/salute-developers/plasma/pull/153) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.124.2 (Thu Sep 01 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Replaced onChange handler to useEffect for `TimePicker` component [#151](https://github.com/salute-developers/plasma/pull/151) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.124.1 (Tue Aug 30 2022)

#### 🐛 Bug Fix

-   test(plasma-ui): Add test and snapshot for `TimePicker` component [#141](https://github.com/salute-developers/plasma/pull/141) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-ui): Fix deps for useIsomorphicLayoutEffect [#141](https://github.com/salute-developers/plasma/pull/141) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.124.0 (Tue Aug 30 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Add options for eventListeners in useRemoteListener hook [#146](https://github.com/salute-developers/plasma/pull/146) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.123.1 (Mon Aug 29 2022)

#### 🐛 Bug Fix

-   docs(plasma-ui-docs): Update docs and stories for `HeaderMinimize` and `HeaderBack` components [#142](https://github.com/salute-developers/plasma/pull/142) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.123.0 (Mon Aug 29 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Remove hover effect for touch devices [#147](https://github.com/salute-developers/plasma/pull/147) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.122.0 (Mon Aug 29 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Add forwardRef for `Header`,`NeuHeader` and `Cell` components [#143](https://github.com/salute-developers/plasma/pull/143) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.120.3 (Thu Aug 18 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Replace useLayoutEffect to useIsomorphicLayoutEffect for `Slider` and `Marquee` [#132](https://github.com/salute-developers/plasma/pull/132) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.120.2 (Wed Aug 17 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Add margin for not last button [#131](https://github.com/salute-developers/plasma/pull/131) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.120.1 (Tue Aug 16 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.120.0 (Wed Aug 10 2022)

#### 🐛 Bug Fix

-   feat(plasma-web,plasma-ui): Moved `Grid` component from plasma-core [#120](https://github.com/salute-developers/plasma/pull/120) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.119.0 (Thu Jul 28 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Add accessability story for `Carousel` component [#104](https://github.com/salute-developers/plasma/pull/104) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.118.4 (Mon Jul 25 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): removed FC type [#97](https://github.com/salute-developers/plasma/pull/97) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 1

-   Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.118.3 (Fri Jul 22 2022)

#### 🐛 Bug Fix

-   test(plasma-core,plasma-ui,plasma-web): Update tests for `Tab` component [#106](https://github.com/salute-developers/plasma/pull/106) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.118.2 (Thu Jul 21 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Fix visible border in Input for `Checkbox` and `RadioBox` [#105](https://github.com/salute-developers/plasma/pull/105) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.118.0 (Tue Jul 19 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.117.1 (Wed Jul 13 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): fix header navigation button animation [#96](https://github.com/salute-developers/plasma/pull/96) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

-   [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# v1.117.0 (Wed Jul 06 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Performance addon for ProductCart [#83](https://github.com/salute-developers/plasma/pull/83) ([@SeanSilke](https://github.com/SeanSilke))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   perf(plasma-ui): Performance addon for Tabs [#80](https://github.com/salute-developers/plasma/pull/80) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.116.0 (Fri Jul 01 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Performance addon for Card [#85](https://github.com/salute-developers/plasma/pull/85) ([@SeanSilke](https://github.com/SeanSilke))
-   feat(plasma-ui): Performance addon for Stepper [#84](https://github.com/salute-developers/plasma/pull/84) ([@SeanSilke](https://github.com/SeanSilke))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(plasma-ui): add performance addon to Carousel component [#74](https://github.com/salute-developers/plasma/pull/74) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   chore(plasma-ui): add performance addon to Picker component [#81](https://github.com/salute-developers/plasma/pull/81) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.115.0 (Wed Jun 29 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Performance addon for Stepper [#84](https://github.com/salute-developers/plasma/pull/84) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 1

-   Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.114.0 (Wed Jun 29 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): update @salutejs/use-virtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   feat(plasma-ui): drop CarouselColVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   feat(plasma-ui): fix Carousel types [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   feat(plasma-ui): CarouselColVirtual, CarouselItemVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   feat(plasma-ui): simplify BasicVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   feat(plasma-ui): CarouselTemplate [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   feat(plasma-ui): support of the withUseVirtual in the CarouselCol [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   feat(plasma-ui): disable detectActive for useVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   feat(plasma-ui): BasiVirtual wip [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs(plasma-ui): CarouselVirtual with deviceScale [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   fix(plasma-ui): CarouselVirtual CR 2 [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   fix(plasma-ui): CarouselVirtual CR [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   test(plasma-ui): refactor `virtual` test [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   test(plasma-ui): Fix `virtual` test [#57](https://github.com/salute-developers/plasma/pull/57) ([@neretin-trike](https://github.com/neretin-trike))
-   docs(plasma-ui): CarouselVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
-   test(plasma-ui): fix export of CarouselItemVirtual, update contributing.md [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   test(plasma-ui): attempt to test CarouselVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))

#### Authors: 4

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
-   Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.113.0 (Thu Jun 23 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Tabs render optimization [#76](https://github.com/salute-developers/plasma/pull/76) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 1

-   Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.112.0 (Thu Jun 23 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Stepper render optimization [#50](https://github.com/salute-developers/plasma/pull/50) ([@SeanSilke](https://github.com/SeanSilke))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.111.0 (Wed Jun 22 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): ProductCard render optimization [#53](https://github.com/salute-developers/plasma/pull/53) ([@SeanSilke](https://github.com/SeanSilke))
-   feat(plasma-ui): DatePicker render optimization [#56](https://github.com/salute-developers/plasma/pull/56) ([@SeanSilke](https://github.com/SeanSilke))
-   feat(plasma-ui): TimePicker render optimisation [#55](https://github.com/salute-developers/plasma/pull/55) ([@SeanSilke](https://github.com/SeanSilke))
-   docs(plasma-ui): Confirm: simple docs [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))
-   feat(plasma-ui): add Confirm [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

-   test(plasma-ui): Remove ui snapshots and tests; Add linked test [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
-   refactor(plasma-ui): Replace `Card` components to import from plasma-core [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   build(plasma-ui): added @babel/plugin-transform-react-constant-elements [#46](https://github.com/salute-developers/plasma/pull/46) ([@SeanSilke](https://github.com/SeanSilke))
-   Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   test(plasma-ui): add Confirm tests [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.110.0 (Fri Jun 17 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): TimePicker render optimisation [#55](https://github.com/salute-developers/plasma/pull/55) ([@SeanSilke](https://github.com/SeanSilke))
-   docs(plasma-ui): Confirm: simple docs [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))
-   feat(plasma-ui): add Confirm [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

-   test(plasma-ui): add Confirm tests [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.108.2 (Thu Jun 09 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Add min-height in StyledMediaSlot for `ProductCard` component [#61](https://github.com/salute-developers/plasma/pull/61) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.108.1 (Tue Jun 07 2022)

#### 🐛 Bug Fix

-   fix(plasma-b2c, plasma-ui): fix scroll handle position passed to callbacks [#48](https://github.com/salute-developers/plasma/pull/48) ([@Gerpea](https://github.com/Gerpea))

#### Authors: 1

-   German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# v1.108.0 (Tue Jun 07 2022)

#### 🐛 Bug Fix

-   fix(plasma-web,plasma-b2c,plasma-ui): Add onChange callback for maxLength check in `TextField` [#47](https://github.com/salute-developers/plasma/pull/47) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.107.0 (Tue Jun 07 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.106.1 (Thu Jun 02 2022)

#### 🐛 Bug Fix

-   fix(plasma-core, plasma-ui, plasma-web): changes the refs array to html collection [#34](https://github.com/salute-developers/plasma/pull/34) (Kruglikov.A.D@sberbank.ru)

#### Authors: 1

-   Arseny Kruglikov (Kruglikov.A.D@sberbank.ru)

---

# v1.106.0 (Thu May 26 2022)

#### 🚀 Enhancement

-   test(plasma-ui): Add test and update snapshots for `ProductCard` component [#3](https://github.com/salute-developers/plasma/pull/3) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-ui): Add new additional field and update design for `ProductCard` component; Add event to callback for `Stepper` [#3](https://github.com/salute-developers/plasma/pull/3) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.105.0 (Tue May 24 2022)

#### 🚀 Enhancement

-   test(plasma-ui,plasma-b2c): Add test and snapshot for `Slider` component [#30](https://github.com/salute-developers/plasma/pull/30) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   fix(plasma-b2c,plasma-ui): Add ref.current for useEffect in SliderBase for `Slider` component [#30](https://github.com/salute-developers/plasma/pull/30) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.104.3 (Mon May 23 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): Toast: clearTimeout after hiding [#26](https://github.com/salute-developers/plasma/pull/26) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.104.2 (Fri May 20 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.104.1 (Thu May 19 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui, plasma-web): fix carousel context [#20](https://github.com/salute-developers/plasma/pull/20) (Kruglikov.A.D@sberbank.ru)
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Arseny Kruglikov (Kruglikov.A.D@sberbank.ru)

---

# v1.104.0 (Tue May 17 2022)

#### 🐛 Bug Fix

-   chore(plasma-ui, plasma-b2c): Add bold type for `Dspl` and `H` in stories [#7](https://github.com/salute-developers/plasma/pull/7) ([@neretin-trike](https://github.com/neretin-trike))
-   Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   test(plasma-ui): Add test and snapshost for `TimePicker` and `DatePicker` components [#4](https://github.com/salute-developers/plasma/pull/4) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-ui): Fix behavior if min or max changes for `Pickers` component [#4](https://github.com/salute-developers/plasma/pull/4) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.103.1 (Wed May 11 2022)

#### 🐛 Bug Fix

-   test(plasma-ui): Add test and snapshost for `TimePicker` and `DatePicker` components [#4](https://github.com/salute-developers/plasma/pull/4) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-ui): Fix behavior if min or max changes for `Pickers` component [#4](https://github.com/salute-developers/plasma/pull/4) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.103.0 (Wed May 11 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.102.0 (Wed May 11 2022)

#### 🐛 Bug Fix

-   chore: update package-locks [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.97.0 (Thu May 05 2022)

#### 🐛 Bug Fix

-   test(plasma-ui): fix Card images [#5](https://github.com/salute-developers/plasma/pull/5) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.96.0 (Wed Apr 27 2022)

#### 🐛 Bug Fix

-   fix: linting errs [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
-   fix: monorepo deps resolved [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
-   fix(plasma-ui): Fix behavior with single item in `Picker` component ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

-   test(plasma-ui): Add test and snapshots for `Pickers` component ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.95.0 (Tue Apr 12 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): disable Pickers infinityScroll for lowPerfomance devices [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@Yeti-or](https://github.com/Yeti-or))
-   feat: Added possibility to disable CSS animations via ThemeProvider [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore: disableAnimation => lowPerformance [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.94.0 (Fri Apr 08 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Add keys for `Pickers` components in stories [#1181](https://github.com/salute-developers/plasma/pull/1181) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.93.0 (Thu Apr 07 2022)

#### 🐛 Bug Fix

-   fix: `Field` and `Input` props interfaces facelifting [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.92.0 (Fri Apr 01 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Added `ProductCard` component [#1144](https://github.com/salute-developers/plasma/pull/1144) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): `Stepper`: divide functionallity as `useStepper` [#1144](https://github.com/salute-developers/plasma/pull/1144) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): `Badge`: Added `warning` view [#1144](https://github.com/salute-developers/plasma/pull/1144) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.91.0 (Thu Mar 31 2022)

#### 🐛 Bug Fix

-   fix(plasma-web, plasma-ui): `Radiobox`: removed duplication of label & descr + better live example [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-web, plasma-ui): `Checkbox`: removed duplication of label & descr [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.89.0 (Wed Mar 16 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): `TextArea`: added `aria-describedby` attr [#1133](https://github.com/salute-developers/plasma/pull/1133) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.88.0 (Wed Mar 16 2022)

#### 🚀 Enhancement

-   feat(plasma-web): `TextField`: added `aria-describedby` attr [#1124](https://github.com/salute-developers/plasma/pull/1124) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): `TextField`: added `aria-describedby` attr [#1124](https://github.com/salute-developers/plasma/pull/1124) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.87.0 (Tue Mar 15 2022)

#### 🐛 Bug Fix

-   chore: `Toast` stories text & role [#1127](https://github.com/salute-developers/plasma/pull/1127) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.86.0 (Fri Mar 11 2022)

#### 🚀 Enhancement

-   feat(plasma-core): Add onDetectActiveItem callback for `Carousel` component [#1081](https://github.com/salute-developers/plasma/pull/1081) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.85.1 (Wed Mar 09 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): `TimePicker` splitter size [#1120](https://github.com/salute-developers/plasma/pull/1120) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

-   Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.85.0 (Fri Mar 04 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.84.1 (Tue Mar 01 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): correct Tabs disable state [#1116](https://github.com/salute-developers/plasma/pull/1116) ([@LamaEats](https://github.com/LamaEats))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.84.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.83.0 (Tue Mar 01 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): `DeviceThemeProvider`: Added responsive typo support [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): Added mixin re-exports [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore(plasma-ui): Label in `TextBox`'s stories [#1112](https://github.com/salute-developers/plasma/pull/1112) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-core): Use default view for input readonly state [#1114](https://github.com/salute-developers/plasma/pull/1114) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
-   fix(plasma-ui): Fix slider when active tab size is changed [#1118](https://github.com/salute-developers/plasma/pull/1118) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
-   chore: Storybook fonts [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-typo, plasma-ui, plasma-b2c): Moved responsive typography to common package [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

-   [@kvpolyanskiy](https://github.com/kvpolyanskiy)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.82.3 (Thu Feb 24 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.82.2 (Thu Feb 24 2022)

#### 🐛 Bug Fix

-   test(plasma-ui): Add test and snapshot for `Tabs` component [#1113](https://github.com/salute-developers/plasma/pull/1113) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.82.0 (Fri Feb 18 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): Made overlay optional for Sheet [#1075](https://github.com/salute-developers/plasma/pull/1075) (levkus@gmail.com)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Лев Останин (levkus@gmail.com)

---

# v1.81.4 (Thu Feb 17 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): `HeaderArrow`: made unfocusable [#1076](https://github.com/salute-developers/plasma/pull/1076) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui, plasma-web, plasma-b2c): `Button`: Added theming [#1063](https://github.com/salute-developers/plasma/pull/1063) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.81.3 (Wed Feb 16 2022)

#### 🐛 Bug Fix

-   fix(plasma-web, plasma-b2c): `TextField`: separated helper spacing styles [#1090](https://github.com/salute-developers/plasma/pull/1090) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.81.1 (Tue Feb 08 2022)

#### 🐛 Bug Fix

-   test(plasma-ui): Add test and snapshot for `Tabs` component [#1064](https://github.com/salute-developers/plasma/pull/1064) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-ui): Fix outline-radius size for pilled tabs [#1064](https://github.com/salute-developers/plasma/pull/1064) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.81.0 (Thu Feb 03 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): `Picker`: Added `xs` size [#1055](https://github.com/salute-developers/plasma/pull/1055) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.80.1 (Thu Feb 03 2022)

#### 🐛 Bug Fix

-   fix: peer dependencies versions [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@LamaEats](https://github.com/LamaEats))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.80.0 (Wed Feb 02 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.79.0 (Tue Feb 01 2022)

#### 🚀 Enhancement

-   feat(plasma-ui): `Carousel`: Added possibility to specify list's role [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): `Picker` a11y improvements [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): Extended `Picker` keyboard control [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-web, plasma-ui): `Basebox`: Hide input properly; tabIndex={-1} on root [#1057](https://github.com/salute-developers/plasma/pull/1057) ([@fanisco](https://github.com/fanisco))
-   test(plasma-ui): `DatePicker`: test for jumps - 10 up/down, home/end [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-ui): `Picker`: hide virtual items from screen reader [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.78.1 (Fri Jan 28 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.78.0 (Thu Jan 27 2022)

#### 🐛 Bug Fix

-   chore(plasma-ui,plasma-b2c): Remove unused stories mdx for `Tabs` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))
-   test(plasma-b2c,plasma-web,plasma-ui): Add test and update snapshots for `Tab` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-b2c,plasma-web,plasma-ui): Update style for `Tabs` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.77.1 (Wed Jan 26 2022)

#### 🐛 Bug Fix

-   fix(plasma-ui): `ActionButton`: Made `pin` not required again [#1045](https://github.com/salute-developers/plasma/pull/1045) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.76.2 (Thu Jan 13 2022)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.76.1 (Tue Jan 11 2022)

#### 🐛 Bug Fix

-   feat(plasma-ui, plasma-web): `Carousel` a11y improvements [#973](https://github.com/salute-developers/plasma/pull/973) ([@fanisco](https://github.com/fanisco))
-   refactor: Move `Carousel`'s modules in Core/UI/Web [#973](https://github.com/salute-developers/plasma/pull/973) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-ui): Keep `Picker` focused even if arrows clicked [#1014](https://github.com/salute-developers/plasma/pull/1014) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-ui): `Picker`s' controls position [#1014](https://github.com/salute-developers/plasma/pull/1014) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.75.1 (Wed Dec 29 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Set `HeaderArrow` full height [#1016](https://github.com/salute-developers/plasma/pull/1016) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.75.0 (Wed Dec 29 2021)

#### 🐛 Bug Fix

-   test(plasma-ui): Add tests and snapshots for `Pickers` component [#1022](https://github.com/salute-developers/plasma/pull/1022) ([@neretin-trike](https://github.com/neretin-trike))
-   test(plasma-ui): Add tests and snapshots for `Slider` component [#1021](https://github.com/salute-developers/plasma/pull/1021) ([@neretin-trike](https://github.com/neretin-trike))
-   test: Complete tests for `Tabs` [#985](https://github.com/salute-developers/plasma/pull/985) ([@fanisco](https://github.com/fanisco))
-   test(plasma-ui): Add test for `Carousel` component with scrollAlign [#996](https://github.com/salute-developers/plasma/pull/996) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.74.2 (Mon Dec 27 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Add scroll fix for `Picker` component [#1007](https://github.com/salute-developers/plasma/pull/1007) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.74.1 (Thu Dec 23 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Prevent `Radiobox`'s & `Checkbox`'s trigger from squeeze [#958](https://github.com/salute-developers/plasma/pull/958) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.74.0 (Wed Dec 15 2021)

#### 🐛 Bug Fix

-   test(plasma-b2c): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
-   test(plasma-ui): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
-   test(plasma-ui): add Fade component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add Sheet component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add Grid component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add Header component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.73.0 (Wed Dec 15 2021)

#### 🐛 Bug Fix

-   feat(plasma-web,plasma-b2c,plasma-ui): Add example for checkbox with jsx in label [#969](https://github.com/salute-developers/plasma/pull/969) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.72.0 (Tue Dec 14 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Add infinite scroll for `DatePicker` and `TimePicker` components [#957](https://github.com/salute-developers/plasma/pull/957) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   test(plasma-ui): add Card component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add SmartPaginationDots component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add MarkedList component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add Marquee component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add Skeleton component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add Spinner component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add TextBox component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): add Cell component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-ui): Add tests for `DatePicker` and `TimePicker` components and update snapshots [#957](https://github.com/salute-developers/plasma/pull/957) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.71.0 (Tue Dec 07 2021)

#### 🚀 Enhancement

-   feat: add RadioGroup components [#676](https://github.com/salute-developers/plasma/pull/676) ([@OgNellis](https://github.com/OgNellis))

#### 🐛 Bug Fix

-   fix: accessibility of checkbox and radiobox for nvda and jaws [#676](https://github.com/salute-developers/plasma/pull/676) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.70.0 (Fri Dec 03 2021)

#### 🚀 Enhancement

-   feat: Added `createButton` as a constructor function for `Button` [#946](https://github.com/salute-developers/plasma/pull/946) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   test(plasma-ui): Update tests for `Button` and add for `ActionButton` [#946](https://github.com/salute-developers/plasma/pull/946) ([@fanisco](https://github.com/fanisco))
-   refactor(plasma-ui,plasma-b2c): Update stories for `Slider` component [#934](https://github.com/salute-developers/plasma/pull/934) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-ui,plasma-b2c): Fix intersection for multiple `Slider` component [#934](https://github.com/salute-developers/plasma/pull/934) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.69.0 (Thu Dec 02 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Add default value in `Slider` component if theme context is undefined [#955](https://github.com/salute-developers/plasma/pull/955) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.68.0 (Wed Dec 01 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Added `TabsController` component [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): Add a11y for `Stepper` component [#930](https://github.com/salute-developers/plasma/pull/930) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.67.0 (Mon Nov 22 2021)

#### 🐛 Bug Fix

-   feat(plasma-ui, plasma-web): B2C/B2B `Input` and `TextArea` on common platform [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.65.0 (Thu Nov 18 2021)

#### 🐛 Bug Fix

-   chore: b2c, ui, web code coverage [#917](https://github.com/salute-developers/plasma/pull/917) ([@dakhetov](https://github.com/dakhetov))

#### Authors: 1

-   [@dakhetov](https://github.com/dakhetov)

---

# v1.64.0 (Tue Nov 16 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.63.1 (Mon Nov 15 2021)

#### 🐛 Bug Fix

-   fix: Separate `Input`'s animation by b2b and b2c [#908](https://github.com/salute-developers/plasma/pull/908) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.63.0 (Mon Nov 15 2021)

#### 🐛 Bug Fix

-   chore(plasma-ui): fix sb card cover control [#921](https://github.com/salute-developers/plasma/pull/921) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

-   [@kayman233](https://github.com/kayman233)

---

# v1.62.0 (Wed Nov 10 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Added option to enable native input for Pickers [#916](https://github.com/salute-developers/plasma/pull/916) ([@jabzzy](https://github.com/jabzzy))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Eugene Dashkevich ([@jabzzy](https://github.com/jabzzy))

---

# v1.61.1 (Tue Nov 09 2021)

#### 🐛 Bug Fix

-   test(plasma-ui): Added for `Image` component [#909](https://github.com/salute-developers/plasma/pull/909) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.61.0 (Tue Nov 09 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): A11y for `Toast` [#710](https://github.com/salute-developers/plasma/pull/710) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   test(plasma-ui): `DatePicker` and `TimePicker` ct [#915](https://github.com/salute-developers/plasma/pull/915) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-ui): Change Storybook's iframe lang [#710](https://github.com/salute-developers/plasma/pull/710) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.60.1 (Mon Nov 01 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Fix scroll behavior and range values for `Picker` component [#897](https://github.com/salute-developers/plasma/pull/897) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.58.1 (Fri Oct 22 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Fix showing values for `TimePicker` component [#887](https://github.com/salute-developers/plasma/pull/887) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-ui): Fix showing values for `DataPicker` component [#887](https://github.com/salute-developers/plasma/pull/887) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.58.0 (Thu Oct 21 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Added `gradientColor` prop to `Header` [#874](https://github.com/salute-developers/plasma/pull/874) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.57.0 (Thu Oct 21 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): `Header`'s back-minimize animation" [#863](https://github.com/salute-developers/plasma/pull/863) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): Added `NueHeader` to replace `Header` in major version [#863](https://github.com/salute-developers/plasma/pull/863) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.56.1 (Thu Oct 21 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): `HeaderContent` flex in Chrome 94 [#875](https://github.com/salute-developers/plasma/pull/875) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.55.3 (Fri Oct 15 2021)

#### 🐛 Bug Fix

-   chore(plasma-ui, plasma-web): addon knobs removed [#857](https://github.com/salute-developers/plasma/pull/857) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

-   [@kayman233](https://github.com/kayman233)

---

# v1.55.2 (Thu Oct 14 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.55.1 (Wed Oct 13 2021)

#### 🐛 Bug Fix

-   fix: Update package-locks [#853](https://github.com/salute-developers/plasma/pull/853) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.53.0 (Mon Oct 11 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: Remove Chromatic check [#850](https://github.com/salute-developers/plasma/pull/850) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.52.0 (Fri Oct 08 2021)

#### 🚀 Enhancement

-   feat(plasma-core): Shared `Toast` between libraries [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   test: Component test for B2C `Toast` [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

-   build(plasma-core/ui/b2c/web): fix storybook build ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.51.1 (Wed Oct 06 2021)

#### 🐛 Bug Fix

-   test: add SBSans to cypress [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-core/ui/web): fix tests [#830](https://github.com/salute-developers/plasma/pull/830) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.51.0 (Sun Oct 03 2021)

#### 🚀 Enhancement

-   feat(plasma-cy-utils): padMe [#824](https://github.com/salute-developers/plasma/pull/824) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.50.2 (Sun Oct 03 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: move cypress helpers to utils [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
-   test(plasma-web/plasma-ui): move cy tests to plasma-core [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.50.1 (Tue Sep 28 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.50.0 (Tue Sep 28 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.49.0 (Fri Sep 24 2021)

#### 🐛 Bug Fix

-   chore: resolve cypress and jest conflicts [#573](https://github.com/salute-developers/plasma/pull/573) ([@OgNellis](https://github.com/OgNellis))
-   chore: cypress component testing [#573](https://github.com/salute-developers/plasma/pull/573) (dakhetov@outlook.com)

#### Authors: 2

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
-   Daniil Akhetov (dakhetov@outlook.com)

---

# v1.48.1 (Tue Sep 21 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Separate gradient masks for `Picker` [#708](https://github.com/salute-developers/plasma/pull/708) ([@fanisco](https://github.com/fanisco))
-   test(plasma-ui): `PickerItem`'s styling utils [#708](https://github.com/salute-developers/plasma/pull/708) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-ui): `PickerItem` `size="s"` text cut at the bottom [#708](https://github.com/salute-developers/plasma/pull/708) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-ui): E2E test for `DatePicker` and `TimePicker` [#806](https://github.com/salute-developers/plasma/pull/806) ([@fanisco](https://github.com/fanisco))
-   chore: Delete extract-sb-docgen-info [#801](https://github.com/salute-developers/plasma/pull/801) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.48.0 (Mon Sep 20 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.47.1 (Wed Sep 15 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Added `coverGradient` prop to `CardContent` [#716](https://github.com/salute-developers/plasma/pull/716) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.47.0 (Tue Sep 14 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.46.4 (Tue Sep 14 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.46.3 (Thu Sep 09 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Disabled state for `Checkbox` and `Radiobox` [#791](https://github.com/salute-developers/plasma/pull/791) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.46.2 (Thu Sep 09 2021)

#### 🐛 Bug Fix

-   feat(plasma-ui, plasma-core): Added `forwardedAs` and `as` props to `Tabs` [#724](https://github.com/salute-developers/plasma/pull/724) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-ui): Storybook controls for Card, Carousel, Cell, Header, Pickers [#647](https://github.com/salute-developers/plasma/pull/647) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): visibleItems for TimePicker fix [#647](https://github.com/salute-developers/plasma/pull/647) ([@kayman233](https://github.com/kayman233))
-   chore(plasma-ui): fix cell icons [#647](https://github.com/salute-developers/plasma/pull/647) ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.46.1 (Wed Sep 08 2021)

#### 🐛 Bug Fix

-   fix: Refactor `Checkbox` & `Radiobox` in order of better understanding [#698](https://github.com/salute-developers/plasma/pull/698) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-ui): update ts/styled-comps deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
-   chore(plasma-ui): update storybook deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
-   chore(plasma-ui): update test deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
-   chore(plasma-ui): update build deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.46.0 (Wed Sep 08 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): value format for Stepper added [#675](https://github.com/salute-developers/plasma/pull/675) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs: Writing new docs for Plasma Devices [#648](https://github.com/salute-developers/plasma/pull/648) ([@fanisco](https://github.com/fanisco))
-   chore: Storybook docgenInfo extraction tool [#648](https://github.com/salute-developers/plasma/pull/648) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.45.0 (Wed Sep 01 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.44.1 (Tue Aug 31 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.44.0 (Fri Aug 27 2021)

#### 🚀 Enhancement

-   feat: A11y Tabs [#659](https://github.com/salute-developers/plasma/pull/659) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore(plasma-ui): Refactor tabs [#659](https://github.com/salute-developers/plasma/pull/659) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-ui): Storybook controls for PaginationDots, Price, Spinner, TextArea, TextField [#639](https://github.com/salute-developers/plasma/pull/639) ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.43.0 (Fri Aug 27 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Add showcase [#660](https://github.com/salute-developers/plasma/pull/660) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
-   feat(plasma-ui): Add Sheet component [#660](https://github.com/salute-developers/plasma/pull/660) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

-   chore(plasma-ui): Storybook controls for Tabs [#649](https://github.com/salute-developers/plasma/pull/649) ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@kvpolyanskiy](https://github.com/kvpolyanskiy)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.42.0 (Mon Aug 23 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.41.0 (Fri Aug 20 2021)

#### 🚀 Enhancement

-   feat: Skeleton in core/ui/web [#628](https://github.com/salute-developers/plasma/pull/628) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.40.0 (Fri Aug 20 2021)

#### 🚀 Enhancement

-   feat: A11y Switch [#633](https://github.com/salute-developers/plasma/pull/633) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore(plasma-ui): Storybook controls for Skeleton, Stepper, Toast [#640](https://github.com/salute-developers/plasma/pull/640) ([@kayman233](https://github.com/kayman233))
-   chore(plasma-ui): Storybook controls for Badge, Button, Icon, Image [#627](https://github.com/salute-developers/plasma/pull/627) ([@kayman233](https://github.com/kayman233))
-   chore(plasma-ui): disableProps added [#627](https://github.com/salute-developers/plasma/pull/627) ([@kayman233](https://github.com/kayman233))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.39.0 (Wed Aug 18 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): add Slider component [#584](https://github.com/salute-developers/plasma/pull/584) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.38.2 (Wed Aug 18 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): fix vertical position of HeaderBack [#634](https://github.com/salute-developers/plasma/pull/634) ([@OgNellis](https://github.com/OgNellis))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.38.1 (Wed Aug 18 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): add textAlign prop [#618](https://github.com/salute-developers/plasma/pull/618) ([@ayymkozb](https://github.com/ayymkozb))
-   fix(plasma-ui): calculate props in component [#618](https://github.com/salute-developers/plasma/pull/618) ([@ayymkozb](https://github.com/ayymkozb))
-   fix(plasma-ui): check ref commit [#618](https://github.com/salute-developers/plasma/pull/618) ([@ayymkozb](https://github.com/ayymkozb))
-   fix(plasma-ui): marquee fix [#618](https://github.com/salute-developers/plasma/pull/618) ([@ayymkozb](https://github.com/ayymkozb))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@ayymkozb](https://github.com/ayymkozb)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.38.0 (Mon Aug 16 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): tabs api changed [#593](https://github.com/salute-developers/plasma/pull/593) ([@kayman233](https://github.com/kayman233))
-   feat(plasma-ui): tabs animation added [#593](https://github.com/salute-developers/plasma/pull/593) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.37.0 (Tue Aug 10 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Add mixin reexports from core [#629](https://github.com/salute-developers/plasma/pull/629) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   docs(plasma-ui): Mixin import from plasma-ui [#629](https://github.com/salute-developers/plasma/pull/629) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.36.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

-   fix: Execution layout effect on server [#607](https://github.com/salute-developers/plasma/pull/607) ([@fanisco](https://github.com/fanisco))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.35.1 (Fri Aug 06 2021)

#### 🐛 Bug Fix

-   fix(plasma-core): Image: add role attr [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.35.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.34.0 (Wed Aug 04 2021)

#### 🚀 Enhancement

-   feat: Spacing mixin applySpacing [#585](https://github.com/salute-developers/plasma/pull/585) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.33.0 (Mon Aug 02 2021)

#### 🐛 Bug Fix

-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.32.0 (Mon Aug 02 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Added index exports for hooks and etc [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   ci: Build plasma without rollup [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.31.1 (Fri Jul 30 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): huawei detection fix [#583](https://github.com/salute-developers/plasma/pull/583) (nicolai.v.95@gmail.com)
-   docs(plasma-ui): Show provider in stories [#575](https://github.com/salute-developers/plasma/pull/575) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
-   nsvoevodin (nicolai.v.95@gmail.com)

---

# v1.31.0 (Tue Jul 27 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Header layout [#551](https://github.com/salute-developers/plasma/pull/551) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): Header minimize or back [#551](https://github.com/salute-developers/plasma/pull/551) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-ui): Pass rest props to TextBox if only children presented [#551](https://github.com/salute-developers/plasma/pull/551) ([@fanisco](https://github.com/fanisco))
-   docs(plasma-ui): assistant usage fix [#562](https://github.com/salute-developers/plasma/pull/562) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.30.2 (Mon Jul 19 2021)

#### 🐛 Bug Fix

-   fix: remove double ampersands [#537](https://github.com/salute-developers/plasma/pull/537) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.30.1 (Fri Jul 16 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui, plasma-web): toolbar buttons return [#547](https://github.com/salute-developers/plasma/pull/547) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

-   [@kayman233](https://github.com/kayman233)

---

# v1.30.0 (Thu Jul 15 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Detect SberBoxTop [#546](https://github.com/salute-developers/plasma/pull/546) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.29.0 (Thu Jul 15 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.28.0 (Wed Jul 14 2021)

#### 🐛 Bug Fix

-   feat(plasma-ui, plasma-web, showcase): sb-essentials added [#535](https://github.com/salute-developers/plasma/pull/535) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

-   [@kayman233](https://github.com/kayman233)

---

# v1.27.3 (Wed Jul 14 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.27.2 (Tue Jul 13 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Toast fade top placement [#528](https://github.com/salute-developers/plasma/pull/528) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.27.1 (Tue Jul 13 2021)

#### 🐛 Bug Fix

-   fix: Pickers performance, no unnecessary rerender [#527](https://github.com/salute-developers/plasma/pull/527) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.27.0 (Tue Jul 13 2021)

#### 🚀 Enhancement

-   feat: react17 and test job added [#496](https://github.com/salute-developers/plasma/pull/496) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.26.0 (Fri Jul 09 2021)

#### 🚀 Enhancement

-   feat: TimePicker throws exception for out of range value [#516](https://github.com/salute-developers/plasma/pull/516) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

-   fix(plasma-ui): Header back button position [#517](https://github.com/salute-developers/plasma/pull/517) ([@fanisco](https://github.com/fanisco))
-   docs: Documentation for hocs [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-ui): Picker focus / control remote [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
-   refactor(plasma-ui): Picker component refactor [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-web): Pass ids in Date&TimePicker [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-ui): Date&TimePicker rest attributes on wrapper [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
-   docs: plasma-ui disable autofocus for time picker [#516](https://github.com/salute-developers/plasma/pull/516) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   docs: fix time picker docs [#516](https://github.com/salute-developers/plasma/pull/516) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   docs: add documentation for environment [#480](https://github.com/salute-developers/plasma/pull/480) ([@OgNellis](https://github.com/OgNellis))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: Alias react, react-dom and styled-components in Storybook webpack [#518](https://github.com/salute-developers/plasma/pull/518) ([@fanisco](https://github.com/fanisco))
-   chore: Bump Storybook version [#518](https://github.com/salute-developers/plasma/pull/518) ([@fanisco](https://github.com/fanisco))

#### 📝 Documentation

-   chore(plasma-ui): Change deviceKind through get param in iframe [#500](https://github.com/salute-developers/plasma/pull/500) ([@fanisco](https://github.com/fanisco))

#### Authors: 4

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.25.0 (Thu Jul 08 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.24.1 (Wed Jul 07 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): commas change [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): favicon to png fix [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): safari bug fix [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): fix missed bracket [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): favicon bug fix [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): favicon added [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.24.0 (Fri Jul 02 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): Radio type in trigger [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: TextField placeholder placement [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: Build components with own namespace es/cjs [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: TextField helperText to boolean [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: Checkbox layout with various content [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   fix: Input interface and props [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.23.1 (Thu Jul 01 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): no-select mixin lint error fix [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): no-select mixin in plasma-core [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): no-select mixin added [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-ui): text selection fixed [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.0 (Thu Jul 01 2021)

#### 🐛 Bug Fix

-   docs(plasma-ui): repository link added [#447](https://github.com/salute-developers/plasma/pull/447) ([@kayman233](https://github.com/kayman233))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))
-   ci: setup jest [#466](https://github.com/salute-developers/plasma/pull/466) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.22.1 (Wed Jun 23 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): PickerItem sizes [#458](https://github.com/salute-developers/plasma/pull/458) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.22.0 (Wed Jun 23 2021)

#### 🚀 Enhancement

-   feat(plasma-tokens): Updated tokens from plasma-styles [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore: Added favicon for storybooks [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
-   docs: ThemeColors in both libraries [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
-   docs(plasma-web): Added Grid docs [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.21.0 (Tue Jun 22 2021)

#### 🐛 Bug Fix

-   feat(plasma-core, plasma-ui, plasma-web): Reassembled Field [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.20.0 (Fri Jun 18 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.19.1 (Thu Jun 17 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.19.0 (Wed Jun 09 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.18.1 (Wed Jun 09 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.18.0 (Mon Jun 07 2021)

#### 🚀 Enhancement

-   feat: switchable month name format in DatePicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   feat: short month name in datepicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

-   refactor: change style of default options checking in DatePicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   refactor: remove unimportant check from getFormatterKey [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   refactor: unified options getting in DatePicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.17.1 (Mon May 31 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.17.0 (Mon May 31 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.16.0 (Mon May 31 2021)

#### 🚀 Enhancement

-   feat: es module build for plasma-tokens [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   feat: add es module exports for plasma-ui [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

-   fix: es module import in CarouselCol [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   fix: all at once exports [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   chore: update plasma-core version for plasma-ui [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.15.2 (Mon May 31 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.15.1 (Thu May 20 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui) Add Huawei TV UA [#403](https://github.com/salute-developers/plasma/pull/403) ([@SemyonMakhaev](https://github.com/SemyonMakhaev))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Махаев Семён ([@SemyonMakhaev](https://github.com/SemyonMakhaev))

---

# v1.15.0 (Thu May 20 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Increase Picker performance with preset item styles [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-ui): Disabled animation in Picker in first render [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-core, plasma-ui, plasma-web): Moved PaginationDots to core [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-core, plasma-ui, plasma-web): Moved Carousel to core [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.14.2 (Tue May 18 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.14.1 (Mon May 17 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): fix simultaneous src&placeholder display [#390](https://github.com/salute-developers/plasma/pull/390) ([@ayymkozb](https://github.com/ayymkozb))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@ayymkozb](https://github.com/ayymkozb)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.14.0 (Mon May 17 2021)

#### 🐛 Bug Fix

-   feat(plasma-core, plasma-ui): Moved Spinner to core [#326](https://github.com/salute-developers/plasma/pull/326) (prokopyevviktor@yandex.ru)
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Viktor Prokopyev (prokopyevviktor@yandex.ru)

---

# v1.13.0 (Fri May 14 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.12.0 (Thu May 13 2021)

#### 🐛 Bug Fix

-   fix: exclude description from Basebox in plasma-ui [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update package-locks [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
-   chore: soft peerDependencies only [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.11.0 (Tue May 11 2021)

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.10.0 (Fri May 07 2021)

#### 🚀 Enhancement

-   feat(plasma-core): Added applyEllipsis mixin [#348](https://github.com/salute-developers/plasma/pull/348) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.9.0 (Thu May 06 2021)

#### 🐛 Bug Fix

-   feat(plasma-core, plasma-ui, plasma-ui): Moved Image component [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-core, plasma-ui, plasma-ui): Moved Price component [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
-   build: fix package-locks [#337](https://github.com/salute-developers/plasma/pull/337) ([@Yeti-or](https://github.com/Yeti-or))
-   docs: fix grid misspell [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.8.0 (Wed Apr 28 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Add new scrollAlign values for Carousel [#317](https://github.com/salute-developers/plasma/pull/317) (nicolai.v.95@gmail.com)

#### Authors: 1

-   nsvoevodin (nicolai.v.95@gmail.com)

---

# vnull (Tue Apr 27 2021)

#### 🐛 Bug Fix

-   docs(plasma-ui): Linked doc for plasma-tokens and added information about font [#324](https://github.com/salute-developers/plasma/pull/324) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

-   {chore: update package-locks} ([@github-actions[bot]](https://github.com/github-actions[bot]))

#### Authors: 2

-   [@github-actions[bot]](https://github.com/github-actions[bot])
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.6.2 (Wed Apr 21 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): DatePicker: fix 30-31 february [#322](https://github.com/salute-developers/plasma/pull/322) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.6.1 (Wed Apr 21 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): update @storybook/react version [#323](https://github.com/salute-developers/plasma/pull/323) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

-   [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.6.0 (Tue Apr 20 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): TimePicker: values interval [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): Date/TimePicker control by keyboard/remote [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): TimePicker / DatePicker: l and s sizes for both components [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   docs(plasma-ui): remove docz [#304](https://github.com/salute-developers/plasma/pull/304) ([@OgNellis](https://github.com/OgNellis))
-   perf(plasma-ui): Picker: prevent form unnecessary onChange call [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-ui): Picker disabled state [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
-   fix(plasma-ui): Date/TimePickers controls [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.5.2 (Tue Apr 20 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui, plasma-web): Badge: correct reexport & const creation [#313](https://github.com/salute-developers/plasma/pull/313) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.5.1 (Sat Apr 17 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): fix detection Huawei TV [#312](https://github.com/salute-developers/plasma/pull/312) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.5.0 (Fri Apr 16 2021)

#### 🚀 Enhancement

-   feat(core): made reexport in ui & web, added showcase for web [#308](https://github.com/salute-developers/plasma/pull/308) (prokopyevviktor@yandex.ru)

#### Authors: 1

-   Viktor Prokopyev (prokopyevviktor@yandex.ru)

---

# v1.4.0 (Thu Apr 15 2021)

#### 🚀 Enhancement

-   feat: Moved Typography to plasma-core / plasma-web [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-ui, plasma-web): Fix setting props in TextField & TextArea [#299](https://github.com/salute-developers/plasma/pull/299) ([@LamaEats](https://github.com/LamaEats))
-   fix(plasma-ui, plasma-web): Added SC babel plugin to avoid classname collision [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.3.1 (Thu Apr 15 2021)

#### 🐛 Bug Fix

-   fix: bump peerDeps [#307](https://github.com/salute-developers/plasma/pull/307) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.3.0 (Tue Apr 13 2021)

#### 🚀 Enhancement

-   feat(ui): Add base to props in Image component [#298](https://github.com/salute-developers/plasma/pull/298) ([@ayymkozb](https://github.com/ayymkozb))

#### Authors: 1

-   [@ayymkozb](https://github.com/ayymkozb)

---

# v1.2.1 (Mon Apr 12 2021)

#### 🐛 Bug Fix

-   fix(plasma-ui): missing root exports for Image & Marquee [#292](https://github.com/salute-developers/plasma/pull/292) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

-   Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.2.0 (Wed Apr 07 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): Marquee: animation duration prop ([@ayymkozb](https://github.com/ayymkozb))
-   feat(plasma-ui): TimePicker: correct min and max behavior [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): Carousel: dynamic options list refresh [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   Bump independent versions \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))
-   Update CHANGELOG.md \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

-   [@ayymkozb](https://github.com/ayymkozb)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.1.0 (Wed Apr 07 2021)

#### 🚀 Enhancement

-   feat(plasma-ui): TimePicker: correct min and max behavior [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
-   feat(plasma-ui): Carousel: dynamic options list refresh [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   Bump independent versions \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))
-   Update CHANGELOG.md \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.0.0 (Fri Apr 02 2021)

#### 🐛 Bug Fix

-   fix: plasma doc before major [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
-   build(plasma-ui): move files [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.20.0 (Wed Nov 11 2020)

#### 🚀 Enhancement

-   feat(ui): Доработана докуменация по Card [#58](https://github.com/salute-developers/plasma/pull/58) ([@fanisco](https://github.com/fanisco))
-   feat(icon): Добавлены новые иконки xs:16 & s:24 [#57](https://github.com/salute-developers/plasma/pull/57) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

-   chore: updated lock files [#62](https://github.com/salute-developers/plasma/pull/62) ([@Yeti-or](https://github.com/Yeti-or))
-   build: запускать сборку доки с ts3.5.3 [#62](https://github.com/salute-developers/plasma/pull/62) ([@Yeti-or](https://github.com/Yeti-or))
-   build(ui): ts ломает сборку доки [#57](https://github.com/salute-developers/plasma/pull/57) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: правки после рефакторинга [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))
-   chore: Удалены стори и дока для Cart [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))
-   fix: компонент Input [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))
-   fix: remove old icons from components [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))
-   refactor: new icons [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 3

-   [@IgorAntonov](https://github.com/IgorAntonov)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.19.0 (Tue Nov 10 2020)

#### 🚀 Enhancement

-   feat(ui): Добавлена карточка в сторибук и докзи [#51](https://github.com/salute-developers/plasma/pull/51) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   docs(ui): fix links and stuff [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
-   chore(ui): more cleanup [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: cleanup [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
-   docs: Обновить документацию [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: storybook: поправить глобальные стили [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.18.0 (Tue Nov 10 2020)

#### 🚀 Enhancement

-   feat(ui): Добавлены компоненты TextBox & Cell [#47](https://github.com/salute-developers/plasma/pull/47) ([@Yeti-or](https://github.com/Yeti-or))
-   feat(ui): add Cell component [#47](https://github.com/salute-developers/plasma/pull/47) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 2

-   [@IgorAntonov](https://github.com/IgorAntonov)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.17.0 (Tue Nov 10 2020)

#### 🚀 Enhancement

-   feat(ui): Удален Card.stories [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
-   feat(ui): Скрыт ScrollList [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
-   feat(ui): Удален LooneyTunes [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
-   feat(ui): Доработаны Input, Field (TextField) [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
-   feat(ui): Доработан Button [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
-   feat(ui): Доработан Badge [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.16.0 (Mon Nov 09 2020)

#### 🚀 Enhancement

-   feat(ui): Перевел сетку на rem-ы [#43](https://github.com/salute-developers/plasma/pull/43) ([@fanisco](https://github.com/fanisco))
-   feat(ui): В сторибук заменены вьюпорты на родные для сетки [#43](https://github.com/salute-developers/plasma/pull/43) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.15.0 (Thu Nov 05 2020)

#### 🐛 Bug Fix

-   fix(ui): исправление storybook под rem-ы [#36](https://github.com/salute-developers/plasma/pull/36) ([@fanisco](https://github.com/fanisco))
-   chore(ui): add missing deps to useCb [#38](https://github.com/salute-developers/plasma/pull/38) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.14.0 (Fri Oct 30 2020)

#### 🚀 Enhancement

-   feat(ui): Переход на общий фокус-миксин [#33](https://github.com/salute-developers/plasma/pull/33) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.13.0 (Fri Oct 30 2020)

#### 🚀 Enhancement

-   feat(ui): Добавить шаг prepare/build в публикацию [#34](https://github.com/salute-developers/plasma/pull/34) ([@IgorAntonov](https://github.com/IgorAntonov))

#### 🐛 Bug Fix

-   refactor(ui): fix another lint errors [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
-   refactor(ui): fix lint errors [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
-   ci: bump locks \[skip ci\] [#34](https://github.com/salute-developers/plasma/pull/34) ([@Yeti-or](https://github.com/Yeti-or))
-   chore: change logo image for docs/storybook [#32](https://github.com/salute-developers/plasma/pull/32) ([@IgorAntonov](https://github.com/IgorAntonov))
-   refactor(ui): format currency without package i18n [#32](https://github.com/salute-developers/plasma/pull/32) ([@IgorAntonov](https://github.com/IgorAntonov))
-   build: remove private packages from deps [#32](https://github.com/salute-developers/plasma/pull/32) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 2

-   [@IgorAntonov](https://github.com/IgorAntonov)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.11.0 (Thu Oct 29 2020)

#### 🚀 Enhancement

-   feat(ui): переработаны Button и ActionButton [#29](https://github.com/salute-developers/plasma/pull/29) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   docs(ui): fix empty documentation [#30](https://github.com/salute-developers/plasma/pull/30) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 2

-   [@IgorAntonov](https://github.com/IgorAntonov)
-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.10.0 (Wed Oct 28 2020)

#### 🚀 Enhancement

-   feat(ui): использование Button beforeFocusOutline [#22](https://github.com/salute-developers/plasma/pull/22) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.9.0 (Tue Oct 27 2020)

#### 🚀 Enhancement

-   feat(ui): views вынесены в mixins [#17](https://github.com/salute-developers/plasma/pull/17) ([@fanisco](https://github.com/fanisco))
-   feat(ui): доработка Button API в рамках работы над Card [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))
-   feat(ui): доработка Badge API в рамках работы над Card [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))
-   feat(ui): доработка Card [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   chore(ui): bump deps versions in lock [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))
-   chore(ui): types, mixins [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.8.0 (Tue Oct 27 2020)

#### 🚀 Enhancement

-   feat(ui): добавить иконки для новостей [#16](https://github.com/salute-developers/plasma/pull/16) ([@Alisa007](https://github.com/Alisa007))

#### Authors: 1

-   [@Alisa007](https://github.com/Alisa007)

---

# v0.7.0 (Tue Oct 27 2020)

#### 🚀 Enhancement

-   feat(ui): Размеры ячеек Col расчитываются исходя из размеров Container [#3](https://github.com/salute-developers/plasma/pull/3) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   ci: add chromatic to ui [#9](https://github.com/salute-developers/plasma/pull/9) ([@Yeti-or](https://github.com/Yeti-or))
-   ci: add chromatic to ui ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.6.2 (Mon Oct 26 2020)

#### 🐛 Bug Fix

-   fix: license [#7](https://github.com/salute-developers/plasma/pull/7) ([@Yeti-or](https://github.com/Yeti-or))
-   fix: license ([@Yeti-or](https://github.com/Yeti-or))
-   fix(ui): url to repo [#6](https://github.com/salute-developers/plasma/pull/6) ([@Yeti-or](https://github.com/Yeti-or))
-   fix(ui): url to repo ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
