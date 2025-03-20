## 0.293.0 (20 марта 2025)

## Функциональные изменения в компонентах

### Button

* исправлены токены для `hover`,  `active`

[PR](https://github.com/salute-developers/plasma/pull/1809)

### IconButton

* исправлены токены для `hover`,  `active`

[PR](https://github.com/salute-developers/plasma/pull/1809)

### Calendar

* добавлены переводы для aria-label на `eng`

[PR](https://github.com/salute-developers/plasma/pull/1829)

### Dropdown

* добавлено **новое** свойство `openByRightClick` для открытия по правому клику мыши

[PR](https://github.com/salute-developers/plasma/pull/1791)

* добавлено свойство `listMaxHeight`
* свойство `listHeight` теперь deprecated

[PR](https://github.com/salute-developers/plasma/pull/1835)

### TextField

* добавлено **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

### TextArea

* добавлено  **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

### Range

* добавлено  **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

### DatePicker

* добавлено  **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

### Select

* добавлено  **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

* добавлена документация по использованию `react-hook-form` с помощью `Controller`

[PR](https://github.com/salute-developers/plasma/pull/1813)

* расширено свойство `onChange?: (value: string[], item: T | null)`

[PR](https://github.com/salute-developers/plasma/pull/1831)

* расширили свойство `renderTarget?: (value: K[], opened?: boolean)`

[PR](https://github.com/salute-developers/plasma/pull/1846)

* добавлено свойство `listMaxHeight`
* свойство `listHeight` теперь deprecated
* добавлено свойство `onScroll` для возможности бесконечной подгрузки
* добавлено свойство `onToggle`

[PR](https://github.com/salute-developers/plasma/pull/1835)

* добавлено состояние `readOnly`
* исправлен UI для состояния disabled

[PR](https://github.com/salute-developers/plasma/pull/1859)

### Switch

* добавлен новый токен, для изменения кол-ва строк в `description`

[PR](https://github.com/salute-developers/plasma/pull/1819)

### Notification

* добавлены новые значения для `NotificationPlacement`. `top`, `center`, `left`, `bottom`, `right` и производные комбинации.

[PR](https://github.com/salute-developers/plasma/pull/1832)

### Combobox

* добавлена документация по использованию `react-hook-form` с помощью `Controller`

[PR](https://github.com/salute-developers/plasma/pull/1813)

* расширено свойство `onChange?: (value: string[], item: T | null)`

[PR](https://github.com/salute-developers/plasma/pull/1831)

* добавлено **новое** свойство `emptyStateDescription `

[PR](https://github.com/salute-developers/plasma/pull/1844)

* добавлено свойство `listMaxHeight`
* свойство `listHeight` теперь deprecated
* добавлено св-во `onScroll` для возможности бесконечной подгрузки
* добавлено св-во `onToggle`

[PR](https://github.com/salute-developers/plasma/pull/1835)

* исправлен баг с позиционированием выпадающего списка при динамическом изменении его высоты

[PR](https://github.com/salute-developers/plasma/pull/1858)

### Checkbox

* исправлено поведение в `controlled` при состоянии `indeterminate`

[PR](https://github.com/salute-developers/plasma/pull/1837)

### LinkButton

* добавлен новый компонент LinkButton

<img width="201" src="https://github.com/user-attachments/assets/dec05088-3ccf-44c2-aeec-ea124af27369" />

<img width="197" src="https://github.com/user-attachments/assets/94f83864-ac3a-4591-aa78-5f4c3676cbfb" />

[PR](https://github.com/salute-developers/plasma/pull/1830)

### NumberFormat

* добавлен компонент для ввода чисел с форматированием

<img width="494" src="https://github.com/user-attachments/assets/16c78262-5bc8-4e69-a682-1c4d1e04b1e3" />

[PR](https://github.com/salute-developers/plasma/pull/1834)

### Tree

* добавлена возможность использовать компонент в `controlled-варианте`

[PR](https://github.com/salute-developers/plasma/pull/1824)

### Textfield

* исправлен баг в режиме `readOnly`;

[PR](https://github.com/salute-developers/plasma/pull/1838)

### Cell

* изменен `gap` между элементами в размерах `xs` и `m`

[PR](https://github.com/salute-developers/plasma/pull/1850)

### Pagination

* добавлено новое свойство `onChange?: (page?: number, perpage?: number)`

[PR](https://github.com/salute-developers/plasma/pull/1836)

### Autocomplete

* исправлен баг с позиционированием выпадающего списка при динамическом изменении его высоты;

[PR](https://github.com/salute-developers/plasma/pull/1858)

### Calendar, DatePicker

* добавлено свойство `renderFromDate`, для регулирования даты отрисовки календарной сетки

[PR](https://github.com/salute-developers/plasma/pull/1848)

### Card

* добавлен новый компонент Card

<img width="354" src="https://github.com/user-attachments/assets/d1e4f778-6462-4444-835d-48d66b3e1b52" />

[PR](https://github.com/salute-developers/plasma/pull/1806)

## Изменения в библиотеки

### Button

* Добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1843)

### ButtonGroup

* Добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1843)

### IconButton

* Добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1843)

### Form

* исправлена работа документации в разделе `Формы`

[PR](https://github.com/salute-developers/plasma/pull/1813)


## 0.274.0 (6 марта 2025)

## Функциональные изменения в компонентах

### Notification

* добавлен логика для переопределения color: `title`, `icon`, `content`

[PR](https://github.com/salute-developers/plasma/pull/1778)

### Tabs

* при программном выборе таба происходит скролл к выбранному табу

[PR](https://github.com/salute-developers/plasma/pull/1780)

### Autocomplete

* переведен на **новую** архитектуру с использованием `@floating-ui`

[PR](https://github.com/salute-developers/plasma/pull/1794)

### Calendar

* Добавлены новые токены цвета текста при `disabled`

### Datepicker

* Добавлены новые токены цвета текста при `disabled`

[PR](https://github.com/salute-developers/plasma/pull/1785)

### Select

* добавлена опциональная виртуализация в выпадающий список;

[PR](https://github.com/salute-developers/plasma/pull/1797)

### Tree

* добавлен пропс `renderTitle`;

[PR](https://github.com/salute-developers/plasma/pull/1799)

* добавлен явный экспорт типов;

[PR](https://github.com/salute-developers/plasma/pull/1798)

### createApplyPaperMixin

* Добавлен билдер миксина `applyPaper`

### Dropzone

* изменен `type` на ReactNode для свойств `title`, `description`

[PR](https://github.com/salute-developers/plasma/pull/1801)

### Segment

* добавлено свойство `singleSelectedRequired`, которое делает один сегмент обязательно активным

- добавлен `view=accent` для SegmentItem

[PR](https://github.com/salute-developers/plasma/pull/1793)

* добавлена опциональная виртуализация в выпадающий список;

[PR](https://github.com/salute-developers/plasma/pull/1817)

### Dropdown

* добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1803)

* добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1802)

### Checkbox

* добавлен токен `labelColor`

### TextField, TextArea, Range

* обновлено отображение readOnly

[PR](https://github.com/salute-developers/plasma/pull/1770)

## Изменения в библиотеки

### applyPaper

* Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы plasma\_giga:
  * backgroundColor - отвечает за цвет подложки в котором можно выбрать токены цветов и градиентов;
  * borderRadius - отвечает за скругление углов блока;
  * shadow - отвечает за применение стилей теней для блока;
  * styles - отвечает за все доступные css свойства.

Например:

```ts
        <div
            style={applyPaper({
                backgroundColor: surfaceAccent,
                borderRadius: borderRadiusM,
                shadow: shadowDownHardM,
                styles: {
                    color: white,
                    width: 10rem,
                    height: 10rem,
                },
            })}
        >
            Test card
        </div>
```

[PR](https://github.com/salute-developers/plasma/pull/1784)


## 0.256.0 (20 февраля 2025)

## Функциональные изменения в компонентах

### Calendar

* исправлен выбор месяца на двойном календаре

[PR](https://github.com/salute-developers/plasma/pull/1756)

### Accordion

* изменен тег в `AccrodionItem` с `button` на `div`

[PR](https://github.com/salute-developers/plasma/pull/1758)

### Combobox

* добавлена опциональная виртуализация в выпадающий список

[PR](https://github.com/salute-developers/plasma/pull/1761)

### Popover

* добавлен токен `box-shadow`

* исправлены примеры в `storybooks` для корректной демонстрации

[PR](https://github.com/salute-developers/plasma/pull/1767)

### Drawer

* добавлена возможность задавать цвет фона панели

[PR](https://github.com/salute-developers/plasma/pull/1760)

### Checkbox

* актуализированы `view` согласно макетам

[PR](https://github.com/salute-developers/plasma/pull/1762)

### Radiobox

* актуализированы `view` согласно макетам

[PR](https://github.com/salute-developers/plasma/pull/1763)

* исправлена ошибка при работе с `react-hook-form`, если не указано изначальное значение

[PR](https://github.com/salute-developers/plasma/pull/1777)

### Select

* исправлена ошибка при работе с `react-hook-form`, если не указано изначальное значение

[PR](https://github.com/salute-developers/plasma/pull/1777)

### Textarea

* добавлен **новый** размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1759)

* исправлена работа `end` и `start` при `target` меньше чем `32px`

[PR](https://github.com/salute-developers/plasma/pull/1775)

### Select, Combobox

* исправлен баг, связанный с возможностью выбирать `disabled` item через его родителя;

[PR](https://github.com/salute-developers/plasma/pull/1766)

### Steps

* исправлен `background`, `cursor`

[PR](https://github.com/salute-developers/plasma/pull/1776)

### Calendar, DatePicker

* исправлена логика отрисовки календарных сеток "месяц", "квартал", "год" для минимальной и максимальной дат

**Before**:

https://github.com/user-attachments/assets/18943dab-5a6d-4e0f-945b-2aef7c815b23

**After**:

https://github.com/user-attachments/assets/1725f4c3-3db7-469a-b0d6-c1f5e275623f

[PR](https://github.com/salute-developers/plasma/pull/1757)

* добавлено св-во `onChangeValue` для отслеживания изменений значения в строке поиска.

[PR](https://github.com/salute-developers/plasma/pull/1782)

### Checkbox, Radiobox

* добавлен корректный отступ для `trigger icon`

[PR](https://github.com/salute-developers/plasma/pull/1781)


## 0.241.0 (6 февраля 2025)

## Функциональные изменения в компонентах

### Accordion

* добавлены **новые** размеры с `h2` по `h5`

[PR](https://github.com/salute-developers/plasma/pull/1724)

### Toast

Убрана очистка таймаута в ToastContorller

[PR](https://github.com/salute-developers/plasma/pull/1712)

* исправлена передача свойства `closeIconType`
* добавлено **новое** свойство `textColor`
* добавлены новые значения для `view`:`positive`, `negative`
* значения `view`:`dark`,`light` помечены как `deprecated`

[PR](https://github.com/salute-developers/plasma/pull/1719)

### Portal

* исправлена ошибка гидрации в Next

### Autocomplete

* исправлена ширина компонента в storybook

[PR](https://github.com/salute-developers/plasma/pull/1730)

### DatePicker

* добавлена возможность передавать внешнее значение даты в DatePicker

https://github.com/user-attachments/assets/b26c67c2-1255-4831-b44e-0e876103153d

[PR](https://github.com/salute-developers/plasma/pull/1720)

### Range

* добавлена возможность задать цвет `helperText` при статусе `error` и `success`

### Datepicker

* добавлена возможность задать цвет `helperText` при статусе `error` и `success`

[PR](https://github.com/salute-developers/plasma/pull/1727)

### Popover

* Добавлен пропс `animated`, который делает плавное появления `Popover` за 200мс

### Tooltip

* Исправлена работа свойства `animated`, путем наследования этого свойства из `Popover`

[PR](https://github.com/salute-developers/plasma/pull/1739)

### Dropdown

* добавлен явный экспорт типов;

### Select

* добавлен явный экспорт типов;

[PR](https://github.com/salute-developers/plasma/pull/1732)

### Textfield

* исправлен баг, связанный с пропсом required в режиме с чипами;

[PR](https://github.com/salute-developers/plasma/pull/1738)

### TextArea

* Hint остается активным при disabled состоянии

<img width="417" alt="image" src="https://github.com/user-attachments/assets/6fe979b2-3532-46d7-9fa3-a8b141ad73fb" />

[PR](https://github.com/salute-developers/plasma/pull/1700)

* добавлен раздел в документацию по работе с NextJs

[PR](https://github.com/salute-developers/plasma/pull/1740)

## Изменения в библиотеки

* В документацию добавлено предупреждение о том, что `view`:`dark` и `light` устарели; добавлен пример того, как переключать темы при помощи `ViewContainer`
* В документацию добавлен пример для `view`:`positive`, `negative` с иконкой `color=inherit`

[PR](https://github.com/salute-developers/plasma/pull/1719)


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
