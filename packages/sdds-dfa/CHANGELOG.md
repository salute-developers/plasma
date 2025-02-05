## 0.231.0 (23 января 2025)

## Функциональные изменения в компонентах

### Rating

-   исправлена логика расчета отображаемого значения

**Before**: <img width="521" alt="image" src="https://github.com/user-attachments/assets/187e7764-1a7d-440a-a027-66d9ab131401" />

**After**: <img width="517" alt="image" src="https://github.com/user-attachments/assets/23f56b4f-3ead-45fd-9d6b-3a0d3c8cba3f" />

[PR](https://github.com/salute-developers/plasma/pull/1685)

### Note

-   добавлен новый компонент Note

<img width="454" alt="image" src="https://github.com/user-attachments/assets/01230e8f-117c-46ec-b50f-8427e648049a" />

[PR](https://github.com/salute-developers/plasma/pull/1681)

### Flow

Универсальный контейнер для упорядоченного размещения вложенных компонентов (например, медиафайлы, карточки или блоки текста).

[PR](https://github.com/salute-developers/plasma/pull/1657)

### NumberInput

-   исправлен баг, позволявший ввести число с точкой в конце, больше максимального значения или ниже минимального значения
-   добавлено свойство `precision`, определяющее кол-во знаков после запятой
-   добавлены тесты на эти кейсы

[PR](https://github.com/salute-developers/plasma/pull/1699)

### DatePicker

-   добавлена возможность указать место раскрытия календаря

**After**: <img width="620" alt="image" src="https://github.com/user-attachments/assets/06764c3a-c58d-46a9-a027-49715ebe91e4" />

[PR](https://github.com/salute-developers/plasma/pull/1697)

### Avatar

-   добавлен блок для отображения дополнительного контента в виде badge или counter

**After**: <img width="127" alt="image" src="https://github.com/user-attachments/assets/9e795ffb-4d81-44d5-8959-63234db209b8" /> <img width="116" alt="image" src="https://github.com/user-attachments/assets/452d8c47-44a4-4a75-b3a7-d7a43381469b" />

[PR](https://github.com/salute-developers/plasma/pull/1696)

-   поля ввода даты становятся независимыми после выбора полной даты в DatePickerRange
-   добавлено свойство `closeAfterDateSelect`, позволяющее закрыть календарь после выбора даты

[PR](https://github.com/salute-developers/plasma/pull/1702)

### Slider

-   Изменен отступ между иконкой слева и label при горизонтальном слайдере

[PR](https://github.com/salute-developers/plasma/pull/1703)

### ThemeBuilder

Добавлена валидация при создании токена / редактировании токена:

-   Проверка, что токен называется в CamelCase нотации
-   Название токена не должно превышвать 32 символа
-   Название не должно начинаться с название подгруппы, в которой он создаётся
-   В названии не должно быть зарезервированных слов "onDark", "onLight", "inverse"
-   Значение обычного цвета теперь поддерживается только в HEX и HEXA форматах
-   Значение градиента допускается только в полном описании: linear|radial-gradient (<угол / радиус>, <цвет> <позиция>, <цвет> <позиция>)

[PR](https://github.com/salute-developers/plasma/pull/1690)

### Cell

-   добавлена возможность передачи `restProps` в компоненты `CellTextbox`
-   исправлен пример для `CellTextbox`

### Checkbox

-   исправлена ширина кликабельной области `label` по умолчанию (`singleLine=false`)
-   добавлена `story` для длинного названия + `singleLine`
-   добавлен тест на клик по `label` и тест для свойства `singleLine`

### Radiobox

-   исправлена ширина кликабельной области `label` по умолчанию (`singleLine=false`)

[PR](https://github.com/salute-developers/plasma/pull/1701)

### TextField, Autocomplete, TextArea, Combobox, Select

-   исправлен размер иконки trigger для hint
-   добавлено отображение Hint внутри TextField-like компонент

<img width="1080" alt="image" src="https://github.com/user-attachments/assets/99ab8bf7-b1b0-422b-a9e8-9fec18134833" />

[PR](https://github.com/salute-developers/plasma/pull/1706)

### Combobox, Select, Dropdown

-   добавлена возможность задавать направление раскрытия вложенных дропдаунов

<img width="420" alt="image" src="https://github.com/user-attachments/assets/1ada8d53-f6ed-4ea7-a921-d433ddd273a0" />

[PR](https://github.com/salute-developers/plasma/pull/1709)

### Button, IconButton

-   актуализированы примеры документации для свойств: `size`, `view`

[PR](https://github.com/salute-developers/plasma/pull/1668)

### Tree

-   перенесен внешний css из rc-tree в локальную сборку

[PR](https://github.com/salute-developers/plasma/pull/1710)

### Tokens

-   актуализированы токены для конфигураций компонентов

[PR](https://github.com/salute-developers/plasma/pull/1646)

### Autocomplete, Select, Combobox

-   добавлены новые токены для более детальной кастомизации
-   исправлен токен жирности шрифта для `button-like` варианта `Select`;

[PR](https://github.com/salute-developers/plasma/pull/1675)

### Dropdown

-   добавлен токен `itemMargin`
-   добавлен токен `disclosureIconColor`

[PR](https://github.com/salute-developers/plasma/pull/1705)

## Изменения в библиотеки

### Skeleton

-   добавлен экспорт компонента из пакета

[PR](https://github.com/salute-developers/plasma/pull/1684)

## 0.218.0 (26 декабря 2024)

## Функциональные изменения в компонентах

### Counter

-   изменили минимальное значение с 1 на 0

[PR](https://github.com/salute-developers/plasma/pull/1640)

### Select, Autocomplete, Combobox

-   добавлены свойства beforeList и afterList, которые служат ячейками для content в выпадающем списке;

[PR](https://github.com/salute-developers/plasma/pull/1645)

### TextArea

-   изменен тип свойства `rightHelper` на `ReactNode`

[PR](https://github.com/salute-developers/plasma/pull/1642)

### Select

-   добавлена поддержка `react-hook-form`

[PR](https://github.com/salute-developers/plasma/pull/1639)

### Tokens

-   Добавлена генерация `spacing` токенов

[PR](https://github.com/salute-developers/plasma/pull/1654)

### TS

-   обновлена, глобально, версия TS с 4.2.4 до 4.5.5

[PR](https://github.com/salute-developers/plasma/pull/1641)

### Attach

-   добавлено свойство `helperText`
-   добавлен `helperTextView` со значениями `default` и `negative`

<img width="1107" alt="helperTextView" src="https://github.com/user-attachments/assets/9a47e731-ee63-46e7-8f57-890cea762082" />

[PR](https://github.com/salute-developers/plasma/pull/1656)

### Notification

-   исправлена типизация компонента (убран принудительный кастинг)

[PR](https://github.com/salute-developers/plasma/pull/1664)

### Button, ButtonGroup, IconButton

-   Добавлен размер `xl` во все вертикали

[PR](https://github.com/salute-developers/plasma/pull/1624)

### TextField

-   исправлено поведение свойства `textAfter`, теперь позиция всегда рядом с текстом input

[PR](https://github.com/salute-developers/plasma/pull/1611)

### Textarea

-   актуализированы примеры в storybook в соответствии с дизайном

-   исправлена работа `placeholder` при работе `react-hook-form` с defaultValues

[PR](https://github.com/salute-developers/plasma/pull/1649)

### Breadcrumbs, Calendar, Combobox, Dropdown, Select, Slider

-   исправлены циклические зависимости

[PR](https://github.com/salute-developers/plasma/pull/1666)

### Popover

-   в target можно передать ref на элемент, рядом с которым произойдет открытие

[PR](https://github.com/salute-developers/plasma/pull/1647)

### Dropdown

-   свойство `hasArrow` помечено как `deprecated`

-   актуализированы примеры в `storybook`

[PR](https://github.com/salute-developers/plasma/pull/1669)

-   добавлена новые токены для возможности управления расстоянием между контентом Item и иконкой DisclosureRight
-   добавлен новый токен, отвечающий за скейлинг иконки DisclosureRight в зависимости от размера компонента
-   исправлены стили скруглений и отступтов, теперь они рассчитываются по формуле, также как и в компоненет `Select`

[PR](https://github.com/salute-developers/plasma/pull/1650)

### Tree

-   добавлен новый компонент (многоуровневый раскрывающийся список в виде дерева);

[PR](https://github.com/salute-developers/plasma/pull/1603)

### TextArea, TextField

-   свойства required попадает в `DOM` на соотвествующие элементы

[PR](https://github.com/salute-developers/plasma/pull/1670)

-   закрытие выпадающего списка теперь возможно по повторному нажатию на таргет;

[PR](https://github.com/salute-developers/plasma/pull/1676)

## Изменения в библиотеки

-   Добавлены `spacing` токены

[PR](https://github.com/salute-developers/plasma/pull/1654)

## 0.201.0 (12 декабря 2024)

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

# v0.186.0 (Thu Nov 28 2024)

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
-   feat(sdds-\*): add Dropzone component [#1534](https://github.com/salute-developers/plasma/pull/1534) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(\*): add disabled opacity token in calendar [#1566](https://github.com/salute-developers/plasma/pull/1566) ([@iljs](https://github.com/iljs))
-   feat(sdds-\*): update stories and configs for Badge [#1546](https://github.com/salute-developers/plasma/pull/1546) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix: "RequiredProps" unions in TextField & TextArea [#1593](https://github.com/salute-developers/plasma/pull/1593) ([@vadim-kudr](https://github.com/vadim-kudr))
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

# v0.173.0 (Thu Nov 14 2024)

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
-   feat(sdds-dfa/finportal/serv): fix TextField hover token ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-\*): add alwaysOpened to Dropdown [#1538](https://github.com/salute-developers/plasma/pull/1538) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-\*): add NumberInput component [#1511](https://github.com/salute-developers/plasma/pull/1511) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: add Badge & Tabs truncate props [#1500](https://github.com/salute-developers/plasma/pull/1500) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(new-hope): add thin cross to notification and toast [#1506](https://github.com/salute-developers/plasma/pull/1506) ([@iljs](https://github.com/iljs))
-   feat(\*): add tokens to all libs in dropdown ([@iljs](https://github.com/iljs))
-   feat(\*): add tokens to all libs in combobox ([@iljs](https://github.com/iljs))
-   feat(\*): add tokens to all libs in calender and datepicker ([@iljs](https://github.com/iljs))
-   feat(\*): add tokens to all libs in autocomplite ([@iljs](https://github.com/iljs))
-   feat(new-hope): toast and notification tokens ([@iljs](https://github.com/iljs))
-   feat(new-hope): datepicker add more tokens ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-_, sdds-_): Select improvements [#1550](https://github.com/salute-developers/plasma/pull/1550) ([@shuga2704](https://github.com/shuga2704))
-   fix: fix Steps jumping bullets [#1517](https://github.com/salute-developers/plasma/pull/1517) ([@vadim-kudr](https://github.com/vadim-kudr))
-   fix(plasma-_, sdds-_): square control removed from storybooks ([@denivladislav](https://github.com/denivladislav))
-   chore(plasma-_, sdds-_): Switch ported; tests added ([@denivladislav](https://github.com/denivladislav))
-   fix(sdds-dfa): Tabs disabled tokens fixed [#1532](https://github.com/salute-developers/plasma/pull/1532) ([@denivladislav](https://github.com/denivladislav))
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

# v0.160.0 (Thu Oct 31 2024)

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
-   docs(): api reports regenerated [#1514](https://github.com/salute-developers/plasma/pull/1514) ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_,sdds-_): add hasHint to TextField/Area stories [#1513](https://github.com/salute-developers/plasma/pull/1513) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: Notification placement prop [#1503](https://github.com/salute-developers/plasma/pull/1503) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat: vertical single Slider [#1452](https://github.com/salute-developers/plasma/pull/1452) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(\*): add new tokens to select in all libs [#1504](https://github.com/salute-developers/plasma/pull/1504) ([@iljs](https://github.com/iljs))
-   feat(sdds-\*): Add `ViewContainer` component [#1488](https://github.com/salute-developers/plasma/pull/1488) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(sdds-\*): add hint to TextArea & TextField [#1459](https://github.com/salute-developers/plasma/pull/1459) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(\*): add new props, edit contentRight, add ref to item and fix margin in sdds [#1484](https://github.com/salute-developers/plasma/pull/1484) ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(plasma-_, sdds-_): Counter configs and storybooks updated ([@denivladislav](https://github.com/denivladislav))
-   docs(): api reports regenerated [#1502](https://github.com/salute-developers/plasma/pull/1502) ([@denivladislav](https://github.com/denivladislav))
-   fix(): add arrow hover & active state; fix tokens ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Header tabs added ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Combobox & Select improvements [#1505](https://github.com/salute-developers/plasma/pull/1505) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Dropdown architecture improvement [#1497](https://github.com/salute-developers/plasma/pull/1497) ([@shuga2704](https://github.com/shuga2704))
-   docs(sdds-\*): Regenerate API report ([@neretin-trike](https://github.com/neretin-trike))
-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

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

---

# v0.148.0 (Thu Oct 17 2024)

### Release Notes

#### Release by 16.10.2024 ([#1487](https://github.com/salute-developers/plasma/pull/1487))

## Components

### Accordion

-   свойство `view` помечено как `optional`
-   свойство `view` для AccordionItem помечено как `deprecated`
-   свойство `title` для `AccordionItem` теперь `ReactNode`

[PLASMA-3591]: Fix Accordion types (https://github.com/salute-developers/plasma/pull/1467)

### TextArea

-   исправлен скроллбар
-   обновлены `snapshots`

feat(plasma-_, sdds-_): TextArea scrollbar (https://github.com/salute-developers/plasma/pull/1471)

### Popup

-   добавлены storybook декораторы для `Popup` и `Notification` для правильного отображения: `Drawer, Modal, Notification, Popup`

plasma-\*: Fix popup mount logic (https://github.com/salute-developers/plasma/pull/1412)

### Tabs

-   вертикальные табы добавлены в поставку всех клиентских библиотек
-   добавлено свойство `value` для горизонтальных и вертикальных табов
-   исправлены токены для всех пакетов

<img width="181" alt="Снимок экрана 2024-09-24 в 14 39 29" src="https://github.com/user-attachments/assets/9889e4d1-9297-4cf9-a577-23f5d1c8c9af">

<img width="163" alt="Снимок экрана 2024-09-24 в 14 38 56" src="https://github.com/user-attachments/assets/596e92aa-1136-4f41-bb29-67ce31dbff75">

`plasma-*, sdds-*`: Vertical Tabs added (https://github.com/salute-developers/plasma/pull/1374)

### Badge

-   добавлен новый размер `XS`

[PLASMA-3598]: Badge: Add size XS (https://github.com/salute-developers/plasma/pull/1466)

### `SDDS-CS`

#### Button

-   используется token `--text-accent` когда `view: secondary`

#### Chip

-   для `closeIconColor` используется token `--text-accent` когда `view: secondary`

#### Badge

-   изменены `padding{Right,Left}` на `8px`

[PLASMA-3611]: Правки конфигураций Button, Chip, Badge [SDDS-CS](https://github.com/salute-developers/plasma/pull/1473)

### Breadcrumbs

-   добавлена поддержка обработчика `onClick` при клике на ссылку
-   поправлены union типы
-   обновлена документация с указанием типов элементов

feat(plasma-new-hope, \*-docs): Add onClick for item to `Breadcrumbs` component (https://github.com/salute-developers/plasma/pull/1480)

### Tabs

-   исправлен скролл табов при малой ширине
-   в `storybooks` добавлены свойства `width` и `height`, доступные при условии `clip = scroll`

`plasma-new-hope`: fix tabs arrow scroll (https://github.com/salute-developers/plasma/pull/1476)

### Attach

-   исправлен `onChange`, `id` и `name`
-   добавлено свойство `onClear`
-   в документацию добавлен пример с использованием компонента внутри формы

`plasma-new-hope`: fix Attach (https://github.com/salute-developers/plasma/pull/1481)

### Combobox

-   добавлен дженерик для св-ва `items` в компоненте Combobox

feat(plasma-b2c, web, sdds): Added generic for items in Combobox (https://github.com/salute-developers/plasma/pull/1470)

### TextArea

-   добавлена фокусировка по клику на дочерние элементы

plasma-\*: Focus TextArea by click inside (https://github.com/salute-developers/plasma/pull/1444)

### SDDS CS Pack 4 ( overlay and navigation )

-   изменены токены для компонентов: `Autocomplie`, `Avatar`, `Breadcrumbs`, `Cell`, `Drawer`, `Dropdown`, `Modal`, `Notification`, `Pagination`, `Popover`, `Price`, `Progress`, `Segment`, `Slider`, `Tabs`, `Toast`, `Toolbar`, `Tooltip`
-   добавлена и обновлена актуальная документация

fix(sdds-cs): set overlay and navigation tokens (https://github.com/salute-developers/plasma/pull/1458)

### DatePicker

-   добавлен вызов change callback при выборе даты из календаря
-   добавлена возможность указать frame, в котором будет происходить рендер календаря
-   добавлена сортировка дат для Range DatePicker
-   исправлено поведение фокуса при закрытии календаря

feat(plasma-new-hope): Datepicker improvements (https://github.com/salute-developers/plasma/pull/1475)

### Segment

-   добавлен вертикальный режим
-   обновлен дизайн горизонтального отображения
-   обновлен CS дизайн

feat: Segment redesign (https://github.com/salute-developers/plasma/pull/1392)

## Docs

### Документация `SDDS-CS`

-   исправлены некорректные `imports` для примеров в документации к `Dropdown`
-   добавлена страница для компонента `Tooltip`

[PLASMA-3536]: Fix incorrect imports by doc (https://github.com/salute-developers/plasma/pull/1469)

## Misc

### Attach

-   исправлен `truncate` имени файла
-   исправлены тесты

`plasma-new-hope`: fix attach truncate (https://github.com/salute-developers/plasma/pull/1454)

feat(plasma-tokens): auto generate stylesSalute theme (https://github.com/salute-developers/plasma/pull/1472)

### ThemeBuilder

-   изменены методы генерации базовой темы в старом формате
-   изменены методы генерации базовой темы для новой архитектуры

feat(plasma-theme-builder): Update generating default theme (https://github.com/salute-developers/plasma/pull/1477)

### Toast

-   исправлен токен background для view="dark"

**Before**
<img width="319" alt="image" src="https://github.com/user-attachments/assets/fea32b30-270b-48c1-87f0-d6169e2d3bd7">

**After**
<img width="128" alt="image" src="https://github.com/user-attachments/assets/f52f5174-2a52-4dd0-a964-7fbcd52fdad6">

fix(plasma-_,sdds-_): Fix Toast background token (https://github.com/salute-developers/plasma/pull/1478)

---

#### 🚀 Enhancement

-   Release by 16.10.2024 [#1487](https://github.com/salute-developers/plasma/pull/1487) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@denivladislav](https://github.com/denivladislav) [@luizasok](https://github.com/luizasok) [@neretin-trike](https://github.com/neretin-trike) [@vadim-kudr](https://github.com/vadim-kudr) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@Yeti-or](https://github.com/Yeti-or))
-   feat: SegmentGroup redesign & vertical mode [#1392](https://github.com/salute-developers/plasma/pull/1392) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(\*): add breadrumbs new tokens [#1458](https://github.com/salute-developers/plasma/pull/1458) ([@iljs](https://github.com/iljs))
-   feat(plasma-web, plasma-b2c, sdds): Interlayer in Combobox according to the new generic [#1470](https://github.com/salute-developers/plasma/pull/1470) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): Add generic of ItemOption in ComboboxProps ([@shuga2704](https://github.com/shuga2704))
-   feat: api report update by prop `size:xs` [#1466](https://github.com/salute-developers/plasma/pull/1466) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-\*): add `size:xs` [badge](<[@Yakutoc](https://github.com/Yakutoc)>)

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(sdds-cs): set overlay and navigation tokens ([@iljs](https://github.com/iljs))
-   docs: regenerate api reports [#1478](https://github.com/salute-developers/plasma/pull/1478) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   test(plasma-\*): update Toast tests ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-_,sdds-_): fix Toast background token ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore(): added width and height to Tabs storybooks [#1476](https://github.com/salute-developers/plasma/pull/1476) ([@denivladislav](https://github.com/denivladislav))
-   docs(): api reports regenerated [#1374](https://github.com/salute-developers/plasma/pull/1374) ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix tokens, styles and typos ([@denivladislav](https://github.com/denivladislav))
-   chore(plasma-_, sdds-_): Tabs ported ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Tabs split into Horizontal and Vertical ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_,sdds-_): fix Modal & Popup stories docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_, sdds-_): add scrollbar to TextArea ([@denivladislav](https://github.com/denivladislav))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Luiza_Sok ([@luizasok](https://github.com/luizasok))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.139.0 (Thu Oct 03 2024)

### Release Notes

#### Release by 02.10.2024 ([#1465](https://github.com/salute-developers/plasma/pull/1465))

## Components

### ChipGroup

-   добавлен новый компонент в поставку пакетов `plasma-*` и `sdds-*`
-   написаны тесты и документация

**After**:
<img width="425" alt="image" src="https://github.com/user-attachments/assets/017e9c45-0276-43bb-b94c-d64832268ae5">

feat(plasma-_, sdds-_): Add ChipGroup component (https://github.com/salute-developers/plasma/pull/1445)

### Dropdown

-   исправлен баг с некорректной работой св-ва `placement` в storybook в новой вкладке;
-   убрана приписка `new` в названиях сторей для `combobox` в sdds-\*;

feat(plasma-web, b2c): Added mappings for placement prop in Dropdown (https://github.com/salute-developers/plasma/pull/1455)

### Switch

-   Свойство `label-position` заложено в ядро компонента, а не в конфиг ( как-раньше )
-   Добавлен в поставку `web` и `b2c` в сборке с linaria

plasma-\*: Fix Switch Config (https://github.com/salute-developers/plasma/pull/1447)

### Calendar

-   добавлено новое свойство `locale` для работы с локалями отличными от `ru`

[PLASMA-3484]: Calendar support `EN` local (https://github.com/salute-developers/plasma/pull/1428)

### Dropdown

-   добавлен divider в новый Dropdown
-   обновлена документация

**After**:
<img width="229" alt="image" src="https://github.com/user-attachments/assets/8b871aa3-ad57-4461-8049-a3f3826003c8">

feat(plasma-_,sdds-_): Add divider to Dropdown (https://github.com/salute-developers/plasma/pull/1446)

### Drawer

-   исправлено появление горизонтального скроллбара при открытии Drawer
-   исправлено динамическое изменение placement и анимации открытия/закрытия

**Before**:
https://github.com/user-attachments/assets/4532f60a-5122-498f-a684-849c899cde1e

**After**:
https://github.com/user-attachments/assets/58c8eb93-67a7-4f45-8941-b193a996c184

plasma-\*: Fix Drawer positioning and overflow scrollbar (https://github.com/salute-developers/plasma/pull/1461)

### TextField

-   добавлено **новое** отображение `clear`
-   добавлен `divider` для `clear` отображения
-   обновлены тесты и документация
-   включено в поставку `plasma-*`, `sdds-*` пакетов

**After**:
<img width="491" alt="image" src="https://github.com/user-attachments/assets/1db9b69e-d834-48d4-8a7c-1dcf3a3c1e89" />

feat(plasma-_,sdds-_): add TextField clear views (https://github.com/salute-developers/plasma/pull/1449)

### TextArea

-   добавлено отображение clear TextArea
-   добавлен divider для clear отображения
-   обновлены тесты и документация
-   включено в поставку plasma-\*, sdds-\* пакетов

**After**:
<img width="486" alt="image" src="https://github.com/user-attachments/assets/8e8eee98-efc7-4d5e-957c-b6e4defb0f05">

feat(plasma-_,sdds-_): add TextArea clear views (https://github.com/salute-developers/plasma/pull/1451)

### Form

Для компонентов `TextField`, `TextArea`, `Radioboxe`, `Switch`, `Checkbox`, `Slider`, `DatePicker`, `DatepickerRange`,

-   добавлена поддержка `React Hook Form`
-   добавлена поддержка работы с `html form`

plasma-\*: Support form (https://github.com/salute-developers/plasma/pull/1464)

### Steps

-   добавлен новый компонент: горизонтальный, вертикальный режим

<img width="140" src="https://github.com/user-attachments/assets/44a553d4-c191-4c14-b251-18188ea7544f" />
<img width="736" src="https://github.com/user-attachments/assets/3044c7b9-60d8-491d-993b-52b49344d352" />

plasma-\*: Steps (https://github.com/salute-developers/plasma/pull/1443)

---

#### 🚀 Enhancement

-   Release by 02.10.2024 [#1465](https://github.com/salute-developers/plasma/pull/1465) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@iljs](https://github.com/iljs) [@IgorYar](https://github.com/IgorYar) [@vadim-kudr](https://github.com/vadim-kudr))
-   feat: Steps (horizontal + vertical) [#1443](https://github.com/salute-developers/plasma/pull/1443) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(\*): add docs [#1464](https://github.com/salute-developers/plasma/pull/1464) ([@iljs](https://github.com/iljs))
-   feat(new-hope): add react-hok-form-support ([@iljs](https://github.com/iljs))
-   feat(new-hope): add support datepicker ([@iljs](https://github.com/iljs))
-   feat(new-hope): add support double slider ([@iljs](https://github.com/iljs))
-   feat(plasma-_,sdds-_): update TextArea config & stories [#1451](https://github.com/salute-developers/plasma/pull/1451) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_,sdds-_): update configs depending on TextField [#1449](https://github.com/salute-developers/plasma/pull/1449) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-\*): update Textfield config & stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_,sdds-_): update Dropdown configs & stories [#1446](https://github.com/salute-developers/plasma/pull/1446) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-\*): extend stories examples ([@Yakutoc](https://github.com/Yakutoc))
-   feat(new-hope): edit work label position switch [#1447](https://github.com/salute-developers/plasma/pull/1447) ([@iljs](https://github.com/iljs))
-   feat(sdds-\*): add ChipGroup component [#1445](https://github.com/salute-developers/plasma/pull/1445) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-_,sdds-_): fix TextField configs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope,sdds-\*): fix Drawer stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-web, b2c): Added mappings for placement prop in Dropdown [#1455](https://github.com/salute-developers/plasma/pull/1455) ([@shuga2704](https://github.com/shuga2704))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))

---

# v0.129.0 (Tue Sep 24 2024)

### Release Notes

#### Release by 24.09.2024 ([#1450](https://github.com/salute-developers/plasma/pull/1450))

## Components

### Mask

-   добавлен **новый** компонент
-   включен в поставку plasma-_ и sdds-_ пакетов

feat(plasma-\*): add Mask (https://github.com/salute-developers/plasma/pull/1418)

### Правка токенов в SDDS CS

-   Изменены токены для компонентов `Autocomplite`, `Combobox`, `Datepicker`, `Range`, `Textfield`, `Textarea`, `Select` в поставке `sdds-cs`

feat(sdds-cs): edit tokens (https://github.com/salute-developers/plasma/pull/1439)

### Attach

-   добавлен **новый** компонент в поставку всех клиентских библиотек

<img width="554" src="https://github.com/user-attachments/assets/0ede5244-018b-4801-9816-6d3f425a1ec5" />

<img width="296" src="https://github.com/user-attachments/assets/e86d1a79-13f9-430c-8c78-60da463bda6d" />

### Cell

-   добавлена возможность использовать свойство `className`

`plasma-*, sdds-*`: Add Attach (https://github.com/salute-developers/plasma/pull/1437)

## Misc

### Tests

-   изменены тесты plasma-b2c компонента TextArea

test(plasma-b2c): update tests for TextArea (https://github.com/salute-developers/plasma/pull/1434)

---

#### 🚀 Enhancement

-   Release by 24.09.2024 [#1450](https://github.com/salute-developers/plasma/pull/1450) ([@IgorYar](https://github.com/IgorYar) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@denivladislav](https://github.com/denivladislav))
-   docs(): api reports regenerated [#1437](https://github.com/salute-developers/plasma/pull/1437) ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-\*): fix Mask stories prop [#1418](https://github.com/salute-developers/plasma/pull/1418) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-\*): add Mask component ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-_, sdds-_): Attach ported; tests added ([@denivladislav](https://github.com/denivladislav))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.126.0 (Thu Sep 19 2024)

### Release Notes

#### Release by 18.09.2024 ([#1442](https://github.com/salute-developers/plasma/pull/1442))

## Components

### Badge

-   добавлено свойство `clear`, которое меняет отображение `view`
-   обновлена документация и storybook

**After**:

<img width="328" src="https://github.com/user-attachments/assets/d44c10e8-ffe3-4137-a833-4351b7b82bdc" />

feat(plasma-\*): Badge add prop clear (https://github.com/salute-developers/plasma/pull/1424)

### TextField

-   используется корректный `color token` для содержимого `contentLeft\Right` slots
-   добавлен `hover` для `contentRight` slot

**Before(incorrect color token):**

<img width="928" src="https://github.com/user-attachments/assets/42aa0845-54f4-45ed-8fb0-b71edac4ebf7" />

**After(correct color token):**

<img width="922" src="https://github.com/user-attachments/assets/e6c05099-b9fb-4959-b815-7f2307690263" />

**Hover:**

<img width="940" src="https://github.com/user-attachments/assets/508db157-deff-44e2-9dd9-4893184eb59a" />

[PLASMA-3412]: TextField contentRight\Left fix UI (https://github.com/salute-developers/plasma/pull/1429)

### Combobox

-   добавлено новое свойство `alwaysOpened`
-   обновлены токены в конфигурации компонента для `plasma-web`
-   обновлена документация

feat(plasma-\*): combobox always opened (https://github.com/salute-developers/plasma/pull/1422)

### Grid

-   исправили `view` по-умолчанию для `sdds` вертикалей

**Before:**
<img width="1920" src="https://github.com/user-attachments/assets/6476ef70-294d-492b-b462-2e42cdb341d4" />

**After:**
<img width="1920" src="https://github.com/user-attachments/assets/aa004cf2-9e43-4691-84f3-fb33f94b3e5f" />

fix(sdds-\*): Use correct default view for Grid (https://github.com/salute-developers/plasma/pull/1431)

### Editable

-   переведен на новую архитектуру и добавлен в поставки `plasma-{b2c, web}`
-   исправлена работа свойства `placeholder`

<img width="276" src="https://github.com/user-attachments/assets/bdd67ba7-62f1-48f1-8f04-78a13fbb8045" />
 
plasma-{web, b2c}: Editable component refactor (https://github.com/salute-developers/plasma/pull/1430)

### Combobox

-   исправлена ошибка, когда изначальное значение в `single combobox` не отображалось

plasma-\*: Fixed issue with predefined value in single Combobox (https://github.com/salute-developers/plasma/pull/1436)

## Icons

### Add new icons

**pcMouse**
<img width="71" src="https://github.com/user-attachments/assets/f2097d88-d354-404a-91af-d59af0a61c3f" />

**Blank JPG/PNG**
<img width="140" src="https://github.com/user-attachments/assets/0d3a251a-ec39-4e0d-943b-e37c8d96c22f" />

[PLASMA-3502]: Add icons: Mouse, Blank JPG/PNG (https://github.com/salute-developers/plasma/pull/1435)

## Tokens

-   исправлены формулы генерации `brightness` токенов
-   обновлены / добавлены `active`, `hover`, `brightness` токены для `plasma-{b2c, web}` themes

fix(plasma-tokens): Update active, hover and brightness tokens in themes (https://github.com/salute-developers/plasma/pull/1441)

## Misc

### QA Auto test

-   изменены тесты `plasma-b2c` компонентов `Slider`, `Tabs`, `DatePicker` и `Card`

---

#### 🚀 Enhancement

-   Release by 18.09.2024 [#1442](https://github.com/salute-developers/plasma/pull/1442) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))
-   feat(sdds-\*): update Badge stories & configs [#1424](https://github.com/salute-developers/plasma/pull/1424) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_/sdds-_): update TextField stories [#1426](https://github.com/salute-developers/plasma/pull/1426) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-09-18 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(sdds-\*): use correct default view for Grid [#1431](https://github.com/salute-developers/plasma/pull/1431) ([@Yakutoc](https://github.com/Yakutoc))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_,sdds-_): update Combobox stories props ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(api-report): update api report (InputHTMLAttributes) [#1429](https://github.com/salute-developers/plasma/pull/1429) ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-\*): fix `content{Left\Right}Slot` UI ([@Yakutoc](https://github.com/Yakutoc))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.118.0 (Tue Sep 10 2024)

#### 🚀 Enhancement

-   plasma-\*: Fix `TextField` placeholder logic [HOTFIX][#1425](https://github.com/salute-developers/plasma/pull/1425) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_/sdds-_): update TextField stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.117.0 (Thu Sep 05 2024)

### Release Notes

#### Release by 04.09.2024 ([#1420](https://github.com/salute-developers/plasma/pull/1420))

## Components

### Switch

-   токены для `Switch` приведены в соответствие с макетами
-   добавлено состояние `hover`
-   удален `skip test` для свойства `pressed` (это свойство deprecated). Вместо него добавлен тест `onMouseDown` с событием `realMouseDown`
-   в тест `OnClick` добавлен `realClick`

plasma-_, sdds-_: Fix `Switch` tokens (https://github.com/salute-developers/plasma/pull/1388)

### DatePicker

-   добавлена поддержка русского и английского языка
-   добавлено форматирование даты

plasma-(\*): Add format and lang in Datepicker (https://github.com/salute-developers/plasma/pull/1404)

### ModalBase

-   обновлен токен `modalOverlayColor` в `plasma-{web, b2c}`

plasma-{web,b2c}: update ModalBase modalOverlayColor token (https://github.com/salute-developers/plasma/pull/1364)

### TextFieldGroup

-   добавлен новый компонент для `plasma-{web, b2c}, sdds-{serv, dfa}`
-   написаны тесты и документация

feat(plasma-_,sdds-_): component textfield group (https://github.com/salute-developers/plasma/pull/1405)

### TextArea/TextField

-   добавлены новые свойства: `required`, `requiredPlacement, optional`
-   обновлены screenshots и документация

feat(plasma-_, sdds-_): Add required variation to TextArea/TextField (https://github.com/salute-developers/plasma/pull/1352)

### Combobox

-   добавлен в поставку для `plasma-{web, b2c}, sdds-*`
-   реализована вложенность (на основе [Floating UI](https://floating-ui.com/))
-   добавлено новое свойство `closeAfterSelect` в `Combobox` и `Select`.
-   поправлен отступ в компоненте `Select` в варианте `textfield-like`.

plasma-_, sdds-_: Combobox v2 (https://github.com/salute-developers/plasma/pull/1406)

### SDDS FIN PORTAL

-   опубликован новый пакет `@salutejs/sdds-finportal`

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

-   Добавлены новые токены `-brightness` в `theme-builder`
-   Во все темы добавлены новый токены для высветления: `combobox`, `dropdown`, `notification`, `toast`, `toolbar` и `tooltip`
-   Исправлен компонент `Comobox` и обновлены тесты
-   Изменен workfkow cypress

plasma-(\*): Add Brightness Tokens (https://github.com/salute-developers/plasma/pull/1361)

## Misc

### Tests

-   изменены тесты plasma-b2c компонентов ButtonGroup и IconButton

test(plasma-b2c): update tests for ButtonGroup and IconButton (https://github.com/salute-developers/plasma/pull/1407)

---

#### 🚀 Enhancement

-   Release by 04.09.2024 [#1420](https://github.com/salute-developers/plasma/pull/1420) ([@denivladislav](https://github.com/denivladislav) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@IgorYar](https://github.com/IgorYar) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) VAnaKudryavtsev@sberbank.ru [@shuga2704](https://github.com/shuga2704))
-   feat: add required variation to TextArea & TextField [#1352](https://github.com/salute-developers/plasma/pull/1352) (VAnaKudryavtsev@sberbank.ru)
-   feat: rename InputGroup to TextFieldGroup [#1405](https://github.com/salute-developers/plasma/pull/1405) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-serv/dfa): add InputGroup component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(\*): add format and lang [#1404](https://github.com/salute-developers/plasma/pull/1404) ([@iljs](https://github.com/iljs))
-   feat(\*): set background arrow tooltip [#1361](https://github.com/salute-developers/plasma/pull/1361) ([@iljs](https://github.com/iljs))
-   feat(tokens): update screenshoots and add themes ([@iljs](https://github.com/iljs))
-   feat(\*): set tokens in components ([@iljs](https://github.com/iljs))
-   feat(sdds-\*): update Checkbox stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(b2c, web, sdds): Combobox v2 [#1406](https://github.com/salute-developers/plasma/pull/1406) ([@shuga2704](https://github.com/shuga2704))
-   docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-_, sdds-_): tokens and hover state updated ([@denivladislav](https://github.com/denivladislav))

#### Authors: 10

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))
-   Кудрявцев Вадим Анатольевич (vanakudryavtsev@sberbank.ru)
-   Кудрявцев Вадим Анатольевич (VAnaKudryavtsev@sberbank.ru)

---

# v0.109.1 (Fri Aug 30 2024)

#### 🐛 Bug Fix

-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.109.0 (Wed Aug 28 2024)

### Release Notes

#### Release by 28.08.2024 ([#1403](https://github.com/salute-developers/plasma/pull/1403))

## Components

### Slider

-   удалена лишняя зависимость `ref.current` в hooks
-   исправлена документация в `plasma-web`
-   для `plasma-new-hope` и `sdds-dfa` добавлены недостающие файлы документации

plasma-{new-hope, web}, sdds-dfa: removed redundant dependencies from `Slider` hooks; docs fixed (https://github.com/salute-developers/plasma/pull/1386)

### TextField

-   добавлен размер `xs` в `plasma-web`

plasma-web: size `xs` added to `TextField` (https://github.com/salute-developers/plasma/pull/1395)

### SDDS-CS

-   изменены конфигурации компонентов для `sdds-cs`

### Radiobox/Checkbox

-   добавлен фон через токены для `trigger`

### Button

-   добавлен отдельный фон через токены в состоянии `loading`

sdds-cs: Edit components config (https://github.com/salute-developers/plasma/pull/1368)

## Icons

### Disclosure group

-   обновлен набор для `Disclosure`

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

-   исправлены опечатки в `tokens` для `theme`: `plasma_web`, `sdds_dfa`, `sdds_serv`

fix(plasma-tokens): Fix tokens misprint in themes (https://github.com/salute-developers/plasma/pull/1402)

### Theme-Builder

-   исправлена обработка свойств `opened` для модальных окон
-   исправлено отображение полей для ввода в модальном окне редактирования token
-   исправлена генерация токенов `active` и `hover` состояний при изменении отключении / включении token

fix(plasma-theme-builder): Fix bugs in Theme Builder (https://github.com/salute-developers/plasma/pull/1397)

## Infra

### Plasma-B2C

-   поднята документацию для пакета `plasma-b2c`

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

-   Release by 28.08.2024 [#1403](https://github.com/salute-developers/plasma/pull/1403) ([@Yakutoc](https://github.com/Yakutoc) [@simashova](https://github.com/simashova) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@denivladislav](https://github.com/denivladislav) [@iljs](https://github.com/iljs))
-   feat(\*): add custom background trigger for checkbox and rasiobox ([@iljs](https://github.com/iljs))
-   feat(\*): add custom loading background to button ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Anastasia Simashova ([@simashova](https://github.com/simashova))
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.104.0 (Thu Aug 22 2024)

### Release Notes

#### Release by 21.08.2024 ([#1382](https://github.com/salute-developers/plasma/pull/1382))

## Components

### Autocomplete

-   добавлено свойство `portal`
-   обновлена документация

plasma-new-hope: add portal prop to Autocomplete (https://github.com/salute-developers/plasma/pull/1347)

### Tabs

-   исправлены типы и описание компонента для корректной генерации документации
-   добавлены недостающие примеры в документацию `sdds-cs`

fix(plasma-\*): Tabs types and documentation (https://github.com/salute-developers/plasma/pull/1362)

### Props `isOpen`/`isVisible` to `opened`

-   публичные свойства `opened`/`isVisible` помечаны как `deprecated`
-   изменены `types` , от которых зависят дочерние компоненты

plasma-\*: Deprecate isOpen/isVisible public props, change to opened (https://github.com/salute-developers/plasma/pull/1335)

### Textfield

-   исправлено "дергание" `label` в `inner` режиме

fix(new-hope): Textfield label bug (https://github.com/salute-developers/plasma/pull/1359)

### Radiobox

-   добавлены параметры `view` для примеров в storybook в `plasma-b2c`

plasma-b2c: Add view props into radiobox stories (https://github.com/salute-developers/plasma/pull/1358)

### Select

-   компоненты `SelectNew` и `Select` объединены в `Select`. `SelectNew` больше не существует.
-   исправлен баг в `Autocomplete`, связанный с очисткой внешнего значения в `contolled`-варианте

feat: Getting rid of SelectNew in web/b2c (https://github.com/salute-developers/plasma/pull/1349)

### Popup

-   исправлена логика регистрации `popups`

plasma-\*: Fix Modal Overlay & Popup registration logic (https://github.com/salute-developers/plasma/pull/1380)

### Modal

-   исправлена логика выставления `overflow-y` для `body`

plasma-\*: Fix `Modal` overflow-y side effect (https://github.com/salute-developers/plasma/pull/1325)

## Icons

### Icons Table

-   добавлен набор иконок `RowHeight`

plasma-icons: Add new icons (https://github.com/salute-developers/plasma/pull/1360)

### Icons DoubleDisclosure

-   добавлены набор иконок `DoubleDisclosure_{Down,Up}`

feat(plasma-icons): Add new icons DoubleDisclosure\_{Down,Up} (https://github.com/salute-developers/plasma/pull/1373)

### Icons SearchForm

-   Исправлено смещение текста при наборе в поиск

plasma-website: fix searchForm input text shifting (https://github.com/salute-developers/plasma/pull/1378)

## Infra

### Packages

-   удалён пакет `@salutejs/plasma-tokens-native`, больше не нужен
-   удалён пакет `@auto-it/upload-assets`, т.к. больше не нужно прикреплять `assets` к релизу или `pull request`

chore: Remove `plasma-tokens-native` package (https://github.com/salute-developers/plasma/pull/1305)

## Tokens

### Генерация старых токенов

-   Добавлены методы генерации старых токенов в библиотеку `core-themes`
-   Добавлены токены со старым неймингом (префиксом `plasma-colors`) в вертикаль `plasma-themes` для тем `plasma-web` и `plasma-b2c`

feat(plasma-themes): Add fallback tokens for `plasma-themes` (https://github.com/salute-developers/plasma/pull/1355)

### Токены высветления

-   Добавлены токены высветления для библиотек `plasma-themes`, `caldera-online-themes`, `sdds-themes`, `flamingo-themes`.

feat(\*-themes): Add brightness tokens to all themes (https://github.com/salute-developers/plasma/pull/1367)

### Tabs, Dropdown, Popover, Switch, TextField

-   заменены токены `plasma-colors`

plasma-{new-hope, b2c, web}: `plasma-colors` tokens changed (https://github.com/salute-developers/plasma/pull/1351)

## Docs

### Enabling themes

-   обновлено описание способов подключения и использования `theme` и токенов для всех поднятых пакетов с документацией, а также в шаблонах.

refator(\*-docs): Update introducing docs (https://github.com/salute-developers/plasma/pull/1356)

### Tabs

-   исправлены типы и описание компонента для корректной генерации документации
-   добавлены недостающие примеры в документацию `sdds-cs`

fix(plasma-\*): Tabs types and documentation (https://github.com/salute-developers/plasma/pull/1362)

## Misc

### Tests

-   изменены тесты plasma-b2c компонентов Button и Range
-   обновлены скриншоты

test(plasma-b2c): update tests and snapshots for Button and Range (https://github.com/salute-developers/plasma/pull/1340)

---

#### 🚀 Enhancement

-   Release by 21.08.2024 [#1382](https://github.com/salute-developers/plasma/pull/1382) ([@denivladislav](https://github.com/denivladislav) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@neretin-trike](https://github.com/neretin-trike) [@vadim-kudr](https://github.com/vadim-kudr) [@simashova](https://github.com/simashova) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@luizasok](https://github.com/luizasok) VAnaKudryavtsev@sberbank.ru)
-   feat: Deprecate isOpen/isVisible public props, change to opened [#1335](https://github.com/salute-developers/plasma/pull/1335) ([@vadim-kudr](https://github.com/vadim-kudr))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(web, b2c): Select and SelectNew are merged. SelectNew is gone. [#1349](https://github.com/salute-developers/plasma/pull/1349) ([@shuga2704](https://github.com/shuga2704))
-   docs(plasma-{b2c, web}, sdds-\*): api reports regenerated [#1362](https://github.com/salute-developers/plasma/pull/1362) ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-{b2c, web}, sdds-\*): TabsController description fixed ([@denivladislav](https://github.com/denivladislav))
-   fix(sdds-\*): type casting removed ([@denivladislav](https://github.com/denivladislav))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 11

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Anastasia Simashova ([@simashova](https://github.com/simashova))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Luiza_Sok ([@luizasok](https://github.com/luizasok))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))
-   Кудрявцев Вадим Анатольевич (VAnaKudryavtsev@sberbank.ru)

---

# v0.93.0 (Thu Aug 08 2024)

### Release Notes

#### Release by 07.08.2024 ([#1348](https://github.com/salute-developers/plasma/pull/1348))

## Components

### DatePicker

-   добавлена возможность задавать labelPlacement
-   добавлен тест на данное свойство

plasma-\*: add datepicker inner label support (https://github.com/salute-developers/plasma/pull/1327)

### DatePicker

-   добавлена возможность открытия календаря в DatePicker по нажатию Space

plasma-new-hope: add DatePicker open by space (https://github.com/salute-developers/plasma/pull/1326)

### TimePicker

-   добавлена привязка времени к датам
-   добавлена возможность задавать промежуток больший, чем 1 сутки

**Before**
<img src="https://github.com/user-attachments/assets/b867f5d2-2814-433e-ba21-e93aa5fd691f" width="550">

**After**
<img src="https://github.com/user-attachments/assets/3d6e6ac5-d5e6-4adb-b985-9606a31d8335" width="550">

plasma-ui: range timepicker (https://github.com/salute-developers/plasma/pull/1323)

### Components

Добавлена библиотека компонентов `@salutejs/sdds-cs`

feat(package): Add sdds-cs (https://github.com/salute-developers/plasma/pull/1334)

### DatePicker

-   изменен токен default состояния для поля ввода
-   обновлены скриншоты для DatePicker
-   исправлено поведение, связанное с шириной поля ввода
-   добавлена поддержка асинхронной установки defaultDate

**Before**
<img src="https://github.com/user-attachments/assets/a4a4962a-c214-4c07-ba32-d7a80d2f9099">
<img src="https://github.com/user-attachments/assets/38f4d5be-2519-4777-817e-5ca901724a7f">

**After**
![image](https://github.com/user-attachments/assets/564b6610-2fee-475e-8b5e-af223f11a069)
![image](https://github.com/user-attachments/assets/8ad60d1d-8ed9-405e-89f3-e35934bff1c3)

plasma-\*: fix datepicker focus token (https://github.com/salute-developers/plasma/pull/1332)

### Breadcrumbs

-   добавлен в поставку `plasma-{b2c, web}, sdds-{serv,dfa}`
-   добавлен примеры в storybook и документация

#### Навигация по родительским страницам

<img width="609" src="https://github.com/user-attachments/assets/b35f60a5-0d18-4ea4-9f62-716365079e4f" />

#### Используя `shorter`

<img width="659" src="https://github.com/user-attachments/assets/462f80e8-42a3-4538-b85e-1228a08df58e" />

#### Используя custom элемент

<img width="596" src="https://github.com/user-attachments/assets/3d780e04-0419-4bdf-a81b-8b3c2f73c9d9" />

plasma-\*: Add Breadcrumbs (https://github.com/salute-developers/plasma/pull/1310)

### Select

-   Добавлен новый проп renderTarget в компонент Select

RenderTarget in Select (https://github.com/salute-developers/plasma/pull/1328)

### Tokens

-   В пакете `sdds-cs` были изменены конфиги в компонентах: `Accordion`, `Avatar`, `Badge`, `Cell`, `Counter`, `Chip`, `Divider`, `Indicator`
-   В `Accordion` добавлен токен цвета иконки
-   В `plasma-web` добавлены новые view

fix(sdds-serv): Update configs for components in sdds-cs (https://github.com/salute-developers/plasma/pull/1344)

### Tabs

-   при нажатии на таб, который не виден целиком, происходит прокрутка до конца этого таба
-   при нажатии на стрелки влево/вправо происходит прокрутка до следующего таба
-   исправлена ошибка `disabled=true` в конфигурациях
-   исправлены примеры `Storybook`, тесты и документация

plasma-_, sdds-_: redesign Tabs (https://github.com/salute-developers/plasma/pull/1333)

## Docs

### Add docs SDDS CS

-   добавлена документация для пакета `sdds-cs`

Add docs SDDS CS (https://github.com/salute-developers/plasma/pull/1336)

## Misc

### Docs

-   Поправлено описание подключения темы для `sdds` вертикали

fix(sdds-serv-docs,sdd-dfa-docs): Fix introducing page (https://github.com/salute-developers/plasma/pull/1338)

### Fix useFocusTrap in Modal

-   Теперь фокус при открытии `modal` работает после анимации

Fix useFocusTrap in Modal (https://github.com/salute-developers/plasma/pull/1345)

### Контейнер в NotificationProvider

Добавил `overflow: hidden` на контейнер используемого Popup

fix: fix Notification animation overflow (https://github.com/salute-developers/plasma/pull/1339)

---

#### 🚀 Enhancement

-   Release by 07.08.2024 [#1348](https://github.com/salute-developers/plasma/pull/1348) ([@Yakutoc](https://github.com/Yakutoc) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704) [@vadim-kudr](https://github.com/vadim-kudr) [@denivladislav](https://github.com/denivladislav))
-   feat(sdds-cs/plasma-web): add view for accordion and edit configs sdds-cs ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): added renderTarget prop in Select [#1328](https://github.com/salute-developers/plasma/pull/1328) ([@shuga2704](https://github.com/shuga2704))
-   feat(new-hope/sdds-cs): add to sdds-cs and edits [#1310](https://github.com/salute-developers/plasma/pull/1310) ([@iljs](https://github.com/iljs))
-   feat(\*): add to libs and final edits ([@iljs](https://github.com/iljs))
-   feat(plasma-web/b2c,sdds-serv/dfa): add DatePicker deferred stories [#1332](https://github.com/salute-developers/plasma/pull/1332) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-serv/dfa): update DatePicker focus token ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-serv/dfa): update DatePicker configs & stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-_, sdds-_): stretch turned into conditional control ([@denivladislav](https://github.com/denivladislav))
-   docs(plasma-_, sdds-_): api reports regenerated ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-{b2c, web}, sdds-\*): storybooks and tests updated ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_, sdds-_): configs fixed ([@denivladislav](https://github.com/denivladislav))
-   fix(core): edit focus trap and add animation example to modal [#1345](https://github.com/salute-developers/plasma/pull/1345) ([@iljs](https://github.com/iljs))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.84.0 (Thu Jul 25 2024)

### Release Notes

#### Release by 24.07.2024 ([#1319](https://github.com/salute-developers/plasma/pull/1319))

## Components

### Portal/Popup

-   убрана зависимость от свойства `frame` в элементе `PopupRootContainer`
-   переделан компонент `Portal` из конфигурируемого в обычный функциональный компонент

fix(plasma-new-hope): `Popup` and `Portal` improvements (https://github.com/salute-developers/plasma/pull/1299)

### Chip

-   добавлено новое свойство `hasClear`
-   добавлен тест и обновлена документация

plasma-\*: Add prop `hasClear` for Chip (https://github.com/salute-developers/plasma/pull/1312)

### DatePicker

-   добавлена поддержка выбора кварталов
-   добавлены 4ре варианта работы с календарем (выбор дней, месяцев, календарей, лет)
-   добавлена поддержка кварталов в datepicker
-   добавлена возможность задавать события для каждой календарной сетки
-   добавлена возможность задавать неактивные элементы для каждой календарной сетки

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

plasma-\*: Datepicker improvements (https://github.com/salute-developers/plasma/pull/1302)

### Autocomplete

-   добавлен в поставку во все клиентские библиотеки

feat: Autocomplete (https://github.com/salute-developers/plasma/pull/1292)

### Price, Portal

-   компонент `Price` добавлен в `plasma-new-hope`, портирован в `plasma-{web, b2c}`, `sdds-{serv, dfa}`
-   для `Price` обновлены тесты и документация
-   исправлена ошибка отсутствующего `PropsTable` в документации `Portal`

plasma-\*: add `Price` component (https://github.com/salute-developers/plasma/pull/1307)

### Select

-   добавлен новый компонент с поддержкой вложенных списков
-   поставлен во все клиентские библиотеки

feat: Select (https://github.com/salute-developers/plasma/pull/1233)

### SDDS-SERV

-   добавлены компоненты:
    -   Calendar
    -   Notification
    -   ButtonBase
    -   Skeleton
    -   Accordion

### SDDS-{SERV, DFA}

-   заменены старые токены с префиксом `--plasma-colors...` на корректные.

Sdds-serv & sdds-dfa sync (https://github.com/salute-developers/plasma/pull/1314)

### Accordion

-   добавлен новый view (b2c)
-   добавлена возможность добавить класс в accordionItem
-   исправлена работы disabled
-   добавлен флаг startLeftPosition
-   переделаны новые отступы из нового дизайна

Add functional to accordion (https://github.com/salute-developers/plasma/pull/1301)

### Typography

-   добавлен пропс color
-   в секции plasma-web storybook добавлен color picker

feat: Add color prop in Typography (https://github.com/salute-developers/plasma/pull/1308)

## Tokens

-   Добавлена новая темая `sdds_cs` в библиотеку `@salutejs/sdds-themes` с учётом обновленных токенов типографики.

feat(sdds-themes): Add `sdds_cs` theme (https://github.com/salute-developers/plasma/pull/1309)

## Docs

### AudioPlayer

-   изменен `cdn` в примерах`https://vc-static.sberdevices.ru/smartmarket-video-news/` на `https://cdn1.newsback.sberdevices.ru/p-newsback/`

plasma-{b2c,web}: Fix vc cdn url (https://github.com/salute-developers/plasma/pull/1298)

## Misc

### Tooltip

-   исправлен проброс стилей в Tooltip

plasma-new-hope: forward styles and className to Tooltip root (https://github.com/salute-developers/plasma/pull/1311)

### Textarea

-   исправлена логика при использовании свойства `autoResize` (теперь ширина автоматически растягивается)

Результат с включенным `autoResize` после изменения ширины

**До:**
![](https://github.com/salute-developers/plasma/assets/38344415/70ad8513-353e-477f-a0fe-e4d3ee5cfd55)

**После:**
![](https://github.com/salute-developers/plasma/assets/38344415/84306373-b4fb-4f13-8a77-b2fd05c08721)

plasma-\*: Fix width autoresize prop in textarea (https://github.com/salute-developers/plasma/pull/1297)

---

#### 🚀 Enhancement

-   Release by 24.07.2024 [#1319](https://github.com/salute-developers/plasma/pull/1319) ([@Yeti-or](https://github.com/Yeti-or) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@simashova](https://github.com/simashova) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@shuga2704](https://github.com/shuga2704) [@denivladislav](https://github.com/denivladislav) [@vadim-kudr](https://github.com/vadim-kudr) [@Yakutoc](https://github.com/Yakutoc))
-   feat: Add color prop to Typography, code review fixes [#1308](https://github.com/salute-developers/plasma/pull/1308) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat: Add color prop to Typography, fixes ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(plasma-{new-hope, b2c, web}, sdds-{dfa, serv}): indian rupee added [#1307](https://github.com/salute-developers/plasma/pull/1307) ([@denivladislav](https://github.com/denivladislav))
-   feat(sdds-serv/dfa): update Calendar configs & stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-07-24 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(sdds-dfa, sdds-serv): Sync [#1314](https://github.com/salute-developers/plasma/pull/1314) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope, b2c, web, sdds-serv, sdds-dfa): Select [#1233](https://github.com/salute-developers/plasma/pull/1233) ([@shuga2704](https://github.com/shuga2704))
-   docs(plasma-{new-hope, web}, sdds-{serv, dfa}): api reports regenerated ([@denivladislav](https://github.com/denivladislav))
-   feat(sdds-{serv, dfa}): Price component ported ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope, web, b2c, sdds-serv, sdds-dfa): Autocomplete [#1292](https://github.com/salute-developers/plasma/pull/1292) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-web/b2c,sdds-serv/dfa): update DatePicker configs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-web/b2c,sdds-serv/dfa): add hasClear prop to Chip stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(sdds-_,plasma-_,caldera-online): Update `Portal` component usage [#1299](https://github.com/salute-developers/plasma/pull/1299) ([@neretin-trike](https://github.com/neretin-trike))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Anastasia Simashova ([@simashova](https://github.com/simashova))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.77.0 (Thu Jul 11 2024)

### Release Notes

#### Release by 11.07.2024 ([#1296](https://github.com/salute-developers/plasma/pull/1296))

## Components

### DatePicker

-   добавлен новый компонент DatePicker
-   написаны тесты и документация
-   проведен рефакторинг стилей и токенов календаря
-   исправлен отступ от первой иконки в Range

feat(plasma-new-hope): add DatePicker component (https://github.com/salute-developers/plasma/pull/1224)

### Portal

-   компонент добавлен в `plasma-new-hope`, портирован в `plasma-{web, b2c}`, `caldera`, `sdds`
-   добавлены тесты и документация
-   компонент внедрён в `Popover` и `Popup`
-   исправлено имя теста для `Popover`

plasma-\*: Add `Portal` component (https://github.com/salute-developers/plasma/pull/1272)

### Sheet

-   убран из примеров в `stories` лишний горизонтальный скролл
-   добавлена недостающая документация в `caldera-online`

**Before**:

<img width="1726" alt="scrollBefore" src="https://github.com/salute-developers/plasma/assets/71961494/f37919f8-df31-427e-aff9-34228cb920b6" />

**After**:

<img width="1725" alt="scrollAfter" src="https://github.com/salute-developers/plasma/assets/71961494/6c3ae1df-e3cc-42d0-ae54-6b11fba55690" />

plasma-\*: Fix `Sheet` scroll (https://github.com/salute-developers/plasma/pull/1273)

### Dropdown

-   добавлено новое свойство `portal`

feat(plasma-new-hope): Added prop portal into Dropdown component (https://github.com/salute-developers/plasma/pull/1260)

### SDDS DFA

-   добавлена тема `sdds_dfa` в библиотеку вертикалей `@salutejs/sdds-themes`
-   добавлена библиотека `@salutejs/sdds-dfa`
-   поправлены компоненты `Header`, `Skeleton`, `Accordion`

feat(sdds-dfa): Add `sdds-dfa` components library (https://github.com/salute-developers/plasma/pull/1293)

### SDDS-SERV

-   добавлена поддержка пакета `@emotion`

sdds-serv: Add support `@emotion` package (https://github.com/salute-developers/plasma/pull/1281)

## Icons

### Website: Icons page

-   новый UI для блока поиск
-   исправлен вывод набора иконок
-   исправлено `isDeprecate` на `isDeprecated`

plasma-website: New UI search block (https://github.com/salute-developers/plasma/pull/1270)

### iOS

-   исправлена генерация иконок под iOS

**Before:**

<img width="248" src="https://github.com/salute-developers/plasma/assets/2895992/e93abb36-8a51-4451-aab3-3107959a8904" />

**After:**

<img width="248" src="https://github.com/salute-developers/plasma/assets/2895992/8415a3b2-3f6e-46fb-9a3e-767f0317aa30" />

plasma-icons: Rewrite generate icons for iOS (https://github.com/salute-developers/plasma/pull/1283)

### Opacity

-   удалено **ненужное** свойство `opacity` в наборе старых иконок

plasma-icons: Delete unnecessary prop opacity (https://github.com/salute-developers/plasma/pull/1282)

## Infra

### Required checks

-   реорганизовали обязательные проверки (стало меньше и быстрее)

plasma-infra: Simplify required checks (https://github.com/salute-developers/plasma/pull/1278)

### Scaffold

-   скрипт для генерации компонентов вынесен в отдельную команду

plasma-infra(scaffold): Extend script for update/sync component list (https://github.com/salute-developers/plasma/pull/1275)

### Support emotion engine

-   добавлена поддержка пакета `@emotion` для библиотеки `plasma-new-hope`

feat(plasma-new-hope): add emotion support (https://github.com/salute-developers/plasma/pull/1276)

## Tokens

-   добавлены методы генерации токенов для web приложений на основе новой json структуры.
-   перегенированы темы для всех вертикалей: `sdds`, `plasma`, `flamingo` и `caldera-online` на основе json файлов из [данного репозитория](https://github.com/salute-developers/theme-converter/tree/main/themes).
-   удалены старые json темы из пакета `@salutejs/data-themes`.
-   переименован пакет `@salutejs/data-themes` в `@salutejs/core-themes` и обновлены все зависимости

feat(data-themes): Add new token generators for web via new json scheme and update themes (https://github.com/salute-developers/plasma/pull/1274)

## Docs

### Storybook link

-   убрана ссылка/кнопка на storybook из документации для `plasma-{web,ui}`

**Before:**

<img width="1944" src="https://github.com/salute-developers/plasma/assets/2895992/458182dc-07eb-4954-9b06-a2f0eabc867f" />

**After:**

<img width="1944" src="https://github.com/salute-developers/plasma/assets/2895992/ea812456-7644-4194-8188-88a085b416f6" />

plasma-docs: hide short links for storybook (https://github.com/salute-developers/plasma/pull/1286)

### SDDS-DFA/SERVE

-   добавлен шаблон документации для компонент `Accordion`
-   добавлена документация для пакета `sdds-dfa`
-   исправлена документация для `Popover`

feat: Add `sdds-dfa-docs` (https://github.com/salute-developers/plasma/pull/1295)

## Misc

### TextField

-   добавлены токены цвета и размера textBefore/After
-   исправлен line-height у иконок

feat: add textfield textBefore/After tokens (https://github.com/salute-developers/plasma/pull/1253)

### Website: colors palette

-   добавлена страница с цветовой палитрой

**Страница выбора цвета**

![Выбор цвета](https://github.com/salute-developers/plasma/assets/38344415/6527ea89-7727-4a4e-b435-35436e74b788)

**Страница выбора оттенка**

![Выбор оттенка](https://github.com/salute-developers/plasma/assets/38344415/632a842e-4922-42a4-bfe7-79081f6ea2e0)

plasma-website: add page colors (https://github.com/salute-developers/plasma/pull/1266)

---

#### 🚀 Enhancement

-   Release by 11.07.2024 [#1296](https://github.com/salute-developers/plasma/pull/1296) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@denivladislav](https://github.com/denivladislav) [@Yeti-or](https://github.com/Yeti-or) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike) [@iljs](https://github.com/iljs))
-   feat(sdds-dfa): Add `sdds-dfa` components library ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(sdds-\*): update api report [#1295](https://github.com/salute-developers/plasma/pull/1295) ([@Yakutoc](https://github.com/Yakutoc))
-   fix(sdds-\*): use `styled-components@5.3.1` ([@Yakutoc](https://github.com/Yakutoc))
-   fix(sdds-serv,sdds-dfa): Update configs for `Combobox` and `TextField` components ([@neretin-trike](https://github.com/neretin-trike))
-   feat(sdds-serv,sdds-dfa): Remove `Header` and old `Select` components ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 8

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))
