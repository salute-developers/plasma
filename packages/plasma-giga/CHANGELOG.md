## 0.228.0 (23 января 2025)

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

### Portal

-   добавлено примечание о том что используются только в сборке `styled-components`

[PR](https://github.com/salute-developers/plasma/pull/1677)

## 0.216.0 (26 декабря 2024)

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

### FontSize, LineHeight

-   изменен `TextL` для `LargeScreen` на **20/28**

-   изменен `TextM` для `LargeScreen` на **16/22**

-   изменен `TextM` для `MediumScreen` на **16/22**

-   изменен `TextM` для `SmallScreen` на **16/22**

[PR](https://github.com/salute-developers/plasma/pull/1665)

### Package

-   добавлена новая вертикаль

### Button, ButtonGroup

-   изменено скругление кнопок по умолчанию

[PR](https://github.com/salute-developers/plasma/pull/1652)

### Docs

-   поднята документация к пакету - [ссылка](https://plasma.sberdevices.ru/giga/)

[PR](https://github.com/salute-developers/plasma/pull/1667)
