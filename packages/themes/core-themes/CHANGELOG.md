# v0.13.0 (Thu Aug 22 2024)

### Release Notes

#### Release by 21.08.2024 ([#1382](https://github.com/salute-developers/plasma/pull/1382))

## Components

### Autocomplete
- добавлено свойство `portal`
- обновлена документация

 
plasma-new-hope: add portal prop to Autocomplete (https://github.com/salute-developers/plasma/pull/1347)

### Tabs
- исправлены типы и описание компонента для корректной генерации документации
- добавлены недостающие примеры в документацию `sdds-cs`

 
fix(plasma-*): Tabs types and documentation (https://github.com/salute-developers/plasma/pull/1362)

###  Props `isOpen`/`isVisible` to `opened`

- публичные свойства `opened`/`isVisible` помечаны как `deprecated`
- изменены `types` , от которых зависят дочерние компоненты

 
plasma-*: Deprecate isOpen/isVisible public props, change to opened (https://github.com/salute-developers/plasma/pull/1335)

### Textfield

- исправлено "дергание" `label` в `inner` режиме

 
fix(new-hope): Textfield label bug (https://github.com/salute-developers/plasma/pull/1359)

### Radiobox

- добавлены параметры `view` для примеров в storybook в `plasma-b2c` 

 
plasma-b2c: Add view props into radiobox stories (https://github.com/salute-developers/plasma/pull/1358)

### Select

- компоненты `SelectNew` и `Select` объединены в `Select`. `SelectNew` больше не существует.
- исправлен баг в `Autocomplete`, связанный с очисткой внешнего значения в `contolled`-варианте

 
feat: Getting rid of SelectNew in web/b2c (https://github.com/salute-developers/plasma/pull/1349)

### Popup

- исправлена логика регистрации `popups`

 
plasma-*: Fix Modal Overlay & Popup registration logic (https://github.com/salute-developers/plasma/pull/1380)


### Modal

- исправлена логика выставления `overflow-y` для `body`

 
plasma-*: Fix `Modal` overflow-y side effect (https://github.com/salute-developers/plasma/pull/1325)

## Icons

### Icons Table

- добавлен набор иконок `RowHeight` 

 
plasma-icons: Add new icons (https://github.com/salute-developers/plasma/pull/1360)

### Icons DoubleDisclosure

- добавлены набор иконок `DoubleDisclosure_{Down,Up}`

 
feat(plasma-icons): Add new icons DoubleDisclosure_{Down,Up} (https://github.com/salute-developers/plasma/pull/1373)

### Icons  SearchForm

- Исправлено смещение текста при наборе в поиск

 
plasma-website: fix searchForm input text shifting (https://github.com/salute-developers/plasma/pull/1378)


## Infra

### Packages

- удалён пакет `@salutejs/plasma-tokens-native`, больше не нужен
- удалён пакет `@auto-it/upload-assets`, т.к. больше не нужно прикреплять `assets` к релизу или `pull request`

 
chore: Remove `plasma-tokens-native` package (https://github.com/salute-developers/plasma/pull/1305)


## Tokens

### Генерация старых токенов

* Добавлены методы генерации старых токенов в библиотеку `core-themes`
* Добавлены токены со старым неймингом (префиксом `plasma-colors`) в вертикаль `plasma-themes` для тем `plasma-web`  и `plasma-b2c`

 
feat(plasma-themes): Add fallback tokens for `plasma-themes` (https://github.com/salute-developers/plasma/pull/1355)

### Токены высветления

* Добавлены токены высветления для библиотек `plasma-themes`, `caldera-online-themes`, `sdds-themes`, `flamingo-themes`. 

 
feat(*-themes): Add brightness tokens to all themes (https://github.com/salute-developers/plasma/pull/1367)

### Tabs, Dropdown, Popover, Switch, TextField

- заменены токены `plasma-colors`
 
plasma-{new-hope, b2c, web}: `plasma-colors` tokens changed (https://github.com/salute-developers/plasma/pull/1351)


## Docs

### Enabling themes 

* обновлено описание способов подключения и использования `theme` и токенов для всех поднятых пакетов с документацией, а также в шаблонах.

 
refator(*-docs): Update introducing docs (https://github.com/salute-developers/plasma/pull/1356)

### Tabs
- исправлены типы и описание компонента для корректной генерации документации
- добавлены недостающие примеры в документацию `sdds-cs`

 
fix(plasma-*): Tabs types and documentation (https://github.com/salute-developers/plasma/pull/1362)


## Misc

### Tests
-   изменены тесты plasma-b2c компонентов Button и Range
-   обновлены скриншоты

 
test(plasma-b2c): update tests and snapshots for Button and Range (https://github.com/salute-developers/plasma/pull/1340)

---

#### 🚀 Enhancement

- Release by 21.08.2024 [#1382](https://github.com/salute-developers/plasma/pull/1382) ([@denivladislav](https://github.com/denivladislav) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@neretin-trike](https://github.com/neretin-trike) [@vadim-kudr](https://github.com/vadim-kudr) [@simashova](https://github.com/simashova) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@luizasok](https://github.com/luizasok) VAnaKudryavtsev@sberbank.ru)
- feat(core-themes): Add methods for fallback tokens generate ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 11

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Anastasia Simashova ([@simashova](https://github.com/simashova))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))
- Кудрявцев Вадим Анатольевич (VAnaKudryavtsev@sberbank.ru)

---

# v0.12.0 (Thu Jul 11 2024)

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
- feat(core-themes): Rename `data-themes` to `core-themes` ([@neretin-trike](https://github.com/neretin-trike))

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

# v0.11.0 (Thu May 30 2024)### Release Notes#### Release by 29.05.2024 ([#1222](https://github.com/salute-developers/plasma/pull/1222))## Components### Calendar-   добавлен пропс для включения/исключения минимума и максимума диапазона датfeat: add calendar edge dates control (https://github.com/salute-developers/plasma/pull/1203)### Slider-   добавлен компонент Sliderfeat(plasma-new-hope): add slider component (https://github.com/salute-developers/plasma/pull/1194)### Textarea-   изменен `padding` для `label`fix(plasma-\*): Fix padding on textarea (https://github.com/salute-developers/plasma/pull/1209)### Range-   включен в поставку `plasma-{b2c,web} / sdds-serv`-   написаны тесты и документацияfeat: Add range component (https://github.com/salute-developers/plasma/pull/1208)### IconButton-   включен в поставку `sdds-serv`-   добавлена документация в `sdds-serv-docs`feat(sdds-serv): add icon button (https://github.com/salute-developers/plasma/pull/1214)### Tabs-   добавлен корректный проброс `className` в `Tab` и `TabItem`-   поправлена документация для `Tab` и `Segment`#### ДО:![image](https://github.com/salute-developers/plasma/assets/40370966/797f897d-95cc-4114-b54a-8629b281b2c7)![image](https://github.com/salute-developers/plasma/assets/40370966/8a0e6de3-f6cd-4e7b-b87b-a1a26b5dd4e7)#### ПОСЛЕ:![image](https://github.com/salute-developers/plasma/assets/40370966/9dd690cc-e8ed-4623-baa0-52e1f22cf71c)![image](https://github.com/salute-developers/plasma/assets/40370966/0c8bb69e-b2d3-4ae9-aed4-2fd4c4b5bd9b)feat(plasma-new-hope): fix tabs styles (https://github.com/salute-developers/plasma/pull/1220)### Button-   добавлено отображение `value`-   исправлены внутренние отступы от `contentLeft`, `contentRight`-   дополнены тесты и документация-   исправлены тесты, зависящие от `Button: Notification, Pagination, Toast, Toolbar`-   добавлен токен переопределения цвета `value` в `ButtonGroup`feat: add button value (https://github.com/salute-developers/plasma/pull/1213)## Tokens### Tokens-   добавлены токены прозрачности для positive, warning, negative цветов-   добавлены токены с active, hover модификаторамиtokens: add surface transparent tokens to sdds (https://github.com/salute-developers/plasma/pull/1206)## Misc### Checkbox/Radiobox-   исправлен types компонентов для библиотек `plasma-asdk`, `sdds-serv` и `caldera-online`Fix checkbox types (https://github.com/salute-developers/plasma/pull/1217)---#### 🚀 Enhancement-   Release by 29.05.2024 [#1222](https://github.com/salute-developers/plasma/pull/1222) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@akhdrv](https://github.com/akhdrv) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs))-   feat(themes): add surface transparent tokens to sdds [#1206](https://github.com/salute-developers/plasma/pull/1206) ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 5-   [@iljs](https://github.com/iljs)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))---# v0.10.0 (Thu Apr 25 2024)### Release Notes#### Release by 24.04.2024 ([#1196](https://github.com/salute-developers/plasma/pull/1196))## Components### Tooltip-   исправлено позиционирование стрелочки-   добавлен тест на много-строчный сценарий#### Before:![image](https://github.com/salute-developers/plasma/assets/40370966/230bbda5-2c2f-4628-b5b4-7a7a14ffc2c9)#### After:![image](https://github.com/salute-developers/plasma/assets/40370966/6c142730-0b4b-47de-a64d-1c6ad2c4fc77)fix(plasma-new-hope): fix tooltip arrow placing (https://github.com/salute-developers/plasma/pull/1171)### Radiobox-   расширен пример в `stories` с учетом `a11y` возможностейplasma-new-hope(radiobox): Improved a11y (https://github.com/salute-developers/plasma/pull/1188)### Storybook-   исправлено некорректное поведение свойства `placement`-   исправлено свойство `enableContentLeft` и `enableContentRight` в TextFieldfeat(plasma-new-hope, b2c, web, sdds): Fix storybook argTypes (https://github.com/salute-developers/plasma/pull/1182)### Avatar-   добавлен `aria-label`-   расширены примеры с доступностьюplasma-new-hope(avatar): Refactoring + a11y (https://github.com/salute-developers/plasma/pull/1180)### Chip-   удален лишнее свойство `hasClear` из примера в `story`-   заменены со старого формата на новый токены в конфигурации (без приставки `--plasma-colors`)-   добавлена недостающие свойство `view=accent`-   обновлены `cypress snapshots`fix: remove extra chip prop in stories (https://github.com/salute-developers/plasma/pull/1179)## Colors-   добавлены файлы фирменной палитры в формате `.json`-   добавлена директория `src` в gitignore, т.к. теперь его содержимое генерируется автоматически на основе `.json`feat(plasma-color): Add generate color palette from json (https://github.com/salute-developers/plasma/pull/1172)## Infra### Audit vulnerabilities-   исправлены все уязвимости в клиентских пакетах (аля `plasma-web`)-   обновлен до `vite@4.5.3`-   обновлен `@babel` и его зависимости до latest-   заменен `babel-plugin-transform-class-properties` на `@babel/plugin-transform-class-properties`### `@salutejs/plasma-sb-utils`-   обновлены `TS` до 4.2.4-   обновлен `@storybook/react` до 7.6.17-   исправлены все уязвимости-   поправлены мелкие ошибки в типахplasma-infra(sb-utils): Update dependencies versions (https://github.com/salute-developers/plasma/pull/1178)---#### 🚀 Enhancement-   Release by 24.04.2024 [#1196](https://github.com/salute-developers/plasma/pull/1196) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 5-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))---# v0.9.0 (Thu Apr 11 2024)### Release Notes#### Release by 10.04.2024 ([#1175](https://github.com/salute-developers/plasma/pull/1175))## Components### Dropdown-   добавлена прослойка для dropdown в `b2c` и `web` (работает на старом api и с dropdown из new-hope)feat(plasma-new-hope, b2c, web): Dropdown interlayer (https://github.com/salute-developers/plasma/pull/1104)### Cell-   добавлен в поставку `plasma-{web,b2c}`feat(new-hope): Add cell (https://github.com/salute-developers/plasma/pull/1148)### Chip-   поправлена типизация-   компонент добавлен в поставку для `sdds-serv`, включая документациюfeat(plasma-new-hope): fix Chip types (https://github.com/salute-developers/plasma/pull/1155)### Button-   добавлены токены состояний (active / hover) для конфигов компонента в библиотеках `@salutejs/plasma-{b2c,web,asdk}`, `@salutejs/sdds-serv`, `@salutejs/caldera-online` .fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update state tokens for `Button` component (https://github.com/salute-developers/plasma/pull/1167)### Select-   убрана поддержка вложенности-   добавлена прослойка для компонента в `plasma-{b2c,web}` и `sdds-serv` (\* работает на старом api и с select из new-hope).-   переделаны тесты и обновлена документацияfeat(plasma-new-hope, b2c, web, sdds-serv): Select interlayer (https://github.com/salute-developers/plasma/pull/1161)### TextField-   проведен рефакторинг и редизайн-   обновлены тесты и документация-   добавлен в поставку в sdds-servfeat(plasma-new-hope): TextField redesign (https://github.com/salute-developers/plasma/pull/1160)## Icons### iOS-   добавлен конвертор SVG в PNG для iOS appplasma-icons: Convert SVG to PNG for iOS (https://github.com/salute-developers/plasma/pull/1163)## Tokens### Tokens-   исправлена формула для расчёта `hover / active` состояний-   добавлены новые токены (но в выключенном состоянии) в существующие темы и схемы для библиотек `@salutejs/plasma-tokens`, `@salutejs/data-themes`, `@salutejs/caldera-online-themes`, `@salutejs/sdds-serv-themes`, `@salutejs/plasma-themes`, `@salutejs/flamingo-themes`-   добавлены недостающие токены для обратной совместимости у библиотек `@salutejs/plasma-tokens-web`, `@salutejs/plasma-tokens-b2c`, `@salutejs/plasma-tokens-b2b`,-   добавлены недостающие токены в темы `plasma_b2c`, `plasma_web`, `sds_engineer` для библиотеки `@salutejs/plasma-new-hope`feat(plasma-tokens,plasma-theme-builder): Add tokens to existed themes (https://github.com/salute-developers/plasma/pull/1165)## Docs### Popup-   исправлена ошибка в документацииfix(new-hope): Fix popup doc (https://github.com/salute-developers/plasma/pull/1168)## Misc### Plasma Theme Builder-   Добавлена генерация hover / active состояний для групп токенов.feat(plasma-theme-builder): Add generate hover / active state for tokens (https://github.com/salute-developers/plasma/pull/1134)### Pagination-   исправлена ошибка навигации с помощью кнопок `next` \ `pre`fix(new-hope): Edit storybook content (https://github.com/salute-developers/plasma/pull/1154)### Website icons grid-   исправлен поиск иконок по названию-   исправлен grid для набора иконокfix(plasma-website): Fix Icons (https://github.com/salute-developers/plasma/pull/1169)---#### 🚀 Enhancement-   Release by 10.04.2024 [#1175](https://github.com/salute-developers/plasma/pull/1175) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs) [@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(\*-themes): Update all themes ([@neretin-trike](https://github.com/neretin-trike))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   chore: delete unnecessary caldera themes [#1158](https://github.com/salute-developers/plasma/pull/1158) ([@Yakutoc](https://github.com/Yakutoc))#### Authors: 6-   [@iljs](https://github.com/iljs)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))---# v0.7.0 (Thu Mar 28 2024)### Release Notes#### Release by 27.03.2024 ([#1151](https://github.com/salute-developers/plasma/pull/1151))## Components### Progress-   добавлен в библиотеку в `new-hope`-   добавлен в поставку пакетов `plasma-{b2c, web}, sdds-serv`-   написаны тесты и документацияfeat: Progress redesign refactor (https://github.com/salute-developers/plasma/pull/1126)### Tooltip-   добавлены fallback на следующие свойства: isVisible, arrow, animatedfeat(plasma-new-hope): tooltip old api fallback (https://github.com/salute-developers/plasma/pull/1140)### Divider-   включен в поставку `plasma-{b2c/web}` и `sdds-serv`-   написаны тесты и документацияfeat(plasma-new-hope): Divider component (https://github.com/salute-developers/plasma/pull/1132)### Pagination-   добавлен в поставку клиентских библиотекfeat(new-hope): Pagination (https://github.com/salute-developers/plasma/pull/1107)### Toolbar-   включили в поставку в `plasma-{b2c/web}` \ `sdds-serv`-   написаны тесты и документацияfeat(plasma-new-hope): add toolbar component (https://github.com/salute-developers/plasma/pull/1150)## Icons### Icons for android-   Добавлен скрипт генерации иконок под android на основе svg-   Обновлена инструкция по добавлению иконокplasma-icons: script to generate android icons (https://github.com/salute-developers/plasma/pull/1109)### Icons publish-   добавлена директория `old` для обратной совместимостиplasma-icons: Add `old` dir for publish (https://github.com/salute-developers/plasma/pull/1149)## Infra### Scaffold docs CLI-   добавлен CLI для создание **директории** документации по шаблону-   добавлен CLI для создание **компонента** документации по шаблонуplasma-infra: Scaffold docs dir CLI (https://github.com/salute-developers/plasma/pull/1099)### Retry-   добавлен retry для шага `Update package-lock files` для обхода ошибки `ECONNRESET`-   добавлен `workflow` для ручного запуска `Update package-lock files`plasma-infra: Retry failure step (https://github.com/salute-developers/plasma/pull/922)### Deploy documentations artefacts-   распараллели процесс создания и загрузки артефактов документации-   добавили `marocchino/sticky-pull-request-comment` для приклеивания сообщения к одному комментарию в pr-   добавлена конфигурация: `config-ci.json`-   удалены неиспользуемые переменныеplasma-infra: Refactoring deploy documentations artefacts [PR context](https://github.com/salute-developers/plasma/pull/1125)### Build android icons plugin-   добавлен dispatch события для запуска `build icons` в `plasma-android`plasma-infra: Dispatch build-icons event (https://github.com/salute-developers/plasma/pull/1145)### Scaffold components docs-   добавлена генерация компонентов по заданному шаблонуplasma-infra: Scaffold components docs by template (https://github.com/salute-developers/plasma/pull/1128)## Docs### Docs-   Исправлена ошибка примера путём обновления токенов бэграундов в сторибуке для библиотек `plasma-web`, `plasma-b2c`, `plasma-asdk`.#### До:<img width="412" alt="Screenshot 2024-03-21 at 12 28 41" src="https://github.com/salute-developers/plasma/assets/26903236/5814e04f-1425-403c-8e20-1151a12063c6" />#### После:<img width="412" alt="Screenshot 2024-03-21 at 17 03 31" src="https://github.com/salute-developers/plasma/assets/26903236/259c6397-2e5c-4d82-a2a6-4d6fdcc31e79" />fix(plasma-web,plasma-b2c,plasma-asdk): Replace tokens for background in storybook to new (https://github.com/salute-developers/plasma/pull/1139)## Misc### Drawer-   изменили величину измерения высоты на dvh в storybookfix: change height for Drawer stories (https://github.com/salute-developers/plasma/pull/1116)### Image-   поправлена передача `props` в `Image.stories`fix: fix args for Image stories (https://github.com/salute-developers/plasma/pull/1119)### Plasma Theme Builder-   произведён рефакторинг методов, которые генерируют токены-   актуализированы базовые токены, которые генерируются сервисом ThemeBuilder-   добавлена новая группа `outline`, используемая в обводках / рамкахfeat(plasma-theme-builder): Actualize default tokens (https://github.com/salute-developers/plasma/pull/1127)### Button-   поправлен размер и отступ фокуса на кнопкеfeat(plasma-new-hope): fix button focus (https://github.com/salute-developers/plasma/pull/1141)### Badge-   поправлен токен фона для `transparent-accent` Badge-   поправлен токен цвета текста для `transparent-light`#### До:![image](https://github.com/salute-developers/plasma/assets/40370966/67673520-cfe8-4b6d-87eb-f700df308627)![image](https://github.com/salute-developers/plasma/assets/40370966/aa9fb631-c1b3-4f58-aa0b-4e5a9dc9617c)#### После:![image](https://github.com/salute-developers/plasma/assets/40370966/59170271-0a32-4680-ab18-5aa4afde0cef)![image](https://github.com/salute-developers/plasma/assets/40370966/9fdc8bea-add8-4798-955d-a896d6c32a40)feat: update badge view tokens (https://github.com/salute-developers/plasma/pull/1142)---#### 🚀 Enhancement-   Release by 27.03.2024 [#1151](https://github.com/salute-developers/plasma/pull/1151) ([@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@akhdrv](https://github.com/akhdrv) [@eg-zhuravlev](https://github.com/eg-zhuravlev))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 8-   [@iljs](https://github.com/iljs)-   [@kayman233](https://github.com/kayman233)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))-   Evgeniy Zhuravlev ([@eg-zhuravlev](https://github.com/eg-zhuravlev))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))---# v0.6.0 (Fri Mar 01 2024)### Release Notes#### Release by 29.02.2024 ([#1079](https://github.com/salute-developers/plasma/pull/1079))## Components### Drawer-   добавлены компоненты `Drawer` и `Panel`-   включен в поставку `plasma-{b2c/web/sdds-serv}`-   для компонента `Drawer` написаны тестыfeat(plasma-new-hope): add Drawer (https://github.com/salute-developers/plasma/pull/1068)### Indicator-   добавлены тесты и документация-   добавлен в поставку для библиотек: `plasma-{web,b2c}`-   интегрирован в компонент `Avatar`feat(plasma-new-hope, web, b2c): Indicator component (https://github.com/salute-developers/plasma/pull/1067)### ButtonGroup-   добавлен новый компонент и тесты с документацией-   исправлена структура файлов для `Spiner`-   добавлен компонент `Button` в поставку в `plasma-{b2c,web}`-   обновлена документация для `Button`-   обновлены тесты зависящие от `Button`feat(plasma-new-hope): add button group component (https://github.com/salute-developers/plasma/pull/1061)### TextField [Note]TextField перевезен на новую Архитектуру, могут быть незначительные отличия от текущего поведeния.### Рефакторинг TextField-   поведение анимация `label` внутри поля стала запускаться одинаковым между `b2c` и `web`. Запуск на фокусе, а не на начале редактирования.-   при показе `label` внутри поля больше не учитывается `placeholder`### TextField [plasma-b2c]-   исправлено поведение для цвет `placeholder`, больше не зависит от наличия `leftHelper`feat(plasma-new-hope): TextField (https://github.com/salute-developers/plasma/pull/949)## Infra### Upload assets-   добавлена возможность указать пакет/релиз к которому нужно прикрепить assetsplasma-infra: Upload assets for target package(-s) (https://github.com/salute-developers/plasma/pull/1054)### plasma-temple-   удалены все упоминания о пакете `plasma-temple` из текущего репозиторияRemove `plasma-temple` from repo [Part 1](https://github.com/salute-developers/plasma/pull/1048)## Tokens-   Добавлен пакет `@salutejs/data-themes`, который содержит все созданные json-схемы, а также набор методов, позволяющие сгенерировать темы для web-платформы в формате js объектов для `styled-component` и css стилей для подключения с помощью нативных способов.-   В пакетах с наборами тем были объеденены токены с цветами и типографикой.-   Так же если необходимы токены цвета или типографики отдельно, забрать их можно по пути `@salutejs/<vertical-name>-themes/tokens` для общих токенов и `@salutejs/<vertical-name>-themes/tokens/<theme-name>` для конкретных тем.-   Добавлена новые пакеты с наборами тем для следующих дизайн вертикаль:    -   `@salutejs/plasma-themes` - для вертикали `Plasma` - пока нигде не используется;    -   `@salutejs/sdds-themes` - для вертикали `SDDS` - используется с библиотекой `@salutejs/sdds-serv`;    -   `@salutejs/cladera-online-themes` - для вертикали `Caldera Online` - используется с библиотеками `@salutejs/cladera-online` и `@salutejs/cladera`;    -   `@salutejs/flamingo-themes` - для вертикали `Flamingo` - пока нигде не используется;### New-hope-   Удалена зависимость `@salutejs/plasma-tokens` из пакета.### SDDS-Serv-   Обновлена документация со способом установки и подключением;-   Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/sdds-themes`;-   Обновлён способ подключение темы в storybook;-   Исправлена сторис LiveDemo в компоненте `Toast`;-   Заменены токены цветов в конфигах компонента `Segment` на актуальные### Caldera / Caldera Online-   Обновлена документация со способом установки и подключением;-   Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/caldera-online-themes`;-   Обновлён способ подключение темы в storybook;-   Исправлена сторис LiveDemo в компоненте `Toast`;-   Заменены токены цветов в конфигах компонента `Segment` на актуальныеAdd new tokens architecture (https://github.com/salute-developers/plasma/pull/1074)## Docs### Сontributing Typos-   исправлены опечатки в документации-   добавлен параграф об обязательном наличие локально browser `chromium`plasma-docs: Fix cypress cli commands (https://github.com/salute-developers/plasma/pull/1058)## Misc### SDDS Android-   добавлен `SDDS Android` проект, включающий:    -   Theme Builder Gradle Plugin    -   SDDS Sandbox App    -   UIKit    -   UIKit Compose    -   файл с лицензией и `README.md` в каждый модульchore[sdds-android]: SDDS Android project was created. (https://github.com/salute-developers/plasma/pull/1045)### CI/CD Pipeline [SDDS Android]-   Project build system migration to composite builds was made to support multiproject structure.-   Code quality check workflow was created.-   Merge report tasks were added.-   Codeowners file was modified.chore[sdds-android, cicd]: code quality check workflow (https://github.com/salute-developers/plasma/pull/1070)---#### 🚀 Enhancement-   Release by 29.02.2024 [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike) [@malilex](https://github.com/malilex) [@shuga2704](https://github.com/shuga2704) [@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233))-   feat(data-themes): Add package for generate themes in web platform ([@neretin-trike](https://github.com/neretin-trike))#### 🐛 Bug Fix-   chore: update package-locks [no ci](<[@Yakutoc](https://github.com/Yakutoc)>)-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 8-   [@kayman233](https://github.com/kayman233)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Alexander Malishev ([@malilex](https://github.com/malilex))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))