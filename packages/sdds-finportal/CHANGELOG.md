# v0.123.0 (Tue Sep 24 2024)

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

# v0.120.0 (Thu Sep 19 2024)

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
- fix(api-report): update after add TextFieldGroup [#1427](https://github.com/salute-developers/plasma/pull/1427) ([@Yakutoc](https://github.com/Yakutoc))
- fix(sdds-finportal): add TextFieldGroup component ([@Yakutoc](https://github.com/Yakutoc))
- fix(sdds-finportal): add TextField/TextArea prop `required` ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.112.0 (Tue Sep 10 2024)

#### 🚀 Enhancement

- plasma-*: Fix `TextField` placeholder logic [HOTFIX] [#1425](https://github.com/salute-developers/plasma/pull/1425) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*/sdds-*): update TextField stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.111.0 (Thu Sep 05 2024)

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
- feat: update lock file [#1417](https://github.com/salute-developers/plasma/pull/1417) ([@Yakutoc](https://github.com/Yakutoc))
- feat(sdds-finportal): add package ([@Yakutoc](https://github.com/Yakutoc))

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

