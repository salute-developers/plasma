# v1.81.0 (Thu May 30 2024)

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
- feat(plasma-tokens): add surface transparent tokens ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.80.0 (Thu Apr 25 2024)

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
- fix: use styled-components@5.3.1 [#1190](https://github.com/salute-developers/plasma/pull/1190) ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.78.0 (Thu Apr 11 2024)

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
- feat(plasma-tokens): Update all themes ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update `default` themes ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: delete unnecessary caldera themes [#1158](https://github.com/salute-developers/plasma/pull/1158) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.76.0 (Thu Mar 28 2024)

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

- chore: Update package-lock.json files [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

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

# v1.75.0 (Fri Mar 01 2024)

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
- feat(sdds-serv): add components from new-hope [#1056](https://github.com/salute-developers/plasma/pull/1056) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-tokens): rename sdds theme ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-tokens): Add theme sdds_serv [#1052](https://github.com/salute-developers/plasma/pull/1052) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore: update package-locks [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- fix: add desc prop [#1055](https://github.com/salute-developers/plasma/pull/1055) ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump manual package-locks [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@TitanKuzmich](https://github.com/TitanKuzmich))

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

# v1.72.0 (Thu Feb 15 2024)

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
- feat(plasma-tokens): Add theme flamingo [#941](https://github.com/salute-developers/plasma/pull/941) ([@luizasok](https://github.com/luizasok))
- feat(plasma-tokens): Add theme sdds_srvc [#1027](https://github.com/salute-developers/plasma/pull/1027) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore: update fonts for docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

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

# v1.70.0 (Thu Feb 01 2024)

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
- feat(plasma-tokens): Add theme caldera_online [#1013](https://github.com/salute-developers/plasma/pull/1013) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-tokens): Add theme caldera ([@luizasok](https://github.com/luizasok))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-01-31 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

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

# v1.68.0 (Thu Jan 18 2024)

### Release Notes

#### Release by 18.01.2024 ([#981](https://github.com/salute-developers/plasma/pull/981))

## Components

### Carousel

- добавлен пропс `scrollSnapStop` в `Carousel`

 
feat(plasma-core): Add new prop (scrollSnapStop) to the Carousel component (https://github.com/salute-developers/plasma/pull/940)


### Skeleton

- добавлен компонент в новой архитектуре
- включен в поставку b2c/web
- удален из plasma-hope
- написаны тесты
- поправлен компонент Button для использования в styled

 
feat(plasma-new-hope/b2c/web): add skeleton with new architecture (https://github.com/salute-developers/plasma/pull/954)

### Skeleton

-   добавлены размеры под новую типографику

 
feat(plasma-b2c/web): add skeleton new typography sizes (https://github.com/salute-developers/plasma/pull/960)


### Header

-  добавлен prop, который позволяет применять mediaQuery для S-viewport по условию
-  добавлен тест на данный кейс

 
feat(plasma-ui): add property to show/hide subtitle on S viewport (https://github.com/salute-developers/plasma/pull/958)


### Popover arrow

-   Поправлено отображение `Popover arrow` в Safari, Firefox

 
fix(plasma-web): fix Popover arrow in Safari, Firefox (https://github.com/salute-developers/plasma/pull/963)


### Image

- добавлен в поставку `plasma-{b2c, web}`
- добавлен UI тесты
- удален из `plasma-hope`

 
feat(plasma-new-hope/web/b2c): Image refactor & redesign (https://github.com/salute-developers/plasma/pull/968)

### Badge

-  добавлен в поставку `plasma-{b2c,web,new-hope}`
-  дополнены тесты

 
feat(plasma-new-hope/web/b2c): Badge refactor & redesign (https://github.com/salute-developers/plasma/pull/964)

### Counter

- добавлен в поставку `plasma-{b2c,web,new-hope}`
- написаны тесты и документация

 
feat(plasma-new-hope/web/b2c): Counter component (https://github.com/salute-developers/plasma/pull/965)


## Icons

-  добавлены **новые** иконки размера 24x24, 1025 штук
-  добавлены **новые** категории иконок в разделе icons на сайте

feat(plasma-icons): Add new 24x24 icons (https://github.com/salute-developers/plasma/pull/955)


## Infra

### Perftool

- обновление версии @salutejs/perftool@0.24

 
Update perftool (https://github.com/salute-developers/plasma/pull/932)

### @Auto-it CLI 

- добавлена возможность прокинуть опции/флаги для запуска - **auto shipit**;
- выключили генерацию changelog для pubslish: canary, RC;  

 
plasma-infra: Pass cli options for "@auto-it" (https://github.com/salute-developers/plasma/pull/890)

### Changelog workflow

- добавлена новая категория `Bugs`
- экранирование спец символов 

 
plasma-infra: Improve changelog workflow  (https://github.com/salute-developers/plasma/pull/967)


## Tokens

### Tokens naming

- изменена нотация с `camelCase` на `kebab-case` для старых токенов цветов и типографики

Было:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 54" src="https://github.com/salute-developers/plasma/assets/26903236/b83f776b-e4f9-43e1-9506-bff3d25f7e71">

Стало:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 17" src="https://github.com/salute-developers/plasma/assets/26903236/10298375-1a54-4dd4-8fe3-8af74c3e40b1">

 
feat(plasma-tokens-utils): Update formatting tokens name from camelCase to kebab-case  (https://github.com/salute-developers/plasma/pull/971)

## Bugs

### Calendar

-   добавлен `ref` в `forwardRef` вторым аргументом

 
feat(plasma-new-hope): fix CalendarDouble ref (https://github.com/salute-developers/plasma/pull/959)


### Carousel

- решен баг с пролистыванием (onDragScroll) в accessible mode - mobile & desktop.
- control panel в карусели работает корректно (можно выбрать scrollAlign).

 
fix(plasma-hope/plasma-web): Turn onDragScroll off by default in accessibility mode in Carousel. Fix storybook control panel in it. (https://github.com/salute-developers/plasma/pull/957)

### Spinner

- исправлено отображение компонента `Spinner` при размере 8px

 
fix(plasma-new-hope): Fix size for `Spinner` component (https://github.com/salute-developers/plasma/pull/966)

## Misc

### Typography

-  root для типографики вынесен в общий компонент
-  className, style теперь явно задаются в компоненте
-  исправлены конфиги для asdk поставки

 
feat(plasma-new-hope/b2c/web): redefining classnames for typography (https://github.com/salute-developers/plasma/pull/947)

---

#### 🚀 Enhancement

- Release by 18.01.2024 [#981](https://github.com/salute-developers/plasma/pull/981) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update typo tokens for legacy themes [#971](https://github.com/salute-developers/plasma/pull/971) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update color tokens for legacy themes ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.67.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.66.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-tokens): npm audit fix vulnerabilities ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump TS to 4.2.4 [#869](https://github.com/salute-developers/plasma/pull/869) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.65.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
- feat(plasma-typo): add font family fallback for asdk ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.64.0 (Fri Sep 29 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Replace rgb/a and hexa values to values from color palette [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Replace tokens value in schemes to colors palette [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-tokens,plasma-token-native): Change legacy token value to css-variables [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.63.0 (Thu Sep 14 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Add generate css files with typo tokens [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-tokens): Add generate css files with color tokens [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-tokens): Update css vars in web themes from `src` directory [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-tokens-utils): Add kebab case for css vars in web themes [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-tokens): Update gradient tokens in `stylesSalute` scheme for ios and android platforms [#699](https://github.com/salute-developers/plasma/pull/699) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 4

- [@Salute-Eva](https://github.com/Salute-Eva)
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- Neretin Artem (neretinartem@Neretins-MBP.netis)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.61.0 (Mon Sep 04 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-tokens): replace "error" to "warn" for eslint rules: prefer-template, import/order [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.59.0 (Fri Aug 18 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Update `src` directories with `spacing` tokens in sbermarket themes [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add `spacing` tokens to sbermarket schemes [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- feat(plasma-tokens,plasma-tokens-utils): Add generate `spacing` tokens for web [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens,plasma-tokens-utils): Update `default` theme with actualized tokens [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-tokens): Update `src` directory for `sbermarket` themes [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- fix(palsma-tokens): Update values in border-radius tokesn for `sbermarket` schemes [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.58.0 (Thu Aug 03 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Add `default` theme and tokens generation [#636](https://github.com/salute-developers/plasma/pull/636) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update `src` directory [#638](https://github.com/salute-developers/plasma/pull/638) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add `plasma-web` scheme [#638](https://github.com/salute-developers/plasma/pull/638) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update `src` directory and rename `asdk` -> `stylesSalute` [#625](https://github.com/salute-developers/plasma/pull/625) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add `stylesSalute` and remove `asdk` scheme [#625](https://github.com/salute-developers/plasma/pull/625) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Udpate `src` directory for new shadow tokens [#624](https://github.com/salute-developers/plasma/pull/624) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Udpate some JSON schemes for new shadow format [#624](https://github.com/salute-developers/plasma/pull/624) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens-native): Update `react-native` generator for `shadow` tokens [#624](https://github.com/salute-developers/plasma/pull/624) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update `src` directory for `plasma_b2c` theme [#617](https://github.com/salute-developers/plasma/pull/617) ([@neretin-trike](https://github.com/neretin-trike))

#### ⚠️ Pushed to `master`

- Merge branch 'dev' ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.57.0 (Thu Jun 29 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Remove `salutejs_brand` theme [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update `src` directory for `plasma_b2c` theme [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add theme plasmab2sstyles [#582](https://github.com/salute-developers/plasma/pull/582) ([@Irinkv](https://github.com/Irinkv))
- feat(plasma-tokens): Update `src` directory [#582](https://github.com/salute-developers/plasma/pull/582) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-tokens): Update `asdk` theme with xml [#582](https://github.com/salute-developers/plasma/pull/582) (neretinartem@Neretins-MacBook-Pro.local)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@Irinkv](https://github.com/Irinkv)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.56.0 (Tue Jun 20 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Update `src` directory with new tokens [#518](https://github.com/salute-developers/plasma/pull/518) (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Add theme ASDK [#559](https://github.com/salute-developers/plasma/pull/559) ([@AleksandraIushkova](https://github.com/AleksandraIushkova))

#### 🐛 Bug Fix

- docs: delete unnecessary mention in readme files [#543](https://github.com/salute-developers/plasma/pull/543) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 3

- [@AleksandraIushkova](https://github.com/AleksandraIushkova)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.55.0 (Thu Jun 01 2023)

#### 🐛 Bug Fix

- chore: [packages] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.54.0 (Mon May 22 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Update `src` directory with new tokens [#514](https://github.com/salute-developers/plasma/pull/514) (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Add methods for generate border-radius tokens (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Add border-radius tokens to schemes (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Rename file and methods for more symmantics (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- fix(plasma-tokens): Fix some measure for shadows tokens (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.53.0 (Fri May 19 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-*): Add override colors for fallback (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.52.0 (Fri May 19 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Update `src` directory with new tokens [#513](https://github.com/salute-developers/plasma/pull/513) (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Add theme SBOL ([@gibushnev](https://github.com/gibushnev))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@gibushnev](https://github.com/gibushnev)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.51.0 (Thu May 18 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Remove generate value files from createBrands (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Update `src` directory with robo comment in typography files (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Update `src` directory with new shadow tokens (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Add shadow tokens to new schemas (neretinartem@Neretins-MBP.netis)

#### ⚠️ Pushed to `master`

- feat(plasma-tokens, plasma-tokens-utils): Add generete token set and themes for new schemas (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.50.0 (Tue May 16 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Remove source generation methods (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Remove native themes generator (neretinartem@Neretins-MBP.netis)

#### Authors: 2

- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.49.0 (Fri Apr 28 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Remove generation legacy tokens and themes for native platforms [#493](https://github.com/salute-developers/plasma/pull/493) (neretinartem@Neretins-MacBook-Pro.local)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)

---

# v1.48.0 (Thu Apr 27 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Update `src` directory [#487](https://github.com/salute-developers/plasma/pull/487) (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Updating and refactoring themes generate (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Remove generate `theme.json` file (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Remove new schema generate (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Remove size tokens from generate (neretinartem@Neretins-MBP.netis)

#### ⚠️ Pushed to `master`

- fix(plasma-tokens, plasma-tokens-utiles): Add plasma-colors prefix to depracted tokens (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.47.0 (Mon Apr 24 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Remove design-language pacakage [#489](https://github.com/salute-developers/plasma/pull/489) (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Saving themes artifacts from diez compile (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.46.0 (Fri Apr 21 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Remove `src` directory from .gitignore [#488](https://github.com/salute-developers/plasma/pull/488) (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- fix(plasma-tokens): Update theme name `sbermarket_winelab` to `sbermarket_wlbusiness` (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.45.0 (Wed Apr 19 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Update formatter for colorIosSwift, colorKotlin, colorReactNative templates [#475](https://github.com/salute-developers/plasma/pull/475) (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Update theme name convetion for old and new themes (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- fix(plasma-tokens): Update theme name `vinlab` to `winelab` (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.44.0 (Fri Mar 31 2023)

#### 🚀 Enhancement

- fix(plasma-tokens): Rename tenants name for `sbermarket` [#459](https://github.com/salute-developers/plasma/pull/459) (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Add `sbermarketVinlab` theme (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- fix(plasma-tokens): Fix theme name for gradient function in Swift formatters (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.43.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.42.0 (Fri Mar 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.40.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.39.1 (Tue Mar 07 2023)

#### 🐛 Bug Fix

- fix(plasma-tokens): Remove `plasma-colors` prefix from brand themes [#391](https://github.com/salute-developers/plasma/pull/391) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.38.0 (Mon Feb 20 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Add new name for TokenGroup [#361](https://github.com/salute-developers/plasma/pull/361) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.37.1 (Mon Feb 20 2023)

#### 🐛 Bug Fix

- fix(plasma-tokens): Fix sberHealth scheme in json [#359](https://github.com/salute-developers/plasma/pull/359) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.37.0 (Fri Feb 17 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Add theme sberHealth [#354](https://github.com/salute-developers/plasma/pull/354) ([@gibushnev](https://github.com/gibushnev))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@gibushnev](https://github.com/gibushnev)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.36.0 (Wed Feb 15 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.35.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.33.1 (Thu Feb 02 2023)

#### 🐛 Bug Fix

- fix(plasma-tokens): Update token template for Kotlin and React-Native platforms [#305](https://github.com/salute-developers/plasma/pull/305) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.33.0 (Wed Feb 01 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Add generate shadow tokens for React-Native [#288](https://github.com/salute-developers/plasma/pull/288) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasmsa-tokens): Add shadow tokens [#288](https://github.com/salute-developers/plasma/pull/288) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.32.0 (Mon Dec 26 2022)

#### 🚀 Enhancement

- fix(plasma-tokens): Fix onDarkTextPrimary token [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update template token colors for ios-swift platform [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add tokens generate fot ios-swift platform [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix(plasma-tokens): Fix react-native template [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-tokens): Fix kotlin template [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.31.0 (Thu Dec 15 2022)

#### 🐛 Bug Fix

- fix(plasma-tokens): update tokens value [#265](https://github.com/salute-developers/plasma/pull/265) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.30.0 (Wed Dec 14 2022)

#### 🚀 Enhancement

- feat(plasma-tokens,plasma-tokens-utils): Add remove prefix from data themes [#217](https://github.com/salute-developers/plasma/pull/217) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add sbermarket tenants [#217](https://github.com/salute-developers/plasma/pull/217) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.29.0 (Thu Dec 08 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.28.2 (Wed Nov 09 2022)

#### 🐛 Bug Fix

- fix(plasma-tokens): Fix gradient generator for iOS platform [#211](https://github.com/salute-developers/plasma/pull/211) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.28.0 (Mon Oct 31 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): Add typography generator [#198](https://github.com/salute-developers/plasma/pull/198) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.27.1 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- fix(plasma-tokens): Fix template generator for kotlin [#203](https://github.com/salute-developers/plasma/pull/203) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-tokens): Fix `sbermarket` theme [#203](https://github.com/salute-developers/plasma/pull/203) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.27.0 (Wed Oct 19 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): Add `sberprime` theme [#182](https://github.com/salute-developers/plasma/pull/182) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix(plasma-tokens): Fix theme generator [#182](https://github.com/salute-developers/plasma/pull/182) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.26.0 (Mon Oct 03 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): Add gradient to `sbermarket` theme [#170](https://github.com/salute-developers/plasma/pull/170) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add gradient generators [#170](https://github.com/salute-developers/plasma/pull/170) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.25.0 (Wed Sep 28 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): Add `sbermarket` theme [#166](https://github.com/salute-developers/plasma/pull/166) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add customs theme generators [#166](https://github.com/salute-developers/plasma/pull/166) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.24.0 (Thu Sep 15 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): Add b2e theme [#165](https://github.com/salute-developers/plasma/pull/165) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.23.0 (Wed Sep 14 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): Replace theme colors for button focus to primary in token [#135](https://github.com/salute-developers/plasma/pull/135) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.22.0 (Thu Sep 08 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): save themes artifacts [#136](https://github.com/salute-developers/plasma/pull/136) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# v1.21.0 (Thu Sep 01 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): update html view [#122](https://github.com/salute-developers/plasma/pull/122) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- feat(plasma-tokens): update theme cli setup [#122](https://github.com/salute-developers/plasma/pull/122) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- feat(plasma-tokens): generate html view [#122](https://github.com/salute-developers/plasma/pull/122) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# v1.20.0 (Thu Aug 18 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): generate android and ios tokens [#121](https://github.com/salute-developers/plasma/pull/121) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# v1.19.0 (Wed Aug 10 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): generate custom theme tokens [#119](https://github.com/salute-developers/plasma/pull/119) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- feat(plasma-tokens): theme creator [#115](https://github.com/salute-developers/plasma/pull/115) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# v1.18.0 (Wed Apr 27 2022)

#### 🐛 Bug Fix

- fix: monorepo deps resolved [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.15.3 (Fri Feb 18 2022)

#### 🐛 Bug Fix

- chore: Added fixme comments for background tokens [#1106](https://github.com/salute-developers/plasma/pull/1106) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.15.2 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-ui, plasma-web, plasma-b2c): `Button`: Added theming [#1063](https://github.com/salute-developers/plasma/pull/1063) ([@fanisco](https://github.com/fanisco))
- feat(plasma-tokens, plasma-tokens-web, plasma-tokens-b2c): Added possibility for component theming [#1063](https://github.com/salute-developers/plasma/pull/1063) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.15.1 (Thu Jan 13 2022)

#### 🐛 Bug Fix

- fix(plasma-tokens): wrong primary/secondary tokens [#1030](https://github.com/salute-developers/plasma/pull/1030) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.15.0 (Thu Dec 30 2021)

#### 🚀 Enhancement

- feat(plasma-tokens): addd brand theme and update some tokens [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- fix(plasma-tokens): forgotten buttonFocus [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yeti-or](https://github.com/Yeti-or))
- build(plasma-tokens): load figma stuff [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.14.0 (Fri Oct 08 2021)

#### 🚀 Enhancement

- feat(plasma-core): Added global `dark0N` colors [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.13.0 (Tue Sep 14 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.12.2 (Tue Sep 14 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- build: freeze typescript [#799](https://github.com/salute-developers/plasma/pull/799) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.12.1 (Wed Sep 08 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-tokens): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.12.0 (Mon Aug 23 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.11.0 (Fri Aug 20 2021)

#### 🚀 Enhancement

- feat: Skeleton in core/ui/web [#628](https://github.com/salute-developers/plasma/pull/628) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.10.1 (Fri Aug 06 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.10.0 (Fri Aug 06 2021)

#### 🚀 Enhancement

- feat: Build plasma tokens without rollup [#608](https://github.com/salute-developers/plasma/pull/608) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.9.0 (Thu Jul 08 2021)

#### 🚀 Enhancement

- feat(plasma-tokens): grouping color tokens for mobile [#504](https://github.com/salute-developers/plasma/pull/504) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.8.1 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.8.0 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-tokens): links and anchors fixed [#448](https://github.com/salute-developers/plasma/pull/448) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.7.0 (Wed Jun 23 2021)

#### 🚀 Enhancement

- feat(plasma-tokens): Updated tokens from plasma-styles [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.6.1 (Thu Jun 17 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.6.0 (Wed Jun 09 2021)

#### 🚀 Enhancement

- feat(plasma-tokens): Using plasma-colors [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.5.1 (Mon May 31 2021)

#### 🐛 Bug Fix

- fix(plasma-tokens): backward compatibility [#419](https://github.com/salute-developers/plasma/pull/419) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.5.0 (Mon May 31 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.4.0 (Mon May 31 2021)

#### 🚀 Enhancement

- feat: es module build for plasma-tokens [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- build: es5 target for plasma-tokens [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- fix: sideEffects false for tokens [#341](https://github.com/salute-developers/plasma/pull/341) ([@KateKate](https://github.com/KateKate))
- fix: es build in tokens by default [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))

---

# v1.3.0 (Fri May 07 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.2.0 (Thu May 06 2021)

#### 🐛 Bug Fix

- build: fix package-locks [#337](https://github.com/salute-developers/plasma/pull/337) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.1.0 (Wed Apr 07 2021)

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))
- Update CHANGELOG.md \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.0.0 (Fri Apr 02 2021)

#### 💥 Breaking Change

- feat!: Делаем пакеты публичными [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))

#### 🚀 Enhancement

- feat(ui): DeviceDetect: touch => mobile. BREAKING [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- feat: Переход plasma-tokens на общие механизмы [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: Лицензия для core, ui: DeviceDetection [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat(plasma-tokens): Typography CSS Vars & Types [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat(plasma-tokens): switch from ios/android assets to packages [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- feat(plasma-tokens): add tokens for android/ios [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- feat(plasma-tokens): Градиенты подсказок о голосовых запросах [#279](https://github.com/salute-developers/plasma/pull/279) ([@maderwin](https://github.com/maderwin))
- feat(ui): Обновлены токены плазмы [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix: plasma doc before major [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- Create principles.md [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- ci(plasma-tokens): tar tokens [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- chore: изменены ссылки на документацию [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- docs: add badges to @rc [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

- [@IgorAntonov](https://github.com/IgorAntonov)
- Artyom Zakharov ([@maderwin](https://github.com/maderwin))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.4.0 (Wed Nov 11 2020)

#### 🐛 Bug Fix

- chore: updated lock files [#62](https://github.com/salute-developers/plasma/pull/62) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.3.0 (Tue Nov 10 2020)

#### 🐛 Bug Fix

- docs: update links [#48](https://github.com/salute-developers/plasma/pull/48) ([@Yeti-or](https://github.com/Yeti-or))
- docs(ui): fix links and stuff [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
- chore(ui): more cleanup [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
- chore: cleanup [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
- docs: Обновить документацию [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.2.0 (Thu Nov 05 2020)

#### 🚀 Enhancement

- feat(plasma-tokens): Генерация размеров в rem [#36](https://github.com/salute-developers/plasma/pull/36) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.1.0 (Tue Oct 27 2020)

#### 🐛 Bug Fix

- ci: add chromatic to ui [#9](https://github.com/salute-developers/plasma/pull/9) ([@Yeti-or](https://github.com/Yeti-or))
- ci: add chromatic to ui ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.0.3 (Mon Oct 26 2020)

#### 🐛 Bug Fix

- fix: license [#7](https://github.com/salute-developers/plasma/pull/7) ([@Yeti-or](https://github.com/Yeti-or))
- fix: license ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
