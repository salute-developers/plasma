# v1.43.0 (Thu Oct 17 2024)

### Release Notes

#### Release by 16.10.2024 ([#1487](https://github.com/salute-developers/plasma/pull/1487))

## Components

### Accordion

- свойство `view` помечено как `optional`
- свойство `view` для AccordionItem помечено как `deprecated`      
- свойство `title` для `AccordionItem` теперь `ReactNode` 


 
[PLASMA-3591]: Fix Accordion types  (https://github.com/salute-developers/plasma/pull/1467)

### TextArea

- исправлен скроллбар
- обновлены `snapshots`

 
feat(plasma-*, sdds-*): TextArea scrollbar (https://github.com/salute-developers/plasma/pull/1471)

### Popup

- добавлены storybook декораторы для `Popup` и `Notification` для правильного отображения: `Drawer, Modal, Notification, Popup`

 
plasma-*: Fix popup mount logic (https://github.com/salute-developers/plasma/pull/1412)

### Tabs 

- вертикальные табы добавлены в поставку всех клиентских библиотек
- добавлено свойство `value` для горизонтальных и вертикальных табов
- исправлены токены для всех пакетов

<img width="181" alt="Снимок экрана 2024-09-24 в 14 39 29" src="https://github.com/user-attachments/assets/9889e4d1-9297-4cf9-a577-23f5d1c8c9af">

<img width="163" alt="Снимок экрана 2024-09-24 в 14 38 56" src="https://github.com/user-attachments/assets/596e92aa-1136-4f41-bb29-67ce31dbff75">

 
`plasma-*, sdds-*`: Vertical Tabs added (https://github.com/salute-developers/plasma/pull/1374)

### Badge

- добавлен новый размер `XS`


 
[PLASMA-3598]: Badge: Add size XS   (https://github.com/salute-developers/plasma/pull/1466)

### `SDDS-CS`

#### Button

- используется token `--text-accent` когда `view: secondary` 

#### Chip

- для `closeIconColor` используется token `--text-accent` когда `view: secondary` 

#### Badge

- изменены `padding{Right,Left}` на  `8px`

 
[PLASMA-3611]: Правки конфигураций Button, Chip, Badge [SDDS-CS] (https://github.com/salute-developers/plasma/pull/1473)

### Breadcrumbs

* добавлена поддержка обработчика `onClick` при клике на ссылку
* поправлены union типы 
* обновлена документация с указанием типов элементов

 
feat(plasma-new-hope, *-docs): Add onClick for item to `Breadcrumbs` component (https://github.com/salute-developers/plasma/pull/1480)

### Tabs
- исправлен скролл табов при малой ширине
- в `storybooks` добавлены свойства `width` и `height`, доступные при условии `clip = scroll`

 
`plasma-new-hope`: fix tabs arrow scroll (https://github.com/salute-developers/plasma/pull/1476)

### Attach
- исправлен `onChange`, `id` и `name`
- добавлено свойство `onClear`
- в документацию добавлен пример с использованием компонента внутри формы

 
`plasma-new-hope`: fix Attach (https://github.com/salute-developers/plasma/pull/1481)

### Combobox

- добавлен дженерик для св-ва `items` в компоненте Combobox

 
feat(plasma-b2c, web, sdds): Added generic for items in Combobox (https://github.com/salute-developers/plasma/pull/1470)

### TextArea 

- добавлена фокусировка по клику на дочерние элементы

 
plasma-*: Focus TextArea by click inside (https://github.com/salute-developers/plasma/pull/1444)

### SDDS CS Pack 4 ( overlay and navigation )

- изменены токены для компонентов: `Autocomplie`, `Avatar`, `Breadcrumbs`, `Cell`, `Drawer`, `Dropdown`, `Modal`, `Notification`, `Pagination`, `Popover`, `Price`, `Progress`, `Segment`, `Slider`, `Tabs`, `Toast`, `Toolbar`, `Tooltip`
- добавлена и обновлена актуальная документация

 
fix(sdds-cs): set overlay and navigation tokens (https://github.com/salute-developers/plasma/pull/1458)

### DatePicker

- добавлен вызов change callback при выборе даты из календаря
- добавлена возможность указать frame, в котором будет происходить рендер календаря
- добавлена сортировка дат для Range DatePicker
- исправлено поведение фокуса при закрытии календаря

 
feat(plasma-new-hope): Datepicker improvements (https://github.com/salute-developers/plasma/pull/1475)

### Segment

* добавлен вертикальный режим
* обновлен дизайн горизонтального отображения
* обновлен CS дизайн

 
feat: Segment redesign (https://github.com/salute-developers/plasma/pull/1392)


## Docs

### Документация `SDDS-CS`

- исправлены некорректные `imports` для примеров в документации к `Dropdown`
- добавлена страница для компонента `Tooltip`

 
[PLASMA-3536]: Fix incorrect imports by doc (https://github.com/salute-developers/plasma/pull/1469)


## Misc

### Attach

- исправлен `truncate` имени файла
- исправлены тесты

 
`plasma-new-hope`: fix attach truncate (https://github.com/salute-developers/plasma/pull/1454)


feat(plasma-tokens): auto generate stylesSalute theme (https://github.com/salute-developers/plasma/pull/1472)

### ThemeBuilder 

* изменены методы генерации базовой темы в старом формате
* изменены методы генерации базовой темы для новой архитектуры 

 
feat(plasma-theme-builder): Update generating default theme (https://github.com/salute-developers/plasma/pull/1477)

### Toast

- исправлен токен background для view="dark"

**Before**
<img width="319" alt="image" src="https://github.com/user-attachments/assets/fea32b30-270b-48c1-87f0-d6169e2d3bd7">

**After**
<img width="128" alt="image" src="https://github.com/user-attachments/assets/f52f5174-2a52-4dd0-a964-7fbcd52fdad6">


 
fix(plasma-*,sdds-*): Fix Toast background token (https://github.com/salute-developers/plasma/pull/1478)

---

#### 🚀 Enhancement

- Release by 16.10.2024 [#1487](https://github.com/salute-developers/plasma/pull/1487) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@denivladislav](https://github.com/denivladislav) [@luizasok](https://github.com/luizasok) [@neretin-trike](https://github.com/neretin-trike) [@vadim-kudr](https://github.com/vadim-kudr) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v1.42.0 (Thu Sep 05 2024)

### Release Notes

#### Release by 04.09.2024 ([#1420](https://github.com/salute-developers/plasma/pull/1420))

## Components

### Switch

- токены для `Switch` приведены в соответствие с макетами
- добавлено состояние `hover`
- удален `skip test` для свойства `pressed` (это свойство deprecated). Вместо него добавлен тест `onMouseDown` с событием `realMouseDown`
- в тест `OnClick` добавлен `realClick`

 
plasma-*, sdds-*: Fix `Switch` tokens (https://github.com/salute-developers/plasma/pull/1388)

### DatePicker

- добавлена поддержка русского и английского языка
- добавлено форматирование даты 

 
plasma-(*): Add format and lang in Datepicker (https://github.com/salute-developers/plasma/pull/1404)

### ModalBase

- обновлен токен `modalOverlayColor` в `plasma-{web, b2c}`

 
plasma-{web,b2c}: update ModalBase modalOverlayColor token (https://github.com/salute-developers/plasma/pull/1364)

### TextFieldGroup

- добавлен новый компонент для `plasma-{web, b2c}, sdds-{serv, dfa}`
- написаны тесты и документация

 
feat(plasma-*,sdds-*): component textfield group (https://github.com/salute-developers/plasma/pull/1405)

### TextArea/TextField

- добавлены новые свойства: `required`, `requiredPlacement, optional`
- обновлены screenshots и документация

 
feat(plasma-*, sdds-*): Add required variation to TextArea/TextField (https://github.com/salute-developers/plasma/pull/1352)

### Combobox

- добавлен в поставку для `plasma-{web, b2c},  sdds-*`
- реализована вложенность (на основе [Floating UI](https://floating-ui.com/))
- добавлено новое свойство `closeAfterSelect` в `Combobox` и `Select`.
- поправлен отступ в компоненте `Select` в варианте `textfield-like`.

 
plasma-*, sdds-*: Combobox v2 (https://github.com/salute-developers/plasma/pull/1406)

### SDDS FIN PORTAL

- опубликован новый пакет `@salutejs/sdds-finportal`


 
sdds-finportal: Add new package FinPortal (https://github.com/salute-developers/plasma/pull/1417)


## Icons

### Update icons list

**FilterOff**
<img width="48"  src="https://github.com/user-attachments/assets/b254cc01-da2e-474a-879e-9ddf2a9e8bbc" />

**MessageNew**
<img width="64" src="https://github.com/user-attachments/assets/07c725e5-2164-4631-9778-7c2070cc9a12" />

**Poop**
<img width="128" src="https://github.com/user-attachments/assets/37c32fdd-36d1-4cd0-a4c9-ac9e0f4fb8b0" />

**Blank**
<img width="551" src="https://github.com/user-attachments/assets/7cf57627-eb40-493f-ada6-bf23c96fc3d8" />

**WindowMaximize/Minimize**
<img width="211"  src="https://github.com/user-attachments/assets/73543cd4-b357-4ce3-9737-f1a4f49930dc" />

**Logos**
<img width="86" src="https://github.com/user-attachments/assets/a6e015ab-3df3-4c01-8f88-48aa786e0399" />



 
feat(plasma-icons): Update icons sets (https://github.com/salute-developers/plasma/pull/1414)


## Tokens

### Add Brightness Tokens

- Добавлены новые токены `-brightness` в `theme-builder`
- Во все темы добавлены новый токены для высветления: `combobox`, `dropdown`, `notification`, `toast`, `toolbar` и `tooltip` 
- Исправлен компонент `Comobox` и обновлены тесты
- Изменен workfkow cypress

 
plasma-(*): Add Brightness Tokens (https://github.com/salute-developers/plasma/pull/1361)


## Misc

### Tests
-   изменены тесты plasma-b2c компонентов ButtonGroup и IconButton

 
test(plasma-b2c): update tests for ButtonGroup and IconButton (https://github.com/salute-developers/plasma/pull/1407)

---

#### 🚀 Enhancement

- Release by 04.09.2024 [#1420](https://github.com/salute-developers/plasma/pull/1420) ([@denivladislav](https://github.com/denivladislav) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@IgorYar](https://github.com/IgorYar) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) VAnaKudryavtsev@sberbank.ru [@shuga2704](https://github.com/shuga2704))
- feat(tokens): update screenshoots and add themes ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))
- Кудрявцев Вадим Анатольевич (vanakudryavtsev@sberbank.ru)
- Кудрявцев Вадим Анатольевич (VAnaKudryavtsev@sberbank.ru)

---

# v1.41.0 (Thu Jul 11 2024)

### Release Notes

#### Release by 11.07.2024 ([#1296](https://github.com/salute-developers/plasma/pull/1296))

## Components

### DatePicker

- добавлен новый компонент DatePicker
- написаны тесты и документация
- проведен рефакторинг стилей и токенов календаря
- исправлен отступ от первой иконки в Range
 
feat(plasma-new-hope): add DatePicker component (https://github.com/salute-developers/plasma/pull/1224)

### Portal

- компонент добавлен в `plasma-new-hope`, портирован в `plasma-{web, b2c}`, `caldera`, `sdds`
- добавлены тесты и документация
- компонент внедрён в `Popover` и `Popup`
- исправлено имя теста для `Popover`

 
plasma-*: Add `Portal` component (https://github.com/salute-developers/plasma/pull/1272)

### Sheet

- убран из примеров в `stories` лишний горизонтальный скролл 
- добавлена недостающая документация в `caldera-online` 

**Before**:

<img width="1726" alt="scrollBefore" src="https://github.com/salute-developers/plasma/assets/71961494/f37919f8-df31-427e-aff9-34228cb920b6" />

**After**:

<img width="1725" alt="scrollAfter" src="https://github.com/salute-developers/plasma/assets/71961494/6c3ae1df-e3cc-42d0-ae54-6b11fba55690" />

 
plasma-*: Fix `Sheet` scroll (https://github.com/salute-developers/plasma/pull/1273)

### Dropdown

- добавлено новое свойство `portal`

 
feat(plasma-new-hope): Added prop portal into Dropdown component (https://github.com/salute-developers/plasma/pull/1260)

### SDDS DFA

* добавлена тема `sdds_dfa` в библиотеку вертикалей `@salutejs/sdds-themes`
* добавлена библиотека `@salutejs/sdds-dfa`
* поправлены компоненты `Header`, `Skeleton`, `Accordion` 

feat(sdds-dfa): Add `sdds-dfa` components library (https://github.com/salute-developers/plasma/pull/1293)

### SDDS-SERV

- добавлена поддержка пакета `@emotion`

sdds-serv: Add support `@emotion` package (https://github.com/salute-developers/plasma/pull/1281)


## Icons

### Website: Icons page

- новый UI для блока поиск
- исправлен вывод набора иконок 
- исправлено `isDeprecate` на `isDeprecated`

plasma-website: New UI search block (https://github.com/salute-developers/plasma/pull/1270)

### iOS

- исправлена генерация иконок под iOS

**Before:**

<img width="248" src="https://github.com/salute-developers/plasma/assets/2895992/e93abb36-8a51-4451-aab3-3107959a8904" />

**After:**

<img width="248" src="https://github.com/salute-developers/plasma/assets/2895992/8415a3b2-3f6e-46fb-9a3e-767f0317aa30" />

plasma-icons: Rewrite generate icons for iOS (https://github.com/salute-developers/plasma/pull/1283)

### Opacity

- удалено **ненужное** свойство `opacity` в наборе старых иконок

plasma-icons: Delete unnecessary prop opacity (https://github.com/salute-developers/plasma/pull/1282)


## Infra

### Required checks

- реорганизовали обязательные проверки (стало меньше и быстрее) 

 
plasma-infra: Simplify required checks (https://github.com/salute-developers/plasma/pull/1278)

### Scaffold

- скрипт для генерации компонентов вынесен в отдельную команду

plasma-infra(scaffold): Extend script for update/sync component list  (https://github.com/salute-developers/plasma/pull/1275)

### Support emotion engine

- добавлена поддержка пакета `@emotion` для библиотеки `plasma-new-hope`

feat(plasma-new-hope): add emotion support (https://github.com/salute-developers/plasma/pull/1276)

## Tokens

* добавлены методы генерации токенов для web приложений на основе новой json структуры.
* перегенированы темы для всех вертикалей: `sdds`, `plasma`, `flamingo` и `caldera-online` на основе json файлов из [данного репозитория](https://github.com/salute-developers/theme-converter/tree/main/themes).
* удалены старые json темы из пакета `@salutejs/data-themes`.
* переименован пакет `@salutejs/data-themes` в `@salutejs/core-themes` и обновлены все зависимости

 
feat(data-themes): Add new token generators for web via new json scheme and update themes (https://github.com/salute-developers/plasma/pull/1274)


## Docs

### Storybook link

- убрана ссылка/кнопка на storybook из документации для `plasma-{web,ui}`

**Before:**

<img width="1944" src="https://github.com/salute-developers/plasma/assets/2895992/458182dc-07eb-4954-9b06-a2f0eabc867f" />

**After:**

<img width="1944" src="https://github.com/salute-developers/plasma/assets/2895992/ea812456-7644-4194-8188-88a085b416f6" />

 
plasma-docs: hide short links for storybook (https://github.com/salute-developers/plasma/pull/1286)

### SDDS-DFA/SERVE

* добавлен шаблон документации для компонент `Accordion`
* добавлена документация для пакета `sdds-dfa`
* исправлена документация для `Popover`

 
feat: Add `sdds-dfa-docs` (https://github.com/salute-developers/plasma/pull/1295)


## Misc

### TextField

- добавлены токены цвета и размера textBefore/After
- исправлен line-height у иконок

 
feat: add textfield textBefore/After tokens (https://github.com/salute-developers/plasma/pull/1253)

### Website: colors palette 

- добавлена страница с цветовой палитрой

**Страница выбора цвета**

![Выбор цвета](https://github.com/salute-developers/plasma/assets/38344415/6527ea89-7727-4a4e-b435-35436e74b788)

**Страница выбора оттенка**

![Выбор оттенка](https://github.com/salute-developers/plasma/assets/38344415/632a842e-4922-42a4-bfe7-79081f6ea2e0)
 
plasma-website: add page colors (https://github.com/salute-developers/plasma/pull/1266)

---

#### 🚀 Enhancement

- Release by 11.07.2024 [#1296](https://github.com/salute-developers/plasma/pull/1296) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@denivladislav](https://github.com/denivladislav) [@Yeti-or](https://github.com/Yeti-or) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike) [@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v1.40.0 (Thu Apr 25 2024)

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
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.39.0 (Thu Apr 11 2024)

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
- feat(plasma-tokens-*): Add fallback tokens for legacy token packages ([@neretin-trike](https://github.com/neretin-trike))

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

# v1.37.0 (Thu Mar 28 2024)

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

# v1.36.0 (Thu Mar 14 2024)

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
- fix(plasma-tokens-*): Add `new` directory for for new tokens [#1094](https://github.com/salute-developers/plasma/pull/1094) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.35.1 (Tue Mar 05 2024)

#### 🐛 Bug Fix

- fix(plasma-tokens-*): Add `new` directory for for new tokens [Hotfix] [#1093](https://github.com/salute-developers/plasma/pull/1093) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-tokens-*): Add `new` directory for for new tokens ([@neretin-trike](https://github.com/neretin-trike))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.35.0 (Fri Mar 01 2024)

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
- feat(plasma-tokens-*): Add re-export fallback tokens [#1078](https://github.com/salute-developers/plasma/pull/1078) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks [no ci] ([@Yakutoc](https://github.com/Yakutoc))

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

# v1.33.0 (Thu Jan 18 2024)

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

# v1.32.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-tokens-web,b2c,b2b): Add new tokens ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.31.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-tokens-b2b): npm audit fix vulnerabilities ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump TS to 4.2.4 [#869](https://github.com/salute-developers/plasma/pull/869) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.30.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))

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

# v1.29.0 (Fri Sep 29 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.28.0 (Thu Sep 14 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.27.0 (Mon Sep 04 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.25.0 (Fri Aug 18 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.20.0 (Fri May 19 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-*): Add override colors for fallback (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.14.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.13.0 (Fri Mar 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.12.0 (Thu Mar 16 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-*): Add tokens and typo to index for export [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.11.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Rename eslint rule and add temp rules [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.9.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.7.0 (Thu Dec 15 2022)

#### 🐛 Bug Fix

- fix(plasma-tokens-b2b): update tokens value [#265](https://github.com/salute-developers/plasma/pull/265) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.6.0 (Wed Dec 14 2022)

#### 🚀 Enhancement

- feat(plasma-tokens-b2b): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- Update CHANGELOG.md \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.5.0 (Thu Dec 08 2022)

#### 🚀 Enhancement

- feat(plasma-tokens-b2b): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.3.0 (Wed Apr 27 2022)

#### 🐛 Bug Fix

- fix: monorepo deps resolved [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- build: update deps [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.2.0 (Thu Apr 07 2022)

#### 🚀 Enhancement

- feat(plasma-web): Designing `TextField` for B2B theme [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.1.0 (Tue Mar 01 2022)

#### 🚀 Enhancement

- feat: `Button`: colors theming [#1084](https://github.com/salute-developers/plasma/pull/1084) ([@fanisco](https://github.com/fanisco))
- feat: Init `plasma-tokens-b2b` package [#1084](https://github.com/salute-developers/plasma/pull/1084) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

