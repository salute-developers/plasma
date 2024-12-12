# 0.196.0 (12 декабря 2024)

## Функциональные изменения в компонентах

### Popup

-   добавлено свойство `UNSAFE_SSR_ENABLED` в `PopupProvider` для корректной hydration компонента;

[PR](https://github.com/salute-developers/plasma/pull/1596)

### Dropdown

-   актуализированы примеры в документации для свойства `placement`

[PR](https://github.com/salute-developers/plasma/pull/1612)

### Chip, ChipGroup, Counter, Combobox, Select, TextField, TextArea, TextFieldGrop

-   изменен формат записи токена для `padding` с длинной на короткую

[PR](https://github.com/salute-developers/plasma/pull/1600)

### Calendar

-   добавлено ограничение на отрицательные значения в годах

[PR](https://github.com/salute-developers/plasma/pull/1605)

### Select

-   добавлены свойства beforeList и afterList, которые служат ячейками для content в выпадающем списке;

[PR](https://github.com/salute-developers/plasma/pull/1613)

### Combobox

-   исправлено поведение, когда нажатие на `Tab` очищало набранный текст в `single` mode;

[PR](https://github.com/salute-developers/plasma/pull/1614)

### Autocomplete

-   исправлен import для типа `RequiredProps`

[PR](https://github.com/salute-developers/plasma/pull/1608)

### Range, DatePicker

-   добавлены свойства `required`, `requiredPlacement`

[PR](https://github.com/salute-developers/plasma/pull/1595)

### `Modal`

-   актуализированы примеры в документации

*   добавлены описания типов `offset` и `placement`

[PR](https://github.com/salute-developers/plasma/pull/1615)

### Drawer, Panel

-   добавлена возможность изменить цвет закрывающей иконки

### Tooltip

-   скорректирован внутренний `align-items`

**Было (позиция иконки)** <img width="204" src="https://github.com/user-attachments/assets/352dd515-c222-4f09-8dea-f4e540572cb9" />

**Стало (позиция иконки)** <img width="179" src="https://github.com/user-attachments/assets/b38460a0-92a9-4f19-9096-c2ec38109e63"/>

[PR](https://github.com/salute-developers/plasma/pull/1602)

### Dropdown, Select, Combobox

-   расширен тип у `item` для использования дата-атрибутов и классов в DOM.

[PR](https://github.com/salute-developers/plasma/pull/1620)

-   добавлено свойство `zIndex` для облегчения работы со слоями в выпадающем меню

[PR](https://github.com/salute-developers/plasma/pull/1631)

-   исправлен баг, связанный с неправильной работой свойства renderValue в одиночном режиме варианта `textfield-like`;

[PR](https://github.com/salute-developers/plasma/pull/1634)

### Color tokens

-   добавлена страница в storybook с выводом цветовых токенов темы

[PR](https://github.com/salute-developers/plasma/pull/1606)

### TextField, TextArea

-   изменен `type` для свойства `leftHelper` на `ReactNode`

[PR](https://github.com/salute-developers/plasma/pull/1632)

### Docusaurus

-   обновлен до версии `3.6.1`

[PR](https://github.com/salute-developers/plasma/pull/1618)

### Slider

-   исправлено поведение работы value (внешнее управление)

-   исправлена подстветка шкалы в вертикальном и инверсированном режиме

-   добавлены новые свойства `pointerVisibility`, `currentValueVisibility`

[PR](https://github.com/salute-developers/plasma/pull/1616)

### Tooltip, Popover

-   добавлена возможность открывать по `hover`

[PR](https://github.com/salute-developers/plasma/pull/1625)

### Popup, Drawer

-   rest аргументы прокидываются на уровень `.popup-base-root` элемента

[PR](https://github.com/salute-developers/plasma/pull/1636)

-   актуализированы примеры storybook и документация

[PR](https://github.com/salute-developers/plasma/pull/1635)

### Rating

-   добавлен новый компонент

<img width="174" alt="image" src="https://github.com/user-attachments/assets/46dcad64-d4e6-4782-bcfa-e75b498011cc">

[PR](https://github.com/salute-developers/plasma/pull/1610)

### TextArea

-   Исправлено поведение, при котором во время ввода значения / потери или получение фокуса приводило к скроллу страницы при включенном autoResize

[PR](https://github.com/salute-developers/plasma/pull/1633)

## Изменения в библиотеки

### TextArea

-   исправлено отображение рамки с помощью css свойства `box-shadow`

-   добавлена поддержка `boxShadow`

-   добавлен размер `XL`

[PR](https://github.com/salute-developers/plasma/pull/1592)

### TextField

-   поправлено позиционирование текста

-   добавлена поддержка `boxShadow`

-   добавлен размер `XL`

[PR](https://github.com/salute-developers/plasma/pull/1578)

# v0.181.0 (Thu Nov 28 2024)

### Release Notes

#### Release by 27.11.2024 ([#1597](https://github.com/salute-developers/plasma/pull/1597))

## Core

### Switch Outline

-   добавлен отдельный `config` для вариации `outline`
-   добавлена соответствующая поддержка во все библиотеки

core: Switch outline design (https://github.com/salute-developers/plasma/pull/1560)

### Switch

-   исправлены токены целью добавления возможности реализации нового дизайна

plasma-new-hope: fix Switch design (https://github.com/salute-developers/plasma/pull/1569)

### Dropdown

-   добавлено новое свойство `renderItem`;

feat(plasma-_, sdds-_): Add renderItem prop in Dropdown. Fix issues with Select and Combobox. (https://github.com/salute-developers/plasma/pull/1562)

### Select/Combobox

-   улучшено поведение свойства `renderItem` при работе с вложенными списками;
-   исправлен баг, приводящий к неправильной работе чипов в режиме multiple при renderValue;

feat(plasma-_, sdds-_): Add renderItem prop in Dropdown. Fix issues with Select and Combobox. (https://github.com/salute-developers/plasma/pull/1562)

### Badge

-   добавлен surfaceClear токен для варианта clear
-   добавлены padding для варианта clear
-   реализован вариант только с иконкой
-   добавлена возможность передать пользовательский цвет для текста и фона

feat(plasma-_,sdds-_): Icon only badge (https://github.com/salute-developers/plasma/pull/1546)

### Select

-   добавлены св-ва required, requiredPlacement и optional;
    ![plasma-b2c Select -- prop required, requiredPlacement snap](https://github.com/user-attachments/assets/42fcb1fe-6a37-434b-843f-d285b4e6f279)

feat(plasma-_, sdds-_): Add required functionality in Select (https://github.com/salute-developers/plasma/pull/1561)

### TextField, Select

-   добавлен новый проп `chipType`, который позволяет менять внешний вид для чипа в режиме multiselect;
    ![plasma-b2c Select -- prop chipType snap](https://github.com/user-attachments/assets/66c5cb36-bd40-444f-bace-1fb8dec2f130)

feat(plasma-_, sdds-_): Add chipType prop in TextField & Select (https://github.com/salute-developers/plasma/pull/1577)

### Calendar

-   при отсутствии значения календарная сетка отображается с минимальной даты

**Before**:
<img width="484" src="https://github.com/user-attachments/assets/e3ea6e68-f8d4-4c9a-95ca-fba28ca282f5" />

**After**:
<img width="464" src="https://github.com/user-attachments/assets/d7a53b4b-4a28-4eda-9c91-7a82d9f03466" />

feat(plasma-new-hope): Add displaying date from min value in Calendar (https://github.com/salute-developers/plasma/pull/1572)

### Notification

-   добавлена возможность отображать вечные оповещения

plasma-\*: Add infinite Notification (https://github.com/salute-developers/plasma/pull/1582)

### Autocomplete

-   добавлена поддержка `react-hook-form`
-   добавлена документация по использованию с нативной формой и `react-hook-form`

feat(new-hope): add react hook form support in autocomplite (https://github.com/salute-developers/plasma/pull/1574)

### Dropzone

-   добавлен новый компонент

<img width="515" src="https://github.com/user-attachments/assets/30f2131c-f1d1-48ba-b8e5-57f56c65b97d" />

feat(plasma-new-hope): Dropzone (https://github.com/salute-developers/plasma/pull/1534)

### Button, IconButton

-   добавлены размеры `XL`
-   добавлен размер `XXS` для компонента `IconButton`

feat(sdds-insol): Update `Button` and `IconButton` design (https://github.com/salute-developers/plasma/pull/1576)

### TextField

-   добавлено свойство keepPlaceholder для одновременного отображения label и placeholder

![image](https://github.com/user-attachments/assets/d3c1ad74-c214-4ddd-96fa-3467871e3a4c)

feat: add keepPlaceholder prop to TextField (https://github.com/salute-developers/plasma/pull/1556)

### TextField

-   добавлено свойство `chipView`
-   добавлен callback `chipValidator`

### Chip

-   добавлены статусные `view`: `positive`, `negative`, `warning`

feat(plasma-new-hope): Add chip views and chip validator for TextField (https://github.com/salute-developers/plasma/pull/1589)

### Modal

-   добавлен базовый дизайн с пропсами `hasBody` и `hasClose`
-   старые примеры в сторибуках перенесены в `Custom Modal Demo`

<img width="247" src="https://github.com/user-attachments/assets/23d2f8dc-739f-4ef9-8820-93ac3caeffa2" />

feat: add Modal designed body (https://github.com/salute-developers/plasma/pull/1558)

### TextArea

-   добавлено свойство для выноса левого helper за пределы TextArea

feat: add leftHelperPlacement prop to TextArea (https://github.com/salute-developers/plasma/pull/1579)

### TextField, TextArea

-   упростили типы связанный со свойством `required`

fix: "RequiredProps" unions in TextField & TextArea (https://github.com/salute-developers/plasma/pull/1593)

## PLASMA-ASDK

### Switch

-   обновлена конфигурация компонента
-   обновлены примеры в `storybook`

## SDDS-CS

### Textarea

-   изменен `view negative` в соответствии с макетом

fix(sdds-cs): edit view negative in textarea sdds-cs (https://github.com/salute-developers/plasma/pull/1567)

### Segment

-   изменен конфиг компонента в соответсвии с макетам

fix(sdds-cs): Segment config edit (https://github.com/salute-developers/plasma/pull/1573)

### Сalendar

-   изменен конфиг компонента в соответсвии с макетам

fix(sdds-cs): edit tokens calendar for sdds cs (https://github.com/salute-developers/plasma/pull/1566)

### Switch

-   исправлены токены в соответствие с макетом
-   убран `control` для свойства `size` в `storybook`

sdds-cs: fix Switch design (https://github.com/salute-developers/plasma/pull/1569)

## SDDS-SERV

### Switch

-   добавлен в сборку для `linaria`

feat(sdds-serv): Add switch to linaria build (https://github.com/salute-developers/plasma/pull/1583)

## Bugs

### Select, Combobox, Dropdown

-   исправлен баг, возникающий когда проп `listHeight` был больше, чем актуальная высота списка, что приводило к пустым пробелам в этом же выпадающем списке.

feat(plasma-new-hope): listHeight prop stands for a css maxHeight now (https://github.com/salute-developers/plasma/pull/1585)

### Select, Combobox, Dropdown

-   исправлено некорректное поведение выпадающего списка при использовании его внутри скролла, не являющегося скроллом вьюпорта;

feat(plasma-_, sdds-_): Position relative is set by default for target in Select, Combobox, Dropdown (https://github.com/salute-developers/plasma/pull/1586)

### TextArea

-   убран автоподскролл по фокусу

fix: TextArea auto scroll on focus (https://github.com/salute-developers/plasma/pull/1590)

## Icons

### React-native

-   добавлена генерация иконок для платформы `react-native`

feat(plasma-icons): Add react-native icons generator (https://github.com/salute-developers/plasma/pull/1563)

## Docs

-   добавлены примеры с валидацией формы в раздел "Формы"

docs: Add validation examples docs (https://github.com/salute-developers/plasma/pull/1587)

## Misc

### Typography

-   добавлено свойство `noWrap`, запрещающее перенос текста по пробелам
-   обновлены `storybooks`, тесты и документация
-   исправлена опечатка в названии папки `typograpy` -> `typography`

`plasma-*, sdds-*`: Typography noWrap prop (https://github.com/salute-developers/plasma/pull/1588)

---

#### 🚀 Enhancement

-   Release by 27.11.2024 [#1597](https://github.com/salute-developers/plasma/pull/1597) ([@denivladislav](https://github.com/denivladislav) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@vadim-kudr](https://github.com/vadim-kudr))
-   feat: add helperPlacement prop to TextArea [#1579](https://github.com/salute-developers/plasma/pull/1579) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat: add Modal designed body [#1558](https://github.com/salute-developers/plasma/pull/1558) ([@vadim-kudr](https://github.com/vadim-kudr))
-   docs(): api reports regenerated [#1588](https://github.com/salute-developers/plasma/pull/1588) ([@denivladislav](https://github.com/denivladislav))
-   feat(sdds-\*): chipView & chipValidator for TextField [#1589](https://github.com/salute-developers/plasma/pull/1589) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-\*): add Chip views ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: add hasPlaceholder prop to TextField [#1556](https://github.com/salute-developers/plasma/pull/1556) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(sdds-insol): Update design `Button` and `ButtonIcon` components [#1576](https://github.com/salute-developers/plasma/pull/1576) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(sdds-\*): add Dropzone component [#1534](https://github.com/salute-developers/plasma/pull/1534) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(\*): add disabled opacity token in calendar [#1566](https://github.com/salute-developers/plasma/pull/1566) ([@iljs](https://github.com/iljs))
-   feat(sdds-insol): add switch to linaria build [#1583](https://github.com/salute-developers/plasma/pull/1583) ([@iljs](https://github.com/iljs))
-   feat(sdds-\*): update stories and configs for Badge [#1546](https://github.com/salute-developers/plasma/pull/1546) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix: "RequiredProps" unions in TextField & TextArea [#1593](https://github.com/salute-developers/plasma/pull/1593) ([@vadim-kudr](https://github.com/vadim-kudr))
-   chore(sdds-insol): Update API report ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-_, sdds-_): Switch track and thumb tokens improved ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Add chipType prop in Select [#1577](https://github.com/salute-developers/plasma/pull/1577) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add chipType props in TextField ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add required functionality [#1561](https://github.com/salute-developers/plasma/pull/1561) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add renderItem prop in Dropdown. Fix issues with Select and Combobox [#1562](https://github.com/salute-developers/plasma/pull/1562) ([@shuga2704](https://github.com/shuga2704))
-   chore(): Switch tokens updated ([@denivladislav](https://github.com/denivladislav))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
-   Vlad Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.166.0 (Thu Nov 14 2024)

### Release Notes

#### Release by 13.11.2024 ([#1559](https://github.com/salute-developers/plasma/pull/1559))

## Components

### Autocomplete

-   добавлены новые св-ва `required`, `requiredPlacement` и `optional`;

feat(plasma-_, sdds-_): Add required functionality in Autocomplete (https://github.com/salute-developers/plasma/pull/1522)

### Combobox

-   добавлены новые св-ва `required`, `requiredPlacement` и `optional`;

feat(plasma-_, sdds-_): Add required functionality in Combobox (https://github.com/salute-developers/plasma/pull/1527)

### Range, DatePickerRange

-   добавлена возможность передать свойство `autoComplete`

feat(plasma-new-hope): Add autoComplete prop to Range (https://github.com/salute-developers/plasma/pull/1530)

### Chip

-   добавлено событие `onClickClose` по клику на крестик
-   `onClear` помечено как deprecated
-   написан тест на onClickClose

feat(plasma-new-hope): Divide chip events (https://github.com/salute-developers/plasma/pull/1536)

### Badge, Tabs

-   реализована возможность обрезания текста по максимальной ширине

feat: add Badge & Tabs truncate props (https://github.com/salute-developers/plasma/pull/1500)

### NumberInput

-   компонент включен в поставку `plasma-*` и `sdds-*` библиотек

**After**:
<img width="216" alt="image" src="https://github.com/user-attachments/assets/4b51c0e6-099d-41d7-af07-88344f7f77b0" />

feat(plasma-new-hope): Add NumberInput component (https://github.com/salute-developers/plasma/pull/1511)

### Dropdown

-   добавлено свойство alwaysOpened
-   добавлен тест на новое свойство

feat(plasma-new-hope): Add alwaysOpened prop for Dropdown (https://github.com/salute-developers/plasma/pull/1538)

### TextField

-   добавлен токен изменения цвета фона компонента при наведении

feat(plasma-_,sdds-_): Fix TextField hover tokens (https://github.com/salute-developers/plasma/pull/1551)

### Tabs

-   для `sdds-cs` исправлены значения токенов `itemSelectedDividerColor` и `itemSelectedDividerColorHover`
-   для `sdds-dfa` исправлены токены для состояния `disabled`
-   исправлены `argTypes` в stories

### Breadcrumbs

-   исправлен курсор при наведении на текущий `Breadcrumb`
-   исправлены токены для `hover` и `active` состояний у `Breadcrumb`

`plasma-new-hope, sdds-cs`: fix `Tabs` and `Breadcrumbs` (https://github.com/salute-developers/plasma/pull/1532)

### Switch

-   добавлены размеры `s`, `l`
-   добавлено свойство `description`
-   добавлено свойство `toggleSize`
-   обновлены документация и тесты

`plasma-*, sdds-*`: `Switch` sizes added (https://github.com/salute-developers/plasma/pull/1539)

### Attach, Button

-   свойство `square` у `Button` помечено как `deprecated`
-   свойство `square` удалено из storybooks для `Attach`
-   для размеров `m`, `l` у `Attach` исправлен размер иконки по умолчанию в варианте `IconButton`
-   исправлены токены для view=secondary в пакете `sdds-cs`

### IconButton

-   исправлены токены для view=secondary в пакете `sdds-cs`

`plasma-*, sdds-*`: fix `Attach` `square` prop (https://github.com/salute-developers/plasma/pull/1525)

### Steps

-   исправлены смещающиеся активные элементы
-   добавлен фокус
-   добавлены тесты

plasma-\*: Fix `Steps` jumping bullets (https://github.com/salute-developers/plasma/pull/1517)

### Select

-   осуществлен переход на `floating-ui`
-   расширена типизация, позволяющая использовать компонент в режиме uncontrolled (b2c и web)
-   исправлено некорректное отображение ячейки выпадающего списка при длинных значениях
-   расширены возможности использования компонента через портал. Теперь помимо рефки можно пробросить id `dom-элемента`
-   исправлены UI-баги при использовании портала
-   улучшена поддержка типов

feat(plasma-_, sdds-_): Select improvements (https://github.com/salute-developers/plasma/pull/1550)

### Tabs

-   вернули возможность использовать `TabItemProps`, `TabsProps` во все пакетах

`plasma-*, sdds-*`: `TabItemProps`, `TabsProps` exported (https://github.com/salute-developers/plasma/pull/1545)

## Вертикали

### `SDDS-CS`

-   добавлен view `negative` для `Combobox`
-   добавлен view `negative` для `Autocomplete`

plasma(sdds-cs): Add view negative to combobox and autocomplite (https://github.com/salute-developers/plasma/pull/1523)

Добавлены новые токены для компонентов:

-   `Autocomplete`,
-   `Combobox`,
-   `Dropdown`,
-   `Notifications`,
-   `Range`,
-   `Pagination`,
-   `Tabs`,
-   `DatePicker`

feat(new-hope): Add new tokens to components (https://github.com/salute-developers/plasma/pull/1506)

### `SDDS-INSOL`

-   обновлена тема `sdds_insol`
-   обновлено свойство `background-color` на background в компоненте `Button` для поддержки градиентов в значениях у токенов.
-   обновлены конфигурации для компонентов `Button`, `TextArea` и `TextField`

feat(sdds-insol): Update configs for `Button`, `TextArea` and `TextField` components [part 1](https://github.com/salute-developers/plasma/pull/1526)

## Docs

### Edit docs components for correctly view

-   изменена документация ( значения `size` ) для корректного отображения в документации в вертикали `sdds-cs`

fix(sdds-cs-docs): Edit docs components for correctly view (https://github.com/salute-developers/plasma/pull/1557)

### Theme documentation

-   добавлен подраздел примеры смены тем

feat: change theme docs (https://github.com/salute-developers/plasma/pull/1516)

---

#### 🚀 Enhancement

-   Release by 13.11.2024 [#1559](https://github.com/salute-developers/plasma/pull/1559) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@vadim-kudr](https://github.com/vadim-kudr) [@TitanKuzmich](https://github.com/TitanKuzmich) [@denivladislav](https://github.com/denivladislav) [@luizasok](https://github.com/luizasok))
-   docs(): api reports regenerated [#1539](https://github.com/salute-developers/plasma/pull/1539) ([@denivladislav](https://github.com/denivladislav))
-   feat(sdds-\*): add alwaysOpened to Dropdown [#1538](https://github.com/salute-developers/plasma/pull/1538) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-\*): add NumberInput component [#1511](https://github.com/salute-developers/plasma/pull/1511) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: add Badge & Tabs truncate props [#1500](https://github.com/salute-developers/plasma/pull/1500) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(sdds-insol): Update config for `Button`, `TextField` and `TextArea` components [#1526](https://github.com/salute-developers/plasma/pull/1526) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(new-hope): add thin cross to notification and toast [#1506](https://github.com/salute-developers/plasma/pull/1506) ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-_, sdds-_): Select improvements [#1550](https://github.com/salute-developers/plasma/pull/1550) ([@shuga2704](https://github.com/shuga2704))
-   chore: include css by tree shaking [#1554](https://github.com/salute-developers/plasma/pull/1554) ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-_, sdds-_): square control removed from storybooks ([@denivladislav](https://github.com/denivladislav))
-   chore(plasma-_, sdds-_): Switch ported; tests added ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_, sdds-_): fixed Tabs storybooks ([@denivladislav](https://github.com/denivladislav))
-   docs(): api reports regenerated [#1545](https://github.com/salute-developers/plasma/pull/1545) ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_, sdds-_): TabItemProps and TabsProps exported ([@denivladislav](https://github.com/denivladislav))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_, sdds-_): Add required functionality in Combobox [#1527](https://github.com/salute-developers/plasma/pull/1527) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add required functionality in Autocomplete [#1522](https://github.com/salute-developers/plasma/pull/1522) ([@shuga2704](https://github.com/shuga2704))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 9

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Luiza_Sok ([@luizasok](https://github.com/luizasok))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
-   Vlad Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.153.0 (Thu Oct 31 2024)

### Release Notes

#### Release by 30.10.2024 ([#1521](https://github.com/salute-developers/plasma/pull/1521))

## Components

### Генерация CSS linaria для SDDS SERV

-   styled components перенесены в папку `styled-components` для пакета `sdds-serv`
-   добавлена генерация CSS Linaria по-умолчанию для пакета `sdds-serv`

feat(sdds-serv): Add linaria (https://github.com/salute-developers/plasma/pull/1419)

### Accordion

-   исправлен параметр `contentRight`
-   исправлен отступы во всех поставках `sdds` в `AccordionItem`
-   добавлен новый параметр `opened`, для контроля состоянием вне компонента
-   добавлена возможность прокидывать `ref` в `AccordionItem`

feat(\*): Fix Accordion Right Content and Paddings (https://github.com/salute-developers/plasma/pull/1484)

### TextArea, TextField

-   добавлены подсказки сверху справа и в виде Tooltip
-   обновлены тесты и документация

**After**:
<img width="498" alt="image" src="https://github.com/user-attachments/assets/31f03fe2-1325-4412-80b5-b443e19e2a2d">

feat(plasma-_,sdds-_): add TextArea and TextField hints (https://github.com/salute-developers/plasma/pull/1459)

### Select

-   добавлены новые токены в ядро компонента
-   исправлена конфигурация компонента с учетом новых токенов для поставки `sdds-cs`

plasma-\*: Update config for `Select` (https://github.com/salute-developers/plasma/pull/1504)

### Dropdown

-   компонент Dropdown переведен на новую архитекутуру. API сохранен;
-   исправлен баг, связанный с невозможностью раскрытия выпадающего списка в старом(legacy) Dropdown;
-   исправлены недочеты по UI;
-   расширены возможности использования через портал;

feat(plasma-_, sdds-_): Dropdown architecture improvement (https://github.com/salute-developers/plasma/pull/1497)

### Combobox

-   несуществующие value (которых нет в массиве items) теперь отбрасываются и не принимают участие в работе компонента;
-   изменение массива items теперь приводит к обновлению выбранных элементов (для гибкой асинхронной работы);
-   исправлен баг, связанный с мутацией исходного массива items;
-   добавлено новое св-во renderValue;

### Select

-   несуществующие value (которых нет в массиве items) теперь отбрасываются и не принимают участие в работе компонента;
-   изменение массива items теперь приводит к обновлению выбранных элементов (для гибкой асинхронной работы);

feat(plasma-_, sdds-_): Combobox & Select improvements (https://github.com/salute-developers/plasma/pull/1505)

### Slider

-   добавлено вертикальное отображение
-   обновлен дизайн горизонтального отображения

feat: vertical single Slider (https://github.com/salute-developers/plasma/pull/1452)

### Notification

-   изменен `type` для `title` на `ReactNode`
-   добавлено расположение `bottom-left`

feat: Notification placement prop (https://github.com/salute-developers/plasma/pull/1503)

### Tabs

-   добавлены `Header Tabs`
-   добавлены `hover` и `active` состояния для стрелок
-   обновлены тесты и `storybooks`

plasma-_, sdds-_: Header Tabs added (https://github.com/salute-developers/plasma/pull/1502)

### SDDS-CS

-   добавлена `view negative` для компонента `Select`
-   исправлен цветовой токен для `contentLeftColor` в компоненте `Select`
-   убраны лишние опции и примеры из storybook для компонента `Select`

[PLASMA-3718]: Fix config for `Select` (https://github.com/salute-developers/plasma/pull/1519)

### Combobox

-   добавлены тесты;

feat(plasma-b2c, plasma-web): Combobox component tests (https://github.com/salute-developers/plasma/pull/1518)

### Counter

-   видимое значение не может быть меньше 1
-   для значений от 1 до 9 `Counter` становится круглым
-   добавлены размеры `l`, `m`, `s` во все пакеты (в `sdds-cs` только размер `s`)
-   исправлены токены отступов для размера `xxs`
-   обновлены `storybooks` и документация

**Before**:

<img width="292" alt="berfore" src="https://github.com/user-attachments/assets/7762823b-2ae4-4474-abb6-d638fd98b805">

**After**:

<img width="827" alt="after" src="https://github.com/user-attachments/assets/27ec7202-6243-43a7-91a6-b94131f3b84f">


`plasma-*, sdds-*`: `Counter` impovements added (https://github.com/salute-developers/plasma/pull/1514)

## Tokens

### Tokens

-   собраны изменение всех тем в один PR:
    -   https://github.com/salute-developers/plasma/pull/1491
    -   https://github.com/salute-developers/plasma/pull/1489
    -   https://github.com/salute-developers/plasma/pull/1486
    -   https://github.com/salute-developers/plasma/pull/1485
-   добавлена новая тема `sdds_os` на основе `sdds_serv`
-   обновлена `default` тема для пакета plasma-tokens

feat(plasma-tokens,sdds-themes,plasma-themes): Add and update themes from other PRs (https://github.com/salute-developers/plasma/pull/1495)

### Tokens

-   обновлены токены типографики в теме `sdds-cs`. Теперь для всех размеров экранов (L, M и S) значения всех параметров одинаковые

fix(sdds-themes): Update typography tokens for `sdds-cs` theme (https://github.com/salute-developers/plasma/pull/1507)

### Tokens

-   исправлена генерация токенов для модульного css, а также обновлены все темы
-   добавлены методы генерации наборов токенов (dark и light режимов) для компонента `ViewContainer`
-   добавлено подключение темы через css модули из пакета @salutejs/plasma-themes в plasma-new-hope

### ViewContainer

-   добавлен компонент `ViewContainer` в plasma-new-hope в качестве примера
-   добавлен декоратор `decoratorViewContainer` в plasma-new-hope с возможностью переключения тем и режимов контейнера (onDark / onLight / default)
-   добавлен компонент `ViewContainer` во все библиотеки вертикали `sdds`, а также примеры и документация

feat(plasma-new-hope, sdds-\*): Add `ViewContainer` component (https://github.com/salute-developers/plasma/pull/1488)

## Misc

### Calendar

-   поправлено поведение hover для дней на календарной сетке

**Before**:

https://github.com/user-attachments/assets/992d2566-10a1-40ff-8d76-d3e2d8de4d13

**After**:

https://github.com/user-attachments/assets/8e0bf060-a103-46ba-aa4a-b5bc6bef632d

fix(plasma-new-hope): Fix Calendar hover behaviour (https://github.com/salute-developers/plasma/pull/1498)

### Sdds-insol

-   добавлена новая библиотека

sdds-insol: Add library of components `sdds-insol` (https://github.com/salute-developers/plasma/pull/1509)

---

#### 🚀 Enhancement

-   Release by 30.10.2024 [#1521](https://github.com/salute-developers/plasma/pull/1521) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@simashova](https://github.com/simashova) [@Irinkv](https://github.com/Irinkv) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@vadim-kudr](https://github.com/vadim-kudr) [@denivladislav](https://github.com/denivladislav))
-   feat(sdds-insol): Add library of components [#1509](https://github.com/salute-developers/plasma/pull/1509) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs(sdds-insol-docs): Add docs ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 10

-   [@iljs](https://github.com/iljs)
-   [@Irinkv](https://github.com/Irinkv)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Anastasia Simashova ([@simashova](https://github.com/simashova))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))
