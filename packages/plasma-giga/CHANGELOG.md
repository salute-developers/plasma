# 0.216.0 (26 декабря 2024)

## Функциональные изменения в компонентах

### Counter

* изменили минимальное значение с 1 на 0

[PR](https://github.com/salute-developers/plasma/pull/1640)

### Select, Autocomplete, Combobox

* добавлены свойства beforeList и afterList, которые служат ячейками для content в выпадающем списке;

[PR](https://github.com/salute-developers/plasma/pull/1645)

### TextArea

* изменен тип свойства `rightHelper` на `ReactNode`

[PR](https://github.com/salute-developers/plasma/pull/1642)

### Select

* добавлена поддержка `react-hook-form`

[PR](https://github.com/salute-developers/plasma/pull/1639)

### Tokens

* Добавлена генерация `spacing` токенов

[PR](https://github.com/salute-developers/plasma/pull/1654)

### TS

* обновлена, глобально, версия TS с 4.2.4 до 4.5.5

[PR](https://github.com/salute-developers/plasma/pull/1641)

### Attach

* добавлено свойство `helperText`
* добавлен `helperTextView` со значениями `default` и `negative`

<img width="1107" alt="helperTextView" src="https://github.com/user-attachments/assets/9a47e731-ee63-46e7-8f57-890cea762082" />

[PR](https://github.com/salute-developers/plasma/pull/1656)

### Notification

* исправлена типизация компонента (убран принудительный кастинг)

[PR](https://github.com/salute-developers/plasma/pull/1664)

### Button, ButtonGroup, IconButton

* Добавлен размер `xl` во все вертикали

[PR](https://github.com/salute-developers/plasma/pull/1624)

### TextField

* исправлено поведение свойства `textAfter`, теперь позиция всегда рядом с текстом input

[PR](https://github.com/salute-developers/plasma/pull/1611)

### Textarea

* актуализированы примеры в storybook в соответствии с дизайном

* исправлена работа `placeholder` при работе `react-hook-form` с defaultValues

[PR](https://github.com/salute-developers/plasma/pull/1649)

### Breadcrumbs, Calendar, Combobox, Dropdown, Select, Slider

* исправлены циклические зависимости

[PR](https://github.com/salute-developers/plasma/pull/1666)

### Popover

* в target можно передать ref на элемент, рядом с которым произойдет открытие

[PR](https://github.com/salute-developers/plasma/pull/1647)

### Dropdown

* свойство `hasArrow` помечено как `deprecated`

* актуализированы примеры в `storybook`

[PR](https://github.com/salute-developers/plasma/pull/1669)

* добавлена новые токены для возможности управления расстоянием между контентом Item и иконкой DisclosureRight
* добавлен новый токен, отвечающий за скейлинг иконки DisclosureRight в зависимости от размера компонента
* исправлены стили скруглений и отступтов, теперь они рассчитываются по формуле, также как и в компоненет `Select`

[PR](https://github.com/salute-developers/plasma/pull/1650)

### Tree

* добавлен новый компонент (многоуровневый раскрывающийся список в виде дерева);

[PR](https://github.com/salute-developers/plasma/pull/1603)

### TextArea, TextField

* свойства required попадает в `DOM` на соотвествующие элементы

[PR](https://github.com/salute-developers/plasma/pull/1670)

* закрытие выпадающего списка теперь возможно по повторному нажатию на таргет;

[PR](https://github.com/salute-developers/plasma/pull/1676)

## Изменения в библиотеки

* Добавлены `spacing` токены

[PR](https://github.com/salute-developers/plasma/pull/1654)

### FontSize, LineHeight

* изменен `TextL` для `LargeScreen` на **20/28**

* изменен `TextM` для `LargeScreen` на **16/22**

* изменен `TextM` для `MediumScreen` на **16/22**

* изменен `TextM` для `SmallScreen` на **16/22**

[PR](https://github.com/salute-developers/plasma/pull/1665)

### Package

* добавлена новая вертикаль

### Button, ButtonGroup

* изменено скругление кнопок по умолчанию

[PR](https://github.com/salute-developers/plasma/pull/1652)

### Docs

* поднята документация к пакету - [ссылка](https://plasma.sberdevices.ru/giga/)

[PR](https://github.com/salute-developers/plasma/pull/1667)


