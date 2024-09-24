# v0.129.0 (Tue Sep 24 2024)

### Release Notes

#### Release by 24.09.2024 ([#1450](https://github.com/salute-developers/plasma/pull/1450))

## Components

### Mask

- добавлен **новый** компонент
- включен в поставку plasma-* и sdds-* пакетов
 
feat(plasma-*): add Mask  (https://github.com/salute-developers/plasma/pull/1418)

### Правка токенов в SDDS CS

- Изменены токены для компонентов `Autocomplite`, `Combobox`, `Datepicker`, `Range`, `Textfield`, `Textarea`, `Select` в поставке `sdds-cs`

 
feat(sdds-cs): edit tokens (https://github.com/salute-developers/plasma/pull/1439)

### Attach
- добавлен **новый** компонент в поставку всех клиентских библиотек 

<img width="554" src="https://github.com/user-attachments/assets/0ede5244-018b-4801-9816-6d3f425a1ec5" />

<img width="296" src="https://github.com/user-attachments/assets/e86d1a79-13f9-430c-8c78-60da463bda6d" />

### Cell
- добавлена возможность использовать свойство `className`

 
`plasma-*, sdds-*`: Add Attach (https://github.com/salute-developers/plasma/pull/1437)


## Misc

### Tests
-   изменены тесты plasma-b2c компонента TextArea

 
test(plasma-b2c): update tests for TextArea (https://github.com/salute-developers/plasma/pull/1434)

---

#### 🚀 Enhancement

- Release by 24.09.2024 [#1450](https://github.com/salute-developers/plasma/pull/1450) ([@IgorYar](https://github.com/IgorYar) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@denivladislav](https://github.com/denivladislav))
- docs(): api reports regenerated [#1437](https://github.com/salute-developers/plasma/pull/1437) ([@denivladislav](https://github.com/denivladislav))
- feat(plasma-*): fix Mask stories prop [#1418](https://github.com/salute-developers/plasma/pull/1418) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-*): add Mask component ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-*, sdds-*): Attach ported; tests added ([@denivladislav](https://github.com/denivladislav))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v0.126.0 (Thu Sep 19 2024)

### Release Notes

#### Release by 18.09.2024 ([#1442](https://github.com/salute-developers/plasma/pull/1442))

## Components

### Badge

- добавлено свойство `clear`, которое меняет отображение `view`
- обновлена документация и storybook

**After**:

<img width="328" src="https://github.com/user-attachments/assets/d44c10e8-ffe3-4137-a833-4351b7b82bdc" />

 
feat(plasma-*): Badge add prop clear (https://github.com/salute-developers/plasma/pull/1424)

### TextField

- используется корректный `color token` для содержимого `contentLeft\Right` slots
- добавлен `hover` для `contentRight` slot

**Before(incorrect color token):**

<img width="928" src="https://github.com/user-attachments/assets/42aa0845-54f4-45ed-8fb0-b71edac4ebf7" />

**After(correct color token):**

<img width="922" src="https://github.com/user-attachments/assets/e6c05099-b9fb-4959-b815-7f2307690263" />

**Hover:**

<img width="940" src="https://github.com/user-attachments/assets/508db157-deff-44e2-9dd9-4893184eb59a" />


 
[PLASMA-3412]: TextField contentRight\Left fix UI (https://github.com/salute-developers/plasma/pull/1429)

### Combobox

- добавлено новое свойство `alwaysOpened`
- обновлены токены в конфигурации компонента для `plasma-web`
- обновлена документация 

 
feat(plasma-*): combobox always opened (https://github.com/salute-developers/plasma/pull/1422)

### Grid

- исправили `view` по-умолчанию для `sdds` вертикалей 

**Before:**
<img width="1920" src="https://github.com/user-attachments/assets/6476ef70-294d-492b-b462-2e42cdb341d4" />
 
**After:**
<img width="1920" src="https://github.com/user-attachments/assets/aa004cf2-9e43-4691-84f3-fb33f94b3e5f" />
 
fix(sdds-*): Use correct default view for Grid (https://github.com/salute-developers/plasma/pull/1431)

### Editable

- переведен на новую архитектуру и добавлен в поставки `plasma-{b2c, web}`
- исправлена работа свойства `placeholder`

<img width="276" src="https://github.com/user-attachments/assets/bdd67ba7-62f1-48f1-8f04-78a13fbb8045" />
 
plasma-{web, b2c}: Editable component refactor (https://github.com/salute-developers/plasma/pull/1430)

### Combobox

- исправлена ошибка, когда изначальное значение в `single combobox` не отображалось

 
plasma-*: Fixed issue with predefined value in single Combobox (https://github.com/salute-developers/plasma/pull/1436)


## Icons

### Add new icons   

**pcMouse**
<img width="71" src="https://github.com/user-attachments/assets/f2097d88-d354-404a-91af-d59af0a61c3f" />

**Blank JPG/PNG**
<img width="140" src="https://github.com/user-attachments/assets/0d3a251a-ec39-4e0d-943b-e37c8d96c22f" />

 
[PLASMA-3502]: Add icons: Mouse, Blank JPG/PNG (https://github.com/salute-developers/plasma/pull/1435)


## Tokens

- исправлены формулы генерации `brightness` токенов
- обновлены / добавлены `active`, `hover`, `brightness` токены для `plasma-{b2c, web}` themes
 
fix(plasma-tokens): Update active, hover and brightness tokens in themes (https://github.com/salute-developers/plasma/pull/1441)


## Misc

### QA Auto test

-   изменены тесты `plasma-b2c` компонентов `Slider`, `Tabs`, `DatePicker` и `Card`

---

#### 🚀 Enhancement

- Release by 18.09.2024 [#1442](https://github.com/salute-developers/plasma/pull/1442) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))
- feat(sdds-*): update Badge stories & configs [#1424](https://github.com/salute-developers/plasma/pull/1424) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*/sdds-*): update TextField stories [#1426](https://github.com/salute-developers/plasma/pull/1426) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-18 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(sdds-*): use correct default view for Grid [#1431](https://github.com/salute-developers/plasma/pull/1431) ([@Yakutoc](https://github.com/Yakutoc))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*,sdds-*): update Combobox stories props ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(api-report): update api report (InputHTMLAttributes) [#1429](https://github.com/salute-developers/plasma/pull/1429) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-*): fix `content{Left\Right}Slot` UI ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.118.0 (Tue Sep 10 2024)

#### 🚀 Enhancement

- plasma-*: Fix `TextField` placeholder logic [HOTFIX] [#1425](https://github.com/salute-developers/plasma/pull/1425) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*/sdds-*): update TextField stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.117.0 (Thu Sep 05 2024)

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
- feat: add required variation to TextArea & TextField [#1352](https://github.com/salute-developers/plasma/pull/1352) (VAnaKudryavtsev@sberbank.ru)
- feat: rename InputGroup to TextFieldGroup [#1405](https://github.com/salute-developers/plasma/pull/1405) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-serv/dfa): add InputGroup component ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(*): add format and lang [#1404](https://github.com/salute-developers/plasma/pull/1404) ([@iljs](https://github.com/iljs))
- feat(*): set background arrow tooltip [#1361](https://github.com/salute-developers/plasma/pull/1361) ([@iljs](https://github.com/iljs))
- feat(tokens): update screenshoots and add themes ([@iljs](https://github.com/iljs))
- feat(*): set tokens in components ([@iljs](https://github.com/iljs))
- feat(sdds-*): update Checkbox stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(b2c, web, sdds): Combobox v2 [#1406](https://github.com/salute-developers/plasma/pull/1406) ([@shuga2704](https://github.com/shuga2704))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-*, sdds-*): tokens and hover state updated ([@denivladislav](https://github.com/denivladislav))

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

# v0.109.1 (Fri Aug 30 2024)

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.109.0 (Wed Aug 28 2024)

### Release Notes

#### Release by 28.08.2024 ([#1403](https://github.com/salute-developers/plasma/pull/1403))

## Components

### Slider

- удалена лишняя зависимость `ref.current` в hooks 
- исправлена документация в `plasma-web`
- для `plasma-new-hope` и `sdds-dfa` добавлены недостающие файлы документации

 
plasma-{new-hope, web}, sdds-dfa: removed redundant dependencies from `Slider` hooks; docs fixed (https://github.com/salute-developers/plasma/pull/1386)

### TextField
- добавлен размер `xs` в `plasma-web` 

 
plasma-web: size `xs` added to `TextField` (https://github.com/salute-developers/plasma/pull/1395)

### SDDS-CS

- изменены конфигурации компонентов для `sdds-cs`

### Radiobox/Checkbox

- добавлен фон через токены для `trigger`

### Button

- добавлен отдельный фон через токены в состоянии `loading`

 
sdds-cs: Edit components config (https://github.com/salute-developers/plasma/pull/1368)


## Icons

### Disclosure group 

- обновлен набор для `Disclosure`

<img width="371" alt="Disclosure" src="https://github.com/user-attachments/assets/37024761-5185-46fc-9a24-8285839c1776" />


 
feat(plasma-icons): Update `Disclosure` icons group (https://github.com/salute-developers/plasma/pull/1384)

### Update icons list

#### Video
<img width="171" src="https://github.com/user-attachments/assets/5138f0d2-bc5a-427f-b5c3-161702b80cc5" />

#### Attention
<img width="58" src="https://github.com/user-attachments/assets/425b34f8-6744-44ad-8670-70fbb7f2aed7" />

#### Message
<img width="409" src="https://github.com/user-attachments/assets/b23057c1-b8e3-4c2a-a052-570a61570242" />

#### Zoom
<img width="128" src="https://github.com/user-attachments/assets/ac37d878-b25d-4215-9a05-84a4db8a4f1e" />

 
feat(plasma-icons): Update icons pack (https://github.com/salute-developers/plasma/pull/1390)

## Tokens

* исправлены опечатки в `tokens` для `theme`: `plasma_web`, `sdds_dfa`, `sdds_serv`

fix(plasma-tokens): Fix tokens misprint in themes  (https://github.com/salute-developers/plasma/pull/1402)

### Theme-Builder

* исправлена обработка свойств `opened` для модальных окон
* исправлено отображение полей для ввода в модальном окне редактирования token
* исправлена генерация токенов `active` и `hover` состояний при изменении отключении / включении token

 
fix(plasma-theme-builder): Fix bugs in Theme Builder (https://github.com/salute-developers/plasma/pull/1397)


## Infra

### Plasma-B2C

- поднята документацию для пакета `plasma-b2c`


 
plasma-docs: Setup package for `plasma-b2c` (https://github.com/salute-developers/plasma/pull/1330)


## Misc

### Tests
-   изменены тесты plasma-b2c компонентов Breadcrumbs и Price

 
test(plasma-b2c): update tests for Breadcrumbs and Price (https://github.com/salute-developers/plasma/pull/1353)

### Tests
-   изменены тесты plasma-b2c компонентов Badge и Chip

 
test(plasma-b2c): update tests for Badge and Chip (https://github.com/salute-developers/plasma/pull/1366)

---

#### 🚀 Enhancement

- Release by 28.08.2024 [#1403](https://github.com/salute-developers/plasma/pull/1403) ([@Yakutoc](https://github.com/Yakutoc) [@simashova](https://github.com/simashova) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@denivladislav](https://github.com/denivladislav) [@iljs](https://github.com/iljs))
- feat(*): add custom background trigger for checkbox and rasiobox ([@iljs](https://github.com/iljs))
- feat(*): add custom loading background to button ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Anastasia Simashova ([@simashova](https://github.com/simashova))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v0.104.0 (Thu Aug 22 2024)

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
- feat: Deprecate isOpen/isVisible public props, change to opened [#1335](https://github.com/salute-developers/plasma/pull/1335) ([@vadim-kudr](https://github.com/vadim-kudr))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(web, b2c): Select and SelectNew are merged. SelectNew is gone. [#1349](https://github.com/salute-developers/plasma/pull/1349) ([@shuga2704](https://github.com/shuga2704))
- docs(plasma-{b2c, web}, sdds-*): api reports regenerated [#1362](https://github.com/salute-developers/plasma/pull/1362) ([@denivladislav](https://github.com/denivladislav))
- feat(plasma-{b2c, web}, sdds-*): TabsController description fixed ([@denivladislav](https://github.com/denivladislav))
- fix(sdds-*): type casting removed ([@denivladislav](https://github.com/denivladislav))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

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

# v0.93.0 (Thu Aug 08 2024)

### Release Notes

#### Release by 07.08.2024 ([#1348](https://github.com/salute-developers/plasma/pull/1348))

## Components

### DatePicker

- добавлена возможность задавать labelPlacement
- добавлен тест на данное свойство

 
plasma-*: add datepicker inner label support (https://github.com/salute-developers/plasma/pull/1327)

### DatePicker

- добавлена возможность открытия календаря в DatePicker по нажатию Space

 
plasma-new-hope: add DatePicker open by space (https://github.com/salute-developers/plasma/pull/1326)

### TimePicker

- добавлена привязка времени к датам
- добавлена возможность задавать промежуток больший, чем 1 сутки

**Before**
<img src="https://github.com/user-attachments/assets/b867f5d2-2814-433e-ba21-e93aa5fd691f" width="550">

**After**
<img src="https://github.com/user-attachments/assets/3d6e6ac5-d5e6-4adb-b985-9606a31d8335" width="550">

 
plasma-ui: range timepicker (https://github.com/salute-developers/plasma/pull/1323)

### Components

Добавлена библиотека компонентов `@salutejs/sdds-cs`

 
feat(package): Add sdds-cs (https://github.com/salute-developers/plasma/pull/1334)

### DatePicker

- изменен токен default состояния для поля ввода
- обновлены скриншоты для DatePicker
-  исправлено поведение, связанное с шириной поля ввода
- добавлена поддержка асинхронной установки defaultDate

**Before**
<img src="https://github.com/user-attachments/assets/a4a4962a-c214-4c07-ba32-d7a80d2f9099">
<img src="https://github.com/user-attachments/assets/38f4d5be-2519-4777-817e-5ca901724a7f">

**After**
![image](https://github.com/user-attachments/assets/564b6610-2fee-475e-8b5e-af223f11a069)
![image](https://github.com/user-attachments/assets/8ad60d1d-8ed9-405e-89f3-e35934bff1c3)


 
plasma-*: fix datepicker  focus token  (https://github.com/salute-developers/plasma/pull/1332)

### Breadcrumbs

- добавлен в поставку `plasma-{b2c, web}, sdds-{serv,dfa}`
- добавлен примеры в storybook и документация

#### Навигация по родительским страницам
<img width="609" src="https://github.com/user-attachments/assets/b35f60a5-0d18-4ea4-9f62-716365079e4f" />

#### Используя `shorter`

<img width="659" src="https://github.com/user-attachments/assets/462f80e8-42a3-4538-b85e-1228a08df58e" />

#### Используя custom элемент

<img width="596" src="https://github.com/user-attachments/assets/3d780e04-0419-4bdf-a81b-8b3c2f73c9d9" />

 
plasma-*: Add Breadcrumbs (https://github.com/salute-developers/plasma/pull/1310)

### Select

* Добавлен новый проп renderTarget в компонент Select

RenderTarget in Select (https://github.com/salute-developers/plasma/pull/1328)

### Tokens

- В пакете `sdds-cs` были изменены конфиги в компонентах: `Accordion`, `Avatar`, `Badge`, `Cell`, `Counter`, `Chip`, `Divider`, `Indicator`
- В `Accordion` добавлен токен цвета иконки
- В `plasma-web` добавлены новые view

 
fix(sdds-serv): Update configs for components in sdds-cs (https://github.com/salute-developers/plasma/pull/1344)

### Tabs
- при нажатии на таб, который не виден целиком, происходит прокрутка до конца этого таба
- при нажатии на стрелки влево/вправо происходит прокрутка до следующего таба
- исправлена ошибка `disabled=true` в конфигурациях
- исправлены примеры `Storybook`, тесты и документация

 
plasma-*, sdds-*: redesign Tabs (https://github.com/salute-developers/plasma/pull/1333)


## Docs

### Add docs SDDS CS

* добавлена документация для пакета `sdds-cs`

 
Add docs SDDS CS (https://github.com/salute-developers/plasma/pull/1336)


## Misc

### Docs

* Поправлено описание подключения темы для `sdds` вертикали

 
fix(sdds-serv-docs,sdd-dfa-docs): Fix introducing page (https://github.com/salute-developers/plasma/pull/1338)

### Fix useFocusTrap in Modal

- Теперь фокус при открытии `modal` работает после анимации

 
Fix useFocusTrap in Modal (https://github.com/salute-developers/plasma/pull/1345)

### Контейнер в NotificationProvider

Добавил `overflow: hidden` на контейнер используемого Popup

 
fix: fix Notification animation overflow (https://github.com/salute-developers/plasma/pull/1339)

---

#### 🚀 Enhancement

- Release by 07.08.2024 [#1348](https://github.com/salute-developers/plasma/pull/1348) ([@Yakutoc](https://github.com/Yakutoc) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704) [@vadim-kudr](https://github.com/vadim-kudr) [@denivladislav](https://github.com/denivladislav))
- feat(sdds-cs/plasma-web): add view for accordion and edit configs sdds-cs ([@iljs](https://github.com/iljs))
- feat(plasma-new-hope): added renderTarget prop in Select [#1328](https://github.com/salute-developers/plasma/pull/1328) ([@shuga2704](https://github.com/shuga2704))
- feat(new-hope/sdds-cs): add to sdds-cs and edits [#1310](https://github.com/salute-developers/plasma/pull/1310) ([@iljs](https://github.com/iljs))
- feat(*): add to libs and final edits ([@iljs](https://github.com/iljs))
- feat(plasma-web/b2c,sdds-serv/dfa): add DatePicker deferred stories [#1332](https://github.com/salute-developers/plasma/pull/1332) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-serv/dfa): update DatePicker focus token ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-serv/dfa): update DatePicker configs & stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-*, sdds-*): stretch turned into conditional control ([@denivladislav](https://github.com/denivladislav))
- docs(plasma-*, sdds-*): api reports regenerated ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-{b2c, web}, sdds-*): storybooks and tests updated ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-*, sdds-*): configs fixed ([@denivladislav](https://github.com/denivladislav))
- fix(core): edit focus trap and add animation example to modal [#1345](https://github.com/salute-developers/plasma/pull/1345) ([@iljs](https://github.com/iljs))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v0.84.0 (Thu Jul 25 2024)

### Release Notes

#### Release by 24.07.2024 ([#1319](https://github.com/salute-developers/plasma/pull/1319))

## Components

### Portal/Popup

* убрана зависимость от свойства `frame` в элементе `PopupRootContainer`
* переделан компонент `Portal` из конфигурируемого в обычный функциональный компонент

 
fix(plasma-new-hope): `Popup` and `Portal` improvements (https://github.com/salute-developers/plasma/pull/1299)

### Chip

- добавлено новое свойство `hasClear`
- добавлен тест и обновлена документация
 
plasma-*: Add prop `hasClear` for Chip (https://github.com/salute-developers/plasma/pull/1312)

### DatePicker

- добавлена поддержка выбора кварталов
- добавлены 4ре варианта работы с календарем (выбор дней, месяцев, календарей, лет)
- добавлена поддержка кварталов в datepicker
- добавлена возможность задавать события для каждой календарной сетки
- добавлена возможность задавать неактивные элементы для каждой календарной сетки

**Before:**
<div style="display: flex">
<img src="https://github.com/user-attachments/assets/2208459a-92ee-493c-974e-b01f216e268b" width="200" height="200">
<img src="https://github.com/user-attachments/assets/c765d898-bfbb-42a2-be30-8982f27031bb" width="200" height="200">
<img src="https://github.com/user-attachments/assets/bc61edf5-0a18-47a8-b34e-672f2eb0379e" width="200" height="200">
</div>

**After:**
<div style="display: flex">
<img src="https://github.com/user-attachments/assets/0b42d119-8964-4a52-b9e0-564b0f1a8141" width="200" height="200">
<img src="https://github.com/user-attachments/assets/1e2cb981-4a16-475d-ba07-51a774130349" width="200" height="200">
<img src="https://github.com/user-attachments/assets/30f898e9-06c5-47ae-bf66-b4c29f4eb9a0" width="200" height="200">
<img src="https://github.com/user-attachments/assets/0236ddcc-4473-4b46-a200-ae088f960b50" width="200" height="200">
</div>


plasma-*: Datepicker improvements (https://github.com/salute-developers/plasma/pull/1302)

### Autocomplete

- добавлен в поставку во все клиентские библиотеки  

feat: Autocomplete (https://github.com/salute-developers/plasma/pull/1292)

### Price, Portal

- компонент `Price` добавлен в `plasma-new-hope`, портирован в `plasma-{web, b2c}`, `sdds-{serv, dfa}`
- для `Price` обновлены тесты и документация
- исправлена ошибка отсутствующего `PropsTable` в документации `Portal`

 
plasma-*: add `Price` component (https://github.com/salute-developers/plasma/pull/1307)

### Select

- добавлен новый компонент с поддержкой вложенных списков
- поставлен во все клиентские библиотеки   

 
feat: Select (https://github.com/salute-developers/plasma/pull/1233)

### SDDS-SERV

- добавлены компоненты:
  - Calendar
  - Notification
  - ButtonBase
  - Skeleton
  - Accordion

### SDDS-{SERV, DFA}

- заменены старые токены с префиксом `--plasma-colors...` на корректные.

 
Sdds-serv & sdds-dfa sync (https://github.com/salute-developers/plasma/pull/1314)

### Accordion

- добавлен новый view (b2c)
- добавлена возможность добавить класс в accordionItem
- исправлена работы disabled
- добавлен флаг startLeftPosition
- переделаны новые отступы из нового дизайна

 
Add functional to accordion (https://github.com/salute-developers/plasma/pull/1301)

### Typography

-   добавлен пропс color
-   в секции plasma-web storybook добавлен color picker

 
feat: Add color prop in Typography (https://github.com/salute-developers/plasma/pull/1308)


## Tokens

* Добавлена новая темая `sdds_cs` в библиотеку `@salutejs/sdds-themes` с учётом обновленных токенов типографики.

 
feat(sdds-themes): Add `sdds_cs` theme (https://github.com/salute-developers/plasma/pull/1309)


## Docs

### AudioPlayer

- изменен `cdn` в примерах`https://vc-static.sberdevices.ru/smartmarket-video-news/` на `https://cdn1.newsback.sberdevices.ru/p-newsback/`

 
plasma-{b2c,web}: Fix vc cdn url (https://github.com/salute-developers/plasma/pull/1298)


## Misc

### Tooltip

- исправлен проброс стилей в Tooltip

 
plasma-new-hope:  forward styles and className to Tooltip root (https://github.com/salute-developers/plasma/pull/1311)

### Textarea

- исправлена логика при использовании свойства `autoResize` (теперь ширина автоматически растягивается)

Результат с включенным `autoResize` после изменения ширины

**До:**
![](https://github.com/salute-developers/plasma/assets/38344415/70ad8513-353e-477f-a0fe-e4d3ee5cfd55)

**После:**
![](https://github.com/salute-developers/plasma/assets/38344415/84306373-b4fb-4f13-8a77-b2fd05c08721)

 
plasma-*: Fix width autoresize prop in textarea (https://github.com/salute-developers/plasma/pull/1297)

---

#### 🚀 Enhancement

- Release by 24.07.2024 [#1319](https://github.com/salute-developers/plasma/pull/1319) ([@Yeti-or](https://github.com/Yeti-or) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@simashova](https://github.com/simashova) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@shuga2704](https://github.com/shuga2704) [@denivladislav](https://github.com/denivladislav) [@vadim-kudr](https://github.com/vadim-kudr) [@Yakutoc](https://github.com/Yakutoc))
- feat: Add color prop to Typography, code review fixes [#1308](https://github.com/salute-developers/plasma/pull/1308) ([@vadim-kudr](https://github.com/vadim-kudr))
- feat: Add color prop to Typography, fixes ([@vadim-kudr](https://github.com/vadim-kudr))
- feat(plasma-{new-hope, b2c, web}, sdds-{dfa, serv}): indian rupee added [#1307](https://github.com/salute-developers/plasma/pull/1307) ([@denivladislav](https://github.com/denivladislav))
- feat(sdds-serv/dfa): update Calendar configs & stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-07-24 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(sdds-dfa, sdds-serv): Sync [#1314](https://github.com/salute-developers/plasma/pull/1314) ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-new-hope, b2c, web, sdds-serv, sdds-dfa): Select [#1233](https://github.com/salute-developers/plasma/pull/1233) ([@shuga2704](https://github.com/shuga2704))
- docs(plasma-{new-hope, web}, sdds-{serv, dfa}): api reports regenerated ([@denivladislav](https://github.com/denivladislav))
- feat(sdds-{serv, dfa}): Price component ported ([@denivladislav](https://github.com/denivladislav))
- feat(plasma-new-hope, web, b2c, sdds-serv, sdds-dfa): Autocomplete [#1292](https://github.com/salute-developers/plasma/pull/1292) ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-web/b2c,sdds-serv/dfa): update DatePicker configs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web/b2c,sdds-serv/dfa): add hasClear prop to Chip stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(sdds-*,plasma-*,caldera-online): Update `Portal` component usage [#1299](https://github.com/salute-developers/plasma/pull/1299) ([@neretin-trike](https://github.com/neretin-trike))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Anastasia Simashova ([@simashova](https://github.com/simashova))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.77.0 (Thu Jul 11 2024)

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
- feat(sdds-dfa): Add `sdds-dfa` components library ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(sdds-*): update api report [#1295](https://github.com/salute-developers/plasma/pull/1295) ([@Yakutoc](https://github.com/Yakutoc))
- fix(sdds-*): use `styled-components@5.3.1` ([@Yakutoc](https://github.com/Yakutoc))
- fix(sdds-serv,sdds-dfa): Update configs for `Combobox` and `TextField` components ([@neretin-trike](https://github.com/neretin-trike))
- feat(sdds-serv,sdds-dfa): Remove `Header` and old `Select` components ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 8

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))
