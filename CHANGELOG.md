# (Thu May 30 2024)

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

- feat(perftest-helpers): add message for broken perftests [#1211](https://github.com/salute-developers/plasma/pull/1211) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/caldera-online@0.47.0`, `@salutejs/plasma-asdk@0.85.0`, `@salutejs/plasma-b2c@1.327.0`, `@salutejs/plasma-core@1.160.0`, `@salutejs/plasma-hope@1.280.0`, `@salutejs/plasma-new-hope@0.87.0`, `@salutejs/plasma-tokens@1.81.0`, `@salutejs/plasma-ui@1.249.0`, `@salutejs/plasma-web@1.328.0`, `@salutejs/sdds-serv@0.55.0`, `@salutejs/caldera-online-themes@0.12.0`, `@salutejs/data-themes@0.11.0`, `@salutejs/flamingo-themes@0.12.0`, `@salutejs/plasma-themes@0.12.0`, `@salutejs/sdds-themes@0.12.0`, `@salutejs/plasma-cy-utils@0.92.0`, `@salutejs/plasma-sb-utils@0.158.0`
  - Release by 29.05.2024 [#1222](https://github.com/salute-developers/plasma/pull/1222) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@akhdrv](https://github.com/akhdrv) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs))
- `@salutejs/sdds-serv@0.55.0`
  - feat(sdds-serv): update config and stories for Button [#1213](https://github.com/salute-developers/plasma/pull/1213) ([@TitanKuzmich](https://github.com/TitanKuzmich))
  - feat(sdds-serv): add IconButton [#1214](https://github.com/salute-developers/plasma/pull/1214) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.87.0`
  - feat(plasma-new-hope): fix tabs className forward & hide scrollbar [#1220](https://github.com/salute-developers/plasma/pull/1220) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.327.0`, `@salutejs/plasma-web@1.328.0`
  - feat(plasma-web/b2c): add textfield label as controlled prop in stories [#1208](https://github.com/salute-developers/plasma/pull/1208) ([@TitanKuzmich](https://github.com/TitanKuzmich))
  - feat(plasma-web/b2c): update Calendar stories [#1203](https://github.com/salute-developers/plasma/pull/1203) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.327.0`, `@salutejs/plasma-new-hope@0.87.0`, `@salutejs/plasma-web@1.328.0`, `@salutejs/sdds-serv@0.55.0`
  - feat(plasma-new-hope): add react-draggable [#1194](https://github.com/salute-developers/plasma/pull/1194) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/data-themes@0.11.0`, `@salutejs/sdds-themes@0.12.0`
  - feat(themes): add surface transparent tokens to sdds [#1206](https://github.com/salute-developers/plasma/pull/1206) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- build: update perftool [#1218](https://github.com/salute-developers/plasma/pull/1218) ([@akhdrv](https://github.com/akhdrv))
- docs(sdds-serv): popup fix [#1210](https://github.com/salute-developers/plasma/pull/1210) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-cy-utils@0.92.0`
  - chore(cy-utils): npm audit fix [#1216](https://github.com/salute-developers/plasma/pull/1216) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/caldera-online@0.47.0`, `@salutejs/plasma-asdk@0.85.0`, `@salutejs/plasma-b2c@1.327.0`, `@salutejs/plasma-new-hope@0.87.0`, `@salutejs/plasma-web@1.328.0`, `@salutejs/sdds-serv@0.55.0`
  - fix(components): fix checkbox types (sdds-serv, caldera-online, plasma-asdk) [#1217](https://github.com/salute-developers/plasma/pull/1217) ([@iljs](https://github.com/iljs))
- `@salutejs/plasma-b2c@1.327.0`, `@salutejs/plasma-new-hope@0.87.0`, `@salutejs/plasma-web@1.328.0`
  - fix(new-hope): Textarea fix padding and label [#1209](https://github.com/salute-developers/plasma/pull/1209) ([@iljs](https://github.com/iljs))

#### Authors: 5

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# (Thu May 16 2024)

#### 🚀 Enhancement

- `@salutejs/caldera-online@0.40.0`, `@salutejs/plasma-asdk@0.78.0`, `@salutejs/plasma-b2c@1.320.0`, `@salutejs/plasma-core@1.160.0`, `@salutejs/plasma-hope@1.279.0`, `@salutejs/plasma-icons@1.193.0`, `@salutejs/plasma-new-hope@0.80.0`, `@salutejs/plasma-ui@1.248.0`, `@salutejs/plasma-web@1.321.0`, `@salutejs/sdds-serv@0.47.0`
  - Release by 15.05.2024 [#1205](https://github.com/salute-developers/plasma/pull/1205) ([@renovate[bot]](https://github.com/renovate[bot]) [@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv))
- `@salutejs/sdds-serv@0.47.0`
  - fix(sdds-serv): update api report [#1198](https://github.com/salute-developers/plasma/pull/1198) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/caldera-online@0.40.0`, `@salutejs/plasma-asdk@0.78.0`, `@salutejs/sdds-serv@0.47.0`
  - feat(plasma-asdk,caldera-online,sdds-serv): refactor Checkbox & Radiobox configs [#1176](https://github.com/salute-developers/plasma/pull/1176) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.80.0`
  - feat(new-hope): fix [#1195](https://github.com/salute-developers/plasma/pull/1195) ([@iljs](https://github.com/iljs))
- `@salutejs/plasma-b2c@1.320.0`, `@salutejs/plasma-new-hope@0.80.0`, `@salutejs/plasma-web@1.321.0`
  - feat(plasma-docs): fix [#1201](https://github.com/salute-developers/plasma/pull/1201) ([@shuga2704](https://github.com/shuga2704))

#### 🐛 Bug Fix

- test: add perftest visual report in job artifacts [#1159](https://github.com/salute-developers/plasma/pull/1159) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/plasma-b2c@1.320.0`, `@salutejs/plasma-web@1.321.0`, `@salutejs/sdds-serv@0.47.0`
  - fix(plasma-*): update api report [#1197](https://github.com/salute-developers/plasma/pull/1197) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-icons@1.193.0`
  - fix(icons): Fix dislike and like [#1202](https://github.com/salute-developers/plasma/pull/1202) ([@iljs](https://github.com/iljs))
- `@salutejs/plasma-new-hope@0.80.0`
  - chore(deps): update dependency @rollup/plugin-babel to v6.0.4 [#1085](https://github.com/salute-developers/plasma/pull/1085) ([@renovate[bot]](https://github.com/renovate[bot]))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@renovate[bot]](https://github.com/renovate[bot])
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# (Thu Apr 25 2024)

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

- `@salutejs/caldera-online@0.37.0`, `@salutejs/plasma-asdk@0.75.0`, `@salutejs/plasma-b2c@1.317.0`, `@salutejs/plasma-colors@0.13.0`, `@salutejs/plasma-core@1.159.0`, `@salutejs/plasma-hope@1.278.0`, `@salutejs/plasma-icons@1.192.0`, `@salutejs/plasma-new-hope@0.77.0`, `@salutejs/plasma-tokens-b2b@1.40.0`, `@salutejs/plasma-tokens-b2c@0.50.0`, `@salutejs/plasma-tokens-web@1.55.0`, `@salutejs/plasma-tokens@1.80.0`, `@salutejs/plasma-ui@1.247.0`, `@salutejs/plasma-web@1.318.0`, `@salutejs/sdds-serv@0.43.0`, `@salutejs/caldera-online-themes@0.11.0`, `@salutejs/data-themes@0.10.0`, `@salutejs/flamingo-themes@0.11.0`, `@salutejs/plasma-themes@0.11.0`, `@salutejs/sdds-themes@0.11.0`, `@salutejs/plasma-cy-utils@0.91.0`, `@salutejs/plasma-sb-utils@0.157.0`, `@salutejs/plasma-tokens-utils@0.42.0`
  - Release by 24.04.2024 [#1196](https://github.com/salute-developers/plasma/pull/1196) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704))
- `@salutejs/plasma-web@1.318.0`
  - feat(plasma-web): add default size to Textfield interlayer [#1187](https://github.com/salute-developers/plasma/pull/1187) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-colors@0.13.0`
  - feat(plasma-color): Add generate color palette from json [#1172](https://github.com/salute-developers/plasma/pull/1172) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.317.0`, `@salutejs/plasma-web@1.318.0`, `@salutejs/sdds-serv@0.43.0`
  - feat(plasma-web/b2c,sdds-serv): add new button views to ButtonGroup [#1170](https://github.com/salute-developers/plasma/pull/1170) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.317.0`, `@salutejs/plasma-web@1.318.0`
  - feat(plasma-web/b2c): fix tooltip live story [#1171](https://github.com/salute-developers/plasma/pull/1171) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- ci(deploy-docs): delete old workflow [#1192](https://github.com/salute-developers/plasma/pull/1192) ([@Yakutoc](https://github.com/Yakutoc))
- chore: delete native/android source [#1189](https://github.com/salute-developers/plasma/pull/1189) ([@Yakutoc](https://github.com/Yakutoc))
- chore: delete caldera package remains [#1177](https://github.com/salute-developers/plasma/pull/1177) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-new-hope@0.77.0`
  - fix: extend stories examples [#1188](https://github.com/salute-developers/plasma/pull/1188) ([@Yakutoc](https://github.com/Yakutoc))
  - chore: add complex accessibility story [#1183](https://github.com/salute-developers/plasma/pull/1183) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens@1.80.0`, `@salutejs/caldera-online-themes@0.11.0`, `@salutejs/flamingo-themes@0.11.0`, `@salutejs/plasma-themes@0.11.0`, `@salutejs/sdds-themes@0.11.0`
  - fix: use styled-components@5.3.1 [#1190](https://github.com/salute-developers/plasma/pull/1190) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.317.0`, `@salutejs/plasma-web@1.318.0`, `@salutejs/sdds-serv@0.43.0`
  - fix: update api-report [#1180](https://github.com/salute-developers/plasma/pull/1180) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/caldera-online@0.37.0`, `@salutejs/plasma-asdk@0.75.0`, `@salutejs/plasma-b2c@1.317.0`, `@salutejs/plasma-new-hope@0.77.0`, `@salutejs/plasma-ui@1.247.0`, `@salutejs/plasma-web@1.318.0`, `@salutejs/sdds-serv@0.43.0`
  - fix: audit fix [#1184](https://github.com/salute-developers/plasma/pull/1184) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-sb-utils@0.157.0`
  - fix: use correct type Decorator [#1178](https://github.com/salute-developers/plasma/pull/1178) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.317.0`, `@salutejs/plasma-new-hope@0.77.0`, `@salutejs/plasma-web@1.318.0`, `@salutejs/sdds-serv@0.43.0`
  - feat(plasma-new-hope/web/b2c,sdds-serv): update tokens for Chip configs [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@TitanKuzmich](https://github.com/TitanKuzmich))
  - feat(plasma-new-hope, b2c, web, sdds): Fix storybook argTypes [#1182](https://github.com/salute-developers/plasma/pull/1182) ([@shuga2704](https://github.com/shuga2704))

#### ⚠️ Pushed to `master`

- ci(sdds-serv-docs): revert prefix logic for base url [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete caldera package [no ci] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 5

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Apr 11 2024)

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

- `@salutejs/caldera-online@0.33.0`, `@salutejs/plasma-asdk@0.71.0`, `@salutejs/plasma-b2c@1.313.0`, `@salutejs/plasma-core@1.157.0`, `@salutejs/plasma-hope@1.276.0`, `@salutejs/plasma-icons@1.191.0`, `@salutejs/plasma-new-hope@0.73.0`, `@salutejs/plasma-tokens-b2b@1.39.0`, `@salutejs/plasma-tokens-b2c@0.49.0`, `@salutejs/plasma-tokens-web@1.54.0`, `@salutejs/plasma-tokens@1.78.0`, `@salutejs/plasma-ui@1.245.0`, `@salutejs/plasma-web@1.313.0`, `@salutejs/sdds-serv@0.39.0`, `@salutejs/caldera-online-themes@0.9.0`, `@salutejs/data-themes@0.9.0`, `@salutejs/flamingo-themes@0.9.0`, `@salutejs/plasma-themes@0.9.0`, `@salutejs/sdds-themes@0.9.0`, `@salutejs/plasma-cy-utils@0.89.0`, `@salutejs/plasma-sb-utils@0.155.0`, `@salutejs/plasma-tokens-utils@0.41.0`
  - Release by 10.04.2024 [#1175](https://github.com/salute-developers/plasma/pull/1175) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs) [@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/sdds-serv@0.39.0`
  - feat(sdds-serv): add TextField from new-hope [#1160](https://github.com/salute-developers/plasma/pull/1160) ([@TitanKuzmich](https://github.com/TitanKuzmich))
  - feat(sdds-serv): update components actual list [#1174](https://github.com/salute-developers/plasma/pull/1174) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-icons@1.191.0`
  - feat: add generateIconsIos script [#1163](https://github.com/salute-developers/plasma/pull/1163) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.313.0`
  - feat(plasma-web): fix Chip config & test [#1155](https://github.com/salute-developers/plasma/pull/1155) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.73.0`
  - feat(plasma-new-hope): Add state tokens for css themes in examples [#1165](https://github.com/salute-developers/plasma/pull/1165) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.313.0`, `@salutejs/plasma-new-hope@0.73.0`, `@salutejs/plasma-web@1.313.0`
  - feat(new-hope): Cell web, b2c and docs [#1148](https://github.com/salute-developers/plasma/pull/1148) ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- ci(deploy-docs): refactoring common logic [#1147](https://github.com/salute-developers/plasma/pull/1147) ([@Yakutoc](https://github.com/Yakutoc))
- chore(web-docs): fix symlink to changelog [#1173](https://github.com/salute-developers/plasma/pull/1173) ([@Yakutoc](https://github.com/Yakutoc))
- ci: dispatch build-icons event to iOS repo [#1164](https://github.com/salute-developers/plasma/pull/1164) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.313.0`, `@salutejs/plasma-new-hope@0.73.0`, `@salutejs/plasma-web@1.313.0`, `@salutejs/sdds-serv@0.39.0`
  - feat(plasma-hope, b2c, web, new-hope, sdds-serv): Select interlayer [#1161](https://github.com/salute-developers/plasma/pull/1161) ([@shuga2704](https://github.com/shuga2704))
  - fix(new-hope): Edit storybook content [#1154](https://github.com/salute-developers/plasma/pull/1154) ([@iljs](https://github.com/iljs))
- `@salutejs/plasma-new-hope@0.73.0`
  - fix(plasma-website): Fix Icons [#1169](https://github.com/salute-developers/plasma/pull/1169) ([@iljs](https://github.com/iljs))
- `@salutejs/caldera-online@0.33.0`, `@salutejs/plasma-asdk@0.71.0`, `@salutejs/plasma-b2c@1.313.0`, `@salutejs/plasma-web@1.313.0`, `@salutejs/sdds-serv@0.39.0`
  - fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update API report [#1167](https://github.com/salute-developers/plasma/pull/1167) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@1.276.0`
  - fix(new-hope): Fix popup doc [#1168](https://github.com/salute-developers/plasma/pull/1168) ([@iljs](https://github.com/iljs))
- `@salutejs/plasma-tokens@1.78.0`, `@salutejs/caldera-online-themes@0.9.0`, `@salutejs/data-themes@0.9.0`
  - chore: delete unnecessary caldera themes [#1158](https://github.com/salute-developers/plasma/pull/1158) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Apr 02 2024)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.306.1`, `@salutejs/plasma-new-hope@0.67.1`, `@salutejs/plasma-web@1.306.1`, `@salutejs/sdds-serv@0.31.1`
  - fix(new-hope): Edit core and storybook [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@iljs](https://github.com/iljs))

#### Authors: 1

- [@iljs](https://github.com/iljs)

---

# (Thu Mar 28 2024)

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

- feat(perftest-helpers): support mode analysis [#1114](https://github.com/salute-developers/plasma/pull/1114) ([@akhdrv](https://github.com/akhdrv))
- fix(plasma-theme-builder): Fix styling problems [#1127](https://github.com/salute-developers/plasma/pull/1127) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/caldera-online@0.27.0`, `@salutejs/caldera@0.27.0`, `@salutejs/plasma-asdk@0.64.0`, `@salutejs/plasma-b2c@1.306.0`, `@salutejs/plasma-core@1.155.0`, `@salutejs/plasma-hope@1.273.0`, `@salutejs/plasma-icons@1.190.0`, `@salutejs/plasma-new-hope@0.67.0`, `@salutejs/plasma-tokens-b2b@1.37.0`, `@salutejs/plasma-tokens-b2c@0.47.0`, `@salutejs/plasma-tokens-web@1.52.0`, `@salutejs/plasma-tokens@1.76.0`, `@salutejs/plasma-ui@1.242.0`, `@salutejs/plasma-web@1.306.0`, `@salutejs/sdds-serv@0.31.0`, `@salutejs/caldera-online-themes@0.7.0`, `@salutejs/data-themes@0.7.0`, `@salutejs/flamingo-themes@0.7.0`, `@salutejs/plasma-themes@0.7.0`, `@salutejs/sdds-themes@0.7.0`, `@salutejs/plasma-cy-utils@0.87.0`, `@salutejs/plasma-sb-utils@0.153.0`, `@salutejs/plasma-tokens-utils@0.39.0`
  - Release by 27.03.2024 [#1151](https://github.com/salute-developers/plasma/pull/1151) ([@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@akhdrv](https://github.com/akhdrv) [@eg-zhuravlev](https://github.com/eg-zhuravlev))
- `@salutejs/sdds-serv@0.31.0`
  - feat(sdds-serv): Component Toolbar added [#1150](https://github.com/salute-developers/plasma/pull/1150) ([@TitanKuzmich](https://github.com/TitanKuzmich))
  - feat(sdds-serv): fix Badge view tokens [#1142](https://github.com/salute-developers/plasma/pull/1142) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.306.0`, `@salutejs/plasma-new-hope@0.67.0`, `@salutejs/plasma-web@1.306.0`, `@salutejs/sdds-serv@0.31.0`
  - feat(new-hope): add sdds-serv [#1107](https://github.com/salute-developers/plasma/pull/1107) ([@iljs](https://github.com/iljs))
- `@salutejs/plasma-b2c@1.306.0`
  - feat(plasma-b2c): add Divider from new-hope [#1132](https://github.com/salute-developers/plasma/pull/1132) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.306.0`, `@salutejs/plasma-web@1.306.0`, `@salutejs/sdds-serv@0.31.0`
  - feat(plasma-b2c/web,sdds-serv): fix tooltip stories [#1140](https://github.com/salute-developers/plasma/pull/1140) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.67.0`
  - feat(plasma-new-hope): fix Button outline focus [#1141](https://github.com/salute-developers/plasma/pull/1141) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-hope@1.273.0`
  - feat(plasma-hope): remove old Progress [#1126](https://github.com/salute-developers/plasma/pull/1126) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-icons@1.190.0`
  - feat(plasma-icons): script to generate android icons [#1109](https://github.com/salute-developers/plasma/pull/1109) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- ci: add "Dispatch build-icons event" workflow [#1145](https://github.com/salute-developers/plasma/pull/1145) ([@Yakutoc](https://github.com/Yakutoc))
- ci: git reset before retry sync cmd [#1146](https://github.com/salute-developers/plasma/pull/1146) ([@Yakutoc](https://github.com/Yakutoc))
- ci: fix publish rc [#1143](https://github.com/salute-developers/plasma/pull/1143) ([@Yakutoc](https://github.com/Yakutoc))
- ci: use `upload-artifact@v4.1.0` [#1125](https://github.com/salute-developers/plasma/pull/1125) ([@Yakutoc](https://github.com/Yakutoc))
- ci: sync package-lock files by workflow_dispatch [#922](https://github.com/salute-developers/plasma/pull/922) ([@Yakutoc](https://github.com/Yakutoc))
- chore: ignore scaffold templates [#1099](https://github.com/salute-developers/plasma/pull/1099) ([@Yakutoc](https://github.com/Yakutoc))
- chore(ui-docs): delete unnecessary deps [#1120](https://github.com/salute-developers/plasma/pull/1120) ([@Yakutoc](https://github.com/Yakutoc))
- chore(docs-ui): sync deps version [#1118](https://github.com/salute-developers/plasma/pull/1118) ([@Yakutoc](https://github.com/Yakutoc))
- ci(unit-test): delete flag `--no-private` [#1117](https://github.com/salute-developers/plasma/pull/1117) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-icons@1.190.0`
  - fix: add old dir to publish [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-icons): replace primary var to hardcode value [#1106](https://github.com/salute-developers/plasma/pull/1106) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-new-hope@0.67.0`
  - chore(template): add components docs template [#1128](https://github.com/salute-developers/plasma/pull/1128) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-asdk@0.64.0`, `@salutejs/plasma-b2c@1.306.0`, `@salutejs/plasma-web@1.306.0`
  - fix(plasma-web,plasma-b2c,plasma-asdk): Remove js token from import with nested directory [#1144](https://github.com/salute-developers/plasma/pull/1144) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-web,plasma-b2c,plasma-asdk): Replace tokens for background in storybook to new [#1139](https://github.com/salute-developers/plasma/pull/1139) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/caldera-online@0.27.0`, `@salutejs/caldera@0.27.0`, `@salutejs/plasma-asdk@0.64.0`, `@salutejs/plasma-b2c@1.306.0`, `@salutejs/plasma-new-hope@0.67.0`, `@salutejs/plasma-web@1.306.0`, `@salutejs/sdds-serv@0.31.0`
  - chore: bump manual package-locks [#1119](https://github.com/salute-developers/plasma/pull/1119) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.306.0`, `@salutejs/plasma-new-hope@0.67.0`, `@salutejs/plasma-web@1.306.0`, `@salutejs/sdds-serv@0.31.0`
  - fix: change height for Drawer stories [#1116](https://github.com/salute-developers/plasma/pull/1116) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.306.0`, `@salutejs/plasma-web@1.306.0`
  - fix(new-hope): linaria sctipt fix [#1113](https://github.com/salute-developers/plasma/pull/1113) ([@iljs](https://github.com/iljs))

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

# (Thu Mar 14 2024)

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

- `@salutejs/caldera-online@0.21.0`, `@salutejs/caldera@0.21.0`, `@salutejs/plasma-asdk@0.57.0`, `@salutejs/plasma-b2c@1.299.0`, `@salutejs/plasma-core@1.154.0`, `@salutejs/plasma-hope@1.270.0`, `@salutejs/plasma-icons@1.188.0`, `@salutejs/plasma-new-hope@0.61.0`, `@salutejs/plasma-tokens-b2b@1.36.0`, `@salutejs/plasma-tokens-b2c@0.46.0`, `@salutejs/plasma-tokens-web@1.51.0`, `@salutejs/plasma-ui@1.239.0`, `@salutejs/plasma-web@1.299.0`, `@salutejs/sdds-serv@0.24.0`, `@salutejs/plasma-cy-utils@0.86.0`, `@salutejs/plasma-sb-utils@0.152.0`
  - Release by 13.03.2024 [#1112](https://github.com/salute-developers/plasma/pull/1112) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704) [@kayman233](https://github.com/kayman233))
- `@salutejs/sdds-serv@0.24.0`
  - feat(sdds-serv): add grid component [#1105](https://github.com/salute-developers/plasma/pull/1105) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/caldera-online@0.21.0`, `@salutejs/caldera@0.21.0`, `@salutejs/plasma-b2c@1.299.0`, `@salutejs/plasma-new-hope@0.61.0`, `@salutejs/plasma-web@1.299.0`, `@salutejs/sdds-serv@0.24.0`
  - feat: remove scale tokens from bButton & ButtonGroup [#1110](https://github.com/salute-developers/plasma/pull/1110) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-icons@1.188.0`
  - feat(plasma-icons): build-time generate Icon components [#1101](https://github.com/salute-developers/plasma/pull/1101) ([@kayman233](https://github.com/kayman233))
  - feat(plasma-icons): Add svg icons T, V, W [#1095](https://github.com/salute-developers/plasma/pull/1095) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-new-hope@0.61.0`
  - feat(plasma-new-hope): Update note in TextField [#1082](https://github.com/salute-developers/plasma/pull/1082) ([@shuga2704](https://github.com/shuga2704))
  - feat(new-hope): edit calendar range logic and fix name [#1084](https://github.com/salute-developers/plasma/pull/1084) ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- chore: remove sdds-srvc dir [#1108](https://github.com/salute-developers/plasma/pull/1108) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- ci: enable build sdds-serv docs [#1098](https://github.com/salute-developers/plasma/pull/1098) ([@Yakutoc](https://github.com/Yakutoc))
- chore(sdds-serv-docs): Update versions [#1097](https://github.com/salute-developers/plasma/pull/1097) ([@Yakutoc](https://github.com/Yakutoc))
- docs(sdds-serv-docs): add dropdown docs & update Drawer/ButtonGroup [#1062](https://github.com/salute-developers/plasma/pull/1062) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.299.0`, `@salutejs/plasma-new-hope@0.61.0`, `@salutejs/plasma-web@1.299.0`
  - feat(plasma-web, b2c, new-hope): Added ButtonBase [#1080](https://github.com/salute-developers/plasma/pull/1080) ([@shuga2704](https://github.com/shuga2704))
- `@salutejs/caldera-online@0.21.0`, `@salutejs/caldera@0.21.0`, `@salutejs/plasma-asdk@0.57.0`, `@salutejs/plasma-b2c@1.299.0`, `@salutejs/plasma-new-hope@0.61.0`, `@salutejs/plasma-web@1.299.0`, `@salutejs/sdds-serv@0.24.0`
  - chore: bump manual package-locks [#1111](https://github.com/salute-developers/plasma/pull/1111) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-ui@1.239.0`
  - fix(ui): fix pickers documentation bug with overflow [#1089](https://github.com/salute-developers/plasma/pull/1089) ([@iljs](https://github.com/iljs))
- `@salutejs/caldera-online@0.21.0`, `@salutejs/caldera@0.21.0`, `@salutejs/plasma-asdk@0.57.0`, `@salutejs/plasma-b2c@1.299.0`, `@salutejs/plasma-new-hope@0.61.0`, `@salutejs/plasma-ui@1.239.0`, `@salutejs/plasma-web@1.299.0`, `@salutejs/sdds-serv@0.24.0`
  - chore(storybook): bump storybook to "@latest" [#1096](https://github.com/salute-developers/plasma/pull/1096) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-b2b@1.36.0`, `@salutejs/plasma-tokens-b2c@0.46.0`, `@salutejs/plasma-tokens-web@1.51.0`
  - fix(plasma-tokens-*): Add `new` directory for for new tokens [#1094](https://github.com/salute-developers/plasma/pull/1094) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-new-hope@0.61.0`
  - fix(new-hope): tooltip classname fix [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@iljs](https://github.com/iljs))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Mar 05 2024)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens-b2b@1.35.1`, `@salutejs/plasma-tokens-b2c@0.45.1`, `@salutejs/plasma-tokens-web@1.50.1`
  - fix(plasma-tokens-*): Add `new` directory for for new tokens [Hotfix] [#1093](https://github.com/salute-developers/plasma/pull/1093) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Mar 01 2024)

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

- feat: Update workflow with new packages [#1074](https://github.com/salute-developers/plasma/pull/1074) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/caldera-online@0.15.0`, `@salutejs/caldera@0.15.0`, `@salutejs/plasma-asdk@0.50.0`, `@salutejs/plasma-b2c@1.292.0`, `@salutejs/plasma-core@1.153.0`, `@salutejs/plasma-hope@1.267.0`, `@salutejs/plasma-icons@1.186.0`, `@salutejs/plasma-new-hope@0.56.0`, `@salutejs/plasma-tokens-b2b@1.35.0`, `@salutejs/plasma-tokens-b2c@0.45.0`, `@salutejs/plasma-tokens-web@1.50.0`, `@salutejs/plasma-tokens@1.75.0`, `@salutejs/plasma-ui@1.237.0`, `@salutejs/plasma-web@1.292.0`, `@salutejs/sdds-serv@0.16.0`, `@salutejs/caldera-online-themes@0.6.0`, `@salutejs/data-themes@0.6.0`, `@salutejs/flamingo-themes@0.6.0`, `@salutejs/plasma-themes@0.6.0`, `@salutejs/sdds-themes@0.6.0`, `@salutejs/plasma-cy-utils@0.85.0`, `@salutejs/plasma-sb-utils@0.151.0`, `@salutejs/plasma-tokens-utils@0.38.0`
  - Release by 29.02.2024 [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike) [@malilex](https://github.com/malilex) [@shuga2704](https://github.com/shuga2704) [@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-tokens-b2b@1.35.0`, `@salutejs/plasma-tokens-b2c@0.45.0`, `@salutejs/plasma-tokens-web@1.50.0`
  - feat(plasma-tokens-*): Add re-export fallback tokens [#1078](https://github.com/salute-developers/plasma/pull/1078) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/sdds-serv@0.16.0`
  - feat(sdds-serv): add Drawer [#1068](https://github.com/salute-developers/plasma/pull/1068) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.292.0`
  - feat(plasma-b2c): Refactor TextField [#949](https://github.com/salute-developers/plasma/pull/949) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-new-hope@0.56.0`
  - feat(plasma-new-hope): fix toast close button [#1061](https://github.com/salute-developers/plasma/pull/1061) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.56.0`, `@salutejs/plasma-tokens@1.75.0`, `@salutejs/sdds-serv@0.16.0`
  - feat(sdds-serv): add components from new-hope [#1056](https://github.com/salute-developers/plasma/pull/1056) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-tokens@1.75.0`
  - feat(plasma-tokens): Add theme sdds_serv [#1052](https://github.com/salute-developers/plasma/pull/1052) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore[sdds-android, cicd]: Project build system migration to composite builds was made to support multiproject structure. Code quality check workflow was created. Merge report tasks were added. Codeowners file was modified. [#1070](https://github.com/salute-developers/plasma/pull/1070) ([@malilex](https://github.com/malilex))
- chore: update "@auto-it" to latest [#1069](https://github.com/salute-developers/plasma/pull/1069) ([@Yakutoc](https://github.com/Yakutoc))
- ci: build "SDDS SERV" docs artefact [#1066](https://github.com/salute-developers/plasma/pull/1066) ([@Yakutoc](https://github.com/Yakutoc))
- docs(cypress): add paragraph about required browser `chromium` [#1058](https://github.com/salute-developers/plasma/pull/1058) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-temple-docs): Remove package [#901](https://github.com/salute-developers/plasma/pull/901) ([@neretin-trike](https://github.com/neretin-trike))
- chore[sdds-android]: SDDS Android project was created. [#1045](https://github.com/salute-developers/plasma/pull/1045) ([@malilex](https://github.com/malilex))
- chore: Remove plasma-temple cypress config and snapshots [#1048](https://github.com/salute-developers/plasma/pull/1048) ([@neretin-trike](https://github.com/neretin-trike))
- chore: disable 'released' plugin [#1057](https://github.com/salute-developers/plasma/pull/1057) ([@Yakutoc](https://github.com/Yakutoc))
- chore: add `auto.logger` for package name after upload assets [#1054](https://github.com/salute-developers/plasma/pull/1054) ([@Yakutoc](https://github.com/Yakutoc))
- chore: add sdds-serv to workflows [#1051](https://github.com/salute-developers/plasma/pull/1051) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.56.0`
  - chore(new-hope): fix overlay stories [#1075](https://github.com/salute-developers/plasma/pull/1075) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/sdds-serv@0.16.0`
  - fix(sdds-serv): package rename [#1072](https://github.com/salute-developers/plasma/pull/1072) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.292.0`, `@salutejs/plasma-new-hope@0.56.0`, `@salutejs/plasma-web@1.292.0`
  - feat(plasma-new-hope, web, b2c): Added Indicator component [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@shuga2704](https://github.com/shuga2704))
- `@salutejs/plasma-tokens@1.75.0`
  - fix: add desc prop [#1055](https://github.com/salute-developers/plasma/pull/1055) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/caldera-online@0.15.0`, `@salutejs/caldera@0.15.0`, `@salutejs/plasma-asdk@0.50.0`, `@salutejs/plasma-b2c@1.292.0`, `@salutejs/plasma-core@1.153.0`, `@salutejs/plasma-hope@1.267.0`, `@salutejs/plasma-icons@1.186.0`, `@salutejs/plasma-new-hope@0.56.0`, `@salutejs/plasma-tokens@1.75.0`, `@salutejs/plasma-ui@1.237.0`, `@salutejs/plasma-web@1.292.0`, `@salutejs/plasma-cy-utils@0.85.0`, `@salutejs/plasma-sb-utils@0.151.0`
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

# (Thu Feb 15 2024)

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

- feat(plasma-web-docs): Add docs for `Combobox` component [#1032](https://github.com/salute-developers/plasma/pull/1032) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/caldera-online@0.8.0`, `@salutejs/caldera@0.8.0`, `@salutejs/plasma-asdk@0.43.0`, `@salutejs/plasma-b2c@1.285.0`, `@salutejs/plasma-core@1.149.0`, `@salutejs/plasma-hope@1.263.0`, `@salutejs/plasma-icons@1.182.0`, `@salutejs/plasma-new-hope@0.49.0`, `@salutejs/plasma-temple@1.201.0`, `@salutejs/plasma-tokens@1.72.0`, `@salutejs/plasma-ui@1.233.0`, `@salutejs/plasma-web@1.285.0`, `@salutejs/sdds-srvc@0.9.0`, `@salutejs/plasma-cy-utils@0.81.0`, `@salutejs/plasma-sb-utils@0.147.0`
  - Release by 14.02.2024 [#1047](https://github.com/salute-developers/plasma/pull/1047) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yeti-or](https://github.com/Yeti-or) [@luizasok](https://github.com/luizasok) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.285.0`, `@salutejs/plasma-new-hope@0.49.0`, `@salutejs/plasma-web@1.285.0`
  - feat(plasma-web, b2c): Added documentation for Avatar and AvatarGroup [#1036](https://github.com/salute-developers/plasma/pull/1036) ([@shuga2704](https://github.com/shuga2704))
  - fix(plasma-new-hope): add key navigation to Tabs [#983](https://github.com/salute-developers/plasma/pull/983) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-b2c@1.285.0`, `@salutejs/plasma-web@1.285.0`
  - feat(plasma-web/b2c): add Overlay component [#1033](https://github.com/salute-developers/plasma/pull/1033) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.285.0`
  - feat(b2c): handle "onChangeStartOfRange" prop [#1014](https://github.com/salute-developers/plasma/pull/1014) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens@1.72.0`
  - feat(plasma-tokens): Add theme flamingo [#941](https://github.com/salute-developers/plasma/pull/941) ([@luizasok](https://github.com/luizasok))
  - feat(plasma-tokens): Add theme sdds_srvc [#1027](https://github.com/salute-developers/plasma/pull/1027) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/caldera-online@0.8.0`
  - feat(caldera-online): add Caldera-online package [#1012](https://github.com/salute-developers/plasma/pull/1012) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/caldera-online@0.8.0`, `@salutejs/caldera@0.8.0`, `@salutejs/sdds-srvc@0.9.0`
  - feat(caldera): improve storybook readme [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/sdds-srvc@0.9.0`
  - feat(sdds-srvc): add SDDS-SRVC package [#1023](https://github.com/salute-developers/plasma/pull/1023) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-asdk@0.43.0`
  - feat(plasma-asdk): remove plasma-core deps [#1021](https://github.com/salute-developers/plasma/pull/1021) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- ci: extend packages list for deploy to dev stage [#1037](https://github.com/salute-developers/plasma/pull/1037) ([@Yakutoc](https://github.com/Yakutoc))
- ci(changelog): correct escape symbols [#1034](https://github.com/salute-developers/plasma/pull/1034) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add dev stage (s3) [#1029](https://github.com/salute-developers/plasma/pull/1029) ([@Yakutoc](https://github.com/Yakutoc))
- chore(ui-docs): delete unnecessary highlighting code [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yakutoc](https://github.com/Yakutoc))
- chore(web-docs): delete unnecessary highlighting code [#1025](https://github.com/salute-developers/plasma/pull/1025) ([@Yakutoc](https://github.com/Yakutoc))
- chore: add sdds-srvc to workflows [#1022](https://github.com/salute-developers/plasma/pull/1022) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-ui@1.233.0`
  - chore: update snapshots [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.285.0`, `@salutejs/plasma-hope@1.263.0`, `@salutejs/plasma-web@1.285.0`
  - fix(plasma-hope): Add value deps for `Select` component with multiselect mode [#1040](https://github.com/salute-developers/plasma/pull/1040) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.285.0`, `@salutejs/plasma-web@1.285.0`
  - feat(plasma-b2c, plasma-web): Wrapped Spinner up in styled only in SC build [#942](https://github.com/salute-developers/plasma/pull/942) ([@shuga2704](https://github.com/shuga2704))
- `@salutejs/plasma-icons@1.182.0`
  - fix(plasma-icons): fix tree-shaking [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@kayman233](https://github.com/kayman233))

#### ⚠️ Pushed to `master`

- ci(documentation): deploy "new-hope" storybook [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete caldera scope [no ci] ([@Yakutoc](https://github.com/Yakutoc))

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

# (Thu Feb 01 2024)

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

- `@salutejs/plasma-asdk@0.35.0`, `@salutejs/plasma-b2c@1.277.0`, `@salutejs/plasma-core@1.146.0`, `@salutejs/plasma-hope@1.258.0`, `@salutejs/plasma-icons@1.179.0`, `@salutejs/plasma-new-hope@0.41.0`, `@salutejs/plasma-temple@1.198.0`, `@salutejs/plasma-tokens@1.70.0`, `@salutejs/plasma-ui@1.230.0`, `@salutejs/plasma-web@1.277.0`, `@salutejs/plasma-cy-utils@0.78.0`, `@salutejs/plasma-sb-utils@0.144.0`
  - Release by 31.01.2024 [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@luizasok](https://github.com/luizasok) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv) [@nikewht](https://github.com/nikewht) [@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@1.258.0`
  - feat(plasma-hope): remove Toast [#1010](https://github.com/salute-developers/plasma/pull/1010) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.41.0`
  - feat(plasma-new-hope): Add support usePortal for `Select` component [#956](https://github.com/salute-developers/plasma/pull/956) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(new-hope): add Avatar, AvatarGroup [#962](https://github.com/salute-developers/plasma/pull/962) ([@nikewht](https://github.com/nikewht))
- `@salutejs/plasma-tokens@1.70.0`
  - feat(plasma-tokens): Add theme caldera_online [#1013](https://github.com/salute-developers/plasma/pull/1013) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- ci: delete unnecessary `on:pull_request` into master [#1018](https://github.com/salute-developers/plasma/pull/1018) ([@Yakutoc](https://github.com/Yakutoc))
- ci: remove perftool max log verbosity [#1004](https://github.com/salute-developers/plasma/pull/1004) ([@akhdrv](https://github.com/akhdrv))
- chore: add Caldera-online-package to workflows [#1003](https://github.com/salute-developers/plasma/pull/1003) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- ci(release-latest): delete "versionate_docs" job in publish latest workflow [#1006](https://github.com/salute-developers/plasma/pull/1006) ([@Yakutoc](https://github.com/Yakutoc))
- ci(changelog): refactoring "Create release pull request" workflow [#1007](https://github.com/salute-developers/plasma/pull/1007) ([@Yakutoc](https://github.com/Yakutoc))
- ci(publish-rc): add notification when publish failed [#935](https://github.com/salute-developers/plasma/pull/935) ([@Yakutoc](https://github.com/Yakutoc))
- chore(lerna): override ignoreChanges property for list command [#995](https://github.com/salute-developers/plasma/pull/995) ([@Yakutoc](https://github.com/Yakutoc))
- ci: use perftool collaborative mode [#991](https://github.com/salute-developers/plasma/pull/991) ([@akhdrv](https://github.com/akhdrv))
- ci(documentation): add documentation workflow for dev branch [#996](https://github.com/salute-developers/plasma/pull/996) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add caldera-package to workflows [#994](https://github.com/salute-developers/plasma/pull/994) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-core@1.146.0`, `@salutejs/plasma-new-hope@0.41.0`
  - fix(plasma-new-hope): Update behavior with defaultValue for `TextArea` component [#1017](https://github.com/salute-developers/plasma/pull/1017) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.277.0`, `@salutejs/plasma-new-hope@0.41.0`, `@salutejs/plasma-web@1.277.0`
  - chore: fix Popup storybook example [#997](https://github.com/salute-developers/plasma/pull/997) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-new-hope@0.41.0`
  - fix(plasma-new-hope): fix id generation for Modal, Popup [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-icons@1.179.0`
  - fix(plasma-icons): fix package publish [#989](https://github.com/salute-developers/plasma/pull/989) ([@kayman233](https://github.com/kayman233))

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

# (Fri Jan 19 2024)

#### 🐛 Bug Fix

- `@salutejs/plasma-icons@1.177.1`
  - fix(plasma-icons): fix package publish [#988](https://github.com/salute-developers/plasma/pull/988) ([@kayman233](https://github.com/kayman233))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-ui@1.228.1`, `@salutejs/plasma-web@1.271.1`
  - chore: closed img tag [no ci] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Jan 18 2024)

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

- feat(plasma-web/b2c): add snapshots for Counter [#965](https://github.com/salute-developers/plasma/pull/965) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-core@1.144.0`
  - feat: manual publish latest ([@Yakutoc](https://github.com/Yakutoc))
  - chore(plasma-core): return explicit type exports in src/types [#940](https://github.com/salute-developers/plasma/pull/940) ([@shuga2704](https://github.com/shuga2704))
- `@salutejs/plasma-asdk@0.29.0`, `@salutejs/plasma-b2c@1.271.0`, `@salutejs/plasma-core@1.144.0`, `@salutejs/plasma-hope@1.255.0`, `@salutejs/plasma-icons@1.177.0`, `@salutejs/plasma-new-hope@0.35.0`, `@salutejs/plasma-temple@1.196.0`, `@salutejs/plasma-tokens-b2b@1.33.0`, `@salutejs/plasma-tokens-b2c@0.43.0`, `@salutejs/plasma-tokens-web@1.48.0`, `@salutejs/plasma-tokens@1.68.0`, `@salutejs/plasma-ui@1.228.0`, `@salutejs/plasma-web@1.271.0`, `@salutejs/plasma-cy-utils@0.76.0`, `@salutejs/plasma-sb-utils@0.142.0`, `@salutejs/plasma-tokens-utils@0.37.0`
  - Release by 18.01.2024 [#981](https://github.com/salute-developers/plasma/pull/981) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.271.0`, `@salutejs/plasma-new-hope@0.35.0`, `@salutejs/plasma-web@1.271.0`
  - feat(plasma-new-hope/web/b2c): remove QuantityBadge [#964](https://github.com/salute-developers/plasma/pull/964) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-tokens@1.68.0`
  - feat(plasma-tokens): Update typo tokens for legacy themes [#971](https://github.com/salute-developers/plasma/pull/971) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@1.255.0`
  - feat(plasma-hope): remove Image [#968](https://github.com/salute-developers/plasma/pull/968) ([@TitanKuzmich](https://github.com/TitanKuzmich))
  - feat(plasma-hope): remove skeleton component and mixin [#954](https://github.com/salute-developers/plasma/pull/954) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-web@1.271.0`
  - feat(plasma-web): new typography sizes for Skeleton with snapshots [#960](https://github.com/salute-developers/plasma/pull/960) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-icons@1.177.0`
  - fix(plasma-icons): fix IconRoot API [#955](https://github.com/salute-developers/plasma/pull/955) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-ui@1.228.0`
  - feat(plasma-ui): add property to show/hide subtitle on S viewport [#958](https://github.com/salute-developers/plasma/pull/958) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.35.0`
  - feat(plasma-new-hope): fix CalendarDouble ref [#959](https://github.com/salute-developers/plasma/pull/959) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-asdk@0.29.0`, `@salutejs/plasma-new-hope@0.35.0`
  - feat(plasma-asdk): fix typography configs [#947](https://github.com/salute-developers/plasma/pull/947) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- ci: escaping special characters [#967](https://github.com/salute-developers/plasma/pull/967) ([@Yakutoc](https://github.com/Yakutoc))
- ci: disable flag since for "Unit test" [#969](https://github.com/salute-developers/plasma/pull/969) ([@Yakutoc](https://github.com/Yakutoc))
- ci: handling cli options for "@auto-it" [#890](https://github.com/salute-developers/plasma/pull/890) ([@Yakutoc](https://github.com/Yakutoc))
- test: update perftool [#932](https://github.com/salute-developers/plasma/pull/932) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/plasma-new-hope@0.35.0`
  - fix(plasma-new-hope): Add flex to warpper in `Spinner` component [#966](https://github.com/salute-developers/plasma/pull/966) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-web): fix Popover arrow in Safari, Firefox [#963](https://github.com/salute-developers/plasma/pull/963) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-hope@1.255.0`
  - fix(plasma-hope): Ts improvement [#957](https://github.com/salute-developers/plasma/pull/957) ([@shuga2704](https://github.com/shuga2704))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Dec 25 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-asdk@0.20.0`, `@salutejs/plasma-b2c@1.261.0`, `@salutejs/plasma-new-hope@0.27.0`, `@salutejs/plasma-web@1.261.0`
  - hot-fix(plasma-new-hope): redefining classnames for typography [#951](https://github.com/salute-developers/plasma/pull/951) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-new-hope@0.27.0`
  - feat(plasma-new-hope): remove useEffect from typography [#946](https://github.com/salute-developers/plasma/pull/946) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# (Fri Dec 22 2023)

### Release Notes

#### Release by 22.12.2023 ([#945](https://github.com/salute-developers/plasma/pull/945))

## Components

### Upload

- исправлены стили для StyledButton в состоянии isGrabbing

 
plasma-hope: fix broken style for Upload button (https://github.com/salute-developers/plasma/pull/926)

### Button

- вынесены токены;
- поправлено поведение props square;
- добавлены недостающие props: stretch и pin

 
feat(plasma-new-hope): refactor & add stretch/pin props (https://github.com/salute-developers/plasma/pull/896)

### Notification

-   добавлен новый дизайн компонента
-   добавили новый api

Было:
<img width="329" alt="Снимок экрана 2023-12-14 в 17 16 05" src="https://github.com/salute-developers/plasma/assets/46107741/9c674b80-af3d-4339-abc1-8567c3470245">

Стало:
<img width="264" alt="Снимок экрана 2023-12-14 в 17 16 25" src="https://github.com/salute-developers/plasma/assets/46107741/eefb0cb5-9c70-47c3-84c9-a2ba21ff436f">

 
plasma-new-hope: Notification redesign (https://github.com/salute-developers/plasma/pull/927)

### Tooltip

- для сохранения обратной совместимости  вернули поддержку prop children

 
fix(plasma-new-hope): Add support children props to Tooltip component (https://github.com/salute-developers/plasma/pull/937)

### TextArea, Radiobox, Checkbox, Link, Spinner 

- добавлены/обновлены конфигурации в библиотеках "plasma-{web, b2c}"
- добавлены/обновлены снапшоты на компоненты

### Tokens

- добавлена поддержка в темах новых цветовых токенов
- добавлены fallback в библиотеках "plasma-tokens-{b2c, web, b2b}"

 
feat(plasma-web,plasma-b2c): Add new design to plasma (https://github.com/salute-developers/plasma/pull/902)

### Typography

-   добавлена типографика в виде компонент в b2c / web
-   добавлены миксины с токенами типографики в b2c / web
-   исправлен компонент и миксин для Underline/ Headline5
-   скорректированы некоторые тесты

 
feat(plasma-b2c/web): add new typograhy to packages (https://github.com/salute-developers/plasma/pull/933)

### Segment

-  добавлен новый компонент для plasma-b2c/web
-  написаны тесты для компонента

#### Стало

![image](https://github.com/salute-developers/plasma/assets/40370966/624f9831-5aa2-4fb8-bc0d-86211e6bb51e)

 
feat(plasma-new-hope): Segment component (https://github.com/salute-developers/plasma/pull/931)


## Infra

### Cypress

- добавлена возможность запустить тест для перечисленных компонентов 

Запуск команды "npm run cy:web:run-ct --components=calendar,button" даст

<img width="998" alt="Screenshot 2023-12-12 at 15 57 08" src="https://github.com/salute-developers/plasma/assets/2895992/4b48f71b-7e95-4711-b716-5ad021fb8fe7">


 
plasma-infra: Run cypress with `--components` (https://github.com/salute-developers/plasma/pull/907)

### Vite

- подняли патч версию до 4.5.1 для решения проблемы локального запуска Storybook из-за **fsevents.watch is not a function**
- закрыли [Vite XSS vulnerability in `server.transformIndexHtml` via URL payload](https://github.com/advisories/GHSA-92r3-m2mg-pj97)

 
plasma-infra: Bump vite@4.5.1 (https://github.com/salute-developers/plasma/pull/934)

---

#### 🚀 Enhancement

- feat: Update cypress-common yaml with new deps [#902](https://github.com/salute-developers/plasma/pull/902) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-asdk@0.19.0`, `@salutejs/plasma-b2c@1.260.0`, `@salutejs/plasma-core@1.142.0`, `@salutejs/plasma-hope@1.250.0`, `@salutejs/plasma-icons@1.174.0`, `@salutejs/plasma-new-hope@0.26.0`, `@salutejs/plasma-temple@1.192.0`, `@salutejs/plasma-tokens-b2b@1.32.0`, `@salutejs/plasma-tokens-b2c@0.42.0`, `@salutejs/plasma-tokens-web@1.47.0`, `@salutejs/plasma-tokens@1.67.0`, `@salutejs/plasma-ui@1.224.0`, `@salutejs/plasma-web@1.260.0`, `@salutejs/plasma-cy-utils@0.75.0`, `@salutejs/plasma-sb-utils@0.140.0`, `@salutejs/plasma-tokens-utils@0.36.0`
  - Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
  - feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.260.0`, `@salutejs/plasma-web@1.260.0`
  - feat(plasma-b2c/web): add stretch prop and update test [#931](https://github.com/salute-developers/plasma/pull/931) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.260.0`, `@salutejs/plasma-new-hope@0.26.0`, `@salutejs/plasma-web@1.260.0`
  - fix(plasma-new-hope): fix Notification layout with long text [#927](https://github.com/salute-developers/plasma/pull/927) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-new-hope@0.26.0`
  - feat(plasma-new-hope): revert button tag for root [#896](https://github.com/salute-developers/plasma/pull/896) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-hope@1.250.0`
  - feat(plasma-hope): fix broken style for Upload button [#926](https://github.com/salute-developers/plasma/pull/926) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Release by 22.12.2023 [#945](https://github.com/salute-developers/plasma/pull/945) ([@Yakutoc](https://github.com/Yakutoc))
- chore(chokidar): overrides version [#938](https://github.com/salute-developers/plasma/pull/938) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-ui): update snapshots [#934](https://github.com/salute-developers/plasma/pull/934) ([@Yakutoc](https://github.com/Yakutoc))
- docs(contributing): add paragraph about "Run cypress with --components" [#907](https://github.com/salute-developers/plasma/pull/907) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-new-hope@0.26.0`
  - fix(plasma-new-hope): Add support children props to `Tooltip` component [#937](https://github.com/salute-developers/plasma/pull/937) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Dec 14 2023)

### Release Notes

#### Release by 14.12.2023 ([#925](https://github.com/salute-developers/plasma/pull/925))

## Components

### Tabs

- вынесены токены в отдельный файл
- исправлен конфиг
- убрана вариация active
 
plasma-new-hope: Refactoring tabs tokens, variations, config (https://github.com/salute-developers/plasma/pull/873)

### AddFocus

- добавлен общий mixin addFocus(на него переведены компоненты: **Chip, Checkbox, Radiobox, Calendar** )
 
plasma-(new-hope, asdk): Add focus mixin (https://github.com/salute-developers/plasma/pull/888)

### Header

Для plasma-{new-hope,asdk}

- добавлен компонент **Header**, в качестве составных компонента (HeaderLogo, HeaderArrow, etc.)
- добавлен mixin **mediaQuery**
 
feat(plasma-new-hope): Add header as separate components (https://github.com/salute-developers/plasma/pull/887)

### Tooltip

- добавлен `Tooltip` с новым дизайном и API (для `plasma-{web,b2c,new-hope}`)
 
plasma-new-hope: Add tooltip (https://github.com/salute-developers/plasma/pull/879)

### Switch

- добавлена реализация на новой архитектуре для plasma-{new-hope, web, asdk}  
 
feat(new-hope): switch (https://github.com/salute-developers/plasma/pull/816)


## Infra

### Upload assets when publish canary, latest

- добавили условие при котором происходит загрузка assets 
 
plasma-infra: Handling upload-assets  (https://github.com/salute-developers/plasma/pull/882)

### Actions/setup-node

- зафиксировали версию Node.js (18.16.1) для корректной работы в CI 
 
plasma-infra: Use 18.16.1 node version (https://github.com/salute-developers/plasma/pull/904)

### Upload assets when publish RC

- переопределена логика получения commit для правильного условия загрузки assets в момент публикации RC
 
plasma-infra: Upload assets when publish rc (https://github.com/salute-developers/plasma/pull/892)

### Auto generate changelog [CI]

- добавлен workflow для ручного запуска создания PR релиза 
- автоматизирован процесс создания changelog на основе merged prs и labels  
 
plasma-infra: Automation of the release process (https://github.com/salute-developers/plasma/pull/894)

### Storybook

- добавлен новый location в "https://plasma.sberdevices.ru/asdk-storybook/" (plasma-ASDK)

 
plasma-infra:  Add storybook for "Plasma-ASDK" (https://github.com/salute-developers/plasma/pull/908)


## Tokens

### Theme builder

- В генератор файлов темы добавлены метод, который восстанавливает значение цвета из ссылки, т.е. переведёт: **[general.red.500] => #FF293E**
- Добавлена генерация токенов цвета в kebab нотации
 
fix(plasma-theme-builder): Add restored color method for generate themes (https://github.com/salute-developers/plasma/pull/899)

---

#### 🚀 Enhancement

- `@salutejs/plasma-asdk@0.14.0`, `@salutejs/plasma-b2c@1.254.0`, `@salutejs/plasma-core@1.142.0`, `@salutejs/plasma-hope@1.248.0`, `@salutejs/plasma-new-hope@0.21.0`, `@salutejs/plasma-web@1.254.0`
  - Release by 14.12.2023 [#925](https://github.com/salute-developers/plasma/pull/925) ([@nikewht](https://github.com/nikewht) [@Yakutoc](https://github.com/Yakutoc) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike) nikita.belyanskiy@south.rt.ru [@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-asdk@0.14.0`
  - feat(plasma-asdk): add Switch component [#816](https://github.com/salute-developers/plasma/pull/816) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.254.0`, `@salutejs/plasma-new-hope@0.21.0`, `@salutejs/plasma-web@1.254.0`
  - fix(plasma-new-hope): fix tokens usage in Tooltip [#879](https://github.com/salute-developers/plasma/pull/879) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-asdk@0.14.0`, `@salutejs/plasma-new-hope@0.21.0`
  - feat(plasma-new-hope): remove media-query from root [#887](https://github.com/salute-developers/plasma/pull/887) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-new-hope@0.21.0`
  - feat(plasma-new-hope): replace local addFocus on general in calendar [#888](https://github.com/salute-developers/plasma/pull/888) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- fix(plasma-theme-builder): Add resoterd color methods for generate themes [#899](https://github.com/salute-developers/plasma/pull/899) ([@neretin-trike](https://github.com/neretin-trike))
- chore: refactoring pull request template [#915](https://github.com/salute-developers/plasma/pull/915) ([@Yakutoc](https://github.com/Yakutoc))
- ci(docs): add storybook for "Plasma-ASDK" [#908](https://github.com/salute-developers/plasma/pull/908) ([@Yakutoc](https://github.com/Yakutoc))
- ci: update pull request template [#894](https://github.com/salute-developers/plasma/pull/894) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-tokens-native): fix typo [#910](https://github.com/salute-developers/plasma/pull/910) ([@Yakutoc](https://github.com/Yakutoc))
- ci: computed condition for upload assets when publish RC [#892](https://github.com/salute-developers/plasma/pull/892) ([@Yakutoc](https://github.com/Yakutoc))
- ci(node): freeze node version [#904](https://github.com/salute-developers/plasma/pull/904) ([@Yakutoc](https://github.com/Yakutoc))
- fix: Fix typo [#891](https://github.com/salute-developers/plasma/pull/891) ([@Yakutoc](https://github.com/Yakutoc))
- ci: handling upload assets [#882](https://github.com/salute-developers/plasma/pull/882) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-asdk@0.14.0`, `@salutejs/plasma-b2c@1.254.0`, `@salutejs/plasma-new-hope@0.21.0`, `@salutejs/plasma-web@1.254.0`
  - chore: update package locks [#916](https://github.com/salute-developers/plasma/pull/916) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.254.0`
  - chore(plasma-b2c): fix typo [#889](https://github.com/salute-developers/plasma/pull/889) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-new-hope@0.21.0`
  - refactor(new-hope): tokens, variations, config [#873](https://github.com/salute-developers/plasma/pull/873) ([@nikewht](https://github.com/nikewht))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Nov 30 2023)

#### 🚀 Enhancement

- feat: Update cypress-common workflow with new tokens deps [#817](https://github.com/salute-developers/plasma/pull/817) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-asdk@0.10.0`, `@salutejs/plasma-b2c@1.250.0`, `@salutejs/plasma-colors@0.12.0`, `@salutejs/plasma-core@1.141.0`, `@salutejs/plasma-hope@1.247.0`, `@salutejs/plasma-icons@1.173.0`, `@salutejs/plasma-new-hope@0.17.0`, `@salutejs/plasma-temple@1.191.0`, `@salutejs/plasma-tokens-b2b@1.31.0`, `@salutejs/plasma-tokens-b2c@0.41.0`, `@salutejs/plasma-tokens-core@0.6.0`, `@salutejs/plasma-tokens-web@1.46.0`, `@salutejs/plasma-tokens@1.66.0`, `@salutejs/plasma-typo@0.40.0`, `@salutejs/plasma-ui@1.223.0`, `@salutejs/plasma-web@1.250.0`, `@salutejs/plasma-cy-utils@0.74.0`, `@salutejs/plasma-sb-utils@0.139.0`, `@salutejs/plasma-tokens-utils@0.35.0`
  - Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-new-hope@0.17.0`
  - feat(plasma-new-hope-b2c/web): add close icon size token [#867](https://github.com/salute-developers/plasma/pull/867) ([@TitanKuzmich](https://github.com/TitanKuzmich))
  - feat(plasma-new-hope): Add Dropdown [#854](https://github.com/salute-developers/plasma/pull/854) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-asdk@0.10.0`
  - feat(plasma-asdk): remove plasma-hope dep [#855](https://github.com/salute-developers/plasma/pull/855) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-b2c@1.250.0`, `@salutejs/plasma-hope@1.247.0`, `@salutejs/plasma-new-hope@0.17.0`, `@salutejs/plasma-web@1.250.0`
  - fix(plasma-new-hope, plasms-web, plasma-b2c): fix title font for Notification [#848](https://github.com/salute-developers/plasma/pull/848) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-asdk@0.10.0`, `@salutejs/plasma-b2c@1.250.0`, `@salutejs/plasma-core@1.141.0`, `@salutejs/plasma-hope@1.247.0`, `@salutejs/plasma-icons@1.173.0`, `@salutejs/plasma-new-hope@0.17.0`, `@salutejs/plasma-temple@1.191.0`, `@salutejs/plasma-tokens-b2b@1.31.0`, `@salutejs/plasma-tokens-b2c@0.41.0`, `@salutejs/plasma-tokens-web@1.46.0`, `@salutejs/plasma-tokens@1.66.0`, `@salutejs/plasma-ui@1.223.0`, `@salutejs/plasma-web@1.250.0`, `@salutejs/plasma-cy-utils@0.74.0`, `@salutejs/plasma-sb-utils@0.139.0`, `@salutejs/plasma-tokens-utils@0.35.0`
  - feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(root): fix vulnerabilities: high, critical [#874](https://github.com/salute-developers/plasma/pull/874) ([@Yakutoc](https://github.com/Yakutoc))
- ci: changed location dirs for storybook builds [#856](https://github.com/salute-developers/plasma/pull/856) ([@Yakutoc](https://github.com/Yakutoc))
- ci(semgrep): delete unnecessary workflow [#871](https://github.com/salute-developers/plasma/pull/871) ([@Yakutoc](https://github.com/Yakutoc))
- ci: clean up by close pull_request_target [no ci] [#844](https://github.com/salute-developers/plasma/pull/844) ([@Yakutoc](https://github.com/Yakutoc))
- ci: watch by "plasma_asdk" package [#857](https://github.com/salute-developers/plasma/pull/857) ([@Yakutoc](https://github.com/Yakutoc))
- ci(theme-builder): handle external pull request [no ci] [#858](https://github.com/salute-developers/plasma/pull/858) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-asdk@0.10.0`, `@salutejs/plasma-b2c@1.250.0`, `@salutejs/plasma-colors@0.12.0`, `@salutejs/plasma-core@1.141.0`, `@salutejs/plasma-hope@1.247.0`, `@salutejs/plasma-icons@1.173.0`, `@salutejs/plasma-new-hope@0.17.0`, `@salutejs/plasma-temple@1.191.0`, `@salutejs/plasma-tokens-b2b@1.31.0`, `@salutejs/plasma-tokens-b2c@0.41.0`, `@salutejs/plasma-tokens-core@0.6.0`, `@salutejs/plasma-tokens-web@1.46.0`, `@salutejs/plasma-tokens@1.66.0`, `@salutejs/plasma-typo@0.40.0`, `@salutejs/plasma-ui@1.223.0`, `@salutejs/plasma-web@1.250.0`, `@salutejs/plasma-cy-utils@0.74.0`, `@salutejs/plasma-sb-utils@0.139.0`, `@salutejs/plasma-tokens-utils@0.35.0`
  - chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-typo@0.40.0`
  - chore(plasma-typo): npm audit fix vulnerabilities [#876](https://github.com/salute-developers/plasma/pull/876) ([@Yakutoc](https://github.com/Yakutoc))
  - chore(plasma-typo): remove react-scripts devDep [#870](https://github.com/salute-developers/plasma/pull/870) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.223.0`
  - chore(plasma-ui): bump "default-browser-id" to 2.0.0 [#875](https://github.com/salute-developers/plasma/pull/875) ([@Yakutoc](https://github.com/Yakutoc))
  - chore(plasma-ui): delete unnecessary dep: "react-scripts" [#868](https://github.com/salute-developers/plasma/pull/868) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-colors@0.12.0`, `@salutejs/plasma-icons@1.173.0`, `@salutejs/plasma-tokens-b2b@1.31.0`, `@salutejs/plasma-tokens-b2c@0.41.0`, `@salutejs/plasma-tokens-core@0.6.0`, `@salutejs/plasma-tokens-web@1.46.0`, `@salutejs/plasma-tokens@1.66.0`, `@salutejs/plasma-typo@0.40.0`, `@salutejs/plasma-tokens-utils@0.35.0`
  - chore: bump TS to 4.2.4 [#869](https://github.com/salute-developers/plasma/pull/869) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-new-hope@0.17.0`
  - fix(plasma-new-hope): import fix [#862](https://github.com/salute-developers/plasma/pull/862) ([@kayman233](https://github.com/kayman233))
  - chore(plasma-new-hope): downgrade "@types/styled-components" to 5.1.0 [#865](https://github.com/salute-developers/plasma/pull/865) ([@Yakutoc](https://github.com/Yakutoc))
  - chore(plasma-new-hope): bump "default-browser-id" to 2.0.0 [#861](https://github.com/salute-developers/plasma/pull/861) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.141.0`
  - chore(plasma-core): bump "@microsoft/api-extractor" to 7.38.3 [#860](https://github.com/salute-developers/plasma/pull/860) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Nov 16 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-asdk@0.6.0`, `@salutejs/plasma-b2c@1.247.0`, `@salutejs/plasma-core@1.140.0`, `@salutejs/plasma-hope@1.245.0`, `@salutejs/plasma-icons@1.172.0`, `@salutejs/plasma-new-hope@0.14.0`, `@salutejs/plasma-temple@1.190.0`, `@salutejs/plasma-tokens-b2b@1.31.0`, `@salutejs/plasma-tokens-b2c@0.40.0`, `@salutejs/plasma-tokens-web@1.46.0`, `@salutejs/plasma-tokens@1.66.0`, `@salutejs/plasma-ui@1.222.0`, `@salutejs/plasma-web@1.247.0`, `@salutejs/plasma-cy-utils@0.73.0`, `@salutejs/plasma-sb-utils@0.138.0`, `@salutejs/plasma-tokens-utils@0.35.0`
  - feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- build: update @salutejs/perftool [#838](https://github.com/salute-developers/plasma/pull/838) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/plasma-asdk@0.5.0`, `@salutejs/plasma-b2c@1.246.0`, `@salutejs/plasma-colors@0.11.0`, `@salutejs/plasma-core@1.139.0`, `@salutejs/plasma-hope@1.244.0`, `@salutejs/plasma-icons@1.171.0`, `@salutejs/plasma-new-hope@0.13.0`, `@salutejs/cra-template-plasma-shop-template@2.5.0`, `@salutejs/plasma-temple@1.189.0`, `@salutejs/plasma-tokens-b2b@1.30.0`, `@salutejs/plasma-tokens-b2c@0.39.0`, `@salutejs/plasma-tokens-core@0.5.0`, `@salutejs/plasma-tokens-web@1.45.0`, `@salutejs/plasma-tokens@1.65.0`, `@salutejs/plasma-typo@0.39.0`, `@salutejs/plasma-ui@1.221.0`, `@salutejs/plasma-web@1.246.0`, `@salutejs/plasma-cy-utils@0.72.0`, `@salutejs/plasma-sb-utils@0.137.0`, `@salutejs/plasma-tokens-utils@0.34.0`
  - Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
- `@salutejs/plasma-b2c@1.246.0`, `@salutejs/plasma-new-hope@0.13.0`, `@salutejs/plasma-web@1.246.0`
  - fix(plasma-web, plasma-b2c): fix NoScroll behavior in ModalBase [#828](https://github.com/salute-developers/plasma/pull/828) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-asdk@0.5.0`, `@salutejs/plasma-b2c@1.246.0`, `@salutejs/plasma-core@1.139.0`, `@salutejs/plasma-hope@1.244.0`, `@salutejs/plasma-web@1.246.0`
  - feat: api report for ts@4.2.4 [#843](https://github.com/salute-developers/plasma/pull/843) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-asdk@0.5.0`
  - feat(plasma-asdk): update storybook readme [#835](https://github.com/salute-developers/plasma/pull/835) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- `@salutejs/plasma-icons@1.171.0`
  - feat(plasma-icons): raisedHand Icon added [#830](https://github.com/salute-developers/plasma/pull/830) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-new-hope@0.13.0`
  - feat(plasma-new-hope): add focus visible dependency [#821](https://github.com/salute-developers/plasma/pull/821) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- ci: revert HAS_PLASMA_WEBSITE flag for build documentation [#847](https://github.com/salute-developers/plasma/pull/847) ([@Yakutoc](https://github.com/Yakutoc))
- ci(perftest): add asdk to scope [#842](https://github.com/salute-developers/plasma/pull/842) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore(website): reformat package.json [#837](https://github.com/salute-developers/plasma/pull/837) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.246.0`
  - docs(web): fix typo [#850](https://github.com/salute-developers/plasma/pull/850) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@1.244.0`
  - chore(hope): fix critical several vulnerability [#846](https://github.com/salute-developers/plasma/pull/846) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-new-hope@0.13.0`
  - chore(new-hope): bump `@linaria` deps [#845](https://github.com/salute-developers/plasma/pull/845) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.246.0`
  - chore(plasma-b2c): migrate to CSF 3 [TextField] [#833](https://github.com/salute-developers/plasma/pull/833) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-temple@1.189.0`
  - chore(plasma-temple): add "@storybook/addon-knobs" [#824](https://github.com/salute-developers/plasma/pull/824) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# (Thu Nov 02 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-native): Add version comment in native tokens for all platfroms [#820](https://github.com/salute-developers/plasma/pull/820) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.240.0`, `@salutejs/plasma-core@1.137.0`, `@salutejs/plasma-hope@1.238.0`, `@salutejs/plasma-icons@1.168.0`, `@salutejs/plasma-new-hope@0.9.0`, `@salutejs/plasma-temple@1.186.0`, `@salutejs/plasma-ui@1.218.0`, `@salutejs/plasma-web@1.240.0`, `@salutejs/plasma-sb-utils@0.135.0`
  - Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
  - feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.240.0`, `@salutejs/plasma-core@1.137.0`, `@salutejs/plasma-hope@1.238.0`, `@salutejs/plasma-new-hope@0.9.0`, `@salutejs/plasma-ui@1.218.0`, `@salutejs/plasma-web@1.240.0`
  - feat(plasma-new-hope): new classes API for Popup [#819](https://github.com/salute-developers/plasma/pull/819) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- fix: Update theme-builder workflows [#818](https://github.com/salute-developers/plasma/pull/818) ([@neretin-trike](https://github.com/neretin-trike))
- ci: add perftest helper actions, use them in PR perftest workflow [#808](https://github.com/salute-developers/plasma/pull/808) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Oct 19 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.237.0`, `@salutejs/plasma-core@1.135.0`, `@salutejs/plasma-hope@1.236.0`, `@salutejs/plasma-new-hope@0.6.0`, `@salutejs/plasma-ui@1.216.0`, `@salutejs/plasma-web@1.237.0`
  - Release 19.10.2023 [#815](https://github.com/salute-developers/plasma/pull/815) ([@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Yakutoc](https://github.com/Yakutoc) nikita.belyanskiy@south.rt.ru [@neretin-trike](https://github.com/neretin-trike))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Oct 06 2023)

### Release Notes

#### fix(plasma-new-hope): cjs build ([#797](https://github.com/salute-developers/plasma/pull/797))

Hotfix: https://github.com/salute-developers/plasma/pull/796

---

#### 🐛 Bug Fix

- `@salutejs/plasma-new-hope@0.5.1`
  - fix(plasma-new-hope): cjs build [#797](https://github.com/salute-developers/plasma/pull/797) ([@Yeti-or](https://github.com/Yeti-or) [@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Oct 06 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.236.1`
  - fix: fix typo [#798](https://github.com/salute-developers/plasma/pull/798) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Fri Sep 29 2023)

#### 🚀 Enhancement

- feat(plasma-docs-ui): Update types for props keys [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Update building tokens for new tokens value [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add methods for support extract colors from palette [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.183.0`, `@salutejs/plasma-ui@1.215.0`
  - Update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-ui@1.215.0`
  - feat(plasma-ui): add labels for time pickers [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): add prop "buttonsDirection" [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@1.235.0`
  - feat(plasma-hope): Remove `Radiobox` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-hope): Remove `Spinner` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-hope): Remove `Link` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): add api report [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): pass ref to "DropdownItem" [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.236.0`
  - feat(plasma-web): Replace `Radiobox` from plasma-new-hope and update snapshots [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): Replace `Checkbox` from plasma-new-hope and update snapshots [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): Replace `Spinner` from plasma-new-hope [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): Replace `Link` from plasma-new-hope [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.236.0`
  - feat(plasma-b2c): Replace `Radiobox` from plasma-new-hope and update snapshots [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Replace `Checkbox` from plasma-new-hope [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Replace `Spinner` from plasma-new-hope [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Replace `Link` from plasma-new-hope [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-new-hope@0.5.0`
  - feat(plasma-new-hope): Add `Radiobox` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Add core `Radiobox` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Add `Checkbox` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Add core `Checkbox` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Add wrapper for layout with default props [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Add `Spinner` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Update `Button` component with new design and tokens themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Add `Link` component with new design and tokens themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Add core `Link` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): Add typing for engines [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-new-hope): 🚀 boostrap && init [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-web@1.236.0`
  - feat(plasma-core): focusTrap, arrow and offset for Popover [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-tokens@1.64.0`
  - feat(plasma-tokens): Replace rgb/a and hexa values to values from color palette [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Replace tokens value in schemes to colors palette [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens-utils@0.33.0`
  - feat(plasma-tokens-utils): Add method for restored themes value from color palette [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- docs: update import deprecated darkSber [#781](https://github.com/salute-developers/plasma/pull/781) ([@azeek21](https://github.com/azeek21))
- ci: enable semgrep workflow [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- ci: exclude private packages for sync package-lock's files [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore: up perftool [#781](https://github.com/salute-developers/plasma/pull/781) ([@akhdrv](https://github.com/akhdrv))
- ci: new endpoint for perftool-send-report [#781](https://github.com/salute-developers/plasma/pull/781) ([@akhdrv](https://github.com/akhdrv))
- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- ci("PR Documentation and Storybook"): delete "HAS_PLASMA_WEBSITE" flag [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore(lint-packages): delete unnecessary check for private packages [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- ci(publish): sync package-lock files state (includes private packages) [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore: fix version for private packages [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- ci(publish): delete unnecessary manual version update [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore: patch for @auto-it/(core,npm) logic [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore: add "patch-package" dep [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore(github): add pull request template [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- ci: fix website main-page in pr [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-temple@1.183.0`, `@salutejs/plasma-ui@1.215.0`
  - Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-web@1.236.0`
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - feat(plasma-b2c,plasma-web): Button size_xs/xss [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-new-hope@0.5.0`, `@salutejs/plasma-web@1.236.0`
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-new-hope@0.5.0`, `@salutejs/plasma-web@1.236.0`
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-icons@1.165.0`, `@salutejs/plasma-new-hope@0.5.0`, `@salutejs/plasma-temple@1.183.0`, `@salutejs/plasma-ui@1.215.0`, `@salutejs/plasma-web@1.236.0`, `@salutejs/plasma-sb-utils@0.132.0`
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-new-hope@0.5.0`
  - fix(plasma-new-hope): Update hover and active colors for tertiary and paragraph tokens in themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-new-hope@0.5.0`
  - feat(plasma-new-hope,plasma-core): Add core `Spinner` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-icons@1.165.0`, `@salutejs/plasma-temple@1.183.0`, `@salutejs/plasma-ui@1.215.0`, `@salutejs/plasma-web@1.236.0`, `@salutejs/plasma-sb-utils@0.132.0`
  - fix: Bump package-lock versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
  - Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - chore: update version [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-web@1.236.0`
  - fix(plasma-core): PopupBase refactoring [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-core): Popover refactoring [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-web@1.236.0`
  - feat(plasma-web, plasma-b2c): PopupBase component [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-hope@1.235.0`
  - fix(plasma-hope): move focusTrap to plasma-core [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-web@1.236.0`
  - feat(plasma-web, plasma-b2c): Popover component [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-icons@1.165.0`, `@salutejs/plasma-temple@1.183.0`, `@salutejs/plasma-tokens-b2b@1.29.0`, `@salutejs/plasma-tokens-b2c@0.38.0`, `@salutejs/plasma-tokens-web@1.44.0`, `@salutejs/plasma-tokens@1.64.0`, `@salutejs/plasma-ui@1.215.0`, `@salutejs/plasma-web@1.236.0`, `@salutejs/plasma-cy-utils@0.71.0`, `@salutejs/plasma-sb-utils@0.132.0`, `@salutejs/plasma-tokens-utils@0.33.0`
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-tokens@1.64.0`, `@salutejs/plasma-tokens-utils@0.33.0`
  - feat(plasma-tokens,plasma-token-native): Change legacy token value to css-variables [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.236.0`, `@salutejs/plasma-core@1.134.0`, `@salutejs/plasma-hope@1.235.0`, `@salutejs/plasma-icons@1.165.0`, `@salutejs/plasma-temple@1.183.0`, `@salutejs/plasma-tokens-web@1.44.0`, `@salutejs/plasma-ui@1.215.0`, `@salutejs/plasma-web@1.236.0`, `@salutejs/plasma-sb-utils@0.132.0`, `@salutejs/plasma-tokens-utils@0.33.0`
  - chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-core@1.134.0`
  - fix(plasma-ui,plasma-web,plasma-b2c): Button Spinner checked color [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Abdulaziz Askaraliev ([@azeek21](https://github.com/azeek21))
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Sep 14 2023)

#### 🚀 Enhancement

- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- feat: Update plasma theme-builder workflow [#699](https://github.com/salute-developers/plasma/pull/699) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.63.0`, `@salutejs/plasma-tokens-utils@0.32.0`
  - feat(plasma-tokens): Add generate css files with typo tokens [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
  - feat(plasma-tokens): Add generate css files with color tokens [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
  - feat(plasma-tokens-utils): Add kebab case for css vars in web themes [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
- `@salutejs/plasma-typo@0.38.0`
  - feat(plasma-typo): Add extract typo objects and types [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
- `@salutejs/plasma-tokens@1.63.0`
  - feat(plasma-tokens): Update css vars in web themes from `src` directory [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
- `@salutejs/plasma-ui@1.209.0`
  - feat(plasma-ui): processing new line for title, subtitle [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-theme-builder): Fix edit not default tokens in custom groups and routers [#699](https://github.com/salute-developers/plasma/pull/699) ([@neretin-trike](https://github.com/neretin-trike))
- chore(auto): fix upload-assets plugin order [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- ci("Main Documentation and Storybook"): checkout to "master" branch [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-web-docs): add path to "plasma-hope" for parse [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-web-docs): use "NODE_OPTIONS=--openssl-legacy-provider" [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- ci: fix perftest metrics sending [#699](https://github.com/salute-developers/plasma/pull/699) ([@akhdrv](https://github.com/akhdrv))
- ci: use exact version [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-website): use exact version [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-utils): use exact version [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- ci(lint): disable flag `--since` [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-utils): update version [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-website): update version [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- ci(publish-rc): manualy install deps for private packages [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.227.0`, `@salutejs/plasma-core@1.130.0`, `@salutejs/plasma-hope@1.227.0`, `@salutejs/plasma-icons@1.161.0`, `@salutejs/plasma-temple@1.177.0`, `@salutejs/plasma-tokens-b2b@1.28.0`, `@salutejs/plasma-tokens-b2c@0.37.0`, `@salutejs/plasma-tokens-web@1.43.0`, `@salutejs/plasma-tokens@1.63.0`, `@salutejs/plasma-typo@0.38.0`, `@salutejs/plasma-ui@1.209.0`, `@salutejs/plasma-web@1.227.0`, `@salutejs/plasma-cy-utils@0.70.0`, `@salutejs/plasma-sb-utils@0.128.0`, `@salutejs/plasma-tokens-utils@0.32.0`
  - chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-b2c@1.227.0`, `@salutejs/plasma-core@1.130.0`, `@salutejs/plasma-hope@1.227.0`, `@salutejs/plasma-icons@1.161.0`, `@salutejs/plasma-temple@1.177.0`, `@salutejs/plasma-tokens@1.63.0`, `@salutejs/plasma-ui@1.209.0`, `@salutejs/plasma-web@1.227.0`, `@salutejs/plasma-cy-utils@0.70.0`, `@salutejs/plasma-sb-utils@0.128.0`
  - chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-tokens@1.63.0`
  - fix(plasma-tokens): Update gradient tokens in `stylesSalute` scheme for ios and android platforms [#699](https://github.com/salute-developers/plasma/pull/699) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.177.0`, `@salutejs/plasma-ui@1.209.0`
  - chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-b2c@1.227.0`, `@salutejs/plasma-hope@1.227.0`, `@salutejs/plasma-web@1.227.0`
  - chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-hope@1.227.0`, `@salutejs/plasma-web@1.227.0`
  - fix(plasma-web): fix padding-left without/with content-{left,right} [TextField] [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- Neretin Artem (neretinartem@Neretins-MBP.netis)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Sep 04 2023)

#### 🚀 Enhancement

- Update package-locks [Private packages] [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-theme-builder): Add `backward` button for each page [#681](https://github.com/salute-developers/plasma/pull/681) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Enhance theme saving logic [#681](https://github.com/salute-developers/plasma/pull/681) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-theme-builder): Add link for continue edit [#681](https://github.com/salute-developers/plasma/pull/681) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-theme-builder): Replace sessionStorage using to localStorage [#681](https://github.com/salute-developers/plasma/pull/681) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-theme-builder): Add auto generate tokens set and theme for web [#681](https://github.com/salute-developers/plasma/pull/681) (neretinartem@Neretins-MacBook-Pro.local)
- feat: Add lerna install with scope in theme-builder workflow [#681](https://github.com/salute-developers/plasma/pull/681) (neretinartem@Neretins-MacBook-Pro.local)
- `@salutejs/plasma-icons@1.159.0`
  - feat(plasma-icons): add MessageChatFill [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-icons): add CameraVideoFill [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-icons): add SberSpasibo [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-utils@0.31.0`
  - feat(plasma-tokens-utils): Update API: extract getThemeTokenDataGroups to index [#681](https://github.com/salute-developers/plasma/pull/681) (neretinartem@Neretins-MacBook-Pro.local)

#### 🐛 Bug Fix

- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-theme-builder): Fix for adding group with default tokens [#681](https://github.com/salute-developers/plasma/pull/681) (neretinartem@Neretins-MacBook-Pro.local)
- ci(unit-tests): use `--since` [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(eslint): ignore "plasma-{website,temple}" [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci(lint): use `--since` [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update eslint rules [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: add "@salutejs/eslint-config" [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(lint-packages): exclude packages with private deps [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-website): update version [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci("publish-rc"): delete scope "temple-docs,ui-docs,web-docs" [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci("publish-rc"): update dependencies versions in private packages by dev tag [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci("PR Documentation and Storybook"): add "plasma-tokens" as dep [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-website): add "install:dev" npm script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-utils): add "install:dev" npm script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: apply "includePrerelease" for semver.satisfies [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(lerna): disable npmClientArgs "--prefer-offline" [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci(publish-canary): enable full bootstrap [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: fix perftool cache sync [#681](https://github.com/salute-developers/plasma/pull/681) ([@akhdrv](https://github.com/akhdrv))
- ci: add steps for lint [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(eslint): update ignore list [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: avoid eslint errors [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(actions): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(website): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: run eslint by lerna [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: disable "codecov/codecov-action@v2" [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: disable code cove [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: pass secret GitHub token [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: pass GitHub token to action by env [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: enable bootstrap flag `--since` [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: pass GitHub token to action [Publish] [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: return "tsc -p auto-plugins/tsconfig.json" for release script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: enable schema for lerna.json [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: rename workflow running by merge queue [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete old release workflow file [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add publish-latest/release workflow [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add publish-rc workflow [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add publish-canary workflow [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add publish-common.yml [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.225.0`, `@salutejs/plasma-colors@0.10.0`, `@salutejs/plasma-core@1.128.0`, `@salutejs/plasma-hope@1.225.0`, `@salutejs/plasma-icons@1.159.0`, `@salutejs/plasma-temple@1.174.0`, `@salutejs/plasma-tokens-b2b@1.27.0`, `@salutejs/plasma-tokens-b2c@0.36.0`, `@salutejs/plasma-tokens-web@1.42.0`, `@salutejs/plasma-tokens@1.61.0`, `@salutejs/plasma-ui@1.206.0`, `@salutejs/plasma-web@1.225.0`, `@salutejs/plasma-cy-utils@0.68.0`, `@salutejs/plasma-sb-utils@0.126.0`
  - chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-colors@0.10.0`
  - chore(plasma-colors): lint entire src dir [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-temple@1.174.0`
  - chore: delete unnecessary plasma-temple eslint config [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
  - chore(plasma-temple): disabled eslint rules: require-default-props, no-unused-prop-types [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.225.0`, `@salutejs/plasma-hope@1.225.0`, `@salutejs/plasma-icons@1.159.0`, `@salutejs/plasma-temple@1.174.0`, `@salutejs/plasma-ui@1.206.0`, `@salutejs/plasma-web@1.225.0`
  - chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-icons@1.159.0`
  - docs(plasma-icons): add part "How to add new icon" [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.225.0`, `@salutejs/plasma-colors@0.10.0`, `@salutejs/plasma-core@1.128.0`, `@salutejs/plasma-hope@1.225.0`, `@salutejs/plasma-icons@1.159.0`, `@salutejs/cra-template-plasma-shop-template@2.4.0`, `@salutejs/plasma-temple@1.174.0`, `@salutejs/plasma-tokens-b2b@1.27.0`, `@salutejs/plasma-tokens-b2c@0.36.0`, `@salutejs/plasma-tokens-core@0.4.0`, `@salutejs/plasma-tokens-web@1.42.0`, `@salutejs/plasma-tokens@1.61.0`, `@salutejs/plasma-typo@0.37.0`, `@salutejs/plasma-ui@1.206.0`, `@salutejs/plasma-web@1.225.0`, `@salutejs/plasma-cy-utils@0.68.0`, `@salutejs/plasma-sb-utils@0.126.0`, `@salutejs/plasma-tokens-utils@0.31.0`
  - chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
  - Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- `@salutejs/plasma-tokens@1.61.0`
  - chore(plasma-tokens): replace "error" to "warn" for eslint rules: prefer-template, import/order [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.225.0`, `@salutejs/plasma-colors@0.10.0`, `@salutejs/plasma-core@1.128.0`, `@salutejs/plasma-hope@1.225.0`, `@salutejs/plasma-icons@1.159.0`, `@salutejs/cra-template-plasma-shop-template@2.4.0`, `@salutejs/plasma-temple@1.174.0`, `@salutejs/plasma-tokens-b2b@1.27.0`, `@salutejs/plasma-tokens-b2c@0.36.0`, `@salutejs/plasma-tokens-core@0.4.0`, `@salutejs/plasma-tokens-web@1.42.0`, `@salutejs/plasma-tokens@1.61.0`, `@salutejs/plasma-typo@0.37.0`, `@salutejs/plasma-ui@1.206.0`, `@salutejs/plasma-web@1.225.0`
  - chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-cy-utils@0.68.0`, `@salutejs/plasma-sb-utils@0.126.0`, `@salutejs/plasma-tokens-utils@0.31.0`
  - chore(utils): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 5

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Aug 18 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-native): Remove deprecated colors tokens from ReactNative [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Update theme kind items [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Actualized generate tokens set [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Update theme kind items with react-native in border-radius [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.126.0`
  - fix(plasma-core): Add requestAnimationFrame for useResizeObserver hook [#660](https://github.com/salute-developers/plasma/pull/660) (neretinartem@Neretins-MacBook-Pro.local)
- `@salutejs/plasma-ui@1.202.0`
  - feat(plasma-ui): add prop "extraContent" [Confirm] [#660](https://github.com/salute-developers/plasma/pull/660) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-tokens-utils@0.30.0`
  - feat(plasma-tokens-native): Add generate `spacing` tokens for react-native [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(palsma-tokens-*): Add borderRadius tokens generate for react-native and refactor config.ts [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.59.0`
  - feat(plasma-tokens): Update `src` directories with `spacing` tokens in sbermarket themes [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Add `spacing` tokens to sbermarket schemes [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: disable codecove [#660](https://github.com/salute-developers/plasma/pull/660) ([@Yakutoc](https://github.com/Yakutoc))
- ci: fix perftest workflow [#660](https://github.com/salute-developers/plasma/pull/660) ([@akhdrv](https://github.com/akhdrv))
- test: perftest partial run [#660](https://github.com/salute-developers/plasma/pull/660) ([@akhdrv](https://github.com/akhdrv))
- chore: use NODE_OPTIONS=--openssl-legacy-provider [#660](https://github.com/salute-developers/plasma/pull/660) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.202.0`
  - fix(plasma-ui): Update behavior scroll in `Sheet` component [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.59.0`, `@salutejs/plasma-tokens-utils@0.30.0`
  - feat(plasma-tokens,plasma-tokens-utils): Add generate `spacing` tokens for web [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens,plasma-tokens-utils): Update `default` theme with actualized tokens [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.59.0`
  - fix(plasma-tokens): Update `src` directory for `sbermarket` themes [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(palsma-tokens): Update values in border-radius tokesn for `sbermarket` schemes [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Aug 03 2023)

### Release Notes

#### ci: enable full "lerna bootstrap" [Unit tests] ([#639](https://github.com/salute-developers/plasma/pull/639))

Убрали флаг `--since` для **Unit tests**.

#### ci: split lint and unit tests to different jobs ([#631](https://github.com/salute-developers/plasma/pull/631))

Разделили первичные и важные проверки, такие как Lint и Unit tests,  в рамках одного workflow на две разные jobs

---

#### 🚀 Enhancement

- feat: Add global threshold to all cypress configs [#630](https://github.com/salute-developers/plasma/pull/630) ([@neretin-trike](https://github.com/neretin-trike))
- feat: Add condition for `plasma-tokens-utils` in documentation-pr workflow [#632](https://github.com/salute-developers/plasma/pull/632) ([@neretin-trike](https://github.com/neretin-trike))
- feat: Add tokens-utils and tokens-native packages for cypres-common [#624](https://github.com/salute-developers/plasma/pull/624) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Update `color` generator template for `iOS` [#626](https://github.com/salute-developers/plasma/pull/626) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens): Add support multiple color in gradient for XML and SWIFT themes [#626](https://github.com/salute-developers/plasma/pull/626) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add support multiple color in gradient [#626](https://github.com/salute-developers/plasma/pull/626) ([@neretin-trike](https://github.com/neretin-trike))
- feat(pasma-theme-builder): Add save and load draft themes [#612](https://github.com/salute-developers/plasma/pull/612) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add disabling remove and rename default tokens [#618](https://github.com/salute-developers/plasma/pull/618) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.58.0`
  - feat(plasma-tokens): Add `default` theme and tokens generation [#636](https://github.com/salute-developers/plasma/pull/636) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Update `src` directory [#638](https://github.com/salute-developers/plasma/pull/638) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Add `plasma-web` scheme [#638](https://github.com/salute-developers/plasma/pull/638) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Update `src` directory and rename `asdk` -> `stylesSalute` [#625](https://github.com/salute-developers/plasma/pull/625) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Add `stylesSalute` and remove `asdk` scheme [#625](https://github.com/salute-developers/plasma/pull/625) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Udpate `src` directory for new shadow tokens [#624](https://github.com/salute-developers/plasma/pull/624) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Udpate some JSON schemes for new shadow format [#624](https://github.com/salute-developers/plasma/pull/624) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Update `src` directory for `plasma_b2c` theme [#617](https://github.com/salute-developers/plasma/pull/617) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.220.0`, `@salutejs/plasma-hope@1.220.0`, `@salutejs/plasma-web@1.220.0`
  - feat(plasma-b2c, plasma-web): Modal refinement [#629](https://github.com/salute-developers/plasma/pull/629) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-hope@1.220.0`
  - feat(plasma-hope): useFocusTrap focusAfterNode added [#629](https://github.com/salute-developers/plasma/pull/629) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-temple@1.169.0`
  - feat(plasma-temple): Add some threshold fallbacks [#630](https://github.com/salute-developers/plasma/pull/630) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.201.0`
  - feat(plasma-ui): Add some threshold fallbacks [#630](https://github.com/salute-developers/plasma/pull/630) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.58.0`, `@salutejs/plasma-tokens-utils@0.29.0`
  - feat(plasma-tokens-native): Update `react-native` generator for `shadow` tokens [#624](https://github.com/salute-developers/plasma/pull/624) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens-utils@0.29.0`
  - feat(plasma-tokens-utils): Add exclude `enabled=false` tokens from generated themes [#617](https://github.com/salute-developers/plasma/pull/617) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- ci: enable full "lerna bootstrap" [Unit tests] [#639](https://github.com/salute-developers/plasma/pull/639) ([@Yakutoc](https://github.com/Yakutoc))
- ci: split lint and unit tests to different jobs [#631](https://github.com/salute-developers/plasma/pull/631) ([@Yakutoc](https://github.com/Yakutoc))
- docs: styled-components v6 not supported [#628](https://github.com/salute-developers/plasma/pull/628) ([@kayman233](https://github.com/kayman233))
- fix(plasma-theme-builder): Fix some issues [#618](https://github.com/salute-developers/plasma/pull/618) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-theme-builder): Fix avoid open-ssl [#623](https://github.com/salute-developers/plasma/pull/623) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-theme-builder): Fix avoid open-ssl [#622](https://github.com/salute-developers/plasma/pull/622) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.220.0`, `@salutejs/plasma-hope@1.220.0`, `@salutejs/plasma-web@1.220.0`
  - fix(plasma-web, plasma-b2c): Tooltip update on text change [#637](https://github.com/salute-developers/plasma/pull/637) ([@kayman233](https://github.com/kayman233))
  - feat(plasma-b2c, plasma-web): autoResize for TextArea [#614](https://github.com/salute-developers/plasma/pull/614) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-hope@1.220.0`
  - chore: delete "test" comment [#639](https://github.com/salute-developers/plasma/pull/639) ([@Yakutoc](https://github.com/Yakutoc))
  - ci: test [#631](https://github.com/salute-developers/plasma/pull/631) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-hope): Fix overlay content with contentRight in `TextArea` [#621](https://github.com/salute-developers/plasma/pull/621) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@1.220.0`, `@salutejs/plasma-web@1.220.0`
  - feat(plasma-hope, plasma-web): Add some threshold fallbacks [#630](https://github.com/salute-developers/plasma/pull/630) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.201.0`
  - fix(plasma-ui): Fix hide behavior in `Sheet` component on slow scroll [#635](https://github.com/salute-developers/plasma/pull/635) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-ui): fix scroll TimePicker on android [#619](https://github.com/salute-developers/plasma/pull/619) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-typo@0.36.0`
  - fix(plasma-web, plasma-b2c): h5 font-size fix [#633](https://github.com/salute-developers/plasma/pull/633) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-core@1.125.0`
  - test(plasma-core): Update test and snapshots for `contentRight` [#621](https://github.com/salute-developers/plasma/pull/621) ([@neretin-trike](https://github.com/neretin-trike))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-b2c@1.220.0`, `@salutejs/plasma-core@1.125.0`, `@salutejs/plasma-hope@1.220.0`, `@salutejs/plasma-temple@1.169.0`, `@salutejs/plasma-tokens@1.58.0`, `@salutejs/plasma-typo@0.36.0`, `@salutejs/plasma-ui@1.201.0`, `@salutejs/plasma-web@1.220.0`, `@salutejs/plasma-tokens-utils@0.29.0`
  - Merge branch 'dev' ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Jul 14 2023)

#### 🐛 Bug Fix

- fix(plasma-theme-builder): Fix avoid open-ssl [#622](https://github.com/salute-developers/plasma/pull/622) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jul 13 2023)

#### 🚀 Enhancement

- ci: fix pr docs [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
- feat: Add new options for `upload-assets` plugin for compact and grouped view [#620](https://github.com/salute-developers/plasma/pull/620) ([@neretin-trike](https://github.com/neretin-trike))
- feat: Add custom plugin `upload-assets-extends` [#620](https://github.com/salute-developers/plasma/pull/620) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add favicon [#620](https://github.com/salute-developers/plasma/pull/620) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.124.0`, `@salutejs/plasma-hope@1.219.0`, `@salutejs/plasma-ui@1.200.0`
  - feat(plasma-core): custom width/height for TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- ci: run lerna boostrap with ignore plasma-tokens [Lint] [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci: extend computed scope logic [PR Documentation and Storybook] [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci: rework computed scope logic [Typescript coverage] [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-theme-builder): Remove auto theme changes [#620](https://github.com/salute-developers/plasma/pull/620) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-theme-builder): Fix platform name on `Main` page [#620](https://github.com/salute-developers/plasma/pull/620) ([@neretin-trike](https://github.com/neretin-trike))
- docs: rewrite paragraph about "Node, npm versions" [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci(documentation): use "--openssl-legacy-provider" flag [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci(theme-builder): use "--openssl-legacy-provider" flag [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- chore: use Node.js/NPM LTS version [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- chore: add "@kayman233" as owner [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add flag "with-artifacts" [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci: refactoring cypress workflow [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add cypress component testing by schedule [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete "change-detection" logic for Perftest by base branch [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci: refactoring change-detection [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- ci: "PR Documentation and Storybook" with --scope [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.200.0`
  - fix(plasma-ui): Fix scrollable behavior for `Sheet` component [#620](https://github.com/salute-developers/plasma/pull/620) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.219.0`, `@salutejs/plasma-temple@1.168.0`, `@salutejs/plasma-ui@1.200.0`, `@salutejs/plasma-web@1.219.0`
  - chore(storybook): avoid OpenSSL v3.0 breaking changes [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.124.0`, `@salutejs/plasma-hope@1.219.0`, `@salutejs/plasma-ui@1.200.0`
  - fix(plasma-core): new height/width types in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-b2c@1.219.0`, `@salutejs/plasma-core@1.124.0`, `@salutejs/plasma-hope@1.219.0`, `@salutejs/plasma-ui@1.200.0`, `@salutejs/plasma-web@1.219.0`
  - fix(plasma-core): fix cols/rows usage in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jun 29 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add complex gradient editor for android and ios platforms [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add switch color theme by system config [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Remove local font `SBSansTextMono` and set it for global style [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Bump to React 18 and add missing types [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Redesign main page [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat: Add branch name to link in theme-builder-pr workflow [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add edit theme if PR existed [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add read theme files from branch [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat: Add bootstrap ignore for plasmsa-tokens packages in `typescript-coverage` worflow [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens-native): Add generate complex gradient for Android [#582](https://github.com/salute-developers/plasma/pull/582) (neretinartem@Neretins-MacBook-Pro.local)
- `@salutejs/plasma-tokens@1.57.0`
  - feat(plasma-tokens): Remove `salutejs_brand` theme [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Update `src` directory for `plasma_b2c` theme [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Add theme plasmab2sstyles [#582](https://github.com/salute-developers/plasma/pull/582) ([@Irinkv](https://github.com/Irinkv))
  - feat(plasma-tokens): Update `src` directory [#582](https://github.com/salute-developers/plasma/pull/582) (neretinartem@Neretins-MacBook-Pro.local)
  - feat(plasma-tokens): Update `asdk` theme with xml [#582](https://github.com/salute-developers/plasma/pull/582) (neretinartem@Neretins-MacBook-Pro.local)

#### 🐛 Bug Fix

- refactor(plasma-theme-builder): Clean up types and utils for builder and service [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-website): Fix margin for footer [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- chore: add "@auto-it/released" plugin [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- fix: Add ingore in workflow for typescript-coverage step [#582](https://github.com/salute-developers/plasma/pull/582) ([@neretin-trike](https://github.com/neretin-trike))
- ci: "Cypress" lerna bootstrap with --scope [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- ci: "Theme Builder" delete unnecessary "Prepare repository" step [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- ci: "Lint, Unit test" lerna bootstrap with --since [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- ci: "Performance Testing" lerna bootstrap with --scope [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- ci: "Typescript Coverage" lerna bootstrap with --since [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- ci: use change detection state [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- ci: change detection use exclude-dependents flag [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- ci: change detection as js script [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yakutoc](https://github.com/Yakutoc))
- docs: useFocus hook docs [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- ci: fix scopes for boostrap react17 unit tests [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- ci: fix release action [#570](https://github.com/salute-developers/plasma/pull/570) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.218.0`, `@salutejs/cra-template-plasma-basic-template@2.4.0`, `@salutejs/plasma-colors@0.8.0`, `@salutejs/plasma-core@1.123.0`, `@salutejs/plasma-hope@1.218.0`, `@salutejs/plasma-icons@1.152.0`, `@salutejs/cra-template-plasma-shop-template@2.3.0`, `@salutejs/plasma-temple@1.167.0`, `@salutejs/plasma-tokens-b2b@1.23.0`, `@salutejs/plasma-tokens-b2c@0.32.0`, `@salutejs/plasma-tokens-core@0.3.0`, `@salutejs/plasma-tokens-web@1.38.0`, `@salutejs/plasma-tokens@1.57.0`, `@salutejs/plasma-typo@0.35.0`, `@salutejs/plasma-ui@1.199.0`, `@salutejs/plasma-web@1.218.0`, `@salutejs/plasma-cy-utils@0.64.0`, `@salutejs/plasma-sb-utils@0.121.0`, `@salutejs/plasma-tokens-utils@0.28.0`
  - chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.218.0`, `@salutejs/plasma-hope@1.218.0`, `@salutejs/plasma-web@1.218.0`
  - fix(plasma-hope): update useFocusTrap [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-hope): refactor useFocusTrap [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
  - feat(plasma-b2c, plasma-web): focusTrap hook added [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-web@1.218.0`
  - test: tests for focusTrap [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))

#### Authors: 6

- [@Irinkv](https://github.com/Irinkv)
- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Jun 20 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-native): Add generate complex gradient for iOS [#548](https://github.com/salute-developers/plasma/pull/548) (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens@1.56.0`
  - feat(plasma-tokens): Update `src` directory with new tokens [#518](https://github.com/salute-developers/plasma/pull/518) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Add theme ASDK [#559](https://github.com/salute-developers/plasma/pull/559) ([@AleksandraIushkova](https://github.com/AleksandraIushkova))

#### 🐛 Bug Fix

- fix: version docs as part of release ([@Yeti-or](https://github.com/Yeti-or))
- fix: release workflow ([@Yeti-or](https://github.com/Yeti-or))
- chore: add comment why can't use parallel run performance testing [#549](https://github.com/salute-developers/plasma/pull/549) ([@Yakutoc](https://github.com/Yakutoc))
- ci: refactoring performance test workflow [#559](https://github.com/salute-developers/plasma/pull/559) ([@Yakutoc](https://github.com/Yakutoc))
- ci: use "prepare-environment" action [#559](https://github.com/salute-developers/plasma/pull/559) ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete old version cypress workflows [#559](https://github.com/salute-developers/plasma/pull/559) ([@Yakutoc](https://github.com/Yakutoc))
- ci: create reusable workflow for cypress test [#559](https://github.com/salute-developers/plasma/pull/559) ([@Yakutoc](https://github.com/Yakutoc))
- ci: add cache for perftool tasks [#555](https://github.com/salute-developers/plasma/pull/555) ([@akhdrv](https://github.com/akhdrv))
- chore: delete examples packages [#559](https://github.com/salute-developers/plasma/pull/559) ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete unnecessary examples workflows [#559](https://github.com/salute-developers/plasma/pull/559) ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete workflow for react 17 [#544](https://github.com/salute-developers/plasma/pull/544) ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete unnecessary unit test/lint workflow [#559](https://github.com/salute-developers/plasma/pull/559) ([@Yakutoc](https://github.com/Yakutoc))
- ci: extend unit test/lint workflow [#559](https://github.com/salute-developers/plasma/pull/559) ([@Yakutoc](https://github.com/Yakutoc))
- ci: disable rebase for renovate [#550](https://github.com/salute-developers/plasma/pull/550) ([@Yeti-or](https://github.com/Yeti-or))
- ci: add cache for perftool tasks [#519](https://github.com/salute-developers/plasma/pull/519) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/plasma-core@1.122.0`, `@salutejs/plasma-hope@1.217.0`
  - fix(plasma-core): Add promise resolve for forceUpdate method in `Popup` and `Tooltip` components [#554](https://github.com/salute-developers/plasma/pull/554) (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens@1.56.0`
  - docs: delete unnecessary mention in readme files [#543](https://github.com/salute-developers/plasma/pull/543) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@AleksandraIushkova](https://github.com/AleksandraIushkova)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- Neretin Artem (neretinartem@Neretins-MBP.netis)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Jun 01 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Remove `baseColors` group [#526](https://github.com/salute-developers/plasma/pull/526) (neretinartem@Neretins-MBP.netis)
- feat(plasma-theme-builder): Add selectors from color palette for token value [#526](https://github.com/salute-developers/plasma/pull/526) (neretinartem@Neretins-MBP.netis)
- feat(plasma-theme-builder): Change directory for hooks [#526](https://github.com/salute-developers/plasma/pull/526) (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-b2c@1.216.0`, `@salutejs/plasma-web@1.216.0`
  - chore: add api report [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- ci: [Cypress] used @types/react, @types/react-dom [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- ci: [Unit-tests] used @types/react, @types/react-dom [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- ci: fix mq jobs [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yeti-or](https://github.com/Yeti-or))
- ci: cleanup caches by a closed PR [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- ci: improve ci [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- ci: fix git hook for api-report [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yeti-or](https://github.com/Yeti-or))
- ci: update auto => 10.36.6 [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yeti-or](https://github.com/Yeti-or))
- docs: release flow [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yeti-or](https://github.com/Yeti-or))
- ci: remove plasma-cy-utils from root [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yeti-or](https://github.com/Yeti-or))
- docs: delete paragraph about npm v6.14.17 [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: [actions] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: [examples] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: [website] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: add .npmrc for theme-builder [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: [root] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- ci: delete using npm@6.14.17 [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: set package engines npm property to ^8.19.0 || 6.14.17 [#522](https://github.com/salute-developers/plasma/pull/522) ([@Yakutoc](https://github.com/Yakutoc))
- ci: prepare actions for dev branch [#521](https://github.com/salute-developers/plasma/pull/521) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.216.0`, `@salutejs/plasma-temple@1.165.0`, `@salutejs/plasma-ui@1.197.0`, `@salutejs/plasma-web@1.216.0`
  - chore: use "paths" property in tsconfig.json [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.121.0`, `@salutejs/plasma-hope@1.216.0`
  - fix(deps): update dependency react-popper to v2.3.0 [#526](https://github.com/salute-developers/plasma/pull/526) ([@renovate[bot]](https://github.com/renovate[bot]))
- `@salutejs/plasma-core@1.121.0`
  - test: resolve cy-utils [#526](https://github.com/salute-developers/plasma/pull/526) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-hope@1.216.0`
  - fix(plasma-b2c): remove local typography values in TextArea [#526](https://github.com/salute-developers/plasma/pull/526) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-typo@0.34.0`
  - fix(plasma-b2c, plasma-web): fix letter-spacing value in Body, Text [#526](https://github.com/salute-developers/plasma/pull/526) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-cy-utils@0.62.0`, `@salutejs/plasma-sb-utils@0.119.0`, `@salutejs/plasma-tokens-utils@0.27.0`
  - chore: [utils] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.216.0`, `@salutejs/cra-template-plasma-basic-template@2.4.0`, `@salutejs/plasma-colors@0.8.0`, `@salutejs/plasma-core@1.121.0`, `@salutejs/plasma-hope@1.216.0`, `@salutejs/plasma-icons@1.150.0`, `@salutejs/cra-template-plasma-shop-template@2.3.0`, `@salutejs/plasma-temple@1.165.0`, `@salutejs/plasma-tokens-b2b@1.22.0`, `@salutejs/plasma-tokens-b2c@0.31.0`, `@salutejs/plasma-tokens-core@0.3.0`, `@salutejs/plasma-tokens-web@1.37.0`, `@salutejs/plasma-tokens@1.55.0`, `@salutejs/plasma-typo@0.34.0`, `@salutejs/plasma-ui@1.197.0`, `@salutejs/plasma-web@1.216.0`
  - chore: [packages] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.216.0`
  - test(plasma-web): add more performance tests, exclude perftests from tsconfig & type coverage [#472](https://github.com/salute-developers/plasma/pull/472) ([@Troff8](https://github.com/Troff8))

#### ⚠️ Pushed to `master`

- test: update perftool, update perftool config ([@akhdrv](https://github.com/akhdrv))
- ci: fix workflow run when new tests are added ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/plasma-ui@1.197.0`
  - test(plasma-ui): add more performance tests, exclude perftests from tsconfig & type coverage ([@Troff8](https://github.com/Troff8))
- `@salutejs/plasma-b2c@1.216.0`
  - test(plasma-b2c): add more performance tests, exclude perftests from tsconfig & type coverage ([@Troff8](https://github.com/Troff8))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@renovate[bot]](https://github.com/renovate[bot])
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Neretin Artem (neretinartem@Neretins-MBP.netis)
- Troff ([@Troff8](https://github.com/Troff8))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon May 22 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.120.0`
  - feat: change api-report for Basebox [#511](https://github.com/salute-developers/plasma/pull/511) ([@kayman233](https://github.com/kayman233))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-b2c@1.215.0`, `@salutejs/plasma-core@1.120.0`, `@salutejs/plasma-hope@1.215.0`, `@salutejs/plasma-ui@1.196.0`, `@salutejs/plasma-web@1.215.0`
  - fix(plasma-web, plasma-b2c, plasma-ui): fix single/multiple lines in Checkbox/Radiobox ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Mon May 22 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.54.0`
  - feat(plasma-tokens): Update `src` directory with new tokens [#514](https://github.com/salute-developers/plasma/pull/514) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Add border-radius tokens to schemes (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens@1.54.0`, `@salutejs/plasma-tokens-utils@0.26.0`
  - feat(plasma-tokens): Add methods for generate border-radius tokens (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Rename file and methods for more symmantics (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.54.0`
  - fix(plasma-tokens): Fix some measure for shadows tokens (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Fri May 19 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-sb-utils@0.116.0`
  - fix(plasma-sb-utils): Add new saturate for `PaletteGrid` component [#509](https://github.com/salute-developers/plasma/pull/509) (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens-b2b@1.20.0`, `@salutejs/plasma-tokens-b2c@0.29.0`, `@salutejs/plasma-tokens-web@1.35.0`, `@salutejs/plasma-tokens@1.53.0`
  - feat(plasma-tokens-*): Add override colors for fallback (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-colors@0.7.0`
  - feat(plasma-colors): Update colors palette (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Fri May 19 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.52.0`
  - feat(plasma-tokens): Update `src` directory with new tokens [#513](https://github.com/salute-developers/plasma/pull/513) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Add theme SBOL ([@gibushnev](https://github.com/gibushnev))

#### Authors: 2

- [@gibushnev](https://github.com/gibushnev)
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Thu May 18 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-native): Update generation native shemes [#496](https://github.com/salute-developers/plasma/pull/496) (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens@1.51.0`
  - feat(plasma-tokens): Remove generate value files from createBrands (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Update `src` directory with robo comment in typography files (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Update `src` directory with new shadow tokens (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Add shadow tokens to new schemas (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- chore: add significant changes to perftool report [#486](https://github.com/salute-developers/plasma/pull/486) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-tokens-utils@0.25.0`
  - refactor(plasma-tokens-utils): Small refactor and remove unused code (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens@1.51.0`, `@salutejs/plasma-tokens-utils@0.25.0`
  - feat(plasma-tokens, plasma-tokens-utils): Add generete token set and themes for new schemas (neretinartem@Neretins-MBP.netis)

#### Authors: 2

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Wed May 17 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.191.1`
  - fix(plasma-ui): omit 'onResize', 'onResizeCapture', 'nonce' properties for ActionButtonProps [#506](https://github.com/salute-developers/plasma/pull/506) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Tue May 16 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-native): Add generate native tokens and thems in new package [#494](https://github.com/salute-developers/plasma/pull/494) (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens@1.50.0`
  - feat(plasma-tokens): Remove source generation methods (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Remove native themes generator (neretinartem@Neretins-MBP.netis)

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-tokens-utils@0.24.0`
  - feat(plasma-tokens-utils, plasma-tokens): Extract generation methods to utility library (neretinartem@Neretins-MBP.netis)

#### Authors: 2

- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Thu May 11 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.158.1`
  - fix(plasma-temple): create assistant ctx [#503](https://github.com/salute-developers/plasma/pull/503) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-temple@1.158.1`, `@salutejs/plasma-tokens@1.49.1`, `@salutejs/plasma-ui@1.190.1`
  - docs: fix links in docs [#500](https://github.com/salute-developers/plasma/pull/500) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Wed May 10 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-hope@1.209.0`
  - feat(plasma-hope): update api report [#498](https://github.com/salute-developers/plasma/pull/498) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- docs(plasma-web-docs): fix CodeSandbox import [#502](https://github.com/salute-developers/plasma/pull/502) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-hope@1.209.0`
  - fix(plasma-hope): omit 'onResize', 'onResizeCapture', 'nonce' properties for CardContentProps ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed May 10 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.208.2`, `@salutejs/plasma-hope@1.208.2`, `@salutejs/plasma-web@1.208.2`
  - fix(plasma-hope): default max-width for Grid [#501](https://github.com/salute-developers/plasma/pull/501) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Wed May 03 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.208.1`, `@salutejs/plasma-hope@1.208.1`, `@salutejs/plasma-web@1.208.1`
  - fix(plasma-*): update api report [#497](https://github.com/salute-developers/plasma/pull/497) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@1.208.1`
  - fix(plasma-hope): omit 'onResize', 'onResizeCapture', 'nonce' properties for SelectButtonProps ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed May 03 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.208.0`, `@salutejs/plasma-hope@1.208.0`, `@salutejs/plasma-web@1.208.0`
  - feat: change api-report for Container in Grid [#495](https://github.com/salute-developers/plasma/pull/495) ([@kayman233](https://github.com/kayman233))
  - feat(plasma-hope): maxWidth for Grid ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Fri Apr 28 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-*): Remove `plasma-android-ios-swift` and `plasma-tokens-android` (neretinartem@Neretins-MacBook-Pro.local)
- `@salutejs/plasma-tokens@1.49.0`
  - feat(plasma-tokens): Remove generation legacy tokens and themes for native platforms [#493](https://github.com/salute-developers/plasma/pull/493) (neretinartem@Neretins-MacBook-Pro.local)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)

---

# (Thu Apr 27 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.189.0`
  - feat(plasma-ui): trailing symbols snapshots/test [TextField] [#484](https://github.com/salute-developers/plasma/pull/484) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): handling trailing symbols ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Apr 27 2023)

#### 🚀 Enhancement

- feat: Remove unused packages: `plasma-tokens-android`, `plasma-tokens-ios-swift` (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens@1.48.0`
  - feat(plasma-tokens): Update `src` directory [#487](https://github.com/salute-developers/plasma/pull/487) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Updating and refactoring themes generate (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Remove generate `theme.json` file (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Remove new schema generate (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Remove size tokens from generate (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-ui@1.188.0`
  - feat(plasma-ui): Add size tokens to `Button` component (neretinartem@Neretins-MBP.netis)

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-tokens@1.48.0`, `@salutejs/plasma-tokens-utils@0.23.0`
  - fix(plasma-tokens, plasma-tokens-utiles): Add plasma-colors prefix to depracted tokens (neretinartem@Neretins-MBP.netis)

#### Authors: 2

- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Wed Apr 26 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.112.0`
  - feat: change api-report after usePopper in popup [#490](https://github.com/salute-developers/plasma/pull/490) ([@kayman233](https://github.com/kayman233))
  - feat(plasma-core): auto placements in Popup ([@kayman233](https://github.com/kayman233))
  - feat(plasma-core): usePopper in popup ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-b2c@1.205.0`, `@salutejs/plasma-hope@1.205.0`, `@salutejs/plasma-web@1.205.0`
  - feat(plasma-b2c): Dropdown new placements ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.187.0`
  - fix(plasma-ui): fix jest config ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Tue Apr 25 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.111.1`
  - fix(plasma-core): add default uniqId for Spinner [#492](https://github.com/salute-developers/plasma/pull/492) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Mon Apr 24 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.47.0`
  - feat(plasma-tokens): Remove design-language pacakage [#489](https://github.com/salute-developers/plasma/pull/489) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Saving themes artifacts from diez compile (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Fri Apr 21 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.46.0`
  - feat(plasma-tokens): Remove `src` directory from .gitignore [#488](https://github.com/salute-developers/plasma/pull/488) (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.46.0`
  - fix(plasma-tokens): Update theme name `sbermarket_winelab` to `sbermarket_wlbusiness` (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens-utils@0.22.0`
  - fix(plasma-tokens): Change default value for deprecated prop in generateFile (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Thu Apr 20 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.184.0`
  - feat(plasma-ui): Add new stories with scroll content and button [#482](https://github.com/salute-developers/plasma/pull/482) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-ui): Add swipe for whole sheet (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Wed Apr 19 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.45.0`
  - feat(plasma-tokens): Update formatter for colorIosSwift, colorKotlin, colorReactNative templates [#475](https://github.com/salute-developers/plasma/pull/475) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Update theme name convetion for old and new themes (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-tokens-utils@0.21.0`
  - feat(plasma-tokens-utils): Add fallback for legacy theme names (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- build(plasma-theme-builder): update package-lock [#485](https://github.com/salute-developers/plasma/pull/485) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens@1.45.0`
  - fix(plasma-tokens): Update theme name `vinlab` to `winelab` (neretinartem@Neretins-MBP.netis)

#### Authors: 2

- Neretin Artem (neretinartem@Neretins-MBP.netis)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon Apr 17 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.201.0`, `@salutejs/plasma-hope@1.201.0`, `@salutejs/plasma-web@1.201.0`
  - feat(plasma-hope): reAlign versions [#480](https://github.com/salute-developers/plasma/pull/480) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- build(plasma-theme-builder): update package-lock [#483](https://github.com/salute-developers/plasma/pull/483) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Apr 13 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-hope@0.33.0`
  - feat(plasma-hope): draggable scroll in carousel [#476](https://github.com/salute-developers/plasma/pull/476) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Wed Apr 12 2023)

#### 🚀 Enhancement

- feat: Add custom babel plugin `babel-plugin-import-replacer` (neretinartem@Neretins-MBP.netis)
- feat: Add custom babel plugin `babel-plugin-collect-package-info` (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-hope@0.32.0`
  - feat(plasma-hope): Update API [#460](https://github.com/salute-developers/plasma/pull/460) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-hope): Add `collectPackageInfo` and custom babel config (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-ui@1.182.0`
  - feat(plasma-ui): Add `collectPackageInfo` and custom babel config (neretinartem@Neretins-MBP.netis)
- `@salutejs/plasma-core@1.108.0`
  - feat(plasma-core): Add `collectPackageInfo` and custom babel config (neretinartem@Neretins-MBP.netis)
  - feat(plasma-core): add test for prop 'as' [#469](https://github.com/salute-developers/plasma/pull/469) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- docs(plasma-ui-docs): add block "Переносы на SberBox, SberPortal, etc." [#473](https://github.com/salute-developers/plasma/pull/473) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.182.0`
  - ci: perftool for whole repo, fail on bad changes [#418](https://github.com/salute-developers/plasma/pull/418) ([@akhdrv](https://github.com/akhdrv))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-core@1.108.0`, `@salutejs/plasma-hope@0.32.0`, `@salutejs/plasma-ui@1.182.0`
  - refactor(plasma-ui,plasma-core,plasma-hope): Refactor some components for clean re-export (neretinartem@Neretins-MBP.netis)

#### Authors: 3

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Mon Apr 10 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.107.1`, `@salutejs/plasma-hope@0.31.3`
  - fix: api report after export "Image" component from "plasma-core" [#467](https://github.com/salute-developers/plasma/pull/467) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.181.1`
  - fix(plasma-ui): re-export "Image" from plasma-core ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.31.3`
  - fix(plasma-hope): re-export "Image" from plasma-core ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.107.1`
  - fix(plasma-core): export "Image" as styled component ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Apr 06 2023)

#### 🚀 Enhancement

- feat(plasma-ui-docs): add block "Проблемы в Safari iOS 14.5 и ниже" [#464](https://github.com/salute-developers/plasma/pull/464) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.181.0`
  - fix(plasma-ui): add offScrollSnapAlign prop ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Apr 05 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-hope@0.31.2`
  - fix(plasma-hope): use "forceUpdate" [#461](https://github.com/salute-developers/plasma/pull/461) (alexander.lobyntsev@virtualhealth.com)

#### Authors: 1

- Alexander Lobyntsev (alexander.lobyntsev@virtualhealth.com)

---

# (Tue Apr 04 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.173.1`, `@salutejs/plasma-web@1.198.1`
  - fix(plasma-web,plasma-b2c): remove private api [#458](https://github.com/salute-developers/plasma/pull/458) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.180.1`
  - chore(docs): added CarouselLite docs and examples [#456](https://github.com/salute-developers/plasma/pull/456) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-b2c@1.173.1`, `@salutejs/plasma-web@1.198.1`
  - fix(plasma-web,plasma-b2c): fix various api diff between web/b2c ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-web@1.198.1`
  - refactor(plasma-web): Update `TextArea`, `TextField`, `Button` and `Container` components ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.173.1`
  - refactor(plasma-b2c): Update `TextArea`, `TextField`, `Button` and `Container` components ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@0.31.1`
  - refactor(plasma-hope): Update `TextArea`, `TextField`, `Button` and `Container` components ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Mar 31 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.44.0`
  - fix(plasma-tokens): Rename tenants name for `sbermarket` [#459](https://github.com/salute-developers/plasma/pull/459) (neretinartem@Neretins-MBP.netis)
  - feat(plasma-tokens): Add `sbermarketVinlab` theme (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.44.0`
  - fix(plasma-tokens): Fix theme name for gradient function in Swift formatters (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# (Thu Mar 30 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.172.0`, `@salutejs/plasma-hope@0.30.0`, `@salutejs/plasma-web@1.197.0`
  - feat: api report after merged "Select" component [#455](https://github.com/salute-developers/plasma/pull/455) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.172.0`
  - feat(plasma-b2c): update test symlink ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "Select" component ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.197.0`
  - feat(plasma-web): update test symlink ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "Select" component ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.30.0`
  - feat(plasma-hope): add cypress tests ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): export "Select" component ([@Yakutoc](https://github.com/Yakutoc))

#### ⚠️ Pushed to `master`

- chore(plasma-b2c): update snapshots ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-web): update snapshots ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Mar 30 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): update snapshots ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.29.0`, `@salutejs/plasma-web@1.196.0`
  - feat: api report after merged "Dropdown" component [#447](https://github.com/salute-developers/plasma/pull/447) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.171.0`
  - feat(plasma-web): add correct symlink for cypress test ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.196.0`
  - feat(plasma-web): add symlink for cypress test ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "Dropdown" component from "plasma-hope" ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.29.0`
  - feat(plasma-hope): add cypress test ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): export DropdownUncontrolled component ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.196.0`
  - fix(plasma-web): [Select] replace import path to "@salutejs/plasma-hope" ([@Yakutoc](https://github.com/Yakutoc))

#### ⚠️ Pushed to `master`

- chore(plasma-web): update snapshots ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.29.0`
  - docs(plasma-hope): fix typo ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Mar 29 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.170.0`, `@salutejs/plasma-hope@0.28.0`, `@salutejs/plasma-web@1.195.0`
  - feat: api report after merged "Tabs" component [#445](https://github.com/salute-developers/plasma/pull/445) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.195.0`
  - feat(plasma-web): re-export "Tabs" component from plasma-hope [#445](https://github.com/salute-developers/plasma/pull/445) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.170.0`
  - feat(plasma-b2c): re-export "Tabs" component from plasma-hope [#445](https://github.com/salute-developers/plasma/pull/445) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.28.0`
  - feat(plasma-hope): add "Tabs" component [#445](https://github.com/salute-developers/plasma/pull/445) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(deps): update dependency @types/cypress-image-snapshot to v3.1.6 [#399](https://github.com/salute-developers/plasma/pull/399) ([@renovate[bot]](https://github.com/renovate[bot]))

#### Authors: 2

- [@renovate[bot]](https://github.com/renovate[bot])
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Mar 29 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.169.0`, `@salutejs/plasma-hope@0.27.0`, `@salutejs/plasma-web@1.194.0`
  - feat(plasma-hope,plasma-web,plasma-b2c): Update Button API [#453](https://github.com/salute-developers/plasma/pull/453) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.169.0`
  - feat(plasma-b2c): Add import Button from plasma-hope ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.194.0`
  - feat(plasma-web): Add import Button from plasma-hope ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@0.27.0`
  - feat(plasma-hope): Add Button union from plasma-web and plasma-b2c ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Mar 29 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.147.0`
  - feat(plasma-temple): update getImageProps slider args [#451](https://github.com/salute-developers/plasma/pull/451) ([@shirinovIldar](https://github.com/shirinovIldar))

#### Authors: 1

-  Ildar Shirinov ([@shirinovIldar](https://github.com/shirinovIldar))

---

# (Wed Mar 29 2023)

#### 🐛 Bug Fix

- fix(plasma-website): Fix by design review [#452](https://github.com/salute-developers/plasma/pull/452) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Mar 29 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.135.0`
  - feat(plasma-icons): add "Menu" icon [#448](https://github.com/salute-developers/plasma/pull/448) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Tue Mar 28 2023)

#### 🚀 Enhancement

- feat(plasma-website): Redesign for main slute website [#437](https://github.com/salute-developers/plasma/pull/437) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Mar 28 2023)

#### 🚀 Enhancement

- feat(plasma-web): delete "Grid" unnecessary cypress snapshots ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.167.0`, `@salutejs/plasma-hope@0.25.0`, `@salutejs/plasma-web@1.192.0`
  - feat: api report after merged Grid component [#436](https://github.com/salute-developers/plasma/pull/436) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.167.0`
  - feat(plasma-b2c): add "Grid" cypress test ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "Grid" component from plasma-hope ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.192.0`
  - feat(plasma-web): add "Grid" cypress test ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "Grid" component from plasma-hope ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.25.0`
  - feat(plasma-hope): add "Grid" cypress test ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): add "Grid" component ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(deps): remove dependency @types/uuid [#441](https://github.com/salute-developers/plasma/pull/441) ([@Yeti-or](https://github.com/Yeti-or))
- chore(deps): update dependency fast-glob to v3.2.12 [#411](https://github.com/salute-developers/plasma/pull/411) ([@renovate[bot]](https://github.com/renovate[bot]))
- docs: Update CONTRIBUTING file [#440](https://github.com/salute-developers/plasma/pull/440) ([@neretin-trike](https://github.com/neretin-trike))
- docs: fix pr base path [#439](https://github.com/salute-developers/plasma/pull/439) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-b2c@1.167.0`, `@salutejs/plasma-hope@0.25.0`, `@salutejs/plasma-web@1.192.0`
  - feat(plasma-hope,plasma-web,plasma-b2c): Update API for `Container` component [#446](https://github.com/salute-developers/plasma/pull/446) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@0.25.0`
  - fix(plasmas-hope): Fix `Container` component for rest props in Grid ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@renovate[bot]](https://github.com/renovate[bot])
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Mar 24 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.166.0`, `@salutejs/plasma-hope@0.24.0`, `@salutejs/plasma-web@1.191.0`
  - feat(plasma-hope,plasma-web,plasma-b2c): Update TextField API [#429](https://github.com/salute-developers/plasma/pull/429) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@0.24.0`
  - feat(plasma-hope): Remove Input and Field components ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-hope): Add TextField union from plasma-web and plasma-b2c ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.166.0`
  - feat(plasma-b2c): Add import TextField from plasma-hope ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@0.24.0`, `@salutejs/plasma-web@1.191.0`
  - feat(plasma-web): Add import TextField from plasma-hope ([@neretin-trike](https://github.com/neretin-trike))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-b2c@1.166.0`, `@salutejs/plasma-web@1.191.0`
  - feat(plasma-web,plasma-b2c): Remove Input and Field components ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Mar 24 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.165.0`, `@salutejs/plasma-hope@0.23.0`, `@salutejs/plasma-web@1.190.0`
  - feat: api report after merged Image component [#435](https://github.com/salute-developers/plasma/pull/435) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.165.0`
  - feat(plasma-b2c): re-export "Image" component from plasma-hope ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.190.0`
  - feat(plasma-web): re-export "Image" component from plasma-hope ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.23.0`
  - feat(plasma-hope): add "Image" component ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Mar 22 2023)

#### 🐛 Bug Fix

- build: bump lerna version to 6.x [#432](https://github.com/salute-developers/plasma/pull/432) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.178.1`
  - fix(plasma-ui): omit 'onResize', 'onResizeCapture', 'nonce' in HeaderLogoProps [#434](https://github.com/salute-developers/plasma/pull/434) ([@Yakutoc](https://github.com/Yakutoc))
  - chore(plasma-ui): Sheet: fix storybook viewport [#433](https://github.com/salute-developers/plasma/pull/433) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Mar 21 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.106.0`
  - feat(plamas-core): Update API for useDebouncedFunction hook [#430](https://github.com/salute-developers/plasma/pull/430) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix: Remove temp es rules ([@neretin-trike](https://github.com/neretin-trike))
- build: used specify npm version by package.json#engine section [#427](https://github.com/salute-developers/plasma/pull/427) ([@Yakutoc](https://github.com/Yakutoc))
- docs: delete unnecessary paragraph about devices [#428](https://github.com/salute-developers/plasma/pull/428) ([@Yakutoc](https://github.com/Yakutoc))
- chore(deps): remove dependency @types/react-helmet [#424](https://github.com/salute-developers/plasma/pull/424) ([@Yeti-or](https://github.com/Yeti-or))
- ci: remove duplicate jobs in mq [#423](https://github.com/salute-developers/plasma/pull/423) ([@Yeti-or](https://github.com/Yeti-or))
- ci: enable mq [#421](https://github.com/salute-developers/plasma/pull/421) ([@Yeti-or](https://github.com/Yeti-or))
- ci: skip husky when run CI pipeline [#419](https://github.com/salute-developers/plasma/pull/419) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.106.0`, `@salutejs/plasma-temple@1.145.0`, `@salutejs/plasma-ui@1.178.0`, `@salutejs/plasma-cy-utils@0.50.0`, `@salutejs/plasma-tokens-utils@0.20.0`
  - fix(plasma-*): Fix some types by es-lint rules ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.145.0`
  - fix(plasma-temple): Remove storybook docs [#420](https://github.com/salute-developers/plasma/pull/420) ([@neretin-trike](https://github.com/neretin-trike))
  - build(plasma-temple): remove unused dep [#422](https://github.com/salute-developers/plasma/pull/422) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.178.0`
  - fix(plasma-ui): Remove storybook docs ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.164.0`
  - chore(plasma-b2c): remove unused variable [#353](https://github.com/salute-developers/plasma/pull/353) ([@Yeti-or](https://github.com/Yeti-or))

#### ⚠️ Pushed to `master`

- ci: use npm@6.14.17 ([@Yakutoc](https://github.com/Yakutoc))
- build: disabled auto-installing peer dependencies ([@Yakutoc](https://github.com/Yakutoc))
- build: use v16.19.1 node ([@Yakutoc](https://github.com/Yakutoc))
- ci: fix mq ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.164.0`, `@salutejs/plasma-web@1.189.0`
  - fix(plasma-web,b2c): Remove storybook docs ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Mar 17 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-colors@0.6.0`
  - fix(plasma-colors): Add `es` folder for include to tarball [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.163.0`
  - feat(plasma-b2c): Add import TextArea from plasma-hope [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.188.0`
  - feat(plasma-web): Add import TextArea from plasma-hope [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@0.21.0`
  - feat(plasma-hope): Add TextArea union from plasma-web and plasma-b2c [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.163.0`, `@salutejs/plasma-hope@0.21.0`, `@salutejs/plasma-web@1.188.0`
  - feat(plasma-hope,plasma-web,plasma-b2c): Update TextArea API [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.163.0`, `@salutejs/plasma-core@1.105.0`
  - test(plasma-b2c,plasma-web): Add error exclude for `TextArea` component [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Mar 16 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.187.0`
  - feat(plasma-web): Replace builder for storybook to Vite [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.176.0`
  - feat(plasma-ui): Replace builder for storybook to Vite [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.143.0`
  - feat(plasma-temple): Replace builder for storybook to Vite [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.162.0`
  - feat(plasma-b2c): Replace builder for storybook to Vite [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens-b2b@1.12.0`, `@salutejs/plasma-tokens-b2c@0.21.0`, `@salutejs/plasma-tokens-web@1.27.0`
  - feat(plasma-tokens-*): Add tokens and typo to index for export [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-colors@0.5.0`
  - feat(plasma-colors): Add ESM module transpilation [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-sb-utils@0.102.0`
  - feat(plasma-sb-utils): Change module result to ESM [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-hope@0.20.0`
  - chore(plasma-hope): Update API [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.104.0`, `@salutejs/plasma-hope@0.20.0`
  - feat(plasma-core,plasma-hope): Add build watcher and export tokens [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Mar 16 2023)

#### 🚀 Enhancement

- feat(plasma-web): [snapshot] handling Select height constraint [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): [snapshot] handling Select height constraint [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): handling height constraint for Select component [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.161.0`, `@salutejs/plasma-hope@0.19.0`, `@salutejs/plasma-web@1.186.0`
  - feat: add api reports [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.186.0`
  - feat(plasma-web): [cypress] handling Select height constraint [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): apply DropdownListCssProperties for Select component [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.161.0`
  - feat(plasma-b2c): apply DropdownListCssProperties for Select component [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.19.0`
  - feat(plasma-hope): use DropdownListCssProperties for Select component [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- ci: disable api:diff [#417](https://github.com/salute-developers/plasma/pull/417) ([@Yakutoc](https://github.com/Yakutoc))
- ci: disable husky for CI [#417](https://github.com/salute-developers/plasma/pull/417) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.161.0`, `@salutejs/plasma-core@1.104.0`, `@salutejs/plasma-hope@0.19.0`, `@salutejs/plasma-icons@1.132.0`, `@salutejs/plasma-temple@1.143.0`, `@salutejs/plasma-tokens-b2b@1.12.0`, `@salutejs/plasma-tokens-b2c@0.21.0`, `@salutejs/plasma-tokens-web@1.27.0`, `@salutejs/plasma-tokens@1.41.0`, `@salutejs/plasma-ui@1.176.0`, `@salutejs/plasma-web@1.186.0`, `@salutejs/plasma-cy-utils@0.48.0`, `@salutejs/plasma-sb-utils@0.102.0`, `@salutejs/plasma-tokens-android@2.48.0`, `@salutejs/plasma-tokens-ios-swift@2.48.0`
  - build: update package-locks [#412](https://github.com/salute-developers/plasma/pull/412) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Mar 15 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-colors@0.4.1`
  - fix(plasma-colors): empty npm tar [#413](https://github.com/salute-developers/plasma/pull/413) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Mar 15 2023)

#### 🚀 Enhancement

- feat(plasma-web-docs): handling height constraint for Dropdown component [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web): [snapshot] handling height constraint [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): [snapshot] handling height constraint [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.18.0`, `@salutejs/plasma-web@1.185.0`
  - feat: add api reports [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.185.0`
  - feat(plasma-web): [cypress] handling height constraint [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): handling height constraint [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.18.0`
  - feat(plasma-hope): handling height constraint [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Mar 15 2023)

#### 🚀 Enhancement

- feat(plasma-web-docs): processing bew typography logic [#395](https://github.com/salute-developers/plasma/pull/395) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): use standard from "plasma-typo" [#395](https://github.com/salute-developers/plasma/pull/395) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): describe typography-legacy components [#395](https://github.com/salute-developers/plasma/pull/395) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): describe typography.mdx [#395](https://github.com/salute-developers/plasma/pull/395) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): describe typography-legacy.mdx [#395](https://github.com/salute-developers/plasma/pull/395) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): describe typography components [#395](https://github.com/salute-developers/plasma/pull/395) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.184.0`
  - feat(plasma-web): processing new typography in story [#395](https://github.com/salute-developers/plasma/pull/395) (alexander.lobyntsev@virtualhealth.com)
  - feat(plasma-web): processing new typography [#395](https://github.com/salute-developers/plasma/pull/395) (alexander.lobyntsev@virtualhealth.com)

#### 🐛 Bug Fix

- chore(plasma-web-docs): add @salutejs/plasma-typo [#395](https://github.com/salute-developers/plasma/pull/395) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Alexander Lobyntsev (alexander.lobyntsev@virtualhealth.com)

---

# (Tue Mar 14 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.103.0`
  - feat: add api reports after change slider types [#398](https://github.com/salute-developers/plasma/pull/398) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.103.0`
  - fix(plasma-core): rework slider types [#398](https://github.com/salute-developers/plasma/pull/398) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat: Update API [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.141.0`, `@salutejs/plasma-tokens-b2b@1.11.0`, `@salutejs/plasma-tokens-b2c@0.20.0`, `@salutejs/plasma-tokens-web@1.26.0`, `@salutejs/plasma-ui@1.174.0`, `@salutejs/plasma-tokens-utils@0.19.0`
  - feat(plasma-*): Rename eslint rule and add temp rules [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.141.0`, `@salutejs/plasma-ui@1.174.0`, `@salutejs/plasma-web@1.182.0`
  - feat(plasma-*): Bump react-script version to 4.0.3 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.158.0`, `@salutejs/plasma-colors@0.4.0`, `@salutejs/plasma-core@1.102.0`, `@salutejs/plasma-hope@0.16.0`, `@salutejs/plasma-icons@1.130.0`, `@salutejs/plasma-temple@1.141.0`, `@salutejs/plasma-tokens-b2b@1.11.0`, `@salutejs/plasma-tokens-b2c@0.20.0`, `@salutejs/plasma-tokens-core@0.2.0`, `@salutejs/plasma-tokens-web@1.26.0`, `@salutejs/plasma-tokens@1.40.0`, `@salutejs/plasma-typo@0.33.0`, `@salutejs/plasma-ui@1.174.0`, `@salutejs/plasma-web@1.182.0`, `@salutejs/plasma-cy-utils@0.47.0`, `@salutejs/plasma-sb-utils@0.100.0`, `@salutejs/plasma-tokens-utils@0.19.0`
  - feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-cy-utils@0.47.0`
  - fix(plasma-cy-utils): Update js files by new typescript version [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Mar 14 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-hope@0.15.0`
  - feat: change withAssistiveDropdown return api [#393](https://github.com/salute-developers/plasma/pull/393) (alexander.lobyntsev@virtualhealth.com)

#### 🐛 Bug Fix

- ci: save artifacts if previous step of a job fails [#404](https://github.com/salute-developers/plasma/pull/404) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.15.0`
  - fix(plasma-hope): withAssistiveDropdown return forwardRef [#393](https://github.com/salute-developers/plasma/pull/393) (alexander.lobyntsev@virtualhealth.com)

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Alexander Lobyntsev (alexander.lobyntsev@virtualhealth.com)

---

# (Mon Mar 13 2023)

#### 🐛 Bug Fix

- chore(plasma-*): disabled axe check [#403](https://github.com/salute-developers/plasma/pull/403) ([@Yakutoc](https://github.com/Yakutoc))
- ci: perftool in master CR [#402](https://github.com/salute-developers/plasma/pull/402) ([@KateKate](https://github.com/KateKate))
- ci: perf test for master [#402](https://github.com/salute-developers/plasma/pull/402) ([@KateKate](https://github.com/KateKate))
- ci: update commitlint [#394](https://github.com/salute-developers/plasma/pull/394) ([@Yeti-or](https://github.com/Yeti-or))
- ci: update lint-staged [#394](https://github.com/salute-developers/plasma/pull/394) ([@Yeti-or](https://github.com/Yeti-or))
- ci: update husky version [#394](https://github.com/salute-developers/plasma/pull/394) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.173.2`
  - fix(plasma-ui): Remove storybook-addon-performance [#406](https://github.com/salute-developers/plasma/pull/406) ([@neretin-trike](https://github.com/neretin-trike))
  - ci: update perftool [#401](https://github.com/salute-developers/plasma/pull/401) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 5

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Mar 08 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.156.0`
  - feat(plasma-b2c): delete unnecessary dependencies/devDependencies [#392](https://github.com/salute-developers/plasma/pull/392) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): delete jest config [#392](https://github.com/salute-developers/plasma/pull/392) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Tue Mar 07 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.39.1`, `@salutejs/plasma-tokens-utils@0.18.1`
  - fix(plasma-tokens): Remove `plasma-colors` prefix from brand themes [#391](https://github.com/salute-developers/plasma/pull/391) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Mar 07 2023)

#### 🚀 Enhancement

- feat(plasma-web-docs): add UploadAudio.mdx [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web): add cypress snapshots [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): delete unnecessary cypress snapshots [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress snapshots [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.155.0`, `@salutejs/plasma-hope@0.14.0`, `@salutejs/plasma-web@1.180.0`
  - feat: add api reports after re-export UploadAudio component [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.180.0`
  - feat(plasma-web): add cypress tests symlink [UploadAudio] [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "UploadAudio" component [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.155.0`
  - feat(plasma-b2c): add cypress tests symlink [UploadAudio] [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "UploadAudio" component [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.14.0`
  - feat(plasma-hope): add "UploadAudio" component [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Tue Mar 07 2023)

#### 🚀 Enhancement

- feat(plasma-web-docs): add UploadVisual.mdx [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web): add cypress snapshots [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): delete unnecessary cypress snapshots [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress snapshots [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.154.0`, `@salutejs/plasma-hope@0.13.0`, `@salutejs/plasma-web@1.179.0`
  - feat: add api reports after re-export UploadVisual component [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.179.0`
  - feat(plasma-web): add cypress tests symlink [UploadVisual] [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "UploadVisual" component [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.154.0`
  - feat(plasma-b2c): add cypress tests symlink [UploadVisual] [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "UploadVisual" component [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.13.0`
  - feat(plasma-hope): add "UploadVisual" component [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Tue Mar 07 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-hope@0.12.1`
  - fix(plasma-hope): set correct transitive dependencies [#388](https://github.com/salute-developers/plasma/pull/388) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Mon Mar 06 2023)

#### 🚀 Enhancement

- feat(plasma-web-docs): add PreviewGallery [#379](https://github.com/salute-developers/plasma/pull/379) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): add ElasticGrid [#379](https://github.com/salute-developers/plasma/pull/379) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): add AudioPlayer [#379](https://github.com/salute-developers/plasma/pull/379) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): add Editable [#379](https://github.com/salute-developers/plasma/pull/379) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): add Upload [#379](https://github.com/salute-developers/plasma/pull/379) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web-docs): add Slider [#379](https://github.com/salute-developers/plasma/pull/379) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- build(plasma-docs-ui): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- ci: add react-18 to tests [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-hope@0.12.0`
  - test(plasma-hope): disable stub [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
  - build(plasma-hope): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.153.0`
  - build(plasma-hope): update API diff [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple@1.140.0`, `@salutejs/plasma-ui@1.173.0`, `@salutejs/plasma-web@1.178.0`, `@salutejs/plasma-sb-utils@0.99.0`
  - build(plasma-hope): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-web@1.178.0`
  - build(plasma-web): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-sb-utils@0.99.0`
  - build(plasma-sb-utils): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-typo@0.32.0`
  - build(plasma-typo): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.153.0`, `@salutejs/plasma-hope@0.12.0`
  - build(plasma-b2c): bump react to 18.x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-icons@1.129.0`
  - build(plasma-icons): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple@1.140.0`
  - build(plasma-temple): bump react to 18.x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-cy-utils@0.46.0`
  - build(plasma-cy-utils): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.101.0`
  - build(plasma-core): bump react to 18 version [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.173.0`
  - build(plasma-ui): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Mar 03 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.100.1`
  - fix(plasma-core): fix IS_REACT_18 [#380](https://github.com/salute-developers/plasma/pull/380) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Mar 03 2023)

#### 🚀 Enhancement

- feat(plasma-web): add cypress ElasticGrid snapshots [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.152.0`, `@salutejs/plasma-hope@0.11.0`, `@salutejs/plasma-web@1.177.0`
  - feat: add api reports after re-export ElasticGrid component [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.11.0`
  - feat(plasma-hope): add "@types/resize-observer-browser" [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): add "ElasticGrid" component [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.177.0`
  - feat(plasma-web): add cypress tests symlink [ElasticGrid] [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "ElasticGrid" component [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.152.0`
  - feat(plasma-b2c): add cypress tests symlink [ElasticGrid] [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "ElasticGrid" component [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat(plasma-web): add cypress AudioPlayer snapshots [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress AudioPlayer snapshots [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): delete unnecessary cypress AudioPlayer snapshots [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.151.0`
  - feat(plasma-b2c): use --passWithNoTests flag for jest [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): add cypress tests symlink [AudioPlayer] [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "AudioPlayer" component [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.151.0`, `@salutejs/plasma-hope@0.10.0`, `@salutejs/plasma-web@1.176.0`
  - feat: add api reports after re-export AudioPlayer component [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.176.0`
  - feat(plasma-web): add cypress tests symlink [AudioPlayer] [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "AudioPlayer" component [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.10.0`
  - feat(plasma-hope): add "AudioPlayer" component [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat(plasma-web): add cypress Editable snapshots [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): delete unnecessary cypress Editable snapshots [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress Editable snapshots [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.150.0`, `@salutejs/plasma-hope@0.9.0`, `@salutejs/plasma-web@1.175.0`
  - feat: add api reports after re-export Editable component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.175.0`
  - feat(plasma-web): add cypress tests symlink [Editable] [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "Editable" component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.150.0`
  - feat(plasma-b2c): add cypress tests symlink [Editable] [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "Editable" component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.9.0`
  - feat(plasma-hope): add "Editable" component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): add selectText, clearSelection methods [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- docs(plasma-web): Modal: add onClose to example [#377](https://github.com/salute-developers/plasma/pull/377) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat(plasma-ui): delete unnecessary cypress snapshots [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-ui): add cypress snapshots [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): delete unnecessary cypress snapshots [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress snapshots [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web): add cypress Slider snapshots [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.149.0`, `@salutejs/plasma-core@1.100.0`, `@salutejs/plasma-hope@0.8.0`, `@salutejs/plasma-web@1.174.0`
  - feat: add api reports after re-export Slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.172.0`
  - feat(plasma-ui): add cypress test symlink [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): re-export slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.149.0`
  - feat(plasma-b2c): add cypress tests symlink [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export SliderThumb from plasma-hope [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.174.0`
  - feat(plasma-web): add cypress tests symlink [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export SliderThumb from plasma-hope [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.8.0`
  - feat(plasma-hope): add SliderThumb [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.100.0`
  - feat(plasma-core): feat react-draggable [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.149.0`, `@salutejs/plasma-core@1.100.0`
  - feat(plasma-core): slider move to core [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat(plasma-web): add cypress snapshots [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): delete unnecessary cypress snapshots [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress snapshots [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.148.0`, `@salutejs/plasma-hope@0.7.0`, `@salutejs/plasma-web@1.173.0`
  - feat: add api reports after re-export PreviewGallery component [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.173.0`
  - feat(plasma-web): add cypress tests symlink [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "PreviewGallery" component [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.148.0`
  - feat(plasma-b2c): add cypress tests symlink [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "PreviewGallery" component [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.7.0`
  - feat(plasma-hope): add "react-sortable-hoc" [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): add "PreviewGallery" component [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.148.0`
  - fix(plasma-b2c): set correct import paths [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat(plasma-web): add cypress snapshots [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): delete unnecessary cypress snapshots [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c): add cypress snapshots [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.147.0`, `@salutejs/plasma-hope@0.6.0`, `@salutejs/plasma-web@1.172.0`
  - feat: add api reports after re-export Upload component [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.6.0`
  - feat(plasma-hope): add "react-file-drop" [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): add "Upload" component [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.172.0`
  - feat(plasma-web): add cypress tests symlink [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): re-export "Upload" component [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.147.0`
  - feat(plasma-b2c): add cypress tests symlink [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): re-export "Upload" component [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Mar 01 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-hope@0.5.0`
  - feat(plasma-hope): processing unit test [#373](https://github.com/salute-developers/plasma/pull/373) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): add jest config [#373](https://github.com/salute-developers/plasma/pull/373) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- build(demo-canvas-app): fix types of styled-components [#371](https://github.com/salute-developers/plasma/pull/371) ([@Yeti-or](https://github.com/Yeti-or))
- build(plasma-website): fix types of styled-components [#371](https://github.com/salute-developers/plasma/pull/371) ([@Yeti-or](https://github.com/Yeti-or))
- build(plasma-website): bump next version [#371](https://github.com/salute-developers/plasma/pull/371) ([@Yeti-or](https://github.com/Yeti-or))
- build(demo-canvas-app): bump next version [#371](https://github.com/salute-developers/plasma/pull/371) ([@Yeti-or](https://github.com/Yeti-or))
- build: bump lerna to 5.x [#370](https://github.com/salute-developers/plasma/pull/370) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon Feb 27 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.145.0`
  - feat(plasma-b2c): add partial typing for theme [#366](https://github.com/salute-developers/plasma/pull/366) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(deps): update package-lock [#357](https://github.com/salute-developers/plasma/pull/357) ([@Yeti-or](https://github.com/Yeti-or))
- chore(deps): update dependency @testing-library/cypress to v7.0.7 [#357](https://github.com/salute-developers/plasma/pull/357) ([@renovate[bot]](https://github.com/renovate[bot]))

#### Authors: 3

- [@renovate[bot]](https://github.com/renovate[bot])
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon Feb 20 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.38.0`
  - feat(plasma-tokens): Add new name for TokenGroup [#361](https://github.com/salute-developers/plasma/pull/361) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Feb 20 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.37.1`
  - fix(plasma-tokens): Fix sberHealth scheme in json [#359](https://github.com/salute-developers/plasma/pull/359) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Feb 20 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.143.0`
  - feat(plasma-b2c): processing withBlur prop in story [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.143.0`, `@salutejs/plasma-hope@0.3.0`, `@salutejs/plasma-web@1.169.0`
  - feat: add api reports [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.3.0`
  - feat(plasma-hope): export ModalViewProps as part API component [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-hope): add prop withBlur [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.169.0`
  - feat(plasma-web): add test for withBlur prop [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): processing withBlur prop [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- fix(plasma-b2c): update cypress snapshots [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-web): update cypress snapshots [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.143.0`
  - fix(plasma-b2c): resolve import for ModalView [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.169.0`
  - fix(plasma-web): resolve import for ModalView [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-hope@0.3.0`
  - fix(plasma-hope): resolve import for ModalView [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-hope): lint fixes [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
  - docs(plasma-hope): extend readme text [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Fri Feb 17 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.37.0`
  - feat(plasma-tokens): Add theme sberHealth [#354](https://github.com/salute-developers/plasma/pull/354) ([@gibushnev](https://github.com/gibushnev))

#### 🐛 Bug Fix

- fix(plasma-theme-builder): Update redirectURI for auth request [#345](https://github.com/salute-developers/plasma/pull/345) ([@neretin-trike](https://github.com/neretin-trike))
- build: remove obscure versions [#351](https://github.com/salute-developers/plasma/pull/351) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.142.0`, `@salutejs/plasma-core@1.98.0`, `@salutejs/plasma-hope@0.2.0`, `@salutejs/plasma-icons@1.126.0`, `@salutejs/plasma-temple@1.137.0`, `@salutejs/plasma-tokens-b2b@1.11.0`, `@salutejs/plasma-tokens-b2c@0.20.0`, `@salutejs/plasma-tokens-web@1.26.0`, `@salutejs/plasma-tokens@1.37.0`, `@salutejs/plasma-ui@1.170.0`, `@salutejs/plasma-web@1.168.0`, `@salutejs/plasma-cy-utils@0.44.0`, `@salutejs/plasma-sb-utils@0.96.0`
  - ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### ⚠️ Pushed to `master`

- ci: change renovate schedule ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@gibushnev](https://github.com/gibushnev)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Feb 17 2023)

#### 🐛 Bug Fix

- fix(plasma-theme-builder): Update redirectURI for auth request [#345](https://github.com/salute-developers/plasma/pull/345) ([@neretin-trike](https://github.com/neretin-trike))
- build: remove obscure versions [#351](https://github.com/salute-developers/plasma/pull/351) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.141.2`, `@salutejs/plasma-core@1.97.2`, `@salutejs/plasma-hope@0.1.2`, `@salutejs/plasma-icons@1.125.2`, `@salutejs/plasma-temple@1.136.2`, `@salutejs/plasma-tokens-b2b@1.10.1`, `@salutejs/plasma-tokens-b2c@0.19.1`, `@salutejs/plasma-tokens-web@1.25.1`, `@salutejs/plasma-tokens@1.36.1`, `@salutejs/plasma-ui@1.169.2`, `@salutejs/plasma-web@1.167.2`, `@salutejs/plasma-cy-utils@0.43.1`, `@salutejs/plasma-sb-utils@0.95.2`
  - ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### ⚠️ Pushed to `master`

- ci: change renovate schedule ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Feb 16 2023)

#### 🐛 Bug Fix

- build: use only prettier on json files [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- chore: Remove showcase package from utils [#348](https://github.com/salute-developers/plasma/pull/348) ([@neretin-trike](https://github.com/neretin-trike))
- build: configure renovate [#350](https://github.com/salute-developers/plasma/pull/350) ([@Yeti-or](https://github.com/Yeti-or))
- Add renovate.json [#350](https://github.com/salute-developers/plasma/pull/350) ([@renovate[bot]](https://github.com/renovate[bot]))
- `@salutejs/plasma-b2c@1.141.1`, `@salutejs/plasma-core@1.97.1`, `@salutejs/plasma-hope@0.1.1`, `@salutejs/plasma-web@1.167.1`
  - build: add api reports to plasma-core & hope [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.141.1`, `@salutejs/plasma-hope@0.1.1`, `@salutejs/plasma-web@1.167.1`
  - fix(plasma-hope): export CalendarStateType [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
  - build: add api-extractor [#342](https://github.com/salute-developers/plasma/pull/342) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-hope@0.1.1`
  - fix(plasma-hope): export CalendarStateType [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.141.1`, `@salutejs/plasma-web@1.167.1`
  - build: improve api-report [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@renovate[bot]](https://github.com/renovate[bot])
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Feb 15 2023)

#### 🚀 Enhancement

- chore(plasma-b2c): add toast + offset snapshot [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.97.0`
  - feat(plasma-core): add test for offset prop [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-core): add offset prop [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.167.0`
  - feat(plasma-web): add offset prop in storybook [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.141.0`
  - feat(plasma-b2c): add offset prop in storybook [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.169.0`
  - feat(plasma-ui): add offset prop in storybook [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- ci: fix eslint [#324](https://github.com/salute-developers/plasma/pull/324) ([@Yeti-or](https://github.com/Yeti-or))
- chore(plasma-web): add toast + offset snapshot [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-ui): add toast + offset snapshot [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-ui): add offset prop in doc [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-web): add offset prop in doc [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-ui-docs): Update docs for token.mdx [#343](https://github.com/salute-developers/plasma/pull/343) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-hope@0.1.0`
  - fix(plasma-hope): publish pkg [#346](https://github.com/salute-developers/plasma/pull/346) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-web@1.167.0`
  - chore(plasma-web): fix stories imports [#324](https://github.com/salute-developers/plasma/pull/324) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.141.0`
  - chore(plasma-b2c): hack to fix typings [#324](https://github.com/salute-developers/plasma/pull/324) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.141.0`, `@salutejs/plasma-core@1.97.0`, `@salutejs/plasma-hope@0.1.0`, `@salutejs/plasma-web@1.167.0`
  - refactor(plasma-web/plasma-b2c): move common code to plasma-hope [#324](https://github.com/salute-developers/plasma/pull/324) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Feb 15 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.166.1`
  - fix(plasma-web): fix lint missing/unnecessary dependency [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-b2c): improve toast story [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-web): resolve "Importing from '@storybook/addon-docs/blocks' is deprecated" [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-web): use InSpacingDecorator [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-web): resolve "control.options" warning in storybook [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - chore(plasma-web): delete unnecessary stories.mdx [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.140.1`
  - fix(plasma-b2c): fix lint missing/unnecessary dependency [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-b2c): hide unnecessary editable story controls [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-b2c): improve toast story [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-b2c): resolve "control.options" warning in storybook [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-b2c): use CSF for Grid, Link, Skeleton [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - fix(plasma-b2c): use InSpacingDecorator [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
  - chore(plasma-b2c): delete unnecessary stories.mdx [#344](https://github.com/salute-developers/plasma/pull/344) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.168.1`
  - fix(plasma-ui): Resolve "Importing from @storybook/addon-docs/blocks is deprecated" [#344](https://github.com/salute-developers/plasma/pull/344) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Feb 14 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.168.0`
  - feat(plasma-ui): Add InSpacingDecorator in stories [#335](https://github.com/salute-developers/plasma/pull/335) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-ui): Fix control.options warning in storybook [#335](https://github.com/salute-developers/plasma/pull/335) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(palsma-ui): Remove stories.mdx from components [#335](https://github.com/salute-developers/plasma/pull/335) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.135.0`, `@salutejs/plasma-ui@1.168.0`
  - feat(plasma-ui,plasma-temple): Solve warning problems in storyboook [#335](https://github.com/salute-developers/plasma/pull/335) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Feb 14 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.140.0`, `@salutejs/plasma-temple@1.134.0`, `@salutejs/plasma-ui@1.167.0`, `@salutejs/plasma-web@1.166.0`
  - feat: Update using title in toolBar instead of name in preview.js [#330](https://github.com/salute-developers/plasma/pull/330) ([@neretin-trike](https://github.com/neretin-trike))
  - feat: Bump storybook version to 6.5 [#330](https://github.com/salute-developers/plasma/pull/330) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma): send perftool report CR [#323](https://github.com/salute-developers/plasma/pull/323) ([@KateKate](https://github.com/KateKate))
- feat(plasma): send perftool report [#323](https://github.com/salute-developers/plasma/pull/323) ([@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-b2c@1.139.0`, `@salutejs/cra-template-plasma-basic-template@2.3.0`, `@salutejs/plasma-core@1.96.0`, `@salutejs/plasma-icons@1.124.0`, `@salutejs/plasma-temple@1.133.0`, `@salutejs/plasma-tokens-b2b@1.9.0`, `@salutejs/plasma-tokens-b2c@0.18.0`, `@salutejs/plasma-tokens-web@1.24.0`, `@salutejs/plasma-tokens@1.35.0`, `@salutejs/plasma-typo@0.31.0`, `@salutejs/plasma-ui@1.166.0`, `@salutejs/plasma-web@1.165.0`, `@salutejs/plasma-sb-utils@0.94.0`, `@salutejs/plasma-tokens-utils@0.17.0`
  - feat(plasma-*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: set 14.21.2 node version [#332](https://github.com/salute-developers/plasma/pull/332) ([@Yakutoc](https://github.com/Yakutoc))
- chore: set engines prop [#332](https://github.com/salute-developers/plasma/pull/332) ([@Yakutoc](https://github.com/Yakutoc))
- docs: bump node.js to 14.x [#332](https://github.com/salute-developers/plasma/pull/332) ([@Yakutoc](https://github.com/Yakutoc))
- ci: migrate to actions/setup-node@v3 [#332](https://github.com/salute-developers/plasma/pull/332) ([@Yakutoc](https://github.com/Yakutoc))
- ci: enable version docs for mq [#340](https://github.com/salute-developers/plasma/pull/340) ([@Yeti-or](https://github.com/Yeti-or))
- ci: enable version docs for mq [#339](https://github.com/salute-developers/plasma/pull/339) ([@Yeti-or](https://github.com/Yeti-or))
- ci: enable version docs for mq [#338](https://github.com/salute-developers/plasma/pull/338) ([@Yeti-or](https://github.com/Yeti-or))
- ci: enable version docs for mq [#337](https://github.com/salute-developers/plasma/pull/337) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Feb 14 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.95.0`
  - chore(plasma-core): add issue for cypress "clearTimeout on hide" test [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-core): add onHide/onShow callbacks [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.164.0`
  - feat(plasma-web): add onHide action in storybook [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.138.0`
  - feat(plasma-b2c): add onHide action in storybook [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.165.0`
  - feat(plasma-ui): add onHide action in storybook [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- docs(plasma-ui): update toast [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-web): update toast [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))
- ci: update perftool scripts [#328](https://github.com/salute-developers/plasma/pull/328) ([@akhdrv](https://github.com/akhdrv))
- chore: delete perftool [#328](https://github.com/salute-developers/plasma/pull/328) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/plasma-ui@1.165.0`
  - chore(plasma-ui): update perftool and config [#328](https://github.com/salute-developers/plasma/pull/328) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# (Mon Feb 13 2023)

#### 🐛 Bug Fix

- ci: remove old server usage [#331](https://github.com/salute-developers/plasma/pull/331) ([@kayman233](https://github.com/kayman233))
- ci: mime type bug fix [#327](https://github.com/salute-developers/plasma/pull/327) ([@kayman233](https://github.com/kayman233))
- docs(plasma-ui, plasma-web): fix images in docs [#327](https://github.com/salute-developers/plasma/pull/327) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-temple@1.131.1`
  - fix(plasma-temple): assistant state logic [#293](https://github.com/salute-developers/plasma/pull/293) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Fri Feb 10 2023)

#### 🐛 Bug Fix

- chore(plasma-b2c): update tests snapshots [#311](https://github.com/salute-developers/plasma/pull/311) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.137.1`
  - fix(plasma-b2c): avoid text overflow [#311](https://github.com/salute-developers/plasma/pull/311) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Fri Feb 10 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.137.0`, `@salutejs/plasma-core@1.94.0`, `@salutejs/plasma-temple@1.131.0`, `@salutejs/plasma-ui@1.164.0`, `@salutejs/plasma-web@1.163.0`
  - feat(plasma-*): Add .npmignore and remove file field for test files [#322](https://github.com/salute-developers/plasma/pull/322) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix: Revert test files exclude from bundle [#322](https://github.com/salute-developers/plasma/pull/322) ([@neretin-trike](https://github.com/neretin-trike))
- ci: delete-removed flag for workflows [#325](https://github.com/salute-developers/plasma/pull/325) ([@kayman233](https://github.com/kayman233))
- ci: use s3cmd to upload [#325](https://github.com/salute-developers/plasma/pull/325) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Feb 08 2023)

#### 🚀 Enhancement

- feat(plasma-preftest): Remove lerna scope from setup step [#310](https://github.com/salute-developers/plasma/pull/310) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- docs(plasma-ui-docs): Add descriptions for breakWorkd props in typography components [#310](https://github.com/salute-developers/plasma/pull/310) ([@neretin-trike](https://github.com/neretin-trike))
- ci: fix upload step in versionate [#321](https://github.com/salute-developers/plasma/pull/321) ([@kayman233](https://github.com/kayman233))
- docs(plasma-ui, plasma-web): fix links in docs [#321](https://github.com/salute-developers/plasma/pull/321) ([@kayman233](https://github.com/kayman233))
- ci: remove sync action [#320](https://github.com/salute-developers/plasma/pull/320) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-b2c@1.136.0`, `@salutejs/plasma-ui@1.163.0`
  - feat(plasma-ui,plasma-b2c): Add breakWord props for storybook preview [#310](https://github.com/salute-developers/plasma/pull/310) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-typo@0.30.0`, `@salutejs/plasma-ui@1.163.0`, `@salutejs/plasma-tokens-utils@0.16.0`
  - feat(plasma-typo,plasma-ui): Add breakWord props for global style root [#310](https://github.com/salute-developers/plasma/pull/310) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Feb 08 2023)

#### 🚀 Enhancement

- feat: bump lerna to 4 version [#314](https://github.com/salute-developers/plasma/pull/314) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: replace 12.16.1 to 14.0.0 [#312](https://github.com/salute-developers/plasma/pull/312) ([@Yakutoc](https://github.com/Yakutoc))
- docs: replace `node` версии `v12.x` to `v14` [#312](https://github.com/salute-developers/plasma/pull/312) ([@Yakutoc](https://github.com/Yakutoc))
- ci: update GitHub workflows configs [#312](https://github.com/salute-developers/plasma/pull/312) ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-ui): doc examples for product card [#263](https://github.com/salute-developers/plasma/pull/263) ([@kayman233](https://github.com/kayman233))
- ci: new s3 bucket [#316](https://github.com/salute-developers/plasma/pull/316) ([@kayman233](https://github.com/kayman233))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Feb 08 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add create pull request via github [#303](https://github.com/salute-developers/plasma/pull/303) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.135.0`
  - fix(plasma-b2c): set value prop outlined to true [#313](https://github.com/salute-developers/plasma/pull/313) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.161.0`
  - fix(plasma-web): set value prop outlined to true [#313](https://github.com/salute-developers/plasma/pull/313) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Feb 03 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add create pull request via github [#303](https://github.com/salute-developers/plasma/pull/303) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Feb 03 2023)

#### 🚀 Enhancement

- chore(plasma-b2c): add local text area snapshots [#295](https://github.com/salute-developers/plasma/pull/295) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.134.0`
  - feat(plasma-b2c): add tests for handling property size [#295](https://github.com/salute-developers/plasma/pull/295) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): handling property size [#295](https://github.com/salute-developers/plasma/pull/295) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-b2c): update core text area snapshots [#295](https://github.com/salute-developers/plasma/pull/295) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Feb 02 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.133.0`, `@salutejs/plasma-core@1.92.0`, `@salutejs/plasma-icons@1.120.0`, `@salutejs/plasma-temple@1.129.0`, `@salutejs/plasma-ui@1.162.0`, `@salutejs/plasma-web@1.160.0`
  - feat(plasma-*): Remove source maps from bundles [#309](https://github.com/salute-developers/plasma/pull/309) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.133.0`
  - chore(plasma-b2c): enable preview source code [#308](https://github.com/salute-developers/plasma/pull/308) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.162.0`
  - chore(plasma-ui): enable preview source code [#308](https://github.com/salute-developers/plasma/pull/308) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.160.0`
  - chore(plasma-web): enable preview source code [#308](https://github.com/salute-developers/plasma/pull/308) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Feb 02 2023)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.33.1`
  - fix(plasma-tokens): Update token template for Kotlin and React-Native platforms [#305](https://github.com/salute-developers/plasma/pull/305) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-typo@0.29.1`
  - fix(plasma-typo): Fix letter-spacing for sbermarket typo [#305](https://github.com/salute-developers/plasma/pull/305) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Feb 02 2023)

#### 🚀 Enhancement

- feat: Add ignore component-test files for babel config [#307](https://github.com/salute-developers/plasma/pull/307) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.159.0`
  - feat(plasma-web): update storybook example [#273](https://github.com/salute-developers/plasma/pull/273) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): add cypress tests for navigate by Shift + Arrow Left\Right\Up\Down [#273](https://github.com/salute-developers/plasma/pull/273) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): navigate by Shift + Arrow Left\Right\Up\Down [#273](https://github.com/salute-developers/plasma/pull/273) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.159.0`
  - fix(plasma-web): update cypress tests [#273](https://github.com/salute-developers/plasma/pull/273) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Feb 01 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.131.0`
  - feat(plasma-b2c): add onSearch event [#294](https://github.com/salute-developers/plasma/pull/294) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.161.0`
  - feat(plasma-ui): add onSearch event [#294](https://github.com/salute-developers/plasma/pull/294) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.158.0`
  - feat(plasma-web): add onSearch event [#294](https://github.com/salute-developers/plasma/pull/294) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Feb 01 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.33.0`
  - feat(plasma-tokens): Add generate shadow tokens for React-Native [#288](https://github.com/salute-developers/plasma/pull/288) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasmsa-tokens): Add shadow tokens [#288](https://github.com/salute-developers/plasma/pull/288) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.160.0`
  - fix(plasma-ui): add default return value [#304](https://github.com/salute-developers/plasma/pull/304) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Sat Jan 28 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add envs to worflow actions for auth [#281](https://github.com/salute-developers/plasma/pull/281) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add authorization via GitHub API [#281](https://github.com/salute-developers/plasma/pull/281) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.156.0`
  - feat(plasma-web): add storybook example for undefined case [#291](https://github.com/salute-developers/plasma/pull/291) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): add cypress tests for handling undefined cases [#291](https://github.com/salute-developers/plasma/pull/291) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): handling value as undefined [#291](https://github.com/salute-developers/plasma/pull/291) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Jan 27 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add envs to worflow actions for auth [#281](https://github.com/salute-developers/plasma/pull/281) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add authorization via GitHub API [#281](https://github.com/salute-developers/plasma/pull/281) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jan 26 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add edit tokens entities for theme [#276](https://github.com/salute-developers/plasma/pull/276) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.155.0`
  - fix(plasma-web): prevent default safari datepicker appearance [#287](https://github.com/salute-developers/plasma/pull/287) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jan 26 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add edit tokens entities for theme [#276](https://github.com/salute-developers/plasma/pull/276) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Jan 25 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.159.0`
  - feat(plasma-ui): use attrs in Button, add spatial class in Picker [#285](https://github.com/salute-developers/plasma/pull/285) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- `@salutejs/plasma-core@1.90.0`, `@salutejs/plasma-ui@1.159.0`
  - feat(plasma-ui): add support of @salutejs/spatial, fix context memoization in Tabs [#285](https://github.com/salute-developers/plasma/pull/285) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.159.0`
  - fix(plasma-ui): helpers => utils [#285](https://github.com/salute-developers/plasma/pull/285) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Jan 25 2023)

#### 🐛 Bug Fix

- `@salutejs/perftool@0.3.1`
  - fix(perftool): fix auto prettier [#290](https://github.com/salute-developers/plasma/pull/290) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# (Wed Jan 25 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.158.0`
  - chore(plasma-ui): update perftool config [#286](https://github.com/salute-developers/plasma/pull/286) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/perftool@0.3.0`
  - feat(perftool): static task stabilizer [#286](https://github.com/salute-developers/plasma/pull/286) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# (Tue Jan 24 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add read theme from github repo [#270](https://github.com/salute-developers/plasma/pull/270) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.157.0`
  - chore(plasma-ui): add Stepper and Tabs perftests [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
  - chore(plasma-ui): add ProductCard perftest [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
  - chore(plasma-ui): add Carousel perftest [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
  - chore(plasma-ui): change perftest retries, add Card perftest [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))
  - chore(plasma-ui): delete performance addon reports [#278](https://github.com/salute-developers/plasma/pull/278) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 2

- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jan 19 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add builder [#258](https://github.com/salute-developers/plasma/pull/258) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add github workflow for deploy theme-builder on server [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add pages and components for theme-builder [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add create react app [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- ci: fix size of ts report [#283](https://github.com/salute-developers/plasma/pull/283) ([@Yeti-or](https://github.com/Yeti-or))
- docs(plasma-ui, plasma-web, plasma-temple): add trailing slash [#280](https://github.com/salute-developers/plasma/pull/280) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-temple@1.123.0`
  - fix(plasma-temple): remove duplicate interface [#284](https://github.com/salute-developers/plasma/pull/284) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.126.0`, `@salutejs/plasma-core@1.89.0`, `@salutejs/plasma-temple@1.123.0`, `@salutejs/plasma-ui@1.156.0`, `@salutejs/plasma-web@1.153.0`, `@salutejs/plasma-cy-utils@0.39.0`
  - ci: improve ts-coverage report [#282](https://github.com/salute-developers/plasma/pull/282) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Jan 17 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add builder [#258](https://github.com/salute-developers/plasma/pull/258) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add github workflow for deploy theme-builder on server [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add pages and components for theme-builder [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add create react app [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Jan 13 2023)

#### 🚀 Enhancement

- feat(plasma-theme-builder): Add github workflow for deploy theme-builder on server [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add pages and components for theme-builder [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-theme-builder): Add create react app [#254](https://github.com/salute-developers/plasma/pull/254) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Jan 11 2023)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.116.0`
  - feat(plasma-icons): Add `CloudUpload`, `Record` and `Recording` icons [#277](https://github.com/salute-developers/plasma/pull/277) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Jan 11 2023)

#### 🐛 Bug Fix

- ci: performance tests [#274](https://github.com/salute-developers/plasma/pull/274) ([@akhdrv](https://github.com/akhdrv))
- ci: fix react 17 tests [#275](https://github.com/salute-developers/plasma/pull/275) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/perftool@0.2.1`
  - fix(perftool): default config values fix [#274](https://github.com/salute-developers/plasma/pull/274) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/plasma-ui@1.154.1`
  - chore(plasma-ui): update perftool script, config [#274](https://github.com/salute-developers/plasma/pull/274) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# (Mon Dec 26 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.154.0`
  - chore(plasma-ui): add perftool to deps [#268](https://github.com/salute-developers/plasma/pull/268) ([@akhdrv](https://github.com/akhdrv))
- `@salutejs/perftool@0.2.0`
  - feat(perftool): add perftool [#268](https://github.com/salute-developers/plasma/pull/268) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# (Mon Dec 26 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.151.0`
  - feat(plasma-web): [cypress] processing disabled option [#269](https://github.com/salute-developers/plasma/pull/269) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): [a11y] processing disabled option [#269](https://github.com/salute-developers/plasma/pull/269) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Mon Dec 26 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.32.0`
  - fix(plasma-tokens): Fix onDarkTextPrimary token [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Update template token colors for ios-swift platform [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Add tokens generate fot ios-swift platform [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.32.0`
  - fix(plasma-tokens): Fix react-native template [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-tokens): Fix kotlin template [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-typo@0.29.0`
  - fix(plasma-typo): Fix font-weight for h1-bold token [#226](https://github.com/salute-developers/plasma/pull/226) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Dec 22 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.149.0`
  - feat(plasma-web): set "Button" type to calendar header [#272](https://github.com/salute-developers/plasma/pull/272) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): set "Button" type to select button from Select [#272](https://github.com/salute-developers/plasma/pull/272) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.122.0`
  - feat(plasma-b2c): set "Button" type to delete button from AudioPlayer [#272](https://github.com/salute-developers/plasma/pull/272) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): set "Button" type to delete, select button from Gallery [#272](https://github.com/salute-developers/plasma/pull/272) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.87.0`
  - feat(plasma-core): handling button type [#272](https://github.com/salute-developers/plasma/pull/272) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Dec 22 2022)

#### 🚀 Enhancement

- chore(plasma-b2c): add snapshots [#244](https://github.com/salute-developers/plasma/pull/244) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.121.0`
  - feat(plasma-b2c): add cypress test [#244](https://github.com/salute-developers/plasma/pull/244) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-b2c): update core snapshots [#244](https://github.com/salute-developers/plasma/pull/244) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.87.0`
  - fix(plasma-core): revert changes in test [#244](https://github.com/salute-developers/plasma/pull/244) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.121.0`, `@salutejs/plasma-core@1.87.0`
  - fix(plasma-b2c): correct processing "Text Field" view [#244](https://github.com/salute-developers/plasma/pull/244) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Dec 21 2022)

#### 🐛 Bug Fix

- chore(plasma-temple): update snapshots [#271](https://github.com/salute-developers/plasma/pull/271) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-ui): update snapshots [#271](https://github.com/salute-developers/plasma/pull/271) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.151.1`
  - fix(plasma-ui): hidden unnecessary pseudo-placeholder [#271](https://github.com/salute-developers/plasma/pull/271) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Dec 15 2022)

#### 🚀 Enhancement

- chore(plasma-b2c): update snapshots [#266](https://github.com/salute-developers/plasma/pull/266) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.148.0`
  - feat(plasma-web): add overlay [#266](https://github.com/salute-developers/plasma/pull/266) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-web): update snapshots [#266](https://github.com/salute-developers/plasma/pull/266) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Dec 15 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens-utils@0.15.0`
  - feat(plasma-tokens-utils): describing type for overlay tokens [#265](https://github.com/salute-developers/plasma/pull/265) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.31.0`
  - fix(plasma-tokens): update tokens value [#265](https://github.com/salute-developers/plasma/pull/265) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-b2b@1.7.0`
  - fix(plasma-tokens-b2b): update tokens value [#265](https://github.com/salute-developers/plasma/pull/265) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-b2c@0.16.0`
  - fix(plasma-tokens-b2c): update tokens value [#265](https://github.com/salute-developers/plasma/pull/265) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-web@1.22.0`
  - fix(plasma-tokens-web): update tokens value [#265](https://github.com/salute-developers/plasma/pull/265) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Dec 14 2022)

#### 🚀 Enhancement

- chore(plasma-b2c): update snapshot [#260](https://github.com/salute-developers/plasma/pull/260) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.118.0`
  - feat(plasma-b2c): add a11y for Editable component [#252](https://github.com/salute-developers/plasma/pull/252) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.146.0`
  - feat(plasma-web): add accent color [#260](https://github.com/salute-developers/plasma/pull/260) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): update cypress test/snapshots [#260](https://github.com/salute-developers/plasma/pull/260) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens@1.30.0`, `@salutejs/plasma-tokens-utils@0.14.0`
  - feat(plasma-tokens,plasma-tokens-utils): Add remove prefix from data themes [#217](https://github.com/salute-developers/plasma/pull/217) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.30.0`
  - feat(plasma-tokens): Add sbermarket tenants [#217](https://github.com/salute-developers/plasma/pull/217) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-b2b@1.6.0`
  - feat(plasma-tokens-b2b): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-b2c@0.15.0`
  - feat(plasma-tokens-b2c): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-web@1.21.0`
  - feat(plasma-tokens-web): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-b2c): update button snapshots [#259](https://github.com/salute-developers/plasma/pull/259) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.85.0`, `@salutejs/plasma-ui@1.150.0`
  - fix(plasma-core): Toast hiding with react-18 [#261](https://github.com/salute-developers/plasma/pull/261) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.118.0`
  - fix(plasma-b2c): set correct button font size when change size [#259](https://github.com/salute-developers/plasma/pull/259) ([@Yakutoc](https://github.com/Yakutoc))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-b2c@1.118.0`, `@salutejs/plasma-core@1.85.0`, `@salutejs/plasma-icons@1.112.0`, `@salutejs/plasma-temple@1.117.0`, `@salutejs/plasma-tokens-b2b@1.6.0`, `@salutejs/plasma-tokens-b2c@0.15.0`, `@salutejs/plasma-tokens-web@1.21.0`, `@salutejs/plasma-tokens@1.30.0`, `@salutejs/plasma-ui@1.150.0`, `@salutejs/plasma-web@1.146.0`, `@salutejs/plasma-cy-utils@0.36.0`, `@salutejs/plasma-sb-utils@0.83.0`, `@salutejs/plasma-tokens-android@2.37.0`, `@salutejs/plasma-tokens-ios-swift@2.37.0`
  - Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Dec 08 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.29.0`
  - feat(plasma-tokens): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-b2b@1.5.0`
  - feat(plasma-tokens-b2b): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-b2c@0.14.0`
  - feat(plasma-tokens-b2c): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-tokens-web@1.20.0`
  - feat(plasma-tokens-web): add overlay tokens [#256](https://github.com/salute-developers/plasma/pull/256) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-b2c): update button snapshots [#259](https://github.com/salute-developers/plasma/pull/259) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.117.0`
  - fix(plasma-b2c): set correct button font size when change size [#259](https://github.com/salute-developers/plasma/pull/259) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Dec 07 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.148.0`
  - feat(plasma-ui): update sb-addon-performance version fixing measures and adding React 18 support [#249](https://github.com/salute-developers/plasma/pull/249) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# (Fri Dec 02 2022)

#### 🐛 Bug Fix

- chore(plasma-ui): [cypress] update snapshots [#245](https://github.com/salute-developers/plasma/pull/245) ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-ui, plasma-web, plasma-temple): change links for new site [#238](https://github.com/salute-developers/plasma/pull/238) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-ui@1.147.5`
  - fix(plasma-ui): hide controls when disabled/isSingleItem [#245](https://github.com/salute-developers/plasma/pull/245) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Dec 01 2022)

#### 🐛 Bug Fix

- chore(plasma-b2c): [cypress] update snapshots [#253](https://github.com/salute-developers/plasma/pull/253) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-web): [cypress] update snapshots [#253](https://github.com/salute-developers/plasma/pull/253) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-ui): [cypress] update snapshots [#253](https://github.com/salute-developers/plasma/pull/253) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-temple@1.114.5`
  - fix(plasma-temple): skip tests for Cart [#251](https://github.com/salute-developers/plasma/pull/251) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.83.2`
  - fix(plasma-core): centering content [#253](https://github.com/salute-developers/plasma/pull/253) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Nov 30 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.147.3`
  - fix(plasma-ui): fix using sb-addon-performance usages for future storybook versions [#248](https://github.com/salute-developers/plasma/pull/248) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# (Fri Nov 25 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.114.3`
  - fixup! fix(plasma-temple): improve type-coverage [#239](https://github.com/salute-developers/plasma/pull/239) ([@Yeti-or](https://github.com/Yeti-or))
  - fix(plasma-temple): improve type-coverage of GP:Carousel [#239](https://github.com/salute-developers/plasma/pull/239) ([@Yeti-or](https://github.com/Yeti-or))
  - fix(plasma-temple): improve type-coverage [#239](https://github.com/salute-developers/plasma/pull/239) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Nov 24 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.147.2`
  - fix(plasma-ui): improve type-coverage [#234](https://github.com/salute-developers/plasma/pull/234) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Nov 24 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-cy-utils@0.34.3`
  - fix(plasma-cy-utils): improve type-coverage [#240](https://github.com/salute-developers/plasma/pull/240) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Nov 24 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.147.0`
  - feat(plasma-ui): [cypress] update tests [#229](https://github.com/salute-developers/plasma/pull/229) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): processing price periodicity [#229](https://github.com/salute-developers/plasma/pull/229) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- docs(plasma-ui-docs): Card: fix images [#243](https://github.com/salute-developers/plasma/pull/243) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.83.0`
  - fix(plasma-core): improve type-coverage [#231](https://github.com/salute-developers/plasma/pull/231) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Nov 24 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.143.2`
  - fix(plasma-web): improve type-coverage [#235](https://github.com/salute-developers/plasma/pull/235) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Nov 24 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.115.1`
  - fix(plasma-b2c): improve type-coverage [#237](https://github.com/salute-developers/plasma/pull/237) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.82.1`
  - docs(plasma-core): Skeleton: fix typo [#241](https://github.com/salute-developers/plasma/pull/241) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Nov 23 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.143.0`
  - feat(plasma-web): [cypress] update tests [#222](https://github.com/salute-developers/plasma/pull/222) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-web): add a11y support [#222](https://github.com/salute-developers/plasma/pull/222) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-icons@1.109.0`
  - feat(plasma-icons): add aria-hidden attr [#222](https://github.com/salute-developers/plasma/pull/222) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- ci: fix typo s3 versions [#227](https://github.com/salute-developers/plasma/pull/227) ([@kayman233](https://github.com/kayman233))
- docs(plasma-ui, plasma-web): fix docs typos [#225](https://github.com/salute-developers/plasma/pull/225) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Nov 17 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.82.0`
  - feat(plasma-core/plasma-ui): [cypress] processing periodicity [#220](https://github.com/salute-developers/plasma/pull/220) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-core): add price periodicity [#220](https://github.com/salute-developers/plasma/pull/220) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.145.0`
  - feat(plasma-ui): processing price periodicity [#220](https://github.com/salute-developers/plasma/pull/220) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Nov 17 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.113.0`
  - feat(plasma-b2c): processing slider keyboard support by cypress [#218](https://github.com/salute-developers/plasma/pull/218) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): add support a11y for Slider [#218](https://github.com/salute-developers/plasma/pull/218) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- ci: fix actions versionate and clean [#223](https://github.com/salute-developers/plasma/pull/223) ([@kayman233](https://github.com/kayman233))
- ci: docs to s3 [#215](https://github.com/salute-developers/plasma/pull/215) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Nov 16 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.111.1`
  - fix(plasma-temple): `getAssistantRef` returns correct value [#221](https://github.com/salute-developers/plasma/pull/221) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Mon Nov 14 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.111.0`
  - feat(plasma-temple): one more `AssistantProvider` [#213](https://github.com/salute-developers/plasma/pull/213) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Wed Nov 09 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.107.0`
  - feat(plasma-icons): Add new call icons [#216](https://github.com/salute-developers/plasma/pull/216) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Nov 09 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.28.2`
  - fix(plasma-tokens): Fix gradient generator for iOS platform [#211](https://github.com/salute-developers/plasma/pull/211) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Nov 08 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.81.1`, `@salutejs/plasma-typo@0.28.1`
  - feat(plasma-typo,plasma-core): Add duplicate some mixins for interrupt cycle in dependencies [#214](https://github.com/salute-developers/plasma/pull/214) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-typo@0.28.1`
  - chore(plasma-typo): Extract plasma-core and styled-components to dev deps [#212](https://github.com/salute-developers/plasma/pull/212) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Nov 03 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.143.2`
  - fix(plasma-ui): fix Pickers for React 18 [#207](https://github.com/salute-developers/plasma/pull/207) ([@akhdrv](https://github.com/akhdrv))

#### Authors: 1

- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))

---

# (Thu Nov 03 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.82.0`
  - feat(plasma-b2c): handle TextField size by cypress test [#210](https://github.com/salute-developers/plasma/pull/210) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-b2c@1.111.0`
  - feat(plasma-b2c): handle text field size [#210](https://github.com/salute-developers/plasma/pull/210) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-b2c): update TextField snapshots [#210](https://github.com/salute-developers/plasma/pull/210) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Nov 03 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.143.1`
  - fix(plasma-ui): Increase area for touch in `Sheet` component [#208](https://github.com/salute-developers/plasma/pull/208) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Nov 03 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.143.0`
  - feat(plasma-ui): Add ref for `TabItem` component [#209](https://github.com/salute-developers/plasma/pull/209) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Nov 02 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.110.0`
  - feat(plasma-b2c): handle focus state by cy test [#205](https://github.com/salute-developers/plasma/pull/205) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): add accent color for slider thumb when focus [#205](https://github.com/salute-developers/plasma/pull/205) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Mon Oct 31 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.28.0`
  - feat(plasma-tokens): Add typography generator [#198](https://github.com/salute-developers/plasma/pull/198) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Oct 31 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.108.2`, `@salutejs/plasma-web@1.139.2`
  - test(plasma-web,plasma-b2c): Update snapshots and test for `Radiobox` and `Checkbox` components [#128](https://github.com/salute-developers/plasma/pull/128) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web,plasma-b2c): Add redesign `Radiobox` and `Checkbox` components [#128](https://github.com/salute-developers/plasma/pull/128) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Oct 31 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens-utils@0.13.1`
  - fix(plasma-tokens-utils): Add support origin values in theme schemas [#203](https://github.com/salute-developers/plasma/pull/203) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.27.1`
  - fix(plasma-tokens): Fix template generator for kotlin [#203](https://github.com/salute-developers/plasma/pull/203) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-tokens): Fix `sbermarket` theme [#203](https://github.com/salute-developers/plasma/pull/203) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Oct 31 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.141.0`
  - feat(plasma-ui): add storybook wrapper with margin top [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-web@1.139.0`
  - feat(plasma-web): reset Tabs gap [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.80.0`
  - feat(plasma-core): add tabs gap [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-b2c): update snapshots [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-ui): update snapshots [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-core): update snapshots [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-ui@1.141.0`
  - fix(plasma-ui): handle tabs gap [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Fri Oct 28 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.106.3`
  - fix(plasma-temple): update `HeroSliderDots` component [#202](https://github.com/salute-developers/plasma/pull/202) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Oct 27 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.140.1`
  - fix(plasma-ui): delete unnecessary max-height property [#201](https://github.com/salute-developers/plasma/pull/201) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Oct 27 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.106.1`
  - fix(plasma-temple): fix warnings and rerender of HeroSlider [#196](https://github.com/salute-developers/plasma/pull/196) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Oct 27 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.140.0`
  - fix(plasma-ui): handle "Spinner" size [#193](https://github.com/salute-developers/plasma/pull/193) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): pass "deviceScale" prop for default spinner [#193](https://github.com/salute-developers/plasma/pull/193) ([@Yakutoc](https://github.com/Yakutoc))
- `@salutejs/plasma-core@1.79.0`
  - feat(plasma-core): handle "Spinner" size [#193](https://github.com/salute-developers/plasma/pull/193) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-core): pass ThemeProviderContextBase for Button [#193](https://github.com/salute-developers/plasma/pull/193) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Oct 27 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.139.0`
  - feat(plasma-ui): pass product card text as ReactNode [#180](https://github.com/salute-developers/plasma/pull/180) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Oct 27 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-icons@1.103.1`, `@salutejs/plasma-sb-utils@0.76.1`
  - chore(plasma-icons,plasma-sb-utils): Bump plasma-core version [#200](https://github.com/salute-developers/plasma/pull/200) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Oct 25 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-typo@0.25.0`
  - feat(plasma-typo): Add `sbermaket` archetype [#199](https://github.com/salute-developers/plasma/pull/199) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-typo): Add tokens for new typo [#199](https://github.com/salute-developers/plasma/pull/199) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Oct 21 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.105.0`
  - feat(plasma-b2c): handling tab focus by cypress tests [#186](https://github.com/salute-developers/plasma/pull/186) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-b2c): handling tab focus [#186](https://github.com/salute-developers/plasma/pull/186) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Oct 20 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): Add Calendar (screenshots) [#191](https://github.com/salute-developers/plasma/pull/191) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.104.0`, `@salutejs/plasma-web@1.136.0`
  - feat(plasma-b2c): Add Calendar [#191](https://github.com/salute-developers/plasma/pull/191) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Oct 19 2022)

#### 🐛 Bug Fix

- test(plasma-web): Update snapshots for `Calendar` component [#192](https://github.com/salute-developers/plasma/pull/192) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.135.1`
  - fix(plasma-web): Fix color for header in `Calendar` component [#192](https://github.com/salute-developers/plasma/pull/192) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Oct 19 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.27.0`
  - feat(plasma-tokens): Add `sberprime` theme [#182](https://github.com/salute-developers/plasma/pull/182) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.27.0`
  - fix(plasma-tokens): Fix theme generator [#182](https://github.com/salute-developers/plasma/pull/182) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Oct 18 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.102.4`
  - fix(plasma-b2c): Button type=button [#190](https://github.com/salute-developers/plasma/pull/190) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Oct 18 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.134.3`
  - fix(plasma-web): delete notification scrollbar [#189](https://github.com/salute-developers/plasma/pull/189) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Oct 13 2022)

#### 🐛 Bug Fix

- chore: lamaEats mantain platform-test [#172](https://github.com/salute-developers/plasma/pull/172) ([@Yeti-or](https://github.com/Yeti-or))
- chore: add @Yakutoc to CODEOWNERS [#172](https://github.com/salute-developers/plasma/pull/172) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update CODEOWNERS [#172](https://github.com/salute-developers/plasma/pull/172) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple@1.102.3`
  - fix(plasma-temple): `HeroSlider` improve api [#188](https://github.com/salute-developers/plasma/pull/188) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon Oct 10 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.76.2`
  - fix(plasma-ui): fixes CarouselLite short track scroll bug [#184](https://github.com/salute-developers/plasma/pull/184) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### Authors: 1

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# (Mon Oct 10 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.76.1`
  - fix(plasma-core): Fix wrapper props for `Button` component [#183](https://github.com/salute-developers/plasma/pull/183) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Oct 10 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.102.0`
  - feat(plasma-temple): update desc [#181](https://github.com/salute-developers/plasma/pull/181) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): add `renderText` prop for `StateLayout` component [#168](https://github.com/salute-developers/plasma/pull/168) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-b2c@1.102.0`, `@salutejs/plasma-ui@1.136.0`, `@salutejs/plasma-web@1.134.0`
  - docs(plasma-ui-docs,plasma-web-docs): Add example with loader for `Button` [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.102.0`, `@salutejs/plasma-core@1.76.0`, `@salutejs/plasma-ui@1.136.0`, `@salutejs/plasma-web@1.134.0`
  - feat(plasma-core): Add loader prop for `Button` component [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.136.0`
  - feat(plasma-ui): processing multiple badge [#175](https://github.com/salute-developers/plasma/pull/175) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore(plasma-temple): update snapshots [#171](https://github.com/salute-developers/plasma/pull/171) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-core@1.76.0`
  - test(plasma-b2c,plasma-ui,plasma-web): Add test and snapshot for `Button` component [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.102.0`
  - chore(plasma-temple): waiting focus state on button [#171](https://github.com/salute-developers/plasma/pull/171) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 3

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Oct 06 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.135.0`
  - feat(plasma-ui): processing multiple badge [#175](https://github.com/salute-developers/plasma/pull/175) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Thu Oct 06 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.134.0`
  - feat(plasma-ui): handle "Sheet" component transition [#178](https://github.com/salute-developers/plasma/pull/178) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- `@salutejs/plasma-icons@1.101.0`, `@salutejs/plasma-sb-utils@0.74.0`
  - chore(plasma-sb-utils): bump @salutejs/plasma-core version [#179](https://github.com/salute-developers/plasma/pull/179) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Oct 05 2022)

#### 🚀 Enhancement

- test(plasma-b2c,plasma-tokens-b2b): Update snapshots for responsive typography [#129](https://github.com/salute-developers/plasma/pull/129) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-typo@0.22.0`
  - feat(plasma-typo): typo by archetype [#129](https://github.com/salute-developers/plasma/pull/129) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-ui@1.133.0`
  - feat(plasma-ui): use useThemeContext hook for Carousel.stories [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): use useThemeContext hook for Picker [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): use useThemeContext hook for Slider [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): handle focus for when device kind is "sberbox" [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): handle readonly state when device kind is 'sberBox [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): add useDeviceKind hook [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): add useThemeContext hook [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 3

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Oct 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.132.0`
  - feat(plasma-ui): use useThemeContext hook for Carousel.stories [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): use useThemeContext hook for Picker [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): use useThemeContext hook for Slider [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): handle focus for when device kind is "sberbox" [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): handle readonly state when device kind is 'sberBox [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): add useDeviceKind hook [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))
  - feat(plasma-ui): add useThemeContext hook [#177](https://github.com/salute-developers/plasma/pull/177) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Wed Oct 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.99.0`
  - feat(plasma-b2c): passed event as second optional arguments for onChange/onUpload methods [#176](https://github.com/salute-developers/plasma/pull/176) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# (Tue Oct 04 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.131.0`
  - feat(plasma-web): Add keyboard navigation for `Calendar` component [#117](https://github.com/salute-developers/plasma/pull/117) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.131.0`
  - fix(plasma-web): Fix behavior for select month and year [#117](https://github.com/salute-developers/plasma/pull/117) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Oct 03 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.26.0`
  - feat(plasma-tokens): Add gradient to `sbermarket` theme [#170](https://github.com/salute-developers/plasma/pull/170) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Add gradient generators [#170](https://github.com/salute-developers/plasma/pull/170) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Sep 28 2022)

#### 🚀 Enhancement

- chore: remove theme artifacts from workflow [#166](https://github.com/salute-developers/plasma/pull/166) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.25.0`
  - feat(plasma-tokens): Add `sbermarket` theme [#166](https://github.com/salute-developers/plasma/pull/166) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-tokens): Add customs theme generators [#166](https://github.com/salute-developers/plasma/pull/166) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Sep 26 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.72.2`, `@salutejs/plasma-ui@1.129.2`
  - fix(plasma-ui): scroll carousel on touch devices [#169](https://github.com/salute-developers/plasma/pull/169) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- `@salutejs/plasma-temple@1.95.3`
  - fix(plasma-temple): prevent `focusin` event [#163](https://github.com/salute-developers/plasma/pull/163) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Tue Sep 20 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.95.2`
  - fix(plasma-temple): prevent `focusin` event [#163](https://github.com/salute-developers/plasma/pull/163) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Tue Sep 20 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.72.1`
  - fix(plasma-ui): restore scroll in translateToIndex [#162](https://github.com/salute-developers/plasma/pull/162) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### Authors: 1

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# (Thu Sep 15 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.129.0`
  - feat(plasma-ui): Add b2e theme to storybook [#165](https://github.com/salute-developers/plasma/pull/165) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.24.0`
  - feat(plasma-tokens): Add b2e theme [#165](https://github.com/salute-developers/plasma/pull/165) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Sep 14 2022)

#### 🚀 Enhancement

- test(plasma-ui): Update snapshots for components [#135](https://github.com/salute-developers/plasma/pull/135) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.23.0`
  - feat(plasma-tokens): Replace theme colors for button focus to primary in token [#135](https://github.com/salute-developers/plasma/pull/135) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.128.0`
  - refactor(plasma-ui): Add addFocus mixin for `Checkbox` and `Radiobox` components [#135](https://github.com/salute-developers/plasma/pull/135) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Sep 14 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.126.1`
  - fix(plasma-web): Headline5 tag h5 [#164](https://github.com/salute-developers/plasma/pull/164) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Sep 13 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.70.0`, `@salutejs/plasma-ui@1.127.0`
  - feat(plasma-ui): add CarouselLite component [#155](https://github.com/salute-developers/plasma/pull/155) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### 🐛 Bug Fix

- style: exhaustive-deps warn issue [#161](https://github.com/salute-developers/plasma/pull/161) ([@KateKate](https://github.com/KateKate))

#### Authors: 2

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))

---

# (Mon Sep 12 2022)

#### 🐛 Bug Fix

- style: exhaustive-deps warn [#158](https://github.com/salute-developers/plasma/pull/158) ([@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-ui@1.126.1`
  - fix(plasma-ui): Fix component Sheet [#159](https://github.com/salute-developers/plasma/pull/159) (mokazakov@sberbank.ru)

#### Authors: 2

- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- Misha Kazakov (mokazakov@sberbank.ru)

---

# (Thu Sep 08 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): save ios & android tokens to release assets [#136](https://github.com/salute-developers/plasma/pull/136) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-tokens@1.22.0`
  - feat(plasma-tokens): save themes artifacts [#136](https://github.com/salute-developers/plasma/pull/136) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Tue Sep 06 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.91.1`, `@salutejs/plasma-web@1.124.1`
  - fix(plasma-web): Extract document in useEffect for next.js rendering [#154](https://github.com/salute-developers/plasma/pull/154) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Sep 01 2022)

#### 🚀 Enhancement

- docs(plasma-web-docs): Update docs for `TextArea` component [#148](https://github.com/salute-developers/plasma/pull/148) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-tokens@1.21.0`
  - feat(plasma-tokens): update html view [#122](https://github.com/salute-developers/plasma/pull/122) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-tokens): update theme cli setup [#122](https://github.com/salute-developers/plasma/pull/122) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-tokens): generate html view [#122](https://github.com/salute-developers/plasma/pull/122) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-web@1.124.0`
  - feat(plasma-web): Add right and left helper for `TextArea` [#148](https://github.com/salute-developers/plasma/pull/148) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- test(plasma-b2c): Update snapshot for `TextArea` component [#148](https://github.com/salute-developers/plasma/pull/148) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.91.0`
  - refactor(plasma-b2c): Small refactor for `TextArea` component [#148](https://github.com/salute-developers/plasma/pull/148) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.68.0`
  - test(plasma-web): Update tests and snapshots for `TextArea` [#148](https://github.com/salute-developers/plasma/pull/148) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Sep 01 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.124.3`
  - fix(plasma-ui): Add sizes style for responsive typo in `DeviceThemeProvider` [#153](https://github.com/salute-developers/plasma/pull/153) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Sep 01 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.124.2`
  - fix(plasma-ui): Replaced onChange handler to useEffect for `TimePicker` component [#151](https://github.com/salute-developers/plasma/pull/151) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Aug 30 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.124.1`
  - test(plasma-ui): Add test and snapshot for `TimePicker` component [#141](https://github.com/salute-developers/plasma/pull/141) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-ui): Fix deps for useIsomorphicLayoutEffect [#141](https://github.com/salute-developers/plasma/pull/141) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Aug 30 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.124.0`
  - feat(plasma-ui): Add options for eventListeners in useRemoteListener hook [#146](https://github.com/salute-developers/plasma/pull/146) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Aug 29 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.123.1`
  - test(plasma-web,plasma-b2c): Add test and snapshot for `Modal` component [#150](https://github.com/salute-developers/plasma/pull/150) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-web): Fix default open state for `Modal` component [#150](https://github.com/salute-developers/plasma/pull/150) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.123.1`
  - docs(plasma-ui-docs): Update docs and stories for `HeaderMinimize` and `HeaderBack` components [#142](https://github.com/salute-developers/plasma/pull/142) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Aug 29 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.67.0`
  - feat(plasma-core): pass srcset props to img [#139](https://github.com/salute-developers/plasma/pull/139) ([@Gerpea](https://github.com/Gerpea))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.123.0`
  - fix(plasma-ui): Remove hover effect for touch devices [#147](https://github.com/salute-developers/plasma/pull/147) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- German Cyganov ([@Gerpea](https://github.com/Gerpea))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Aug 29 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.122.0`
  - feat(plasma-web): Add forwardRef for `Tooltip` component [#144](https://github.com/salute-developers/plasma/pull/144) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.122.0`
  - feat(plasma-ui): Add forwardRef for `Header`,`NeuHeader` and `Cell` components [#143](https://github.com/salute-developers/plasma/pull/143) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Aug 18 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.20.0`
  - feat(plasma-tokens): generate android and ios tokens [#121](https://github.com/salute-developers/plasma/pull/121) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Thu Aug 18 2022)

#### 🐛 Bug Fix

- docs: Readme: fix broken links [#138](https://github.com/salute-developers/plasma/pull/138) ([@Yeti-or](https://github.com/Yeti-or))
- docs(plasma-web-docs): Toast: wrong pkg imports [#137](https://github.com/salute-developers/plasma/pull/137) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.120.3`
  - fix(plasma-ui): Replace useLayoutEffect to useIsomorphicLayoutEffect for `Slider` and `Marquee` [#132](https://github.com/salute-developers/plasma/pull/132) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Aug 17 2022)

#### 🐛 Bug Fix

- fix(plasmas-website): Fix case sensitive for `Search` form [#134](https://github.com/salute-developers/plasma/pull/134) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Aug 17 2022)

#### 🐛 Bug Fix

- test(plasma-web): Update snapshots for `TextArea` component [#133](https://github.com/salute-developers/plasma/pull/133) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.120.2`
  - fix(plasma-web): Add primary color for `Field` component [#133](https://github.com/salute-developers/plasma/pull/133) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Aug 17 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.120.2`
  - fix(plasma-ui): Add margin for not last button [#131](https://github.com/salute-developers/plasma/pull/131) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Aug 16 2022)

#### 🐛 Bug Fix

- docs(plasma-web-docs): Update docs for `Card` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
- docs(plasma-web-docs): Add docs for `Cell` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
- ci: fix expression with closed brackers [#124](https://github.com/salute-developers/plasma/pull/124) ([@neretin-trike](https://github.com/neretin-trike))
- ci: fix release race condition [#123](https://github.com/salute-developers/plasma/pull/123) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.87.1`, `@salutejs/plasma-web@1.120.1`
  - fix(plasma-web): Add overflow hidden if modal amount not null for `Modal` component [#130](https://github.com/salute-developers/plasma/pull/130) ([@neretin-trike](https://github.com/neretin-trike))
  - test(plasma-web,plasma-b2c): Add test and snapshot for `Cell` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web,plasma-b2c): Add `Cell` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.120.1`
  - test(plasma-web,plasma-b2c): Add tests and snapshots for `Card` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-web): add storybook [#126](https://github.com/salute-developers/plasma/pull/126) ([@Gerpea](https://github.com/Gerpea))
  - fix(plasma-web): fix modal height on ios safari [#126](https://github.com/salute-developers/plasma/pull/126) ([@Gerpea](https://github.com/Gerpea))
- `@salutejs/plasma-b2c@1.87.1`, `@salutejs/plasma-core@1.65.1`, `@salutejs/plasma-web@1.120.1`
  - feat(plasma-web,plasma-b2c): Add cover, background and coverGradient for `Card` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.87.1`
  - ci(plasma-b2c): fix storybook build [#125](https://github.com/salute-developers/plasma/pull/125) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- German Cyganov ([@Gerpea](https://github.com/Gerpea))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Aug 10 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.19.0`
  - feat(plasma-tokens): generate custom theme tokens [#119](https://github.com/salute-developers/plasma/pull/119) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-tokens@1.19.0`, `@salutejs/plasma-tokens-utils@0.13.0`
  - feat(plasma-tokens): theme creator [#115](https://github.com/salute-developers/plasma/pull/115) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.65.0`
  - chore(plasma-core): Remove `Grid` component and `mediaQuery` utils [#120](https://github.com/salute-developers/plasma/pull/120) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.87.0`, `@salutejs/plasma-ui@1.120.0`, `@salutejs/plasma-web@1.120.0`
  - feat(plasma-web,plasma-ui): Moved `Grid` component from plasma-core [#120](https://github.com/salute-developers/plasma/pull/120) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Jul 29 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.119.1`
  - test(plasma-web,plasma-b2c): Update test and snapshots for key navigatation in `Select` component [#110](https://github.com/salute-developers/plasma/pull/110) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-web): Fix behavior for `Dropdown` component on hover item [#110](https://github.com/salute-developers/plasma/pull/110) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jul 28 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.119.0`
  - feat(plasma-ui): Add accessability story for `Carousel` component [#104](https://github.com/salute-developers/plasma/pull/104) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.119.0`
  - fix(plasma-web): Fix accessability story for `Carousel` component [#104](https://github.com/salute-developers/plasma/pull/104) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Jul 25 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.64.4`, `@salutejs/plasma-ui@1.118.4`
  - fix(plasma-ui): removed FC type [#97](https://github.com/salute-developers/plasma/pull/97) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 1

- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# (Mon Jul 25 2022)

#### 🐛 Bug Fix

- `@salutejs/cra-template-plasma-basic-template@2.2.2`, `@salutejs/cra-template-plasma-shop-template@2.2.2`
  - fix(plasma-shop-template): update plasma packages [#108](https://github.com/salute-developers/plasma/pull/108) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Fri Jul 22 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.64.3`, `@salutejs/plasma-ui@1.118.3`, `@salutejs/plasma-web@1.118.3`
  - test(plasma-core,plasma-ui,plasma-web): Update tests for `Tab` component [#106](https://github.com/salute-developers/plasma/pull/106) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.64.3`
  - fix(plasma-core): Replace tag to div in `TabItem` for `Tab` component [#106](https://github.com/salute-developers/plasma/pull/106) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Jul 22 2022)

#### 🚀 Enhancement

- test(plasma-b2c): Update snapshots for `TextArea` component [#107](https://github.com/salute-developers/plasma/pull/107) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.85.0`
  - feat(plasma-b2c): Add contentRight for `TextArea` component [#107](https://github.com/salute-developers/plasma/pull/107) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jul 21 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.118.2`
  - fix(plasma-ui): Fix visible border in Input for `Checkbox` and `RadioBox` [#105](https://github.com/salute-developers/plasma/pull/105) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Jul 20 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.64.2`
  - fix(plasma-core): fixed skeleton performance issues [#101](https://github.com/salute-developers/plasma/pull/101) (vanxellshing24@gmail.com)

#### Authors: 1

- rpg59 (vanxellshing24@gmail.com)

---

# (Wed Jul 20 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.118.1`
  - fix(plasma-web): Fix border visible for `TextField` and `TextArea` components [#103](https://github.com/salute-developers/plasma/pull/103) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Jul 19 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.90.0`
  - feat(plasma-icons): Add `LocationFill` icon [#102](https://github.com/salute-developers/plasma/pull/102) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix(plasma-ui-docs): drop Components creation [#75](https://github.com/salute-developers/plasma/pull/75) ([@KateKate](https://github.com/KateKate))

#### Authors: 2

- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Jul 15 2022)

#### 🐛 Bug Fix

- fix(plasma-ui-docs): drop Components creation [#75](https://github.com/salute-developers/plasma/pull/75) ([@KateKate](https://github.com/KateKate))

#### Authors: 1

- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))

---

# (Fri Jul 15 2022)

#### 🐛 Bug Fix

- docs(plasma-temple): improve forms code example block [#100](https://github.com/salute-developers/plasma/pull/100) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-b2c@1.83.2`, `@salutejs/plasma-core@1.64.1`
  - fix(plasma-core): fix autoscroll with row placement [#95](https://github.com/salute-developers/plasma/pull/95) ([@Gerpea](https://github.com/Gerpea))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# (Thu Jul 14 2022)

#### 🐛 Bug Fix

- fix(plasma-temple): fix build [#99](https://github.com/salute-developers/plasma/pull/99) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- fix(plasma-temple): fix scenario docs link [#99](https://github.com/salute-developers/plasma/pull/99) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- docs(plasma-temple): notest about using Next.js [#98](https://github.com/salute-developers/plasma/pull/98) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Wed Jul 13 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.117.1`
  - fix(plasma-ui): fix header navigation button animation [#96](https://github.com/salute-developers/plasma/pull/96) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Fri Jul 08 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.117.1`
  - fix(plasma-web): Calendar inside Popup [#89](https://github.com/salute-developers/plasma/pull/89) ([@Yeti-or](https://github.com/Yeti-or))
  - fix(plasma-web): Add wrappers for click handle in CalendarMonth and CalendarYear [#89](https://github.com/salute-developers/plasma/pull/89) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Jul 08 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.83.1`
  - fix(plasma-temple): mobile gallery gap between items [#93](https://github.com/salute-developers/plasma/pull/93) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - fix(plasma-temple): fix mobile gallery with navigation item right padding [#93](https://github.com/salute-developers/plasma/pull/93) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Thu Jul 07 2022)

#### 🚀 Enhancement

- feat(plasma-b2c): add test for tabs margins [#49](https://github.com/salute-developers/plasma/pull/49) ([@Gerpea](https://github.com/Gerpea))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.83.0`
  - fix(plasma-b2c): fix tabs outer margins [#49](https://github.com/salute-developers/plasma/pull/49) ([@Gerpea](https://github.com/Gerpea))
- `@salutejs/plasma-temple@1.83.0`
  - fix(plasma-temple): fix link to storybook from docs, add ThemeProvider component name [#91](https://github.com/salute-developers/plasma/pull/91) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# (Wed Jul 06 2022)

#### 🚀 Enhancement

- feat(plasma-core): add tests for autoscroll tabs on focus [#66](https://github.com/salute-developers/plasma/pull/66) ([@Gerpea](https://github.com/Gerpea))
- feat(plasma-core): add docs for autoscroll tabs on focus [#66](https://github.com/salute-developers/plasma/pull/66) ([@Gerpea](https://github.com/Gerpea))
- `@salutejs/plasma-b2c@1.82.0`, `@salutejs/plasma-core@1.64.0`
  - feat(plasma-core): add autoscroll tabs on focus [#66](https://github.com/salute-developers/plasma/pull/66) ([@Gerpea](https://github.com/Gerpea))
- `@salutejs/plasma-ui@1.117.0`
  - feat(plasma-ui): Performance addon for ProductCart [#83](https://github.com/salute-developers/plasma/pull/83) ([@SeanSilke](https://github.com/SeanSilke))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.117.0`
  - docs(plasma-web,plasma-web-docs): Add comments and documentation for `Calendar` component [#90](https://github.com/salute-developers/plasma/pull/90) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.117.0`
  - perf(plasma-ui): Performance addon for Tabs [#80](https://github.com/salute-developers/plasma/pull/80) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 3

- German Cyganov ([@Gerpea](https://github.com/Gerpea))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# (Fri Jul 01 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.81.0`
  - feat(plasma-temple): enchance statelayout props [#88](https://github.com/salute-developers/plasma/pull/88) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-ui@1.116.0`
  - feat(plasma-ui): Performance addon for Card [#85](https://github.com/salute-developers/plasma/pull/85) ([@SeanSilke](https://github.com/SeanSilke))
  - feat(plasma-ui): Performance addon for Stepper [#84](https://github.com/salute-developers/plasma/pull/84) ([@SeanSilke](https://github.com/SeanSilke))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.81.0`, `@salutejs/plasma-ui@1.116.0`, `@salutejs/plasma-web@1.116.0`
  - chore(plasma-ui): add performance addon to Carousel component [#74](https://github.com/salute-developers/plasma/pull/74) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- `@salutejs/plasma-ui@1.116.0`
  - chore(plasma-ui): add performance addon to Picker component [#81](https://github.com/salute-developers/plasma/pull/81) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### Authors: 3

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# (Wed Jun 29 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.115.0`
  - feat(plasma-ui): Performance addon for Stepper [#84](https://github.com/salute-developers/plasma/pull/84) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 1

- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# (Wed Jun 29 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.115.0`
  - test(plasma-web): Add tests and snapshots for `Calendar` range [#77](https://github.com/salute-developers/plasma/pull/77) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): Add range mode for `Calendar` component [#77](https://github.com/salute-developers/plasma/pull/77) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.80.0`
  - feat(plasma-temple): grid skeleton [#86](https://github.com/salute-developers/plasma/pull/86) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Jun 29 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.79.0`
  - feat(plasma-temple): grid skeleton [#86](https://github.com/salute-developers/plasma/pull/86) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Wed Jun 29 2022)

#### 🚀 Enhancement

- docs(plasma-ui-docs): CarouselVirtualBasic [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-web@1.114.0`
  - test(plasma-web): Add tests and snapshots for `Calendar` double [#64](https://github.com/salute-developers/plasma/pull/64) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): Add double mode for `Calendar` component [#64](https://github.com/salute-developers/plasma/pull/64) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.63.0`, `@salutejs/plasma-ui@1.114.0`
  - feat(plasma-ui): update @salutejs/use-virtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
  - feat(plasma-ui): drop CarouselColVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
  - feat(plasma-ui): fix Carousel types [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
  - feat(plasma-ui): CarouselColVirtual, CarouselItemVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
  - feat(plasma-ui): CarouselTemplate [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
  - feat(plasma-ui): support of the withUseVirtual in the CarouselCol [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
  - feat(plasma-ui): BasiVirtual wip [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-ui@1.114.0`
  - feat(plasma-ui): simplify BasicVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
  - feat(plasma-ui): disable detectActive for useVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))

#### 🐛 Bug Fix

- fix(plasma-ui-docs): CarouselVirtual in Carousel.mdx [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-ui@1.114.0`
  - docs(plasma-ui): CarouselVirtual with deviceScale [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
  - fix(plasma-ui): CarouselVirtual CR 2 [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
  - fix(plasma-ui): CarouselVirtual CR [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
  - test(plasma-ui): refactor `virtual` test [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
  - test(plasma-ui): Fix `virtual` test [#57](https://github.com/salute-developers/plasma/pull/57) ([@neretin-trike](https://github.com/neretin-trike))
  - test(plasma-ui): attempt to test CarouselVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@1.63.0`, `@salutejs/plasma-ui@1.114.0`
  - docs(plasma-ui): CarouselVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
  - test(plasma-ui): fix export of CarouselItemVirtual, update contributing.md [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### Authors: 3

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Jun 27 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.78.1`
  - fix(plasma-b2c): missing react-draggable dep [#82](https://github.com/salute-developers/plasma/pull/82) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Jun 23 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.113.0`
  - feat(plasma-ui): Tabs render optimization [#76](https://github.com/salute-developers/plasma/pull/76) ([@SeanSilke](https://github.com/SeanSilke))

#### 🐛 Bug Fix

- docs(plasma-web-docs): Update typograhy example for `Card` [#78](https://github.com/salute-developers/plasma/pull/78) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.113.0`
  - test(plasma-web,plasma-b2c): Add new typography in test and update snapshots for `Card` [#78](https://github.com/salute-developers/plasma/pull/78) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.78.0`, `@salutejs/plasma-web@1.113.0`
  - feat(plasma-web, plasma-b2c): Add new typography components in stories for `Card` [#78](https://github.com/salute-developers/plasma/pull/78) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# (Thu Jun 23 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.112.0`
  - feat(plasma-ui): Stepper render optimization [#50](https://github.com/salute-developers/plasma/pull/50) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 1

- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# (Wed Jun 22 2022)

#### 🚀 Enhancement

- docs(plasma-web): Add docs for `Card` component [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.111.0`
  - feat(plasma-ui): ProductCard render optimization [#53](https://github.com/salute-developers/plasma/pull/53) ([@SeanSilke](https://github.com/SeanSilke))
  - feat(plasma-ui): DatePicker render optimization [#56](https://github.com/salute-developers/plasma/pull/56) ([@SeanSilke](https://github.com/SeanSilke))
  - feat(plasma-ui): TimePicker render optimisation [#55](https://github.com/salute-developers/plasma/pull/55) ([@SeanSilke](https://github.com/SeanSilke))
  - docs(plasma-ui): Confirm: simple docs [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))
  - feat(plasma-ui): add Confirm [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.62.0`
  - feat(plasma-core): Add `Card` component [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- test(plasma-web,plasma-b2c): Update snapshots for `Card` component [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.77.0`, `@salutejs/plasma-web@1.112.0`
  - refactor(plasma-b2c,plasma-web): Update `Card` components [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.111.0`
  - test(plasma-ui): Remove ui snapshots and tests; Add linked test [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
  - refactor(plasma-ui): Replace `Card` components to import from plasma-core [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
  - test(plasma-ui): add Confirm tests [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.62.0`
  - test(plasma-core): Add snapshots and tests for `Card` component [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.77.0`, `@salutejs/plasma-core@1.62.0`, `@salutejs/plasma-icons@1.87.0`, `@salutejs/plasma-ui@1.111.0`, `@salutejs/plasma-web@1.112.0`
  - build(plasma-ui): added @babel/plugin-transform-react-constant-elements [#46](https://github.com/salute-developers/plasma/pull/46) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 3

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Jun 17 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.110.0`
  - feat(plasma-ui): TimePicker render optimisation [#55](https://github.com/salute-developers/plasma/pull/55) ([@SeanSilke](https://github.com/SeanSilke))
  - docs(plasma-ui): Confirm: simple docs [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))
  - feat(plasma-ui): add Confirm [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.110.0`
  - test(plasma-ui): add Confirm tests [#58](https://github.com/salute-developers/plasma/pull/58) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Jun 17 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.111.0`
  - test(plasma-web): Add test and snapshot for `Calendar` component [#62](https://github.com/salute-developers/plasma/pull/62) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): Add event and disabled list for `Calendar` component [#62](https://github.com/salute-developers/plasma/pull/62) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Jun 17 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.110.0`
  - test(plasma-web): Add tests and snapshots for `Calendar` component [#51](https://github.com/salute-developers/plasma/pull/51) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): Add `Calendar` component [#51](https://github.com/salute-developers/plasma/pull/51) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Jun 14 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.74.0`
  - test(plasma-b2c): Add test and snapshot for `Card` component [#67](https://github.com/salute-developers/plasma/pull/67) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Add `Card` component [#67](https://github.com/salute-developers/plasma/pull/67) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.109.0`
  - feat(plasma-web): Add `Card` component [#67](https://github.com/salute-developers/plasma/pull/67) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.109.0`
  - test(plasma-web): Add test and snapshot for `Card` component [#67](https://github.com/salute-developers/plasma/pull/67) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jun 09 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.86.0`
  - feat(plasma-icons): Add Sber Icons [#63](https://github.com/salute-developers/plasma/pull/63) ([@andart71](https://github.com/andart71))

#### Authors: 1

- Andrey Loshkarev ([@andart71](https://github.com/andart71))

---

# (Thu Jun 09 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.108.2`
  - fix(plasma-ui): Add min-height in StyledMediaSlot for `ProductCard` component [#61](https://github.com/salute-developers/plasma/pull/61) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.107.1`
  - fix(plasma-web): Remove children from DropdownProps [#60](https://github.com/salute-developers/plasma/pull/60) ([@andart71](https://github.com/andart71))

#### Authors: 2

- Andrey Loshkarev ([@andart71](https://github.com/andart71))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jun 09 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.72.2`
  - fix(plasma-temple): useSpatNavBetweenTargets - fix ssr render [#59](https://github.com/salute-developers/plasma/pull/59) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Tue Jun 07 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.72.1`, `@salutejs/plasma-ui@1.108.1`
  - fix(plasma-b2c, plasma-ui): fix scroll handle position passed to callbacks [#48](https://github.com/salute-developers/plasma/pull/48) ([@Gerpea](https://github.com/Gerpea))

#### Authors: 1

- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# (Tue Jun 07 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.72.0`
  - feat(plasma-temple): fix gallery offset between title and gallery [#42](https://github.com/salute-developers/plasma/pull/42) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): fix gallery paddings [#42](https://github.com/salute-developers/plasma/pull/42) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): gallery skeleton [#42](https://github.com/salute-developers/plasma/pull/42) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.62.0`, `@salutejs/plasma-web@1.107.0`
  - test(plasma-b2c,plasma-web,plasma-ui): Add test and snapshot for `TextField` component [#47](https://github.com/salute-developers/plasma/pull/47) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.72.0`, `@salutejs/plasma-ui@1.108.0`, `@salutejs/plasma-web@1.107.0`
  - fix(plasma-web,plasma-b2c,plasma-ui): Add onChange callback for maxLength check in `TextField` [#47](https://github.com/salute-developers/plasma/pull/47) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Jun 07 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.71.0`
  - feat(plasma-temple): fixes [#52](https://github.com/salute-developers/plasma/pull/52) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Use ScreenProvider and AssistantProvider under the hood of PlasmaApp [#52](https://github.com/salute-developers/plasma/pull/52) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Thu Jun 02 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.60.1`, `@salutejs/plasma-ui@1.106.1`, `@salutejs/plasma-web@1.105.1`
  - fix(plasma-core, plasma-ui, plasma-web): changes the refs array to html collection [#34](https://github.com/salute-developers/plasma/pull/34) (Kruglikov.A.D@sberbank.ru)

#### Authors: 1

- Arseny Kruglikov (Kruglikov.A.D@sberbank.ru)

---

# (Thu May 26 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.106.0`
  - test(plasma-ui): Add test and update snapshots for `ProductCard` component [#3](https://github.com/salute-developers/plasma/pull/3) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-ui): Add new additional field and update design for `ProductCard` component; Add event to callback for `Stepper` [#3](https://github.com/salute-developers/plasma/pull/3) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.105.0`
  - chore(plasma-web): Add SansDisplay typo for storybook [#37](https://github.com/salute-developers/plasma/pull/37) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed May 25 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.69.0`
  - test(plasma-b2c): Add test and snapshot for `PreviewGallery` component [#27](https://github.com/salute-developers/plasma/pull/27) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Add tooltip in item for `PreviewGallery` component [#27](https://github.com/salute-developers/plasma/pull/27) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.104.0`
  - test(plasma-b2c,plasma-web): Add tests and snapshots for `Tooltip` component [#27](https://github.com/salute-developers/plasma/pull/27) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-web): Fix `Tooltip` behavior with wrapper [#27](https://github.com/salute-developers/plasma/pull/27) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue May 24 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.68.0`, `@salutejs/plasma-ui@1.105.0`
  - test(plasma-ui,plasma-b2c): Add test and snapshot for `Slider` component [#30](https://github.com/salute-developers/plasma/pull/30) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-cy-utils@0.13.0`
  - feat(plasma-cy-utils): Add `Portal` component for cy-utils [#30](https://github.com/salute-developers/plasma/pull/30) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.69.0`
  - feat(plasma-temple): tests [#22](https://github.com/salute-developers/plasma/pull/22) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): docs [#22](https://github.com/salute-developers/plasma/pull/22) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): gallery voice navigation [#22](https://github.com/salute-developers/plasma/pull/22) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): mobile version [#22](https://github.com/salute-developers/plasma/pull/22) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): export by platforms [#22](https://github.com/salute-developers/plasma/pull/22) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): new gallery component [#22](https://github.com/salute-developers/plasma/pull/22) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.68.0`, `@salutejs/plasma-ui@1.105.0`
  - fix(plasma-b2c,plasma-ui): Add ref.current for useEffect in SliderBase for `Slider` component [#30](https://github.com/salute-developers/plasma/pull/30) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon May 23 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.59.2`
  - test(plasma-ui): Toast: clearTimeout after hiding [#26](https://github.com/salute-developers/plasma/pull/26) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.59.2`, `@salutejs/plasma-ui@1.104.3`
  - fix(plasma-ui): Toast: clearTimeout after hiding [#26](https://github.com/salute-developers/plasma/pull/26) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri May 20 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.68.2`, `@salutejs/plasma-sb-utils@0.58.2`
  - fix(plasma-temple): pass `character` as arg for `getInitialProps` [#19](https://github.com/salute-developers/plasma/pull/19) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu May 19 2022)

#### 🐛 Bug Fix

- docs(plasma-web,plasma-ui): fix old versions url [#23](https://github.com/salute-developers/plasma/pull/23) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.59.1`
  - fix(plasma-core): unnecessary Price export [#25](https://github.com/salute-developers/plasma/pull/25) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-icons@1.83.1`
  - ci(plasma-icons): fix deps [#24](https://github.com/salute-developers/plasma/pull/24) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.104.1`, `@salutejs/plasma-web@1.102.1`
  - fix(plasma-ui, plasma-web): fix carousel context [#20](https://github.com/salute-developers/plasma/pull/20) (Kruglikov.A.D@sberbank.ru)

#### Authors: 2

- Arseny Kruglikov (Kruglikov.A.D@sberbank.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue May 17 2022)

#### 🚀 Enhancement

- fix(plasma-ui-docs): Fix async content load for docusaurus.config [#7](https://github.com/salute-developers/plasma/pull/7) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-sb-utils@0.58.0`
  - feat(plasma-temple): bump plasma-core version [#16](https://github.com/salute-developers/plasma/pull/16) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-temple@1.68.0`
  - feat(plasma-temple): tests [#16](https://github.com/salute-developers/plasma/pull/16) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): docs [#16](https://github.com/salute-developers/plasma/pull/16) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Split PlasmaApp logic [#16](https://github.com/salute-developers/plasma/pull/16) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-typo@0.6.0`
  - feat(plasma-typo): Add bold type for `Dspl` and 'H' components [#7](https://github.com/salute-developers/plasma/pull/7) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- docs(plasma-ui-docs): Add bold example in Typography for `Dspl` and `H` components [#7](https://github.com/salute-developers/plasma/pull/7) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.59.0`
  - test(plasma-b2c): Add test and snapshots for `Dspl` and `H` components [#7](https://github.com/salute-developers/plasma/pull/7) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.67.0`, `@salutejs/plasma-ui@1.104.0`
  - chore(plasma-ui, plasma-b2c): Add bold type for `Dspl` and `H` in stories [#7](https://github.com/salute-developers/plasma/pull/7) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.104.0`
  - test(plasma-ui): Add test and snapshost for `TimePicker` and `DatePicker` components [#4](https://github.com/salute-developers/plasma/pull/4) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-ui): Fix behavior if min or max changes for `Pickers` component [#4](https://github.com/salute-developers/plasma/pull/4) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed May 11 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.103.1`
  - test(plasma-ui): Add test and snapshost for `TimePicker` and `DatePicker` components [#4](https://github.com/salute-developers/plasma/pull/4) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-ui): Fix behavior if min or max changes for `Pickers` component [#4](https://github.com/salute-developers/plasma/pull/4) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed May 11 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.101.0`
  - test(plasma-web, plasma-b2c): Add test and update snapshot for `Tooltip` component [#2](https://github.com/salute-developers/plasma/pull/2) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-web): Add max-width for `Tooltip` component [#2](https://github.com/salute-developers/plasma/pull/2) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed May 11 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.83.0`, `@salutejs/plasma-sb-utils@0.57.0`
  - feat(plasma-icons): Add icons for `36 dp` from P to W [#13](https://github.com/salute-developers/plasma/pull/13) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-icons@1.83.0`
  - feat(plasma-icons): Add icons for `36 dp` from G to O [#11](https://github.com/salute-developers/plasma/pull/11) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed May 11 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.82.0`
  - feat(plasma-icons): Add icons for `36 dp` from A to E [#12](https://github.com/salute-developers/plasma/pull/12) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- ci: update release workflow [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-typo@0.5.0`
  - chore(plasma-typo): improve peerdep [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.64.0`, `@salutejs/plasma-core@1.58.0`, `@salutejs/plasma-icons@1.82.0`, `@salutejs/plasma-temple@1.66.0`, `@salutejs/plasma-tokens-b2b@1.4.0`, `@salutejs/plasma-tokens-b2c@0.13.0`, `@salutejs/plasma-tokens-web@1.19.0`, `@salutejs/plasma-tokens@1.19.0`, `@salutejs/plasma-typo@0.5.0`, `@salutejs/plasma-ui@1.102.0`, `@salutejs/plasma-web@1.99.0`, `@salutejs/plasma-cy-utils@0.11.0`, `@salutejs/plasma-sb-utils@0.57.0`, `@salutejs/plasma-tokens-android@2.26.0`, `@salutejs/plasma-tokens-ios-swift@2.26.0`
  - chore: update package-locks [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu May 05 2022)

#### 🐛 Bug Fix

- ci: add pkg structure linter [#17](https://github.com/salute-developers/plasma/pull/17) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/cra-template-plasma-basic-template@2.2.1`, `@salutejs/cra-template-plasma-shop-template@2.2.1`, `@salutejs/plasma-tokens-core@0.1.1`, `@salutejs/plasma-typo@0.4.1`, `@salutejs/plasma-cy-utils@0.10.1`, `@salutejs/plasma-sb-utils@0.56.1`, `@salutejs/plasma-tokens-utils@0.12.1`
  - fix: packages structure [#17](https://github.com/salute-developers/plasma/pull/17) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu May 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.81.0`
  - feat(plasma-icons): Add icons for `24 dp` from N to W [#10](https://github.com/salute-developers/plasma/pull/10) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu May 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.80.0`
  - feat(plasma-icons): Add icons for `24 dp` from F to M [#14](https://github.com/salute-developers/plasma/pull/14) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.64.0`
  - Revert "feat(plasma-temple): onStart wait for character" [#6](https://github.com/salute-developers/plasma/pull/6) ([@LamaEats](https://github.com/LamaEats))
  - Revert "feat(plasma-temple): onStart wait for command" [#6](https://github.com/salute-developers/plasma/pull/6) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu May 05 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.63.1`
  - Revert "feat(plasma-temple): onStart wait for character" [#6](https://github.com/salute-developers/plasma/pull/6) ([@LamaEats](https://github.com/LamaEats))
  - Revert "feat(plasma-temple): onStart wait for command" [#6](https://github.com/salute-developers/plasma/pull/6) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu May 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.79.0`
  - feat(plasma-icons): Add icons for `24 dp` from A to E [#15](https://github.com/salute-developers/plasma/pull/15) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu May 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.78.0`
  - feat(plasma-icons): Add other icons for `24 dp` and `16 dp` [#9](https://github.com/salute-developers/plasma/pull/9) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu May 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.77.0`
  - feat(plasma-icons): Add icons for `16 dp` [#8](https://github.com/salute-developers/plasma/pull/8) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- test(plasma-ui): update screenshots [#5](https://github.com/salute-developers/plasma/pull/5) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.97.0`
  - test(plasma-ui): fix Card images [#5](https://github.com/salute-developers/plasma/pull/5) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Apr 27 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.57.0`
  - feat(plasma-core): Add `useResizeObserver` hook ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.60.0`
  - feat(plasma-temple): Exports by platforms: Grid, HeroSlider, ErrorPage, SuccessPage, VideoPage ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): product - export by platforms ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-b2c@1.58.0`
  - feat(plasma-b2c): Add `Popup` component to plasma-b2c ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix: release ([@Yeti-or](https://github.com/Yeti-or))
- fix: cypress tests [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- fix: private pkgs => to real private [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.58.0`
  - fix: plasma-b2c: storybook [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.58.0`, `@salutejs/plasma-core@1.57.0`, `@salutejs/plasma-temple@1.60.0`, `@salutejs/plasma-ui@1.96.0`, `@salutejs/plasma-web@1.93.0`
  - fix: linting errs [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-web@1.93.0`
  - fix: lerna & npm i [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.58.0`, `@salutejs/cra-template-plasma-basic-template@2.2.0`, `@salutejs/plasma-colors@0.3.0`, `@salutejs/plasma-core@1.57.0`, `@salutejs/plasma-icons@1.76.0`, `@salutejs/cra-template-plasma-shop-template@2.2.0`, `@salutejs/plasma-temple@1.60.0`, `@salutejs/plasma-tokens-b2b@1.3.0`, `@salutejs/plasma-tokens-b2c@0.12.0`, `@salutejs/plasma-tokens-web@1.18.0`, `@salutejs/plasma-tokens@1.18.0`, `@salutejs/plasma-typo@0.4.0`, `@salutejs/plasma-ui@1.96.0`, `@salutejs/plasma-web@1.93.0`, `@salutejs/plasma-tokens-android@2.25.0`, `@salutejs/plasma-tokens-ios-swift@2.25.0`
  - fix: monorepo deps resolved [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple@1.60.0`, `@salutejs/plasma-tokens-b2b@1.3.0`, `@salutejs/plasma-tokens-b2c@0.12.0`, `@salutejs/plasma-tokens-web@1.18.0`, `@salutejs/plasma-typo@0.4.0`
  - build: update deps [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.96.0`
  - fix(plasma-ui): Fix behavior with single item in `Picker` component ([@neretin-trike](https://github.com/neretin-trike))

#### ⚠️ Pushed to `master`

- ci: check release ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.96.0`
  - test(plasma-ui): Add test and snapshots for `Pickers` component ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.57.0`
  - test(plasma-web,plasma-b2c,plasma-ui): Update snapshot and test for `TextArea` component ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.58.0`, `@salutejs/plasma-web@1.93.0`
  - fix(plasma-web,plasma-b2c): Add useResizeObserver and fix behavior with resize ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Apr 12 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.95.0`
  - feat(plasma-ui): disable Pickers infinityScroll for lowPerfomance devices [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.56.0`, `@salutejs/plasma-ui@1.95.0`
  - feat: Added possibility to disable CSS animations via ThemeProvider [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.56.0`, `@salutejs/plasma-ui@1.95.0`
  - chore: disableAnimation => lowPerformance [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Apr 12 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.58.0`
  - feat(plasma-temple): cart - export by platforms [#1184](https://github.com/salute-developers/plasma/pull/1184) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Tue Apr 12 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.57.0`
  - feat(plasma-temple): item - exports by platforms [#1187](https://github.com/salute-developers/plasma/pull/1187) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Mon Apr 11 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.56.0`
  - feat(plasma-temple): replace previous screens [#1174](https://github.com/salute-developers/plasma/pull/1174) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Mon Apr 11 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.55.0`
  - feat(plasma-temple): onStart wait for command [#1176](https://github.com/salute-developers/plasma/pull/1176) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): onStart wait for character [#1176](https://github.com/salute-developers/plasma/pull/1176) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): add device component, StateLayout component by platforms [#1182](https://github.com/salute-developers/plasma/pull/1182) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Fri Apr 08 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.54.0`
  - feat(plasma-temple): add device component, StateLayout component by platforms [#1182](https://github.com/salute-developers/plasma/pull/1182) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Fri Apr 08 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.94.0`
  - feat(plasma-ui): Add keys for `Pickers` components in stories [#1181](https://github.com/salute-developers/plasma/pull/1181) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Apr 07 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens-b2c@0.11.0`
  - feat(plasma-tokens-b2c): `TextField`: added CSS Variables tokens [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens-b2b@1.2.0`, `@salutejs/plasma-web@1.91.0`, `@salutejs/plasma-tokens-utils@0.11.0`
  - feat(plasma-web): Designing `TextField` for B2B theme [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.91.0`
  - test: Added B2B `TextField` tests / new tests for legacy Web [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))
  - chore(plasma-web): Support `plasma-typo` in Storybook [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-cy-utils@0.9.0`
  - ci: Added B2B `TextField` tests [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens-web@1.17.0`
  - feat(plasma-web, plasma-tokens-web): Design tokens for `plasma-web` [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.56.0`, `@salutejs/plasma-core@1.55.0`, `@salutejs/plasma-ui@1.93.0`, `@salutejs/plasma-web@1.91.0`
  - fix: `Field` and `Input` props interfaces facelifting [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Apr 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.90.0`
  - feat(plasma-web): `Modal`: a11y improvements [#1130](https://github.com/salute-developers/plasma/pull/1130) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-web): `Modal` added react-focus-lock for focus management [#1130](https://github.com/salute-developers/plasma/pull/1130) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Apr 05 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.51.1`
  - fix(plasma-teple): make svg imports inline [#1175](https://github.com/salute-developers/plasma/pull/1175) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-ui-docs@0.60.1`, `@salutejs/plasma-web-docs@0.47.1`
  - docs(plasma-web, plasma-ui): `Toast`: added `showToast` arguments description [#1177](https://github.com/salute-developers/plasma/pull/1177) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Apr 01 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.92.0`, `@salutejs/plasma-ui-docs@0.60.0`
  - feat(plasma-ui): Added `ProductCard` component [#1144](https://github.com/salute-developers/plasma/pull/1144) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.92.0`
  - feat(plasma-ui): `Stepper`: divide functionallity as `useStepper` [#1144](https://github.com/salute-developers/plasma/pull/1144) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-ui): `Badge`: Added `warning` view [#1144](https://github.com/salute-developers/plasma/pull/1144) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.90.0`
  - test(plasma-web): `Select`: enable snapshoting (was commented) [#1173](https://github.com/salute-developers/plasma/pull/1173) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Apr 01 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.50.0`
  - feat(plasma-temple): update build [#1168](https://github.com/salute-developers/plasma/pull/1168) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Thu Mar 31 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.49.0`
  - feat(plasma-temple): Assistant impovements [#1163](https://github.com/salute-developers/plasma/pull/1163) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-b2c@1.54.0`, `@salutejs/plasma-web@1.89.0`
  - feat(plasma-web): `Select` a11y: keyboard navigation [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-web): Added `List` component [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.54.0`, `@salutejs/plasma-core@1.54.0`, `@salutejs/plasma-web@1.89.0`
  - feat(plasma-web): `Dropdown` a11y: navigating with keyboard [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.89.0`
  - test(plasma-web): `Select`: tests and a11y assertions [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.54.0`
  - fix(plasma-b2c): `Select`: extending & restyling from web [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web-docs@0.47.0`
  - docs(plasma-web): `Dropdown` a11y: navigating with keyboard [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.54.0`, `@salutejs/plasma-core@1.54.0`, `@salutejs/plasma-web@1.89.0`
  - test(plasma-web): `Radiobox`: check only for id existance [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.54.0`, `@salutejs/plasma-web@1.89.0`
  - fix(plasma-web): `Checkbox` & `Radibox` labeled and described by attrs and elems [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.91.0`, `@salutejs/plasma-web@1.89.0`
  - fix(plasma-web, plasma-ui): `Radiobox`: removed duplication of label & descr + better live example [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-web, plasma-ui): `Checkbox`: removed duplication of label & descr [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Mar 30 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.48.0`
  - feat(plasma-temple): tests [#1156](https://github.com/salute-developers/plasma/pull/1156) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-temple@1.48.0`, `@salutejs/plasma-temple-docs@0.13.0`
  - feat(plasma-temple): Grid component [#1156](https://github.com/salute-developers/plasma/pull/1156) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Wed Mar 30 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.47.0`
  - feat(plasma-temple): update tests [#1150](https://github.com/salute-developers/plasma/pull/1150) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Support onboarding page in StateLayout component [#1150](https://github.com/salute-developers/plasma/pull/1150) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Wed Mar 30 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.46.0`, `@salutejs/plasma-temple-docs@0.12.0`
  - feat(plasma-temple): Success page [#1145](https://github.com/salute-developers/plasma/pull/1145) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Wed Mar 30 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.45.0`, `@salutejs/plasma-temple-docs@0.11.0`
  - feat(plasma-temple): Item component [#1143](https://github.com/salute-developers/plasma/pull/1143) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Mon Mar 28 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.88.0`
  - feat(plasma-web): `Tooltip` a11y & close with esc [#1135](https://github.com/salute-developers/plasma/pull/1135) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Mar 25 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.87.0`
  - feat(plasma-web): Add ref to carousel [#1155](https://github.com/salute-developers/plasma/pull/1155) (alisabelousova007@gmail.com)
- `@salutejs/plasma-icons@1.72.0`
  - feat(plasma-icons): Add new root files for scalable icons [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-icons): Add first icons for 16,24 and 36 sizes [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-icons@1.72.0`
  - chore(plasma-icons): Update .gitignore and package.json [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Белоусова Алиса Дмитриевна (alisabelousova007@gmail.com)

---

# (Wed Mar 23 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui-docs@0.56.0`
  - feat(aml): Cross reference with corresp. SM docs [#1151](https://github.com/salute-developers/plasma/pull/1151) ([@jabzzy](https://github.com/jabzzy))

#### 🐛 Bug Fix

- ci: delete unused files [#1153](https://github.com/salute-developers/plasma/pull/1153) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.54.0`
  - test(plasma-web,plasma-b2c): Add tests and snapshots [#1154](https://github.com/salute-developers/plasma/pull/1154) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.86.0`
  - feat(plasma-web,plasma-b2c): Add focus for `Checkbox` and `Radiobox` components [#1154](https://github.com/salute-developers/plasma/pull/1154) ([@neretin-trike](https://github.com/neretin-trike))
  - docs: `Spinner` live example of a11y [#1134](https://github.com/salute-developers/plasma/pull/1134) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.86.0`, `@salutejs/plasma-web-docs@0.44.0`
  - docs: `withSkeleton` wraps component with a11y [#1129](https://github.com/salute-developers/plasma/pull/1129) ([@fanisco](https://github.com/fanisco))

#### Authors: 4

- Eugene Dashkevich ([@jabzzy](https://github.com/jabzzy))
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Mar 18 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui-docs@0.55.0`
  - feat(aml): Cross reference with corresp. SM docs [#1151](https://github.com/salute-developers/plasma/pull/1151) ([@jabzzy](https://github.com/jabzzy))

#### Authors: 1

- Eugene Dashkevich ([@jabzzy](https://github.com/jabzzy))

---

# (Fri Mar 18 2022)

#### 🚀 Enhancement

- `@salutejs/versionate-docs@0.3.0`
  - feat(versionate-docs): Added versionArchived.json sort [#1147](https://github.com/salute-developers/plasma/pull/1147) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Mar 17 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-docs-ui@0.6.0`, `@salutejs/plasma-ui-docs@0.54.0`, `@salutejs/plasma-web-docs@0.43.0`
  - feat(plasma-docs-ui): `CodeSandbox`: index.js management [#1146](https://github.com/salute-developers/plasma/pull/1146) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs-ui@0.6.0`
  - feat(plasma-docs-ui): Using b2b tokens [#1146](https://github.com/salute-developers/plasma/pull/1146) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web-docs@0.43.0`
  - feat(plasma-web-docs): Using b2b tokens / switch light/dark [#1146](https://github.com/salute-developers/plasma/pull/1146) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.44.0`
  - feat(plasma-temple): Export for useSpatNavBetweenTargets [#1140](https://github.com/salute-developers/plasma/pull/1140) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Mar 16 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.43.0`
  - feat(plasma-temple): Export for useSpatNavBetweenTargets [#1140](https://github.com/salute-developers/plasma/pull/1140) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Wed Mar 16 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.50.0`, `@salutejs/plasma-ui@1.89.0`, `@salutejs/plasma-web@1.85.0`
  - feat(plasma-ui): `TextArea`: added `aria-describedby` attr [#1133](https://github.com/salute-developers/plasma/pull/1133) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.50.0`
  - feat(plasma-b2c): `TextArea`: added `aria-describedby` attr [#1133](https://github.com/salute-developers/plasma/pull/1133) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.85.0`
  - feat(plasma-web): `TextArea`: added `aria-describedby` attr [#1133](https://github.com/salute-developers/plasma/pull/1133) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Mar 16 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.49.0`, `@salutejs/plasma-ui@1.88.0`, `@salutejs/plasma-web@1.84.0`
  - feat(plasma-web): `TextField`: added `aria-describedby` attr [#1124](https://github.com/salute-developers/plasma/pull/1124) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.88.0`
  - feat(plasma-ui): `TextField`: added `aria-describedby` attr [#1124](https://github.com/salute-developers/plasma/pull/1124) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.49.0`
  - feat(plasma-b2c): `TextField`: added `aria-labelled` and `aria-describedby` attrs [#1124](https://github.com/salute-developers/plasma/pull/1124) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Mar 15 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.83.0`
  - feat(plasma-web): `Notification`: added possibility to anounce text when open [#1127](https://github.com/salute-developers/plasma/pull/1127) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.40.0`
  - fix(plasma-temple): GalleryPage header typography [#1122](https://github.com/salute-developers/plasma/pull/1122) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-b2c@1.48.0`, `@salutejs/plasma-ui@1.87.0`, `@salutejs/plasma-web@1.83.0`
  - chore: `Toast` stories text & role [#1127](https://github.com/salute-developers/plasma/pull/1127) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Mar 14 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui-docs@0.50.0`
  - feat(aml): mention AML in plasma ui docs [#1137](https://github.com/salute-developers/plasma/pull/1137) ([@jabzzy](https://github.com/jabzzy))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.82.0`
  - fix(plasma-web): Add restrict bounds for value in `Progress` component [#1126](https://github.com/salute-developers/plasma/pull/1126) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Eugene Dashkevich ([@jabzzy](https://github.com/jabzzy))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Mar 11 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui-docs@0.49.0`
  - feat(aml): mention AML in plasma ui docs [#1137](https://github.com/salute-developers/plasma/pull/1137) ([@jabzzy](https://github.com/jabzzy))

#### Authors: 1

- Eugene Dashkevich ([@jabzzy](https://github.com/jabzzy))

---

# (Fri Mar 11 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.53.0`, `@salutejs/plasma-ui@1.86.0`
  - feat(plasma-core): Add onDetectActiveItem callback for `Carousel` component [#1081](https://github.com/salute-developers/plasma/pull/1081) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Mar 11 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.38.0`, `@salutejs/plasma-temple-docs@0.9.0`
  - feat(plasma-temple): error page improvments and mobile version [#1128](https://github.com/salute-developers/plasma/pull/1128) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.80.0`
  - chore(plasma-web): Delete `Popup` from storybook [#1136](https://github.com/salute-developers/plasma/pull/1136) ([@fanisco](https://github.com/fanisco))
- `@salutejs/versionate-docs@0.3.0`
  - docs(versionate-docs): Added `README.md` [#1139](https://github.com/salute-developers/plasma/pull/1139) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Mar 10 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web-docs@0.36.1`
  - fix(plasma-web-docs): Docusaurus docgen plugin's json fail [#1138](https://github.com/salute-developers/plasma/pull/1138) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Mar 09 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.85.1`
  - fix(plasma-ui): `TimePicker` splitter size [#1120](https://github.com/salute-developers/plasma/pull/1120) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Wed Mar 09 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.37.0`
  - feat(plasma-temple): Exports for custom item page [#1125](https://github.com/salute-developers/plasma/pull/1125) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Sat Mar 05 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.36.0`
  - feat(plasma-temple): Product component [#1110](https://github.com/salute-developers/plasma/pull/1110) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Product component [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): New Cart component [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): New Cart component [#1066](https://github.com/salute-developers/plasma/pull/1066) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.36.0`
  - fix(plasma-temple): Poster classname on video change [#1132](https://github.com/salute-developers/plasma/pull/1132) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - test(plasma-temple): Multi-platform tests [#1109](https://github.com/salute-developers/plasma/pull/1109) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - test(plasma-temple): Product tests [#1109](https://github.com/salute-developers/plasma/pull/1109) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - test(plasma-temple): multi-platform tests [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - test(plasma-temple): Cart component tests [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-temple@1.36.0`, `@salutejs/plasma-temple-docs@0.8.0`
  - docs(plasma-temple): Product docs [#1110](https://github.com/salute-developers/plasma/pull/1110) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - docs(plasma-temple): Cart component doc [#1066](https://github.com/salute-developers/plasma/pull/1066) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Fri Mar 04 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.35.0`
  - feat(plasma-temple): Product component [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): New Cart component [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): New Cart component [#1066](https://github.com/salute-developers/plasma/pull/1066) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.35.0`
  - test(plasma-temple): multi-platform tests [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - test(plasma-temple): Cart component tests [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-temple@1.35.0`, `@salutejs/plasma-temple-docs@0.7.0`
  - docs(plasma-temple): Cart component doc [#1066](https://github.com/salute-developers/plasma/pull/1066) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Fri Mar 04 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.34.0`
  - feat(plasma-temple): New Cart component [#1080](https://github.com/salute-developers/plasma/pull/1080) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-core@1.52.0`
  - feat(plasma-core): add ref to popup [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))
  - feat(plasma-core): add multiselect logic to keyboard navigation hook [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))
  - feat(plasma-core): add keyboard navigation hook [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))
- `@salutejs/plasma-web@1.79.0`
  - feat(plasma-web): add multiselect logic to select [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))
  - feat(plasma-web): add keyboard navigation to Select [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))
  - feat(plasma-web): add additional fields to DropdownItem [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))

#### 🐛 Bug Fix

- test(plasma-tokens-b2b): Addded tests for `Button` [#1123](https://github.com/salute-developers/plasma/pull/1123) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.34.0`
  - test(plasma-temple): StateLayout component spec [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@LamaEats](https://github.com/LamaEats))
  - test(plasma-temple): OrderSuccessPage spec [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): prepare OrderSuccessPage for tests [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@LamaEats](https://github.com/LamaEats))
  - test(plasma-temple): ConfirmOrderPage spec [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): prepare ConfirmOrderPage for tests [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@LamaEats](https://github.com/LamaEats))
  - test(plasma-temple): ErrorPage spec [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): prepare ErrorPage for tests [#1041](https://github.com/salute-developers/plasma/pull/1041) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-cy-utils@0.8.0`
  - ci: Added `plasma-tokens-b2b` ct jobs [#1123](https://github.com/salute-developers/plasma/pull/1123) ([@fanisco](https://github.com/fanisco))
  - test: update snaps [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))
- `@salutejs/plasma-web@1.79.0`
  - test(plasma-web): add tests on keyboard navigation [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))

#### Authors: 4

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))
- Дмитрий Лекомцев ([@didolf](https://github.com/didolf))

---

# (Tue Mar 01 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.51.1`
  - fix(plasma-core): fix BaseTabs disable state [#1116](https://github.com/salute-developers/plasma/pull/1116) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-ui@1.84.1`
  - fix(plasma-ui): correct Tabs disable state [#1116](https://github.com/salute-developers/plasma/pull/1116) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Tue Mar 01 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.51.0`
  - feat: `PaginationDots`: made `aria-hidden=true` by default [#1108](https://github.com/salute-developers/plasma/pull/1108) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens-b2c@0.10.0`, `@salutejs/plasma-tokens-web@1.16.0`
  - feat: update tokens [#1047](https://github.com/salute-developers/plasma/pull/1047) ([@didolf](https://github.com/didolf))

#### 🐛 Bug Fix

- test: update snaps [#1047](https://github.com/salute-developers/plasma/pull/1047) ([@didolf](https://github.com/didolf))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Дмитрий Лекомцев ([@didolf](https://github.com/didolf))

---

# (Tue Mar 01 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens-utils@0.10.0`
  - feat(plasma-tokens-utils): Added `WebColors` list [#1084](https://github.com/salute-developers/plasma/pull/1084) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens-b2b@1.1.0`, `@salutejs/plasma-tokens-b2c@0.9.0`, `@salutejs/plasma-tokens-web@1.15.0`, `@salutejs/plasma-web@1.77.0`
  - feat: `Button`: colors theming [#1084](https://github.com/salute-developers/plasma/pull/1084) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens-b2b@1.1.0`, `@salutejs/plasma-tokens-web@1.15.0`, `@salutejs/plasma-web@1.77.0`
  - feat: Init `plasma-tokens-b2b` package [#1084](https://github.com/salute-developers/plasma/pull/1084) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.83.0`
  - feat(plasma-ui): `DeviceThemeProvider`: Added responsive typo support [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-ui): Added mixin re-exports [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-typo@0.3.0`
  - feat(plasma-typo): Added deviceScale to standard responsive typo [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- test(plasma-temple): record new snapshots [#1089](https://github.com/salute-developers/plasma/pull/1089) ([@LamaEats](https://github.com/LamaEats))
- test(plasma-temple): multiple platform configs [#1089](https://github.com/salute-developers/plasma/pull/1089) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-ui@1.83.0`
  - chore(plasma-ui): Label in `TextBox`'s stories [#1112](https://github.com/salute-developers/plasma/pull/1112) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-ui): Fix slider when active tab size is changed [#1118](https://github.com/salute-developers/plasma/pull/1118) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-core@1.50.0`
  - fix(plasma-web): Image ratio fix [#1117](https://github.com/salute-developers/plasma/pull/1117) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-temple@1.32.0`
  - test(plasma-temple): refactor test specs for platforms test [#1089](https://github.com/salute-developers/plasma/pull/1089) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/platform-test@1.1.0`
  - test: platforms run tests [#1089](https://github.com/salute-developers/plasma/pull/1089) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-core@1.50.0`, `@salutejs/plasma-ui@1.83.0`
  - fix(plasma-core): Use default view for input readonly state [#1114](https://github.com/salute-developers/plasma/pull/1114) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-ui-docs@0.44.0`
  - fix(plasma-ui-docs): Docusaurus docgen plugin's json fail [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
  - docs(plasma-ui): Responsive typography system [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs-ui@0.5.0`, `@salutejs/plasma-ui-docs@0.44.0`
  - feat(plasma-ui-docs, plasma-docs-ui): Added `DeviceThemeProvider` to the preview root and sandbox [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.42.0`, `@salutejs/plasma-core@1.50.0`
  - test(plasma-b2c): Added responsive typo tests [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.42.0`, `@salutejs/plasma-ui@1.83.0`
  - chore: Storybook fonts [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.42.0`, `@salutejs/plasma-typo@0.3.0`, `@salutejs/plasma-ui@1.83.0`
  - feat(plasma-typo, plasma-ui, plasma-b2c): Moved responsive typography to common package [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))

#### Authors: 4

- [@kayman233](https://github.com/kayman233)
- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Feb 24 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.49.7`
  - fix: `Tabs`: removed focus outline in item text [#1115](https://github.com/salute-developers/plasma/pull/1115) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Feb 24 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.49.6`, `@salutejs/plasma-web@1.76.2`
  - fix(plasma-web): `Carousel`: moved style resets to core [#1104](https://github.com/salute-developers/plasma/pull/1104) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.82.2`
  - test(plasma-ui): Add test and snapshot for `Tabs` component [#1113](https://github.com/salute-developers/plasma/pull/1113) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.49.6`
  - fix(plasma-core): Add data selector for syntheticFocus in `addFocus` mixin [#1113](https://github.com/salute-developers/plasma/pull/1113) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Feb 21 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.31.0`
  - feat(plasma-temple): className for poster on VideoPage [#1103](https://github.com/salute-developers/plasma/pull/1103) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- chore: add typescript-coverage workflow [#1093](https://github.com/salute-developers/plasma/pull/1093) ([@didolf](https://github.com/didolf))
- `@salutejs/plasma-b2c@1.41.0`
  - chore(plasma-b2c): fix Modal.stories [#1105](https://github.com/salute-developers/plasma/pull/1105) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Дмитрий Лекомцев ([@didolf](https://github.com/didolf))

---

# (Fri Feb 18 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.76.1`
  - fix(plasma-web): `Modal` background set to `backgroundPrimary` (01) token [#1106](https://github.com/salute-developers/plasma/pull/1106) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.49.5`, `@salutejs/plasma-tokens-b2c@0.8.2`, `@salutejs/plasma-tokens-web@1.14.2`, `@salutejs/plasma-tokens@1.15.3`, `@salutejs/plasma-tokens-utils@0.9.2`
  - chore: Added fixme comments for background tokens [#1106](https://github.com/salute-developers/plasma/pull/1106) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Feb 18 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.82.0`
  - feat(plasma-ui): Made overlay optional for Sheet [#1075](https://github.com/salute-developers/plasma/pull/1075) (levkus@gmail.com)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui-docs@0.43.0`
  - docs(plasma-ui): Described props `as` and `forwardedAs` [#1092](https://github.com/salute-developers/plasma/pull/1092) ([@fanisco](https://github.com/fanisco))
  - docs(plasma-ui): `Header`: title and arrow components description [#1092](https://github.com/salute-developers/plasma/pull/1092) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.40.0`, `@salutejs/plasma-web@1.76.0`, `@salutejs/plasma-web-docs@0.33.0`
  - docs(plasma-web, plasma-b2c): `Button`: using as an anchor [#1092](https://github.com/salute-developers/plasma/pull/1092) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Лев Останин (levkus@gmail.com)

---

# (Thu Feb 17 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.81.4`
  - fix(plasma-ui): `HeaderArrow`: made unfocusable [#1076](https://github.com/salute-developers/plasma/pull/1076) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.49.4`, `@salutejs/plasma-tokens-b2c@0.8.1`, `@salutejs/plasma-tokens-web@1.14.1`, `@salutejs/plasma-tokens@1.15.2`, `@salutejs/plasma-ui@1.81.4`, `@salutejs/plasma-web@1.75.7`
  - feat(plasma-ui, plasma-web, plasma-b2c): `Button`: Added theming [#1063](https://github.com/salute-developers/plasma/pull/1063) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens-b2c@0.8.1`, `@salutejs/plasma-tokens-web@1.14.1`, `@salutejs/plasma-tokens@1.15.2`
  - feat(plasma-tokens, plasma-tokens-web, plasma-tokens-b2c): Added possibility for component theming [#1063](https://github.com/salute-developers/plasma/pull/1063) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens-utils@0.9.1`
  - refactor(plasma-tokens-utils): Refactored code base for component theming [#1063](https://github.com/salute-developers/plasma/pull/1063) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.29.2`
  - chore(plasma-temple): fix blink cursor [#1061](https://github.com/salute-developers/plasma/pull/1061) ([@LamaEats](https://github.com/LamaEats))
  - test(plasma-temple): HeroSlider spec [#1061](https://github.com/salute-developers/plasma/pull/1061) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): prepare HeroSlider for tests [#1061](https://github.com/salute-developers/plasma/pull/1061) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Wed Feb 16 2022)

#### 🐛 Bug Fix

- chore: templates eslint ignore by default [#1054](https://github.com/salute-developers/plasma/pull/1054) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-b2c@1.39.6`
  - fix(plasma-b2c): `Editable`: background in light theme [#1088](https://github.com/salute-developers/plasma/pull/1088) ([@fanisco](https://github.com/fanisco))
- `@salutejs/cra-template-plasma-basic-template@2.1.2`
  - fix(plasma-basic-template): deps versions [#1054](https://github.com/salute-developers/plasma/pull/1054) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/cra-template-plasma-shop-template@2.1.2`
  - fix(plasma-shop-template): deps versions [#1054](https://github.com/salute-developers/plasma/pull/1054) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-core@1.49.3`, `@salutejs/plasma-ui@1.81.3`
  - fix(plasma-web, plasma-b2c): `TextField`: separated helper spacing styles [#1090](https://github.com/salute-developers/plasma/pull/1090) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Tue Feb 15 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.75.5`
  - fix(plasma-web, plasma-b2c): `Tooltip`: global dark [#1087](https://github.com/salute-developers/plasma/pull/1087) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Feb 15 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.29.0`
  - feat(plasma-temple): Ability to disable autofocus in HeroSlider [#1077](https://github.com/salute-developers/plasma/pull/1077) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Mon Feb 14 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-icons@1.67.3`
  - fix(plasma-icons): remove unused icon [#1085](https://github.com/salute-developers/plasma/pull/1085) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.39.4`
  - chore(plasma-b2c): `TextField` hide `size` prop in storybook [#1074](https://github.com/salute-developers/plasma/pull/1074) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon Feb 14 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.28.0`
  - feat(plasma-temple): Config initial index in HeroSlider [#1078](https://github.com/salute-developers/plasma/pull/1078) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- chore: Update CONTRIBUTING.md [#952](https://github.com/salute-developers/plasma/pull/952) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Feb 10 2022)

#### 🐛 Bug Fix

- chore: Add @seryoshka to CODEOWNERS/#Tests [#1072](https://github.com/salute-developers/plasma/pull/1072) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.75.3`
  - fix(plasma-web): `TextField`: fix `size:l` by providing $size to input [#1073](https://github.com/salute-developers/plasma/pull/1073) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.27.3`
  - test(plasma-temple): stub image for tests [#1006](https://github.com/salute-developers/plasma/pull/1006) ([@LamaEats](https://github.com/LamaEats))
  - test(plasma-temple): grid page spec [#1006](https://github.com/salute-developers/plasma/pull/1006) ([@LamaEats](https://github.com/LamaEats))
  - test(plasma-temple): useForm hook spec [#1046](https://github.com/salute-developers/plasma/pull/1046) ([@LamaEats](https://github.com/LamaEats))
  - test(plasma-temple): Form components spec [#1046](https://github.com/salute-developers/plasma/pull/1046) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-ui-docs@0.42.2`
  - docs(plasma-ui): Added `Sheet` documentation [#1070](https://github.com/salute-developers/plasma/pull/1070) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.75.3`, `@salutejs/plasma-web-docs@0.32.3`
  - chore(plasma-web-docs): `TextField`: Incorrect `status` prop usage [#1069](https://github.com/salute-developers/plasma/pull/1069) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Tue Feb 08 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-typo@0.2.3`
  - fix(plasma-typo): Use `SBSansText` in body and text components [#1068](https://github.com/salute-developers/plasma/pull/1068) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.81.1`
  - test(plasma-ui): Add test and snapshot for `Tabs` component [#1064](https://github.com/salute-developers/plasma/pull/1064) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-ui): Fix outline-radius size for pilled tabs [#1064](https://github.com/salute-developers/plasma/pull/1064) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Feb 07 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.27.1`
  - fix(plasma-temple): peer deps versions [#1065](https://github.com/salute-developers/plasma/pull/1065) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Feb 03 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.81.0`, `@salutejs/plasma-ui-docs@0.42.0`
  - feat(plasma-ui): `Picker`: Added `xs` size [#1055](https://github.com/salute-developers/plasma/pull/1055) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.27.0`
  - test(plasma-temple): add tests for GalleryPage [#1059](https://github.com/salute-developers/plasma/pull/1059) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): add story for GalleryPage [#1059](https://github.com/salute-developers/plasma/pull/1059) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): carousels height [#1059](https://github.com/salute-developers/plasma/pull/1059) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Feb 03 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.39.1`, `@salutejs/plasma-core@1.49.1`, `@salutejs/plasma-icons@1.67.1`, `@salutejs/plasma-temple@1.26.1`, `@salutejs/plasma-typo@0.2.2`, `@salutejs/plasma-ui@1.80.1`, `@salutejs/plasma-web@1.75.1`, `@salutejs/plasma-cy-utils@0.5.2`, `@salutejs/plasma-sb-utils@0.48.1`
  - fix: peer dependencies versions [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-docs-ui@0.4.1`, `@salutejs/plasma-ui-docs@0.41.1`, `@salutejs/plasma-web-docs@0.32.1`
  - feat(plasma-ui-docs, plasma-web-docs): Added Storybook links on doc pages [#1060](https://github.com/salute-developers/plasma/pull/1060) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Wed Feb 02 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.67.0`
  - feat(plasma-icons): Add all devices icons [#1051](https://github.com/salute-developers/plasma/pull/1051) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui-docs@0.41.0`
  - chore(plasma-ui-docs): Empty `versionsArchived.json` [#1062](https://github.com/salute-developers/plasma/pull/1062) ([@fanisco](https://github.com/fanisco))
- `@salutejs/versionate-docs@0.2.0`, `@salutejs/plasma-temple-docs@0.5.0`, `@salutejs/plasma-ui-docs@0.41.0`, `@salutejs/plasma-web-docs@0.32.0`
  - fix: Docs base url via env VERSION_NAME [#1062](https://github.com/salute-developers/plasma/pull/1062) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.39.0`, `@salutejs/plasma-temple@1.26.0`, `@salutejs/plasma-web@1.75.0`
  - chore: Storybook: Added lang to make VoiceOver read russian text properly [#1052](https://github.com/salute-developers/plasma/pull/1052) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Feb 01 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.79.0`
  - feat(plasma-ui): `Carousel`: Added possibility to specify list's role [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-ui): `Picker` a11y improvements [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-ui): Extended `Picker` keyboard control [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.49.0`, `@salutejs/plasma-ui@1.79.0`, `@salutejs/plasma-web@1.74.0`
  - fix(plasma-web, plasma-ui): `Basebox`: Hide input properly; tabIndex={-1} on root [#1057](https://github.com/salute-developers/plasma/pull/1057) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui-docs@0.40.0`
  - docs(plasma-ui): `Picker`: Keyboard accessability description [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.79.0`
  - test(plasma-ui): `DatePicker`: test for jumps - 10 up/down, home/end [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-ui): `Picker`: hide virtual items from screen reader [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Jan 28 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.48.1`
  - fix(plasma-core): Add inherit cursor in label for `BaseBox` component [#1056](https://github.com/salute-developers/plasma/pull/1056) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.24.3`
  - fix(plasma-temple): exports VideoPlayer component [#1042](https://github.com/salute-developers/plasma/pull/1042) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): don't stop video on source change [#1036](https://github.com/salute-developers/plasma/pull/1036) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 3

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Jan 27 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.24.2`
  - fix(plasma-temple): exports VideoPlayer component [#1042](https://github.com/salute-developers/plasma/pull/1042) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): don't stop video on source change [#1036](https://github.com/salute-developers/plasma/pull/1036) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Jan 27 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.24.1`
  - fix(plasma-temple): don't stop video on source change [#1036](https://github.com/salute-developers/plasma/pull/1036) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Thu Jan 27 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.48.0`
  - feat(plasma-core): Add scrollable container for `Tab` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.24.0`
  - feat(plasma-temple): Mobile StateLayout [#1004](https://github.com/salute-developers/plasma/pull/1004) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.37.0`, `@salutejs/plasma-ui@1.78.0`
  - chore(plasma-ui,plasma-b2c): Remove unused stories mdx for `Tabs` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.48.0`, `@salutejs/plasma-ui@1.78.0`
  - test(plasma-b2c,plasma-web,plasma-ui): Add test and update snapshots for `Tab` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.37.0`, `@salutejs/plasma-ui@1.78.0`, `@salutejs/plasma-web@1.73.0`
  - feat(plasma-b2c,plasma-web,plasma-ui): Update style for `Tabs` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Jan 26 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.23.0`
  - feat(plasma-temple): Mobile StateLayout [#1004](https://github.com/salute-developers/plasma/pull/1004) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Wed Jan 26 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.77.1`
  - fix(plasma-ui): `ActionButton`: Made `pin` not required again [#1045](https://github.com/salute-developers/plasma/pull/1045) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Jan 25 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.47.0`
  - feat(plasma-core): Make toasts stretch more then 50% of container [#1037](https://github.com/salute-developers/plasma/pull/1037) (yaarny@gmail.com)

#### Authors: 1

- Булах Александр (yaarny@gmail.com)

---

# (Mon Jan 24 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.21.1`
  - fix(plasma-temple): Realtime update for currentTime in useMediaPlayer [#1050](https://github.com/salute-developers/plasma/pull/1050) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - test(plasma-temple): ItemPage Spec [#1032](https://github.com/salute-developers/plasma/pull/1032) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Wed Jan 19 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.21.0`
  - feat(plasma-temple): Support for findInInitialData [#1043](https://github.com/salute-developers/plasma/pull/1043) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Wed Jan 19 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.20.1`
  - fix(plasma-temple): improve CartPage mobile markup [#1005](https://github.com/salute-developers/plasma/pull/1005) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - fix(plasma-temple): improve CartPage markup [#1005](https://github.com/salute-developers/plasma/pull/1005) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): common storybook style [#1005](https://github.com/salute-developers/plasma/pull/1005) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Tue Jan 18 2022)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.71.0`
  - feat(plasma-web): Close `Modal` with esc key [#1024](https://github.com/salute-developers/plasma/pull/1024) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.71.0`
  - fix(plasma-web): `Modal`: Portal management in provider [#1024](https://github.com/salute-developers/plasma/pull/1024) ([@fanisco](https://github.com/fanisco))
  - test(plasma-web): Test `Modal` closing [#1024](https://github.com/salute-developers/plasma/pull/1024) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-web): Simplify event handler type (`onClick`) of `Modal` [#1024](https://github.com/salute-developers/plasma/pull/1024) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-web): `Modals` closing order [#1024](https://github.com/salute-developers/plasma/pull/1024) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.20.0`
  - test(plasma-temple): cypress tests for PlasmaApp component [#1025](https://github.com/salute-developers/plasma/pull/1025) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): rewrite type of GetInitialProps func [#1025](https://github.com/salute-developers/plasma/pull/1025) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Mon Jan 17 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.34.3`, `@salutejs/plasma-web@1.70.3`
  - fix(plasma-b2c,plasma-web): Add re-export for `Notification` component [#1029](https://github.com/salute-developers/plasma/pull/1029) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.19.4`
  - fix(plasma-temple): Dont pass page name to PageMethods [#1040](https://github.com/salute-developers/plasma/pull/1040) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Jan 13 2022)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.19.3`
  - fix(plasma-temple): Dont pass page name to PageMethods [#1040](https://github.com/salute-developers/plasma/pull/1040) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Thu Jan 13 2022)

#### 🐛 Bug Fix

- chore: Increase threshold for codecov [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@neretin-trike](https://github.com/neretin-trike))
- ci: coveralls patch off [#1034](https://github.com/salute-developers/plasma/pull/1034) ([@Yeti-or](https://github.com/Yeti-or))
- ci: Unset header in order of branch unprotect [#1035](https://github.com/salute-developers/plasma/pull/1035) ([@fanisco](https://github.com/fanisco))
- ci: Use `GH_TOKEN` to push versionate jsons [#1035](https://github.com/salute-developers/plasma/pull/1035) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens@1.15.1`
  - fix(plasma-tokens): wrong primary/secondary tokens [#1030](https://github.com/salute-developers/plasma/pull/1030) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.34.2`
  - test(plasma-b2c): Add test and snapshot for `ElasticGrid` component [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@neretin-trike](https://github.com/neretin-trike))
  - refactor(plasma-b2c): Remove unsused condition in `ElasticGrid` component [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.19.2`
  - build(plasma-temple): fix `excludes` tests file mask [#1038](https://github.com/salute-developers/plasma/pull/1038) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-core@1.46.2`
  - test: Skip `Toast` test [#1033](https://github.com/salute-developers/plasma/pull/1033) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.70.2`
  - test(plasma-web): `Notification` close [#1033](https://github.com/salute-developers/plasma/pull/1033) ([@fanisco](https://github.com/fanisco))

#### Authors: 4

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Jan 11 2022)

#### 🐛 Bug Fix

- test(plasma-ui): Updated screenshots for `DatePicker` & `TimePicker` [#1014](https://github.com/salute-developers/plasma/pull/1014) ([@fanisco](https://github.com/fanisco))
- ci(plasma-temple): add codecov [#975](https://github.com/salute-developers/plasma/pull/975) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-ui-docs@0.36.1`, `@salutejs/plasma-web-docs@0.27.1`
  - docs(plasma-ui, plasma-ui): `Carousel` a11y documentation [#973](https://github.com/salute-developers/plasma/pull/973) ([@fanisco](https://github.com/fanisco))
- `@salutejs/demo-canvas-app@0.53.1`, `@salutejs/plasma-ui@1.76.1`, `@salutejs/plasma-web@1.70.1`
  - feat(plasma-ui, plasma-web): `Carousel` a11y improvements [#973](https://github.com/salute-developers/plasma/pull/973) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.46.1`, `@salutejs/plasma-ui@1.76.1`, `@salutejs/plasma-web@1.70.1`
  - refactor: Move `Carousel`'s modules in Core/UI/Web [#973](https://github.com/salute-developers/plasma/pull/973) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.76.1`
  - fix(plasma-ui): Keep `Picker` focused even if arrows clicked [#1014](https://github.com/salute-developers/plasma/pull/1014) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-ui): `Picker`s' controls position [#1014](https://github.com/salute-developers/plasma/pull/1014) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.19.1`
  - chore(plasma-temple): infer types for Page methods [#975](https://github.com/salute-developers/plasma/pull/975) ([@LamaEats](https://github.com/LamaEats))
  - test(plasma-temple): setup cypress tests [#975](https://github.com/salute-developers/plasma/pull/975) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Dec 30 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.15.0`
  - feat(plasma-tokens): addd brand theme and update some tokens [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens-utils@0.9.0`
  - fix(plasma-tokens-utils): buttonClear not GblBlack [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens@1.15.0`
  - fix(plasma-tokens): forgotten buttonFocus [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yeti-or](https://github.com/Yeti-or))
  - build(plasma-tokens): load figma stuff [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Dec 30 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.18.0`
  - feat(plasma-temple): Controlled video fit on video page [#1023](https://github.com/salute-developers/plasma/pull/1023) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.76.0`
  - fix(plasma-ui): Set `HeaderArrow` full height [#1016](https://github.com/salute-developers/plasma/pull/1016) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Dec 29 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.75.1`
  - fix(plasma-ui): Set `HeaderArrow` full height [#1016](https://github.com/salute-developers/plasma/pull/1016) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Dec 29 2021)

#### 🚀 Enhancement

- feat(plasma-ui): Add animationDistanceThreshold in ui-config for cypress [#1022](https://github.com/salute-developers/plasma/pull/1022) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.33.0`
  - feat(plasma-b2c): Added `TabsController` component [#985](https://github.com/salute-developers/plasma/pull/985) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.75.0`
  - test(plasma-ui): Add tests and snapshots for `Pickers` component [#1022](https://github.com/salute-developers/plasma/pull/1022) ([@neretin-trike](https://github.com/neretin-trike))
  - test(plasma-ui): Add tests and snapshots for `Slider` component [#1021](https://github.com/salute-developers/plasma/pull/1021) ([@neretin-trike](https://github.com/neretin-trike))
  - test(plasma-ui): Add test for `Carousel` component with scrollAlign [#996](https://github.com/salute-developers/plasma/pull/996) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/versionate-docs@0.1.0`
  - ci: Versionate docs [#953](https://github.com/salute-developers/plasma/pull/953) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.45.0`
  - test: Add controller tests with keydown for plasma-ui [#985](https://github.com/salute-developers/plasma/pull/985) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-core): Add fix for `Carousel` component in start scroll align with vertical orientation [#996](https://github.com/salute-developers/plasma/pull/996) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.33.0`, `@salutejs/plasma-core@1.45.0`, `@salutejs/plasma-ui@1.75.0`, `@salutejs/plasma-web@1.69.0`
  - test: Complete tests for `Tabs` [#985](https://github.com/salute-developers/plasma/pull/985) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.33.0`
  - test(plasma-b2c): `Body` & `Text` tests [#1019](https://github.com/salute-developers/plasma/pull/1019) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.33.0`, `@salutejs/plasma-web@1.69.0`
  - test(plasma-b2c, plasma-web): Add statuses to `Notification` test [#1017](https://github.com/salute-developers/plasma/pull/1017) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-web, plasma-b2c): Added possibility to specify id for `Notification` [#1017](https://github.com/salute-developers/plasma/pull/1017) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Dec 27 2021)

#### 🐛 Bug Fix

- test(plasma-b2c): Add missing snapshots for `Toast` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add missing snapshot for `Tabs` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add missing snapshots for `Tabs` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add missing snapshots for `Switch` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add missing snapshots for `Radiobox` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add missing snapshots for `Checkbox` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- test(plasma-b2c): Add missing snapshots for `Button` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.74.2`
  - fix(plasma-ui): Add scroll fix for `Picker` component [#1007](https://github.com/salute-developers/plasma/pull/1007) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.32.2`
  - refactor(plasma-b2c): Update return items in utils for `PreviewGallery` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
  - test(plasma-b2c): Add tests and snapshots for `PreviewGallery` component [#1009](https://github.com/salute-developers/plasma/pull/1009) ([@neretin-trike](https://github.com/neretin-trike))
  - test(plasma-b2c): Add tests and snapshots for `Upload` component [#1012](https://github.com/salute-developers/plasma/pull/1012) ([@neretin-trike](https://github.com/neretin-trike))
  - test(plasma-b2c): Add tests and snapshots for `Slider` component [#1015](https://github.com/salute-developers/plasma/pull/1015) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Dec 24 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.16.0`
  - feat(plasma-temple): Ability to hide player controls [#1011](https://github.com/salute-developers/plasma/pull/1011) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.33.0`
  - test(plasma-b2c): Add tests and snapshots for `Editable` component [#1013](https://github.com/salute-developers/plasma/pull/1013) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Dec 23 2021)

#### 🐛 Bug Fix

- test(plasma-ui): Improve Checkbox tests [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-web): update base screens [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@Yeti-or](https://github.com/Yeti-or))
- build(plasma-ui,plasma-web,plasma-b2c): ignore examples.tsx [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.44.1`, `@salutejs/plasma-ui@1.74.1`
  - fix(plasma-ui): Prevent `Radiobox`'s & `Checkbox`'s trigger from squeeze [#958](https://github.com/salute-developers/plasma/pull/958) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.68.1`
  - test(plasma-b2c, plasma-web): Added click and multiselect tests for `Select` [#983](https://github.com/salute-developers/plasma/pull/983) ([@fanisco](https://github.com/fanisco))
  - test(plasma-web): add Grid component test [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.32.1`, `@salutejs/plasma-web@1.68.1`
  - feat(plasma-web, plasma-b2c): Arrow and check placement in `Select` [#983](https://github.com/salute-developers/plasma/pull/983) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.44.1`
  - test(plasma-ui): Radiobox: uniqId test [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-cy-utils@0.4.1`
  - test(plasma-cy-utils): wrap SSRProvider over all tests [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Sun Dec 19 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.32.0`
  - feat(b2c): add SSRProvider [#1000](https://github.com/salute-developers/plasma/pull/1000) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- ci: improve coverall check [#999](https://github.com/salute-developers/plasma/pull/999) ([@Yeti-or](https://github.com/Yeti-or))
- ci: add codecov [#997](https://github.com/salute-developers/plasma/pull/997) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.45.0`
  - test(plasma-ui): improve TextArea component tests [#991](https://github.com/salute-developers/plasma/pull/991) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): improve Checkbox component tests [#991](https://github.com/salute-developers/plasma/pull/991) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add RadioGroup component tests [#991](https://github.com/salute-developers/plasma/pull/991) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Switch component tests [#991](https://github.com/salute-developers/plasma/pull/991) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): improve Button component tests [#991](https://github.com/salute-developers/plasma/pull/991) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.75.0`
  - test(plasma-ui): add Slider component tests [#991](https://github.com/salute-developers/plasma/pull/991) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Stepper component tests [#991](https://github.com/salute-developers/plasma/pull/991) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Dec 17 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.15.1`
  - fix(plasma-temple): Fix async Layout render [#995](https://github.com/salute-developers/plasma/pull/995) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Thu Dec 16 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.31.0`
  - feat(plasma-b2c): Add mobile sizes for Tabs [#972](https://github.com/salute-developers/plasma/pull/972) (yaarny@gmail.com)
  - feat(plasma-b2c): make RadioGroup public [#992](https://github.com/salute-developers/plasma/pull/992) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.31.0`
  - test(plasma-b2c): fix tests [#993](https://github.com/salute-developers/plasma/pull/993) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.31.0`, `@salutejs/plasma-ui@1.75.0`
  - test(plasma-b2c): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.69.0`
  - test(plasma-web): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.75.0`
  - test(plasma-ui): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
  - test(plasma-ui): add Sheet component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Header component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.45.0`
  - test(plasma-ui): fix Skeleton component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Toast component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.45.0`, `@salutejs/plasma-ui@1.75.0`
  - test(plasma-ui): add Fade component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Grid component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple@1.16.0`
  - fix(plasma-temple): Always show player controls on key press [#989](https://github.com/salute-developers/plasma/pull/989) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 4

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Булах Александр (yaarny@gmail.com)

---

# (Wed Dec 15 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.30.0`
  - feat(plasma-b2c): make RadioGroup public [#992](https://github.com/salute-developers/plasma/pull/992) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.30.0`
  - test(plasma-b2c): fix tests [#993](https://github.com/salute-developers/plasma/pull/993) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.30.0`, `@salutejs/plasma-ui@1.74.0`
  - test(plasma-b2c): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.68.0`
  - test(plasma-web): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.74.0`
  - test(plasma-ui): Add Cypress component test for `Carousel` [#968](https://github.com/salute-developers/plasma/pull/968) ([@fanisco](https://github.com/fanisco))
  - test(plasma-ui): add Sheet component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Header component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.44.0`
  - test(plasma-ui): fix Skeleton component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Toast component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.44.0`, `@salutejs/plasma-ui@1.74.0`
  - test(plasma-ui): add Fade component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Grid component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple@1.15.0`
  - fix(plasma-temple): Always show player controls on key press [#989](https://github.com/salute-developers/plasma/pull/989) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 3

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Dec 15 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.14.1`
  - fix(plasma-temple): Always show player controls on key press [#989](https://github.com/salute-developers/plasma/pull/989) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Wed Dec 15 2021)

#### 🚀 Enhancement

- `@salutejs/demo-canvas-app@0.50.0`
  - feat(demo-canvas-app): Add checkbox test example [#969](https://github.com/salute-developers/plasma/pull/969) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.43.0`
  - feat(plasma-core): Add ReactNode type for label in `Checkbox` component [#969](https://github.com/salute-developers/plasma/pull/969) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui-docs@0.33.0`, `@salutejs/plasma-web-docs@0.24.0`
  - docs(plasma-ui-docs,plasma-web-docs): Add snippet for `Checkbox` component [#969](https://github.com/salute-developers/plasma/pull/969) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.29.0`, `@salutejs/plasma-ui@1.73.0`, `@salutejs/plasma-web@1.67.0`
  - feat(plasma-web,plasma-b2c,plasma-ui): Add example for checkbox with jsx in label [#969](https://github.com/salute-developers/plasma/pull/969) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Dec 14 2021)

#### 🚀 Enhancement

- feat: Add workflow_run for documentation-main workflow [#988](https://github.com/salute-developers/plasma/pull/988) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.72.0`
  - feat(plasma-ui): Add infinite scroll for `DatePicker` and `TimePicker` components [#957](https://github.com/salute-developers/plasma/pull/957) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.13.0`
  - feat(plasma-temple): Add spinner while state is not initialized [#971](https://github.com/salute-developers/plasma/pull/971) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): add promocode to cart [#971](https://github.com/salute-developers/plasma/pull/971) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.42.0`
  - fix: Set Underline to uppercase [#950](https://github.com/salute-developers/plasma/pull/950) ([@fanisco](https://github.com/fanisco))
  - test(plasma-ui): add more Image component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.72.0`
  - test(plasma-ui): add Card component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add SmartPaginationDots component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add MarkedList component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Marquee component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add TextBox component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Cell component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): Add tests for `DatePicker` and `TimePicker` components and update snapshots [#957](https://github.com/salute-developers/plasma/pull/957) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-core@1.42.0`, `@salutejs/plasma-ui@1.72.0`
  - test(plasma-ui): add Skeleton component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui): add Spinner component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-cy-utils@0.4.0`
  - test(plasma-cy-utils): add withNoAnimation helper [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-website@0.18.0`
  - docs(plasma-ui): add community figma [#939](https://github.com/salute-developers/plasma/pull/939) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Dec 14 2021)

#### 🚀 Enhancement

- feat: Add workflow_run for documentation-main workflow [#988](https://github.com/salute-developers/plasma/pull/988) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.13.0`
  - feat(plasma-temple): Add spinner while state is not initialized [#971](https://github.com/salute-developers/plasma/pull/971) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): add promocode to cart [#971](https://github.com/salute-developers/plasma/pull/971) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- Revert "feat: Create Main CI for sequenced execution release and documentation jobs" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "chore: Remove documentation workflows" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "feat: Add concurrently for documentation and storybook builds" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "fix: Add step for restore cache node_modules" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- fix: Add step for restore cache node_modules [#979](https://github.com/salute-developers/plasma/pull/979) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-website@0.17.0`
  - docs(plasma-ui): add community figma [#939](https://github.com/salute-developers/plasma/pull/939) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple-docs@0.4.0`, `@salutejs/plasma-ui-docs@0.32.0`, `@salutejs/plasma-web-docs@0.23.0`, `@salutejs/plasma-website@0.17.0`
  - Revert "feat(plasma-temple-docs/ui-docs/web-docs/website): Rename PR_NAME env to ARTIFACT_NAME" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))

#### Authors: 4

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon Dec 13 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.12.0`
  - feat(plasma-temple): Add spinner while state is not initialized [#971](https://github.com/salute-developers/plasma/pull/971) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): add promocode to cart [#971](https://github.com/salute-developers/plasma/pull/971) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- Revert "feat: Create Main CI for sequenced execution release and documentation jobs" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "chore: Remove documentation workflows" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "feat: Add concurrently for documentation and storybook builds" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "fix: Add step for restore cache node_modules" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- fix: Add step for restore cache node_modules [#979](https://github.com/salute-developers/plasma/pull/979) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple-docs@0.4.0`, `@salutejs/plasma-ui-docs@0.32.0`, `@salutejs/plasma-web-docs@0.23.0`, `@salutejs/plasma-website@0.17.0`
  - Revert "feat(plasma-temple-docs/ui-docs/web-docs/website): Rename PR_NAME env to ARTIFACT_NAME" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Dec 13 2021)

#### 🐛 Bug Fix

- Revert "feat: Create Main CI for sequenced execution release and documentation jobs" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "chore: Remove documentation workflows" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "feat: Add concurrently for documentation and storybook builds" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- Revert "fix: Add step for restore cache node_modules" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))
- fix: Add step for restore cache node_modules [#979](https://github.com/salute-developers/plasma/pull/979) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple-docs@0.3.1`, `@salutejs/plasma-ui-docs@0.31.2`, `@salutejs/plasma-web-docs@0.22.2`, `@salutejs/plasma-website@0.16.3`
  - Revert "feat(plasma-temple-docs/ui-docs/web-docs/website): Rename PR_NAME env to ARTIFACT_NAME" [#982](https://github.com/salute-developers/plasma/pull/982) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Dec 13 2021)

#### 🚀 Enhancement

- feat: Add concurrently for documentation and storybook builds [#948](https://github.com/salute-developers/plasma/pull/948) ([@neretin-trike](https://github.com/neretin-trike))
- feat: Create Main CI for sequenced execution release and documentation jobs [#948](https://github.com/salute-developers/plasma/pull/948) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple-docs@0.4.0`, `@salutejs/plasma-ui-docs@0.32.0`, `@salutejs/plasma-web-docs@0.23.0`, `@salutejs/plasma-website@0.17.0`
  - feat(plasma-temple-docs/ui-docs/web-docs/website): Rename PR_NAME env to ARTIFACT_NAME [#948](https://github.com/salute-developers/plasma/pull/948) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.12.0`
  - feat(plasma-temple): add multiline product description [#963](https://github.com/salute-developers/plasma/pull/963) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- chore: Remove documentation workflows [#948](https://github.com/salute-developers/plasma/pull/948) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Dec 09 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.11.0`
  - feat(plasma-temple): add multiline product description [#963](https://github.com/salute-developers/plasma/pull/963) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Thu Dec 09 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.10.1`
  - fix(plasma-temple): Fix time chop in VideoPlayer [#966](https://github.com/salute-developers/plasma/pull/966) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-ui-docs@0.31.1`, `@salutejs/plasma-web-docs@0.22.1`
  - docs(plasma-web-docs,plasma-ui-docs): Add info about break word for Typography [#962](https://github.com/salute-developers/plasma/pull/962) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.27.2`, `@salutejs/plasma-core@1.41.1`
  - test(plasma-web,plasma-ui): Add test and update snapshots for `Typography` components [#962](https://github.com/salute-developers/plasma/pull/962) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c,plasma-core): Add breakWord props for `Typography` components [#962](https://github.com/salute-developers/plasma/pull/962) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Dec 08 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.27.1`
  - fix(palsma-b2c): preview gallery data contracts [#967](https://github.com/salute-developers/plasma/pull/967) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Tue Dec 07 2021)

#### 🚀 Enhancement

- `@salutejs/demo-canvas-app@0.48.0`, `@salutejs/plasma-core@1.41.0`, `@salutejs/plasma-ui@1.71.0`, `@salutejs/plasma-web@1.65.0`, `@salutejs/showcase@0.82.0`, `@salutejs/plasma-ui-docs@0.31.0`, `@salutejs/plasma-web-docs@0.22.0`
  - feat: add RadioGroup components [#676](https://github.com/salute-developers/plasma/pull/676) ([@OgNellis](https://github.com/OgNellis))

#### 🐛 Bug Fix

- `@salutejs/demo-canvas-app@0.48.0`, `@salutejs/plasma-core@1.41.0`, `@salutejs/plasma-ui@1.71.0`, `@salutejs/plasma-web@1.65.0`, `@salutejs/showcase@0.82.0`, `@salutejs/plasma-ui-docs@0.31.0`, `@salutejs/plasma-web-docs@0.22.0`
  - fix: accessibility of checkbox and radiobox for nvda and jaws [#676](https://github.com/salute-developers/plasma/pull/676) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Mon Dec 06 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.9.0`
  - feat(plasma-temple): add support NeuHeader Component [#943](https://github.com/salute-developers/plasma/pull/943) ([@LamaEats](https://github.com/LamaEats))

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.9.0`
  - fix(plasma-temple): manual infer styled-comp types [#943](https://github.com/salute-developers/plasma/pull/943) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Fri Dec 03 2021)

#### 🐛 Bug Fix

- chore: Update `CODEOWNERS` [#961](https://github.com/salute-developers/plasma/pull/961) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.64.1`
  - fix(plama-web): Added possibility to specify a value type in `Select` [#932](https://github.com/salute-developers/plasma/pull/932) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Dec 03 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-docs-ui@0.4.0`, `@salutejs/plasma-temple-docs@0.3.0`, `@salutejs/plasma-ui-docs@0.30.0`, `@salutejs/plasma-web-docs@0.21.0`
  - feat: Docs dark theme switcher [#947](https://github.com/salute-developers/plasma/pull/947) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.26.0`, `@salutejs/plasma-core@1.40.0`, `@salutejs/plasma-ui@1.70.0`, `@salutejs/plasma-web@1.64.0`
  - feat: Added `createButton` as a constructor function for `Button` [#946](https://github.com/salute-developers/plasma/pull/946) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.40.0`, `@salutejs/plasma-ui@1.70.0`
  - test(plasma-ui): Update tests for `Button` and add for `ActionButton` [#946](https://github.com/salute-developers/plasma/pull/946) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.26.0`, `@salutejs/plasma-ui@1.70.0`
  - refactor(plasma-ui,plasma-b2c): Update stories for `Slider` component [#934](https://github.com/salute-developers/plasma/pull/934) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-ui,plasma-b2c): Fix intersection for multiple `Slider` component [#934](https://github.com/salute-developers/plasma/pull/934) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Dec 02 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.25.0`
  - feat(palsma-b2c): put preview gallery rest props [#965](https://github.com/salute-developers/plasma/pull/965) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Thu Dec 02 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.69.0`
  - feat(plasma-ui): Add default value in `Slider` component if theme context is undefined [#955](https://github.com/salute-developers/plasma/pull/955) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Dec 01 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.63.0`
  - feat(plasma-web): Update behavior for `Tooltip` component [#942](https://github.com/salute-developers/plasma/pull/942) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- test(plasma-web,plasma-b2c): Update snapshots for `Tooltip` and `Select` components [#942](https://github.com/salute-developers/plasma/pull/942) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.63.0`
  - test(plasma-web): Add tests for `Tooltip` component [#942](https://github.com/salute-developers/plasma/pull/942) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Dec 01 2021)

#### 🚀 Enhancement

- `@salutejs/demo-canvas-app@0.45.0`
  - feat(demo-canvas-app): Using `TabsController` [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
  - feat(demo-canvas-app): Added spatial-navigation [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- `@salutejs/demo-canvas-app@0.45.0`, `@salutejs/plasma-ui@1.68.0`
  - feat(plasma-ui): Added `TabsController` component [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.39.0`, `@salutejs/plasma-web@1.62.0`
  - feat: Moved `TabsController` as a creator function [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.68.0`, `@salutejs/plasma-ui-docs@0.27.0`
  - feat(plasma-ui): Add a11y for `Stepper` component [#930](https://github.com/salute-developers/plasma/pull/930) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-temple@1.9.0`
  - feat(plasma-temple): Additional buttons in ItemPage [#938](https://github.com/salute-developers/plasma/pull/938) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.39.0`
  - fix: Correct role for `Tabs` - tablist [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.39.0`, `@salutejs/plasma-ui-docs@0.27.0`
  - docs(plasma-ui): Added documentation for `useForkRef` [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.62.0`
  - fix(plasma-web): Fix TabsController's items tabbing [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
  - chore(plasma-web): Delete old doc file [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- `@salutejs/demo-canvas-app@0.45.0`
  - fix(plasma-web): Fix vertical app scroll [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui-docs@0.27.0`
  - docs(plasma-ui-docs): Add accessibility description for `Stepper` component [#930](https://github.com/salute-developers/plasma/pull/930) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Nov 29 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.8.0`
  - feat(plasma-temple): Additional buttons in ItemPage [#938](https://github.com/salute-developers/plasma/pull/938) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Mon Nov 29 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens-b2c@0.7.2`
  - fix(plasma-tokens-web): Fix `Tooltip` & `Button` confusing `checked` color token [#935](https://github.com/salute-developers/plasma/pull/935) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Nov 26 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.7.0`
  - feat(plasma-temple): support for window.appInitialData [#941](https://github.com/salute-developers/plasma/pull/941) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- ci: Removed Cypress E2E workflow [#956](https://github.com/salute-developers/plasma/pull/956) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Nov 26 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.6.0`
  - feat(plasma-temple): Add cart test attributes [#954](https://github.com/salute-developers/plasma/pull/954) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): update assistant-client version [#949](https://github.com/salute-developers/plasma/pull/949) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-temple-docs@0.3.0`
  - feat(website): add description for templates docs [#931](https://github.com/salute-developers/plasma/pull/931) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Tue Nov 23 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.5.0`
  - feat(plasma-temple): update assistant-client version [#949](https://github.com/salute-developers/plasma/pull/949) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Tue Nov 23 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.22.1`, `@salutejs/plasma-web-docs@0.18.1`
  - fix: b2c grid doc [#937](https://github.com/salute-developers/plasma/pull/937) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Mon Nov 22 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.38.0`
  - feat: Replace `TextField` with `Field` [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))
  - feat: Separated `Input` and `TextArea` [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))
  - feat: Added `Field` component to replace `TextField`'s functionality [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.22.0`
  - feat(plasma-b2c): Added `TextField` component [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-website@0.11.0`
  - fix(plasma-website): Remove unnecessary prop `size` from search input [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.67.0`, `@salutejs/plasma-web@1.61.0`
  - feat(plasma-ui, plasma-web): B2C/B2B `Input` and `TextArea` on common platform [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Nov 22 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.54.0`
  - feat(plasma-icons): Mark IconSpinner as deprecated [#919](https://github.com/salute-developers/plasma/pull/919) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-icons@1.54.0`
  - fix(plasma-icons): Remove IconVolumeMute icon [#919](https://github.com/salute-developers/plasma/pull/919) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Nov 19 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.59.2`
  - fix(plasma-web): Add `Button`'s `warning` view [#933](https://github.com/salute-developers/plasma/pull/933) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Nov 19 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple-docs@0.3.0`
  - feat(plasma-temple-docs): Add noop docgenPlugin plugin for docusaurus config [#911](https://github.com/salute-developers/plasma/pull/911) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-docs-ui@0.4.0`, `@salutejs/plasma-ui-docs@0.24.0`, `@salutejs/plasma-web-docs@0.16.0`
  - feat(plasma-docs-ui): Add `CodeSandbox` component [#911](https://github.com/salute-developers/plasma/pull/911) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui-docs@0.24.0`, `@salutejs/plasma-web-docs@0.16.0`
  - feat(plasma-ui-docs, plasma-web-docs): Added version indicator at the top [#898](https://github.com/salute-developers/plasma/pull/898) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs-ui@0.4.0`, `@salutejs/plasma-ui-docs@0.24.0`, `@salutejs/plasma-web-docs@0.16.0`
  - docs(plasma-ui-docs,plasma-web-docs): Update snippet examples for mdx files [#911](https://github.com/salute-developers/plasma/pull/911) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Nov 18 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple-docs@0.2.0`
  - feat(plasma-temple-docs): Add noop docgenPlugin plugin for docusaurus config [#911](https://github.com/salute-developers/plasma/pull/911) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-docs-ui@0.3.0`, `@salutejs/plasma-ui-docs@0.23.0`, `@salutejs/plasma-web-docs@0.15.0`
  - feat(plasma-docs-ui): Add `CodeSandbox` component [#911](https://github.com/salute-developers/plasma/pull/911) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-docs-ui@0.3.0`, `@salutejs/plasma-ui-docs@0.23.0`, `@salutejs/plasma-web-docs@0.15.0`
  - docs(plasma-ui-docs,plasma-web-docs): Update snippet examples for mdx files [#911](https://github.com/salute-developers/plasma/pull/911) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Nov 18 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.20.1`, `@salutejs/plasma-web@1.59.1`
  - fix(plasma-web): prevent disabled select from opening [#925](https://github.com/salute-developers/plasma/pull/925) (42856876+IArny@users.noreply.github.com)

#### Authors: 1

- Булах Александр Алексеевич [B] (42856876+IArny@users.noreply.github.com)

---

# (Thu Nov 18 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.20.0`, `@salutejs/plasma-core@1.37.0`
  - feat: export spacing [#936](https://github.com/salute-developers/plasma/pull/936) ([@takovoy](https://github.com/takovoy))

#### 🐛 Bug Fix

- chore: cypress a11y checks [#901](https://github.com/salute-developers/plasma/pull/901) ([@dakhetov](https://github.com/dakhetov))
- `@salutejs/plasma-ui@1.65.0`
  - chore: b2c, ui, web code coverage [#917](https://github.com/salute-developers/plasma/pull/917) ([@dakhetov](https://github.com/dakhetov))

#### Authors: 2

- [@dakhetov](https://github.com/dakhetov)
- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Wed Nov 17 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.19.2`
  - fix(plasma-b2c): reduce slider handle z-index [#927](https://github.com/salute-developers/plasma/pull/927) (42856876+IArny@users.noreply.github.com)

#### Authors: 1

- Булах Александр Алексеевич [B] (42856876+IArny@users.noreply.github.com)

---

# (Wed Nov 17 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.58.1`
  - fix: plasma-web grid mobile margins [#928](https://github.com/salute-developers/plasma/pull/928) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Wed Nov 17 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.4.0`
  - feat(plasma-temple): export useHeaderProps [#902](https://github.com/salute-developers/plasma/pull/902) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-website@0.9.0`
  - feat(plasma-website): Added link to Plasma Temple documentation [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.4.0`, `@salutejs/plasma-temple-docs@0.2.0`
  - feat: Added Plasma Temple documentation app [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs-ui@0.3.0`
  - feat(plasma-docs-ui): Added GlobalStyle component [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- ci: Deploy Plasma Temple docs [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui-docs@0.22.0`, `@salutejs/plasma-web-docs@0.14.0`
  - chore: Add .npmrc to documentation apps [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Nov 16 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-website@0.8.0`
  - feat(plasma-website): Added link to Plasma Temple documentation [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.4.0`, `@salutejs/plasma-temple-docs@0.1.0`
  - feat: Added Plasma Temple documentation app [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs-ui@0.2.0`
  - feat(plasma-docs-ui): Added GlobalStyle component [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- ci: Deploy Plasma Temple docs [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui-docs@0.21.0`, `@salutejs/plasma-web-docs@0.13.0`
  - chore: Add .npmrc to documentation apps [#918](https://github.com/salute-developers/plasma/pull/918) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Nov 16 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-website@0.7.0`
  - feat(plasma-website): Plasma icons service [#903](https://github.com/salute-developers/plasma/pull/903) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.36.0`
  - fix: Render popup `Popup` when it's hidden [#903](https://github.com/salute-developers/plasma/pull/903) ([@fanisco](https://github.com/fanisco))
  - test(plasma-ui): Update test for `Image` [#920](https://github.com/salute-developers/plasma/pull/920) ([@fanisco](https://github.com/fanisco))
  - Revert "fix: b2c preview gallery image size" [#920](https://github.com/salute-developers/plasma/pull/920) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.19.0`
  - fix(plasma-b2c): Preview gallery image size [#920](https://github.com/salute-developers/plasma/pull/920) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Nov 15 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.35.2`, `@salutejs/plasma-ui@1.63.1`, `@salutejs/plasma-web@1.57.2`
  - fix: Separate `Input`'s animation by b2b and b2c [#908](https://github.com/salute-developers/plasma/pull/908) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Nov 15 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.18.0`
  - feat(plasma-b2c): PreviewGallery features [#924](https://github.com/salute-developers/plasma/pull/924) (51693784+etotsamyi@users.noreply.github.com)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.63.0`
  - chore(plasma-ui): fix sb card cover control [#921](https://github.com/salute-developers/plasma/pull/921) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Ivan Malashchenkov (51693784+etotsamyi@users.noreply.github.com)

---

# (Wed Nov 10 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.62.0`
  - feat(plasma-ui): Added option to enable native input for Pickers [#916](https://github.com/salute-developers/plasma/pull/916) ([@jabzzy](https://github.com/jabzzy))

#### Authors: 1

- Eugene Dashkevich ([@jabzzy](https://github.com/jabzzy))

---

# (Tue Nov 09 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.17.1`
  - fix(plasma-b2c): Import `Image` directly from core [#909](https://github.com/salute-developers/plasma/pull/909) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.35.1`, `@salutejs/plasma-ui@1.61.1`
  - test(plasma-ui): Added for `Image` component [#909](https://github.com/salute-developers/plasma/pull/909) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.35.1`
  - fix: Pass `Image`'s width and height through args [#909](https://github.com/salute-developers/plasma/pull/909) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Nov 09 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.17.0`
  - feat(plasma-b2c): make single slider rail clickable [#913](https://github.com/salute-developers/plasma/pull/913) ([@IArny](https://github.com/IArny))
- `@salutejs/plasma-core@1.35.0`, `@salutejs/plasma-ui@1.61.0`
  - feat(plasma-ui): A11y for `Toast` [#710](https://github.com/salute-developers/plasma/pull/710) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.61.0`
  - test(plasma-ui): `DatePicker` and `TimePicker` ct [#915](https://github.com/salute-developers/plasma/pull/915) ([@fanisco](https://github.com/fanisco))
  - chore(plasma-ui): Change Storybook's iframe lang [#710](https://github.com/salute-developers/plasma/pull/710) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.35.0`
  - test: Improve tests for `TextField` and `TextArea` [#914](https://github.com/salute-developers/plasma/pull/914) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@IArny](https://github.com/IArny)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Nov 03 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.56.2`
  - fix(plasma-web): prevent radiobox elipse shrinking [#912](https://github.com/salute-developers/plasma/pull/912) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# (Mon Nov 01 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.16.2`
  - fix(plasma-b2c): set slider handle box-sizing [#904](https://github.com/salute-developers/plasma/pull/904) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# (Mon Nov 01 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-website@0.4.0`
  - feat(plasma-website): Add Temple Storybook [#881](https://github.com/salute-developers/plasma/pull/881) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.3.0`
  - ci(plasma-temple): Deploy Storybook [#881](https://github.com/salute-developers/plasma/pull/881) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Mon Nov 01 2021)

#### 🐛 Bug Fix

- test(plasma-b2c): Add snapshots for `Uploads`, `AudioPlayer`, `PreviewGallery` components [#892](https://github.com/salute-developers/plasma/pull/892) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-ui@1.60.1`
  - fix(plasma-ui): Fix scroll behavior and range values for `Picker` component [#897](https://github.com/salute-developers/plasma/pull/897) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.56.2`
  - test(plasma-web,plasma-b2c): Add tests and snapshots for `Select` component [#892](https://github.com/salute-developers/plasma/pull/892) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Oct 29 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.56.1`
  - fix(plasma-web): Prevent click on icons of `DropdownItem` [#883](https://github.com/salute-developers/plasma/pull/883) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.16.1`, `@salutejs/plasma-web@1.56.1`
  - fix(plasma-web,plasma-b2c): `Select`'s when multiselect prevent autoclose [#883](https://github.com/salute-developers/plasma/pull/883) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Oct 29 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.34.0`, `@salutejs/plasma-web@1.56.0`, `@salutejs/plasma-web-docs@0.10.0`
  - feat(plasma-ui): `Dropdown` custom composition [#866](https://github.com/salute-developers/plasma/pull/866) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Oct 28 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.15.0`
  - feat: upload progress label [#899](https://github.com/salute-developers/plasma/pull/899) ([@takovoy](https://github.com/takovoy))

#### 🐛 Bug Fix

- `@salutejs/plasma-docs-ui@0.1.0`
  - chore: Convert markdown to HTML [#856](https://github.com/salute-developers/plasma/pull/856) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 2

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))
- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Thu Oct 28 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.49.0`
  - feat(plasma-icons): Update design for `Hearts` icons [#896](https://github.com/salute-developers/plasma/pull/896) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui-docs@0.14.0`, `@salutejs/plasma-web-docs@0.8.0`
  - chore: Add CHANGELOG to docs [#868](https://github.com/salute-developers/plasma/pull/868) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Wed Oct 27 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.13.5`
  - fix(plasma-b2c): handle children number change in ElasticGrid [#893](https://github.com/salute-developers/plasma/pull/893) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# (Tue Oct 26 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.2.3`
  - fix(plasma-temple): fix cart quantity and amount after item was deleted [#894](https://github.com/salute-developers/plasma/pull/894) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - fix(plasma-temple): fix order button offset from bottom [#894](https://github.com/salute-developers/plasma/pull/894) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Tue Oct 26 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.2.2`
  - fix(plasma-temple): fix 100vh mobile [#884](https://github.com/salute-developers/plasma/pull/884) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# (Tue Oct 26 2021)

#### 🐛 Bug Fix

- chore: Update README.md [#895](https://github.com/salute-developers/plasma/pull/895) ([@fanisco](https://github.com/fanisco))
- `@salutejs/cra-template-plasma-basic-template@2.1.1`
  - fix(plasma-basic-template): typings [#885](https://github.com/salute-developers/plasma/pull/885) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Sun Oct 24 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.33.4`
  - fix: b2c preview gallery image size [#890](https://github.com/salute-developers/plasma/pull/890) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Sun Oct 24 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.13.3`
  - fix(plasma-b2c): make PreviewGallery item ratio 16 / 9 [#886](https://github.com/salute-developers/plasma/pull/886) ([@IArny](https://github.com/IArny))
  - fix(plasma-b2c): rename PreviewGallery item button action [#886](https://github.com/salute-developers/plasma/pull/886) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# (Fri Oct 22 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-typo@0.2.1`
  - fix: headers font weight fix [#889](https://github.com/salute-developers/plasma/pull/889) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Fri Oct 22 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.58.1`
  - fix(plasma-ui): Fix showing values for `TimePicker` component [#887](https://github.com/salute-developers/plasma/pull/887) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-ui): Fix showing values for `DataPicker` component [#887](https://github.com/salute-developers/plasma/pull/887) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Fri Oct 22 2021)

#### 🐛 Bug Fix

- ci: Deploy Plasma Website [#851](https://github.com/salute-developers/plasma/pull/851) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-temple@1.2.1`
  - fix(plasma-temple): make props deprecated [#867](https://github.com/salute-developers/plasma/pull/867) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - fix(plasma-temple): Stop updating cart while external update is not finished [#867](https://github.com/salute-developers/plasma/pull/867) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - fix(plasma-temple): fix cart item click, add cart item custom background color [#867](https://github.com/salute-developers/plasma/pull/867) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-ui-docs@0.13.2`
  - chore(plasma-ui-docs): Deleted index page [#851](https://github.com/salute-developers/plasma/pull/851) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui-docs@0.13.2`, `@salutejs/plasma-web-docs@0.7.2`
  - chore: Docs ui/web configuration [#851](https://github.com/salute-developers/plasma/pull/851) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-website@0.0.1`
  - chore: Plasma Main App [#851](https://github.com/salute-developers/plasma/pull/851) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Oct 21 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.13.1`, `@salutejs/plasma-web@1.54.1`
  - fix: grid container max size [#880](https://github.com/salute-developers/plasma/pull/880) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Thu Oct 21 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.58.0`, `@salutejs/plasma-ui-docs@0.13.0`
  - feat(plasma-ui): Added `gradientColor` prop to `Header` [#874](https://github.com/salute-developers/plasma/pull/874) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Oct 21 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.57.0`
  - feat(plasma-ui): `Header`'s back-minimize animation" [#863](https://github.com/salute-developers/plasma/pull/863) ([@fanisco](https://github.com/fanisco))
- `@salutejs/demo-canvas-app@0.34.0`, `@salutejs/plasma-ui@1.57.0`, `@salutejs/plasma-ui-docs@0.12.0`
  - feat(plasma-ui): Added `NueHeader` to replace `Header` in major version [#863](https://github.com/salute-developers/plasma/pull/863) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Oct 21 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.56.1`
  - fix(plasma-ui): `HeaderContent` flex in Chrome 94 [#875](https://github.com/salute-developers/plasma/pull/875) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Oct 21 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.13.0`
  - feat(plasma-b2c): add custom background for editable component [#877](https://github.com/salute-developers/plasma/pull/877) ([@IArny](https://github.com/IArny))
  - feat(plasma-b2c): Added `PreviewGallery` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Added `UploadViusal` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Update `Upload` component; Added `UploadAudio` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Add `AudioPlayer` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Added `UploadAudio` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-b2c): Added `Upload` component [#819](https://github.com/salute-developers/plasma/pull/819) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-icons@1.48.0`
  - feat(plasma-icons): Added `PictureFilled` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
  - feat(plasma-icons): Added `Drag` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.13.0`, `@salutejs/plasma-icons@1.48.0`
  - feat(plasma-icons): Added `Music` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.13.0`
  - test(plasma-b2c): Added tests for `Uploads`,`AudioPlayer`,`PreviewGallery` components [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- [@IArny](https://github.com/IArny)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Tue Oct 19 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-b2c@1.12.1`, `@salutejs/plasma-web@1.53.5`
  - fix(plasma-web): Remove hover from select with empty list [#858](https://github.com/salute-developers/plasma/pull/858) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-b2c): Fix click to empty select [#858](https://github.com/salute-developers/plasma/pull/858) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-web@1.53.5`
  - chore(plasma-web): Bump plasma-colors version [#858](https://github.com/salute-developers/plasma/pull/858) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-web): Fix open `Dropwdown` component if has not item [#858](https://github.com/salute-developers/plasma/pull/858) ([@neretin-trike](https://github.com/neretin-trike))
  - fix(plasma-web): Fix color for hover item in `Dropdown` component [#869](https://github.com/salute-developers/plasma/pull/869) ([@neretin-trike](https://github.com/neretin-trike))
  - chore(plasma-web): Add re-export for `Dropdown` component [#869](https://github.com/salute-developers/plasma/pull/869) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.12.1`
  - fix(plasma-b2c): Remove props offsetTop from `Select` component [#858](https://github.com/salute-developers/plasma/pull/858) ([@neretin-trike](https://github.com/neretin-trike))
  - chore(plasma-b2c): Add stories for `Dropdown` component [#869](https://github.com/salute-developers/plasma/pull/869) ([@neretin-trike](https://github.com/neretin-trike))
  - chore(plasma-b2c): Add global style for `a` tag in storybook [#869](https://github.com/salute-developers/plasma/pull/869) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Oct 18 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.12.0`
  - feat(plasma-b2c): add ElasticGrid component [#847](https://github.com/salute-developers/plasma/pull/847) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# (Fri Oct 15 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.55.3`, `@salutejs/plasma-web@1.53.4`
  - chore(plasma-ui, plasma-web): addon knobs removed [#857](https://github.com/salute-developers/plasma/pull/857) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Fri Oct 15 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.53.3`
  - fix(plasma-web): Remove underline from Dropdown item [#865](https://github.com/salute-developers/plasma/pull/865) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Thu Oct 14 2021)

#### 🐛 Bug Fix

- chore: Delegate CODEOWNERS by folders [#852](https://github.com/salute-developers/plasma/pull/852) ([@fanisco](https://github.com/fanisco))
- ci: fix pkg-locks regeneration [#861](https://github.com/salute-developers/plasma/pull/861) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.11.2`
  - fix(plasma-b2c): Fix re-export from plasma-web for utils [#864](https://github.com/salute-developers/plasma/pull/864) ([@neretin-trike](https://github.com/neretin-trike))
  - docs(b2c): improve ReadMe [#844](https://github.com/salute-developers/plasma/pull/844) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.11.2`, `@salutejs/plasma-core@1.33.2`, `@salutejs/plasma-web@1.53.2`
  - fix(plasma-web, plasma-b2c): Fix re-exporting [#864](https://github.com/salute-developers/plasma/pull/864) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Oct 13 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-colors@0.2.1`
  - fix(plasma-colors): Add types to files field [#855](https://github.com/salute-developers/plasma/pull/855) ([@neretin-trike](https://github.com/neretin-trike))
- `@salutejs/plasma-b2c@1.11.1`, `@salutejs/plasma-web@1.53.1`, `@salutejs/showcase@0.62.1`, `@salutejs/plasma-ui-docs@0.10.1`, `@salutejs/plasma-web-docs@0.6.1`
  - chore: Manual publish for web & b2c [#854](https://github.com/salute-developers/plasma/pull/854) ([@fanisco](https://github.com/fanisco))
- `@salutejs/demo-canvas-app@0.32.1`, `@salutejs/plasma-sb-utils@0.32.1`
  - chore: Update package-locks [#854](https://github.com/salute-developers/plasma/pull/854) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.11.1`, `@salutejs/plasma-core@1.33.1`, `@salutejs/plasma-icons@1.47.1`, `@salutejs/plasma-ui@1.55.1`, `@salutejs/plasma-web@1.53.1`, `@salutejs/plasma-cy-utils@0.3.1`
  - fix: Update package-locks [#853](https://github.com/salute-developers/plasma/pull/853) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# (Mon Oct 11 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.10.0`, `@salutejs/plasma-typo@0.2.0`
  - feat(plasma-typo): Typography separation: bold & regular [#845](https://github.com/salute-developers/plasma/pull/845) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Oct 11 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.9.0`, `@salutejs/plasma-core@1.32.0`, `@salutejs/plasma-web@1.51.0`
  - feat: new grid breakpoint for 16 cols [#825](https://github.com/salute-developers/plasma/pull/825) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# (Mon Oct 11 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.2.0`
  - feat(plasma-temple): Configurable StateLayout background image [#836](https://github.com/salute-developers/plasma/pull/836) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-b2c@1.8.0`
  - feat(b2c): TextArea: new typo [#843](https://github.com/salute-developers/plasma/pull/843) ([@Yeti-or](https://github.com/Yeti-or))
  - feat(plasma-b2c): TextArea for b2c added [#843](https://github.com/salute-developers/plasma/pull/843) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- ci: fix pkg-locks regeneration [#849](https://github.com/salute-developers/plasma/pull/849) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.53.0`
  - chore: Remove Chromatic check [#850](https://github.com/salute-developers/plasma/pull/850) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.8.0`
  - chore(b2c): rmv TextArea story [#843](https://github.com/salute-developers/plasma/pull/843) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

- [@kayman233](https://github.com/kayman233)
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Oct 08 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.7.0`
  - feat(b2c): add Slider [#842](https://github.com/salute-developers/plasma/pull/842) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.7.0`, `@salutejs/plasma-typo@0.1.0`
  - feat: Standard typography system [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.31.0`, `@salutejs/plasma-tokens-b2c@0.7.0`, `@salutejs/plasma-tokens-web@1.13.0`, `@salutejs/plasma-tokens@1.14.0`, `@salutejs/plasma-tokens-utils@0.8.0`
  - feat(plasma-core): Added global `dark0N` colors [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.7.0`, `@salutejs/plasma-core@1.31.0`
  - feat(plasma-b2c): `Toast` icon [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.7.0`, `@salutejs/plasma-core@1.31.0`, `@salutejs/plasma-ui@1.52.0`, `@salutejs/plasma-web@1.50.0`
  - feat(plasma-core): Shared `Toast` between libraries [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- test(plasma-b2c): Update snapshots after applying Standard Typography [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))
- test(b2c): Editable snapshot [#837](https://github.com/salute-developers/plasma/pull/837) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.7.0`
  - docs(plasma-b2c): fix packageName [#841](https://github.com/salute-developers/plasma/pull/841) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-b2c): add storybook stories [#841](https://github.com/salute-developers/plasma/pull/841) ([@Yeti-or](https://github.com/Yeti-or))
  - chore(plasma-b2c): Support compatible typography in storybook [#829](https://github.com/salute-developers/plasma/pull/829) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-cy-utils@0.2.0`
  - build(plasma-cy-utils): fix pck-locks [#829](https://github.com/salute-developers/plasma/pull/829) ([@Yeti-or](https://github.com/Yeti-or))
  - chore(plasma-cy-utils): Update styled-components version [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))
  - test(plasma-b2c): Added B2C typos for cy component test [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.50.0`
  - chore: Skip Notification component test [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.59.0`
  - chore(showcase): Add Standard typography for B2C in showcase [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.7.0`, `@salutejs/plasma-core@1.31.0`, `@salutejs/plasma-ui@1.52.0`, `@salutejs/plasma-web@1.50.0`, `@salutejs/showcase@0.59.0`
  - test: Component test for B2C `Toast` [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

- `@salutejs/plasma-b2c@1.7.0`, `@salutejs/plasma-core@1.31.0`, `@salutejs/plasma-ui@1.52.0`, `@salutejs/plasma-web@1.50.0`
  - build(plasma-core/ui/b2c/web): fix storybook build ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.7.0`
  - chore(plasma-b2c): Bump `plasma-tokens-b2c` version ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Oct 07 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.1.5`
  - fix(plasma-temple): changeState action [#816](https://github.com/salute-developers/plasma/pull/816) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Wed Oct 06 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.6.0`
  - feat(plasma-b2b): Sanitize paste event on Editable [#833](https://github.com/salute-developers/plasma/pull/833) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# (Wed Oct 06 2021)

#### 🐛 Bug Fix

- test(ui): update snapshots [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
- test: increase retries up to 3 [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
- test(b2c): update snapshots [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
- test(web): update snapshots [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple@1.1.4`
  - fix(plasma-temple): Fix HeroSlide styles [#834](https://github.com/salute-developers/plasma/pull/834) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-cy-utils@0.1.1`
  - test: update snapshots [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
  - ci: fix cy-tests build [#830](https://github.com/salute-developers/plasma/pull/830) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.5.1`, `@salutejs/plasma-core@1.30.1`, `@salutejs/plasma-ui@1.51.1`, `@salutejs/plasma-web@1.49.2`, `@salutejs/plasma-cy-utils@0.1.1`
  - test: add SBSans to cypress [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.30.1`, `@salutejs/plasma-ui@1.51.1`, `@salutejs/plasma-web@1.49.2`
  - test(plasma-core/ui/web): fix tests [#830](https://github.com/salute-developers/plasma/pull/830) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon Oct 04 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.5.0`
  - feat(plasma-b2c): Editable component added [#821](https://github.com/salute-developers/plasma/pull/821) ([@IArny](https://github.com/IArny))

#### Authors: 1

- [@IArny](https://github.com/IArny)

---

# (Mon Oct 04 2021)

#### 🐛 Bug Fix

- `@salutejs/cra-template-plasma-shop-template@2.1.1`, `@salutejs/plasma-temple@1.1.3`
  - fix(plasma-temple): fix cart scroll [#813](https://github.com/salute-developers/plasma/pull/813) ([@kayman233](https://github.com/kayman233))
- `@salutejs/cra-template-plasma-shop-template@2.1.1`
  - chore(plasma-shop-template, plasma-temple): update versions [#813](https://github.com/salute-developers/plasma/pull/813) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Mon Oct 04 2021)

#### 🐛 Bug Fix

- test(plasma-ui/web/b2c): fix cy component tests [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-temple@1.1.2`
  - fix(plasma-temple): Fix Layout scroll [#815](https://github.com/salute-developers/plasma/pull/815) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-b2c@1.4.1`, `@salutejs/plasma-core@1.30.1`, `@salutejs/plasma-ui@1.51.1`, `@salutejs/plasma-web@1.49.1`
  - test(plasma-ui/web/b2c): Typography: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): TextField: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): TextArea: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): Tabs: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): Switch: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): Radiobox: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): Price: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): PaginationDots: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): Checkbox: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): Button: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.4.1`, `@salutejs/plasma-web@1.49.1`
  - test(plasma-web/b2c): Tooltip: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-web/b2c): Select: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-web/b2c): Progress: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-web/b2c): Notification: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-web/b2c): Modal: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-web/b2c): Link: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))
  - test(plasma-ui/web/b2c): Dropdown: cy component test [#827](https://github.com/salute-developers/plasma/pull/827) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Sun Oct 03 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.30.0`, `@salutejs/plasma-ui@1.51.0`, `@salutejs/plasma-web@1.49.0`, `@salutejs/plasma-cy-utils@0.1.0`
  - feat(plasma-cy-utils): padMe [#824](https://github.com/salute-developers/plasma/pull/824) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- ci: improve lergna ignore [#824](https://github.com/salute-developers/plasma/pull/824) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Sun Oct 03 2021)

#### 🐛 Bug Fix

- chore: .eslintignore [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/demo-canvas-app@0.27.2`
  - fix: dummy-release [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.3.2`, `@salutejs/plasma-cy-utils@0.0.1`
  - test(plasma-b2c): enable cypress comp tests [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.29.1`, `@salutejs/plasma-ui@1.50.2`, `@salutejs/plasma-web@1.48.2`, `@salutejs/plasma-cy-utils@0.0.1`
  - chore: move cypress helpers to utils [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.29.1`
  - test(Badge): update screens [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.29.1`, `@salutejs/plasma-ui@1.50.2`, `@salutejs/plasma-web@1.48.2`
  - test(plasma-web/plasma-ui): move cy tests to plasma-core [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-web@1.48.2`
  - test(plasma-web): fix cypress comp-tests [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Sep 28 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-temple@1.1.1`
  - fix(plasma-temple): fix page types [#820](https://github.com/salute-developers/plasma/pull/820) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Tue Sep 28 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.1.0`
  - feat(plasma-temple): opening item from cart [#814](https://github.com/salute-developers/plasma/pull/814) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- ci: disable pck-lock update in docs [#817](https://github.com/salute-developers/plasma/pull/817) ([@Yeti-or](https://github.com/Yeti-or))
- ci: fix failing of pkg-locks [#817](https://github.com/salute-developers/plasma/pull/817) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Sep 24 2021)

#### 💥 Breaking Change

- `@salutejs/plasma-temple@1.0.0`
  - feat(plasma-temple)!: major release [#818](https://github.com/salute-developers/plasma/pull/818) ([@LamaEats](https://github.com/LamaEats))

#### 🚀 Enhancement

- `@salutejs/plasma-temple@1.0.0`
  - feat(plasma-temple): Add page spinner [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): error page layout [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): Typed props for platform components [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Cart can be without delivery [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Insets with device pixel ratio [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Empty cart mobile version [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): simplify types [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Mobile cart and controlled cart [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Make page layout scrollable [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Adapt product components for mobile [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Add header minimize behavior [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Add active index to item change callback in HeroSlider [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Add on item cchange callback to HeroSlider [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Add useForm hook [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Add generic to GalleryPage [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Add todo [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Handle gallery card click inside package [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Simplify custom gallery card interface [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Refactor gallery [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Rename onScrollBottom callback in GridPage [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): On scrolled to bottom callback for GridPage [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Posibility to have custom background on layout state page [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Improve gallery types, fix redundant rerender because of changeState [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Add go to screen page method [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Add cart quantity limit [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Component for custom full screen background [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Custom entity component in ItemPage [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Store shop landing page active card index [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Posibility to skip assistant native panel insets [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Refactor ItemDescription type [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Refactor ItemCellProps [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Fix ItemMainSection linter error [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Separate interface for description on ItemPages [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): ReactElement in ItemPage description [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Refactor ItemPage [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Fix useMemo in ItemPage [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): Add onItemFoucs callback for items on ItemPage [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat(plasma-temple): remove gallery animation for portal [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): temp [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Get rid of first gallery scroll [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): StateLayout component [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): implements Page lazy api [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): Add posibility to set tab index for carousel card [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Ability to disable payment [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): add grid page [#811](https://github.com/salute-developers/plasma/pull/811) ([@Yeti-or](https://github.com/Yeti-or))
  - feat(plasma-temple): Add posibility to change recipient data add form validation for voice field [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): HeroSlider touch events [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): HeroSlider components [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): Cart bubble [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Improve GalleryPage components [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): Cart page [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): ShopLandingPage components [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): Confirm Order page [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Order Success page [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): description conent can be node. Add export product components [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Support dispatching standart app actions via assistant [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Add reusable components for product pages [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Enhance state of Video and Gallery pages, refactor useInitializeAssistant hook [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): Form components [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-temple): move AnyObject to common types [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): fix eslint rules [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-temple): refactor types [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-template): Refactor API [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-template): Improve video player customization. Fix small bugs [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - feat(plasma-templlate): Video page [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-template): Video player [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-template): entity background is optional [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-template): render custom gallery card [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-temple): add unit tests [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - feat(plasma-template): Invoke onHistoryPopState callback when on popstate history event [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-template): make id required only for multi gallery [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-template): set header title for an active gallery [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-template): support multi gallery [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-template): add e2e attributes for gallery [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-template): add e2e test attributes [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - feat(plasma-temple): add new package [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))

#### 🐛 Bug Fix

- `@salutejs/cra-template-plasma-basic-template@2.0.0`, `@salutejs/cra-template-plasma-shop-template@2.0.0`, `@salutejs/plasma-temple@1.0.0`
  - docs(plasma-templte): fix docs [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/plasma-temple@1.0.0`
  - fix(plasma-temple): circular deps [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): resolve lint errors [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): export ErrorPage from index [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - docs(plasma-temple): app hooks & scenario hooks [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): export GetInitialProps typing [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): title for Gallery component can be optional [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): tv detection [#811](https://github.com/salute-developers/plasma/pull/811) ([@Yeti-or](https://github.com/Yeti-or))
  - fix(plasma-temple): add focus for player button [#811](https://github.com/salute-developers/plasma/pull/811) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-temple): callOnce for useFocusOnMount added [#811](https://github.com/salute-developers/plasma/pull/811) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-temple): can hide timeline tick [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): remove tabindex attr for portal ua [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): fix mobile font size [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - fix(plasma-temple): Fix button view for portal in HeroSlide [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - Update packages/plasma-temple/docs/core.md [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - docs(plasma-temple): Add Page.lazy description [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - docs(plasma-temple): Docs core [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - docs(plasma-temple): add forms.md docs [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): assistantClient can be get outside React [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): HeroSlider skip last slide [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): circular deps in components [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): media player components fixes [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): fix GridPage api [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): fix playback on key hold [#811](https://github.com/salute-developers/plasma/pull/811) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - fix(plasma-temple): fix init parameters for assistant [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): smooth scroll on GridPage [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): dont call `getInitialProps` if `state` is defined [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): fix effects MediaTimeLine component [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): return component from `lazy fn` if `getInitialProps` is not defined [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): lil fixes + story for new component [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): apply new component for existing page layout [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - chore(plasma-temple): utility type for Header component props [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): add margin for GridPage Content [#811](https://github.com/salute-developers/plasma/pull/811) ([@Yeti-or](https://github.com/Yeti-or))
  - fix(plasma-temple): Fix cart page behavior [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - fix(plasma-temple): Fix focus and scroll gallery and landing page behaviour [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - refactor(plasma-temple): Media/Video players improve [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): adopt HeroSlider for portal [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): useRemoteHandlers conditions [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): Remove redundant padding [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - fix(plasma-temple): Fix gallery focus [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - refactor(plasma-temple): Rename ConfirmOrder and OrderSuccess [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - fix(plasma-temple): Fix twice button click and input form submit [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - chore(plasma-temple): assistant-client up version [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): Fix action button clicks with spatial navigation [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - build(plasma-temple): Build via rollup [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - chore(plasma-temple): improve gallery page api [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-temple): Fix changeState [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - chore(plasma-temple): apply code style rules [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - chore: update deps [#811](https://github.com/salute-developers/plasma/pull/811) ([@OgNellis](https://github.com/OgNellis))
  - fix(plasma-temple): мелкие исправления и доработки апи [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))
  - fix(plasma-template): Get rid of header animation if logo is absent. Add header back button [#811](https://github.com/salute-developers/plasma/pull/811) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
  - docs(plasma-temple): add storybook configs [#811](https://github.com/salute-developers/plasma/pull/811) ([@Yeti-or](https://github.com/Yeti-or))
  - Apply the voice navigation [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - fix(plasma-temple): CardMedia children [#811](https://github.com/salute-developers/plasma/pull/811) ([@Yeti-or](https://github.com/Yeti-or))
  - fix(plasma-template): set default focus on gallery card [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - fix(plasma-template): use all header props [#811](https://github.com/salute-developers/plasma/pull/811) (kv.polyanskiy@gmail.com)
  - fix(plasma-temple): add package docs [#811](https://github.com/salute-developers/plasma/pull/811) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Konstantin Polyanskiy (kv.polyanskiy@gmail.com)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Sep 24 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.47.0`
  - feat(plasma-web): `Dropdown` `onToggle` notification [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-web): Moved `SingleSelect` and `MultiSelect` functionality to hocs [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-web): Customize `Dropdown` with CSS Vars [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.2.0`
  - feat(plasma-b2c): Added group `Select` functionality [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-b2c): Added `Select` component [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- ci: update cypress container [#573](https://github.com/salute-developers/plasma/pull/573) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-b2c@1.2.0`
  - fix(plasma-b2c): Flip `Select` arrow [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.47.0`
  - fix(plasma-web): Removed `DropdownList` min-width [#805](https://github.com/salute-developers/plasma/pull/805) ([@fanisco](https://github.com/fanisco))
  - chore: make cypress work again [#573](https://github.com/salute-developers/plasma/pull/573) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.29.0`, `@salutejs/plasma-ui@1.49.0`, `@salutejs/plasma-web@1.47.0`
  - chore: resolve cypress and jest conflicts [#573](https://github.com/salute-developers/plasma/pull/573) ([@OgNellis](https://github.com/OgNellis))
- `@salutejs/plasma-ui@1.49.0`, `@salutejs/plasma-web@1.47.0`
  - chore: cypress component testing [#573](https://github.com/salute-developers/plasma/pull/573) (dakhetov@outlook.com)
- `@salutejs/plasma-ui-docs@0.4.0`
  - docs(plasma-ui-docs): misspel [#809](https://github.com/salute-developers/plasma/pull/809) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 4

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Daniil Akhetov (dakhetov@outlook.com)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Sep 22 2021)

#### 🚀 Enhancement

- feat(plasma-shop-template): Create CRA template [#807](https://github.com/salute-developers/plasma/pull/807) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- feat(plasma-shop-template): Shop template [#807](https://github.com/salute-developers/plasma/pull/807) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/cra-template-plasma-basic-template@1.3.0`
  - feat(plasma-basic-template): edit template [#808](https://github.com/salute-developers/plasma/pull/808) ([@andart71](https://github.com/andart71))
  - feat(plasma-basic-template): CRA template for Salute [#808](https://github.com/salute-developers/plasma/pull/808) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/cra-template-plasma-shop-template@1.3.0`
  - feat(plasma-shop-template): Update version of plasma-ui and plasma-temple [#807](https://github.com/salute-developers/plasma/pull/807) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/cra-template-plasma-basic-template@1.3.0`
  - fix(plasma-basic-template): code styles [#810](https://github.com/salute-developers/plasma/pull/810) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/cra-template-plasma-shop-template@1.3.0`
  - chore(plasma-shop-template): check run ci [#807](https://github.com/salute-developers/plasma/pull/807) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 3

- [@andart71](https://github.com/andart71)
- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Tue Sep 21 2021)

#### 🐛 Bug Fix

- chore(plasma-ui): Update `Button` snapshot [#806](https://github.com/salute-developers/plasma/pull/806) ([@fanisco](https://github.com/fanisco))
- ci: Deploy documentation with subfolder for web [#801](https://github.com/salute-developers/plasma/pull/801) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.48.1`
  - fix(plasma-ui): Separate gradient masks for `Picker` [#708](https://github.com/salute-developers/plasma/pull/708) ([@fanisco](https://github.com/fanisco))
  - test(plasma-ui): `PickerItem`'s styling utils [#708](https://github.com/salute-developers/plasma/pull/708) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-ui): `PickerItem` `size="s"` text cut at the bottom [#708](https://github.com/salute-developers/plasma/pull/708) ([@fanisco](https://github.com/fanisco))
  - chore(plasma-ui): E2E test for `DatePicker` and `TimePicker` [#806](https://github.com/salute-developers/plasma/pull/806) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.28.1`, `@salutejs/plasma-ui@1.48.1`, `@salutejs/plasma-web@1.46.1`
  - chore: Delete extract-sb-docgen-info [#801](https://github.com/salute-developers/plasma/pull/801) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui-docs@0.3.1`, `@salutejs/plasma-web-docs@0.0.1`
  - chore: Displaying `PropsTable` & `Description` with `react-docgen-typescript` [#801](https://github.com/salute-developers/plasma/pull/801) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs-ui@0.0.1`, `@salutejs/plasma-ui-docs@0.3.1`, `@salutejs/plasma-web-docs@0.0.1`
  - chore: Separate UI library for documentation [#801](https://github.com/salute-developers/plasma/pull/801) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui-docs@0.3.1`
  - chore: Plasma UI documentation website [#801](https://github.com/salute-developers/plasma/pull/801) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web-docs@0.0.1`
  - chore: Plasma Web documentation website [#801](https://github.com/salute-developers/plasma/pull/801) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Sep 20 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-b2c@1.1.0`, `@salutejs/showcase@0.53.0`
  - feat(plasma-b2c): Added `Tabs` and `TabItem` component [#804](https://github.com/salute-developers/plasma/pull/804) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- ci: Deploy B2C Storybook [#804](https://github.com/salute-developers/plasma/pull/804) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.28.0`
  - fix: `Tabs` disabled state [#804](https://github.com/salute-developers/plasma/pull/804) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-b2c@1.1.0`, `@salutejs/showcase@0.53.0`
  - chore: Initiated `plasma-b2c` package [#804](https://github.com/salute-developers/plasma/pull/804) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Sep 15 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.47.1`
  - fix(plasma-ui): Added `coverGradient` prop to `CardContent` [#716](https://github.com/salute-developers/plasma/pull/716) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs@0.2.1`
  - chore(plasma-docs): Update `docusaurus` to `2.0.0-beta.6` [#800](https://github.com/salute-developers/plasma/pull/800) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-docs): Custom live preview wrapper [#800](https://github.com/salute-developers/plasma/pull/800) ([@fanisco](https://github.com/fanisco))
  - docs: Docs fixes in intros [#800](https://github.com/salute-developers/plasma/pull/800) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Sep 14 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.45.0`
  - feat(plasma-web): Added `Carousel`, `PaginationDots` and `Select` to `index.ts` [#803](https://github.com/salute-developers/plasma/pull/803) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.45.0`, `@salutejs/plasma-sb-utils@0.25.0`
  - feat(plasma-sb-utils): `PaletteGrid`, `disableProps`, `IconsPlaceholder`, `InSpacingDecorator` [#803](https://github.com/salute-developers/plasma/pull/803) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-colors@0.2.0`
  - feat(plasma-colors): Plasma colors types [#803](https://github.com/salute-developers/plasma/pull/803) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Sep 14 2021)

#### 🐛 Bug Fix

- ci: remove dependabot [#799](https://github.com/salute-developers/plasma/pull/799) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.27.4`, `@salutejs/plasma-web@1.44.4`
  - fix(plasma-web): Collision of `Button` and global custom css [#703](https://github.com/salute-developers/plasma/pull/703) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs@0.1.4`, `@salutejs/demo-canvas-app@0.23.4`, `demo-tokens@0.6.1`, `@salutejs/plasma-colors@0.1.2`, `@salutejs/plasma-tokens-b2c@0.5.3`, `@salutejs/plasma-tokens-web@1.11.3`, `@salutejs/plasma-tokens@1.12.2`, `@salutejs/extract-sb-docgen-info@0.1.1`, `@salutejs/plasma-sb-utils@0.24.4`, `@salutejs/plasma-tokens-utils@0.7.1`, `@salutejs/showcase@0.51.4`
  - build: freeze typescript [#799](https://github.com/salute-developers/plasma/pull/799) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Thu Sep 09 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.46.3`
  - fix(plasma-ui): Disabled state for `Checkbox` and `Radiobox` [#791](https://github.com/salute-developers/plasma/pull/791) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.44.3`
  - fix(plasma-web): Disabled state for `Checkbox` [#791](https://github.com/salute-developers/plasma/pull/791) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Sep 09 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.27.3`
  - fix: Display `inline-flex` for `Badge` [#784](https://github.com/salute-developers/plasma/pull/784) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.44.2`
  - chore(plasma-web): Storybook controls for Button, Carousel, Checkbox, Modal [#651](https://github.com/salute-developers/plasma/pull/651) ([@kayman233](https://github.com/kayman233))
  - chore(plasma-web): Storybook controls for Notification, PaginationDots, Progress, Radiobox [#652](https://github.com/salute-developers/plasma/pull/652) ([@kayman233](https://github.com/kayman233))
  - chore(plasma-web): Storybook controls for Tooltip, Badge, Image, Price, Spinner [#662](https://github.com/salute-developers/plasma/pull/662) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-docs@0.1.2`
  - docs(plasma-ui): Change tag of `Tabs` and `TabItem` [#724](https://github.com/salute-developers/plasma/pull/724) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.27.3`, `@salutejs/plasma-ui@1.46.2`
  - feat(plasma-ui, plasma-core): Added `forwardedAs` and `as` props to `Tabs` [#724](https://github.com/salute-developers/plasma/pull/724) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.46.2`
  - chore(plasma-ui): Storybook controls for Card, Carousel, Cell, Header, Pickers [#647](https://github.com/salute-developers/plasma/pull/647) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-ui): visibleItems for TimePicker fix [#647](https://github.com/salute-developers/plasma/pull/647) ([@kayman233](https://github.com/kayman233))
  - chore(plasma-ui): fix cell icons [#647](https://github.com/salute-developers/plasma/pull/647) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Sep 08 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens-b2c@0.5.1`
  - fix(plasma-tokens-b2c): Confusing `paragraph` and `inverse` colors in themes [#709](https://github.com/salute-developers/plasma/pull/709) ([@fanisco](https://github.com/fanisco))
  - chore(plasma-tokens-b2c): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/showcase@0.51.1`
  - chore(showcase): Test `label` for `Checkbox` and `Radiobox` [#698](https://github.com/salute-developers/plasma/pull/698) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.27.2`, `@salutejs/plasma-ui@1.46.1`, `@salutejs/plasma-web@1.44.1`
  - fix: Refactor `Checkbox` & `Radiobox` in order of better understanding [#698](https://github.com/salute-developers/plasma/pull/698) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.44.1`
  - chore(plasma-ui): update ts/styled-comps deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
  - chore(plasma-web): update storybook deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
  - chore(plasma-web): update build deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.46.1`
  - chore(plasma-ui): update ts/styled-comps deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
  - chore(plasma-ui): update storybook deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
  - chore(plasma-ui): update test deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
  - chore(plasma-ui): update build deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens-web@1.11.1`
  - chore(plasma-tokens-web): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-icons@1.39.1`
  - chore(plasma-icons): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.27.2`
  - chore(plasma-core): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-colors@0.1.1`
  - chore(plasma-colors): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens@1.12.1`
  - chore(plasma-tokens): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Sep 08 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.46.0`
  - feat(plasma-ui): value format for Stepper added [#675](https://github.com/salute-developers/plasma/pull/675) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-web@1.44.0`
  - feat(plasma-web): Added `TabsController` in order to use keyboard arrows [#687](https://github.com/salute-developers/plasma/pull/687) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/extract-sb-docgen-info@0.1.0`
  - chore: Publish extract-docgen-info [#715](https://github.com/salute-developers/plasma/pull/715) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.44.0`
  - docs(plasma-web): Storybook controls for Select, Switch, TextField [#688](https://github.com/salute-developers/plasma/pull/688) ([@kayman233](https://github.com/kayman233))
- `@salutejs/extract-sb-docgen-info@0.1.0`, `@salutejs/plasma-sb-utils@0.24.0`
  - chore: Add `.npmrc` in utils [#702](https://github.com/salute-developers/plasma/pull/702) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs@0.1.0`, `@salutejs/plasma-web@1.44.0`
  - docs(plasma-web): Describe `TabsController` [#687](https://github.com/salute-developers/plasma/pull/687) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs@0.1.0`
  - chore(plasma-docs): Edit url [#700](https://github.com/salute-developers/plasma/pull/700) ([@fanisco](https://github.com/fanisco))
  - chore(plasma-docs): Fix homepage's main button [#700](https://github.com/salute-developers/plasma/pull/700) ([@fanisco](https://github.com/fanisco))
  - chore(plasma-docs): Replace sacred link to Icons service [#700](https://github.com/salute-developers/plasma/pull/700) ([@fanisco](https://github.com/fanisco))
  - docs: Writing new docs for Plasma Web [#648](https://github.com/salute-developers/plasma/pull/648) ([@fanisco](https://github.com/fanisco))
  - ci: Deploy documentation [#648](https://github.com/salute-developers/plasma/pull/648) ([@fanisco](https://github.com/fanisco))
  - chore: Docs on Docusaurus engine [#648](https://github.com/salute-developers/plasma/pull/648) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-docs@0.1.0`, `@salutejs/plasma-ui@1.46.0`
  - docs: Writing new docs for Plasma Devices [#648](https://github.com/salute-developers/plasma/pull/648) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.46.0`, `@salutejs/plasma-web@1.44.0`, `@salutejs/extract-sb-docgen-info@0.1.0`
  - chore: Storybook docgenInfo extraction tool [#648](https://github.com/salute-developers/plasma/pull/648) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Sep 01 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.43.0`
  - feat(plasma-web): Pass color and contentLeft to DropdownItem [#683](https://github.com/salute-developers/plasma/pull/683) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.43.0`
  - fix(plasma-web): Dropdown shadow black [#683](https://github.com/salute-developers/plasma/pull/683) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-web): Pass DropdownItem border radius as separate CSS Var [#683](https://github.com/salute-developers/plasma/pull/683) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Aug 31 2021)

#### 🐛 Bug Fix

- chore: Add `LamaEats` to `CODEOWNERS` [#692](https://github.com/salute-developers/plasma/pull/692) ([@fanisco](https://github.com/fanisco))
- chore: CODEOWNERS [#674](https://github.com/salute-developers/plasma/pull/674) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.27.1`
  - fix(plasma-core): fix monthName formatter [#693](https://github.com/salute-developers/plasma/pull/693) ([@OgNellis](https://github.com/OgNellis))
- `@salutejs/plasma-web@1.42.1`
  - docs(plasma-web): Storybook controls for Tabs, TextArea [#661](https://github.com/salute-developers/plasma/pull/661) ([@kayman233](https://github.com/kayman233))
  - chore(plasma-web): disableProps added [#661](https://github.com/salute-developers/plasma/pull/661) ([@kayman233](https://github.com/kayman233))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Aug 27 2021)

#### 🚀 Enhancement

- `@salutejs/demo-canvas-app@0.21.0`
  - feat(demo-canvas-app): Tabs page [#659](https://github.com/salute-developers/plasma/pull/659) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.27.0`, `@salutejs/plasma-ui@1.44.0`
  - feat: A11y Tabs [#659](https://github.com/salute-developers/plasma/pull/659) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.44.0`
  - chore(plasma-ui): Refactor tabs [#659](https://github.com/salute-developers/plasma/pull/659) ([@fanisco](https://github.com/fanisco))
  - chore(plasma-ui): Storybook controls for PaginationDots, Price, Spinner, TextArea, TextField [#639](https://github.com/salute-developers/plasma/pull/639) ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Aug 27 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.43.0`, `@salutejs/showcase@0.48.0`
  - feat(plasma-ui): Add showcase [#660](https://github.com/salute-developers/plasma/pull/660) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- `@salutejs/plasma-ui@1.43.0`
  - feat(plasma-ui): Add Sheet component [#660](https://github.com/salute-developers/plasma/pull/660) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.43.0`
  - chore(plasma-ui): Storybook controls for Tabs [#649](https://github.com/salute-developers/plasma/pull/649) ([@kayman233](https://github.com/kayman233))
- `@salutejs/showcase@0.48.0`
  - chore: Moved docs/showcase to utils/showcase [#668](https://github.com/salute-developers/plasma/pull/668) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Aug 23 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.26.0`
  - feat(plasma-ui): Switch add readOnly prop [#650](https://github.com/salute-developers/plasma/pull/650) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Aug 20 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.46.0`, `@salutejs/plasma-core@1.25.0`, `@salutejs/plasma-tokens-b2c@0.4.0`, `@salutejs/plasma-tokens-web@1.10.0`, `@salutejs/plasma-tokens@1.11.0`, `@salutejs/plasma-ui@1.41.0`, `@salutejs/plasma-web@1.39.0`, `@salutejs/plasma-tokens-utils@0.7.0`
  - feat: Skeleton in core/ui/web [#628](https://github.com/salute-developers/plasma/pull/628) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens-utils@0.7.0`
  - fix(plasma-tokens-utils): Escape token value [#628](https://github.com/salute-developers/plasma/pull/628) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Aug 20 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.24.0`, `@salutejs/plasma-ui@1.40.0`
  - feat: A11y Switch [#633](https://github.com/salute-developers/plasma/pull/633) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore(update-deps): move update-services ip to env [#646](https://github.com/salute-developers/plasma/pull/646) ([@OgNellis](https://github.com/OgNellis))
- `@salutejs/plasma-ui@1.40.0`
  - chore(plasma-ui): Storybook controls for Skeleton, Stepper, Toast [#640](https://github.com/salute-developers/plasma/pull/640) ([@kayman233](https://github.com/kayman233))
  - chore(plasma-ui): Storybook controls for Badge, Button, Icon, Image [#627](https://github.com/salute-developers/plasma/pull/627) ([@kayman233](https://github.com/kayman233))
  - chore(plasma-ui): disableProps added [#627](https://github.com/salute-developers/plasma/pull/627) ([@kayman233](https://github.com/kayman233))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Aug 18 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.44.0`, `@salutejs/plasma-ui@1.39.0`
  - feat(plasma-ui): add Slider component [#584](https://github.com/salute-developers/plasma/pull/584) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Wed Aug 18 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.38.2`
  - fix(plasma-ui): fix vertical position of HeaderBack [#634](https://github.com/salute-developers/plasma/pull/634) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Wed Aug 18 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.38.1`
  - fix(plasma-ui): add textAlign prop [#618](https://github.com/salute-developers/plasma/pull/618) ([@ayymkozb](https://github.com/ayymkozb))
  - fix(plasma-ui): calculate props in component [#618](https://github.com/salute-developers/plasma/pull/618) ([@ayymkozb](https://github.com/ayymkozb))
  - fix(plasma-ui): check ref commit [#618](https://github.com/salute-developers/plasma/pull/618) ([@ayymkozb](https://github.com/ayymkozb))
  - fix(plasma-ui): marquee fix [#618](https://github.com/salute-developers/plasma/pull/618) ([@ayymkozb](https://github.com/ayymkozb))

#### Authors: 1

- [@ayymkozb](https://github.com/ayymkozb)

---

# (Mon Aug 16 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.23.0`, `@salutejs/plasma-ui@1.38.0`
  - feat(plasma-ui): tabs api changed [#593](https://github.com/salute-developers/plasma/pull/593) ([@kayman233](https://github.com/kayman233))
  - feat(plasma-ui): tabs animation added [#593](https://github.com/salute-developers/plasma/pull/593) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Tue Aug 10 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.37.0`
  - feat(plasma-ui): Add mixin reexports from core [#629](https://github.com/salute-developers/plasma/pull/629) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.37.0`
  - docs(plasma-ui): Mixin import from plasma-ui [#629](https://github.com/salute-developers/plasma/pull/629) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Aug 06 2021)

#### 🚀 Enhancement

- `@salutejs/demo-canvas-app@0.13.0`
  - feat(demo-canvas-app): Added Grid page [#607](https://github.com/salute-developers/plasma/pull/607) ([@fanisco](https://github.com/fanisco))
  - feat(demo-canvas-app): Header in layout [#607](https://github.com/salute-developers/plasma/pull/607) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.22.0`, `@salutejs/plasma-ui@1.36.0`
  - fix: Execution layout effect on server [#607](https://github.com/salute-developers/plasma/pull/607) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Aug 06 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.21.1`, `@salutejs/plasma-ui@1.35.1`, `@salutejs/plasma-web@1.34.1`
  - fix(plasma-core): Image: add role attr [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Aug 06 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens-b2c@0.3.0`, `@salutejs/plasma-tokens-web@1.9.0`, `@salutejs/plasma-tokens@1.10.0`
  - feat: Build plasma tokens without rollup [#608](https://github.com/salute-developers/plasma/pull/608) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Aug 04 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.21.0`, `@salutejs/plasma-ui@1.34.0`
  - feat: Spacing mixin applySpacing [#585](https://github.com/salute-developers/plasma/pull/585) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: Update issue templates [#609](https://github.com/salute-developers/plasma/pull/609) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Aug 02 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.32.0`
  - feat(plasma-web): Add `hocs`, `hooks`, `mixins`, `types` and `utils` from plasma-core [#592](https://github.com/salute-developers/plasma/pull/592) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Aug 02 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.32.0`
  - feat(plasma-ui): Added index exports for hooks and etc [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.31.0`
  - feat(plasma-web): Index imports for treeshaking [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))
- `@salutejs/demo-canvas-app@0.9.0`
  - feat(demo-canvas-app): Carousel page [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/demo-canvas-app@0.9.0`, `@salutejs/plasma-core@1.20.0`, `@salutejs/plasma-icons@1.27.0`, `@salutejs/plasma-ui@1.32.0`, `@salutejs/plasma-web@1.31.0`
  - ci: Build plasma without rollup [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Jul 30 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.31.1`
  - fix(plasma-ui): huawei detection fix [#583](https://github.com/salute-developers/plasma/pull/583) (nicolai.v.95@gmail.com)
  - docs(plasma-ui): Show provider in stories [#575](https://github.com/salute-developers/plasma/pull/575) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- nsvoevodin (nicolai.v.95@gmail.com)

---

# (Tue Jul 27 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.31.0`
  - feat(plasma-ui): Header layout [#551](https://github.com/salute-developers/plasma/pull/551) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.36.0`, `@salutejs/plasma-ui@1.31.0`
  - feat(plasma-ui): Header minimize or back [#551](https://github.com/salute-developers/plasma/pull/551) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.31.0`
  - fix(plasma-ui): Pass rest props to TextBox if only children presented [#551](https://github.com/salute-developers/plasma/pull/551) ([@fanisco](https://github.com/fanisco))
  - docs(plasma-ui): assistant usage fix [#562](https://github.com/salute-developers/plasma/pull/562) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-icons@1.26.0`
  - fix(plasma-icons): chevron-icons updated [#551](https://github.com/salute-developers/plasma/pull/551) ([@kayman233](https://github.com/kayman233))
- `@salutejs/showcase@0.36.0`
  - chore(showcase): Display theme/typo switchers [#551](https://github.com/salute-developers/plasma/pull/551) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Jul 21 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.29.1`
  - fix(plasma-web): form submit trigger inside select [#557](https://github.com/salute-developers/plasma/pull/557) ([@tsumo](https://github.com/tsumo))

#### Authors: 1

- [@tsumo](https://github.com/tsumo)

---

# (Tue Jul 20 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-web@1.29.0`
  - feat(plasma-web): Integrate Dropdown into Select [#545](https://github.com/salute-developers/plasma/pull/545) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.35.0`, `@salutejs/plasma-web@1.29.0`
  - feat(plasma-web): Added Dropdown component [#545](https://github.com/salute-developers/plasma/pull/545) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Jul 19 2021)

#### 🐛 Bug Fix

- `@salutejs/showcase@0.34.2`, `@salutejs/plasma-ui@1.30.2`, `@salutejs/plasma-web@1.28.2`
  - fix: remove double ampersands [#537](https://github.com/salute-developers/plasma/pull/537) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Fri Jul 16 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.30.1`, `@salutejs/plasma-web@1.28.1`
  - fix(plasma-ui, plasma-web): toolbar buttons return [#547](https://github.com/salute-developers/plasma/pull/547) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Thu Jul 15 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.30.0`
  - feat(plasma-ui): Detect SberBoxTop [#546](https://github.com/salute-developers/plasma/pull/546) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Jul 15 2021)

#### 🚀 Enhancement

- `@salutejs/demo-canvas-app@0.5.0`
  - feat(demo-canvas-app): Added Switch to PickersPage [#542](https://github.com/salute-developers/plasma/pull/542) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/demo-canvas-app@0.5.0`
  - fix(demo-canvas-app): Date revise in footnote - no +1 to day [#542](https://github.com/salute-developers/plasma/pull/542) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Jul 14 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.19.0`
  - feat(plasma-core): delete storybook [#535](https://github.com/salute-developers/plasma/pull/535) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- `@salutejs/showcase@0.32.0`, `@salutejs/plasma-ui@1.28.0`, `@salutejs/plasma-web@1.26.0`
  - feat(plasma-ui, plasma-web, showcase): sb-essentials added [#535](https://github.com/salute-developers/plasma/pull/535) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Wed Jul 14 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.25.3`
  - fix(plasma-web): TextField can accept deferred defaultValue [#536](https://github.com/salute-developers/plasma/pull/536) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Jul 13 2021)

#### 🐛 Bug Fix

- `@salutejs/demo-canvas-app@0.3.2`, `@salutejs/plasma-ui@1.27.2`
  - fix(plasma-ui): Toast fade top placement [#528](https://github.com/salute-developers/plasma/pull/528) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Jul 13 2021)

#### 🐛 Bug Fix

- `@salutejs/demo-canvas-app@0.3.1`, `@salutejs/plasma-core@1.18.1`, `@salutejs/plasma-ui@1.27.1`
  - fix: Pickers performance, no unnecessary rerender [#527](https://github.com/salute-developers/plasma/pull/527) ([@fanisco](https://github.com/fanisco))
- `@salutejs/demo-canvas-app@0.3.1`
  - ci(demo-canvas-app): Fix public url if isnt a PR build [#527](https://github.com/salute-developers/plasma/pull/527) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Jul 13 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.18.0`, `@salutejs/plasma-icons@1.23.0`, `@salutejs/plasma-ui@1.27.0`, `@salutejs/plasma-web@1.25.0`
  - feat: react17 and test job added [#496](https://github.com/salute-developers/plasma/pull/496) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- fix(docs): versions in contributing.md added [#496](https://github.com/salute-developers/plasma/pull/496) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Fri Jul 09 2021)

#### 🚀 Enhancement

- `@salutejs/demo-canvas-app@0.2.0`
  - feat: Canvas demo app [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.26.0`
  - feat: TimePicker throws exception for out of range value [#516](https://github.com/salute-developers/plasma/pull/516) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.26.0`
  - fix(plasma-ui): Header back button position [#517](https://github.com/salute-developers/plasma/pull/517) ([@fanisco](https://github.com/fanisco))
  - docs: Documentation for hocs [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-ui): Picker focus / control remote [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
  - refactor(plasma-ui): Picker component refactor [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-web): Pass ids in Date&TimePicker [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-ui): Date&TimePicker rest attributes on wrapper [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
  - docs: plasma-ui disable autofocus for time picker [#516](https://github.com/salute-developers/plasma/pull/516) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - docs: fix time picker docs [#516](https://github.com/salute-developers/plasma/pull/516) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - docs: add documentation for environment [#480](https://github.com/salute-developers/plasma/pull/480) ([@OgNellis](https://github.com/OgNellis))
- `@salutejs/plasma-core@1.17.0`
  - fix: Switch's focus [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.30.0`, `@salutejs/plasma-ui@1.26.0`, `@salutejs/plasma-web@1.24.0`
  - chore: Alias react, react-dom and styled-components in Storybook webpack [#518](https://github.com/salute-developers/plasma/pull/518) ([@fanisco](https://github.com/fanisco))
  - chore: Bump Storybook version [#518](https://github.com/salute-developers/plasma/pull/518) ([@fanisco](https://github.com/fanisco))

#### 📝 Documentation

- `@salutejs/plasma-ui@1.26.0`
  - chore(plasma-ui): Change deviceKind through get param in iframe [#500](https://github.com/salute-developers/plasma/pull/500) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Jul 08 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens@1.9.0`
  - feat(plasma-tokens): grouping color tokens for mobile [#504](https://github.com/salute-developers/plasma/pull/504) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Wed Jul 07 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.24.1`, `@salutejs/plasma-web@1.22.1`
  - fix(plasma-ui): commas change [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-ui): favicon to png fix [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-ui): safari bug fix [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-web@1.22.1`
  - fix(plasma-web): favicon added [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-ui@1.24.1`
  - fix(plasma-ui): fix missed bracket [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-ui): favicon bug fix [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-ui): favicon added [#479](https://github.com/salute-developers/plasma/pull/479) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Fri Jul 02 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.16.0`
  - feat: Checkbox description color [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.24.0`
  - fix(plasma-ui): Radio type in trigger [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.16.0`, `@salutejs/plasma-ui@1.24.0`, `@salutejs/plasma-web@1.22.0`
  - fix: TextField placeholder placement [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
  - fix: Build components with own namespace es/cjs [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
  - fix: Checkbox layout with various content [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
  - fix: Input interface and props [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.22.0`
  - fix(plasma-web): TextField placeholder color [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-web): Checkbox & Radio label for attribute [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.24.0`, `@salutejs/plasma-web@1.22.0`
  - fix: TextField helperText to boolean [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Jul 01 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.23.1`
  - fix(plasma-ui): no-select mixin lint error fix [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-ui): no-select mixin added [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))
  - fix(plasma-ui): text selection fixed [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-core@1.15.1`, `@salutejs/plasma-ui@1.23.1`
  - fix(plasma-ui): no-select mixin in plasma-core [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# (Thu Jul 01 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.27.0`, `@salutejs/plasma-tokens-b2c@0.2.0`, `@salutejs/plasma-web@1.21.0`
  - feat: Added plasma-tokens-b2c package [#468](https://github.com/salute-developers/plasma/pull/468) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.15.0`, `@salutejs/plasma-web@1.21.0`
  - fix(plasma-web): Removed tokens dependency [#468](https://github.com/salute-developers/plasma/pull/468) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.21.0`
  - docs(plasma-web): about page with link added [#447](https://github.com/salute-developers/plasma/pull/447) ([@kayman233](https://github.com/kayman233))
- `@salutejs/plasma-ui@1.23.0`
  - docs(plasma-ui): repository link added [#447](https://github.com/salute-developers/plasma/pull/447) ([@kayman233](https://github.com/kayman233))
  - ci: setup jest [#466](https://github.com/salute-developers/plasma/pull/466) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/showcase@0.27.0`
  - build(showcase): fix .npmrc [#466](https://github.com/salute-developers/plasma/pull/466) ([@Yeti-or](https://github.com/Yeti-or))
- `demo-tokens@0.6.0`
  - chore(demo-tokens): disable tests [#466](https://github.com/salute-developers/plasma/pull/466) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens-utils@0.6.0`
  - test(plasma-tokens-utils): skip broken tests [#466](https://github.com/salute-developers/plasma/pull/466) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens@1.8.0`
  - docs(plasma-tokens): links and anchors fixed [#448](https://github.com/salute-developers/plasma/pull/448) ([@kayman233](https://github.com/kayman233))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Jun 23 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.22.1`
  - fix(plasma-ui): PickerItem sizes [#458](https://github.com/salute-developers/plasma/pull/458) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Wed Jun 23 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.26.0`, `@salutejs/plasma-tokens-web@1.7.0`, `@salutejs/plasma-tokens@1.7.0`, `@salutejs/plasma-ui@1.22.0`, `@salutejs/plasma-web@1.20.0`, `@salutejs/plasma-sb-utils@0.4.0`, `@salutejs/plasma-tokens-utils@0.5.0`
  - feat(plasma-tokens): Updated tokens from plasma-styles [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens-web@1.7.0`
  - fix(plasma-web): Link visited active color [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens-web@1.7.0`, `@salutejs/plasma-web@1.20.0`, `@salutejs/plasma-tokens-utils@0.5.0`
  - fix(plasma-web): Components dark theme fixes [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.14.0`, `@salutejs/plasma-ui@1.22.0`, `@salutejs/plasma-web@1.20.0`
  - chore: Added favicon for storybooks [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-sb-utils@0.4.0`
  - docs: Display token name & var in ThemeColors [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.26.0`, `@salutejs/plasma-ui@1.22.0`, `@salutejs/plasma-web@1.20.0`, `@salutejs/plasma-sb-utils@0.4.0`
  - docs: ThemeColors in both libraries [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))
  - docs(plasma-web): Added Grid docs [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Jun 22 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.13.0`, `@salutejs/plasma-web@1.19.0`
  - feat(plasma-core): Spinner sizes [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-web): Button success [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/showcase@0.25.0`, `@salutejs/plasma-core@1.13.0`
  - docs: Stories for field [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.25.0`, `@salutejs/plasma-core@1.13.0`, `@salutejs/plasma-ui@1.21.0`, `@salutejs/plasma-web@1.19.0`
  - feat(plasma-core, plasma-ui, plasma-web): Reassembled Field [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Jun 18 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.24.0`, `@salutejs/plasma-tokens-web@1.6.0`, `@salutejs/plasma-web@1.18.0`
  - feat(plasma-web): Added Link component [#441](https://github.com/salute-developers/plasma/pull/441) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.18.0`
  - fix(plasma-web): Components dark theme fixes [#441](https://github.com/salute-developers/plasma/pull/441) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.24.0`, `@salutejs/plasma-web@1.18.0`, `@salutejs/plasma-sb-utils@0.2.0`
  - docs: plasma-sb-utils package with a lots useful sb code [#441](https://github.com/salute-developers/plasma/pull/441) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.24.0`, `@salutejs/plasma-web@1.18.0`
  - docs: Added switcher for plasma-web's dark theme [#441](https://github.com/salute-developers/plasma/pull/441) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Jun 17 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.12.2`
  - fix(plasma-core): remove focus on click in button [#437](https://github.com/salute-developers/plasma/pull/437) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Wed Jun 09 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.23.0`, `@salutejs/plasma-tokens-web@1.5.0`, `@salutejs/plasma-web@1.17.0`, `@salutejs/plasma-tokens-utils@0.4.0`
  - feat(plasma-tokens-web): Using plasma-colors, dark theme [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens@1.6.0`
  - feat(plasma-tokens): Using plasma-colors [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-colors@0.1.0`, `@salutejs/plasma-web@1.17.0`
  - feat: Added plasma-colors package [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.17.0`
  - docs(plasma-web): Added themes story [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Jun 09 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.12.1`
  - fix(plasma-core): pass defaultChecked to Switch and Basebox [#338](https://github.com/salute-developers/plasma/pull/338) ([@tsumo](https://github.com/tsumo))

#### Authors: 1

- [@tsumo](https://github.com/tsumo)

---

# (Mon Jun 07 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.12.0`
  - feat: bump plasma-core [#432](https://github.com/salute-developers/plasma/pull/432) ([@Yeti-or](https://github.com/Yeti-or))
  - feat: user Intl short month format for formatting [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/showcase@0.22.0`, `@salutejs/plasma-ui@1.18.0`
  - feat: switchable month name format in DatePicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-core@1.12.0`, `@salutejs/plasma-ui@1.18.0`
  - feat: short month name in datepicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- `@salutejs/showcase@0.22.0`
  - docs: knobs for pickers in showcase [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-core@1.12.0`
  - fix: correct point deletion in short month name [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-ui@1.18.0`
  - refactor: change style of default options checking in DatePicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - refactor: remove unimportant check from getFormatterKey [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - refactor: unified options getting in DatePicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon May 31 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-tokens@1.5.1`
  - fix(plasma-tokens): backward compatibility [#419](https://github.com/salute-developers/plasma/pull/419) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon May 31 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-icons@1.14.0`
  - feat: update plus circle icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat: update heart stroke icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat: add percent stroke icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat: update plis circle icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Mon May 31 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.20.0`, `demo-tokens@0.5.0`, `@salutejs/plasma-core@1.11.0`, `@salutejs/plasma-tokens@1.4.0`, `@salutejs/plasma-ui@1.16.0`
  - feat: es module build for plasma-tokens [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-core@1.11.0`
  - feat: add root Spinner export [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - feat: add Basebox export from root [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-core@1.11.0`, `@salutejs/plasma-ui@1.16.0`
  - feat: add es module exports for plasma-ui [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.16.0`
  - fix: es module import in CarouselCol [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - chore: update plasma-core version for plasma-ui [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-tokens@1.4.0`
  - build: es5 target for plasma-tokens [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - fix: es build in tokens by default [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-tokens-web@1.4.0`, `@salutejs/plasma-tokens@1.4.0`
  - fix: sideEffects false for tokens [#341](https://github.com/salute-developers/plasma/pull/341) ([@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-icons@1.13.0`
  - fix: import es module from core in icons [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-core@1.11.0`, `@salutejs/plasma-ui@1.16.0`
  - fix: all at once exports [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))

---

# (Mon May 31 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-icons@1.12.2`
  - add Star icons [#418](https://github.com/salute-developers/plasma/pull/418) ([@Kud8](https://github.com/Kud8))

#### Authors: 1

- [@Kud8](https://github.com/Kud8)

---

# (Thu May 20 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.15.1`
  - fix(plasma-ui) Add Huawei TV UA [#403](https://github.com/salute-developers/plasma/pull/403) ([@SemyonMakhaev](https://github.com/SemyonMakhaev))

#### Authors: 1

- Махаев Семён ([@SemyonMakhaev](https://github.com/SemyonMakhaev))

---

# (Thu May 20 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.15.0`
  - feat(plasma-ui): Increase Picker performance with preset item styles [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: add condition for chromatic github job [#343](https://github.com/salute-developers/plasma/pull/343) ([@OgNellis](https://github.com/OgNellis))
- `@salutejs/plasma-ui@1.15.0`
  - fix(plasma-ui): Disabled animation in Picker in first render [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.19.0`, `@salutejs/plasma-core@1.10.0`, `@salutejs/plasma-ui@1.15.0`, `@salutejs/plasma-web@1.13.0`
  - feat(plasma-core, plasma-ui, plasma-web): Moved PaginationDots to core [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-core, plasma-ui, plasma-web): Moved Carousel to core [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.19.0`
  - docs(showcase): Fix carousel/pickers animation with delay [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue May 18 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-web@1.12.2`
  - fix(plasma-web): Added Badge to index [#397](https://github.com/salute-developers/plasma/pull/397) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.18.2`
  - docs(showcase): Hide description in radio/checkbox [#395](https://github.com/salute-developers/plasma/pull/395) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon May 17 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.14.1`
  - fix(plasma-ui): fix simultaneous src&placeholder display [#390](https://github.com/salute-developers/plasma/pull/390) ([@ayymkozb](https://github.com/ayymkozb))

#### Authors: 1

- [@ayymkozb](https://github.com/ayymkozb)

---

# (Mon May 17 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.9.0`
  - feat: Support setting color for Spinner [#326](https://github.com/salute-developers/plasma/pull/326) ([@nyet-ty](https://github.com/nyet-ty))
- `@salutejs/plasma-web@1.12.0`
  - feat(plasma-web): Added Spinner to web [#326](https://github.com/salute-developers/plasma/pull/326) (prokopyevviktor@yandex.ru)

#### 🐛 Bug Fix

- `@salutejs/showcase@0.18.0`, `@salutejs/plasma-core@1.9.0`
  - fix(plasma-core): Id for Spinner's gradient [#326](https://github.com/salute-developers/plasma/pull/326) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.18.0`, `@salutejs/plasma-web@1.12.0`
  - docs(showcase): Added Spinner showcase web [#326](https://github.com/salute-developers/plasma/pull/326) (prokopyevviktor@yandex.ru)
- `@salutejs/plasma-core@1.9.0`, `@salutejs/plasma-ui@1.14.0`
  - feat(plasma-core, plasma-ui): Moved Spinner to core [#326](https://github.com/salute-developers/plasma/pull/326) (prokopyevviktor@yandex.ru)

#### Authors: 3

- [@nyet-ty](https://github.com/nyet-ty)
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Viktor Prokopyev (prokopyevviktor@yandex.ru)

---

# (Fri May 14 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.17.0`, `@salutejs/plasma-web@1.11.0`
  - feat(plasma-web): Added Tooltip component [#345](https://github.com/salute-developers/plasma/pull/345) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu May 13 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.8.0`
  - feat: add description to Basebox [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- chore: add dependabot [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/showcase@0.16.0`
  - fix: type errors in docs/showcase [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - docs: add description for radioboxes in showcase [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
  - docs: add description for checkboxes in showcase [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-ui@1.12.0`
  - fix: exclude description from Basebox in plasma-ui [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-core@1.8.0`
  - fix: fix Basebox styles [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-web@1.10.0`
  - docs: description in checkbox and radiobox storybook [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-core@1.8.0`, `@salutejs/plasma-icons@1.9.0`, `@salutejs/plasma-ui@1.12.0`
  - chore: update package-locks [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- `@salutejs/plasma-core@1.8.0`, `@salutejs/plasma-icons@1.9.0`, `@salutejs/plasma-ui@1.12.0`, `@salutejs/plasma-web@1.10.0`
  - chore: soft peerDependencies only [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Tue May 11 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.15.0`, `@salutejs/plasma-web@1.9.0`
  - feat(plasma-web): Added Modal component [#339](https://github.com/salute-developers/plasma/pull/339) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-web): Added Notification component [#339](https://github.com/salute-developers/plasma/pull/339) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri May 07 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-core@1.7.0`, `@salutejs/plasma-ui@1.10.0`
  - feat(plasma-core): Added applyEllipsis mixin [#348](https://github.com/salute-developers/plasma/pull/348) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.14.0`, `@salutejs/plasma-web@1.8.0`
  - feat(plasma-web): Added Progress component [#340](https://github.com/salute-developers/plasma/pull/340) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu May 06 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-tokens-android@2.2.0`, `@salutejs/plasma-tokens-ios-swift@2.2.0`, `@salutejs/plasma-tokens-utils@0.3.0`
  - feat: add plasma-tokens-utils [#331](https://github.com/salute-developers/plasma/pull/331) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- chore: add utils to lint ignore [#331](https://github.com/salute-developers/plasma/pull/331) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- ci: fix generation of pck-locks [#337](https://github.com/salute-developers/plasma/pull/337) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-core@1.6.0`
  - fix(plasma-core): Image: rendering image with background instead of src [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.13.0`, `@salutejs/plasma-core@1.6.0`, `@salutejs/plasma-ui@1.9.0`, `@salutejs/plasma-web@1.7.0`
  - feat(plasma-core, plasma-ui, plasma-ui): Moved Image component [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-core, plasma-ui, plasma-ui): Moved Price component [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.13.0`, `@salutejs/plasma-icons@1.6.0`, `@salutejs/plasma-tokens@1.2.0`, `@salutejs/plasma-ui@1.9.0`, `@salutejs/plasma-web@1.7.0`
  - build: fix package-locks [#337](https://github.com/salute-developers/plasma/pull/337) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-ui@1.9.0`
  - docs: fix grid misspell [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Apr 28 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.8.0`
  - feat(plasma-ui): Add new scrollAlign values for Carousel [#317](https://github.com/salute-developers/plasma/pull/317) (nicolai.v.95@gmail.com)

#### 🐛 Bug Fix

- chore: Add author info for package-locks commit [#334](https://github.com/salute-developers/plasma/pull/334) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- chore: update package-locks commit message [#334](https://github.com/salute-developers/plasma/pull/334) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- nsvoevodin (nicolai.v.95@gmail.com)

---

# (Tue Apr 27 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.11.0`, `@salutejs/plasma-core@1.5.0`, `@salutejs/plasma-web@1.6.0`
  - feat(plasma-web): Added Select component [#328](https://github.com/salute-developers/plasma/pull/328) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Apr 27 2021)

#### 🐛 Bug Fix

- chore: fix github token [#333](https://github.com/salute-developers/plasma/pull/333) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- chore: auto update package-locks [#329](https://github.com/salute-developers/plasma/pull/329) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- chore: add cypress and image snapshot [#315](https://github.com/salute-developers/plasma/pull/315) ([@OgNellis](https://github.com/OgNellis))
- ci: Deploy storybook [#327](https://github.com/salute-developers/plasma/pull/327) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens@1.1.1`, `@salutejs/plasma-ui@1.6.3`
  - docs(plasma-ui): Linked doc for plasma-tokens and added information about font [#324](https://github.com/salute-developers/plasma/pull/324) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.10.3`
  - docs(showcase): Badge showcase [#325](https://github.com/salute-developers/plasma/pull/325) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

- `@salutejs/showcase@0.10.3`, `@salutejs/plasma-icons@1.4.1`, `@salutejs/plasma-tokens-android@2.1.1`, `@salutejs/plasma-tokens-ios-swift@2.1.1`, `@salutejs/plasma-ui@1.6.3`, `@salutejs/plasma-web@1.5.1`
  - {chore: update package-locks} ([@github-actions[bot]](https://github.com/github-actions[bot]))

#### Authors: 4

- [@github-actions[bot]](https://github.com/github-actions[bot])
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Apr 21 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.6.2`
  - fix(plasma-ui): DatePicker: fix 30-31 february [#322](https://github.com/salute-developers/plasma/pull/322) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Apr 21 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.6.1`
  - fix(plasma-ui): update @storybook/react version [#323](https://github.com/salute-developers/plasma/pull/323) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# (Tue Apr 20 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.6.0`
  - feat(plasma-ui): TimePicker: values interval [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-ui): Date/TimePicker control by keyboard/remote [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
  - feat(plasma-ui): TimePicker / DatePicker: l and s sizes for both components [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-core@1.4.0`
  - fix(plasma-core): Badge: fix padding for size s [#318](https://github.com/salute-developers/plasma/pull/318) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.10.0`
  - chore(showcase): Continue publishing in case of no bump version issue [#318](https://github.com/salute-developers/plasma/pull/318) ([@fanisco](https://github.com/fanisco))
  - docs(showcase): Pickers story [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
  - chore(showcase): Update dependent versions [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.6.0`
  - docs(plasma-ui): remove docz [#304](https://github.com/salute-developers/plasma/pull/304) ([@OgNellis](https://github.com/OgNellis))
  - perf(plasma-ui): Picker: prevent form unnecessary onChange call [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-ui): Picker disabled state [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))
  - fix(plasma-ui): Date/TimePickers controls [#300](https://github.com/salute-developers/plasma/pull/300) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Apr 20 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.5.2`, `@salutejs/plasma-web@1.4.1`
  - fix(plasma-ui, plasma-web): Badge: correct reexport & const creation [#313](https://github.com/salute-developers/plasma/pull/313) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-web@1.4.1`
  - ci: Deploy documentation for plasma-web [#313](https://github.com/salute-developers/plasma/pull/313) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@null`
  - ci: Prevent showcase from publishing [#316](https://github.com/salute-developers/plasma/pull/316) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Sat Apr 17 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.5.1`
  - fix(plasma-ui): fix detection Huawei TV [#312](https://github.com/salute-developers/plasma/pull/312) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Fri Apr 16 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.9.0`, `@salutejs/plasma-core@1.3.0`, `@salutejs/plasma-ui@1.5.0`, `@salutejs/plasma-web@1.4.0`
  - feat(core): made reexport in ui & web, added showcase for web [#308](https://github.com/salute-developers/plasma/pull/308) (prokopyevviktor@yandex.ru)
- `@salutejs/plasma-core@1.3.0`
  - feat(core): added component badge in core [#308](https://github.com/salute-developers/plasma/pull/308) (prokopyevviktor@yandex.ru)

#### 🐛 Bug Fix

- Update CONTRIBUTING.md [#311](https://github.com/salute-developers/plasma/pull/311) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.9.0`
  - docs(core): changed UIStoryDecorator for WebStoryDecorator [#308](https://github.com/salute-developers/plasma/pull/308) (prokopyevviktor@yandex.ru)
  - docs: Showcase/Mobile/Cards added [#281](https://github.com/salute-developers/plasma/pull/281) ([@OgNellis](https://github.com/OgNellis))
  - docs: Showcase/Device added [#281](https://github.com/salute-developers/plasma/pull/281) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 3

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Viktor Prokopyev (prokopyevviktor@yandex.ru)

---

# (Thu Apr 15 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.8.0`, `@salutejs/plasma-core@1.2.0`, `@salutejs/plasma-ui@1.4.0`, `@salutejs/plasma-web@1.3.0`
  - feat: Moved Typography to plasma-core / plasma-web [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.8.0`, `@salutejs/plasma-icons@1.2.0`
  - feat(plasma-icons): Using plasma-core's tokens [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/showcase@0.8.0`, `@salutejs/plasma-core@1.2.0`, `@salutejs/plasma-ui@1.4.0`, `@salutejs/plasma-web@1.3.0`
  - fix(plasma-ui, plasma-web): Fix setting props in TextField & TextArea [#299](https://github.com/salute-developers/plasma/pull/299) ([@LamaEats](https://github.com/LamaEats))
- `@salutejs/showcase@0.8.0`
  - docs(showcase): Disable animations in sliders [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))
  - chore(showcase): Updated dependencies versions, babel config [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.4.0`, `@salutejs/plasma-web@1.3.0`
  - fix(plasma-ui, plasma-web): Added SC babel plugin to avoid classname collision [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-core@1.2.0`, `@salutejs/plasma-web@1.3.0`
  - chore(plasma-core, plasma-web): Added components to index files [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# (Thu Apr 15 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-icons@1.1.1`, `@salutejs/plasma-ui@1.3.1`, `@salutejs/plasma-web@1.2.1`
  - fix: bump peerDeps [#307](https://github.com/salute-developers/plasma/pull/307) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Apr 14 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.7.0`, `@salutejs/plasma-web@1.2.0`
  - feat(plasma-web): Added TextArea component [#290](https://github.com/salute-developers/plasma/pull/290) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Apr 13 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.6.0`, `@salutejs/plasma-ui@1.3.0`
  - feat(ui): Add base to props in Image component [#298](https://github.com/salute-developers/plasma/pull/298) ([@ayymkozb](https://github.com/ayymkozb))

#### Authors: 1

- [@ayymkozb](https://github.com/ayymkozb)

---

# (Mon Apr 12 2021)

#### 🐛 Bug Fix

- `@salutejs/plasma-ui@1.2.1`
  - fix(plasma-ui): missing root exports for Image & Marquee [#292](https://github.com/salute-developers/plasma/pull/292) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# (Wed Apr 07 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.3.0`
  - feat(plasma-ui): Marquee: animation duration prop ([@ayymkozb](https://github.com/ayymkozb))
  - feat(plasma-ui): Carousel: dynamic options list refresh [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.5.0`, `@salutejs/plasma-ui@1.3.0`
  - feat(plasma-ui): TimePicker: correct min and max behavior [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix: release ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/showcase@0.5.0`
  - fix: release [#287](https://github.com/salute-developers/plasma/pull/287) ([@Yeti-or](https://github.com/Yeti-or))
  - fix: release [#286](https://github.com/salute-developers/plasma/pull/286) ([@Yeti-or](https://github.com/Yeti-or))
  - docs(showcase): Fix showcase helpers [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.5.0`, `demo-tokens@0.5.0`
  - chore: Bump dependencies versions [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

- ci: fix release ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@ayymkozb](https://github.com/ayymkozb)
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Apr 07 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.3.0`
  - feat(plasma-ui): Marquee: animation duration prop ([@ayymkozb](https://github.com/ayymkozb))
  - feat(plasma-ui): Carousel: dynamic options list refresh [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.4.0`, `@salutejs/plasma-ui@1.3.0`
  - feat(plasma-ui): TimePicker: correct min and max behavior [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix: release ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/showcase@0.4.0`
  - fix: release [#286](https://github.com/salute-developers/plasma/pull/286) ([@Yeti-or](https://github.com/Yeti-or))
  - docs(showcase): Fix showcase helpers [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.4.0`, `demo-tokens@0.5.0`
  - chore: Bump dependencies versions [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

- ci: fix release ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@ayymkozb](https://github.com/ayymkozb)
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Apr 07 2021)

#### 🚀 Enhancement

- `@salutejs/plasma-ui@1.2.0`
  - feat(plasma-ui): Marquee: animation duration prop ([@ayymkozb](https://github.com/ayymkozb))
  - feat(plasma-ui): Carousel: dynamic options list refresh [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.3.0`, `@salutejs/plasma-ui@1.2.0`
  - feat(plasma-ui): TimePicker: correct min and max behavior [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix: release ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/showcase@0.3.0`, `demo-tokens@0.5.0`
  - chore: Bump dependencies versions [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.3.0`
  - docs(showcase): Fix showcase helpers [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

- ci: fix release ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@ayymkozb](https://github.com/ayymkozb)
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Wed Apr 07 2021)

#### 🚀 Enhancement

- `@salutejs/showcase@0.2.0`, `@salutejs/plasma-ui@1.1.0`
  - feat(plasma-ui): TimePicker: correct min and max behavior [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-ui@1.1.0`
  - feat(plasma-ui): Carousel: dynamic options list refresh [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/showcase@0.2.0`, `demo-tokens@0.4.0`
  - chore: Bump dependencies versions [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))
- `@salutejs/showcase@0.2.0`
  - docs(showcase): Fix showcase helpers [#269](https://github.com/salute-developers/plasma/pull/269) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Apr 02 2021)

#### 💥 Breaking Change

- merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/showcase@0.1.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@0.8.2`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-tokens@0.4.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))

#### 🚀 Enhancement

- merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/showcase@0.1.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/showcase@0.1.1`, `@salutejs/plasma-core@0.8.2`, `@salutejs/plasma-web@0.5.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/showcase@0.1.1`, `@salutejs/plasma-tokens@0.4.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@0.8.2`, `@salutejs/plasma-icons@0.2.1`, `@salutejs/plasma-web@0.5.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-web@0.5.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-tokens-web@0.1.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-tokens@0.4.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@0.8.2`, `@salutejs/plasma-icons@0.2.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@0.8.2`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@0.8.2`, `@salutejs/plasma-tokens@0.4.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-icons@0.2.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-tokens-android@1.0.1`, `@salutejs/plasma-tokens-ios-swift@1.0.1`, `@salutejs/plasma-tokens@0.4.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))

#### 🐛 Bug Fix

- merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@0.8.2`, `@salutejs/plasma-icons@0.2.1`, `@salutejs/plasma-tokens-android@1.0.1`, `@salutejs/plasma-tokens-ios-swift@1.0.1`, `@salutejs/plasma-tokens-web@0.1.1`, `@salutejs/plasma-tokens@0.4.1`, `@salutejs/plasma-ui@0.97.4`, `@salutejs/plasma-web@0.5.1`
  - fix: plasma doc before major [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-web@0.5.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/showcase@0.1.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-ui@0.97.4`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@0.8.2`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/showcase@0.1.1`, `@salutejs/plasma-core@0.8.2`, `@salutejs/plasma-web@0.5.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-core@0.8.2`, `@salutejs/plasma-web@0.5.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-tokens@0.4.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-icons@0.2.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))
- `@salutejs/plasma-icons@0.2.1`, `@salutejs/plasma-tokens@0.4.1`
  - merge rc to master [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or) [@fanisco](https://github.com/fanisco) [@awinogradov](https://github.com/awinogradov) [@IgorAntonov](https://github.com/IgorAntonov) [@snyuryev](https://github.com/snyuryev) [@LamaEats](https://github.com/LamaEats) [@maderwin](https://github.com/maderwin) [@deadrime](https://github.com/deadrime) [@sasha-tlt](https://github.com/sasha-tlt) alisabelousova007@gmail.com alisabelousova007@gmail.com [@ayymkozb](https://github.com/ayymkozb) [@Igor3411](https://github.com/Igor3411) [@KateKate](https://github.com/KateKate))

#### Authors: 14

- [@ayymkozb](https://github.com/ayymkozb)
- [@Igor3411](https://github.com/Igor3411)
- [@IgorAntonov](https://github.com/IgorAntonov)
- Alexander Salmin ([@sasha-tlt](https://github.com/sasha-tlt))
- Artyom Zakharov ([@maderwin](https://github.com/maderwin))
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Jenya Trofimov ([@deadrime](https://github.com/deadrime))
- Белоусова Алиса Дмитриевна (alisabelousova007@gmail.com)
- Sergey Yuryev ([@snyuryev](https://github.com/snyuryev))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))
- Tony Vi ([@awinogradov](https://github.com/awinogradov))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Белоусова Алиса Дмитриевна (alisabelousova007@gmail.com)

---

# (Wed Nov 11 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.20.0`
  - feat(ui): Доработана докуменация по Card [#58](https://github.com/salute-developers/plasma/pull/58) ([@fanisco](https://github.com/fanisco))
  - feat(icon): Добавлены новые иконки xs:16 & s:24 [#57](https://github.com/salute-developers/plasma/pull/57) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- ci: Добавлен шаг сборки beta(rc) ветки [#61](https://github.com/salute-developers/plasma/pull/61) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens@0.4.0`, `@salutejs/ui@0.20.0`
  - chore: updated lock files [#62](https://github.com/salute-developers/plasma/pull/62) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/ui@0.20.0`
  - build: запускать сборку доки с ts3.5.3 [#62](https://github.com/salute-developers/plasma/pull/62) ([@Yeti-or](https://github.com/Yeti-or))
  - build(ui): ts ломает сборку доки [#57](https://github.com/salute-developers/plasma/pull/57) ([@Yeti-or](https://github.com/Yeti-or))
  - chore: правки после рефакторинга [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))
  - chore: Удалены стори и дока для Cart [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))
  - fix: компонент Input [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))
  - fix: remove old icons from components [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))
  - refactor: new icons [#57](https://github.com/salute-developers/plasma/pull/57) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 3

- [@IgorAntonov](https://github.com/IgorAntonov)
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Nov 10 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.19.0`
  - feat(ui): Добавлена карточка в сторибук и докзи [#51](https://github.com/salute-developers/plasma/pull/51) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- Update README.md [#48](https://github.com/salute-developers/plasma/pull/48) ([@awinogradov](https://github.com/awinogradov))
- Update README.md [#48](https://github.com/salute-developers/plasma/pull/48) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens@0.3.0`
  - docs: update links [#48](https://github.com/salute-developers/plasma/pull/48) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/plasma-tokens@0.3.0`, `@salutejs/ui@0.19.0`
  - docs(ui): fix links and stuff [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
  - chore: cleanup [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
- `demo-tokens@0.2.0`, `@salutejs/plasma-tokens@0.3.0`, `@salutejs/ui@0.19.0`
  - chore(ui): more cleanup [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
  - docs: Обновить документацию [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/ui@0.19.0`
  - chore: storybook: поправить глобальные стили [#46](https://github.com/salute-developers/plasma/pull/46) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- Anton Vinogradov ([@awinogradov](https://github.com/awinogradov))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Nov 10 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.18.0`
  - feat(ui): Добавлены компоненты TextBox & Cell [#47](https://github.com/salute-developers/plasma/pull/47) ([@Yeti-or](https://github.com/Yeti-or))
  - feat(ui): add Cell component [#47](https://github.com/salute-developers/plasma/pull/47) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 2

- [@IgorAntonov](https://github.com/IgorAntonov)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Tue Nov 10 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.17.0`
  - feat(ui): Удален Card.stories [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
  - feat(ui): Скрыт ScrollList [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
  - feat(ui): Удален LooneyTunes [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
  - feat(ui): Доработаны Input, Field (TextField) [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
  - feat(ui): Доработан Button [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))
  - feat(ui): Доработан Badge [#45](https://github.com/salute-developers/plasma/pull/45) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Mon Nov 09 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.16.0`
  - feat(ui): Перевел сетку на rem-ы [#43](https://github.com/salute-developers/plasma/pull/43) ([@fanisco](https://github.com/fanisco))
  - feat(ui): В сторибук заменены вьюпорты на родные для сетки [#43](https://github.com/salute-developers/plasma/pull/43) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Thu Nov 05 2020)

#### 🚀 Enhancement

- `@salutejs/plasma-styles@1.5.0`
  - feat(plasma-styles): Вычисление device scale [#36](https://github.com/salute-developers/plasma/pull/36) ([@fanisco](https://github.com/fanisco))
- `@salutejs/plasma-tokens@0.2.0`
  - feat(plasma-tokens): Генерация размеров в rem [#36](https://github.com/salute-developers/plasma/pull/36) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/ui@0.15.0`
  - fix(ui): исправление storybook под rem-ы [#36](https://github.com/salute-developers/plasma/pull/36) ([@fanisco](https://github.com/fanisco))
  - chore(ui): add missing deps to useCb [#38](https://github.com/salute-developers/plasma/pull/38) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Fri Oct 30 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.14.0`
  - feat(ui): Переход на общий фокус-миксин [#33](https://github.com/salute-developers/plasma/pull/33) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Fri Oct 30 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.13.0`
  - feat(ui): Добавить шаг prepare/build в публикацию [#34](https://github.com/salute-developers/plasma/pull/34) ([@IgorAntonov](https://github.com/IgorAntonov))

#### 🐛 Bug Fix

- fix(ui): change eslintignore [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
- ci: add lint step to chromatic workflow [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
- fix: release steps flow [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore: disable order rule [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
- ci: add lint step [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
- build: change eslint versions [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
- `@salutejs/ui@0.13.0`
  - refactor(ui): fix another lint errors [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
  - refactor(ui): fix lint errors [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))
  - chore: change logo image for docs/storybook [#32](https://github.com/salute-developers/plasma/pull/32) ([@IgorAntonov](https://github.com/IgorAntonov))
  - refactor(ui): format currency without package i18n [#32](https://github.com/salute-developers/plasma/pull/32) ([@IgorAntonov](https://github.com/IgorAntonov))
  - build: remove private packages from deps [#32](https://github.com/salute-developers/plasma/pull/32) ([@IgorAntonov](https://github.com/IgorAntonov))
- `@salutejs/plasma-styles@1.4.0`
  - refactor(plasma-styles): fix lint errors [#26](https://github.com/salute-developers/plasma/pull/26) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 1

- [@IgorAntonov](https://github.com/IgorAntonov)

---

# (Fri Oct 30 2020)

#### 🚀 Enhancement

- `@salutejs/plasma-styles@1.3.0`
  - feat(plasma-styles): Общий фокус-миксин [#11](https://github.com/salute-developers/plasma/pull/11) ([@SemyonMakhaev](https://github.com/SemyonMakhaev))

#### Authors: 1

- Махаев Семён ([@SemyonMakhaev](https://github.com/SemyonMakhaev))

---

# (Thu Oct 29 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.11.0`
  - feat(ui): переработаны Button и ActionButton [#29](https://github.com/salute-developers/plasma/pull/29) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- ci: remove gh-pages workflow [#30](https://github.com/salute-developers/plasma/pull/30) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore: change CONTRIBUTING.md [#15](https://github.com/salute-developers/plasma/pull/15) ([@IgorAntonov](https://github.com/IgorAntonov))
- Create CONTRIBUTING.md [#15](https://github.com/salute-developers/plasma/pull/15) ([@IgorAntonov](https://github.com/IgorAntonov))
- `@salutejs/ui@0.11.0`
  - docs(ui): fix empty documentation [#30](https://github.com/salute-developers/plasma/pull/30) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 2

- [@IgorAntonov](https://github.com/IgorAntonov)
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Wed Oct 28 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.10.0`
  - feat(ui): использование Button beforeFocusOutline [#22](https://github.com/salute-developers/plasma/pull/22) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Oct 27 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.9.0`
  - feat(ui): views вынесены в mixins [#17](https://github.com/salute-developers/plasma/pull/17) ([@fanisco](https://github.com/fanisco))
  - feat(ui): доработка Button API в рамках работы над Card [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))
  - feat(ui): доработка Badge API в рамках работы над Card [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))
  - feat(ui): доработка Card [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/ui@0.9.0`
  - chore(ui): bump deps versions in lock [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))
  - chore(ui): types, mixins [#1](https://github.com/salute-developers/plasma/pull/1) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# (Tue Oct 27 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.8.0`
  - feat(ui): добавить иконки для новостей [#16](https://github.com/salute-developers/plasma/pull/16) ([@Alisa007](https://github.com/Alisa007))

#### Authors: 1

- [@Alisa007](https://github.com/Alisa007)

---

# (Tue Oct 27 2020)

#### 🚀 Enhancement

- `@salutejs/ui@0.7.0`
  - feat(ui): Размеры ячеек Col расчитываются исходя из размеров Container [#3](https://github.com/salute-developers/plasma/pull/3) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- `@salutejs/plasma-styles@1.2.0`, `@salutejs/plasma-tokens@0.1.0`, `@salutejs/ui@0.7.0`
  - ci: add chromatic to ui [#9](https://github.com/salute-developers/plasma/pull/9) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# (Mon Oct 26 2020)

#### 🐛 Bug Fix

- `@salutejs/plasma-styles@1.1.2`, `@salutejs/plasma-tokens@0.0.3`, `@salutejs/ui@0.6.2`
  - fix: license [#7](https://github.com/salute-developers/plasma/pull/7) ([@Yeti-or](https://github.com/Yeti-or))
- `@salutejs/ui@0.6.2`
  - fix(ui): url to repo [#6](https://github.com/salute-developers/plasma/pull/6) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
