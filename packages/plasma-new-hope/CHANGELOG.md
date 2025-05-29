## 0.325.0 (29 мая 2025)

## Функциональные изменения в компонентах

### TextField

* добавлен **новый** размер `XL`

<img width="1024" src="https://github.com/user-attachments/assets/4fc66785-2c3c-4352-bbb8-7b1dc23c6390" />

[PR](https://github.com/salute-developers/plasma/pull/1715)

### Mask

* добавили обработку, если не задан параметр mask, то возвращается обычный `TextField`

[PR](https://github.com/salute-developers/plasma/pull/1964)

### Slider

* убрали наслоение контейнера для шкалы минимум/максимум с текущим значением бегунка

![Kapture 2025-05-29 at 12 40 21](https://github.com/user-attachments/assets/db518bf3-d9c8-43a0-b718-dcd58e429cd6)

[PR](https://github.com/salute-developers/plasma/pull/1978)

### Link

* изменена поставка компонента ( добавлены файлы `types`, `tokens` )

[PR](https://github.com/salute-developers/plasma/pull/1966)

### Progress

* добавлен новый `view` - `info`

<img width="1024" src="https://github.com/user-attachments/assets/1fcad509-3a21-4a78-8162-2c4e32ebe9f6" />

[PR](https://github.com/salute-developers/plasma/pull/1975)

### Autocomplete, Combobox

* улучшено поведение виртуализированного списка при динамическом изменении высоты оного;

![Kapture 2025-05-29 at 14 52 03](https://github.com/user-attachments/assets/0df860d6-f2e6-4c6e-a220-6b3496e83a0f)

[PR](https://github.com/salute-developers/plasma/pull/1968)

### Note

* добавлен возможность закрыть компонент, через свойство `hasClose` и `onCloseButtonClick`

![Kapture 2025-05-29 at 13 15 39](https://github.com/user-attachments/assets/babc7f1d-ba21-4868-a7f1-635055928dd5)

[PR](https://github.com/salute-developers/plasma/pull/1962)

### Calendar

* исправлен метод получения модификации даты: учитывается свойство `includeEdgeDates`

[PR](https://github.com/salute-developers/plasma/pull/1984)

* добавлена возможность растягивать на всю доступную ширину и высоту

![Kapture 2025-05-29 at 15 01 01](https://github.com/user-attachments/assets/188619f1-7bad-4e6a-812b-2a46c22439f0)

[PR](https://github.com/salute-developers/plasma/pull/1972)

### DatePicker

* добавлена возможность управлять размером выпадающего календаря

* добавлена возможность растягивать поле ввода на всю доступную ширину

[PR](https://github.com/salute-developers/plasma/pull/1972)

### Icons

* добавлены новые иконки:
  * ArrowBack
  * FloorTypeFill
  * FloorTypeOutline
  * SensorFill
  * SensorOutline
  * FlashlightOutline
  * DocumentExportFill
  * DocumentExportOutline
  * DocumentImportFill
  * DocumentImportOutline
  * InternationalTradeOutline
  * SensorTemperatureFill
  * SensorTemperatureOutline

[PR](https://github.com/salute-developers/plasma/pull/1992)

* изменены название иконок с ключевым словом `sber` на `sb` для всех платформ

<img width="768" src="https://github.com/user-attachments/assets/7cd5e024-4586-48e4-bebc-9fa46b760927" />

[PR](https://github.com/salute-developers/plasma/pull/1981)

### CodeField

* добавлен **новый** компонент

![Kapture 2025-05-29 at 13 28 14](https://github.com/user-attachments/assets/1bc20b57-0b4f-4976-adde-35e6ac082a1e)

[PR](https://github.com/salute-developers/plasma/pull/1993)

### Notifications

* добавлена возможность управлять шириной уведомления, через свойство `width` и `maxWidth`

![Kapture 2025-05-29 at 13 43 54](https://github.com/user-attachments/assets/0eae5726-4b23-40ae-9025-2016da019de2)

[PR](https://github.com/salute-developers/plasma/pull/1967)

### List

* переведен на новую архитектуру

<img width="768" src="https://github.com/user-attachments/assets/454586b5-ddc3-4574-b510-8830b65f1618" />

[PR](https://github.com/salute-developers/plasma/pull/1954)


## 0.323.1 (20 мая 2025)

## Функциональные изменения в компонентах

### NumberFormat

-   исправлено использование `ref`

## 0.323.0 (15 мая 2025)

## Функциональные изменения в компонентах

### Dropdown

-   исправлен баг, связанный с возможностью открывать вложенный список с флагом `disabled`;

[PR](https://github.com/salute-developers/plasma/pull/1952)

### Toast

-   добавлена возможность указывать toastDefaultArgs в ToastProvider

[PR](https://github.com/salute-developers/plasma/pull/1956)

### Slider

-   `view` приведены в соответствие с макетами

**After**:

<img width="431" src="https://github.com/user-attachments/assets/c46e8046-783a-4f14-b74f-bcd3fae04a98" />

[PR](https://github.com/salute-developers/plasma/pull/1957)

## 0.322.0 (30 апреля 2025)

## Функциональные изменения в компонентах

### Docs

-   исправлены опечатки и общий шаблон документации

[PR](https://github.com/salute-developers/plasma/pull/1931)

### Textfield

-   добавлен в документацию пример c логикой очистки input

[PR](https://github.com/salute-developers/plasma/pull/1931)

-   исправлен механизм truncate для длинных текстов

<img width="448" src="https://github.com/user-attachments/assets/7a3bb763-dac9-412b-941e-483e26713058" />

[PR](https://github.com/salute-developers/plasma/pull/1937)

### DatePicker

-   исправлено поведение автофокуса на input после ввода дат
-   исправлено поведение, при корректном вводе даты вызывается onCommit
-   расширен интерфейс для payload событий, добавлены поддержка ISO формат и объект с датами
-   расширен тип value до string

[PR](https://github.com/salute-developers/plasma/pull/1939)

### Tabs

-   добавлен токен для регулирования свойства cursor, по-умолчанию `pointer`

[PR](https://github.com/salute-developers/plasma/pull/1943)

### Combobox

-   убрано поведение скролла к инпуту после выбора элемента в режиме `multiple`;

[PR](https://github.com/salute-developers/plasma/pull/1934)

-   актуализирована документация;

-   добавлен явный экспорт типа ComboboxItemOption;

[PR](https://github.com/salute-developers/plasma/pull/1925)

-   исправлен баг, не позволявший вызывать коллбэк `filter` в момент полной очистки инпута;

[PR](https://github.com/salute-developers/plasma/pull/1935)

### Notification

-   добавлен **новый** callback onTimeoutClose, вызывается при автоматическом закрытии по timeout.

[PR](https://github.com/salute-developers/plasma/pull/1938)

### Autocomplete

-   добавлен рендер-пропс `renderItem`;

[PR](https://github.com/salute-developers/plasma/pull/1936)

## 0.321.0 (17 апреля 2025)

## Функциональные изменения в компонентах

### Steps

-   добавлено новое свойство `itemView` <img width="748" src="https://github.com/user-attachments/assets/783c547d-8c68-42f6-a85a-712a9615cd7c" />

-   добавлено `accent` `view` и комбинации с `itemView` <img width="748" src="https://github.com/user-attachments/assets/18f0ecb6-9441-4cf2-ba4a-112e7d6596fd" />

[PR](https://github.com/salute-developers/plasma/pull/1872)

### Cell

-   исправлены опечатки в "color=inherit"

[PR](https://github.com/salute-developers/plasma/pull/1857)

### IconButton

-   исправлены опечатки в "color=inherit"

[PR](https://github.com/salute-developers/plasma/pull/1857)

### Datepicker

-   добавлено возможность прокинуть атрибут `autoComplete`

<img width="1024"  src="https://github.com/user-attachments/assets/3b62560d-0ea0-46d6-a5f5-30653e4a3fa5" />

[PR](https://github.com/salute-developers/plasma/pull/1900)

### Checkbox

-   добавлен новый размер `L`

[PR](https://github.com/salute-developers/plasma/pull/1912)

### Dropdown

-   добавлено индивидуальное свойство `trigger` для каждой группы вложенных списков для кастомной настройки их открытия;

[PR](https://github.com/salute-developers/plasma/pull/1896)

### Tree

-   в документацию добавлен пример с виртуализацией;

[PR](https://github.com/salute-developers/plasma/pull/1914)

-   добавлено свойство `contentRight`;

[PR](https://github.com/salute-developers/plasma/pull/1908)

### Select

-   расширен функционал, позволяющий работать с `value`, которых нет в списке `items`;

[PR](https://github.com/salute-developers/plasma/pull/1894)

-   При нажатии на `helperText` список не раскрывается

[PR](https://github.com/salute-developers/plasma/pull/1913)

### Combobox

-   расширен функционал, позволяющий работать с `value`, которых нет в списке `items`;

[PR](https://github.com/salute-developers/plasma/pull/1894)

-   При нажатии на `helperText` список не раскрывается

[PR](https://github.com/salute-developers/plasma/pull/1913)

### Typography

-   Добавлена поддержка свойства `isNumeric`, которое делает цифры моношоринными

[PR](https://github.com/salute-developers/plasma/pull/1899)

### Radiobox

-   добавлен новый размер `L`

[PR](https://github.com/salute-developers/plasma/pull/1911)

### Autocomplite

-   При нажатии на `helperText` фокус на `textfield` не происходит

[PR](https://github.com/salute-developers/plasma/pull/1913)

### Sheet

-   Добавлен props `handlePlacement`

-   Добавлен пример в `storybook` с полноэкранным `sheet`

[PR](https://github.com/salute-developers/plasma/pull/1892)

## 0.320.0 (3 апреля 2025)

## Функциональные изменения в компонентах

### Range

-   добавлен `hover` для `input` control в компоненте

[PR](https://github.com/salute-developers/plasma/pull/1839)

### Table

-   добавлен новый компонент

[PR](https://github.com/salute-developers/plasma/pull/1867)

### Tokens

-   добавлены stories с выводом числовых токенов `spacing` и `corner radius`

[PR](https://github.com/salute-developers/plasma/pull/1853)

### Button

-   добавлен `margin` при наличии `children` у `contentLeft`

[PR](https://github.com/salute-developers/plasma/pull/1878)

### Textarea

-   исправлен баг при вводе `col` и некорректном отображении `outerLabelWrapper`

[PR](https://github.com/salute-developers/plasma/pull/1854)

### Slider

-   min/max значения внесены внутрь контейнера одиночного слайдера

[PR](https://github.com/salute-developers/plasma/pull/1882)

### Typography

-   Добавлена поддержка свойства `as` для linaria сборки

-   Добавлены свойства `as` и `forwradedAs` на уровне типов

-   Добавлена документация с примером

[PR](https://github.com/salute-developers/plasma/pull/1885)

-   Добавлена поддержка свойства `medium`

[PR](https://github.com/salute-developers/plasma/pull/1886)

-   добавлены stories с выводом токенов типографики

<img width="558" src="https://github.com/user-attachments/assets/edcd8629-6de8-45b5-824a-0f2e8ebbb474" />

[PR](https://github.com/salute-developers/plasma/pull/1863)

### Checkbox

-   Исправлено поведение `checkbox` на нативное в состоянии `indeterminate`

[PR](https://github.com/salute-developers/plasma/pull/1880)

### Plasma-themes

-   Обновлены токены для всех тем этой группы
-   Добавлены токены medium начертаний для типографики во все темы этой группы

### Sdds-themes

-   Обновлены токены для всех тем этой группы
-   Добавлены токены medium начертаний для типографики во все темы этой группы

[PR](https://github.com/salute-developers/plasma/pull/1870)

### Plasma-tokens

-   Обновление theme `plasma_b2c`
-   Обновление theme `sdds_serv`
-   Обновление theme `plasma_giga`
-   Добавлена theme `plasma_giga_app` (дубликат plasma_b2c)
-   Добавлены токены теней для native платформ в themes `plasma_b2c` и `plasma_web`

[PR](https://github.com/salute-developers/plasma/pull/1870)

## 0.310.0 (20 марта 2025)

## Функциональные изменения в компонентах

### Button

-   исправлены токены для `hover`, `active`

[PR](https://github.com/salute-developers/plasma/pull/1809)

### IconButton

-   исправлены токены для `hover`, `active`

[PR](https://github.com/salute-developers/plasma/pull/1809)

### Calendar

-   добавлены переводы для aria-label на `eng`

[PR](https://github.com/salute-developers/plasma/pull/1829)

### Dropdown

-   добавлено **новое** свойство `openByRightClick` для открытия по правому клику мыши

[PR](https://github.com/salute-developers/plasma/pull/1791)

-   добавлено свойство `listMaxHeight`
-   свойство `listHeight` теперь deprecated

[PR](https://github.com/salute-developers/plasma/pull/1835)

### TextField

-   добавлено **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

### TextArea

-   добавлено **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

### Range

-   добавлено **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

### DatePicker

-   добавлено **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

### Select

-   добавлено **новое** свойство `hasRequiredIndicator`, которое регулирует наличие индикатора обязательности поля

[PR](https://github.com/salute-developers/plasma/pull/1826)

-   добавлена документация по использованию `react-hook-form` с помощью `Controller`

[PR](https://github.com/salute-developers/plasma/pull/1813)

-   расширено свойство `onChange?: (value: string[], item: T | null)`

[PR](https://github.com/salute-developers/plasma/pull/1831)

-   расширили свойство `renderTarget?: (value: K[], opened?: boolean)`

[PR](https://github.com/salute-developers/plasma/pull/1846)

-   добавлено свойство `listMaxHeight`
-   свойство `listHeight` теперь deprecated
-   добавлено свойство `onScroll` для возможности бесконечной подгрузки
-   добавлено свойство `onToggle`

[PR](https://github.com/salute-developers/plasma/pull/1835)

-   добавлено состояние `readOnly`
-   исправлен UI для состояния disabled

[PR](https://github.com/salute-developers/plasma/pull/1859)

### Switch

-   добавлен новый токен, для изменения кол-ва строк в `description`

[PR](https://github.com/salute-developers/plasma/pull/1819)

### Notification

-   добавлены новые значения для `NotificationPlacement`. `top`, `center`, `left`, `bottom`, `right` и производные комбинации.

[PR](https://github.com/salute-developers/plasma/pull/1832)

### Combobox

-   добавлена документация по использованию `react-hook-form` с помощью `Controller`

[PR](https://github.com/salute-developers/plasma/pull/1813)

-   расширено свойство `onChange?: (value: string[], item: T | null)`

[PR](https://github.com/salute-developers/plasma/pull/1831)

-   добавлено **новое** свойство `emptyStateDescription`

[PR](https://github.com/salute-developers/plasma/pull/1844)

-   добавлено свойство `listMaxHeight`
-   свойство `listHeight` теперь deprecated
-   добавлено св-во `onScroll` для возможности бесконечной подгрузки
-   добавлено св-во `onToggle`

[PR](https://github.com/salute-developers/plasma/pull/1835)

-   исправлен баг с позиционированием выпадающего списка при динамическом изменении его высоты

[PR](https://github.com/salute-developers/plasma/pull/1858)

### Checkbox

-   исправлено поведение в `controlled` при состоянии `indeterminate`

[PR](https://github.com/salute-developers/plasma/pull/1837)

### LinkButton

-   добавлен новый компонент LinkButton

<img width="201" src="https://github.com/user-attachments/assets/dec05088-3ccf-44c2-aeec-ea124af27369" />

<img width="197" src="https://github.com/user-attachments/assets/94f83864-ac3a-4591-aa78-5f4c3676cbfb" />

[PR](https://github.com/salute-developers/plasma/pull/1830)

### NumberFormat

-   добавлен компонент для ввода чисел с форматированием

<img width="494" src="https://github.com/user-attachments/assets/16c78262-5bc8-4e69-a682-1c4d1e04b1e3" />

[PR](https://github.com/salute-developers/plasma/pull/1834)

### Tree

-   добавлена возможность использовать компонент в `controlled-варианте`

[PR](https://github.com/salute-developers/plasma/pull/1824)

### Textfield

-   исправлен баг в режиме `readOnly`;

[PR](https://github.com/salute-developers/plasma/pull/1838)

### Cell

-   изменен `gap` между элементами в размерах `xs` и `m`

[PR](https://github.com/salute-developers/plasma/pull/1850)

### Pagination

-   добавлено новое свойство `onChange?: (page?: number, perpage?: number)`

[PR](https://github.com/salute-developers/plasma/pull/1836)

### Autocomplete

-   исправлен баг с позиционированием выпадающего списка при динамическом изменении его высоты;

[PR](https://github.com/salute-developers/plasma/pull/1858)

### Calendar, DatePicker

-   добавлено свойство `renderFromDate`, для регулирования даты отрисовки календарной сетки

[PR](https://github.com/salute-developers/plasma/pull/1848)

### Card

-   добавлен новый компонент Card

<img width="354" src="https://github.com/user-attachments/assets/d1e4f778-6462-4444-835d-48d66b3e1b52" />

[PR](https://github.com/salute-developers/plasma/pull/1806)

## 0.291.0 (6 марта 2025)

## Функциональные изменения в компонентах

### Notification

-   добавлен логика для переопределения color: `title`, `icon`, `content`

[PR](https://github.com/salute-developers/plasma/pull/1778)

### Tabs

-   при программном выборе таба происходит скролл к выбранному табу

[PR](https://github.com/salute-developers/plasma/pull/1780)

### Autocomplete

-   переведен на **новую** архитектуру с использованием `@floating-ui`

[PR](https://github.com/salute-developers/plasma/pull/1794)

### Calendar

-   Добавлены новые токены цвета текста при `disabled`

### Datepicker

-   Добавлены новые токены цвета текста при `disabled`

[PR](https://github.com/salute-developers/plasma/pull/1785)

### Select

-   добавлена опциональная виртуализация в выпадающий список;

[PR](https://github.com/salute-developers/plasma/pull/1797)

### Tree

-   добавлен пропс `renderTitle`;

[PR](https://github.com/salute-developers/plasma/pull/1799)

-   добавлен явный экспорт типов;

[PR](https://github.com/salute-developers/plasma/pull/1798)

### createApplyPaperMixin

-   Добавлен билдер миксина `applyPaper`

### Dropzone

-   изменен `type` на ReactNode для свойств `title`, `description`

[PR](https://github.com/salute-developers/plasma/pull/1801)

### Segment

-   добавлено свойство `singleSelectedRequired`, которое делает один сегмент обязательно активным

*   добавлен `view=accent` для SegmentItem

[PR](https://github.com/salute-developers/plasma/pull/1793)

-   добавлена опциональная виртуализация в выпадающий список;

[PR](https://github.com/salute-developers/plasma/pull/1817)

### Dropdown

-   добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1803)

-   добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1802)

### Checkbox

-   добавлен токен `labelColor`

### TextField, TextArea, Range

-   обновлено отображение readOnly

[PR](https://github.com/salute-developers/plasma/pull/1770)

## 0.275.0 (20 февраля 2025)

## Функциональные изменения в компонентах

### Calendar

-   исправлен выбор месяца на двойном календаре

[PR](https://github.com/salute-developers/plasma/pull/1756)

### Accordion

-   изменен тег в `AccrodionItem` с `button` на `div`

[PR](https://github.com/salute-developers/plasma/pull/1758)

### Combobox

-   добавлена опциональная виртуализация в выпадающий список

[PR](https://github.com/salute-developers/plasma/pull/1761)

### Popover

-   добавлен токен `box-shadow`

-   исправлены примеры в `storybooks` для корректной демонстрации

[PR](https://github.com/salute-developers/plasma/pull/1767)

### Drawer

-   добавлена возможность задавать цвет фона панели

[PR](https://github.com/salute-developers/plasma/pull/1760)

### Checkbox

-   актуализированы `view` согласно макетам

[PR](https://github.com/salute-developers/plasma/pull/1762)

### Radiobox

-   актуализированы `view` согласно макетам

[PR](https://github.com/salute-developers/plasma/pull/1763)

-   исправлена ошибка при работе с `react-hook-form`, если не указано изначальное значение

[PR](https://github.com/salute-developers/plasma/pull/1777)

### Select

-   исправлена ошибка при работе с `react-hook-form`, если не указано изначальное значение

[PR](https://github.com/salute-developers/plasma/pull/1777)

### Textarea

-   добавлен **новый** размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1759)

-   исправлена работа `end` и `start` при `target` меньше чем `32px`

[PR](https://github.com/salute-developers/plasma/pull/1775)

### Select, Combobox

-   исправлен баг, связанный с возможностью выбирать `disabled` item через его родителя;

[PR](https://github.com/salute-developers/plasma/pull/1766)

### Steps

-   исправлен `background`, `cursor`

[PR](https://github.com/salute-developers/plasma/pull/1776)

### Calendar, DatePicker

-   исправлена логика отрисовки календарных сеток "месяц", "квартал", "год" для минимальной и максимальной дат

**Before**:

https://github.com/user-attachments/assets/18943dab-5a6d-4e0f-945b-2aef7c815b23

**After**:

https://github.com/user-attachments/assets/1725f4c3-3db7-469a-b0d6-c1f5e275623f

[PR](https://github.com/salute-developers/plasma/pull/1757)

-   добавлено св-во `onChangeValue` для отслеживания изменений значения в строке поиска.

[PR](https://github.com/salute-developers/plasma/pull/1782)

### Checkbox, Radiobox

-   добавлен корректный отступ для `trigger icon`

[PR](https://github.com/salute-developers/plasma/pull/1781)

## 0.260.0 (6 февраля 2025)

## Функциональные изменения в компонентах

### Accordion

-   добавлены **новые** размеры с `h2` по `h5`

[PR](https://github.com/salute-developers/plasma/pull/1724)

### Toast

Убрана очистка таймаута в ToastContorller

[PR](https://github.com/salute-developers/plasma/pull/1712)

-   исправлена передача свойства `closeIconType`
-   добавлено **новое** свойство `textColor`
-   добавлены новые значения для `view`:`positive`, `negative`
-   значения `view`:`dark`,`light` помечены как `deprecated`

[PR](https://github.com/salute-developers/plasma/pull/1719)

### Portal

-   исправлена ошибка гидрации в Next

### Autocomplete

-   исправлена ширина компонента в storybook

[PR](https://github.com/salute-developers/plasma/pull/1730)

### DatePicker

-   добавлена возможность передавать внешнее значение даты в DatePicker

https://github.com/user-attachments/assets/b26c67c2-1255-4831-b44e-0e876103153d

[PR](https://github.com/salute-developers/plasma/pull/1720)

### Range

-   добавлена возможность задать цвет `helperText` при статусе `error` и `success`

### Datepicker

-   добавлена возможность задать цвет `helperText` при статусе `error` и `success`

[PR](https://github.com/salute-developers/plasma/pull/1727)

### Popover

-   Добавлен пропс `animated`, который делает плавное появления `Popover` за 200мс

### Tooltip

-   Исправлена работа свойства `animated`, путем наследования этого свойства из `Popover`

[PR](https://github.com/salute-developers/plasma/pull/1739)

### Dropdown

-   добавлен явный экспорт типов;

### Select

-   добавлен явный экспорт типов;

[PR](https://github.com/salute-developers/plasma/pull/1732)

### Textfield

-   исправлен баг, связанный с пропсом required в режиме с чипами;

[PR](https://github.com/salute-developers/plasma/pull/1738)

### TextArea

-   Hint остается активным при disabled состоянии

<img width="417" alt="image" src="https://github.com/user-attachments/assets/6fe979b2-3532-46d7-9fa3-a8b141ad73fb" />

[PR](https://github.com/salute-developers/plasma/pull/1700)

-   добавлен раздел в документацию по работе с NextJs

[PR](https://github.com/salute-developers/plasma/pull/1740)

## 0.247.0 (23 января 2025)

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

## 0.235.0 (26 декабря 2024)

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

## 0.220.0 (12 декабря 2024)

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

# v0.205.0 (Thu Nov 28 2024)

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
-   feat(plasma-new-hope): noWrap prop added to Typography ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope): add chipView & chip validation to TextField ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Chip views ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: add hasPlaceholder prop to TextField [#1556](https://github.com/salute-developers/plasma/pull/1556) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(sdds-\*): add Dropzone component [#1534](https://github.com/salute-developers/plasma/pull/1534) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Dropzone component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Dropzone draft ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(new-hope): add react-hook-form support ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): listHeight prop stands for a css maxHeight now [#1585](https://github.com/salute-developers/plasma/pull/1585) ([@shuga2704](https://github.com/shuga2704))
-   feat: add infinite Notification [#1582](https://github.com/salute-developers/plasma/pull/1582) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(plasma-new-hope): add displaying date from min value [#1572](https://github.com/salute-developers/plasma/pull/1572) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(\*): add disabled opacity token in calendar [#1566](https://github.com/salute-developers/plasma/pull/1566) ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): update Badge content slot logic ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Switch outline added ([@denivladislav](https://github.com/denivladislav))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(): fixed typo 'typograpy' -> folder name ([@denivladislav](https://github.com/denivladislav))
-   docs(): Typography docs updated ([@denivladislav](https://github.com/denivladislav))
-   chore(plasma-new-hope): stories in example updated ([@denivladislav](https://github.com/denivladislav))
-   docs: add Chip validation examples docs for TextField ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: update Chip docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_, sdds-_): Position relative is set by default for target in Select, Combobox, Dropdown [#1586](https://github.com/salute-developers/plasma/pull/1586) ([@shuga2704](https://github.com/shuga2704))
-   fix: "RequiredProps" unions in TextField & TextArea [#1593](https://github.com/salute-developers/plasma/pull/1593) ([@vadim-kudr](https://github.com/vadim-kudr))
-   docs: add Dropzone docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix: TextArea auto scroll on focus [#1590](https://github.com/salute-developers/plasma/pull/1590) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(plasma-_, sdds-_): Switch track and thumb tokens improved ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Add chipType prop in Select [#1577](https://github.com/salute-developers/plasma/pull/1577) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add chipType props in TextField ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add required functionality [#1561](https://github.com/salute-developers/plasma/pull/1561) ([@shuga2704](https://github.com/shuga2704))
-   docs: update Badge docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_, sdds-_): Add renderItem prop in Dropdown. Fix issues with Select and Combobox [#1562](https://github.com/salute-developers/plasma/pull/1562) ([@shuga2704](https://github.com/shuga2704))
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

# v0.193.0 (Thu Nov 14 2024)

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
-   feat(plasma-new-hope): Switch toggleSize added ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope): Switch description added ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope): fix TextField hover token ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add alwaysOpened to Dropdown ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add NumberInput component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: add Badge & Tabs truncate props [#1500](https://github.com/salute-developers/plasma/pull/1500) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(plasma-new-hope): add onClickClose for Chip ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add autoComplete prop to Range [#1530](https://github.com/salute-developers/plasma/pull/1530) ([@TitanKuzmich](https://github.com/TitanKuzmich))
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
-   fix(plasma-new-hope): fix default icon size ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_, sdds-_): square control removed from storybooks ([@denivladislav](https://github.com/denivladislav))
-   chore(plasma-new-hope): Button prop square marked as deprecated ([@denivladislav](https://github.com/denivladislav))
-   docs(): Switch docs updated ([@denivladislav](https://github.com/denivladislav))
-   chore(plasma-new-hope): Switch sizes 's', 'l' added ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_, sdds-_): fixed Tabs storybooks ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): Breadcrumbs cursor fixed; Breadcrumb hover and active color fixed ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix autoResize useEffect deps ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-_, sdds-_): TabItemProps and TabsProps exported ([@denivladislav](https://github.com/denivladislav))
-   docs: add NumberInput docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): fix DatePickerRange grid type prop [#1535](https://github.com/salute-developers/plasma/pull/1535) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): Change background-color property to background for `Button` ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-_, sdds-_): Add required functionality in Combobox [#1527](https://github.com/salute-developers/plasma/pull/1527) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add required functionality in Autocomplete [#1522](https://github.com/salute-developers/plasma/pull/1522) ([@shuga2704](https://github.com/shuga2704))
-   fix(sdds-cs): update configs datepicker ([@iljs](https://github.com/iljs))
-   fix(new-hope): add new tokens to pagination ([@iljs](https://github.com/iljs))
-   fix(new-hope): add new tokens to notification ([@iljs](https://github.com/iljs))
-   fix(new-hope): add new tokens to tabs ([@iljs](https://github.com/iljs))
-   fix(new-hope): add new tokens to dropdown ([@iljs](https://github.com/iljs))
-   fix(new-hope): add new tokens to combobox ([@iljs](https://github.com/iljs))
-   fix(new-hope): add new tokens to calendar and datepicker ([@iljs](https://github.com/iljs))
-   fix(new-hope): add new tokens to autocomplite ([@iljs](https://github.com/iljs))
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

# v0.181.0 (Thu Oct 31 2024)

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
-   feat(plasma-new-hope): Counter improvements added ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_,sdds-_): add hasHint to TextField/Area stories [#1513](https://github.com/salute-developers/plasma/pull/1513) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add hasHint to TextField/Area stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: Notification placement prop [#1503](https://github.com/salute-developers/plasma/pull/1503) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat: vertical single Slider [#1452](https://github.com/salute-developers/plasma/pull/1452) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(\*): add new tokens to select in all libs [#1504](https://github.com/salute-developers/plasma/pull/1504) ([@iljs](https://github.com/iljs))
-   feat(new-hope): add new tokens to select in core ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): Add `ViewComponent` to example and add import themes from `plasma-themes` ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `ViewContainer` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): add hint to TextArea & TextField ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(\*): add new props, edit contentRight, add ref to item and fix margin in sdds [#1484](https://github.com/salute-developers/plasma/pull/1484) ([@iljs](https://github.com/iljs))
-   feat(sdds-serv): building [#1419](https://github.com/salute-developers/plasma/pull/1419) ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-b2c, plasma-web): Combobox component tests [#1518](https://github.com/salute-developers/plasma/pull/1518) ([@shuga2704](https://github.com/shuga2704))
-   fix(plasma-\*): add token for contentLeftColor [Select](<[@Yakutoc](https://github.com/Yakutoc)>)
-   docs(): Counter docs updated ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): add more canUseDOM checks [#1515](https://github.com/salute-developers/plasma/pull/1515) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): replace useUniqId with safeUseId import [#1512](https://github.com/salute-developers/plasma/pull/1512) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore: fix useFocusTrap imports ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(): add arrow hover & active state; fix tokens ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Header tabs added ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Combobox & Select improvements [#1505](https://github.com/salute-developers/plasma/pull/1505) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Dropdown architecture improvement [#1497](https://github.com/salute-developers/plasma/pull/1497) ([@shuga2704](https://github.com/shuga2704))
-   fix(plasma-new-hope): fix useFocusTrap import [#1508](https://github.com/salute-developers/plasma/pull/1508) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): fix DatePicker placeholder type [#1501](https://github.com/salute-developers/plasma/pull/1501) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): fix TextArea, TextField typo [#1498](https://github.com/salute-developers/plasma/pull/1498) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): fix Calendar hover behaviour ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-\*): handle side effect for css ([@Yakutoc](https://github.com/Yakutoc))
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

# v0.169.0 (Thu Oct 17 2024)

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
-   feat(plasma-new-hope): fix DatePicker focus issues [#1475](https://github.com/salute-developers/plasma/pull/1475) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add dates sorting on DatePicker blur ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add portal forwarding to DatePicker ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add change callback ondatepicker calendar date choose ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(\*): add breadrumbs new tokens [#1458](https://github.com/salute-developers/plasma/pull/1458) ([@iljs](https://github.com/iljs))
-   feat(sdds-cs-docs): edit docs ([@iljs](https://github.com/iljs))
-   feat(plasma-web, plasma-b2c, sdds): Interlayer in Combobox according to the new generic [#1470](https://github.com/salute-developers/plasma/pull/1470) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): Add generic of ItemOption in ComboboxProps ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hop): Inital update package files ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add onClick callback to item and small type refactor [#1480](https://github.com/salute-developers/plasma/pull/1480) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Got rid of styled-components imports in new-hope [#1468](https://github.com/salute-developers/plasma/pull/1468) ([@shuga2704](https://github.com/shuga2704))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(plasma-new-hope): improve dsplName for storybook [#1346](https://github.com/salute-developers/plasma/pull/1346) ([@Yeti-or](https://github.com/Yeti-or))
-   fix(sdds-cs): set overlay and navigation tokens ([@iljs](https://github.com/iljs))
-   fix: focus TextArea by click inside [#1444](https://github.com/salute-developers/plasma/pull/1444) ([@vadim-kudr](https://github.com/vadim-kudr))
-   fix(plasma-_,sdds-_): fix Toast background token ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs(): attach docs updated [#1481](https://github.com/salute-developers/plasma/pull/1481) ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix attach onChange ([@denivladislav](https://github.com/denivladislav))
-   chore(): added width and height to Tabs storybooks [#1476](https://github.com/salute-developers/plasma/pull/1476) ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix Tabs arrow scroll ([@denivladislav](https://github.com/denivladislav))
-   docs(\*-docs): Update docs for `Breadcrumbs` component ([@neretin-trike](https://github.com/neretin-trike))
-   chore(plasma-\*): add `size:xs` [badge](<[@Yakutoc](https://github.com/Yakutoc)>)
-   docs(): Tabs docs updated ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix tokens, styles and typos ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Tabs split into Horizontal and Vertical ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): update Popup logic ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix: fix storybook popover container ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(plasma-_, sdds-_): add scrollbar to TextArea ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): addSeparator fixed [#1454](https://github.com/salute-developers/plasma/pull/1454) ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix attach truncate ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-\*): overwrite prop title for accordionItem ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-\*): view as optional prop ([@Yakutoc](https://github.com/Yakutoc))

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

# v0.160.0 (Thu Oct 03 2024)

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
-   feat(new-hope): add example with native form and edits ([@iljs](https://github.com/iljs))
-   feat(new-hope): add support datepicker ([@iljs](https://github.com/iljs))
-   feat(new-hope): add support double slider ([@iljs](https://github.com/iljs))
-   feat(new-hope): add useForm and support slider single ([@iljs](https://github.com/iljs))
-   feat(new-hope): fix refs in textarea ([@iljs](https://github.com/iljs))
-   feat(new-hope): form story ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): add clear for TextArea ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_,sdds-_): update configs depending on TextField [#1449](https://github.com/salute-developers/plasma/pull/1449) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add clear for TextField ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix Drawer positioning and overflow scrollbar [#1461](https://github.com/salute-developers/plasma/pull/1461) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Divider to Dropdown ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-\*): extend stories examples ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-\*): used prop locale from calendar [datepicker](<[@Yakutoc](https://github.com/Yakutoc)>)
-   feat(plasma-\*): add support locales: ru, en [calendar](<[@Yakutoc](https://github.com/Yakutoc)>)
-   feat(new-hope): edit work label position switch [#1447](https://github.com/salute-developers/plasma/pull/1447) ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): add ChipGroup component ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): modify clear TextArea required ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: update TextArea docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): modify clear TextField required ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: update TextField docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope,sdds-\*): fix Drawer stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore(docs-\*): update docs about locale example ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 7

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))

---

# v0.151.0 (Tue Sep 24 2024)

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
-   feat(plasma-new-hope): Attach and examples added ([@denivladislav](https://github.com/denivladislav))
-   feat(sdds-cs): edit tokens [#1439](https://github.com/salute-developers/plasma/pull/1439) ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): replace Mask from react-maskinput library ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Mask component ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs(plasma-_, sdds-_): Attach docs added ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix Cell className and view type ([@denivladislav](https://github.com/denivladislav))
-   docs: add Mask docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.148.0 (Thu Sep 19 2024)

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
-   feat(plasma-new-hope): fix datepicker date input formatting [#1440](https://github.com/salute-developers/plasma/pull/1440) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Fixed issue with predefined value in single Combobox [#1436](https://github.com/salute-developers/plasma/pull/1436) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): add TextField ref to deps for placeholder [#1433](https://github.com/salute-developers/plasma/pull/1433) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Editable component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-\*): update Combobox configs & stories [#1422](https://github.com/salute-developers/plasma/pull/1422) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add alwaysOpened to Combobox ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Badge clear ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix TextField placeholder logic ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-09-18 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs: update DatePicker docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(sdds-\*): use correct default view for Grid [#1431](https://github.com/salute-developers/plasma/pull/1431) ([@Yakutoc](https://github.com/Yakutoc))
-   docs: update Combobox docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore(plasma-\*-docs): TextField component ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-\*-docs): fix typo for TextFieldGroup component ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-\*): replace InputHTMLAttributes to custom type ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-\*): fix `content{Left\Right}Slot` UI ([@Yakutoc](https://github.com/Yakutoc))
-   docs: update Badge docs ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### Authors: 6

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.141.0 (Tue Sep 10 2024)

#### 🚀 Enhancement

-   plasma-\*: Fix `TextField` placeholder logic [HOTFIX][#1425](https://github.com/salute-developers/plasma/pull/1425) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix TextField placeholder logic ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.140.0 (Thu Sep 05 2024)

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
-   feat(plasma-new-hope): add InputGroup component ([@Yakutoc](https://github.com/Yakutoc))
-   feat(\*): add format and lang [#1404](https://github.com/salute-developers/plasma/pull/1404) ([@iljs](https://github.com/iljs))
-   feat(\*): set background arrow tooltip [#1361](https://github.com/salute-developers/plasma/pull/1361) ([@iljs](https://github.com/iljs))
-   feat(tokens): update screenshoots and add themes ([@iljs](https://github.com/iljs))
-   feat(\*): set tokens in components ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   fix(plasma-new-hope): fix TextField placeholder logic ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(b2c, web, sdds): Combobox v2 [#1406](https://github.com/salute-developers/plasma/pull/1406) ([@shuga2704](https://github.com/shuga2704))
-   docs: add TextFieldGroup docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix: Fix PopupProvider server rendering [#1411](https://github.com/salute-developers/plasma/pull/1411) (VAnaKudryavtsev@sberbank.ru)
-   fix(new-hope): fix combobox item bug with select class ([@iljs](https://github.com/iljs))
-   chore: delete unnecessary sds_engineer source ([@Yakutoc](https://github.com/Yakutoc))
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

# v0.133.1 (Fri Aug 30 2024)

#### 🐛 Bug Fix

-   plasma-\*: PopupProvider server rendering [HOTFIX][#1410](https://github.com/salute-developers/plasma/pull/1410) (VAnaKudryavtsev@sberbank.ru [@vadim-kudr](https://github.com/vadim-kudr))
-   fix: Fix PopupProvider server rendering (VAnaKudryavtsev@sberbank.ru)
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
-   Кудрявцев Вадим Анатольевич (VAnaKudryavtsev@sberbank.ru)

---

# v0.133.0 (Wed Aug 28 2024)

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
-   fix(sdds-cs): hide segment [#1368](https://github.com/salute-developers/plasma/pull/1368) ([@iljs](https://github.com/iljs))
-   feat(\*): add custom background trigger for checkbox and rasiobox ([@iljs](https://github.com/iljs))
-   feat(\*): add custom loading background to button ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs(template): update tabs docs template [#1391](https://github.com/salute-developers/plasma/pull/1391) ([@Yakutoc](https://github.com/Yakutoc))
-   docs(plasma-new-hope, sdds-dfa): add missing docs [#1386](https://github.com/salute-developers/plasma/pull/1386) ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): removed unnecessary dependencies from Slider hooks ([@denivladislav](https://github.com/denivladislav))
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

# v0.129.0 (Thu Aug 22 2024)

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
-   feat(plasma-new-hope): portal prop added to Autocomplete ([@denivladislav](https://github.com/denivladislav))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix: Fix Modal overflow-y side effect [#1380](https://github.com/salute-developers/plasma/pull/1380) (VAnaKudryavtsev@sberbank.ru)
-   fix: Fix Modal overflow-y side effect [#1325](https://github.com/salute-developers/plasma/pull/1325) ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(web, b2c): Select and SelectNew are merged. SelectNew is gone. [#1349](https://github.com/salute-developers/plasma/pull/1349) ([@shuga2704](https://github.com/shuga2704))
-   fix(new-hope): remove label bug [#1358](https://github.com/salute-developers/plasma/pull/1358) ([@iljs](https://github.com/iljs))
-   fix(new-hope): remove label bug [#1359](https://github.com/salute-developers/plasma/pull/1359) ([@iljs](https://github.com/iljs))
-   docs(plasma-{new-hope, b2c, web}, sdds-\*): docs updated; missing examples aded to sdds-cs ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): Tabs and TabItem types and PropsTable fixed ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-{new-hope, b2c, web}): TextField --plasma-colors tokens changed ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-{new-hope, b2c, web}): Popover --plasma-colors tokens changed ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-{new-hope, b2c, web): Dropdown --plasma-tokens changed ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-{new-hope, b2c, web): Tabs --plasma-tokens changed ([@denivladislav](https://github.com/denivladislav))
-   docs(plasma-{new-hope, web}, sdds-{cs, dfa, serv): docs updated ([@denivladislav](https://github.com/denivladislav))
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

# v0.120.0 (Thu Aug 08 2024)

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
-   feat(sdds-cs): edit badge ([@iljs](https://github.com/iljs))
-   feat(sdds-cs/plasma-web): add view for accordion and edit configs sdds-cs ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): added renderTarget prop in Select [#1328](https://github.com/salute-developers/plasma/pull/1328) ([@shuga2704](https://github.com/shuga2704))
-   feat(new-hope/sdds-cs): add to sdds-cs and edits [#1310](https://github.com/salute-developers/plasma/pull/1310) ([@iljs](https://github.com/iljs))
-   feat(\*): add to libs and final edits ([@iljs](https://github.com/iljs))
-   feat(new-hope): add example to storybook with custom shorter ([@iljs](https://github.com/iljs))
-   feat(new-hope): add component breadcrumbs in new-hope ([@iljs](https://github.com/iljs))
-   feat(components): api and readme breadcrumbs ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): add support for DatePicker deferred defaultDate ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix DatePicker input width & focus token ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): remove Header component [#1331](https://github.com/salute-developers/plasma/pull/1331) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(docs): add git ci cd ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): add DatePicker open by space ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix range width [#1327](https://github.com/salute-developers/plasma/pull/1327) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add innerLabel support for DatePicker ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): fixed unnecessary vertical scroll into view [#1333](https://github.com/salute-developers/plasma/pull/1333) ([@denivladislav](https://github.com/denivladislav))
-   docs(plasma-{new-hope, web), sdds-{dfa, serv}): docs updated ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_, sdds-_): stretch turned into conditional control ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fixed tabs due to redesign ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_, sdds-_): configs fixed ([@denivladislav](https://github.com/denivladislav))
-   fix: fix Notification animation overflow [#1339](https://github.com/salute-developers/plasma/pull/1339) ([@vadim-kudr](https://github.com/vadim-kudr))
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

# v0.111.0 (Thu Jul 25 2024)

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
-   feat: Add color prop in Typography ([@vadim-kudr](https://github.com/vadim-kudr))
-   feat(plasma-{new-hope, b2c, web}, sdds-{dfa, serv}): indian rupee added [#1307](https://github.com/salute-developers/plasma/pull/1307) ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope): add Price component ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope): fix calendar state change [#1302](https://github.com/salute-developers/plasma/pull/1302) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix calendar item focus ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix DoubleCalendar Header color ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Quarters support to Datepicker ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor Calendar stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): rename Quarter to Quarters ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix calendar exported types ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix calendar indexes choice in key navigation ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix calendar refs for elements ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor hooks, types; add Quarters ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor calendar utils ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor Calendar ui components ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add hasClear prop to Chip ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-07-24 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(components): add new view and add new props [#1301](https://github.com/salute-developers/plasma/pull/1301) ([@iljs](https://github.com/iljs))
-   fix(new-hope): add classname to accordionItem ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope, b2c, web, sdds-serv, sdds-dfa): Select [#1233](https://github.com/salute-developers/plasma/pull/1233) ([@shuga2704](https://github.com/shuga2704))
-   fix(plasma-new-hope): fix Price periodicity type ([@denivladislav](https://github.com/denivladislav))
-   docs(plasma-{new-hope, web}, sdds-{serv, dfa}): docs added ([@denivladislav](https://github.com/denivladislav))
-   docs: fix Portal PropsTable error ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix Portal PropsTable error ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope, web, b2c, sdds-serv, sdds-dfa): Autocomplete [#1292](https://github.com/salute-developers/plasma/pull/1292) ([@shuga2704](https://github.com/shuga2704))
-   docs: update DatePicker docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: refactor Calendar docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(new-hope): Fix width autoresize bug in textarea [#1297](https://github.com/salute-developers/plasma/pull/1297) ([@iljs](https://github.com/iljs))
-   docs: update Chip docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): forward styles and className to Tooltip root [#1311](https://github.com/salute-developers/plasma/pull/1311) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(sdds-_,plasma-_,caldera-online): Update `Portal` component usage [#1299](https://github.com/salute-developers/plasma/pull/1299) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): Replace div in `Portal` component to react element ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): Remove frame deps from `PopupRootContainer` element ([@neretin-trike](https://github.com/neretin-trike))
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

# v0.105.0 (Thu Jul 11 2024)

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
-   feat(sdds-docs): add Emotion docs [#1281](https://github.com/salute-developers/plasma/pull/1281) ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): refactor textfield label placement ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): update range left content line-height [#1253](https://github.com/salute-developers/plasma/pull/1253) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: update TextField configs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Added prop 'portal' into Dropdown component [#1260](https://github.com/salute-developers/plasma/pull/1260) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): add emotion support [#1276](https://github.com/salute-developers/plasma/pull/1276) ([@Yeti-or](https://github.com/Yeti-or))
-   feat(plasma-new-hope): Portal implemented in Popup, Popover ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope): Portal component added ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope): rename DatePicker folders [#1224](https://github.com/salute-developers/plasma/pull/1224) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor range props ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix dropdown disclosure icon ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor DatePicker flow ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix DatePicker tokens ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix Range LeftContent margin ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add DatePicker examples ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add range double DatePicker ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor Calendar tokens & mixins ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add DatePicker ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(sdds-dfa-docs): Add `sdds-dfa-docs` ([@neretin-trike](https://github.com/neretin-trike))
-   chore(plasma-new-hope): add docs template for `Header`, `Accordion` components ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): Fix `Accordion` component ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): Fix `Header` component ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): Fix `Skeleton` component ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): delete unnecessary `console.log` [#1290](https://github.com/salute-developers/plasma/pull/1290) ([@Yakutoc](https://github.com/Yakutoc))
-   docs(caldera-online-docs): fix incorrect import ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks.json files \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-new-hope): types fixed ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-{new-hope, web, b2c}, caldera-online, sdds-serv): fix Sheet horizontal scroll in stories ([@denivladislav](https://github.com/denivladislav))
-   docs(plasma-{new-hope, web}, sdds): Portal docs added ([@denivladislav](https://github.com/denivladislav))
-   docs: add DatePicker docs ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### Authors: 8

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.93.0 (Thu Jun 27 2024)

### Release Notes

#### Release by 26.06.2024 ([#1269](https://github.com/salute-developers/plasma/pull/1269))

## Components

### Accordion

-   добавлен новый компонент в поставку для `plasma-{web,b2c}`

plasma-\*: Add accordion (https://github.com/salute-developers/plasma/pull/1254)

### Sheet

-   Добавлен компонент `Sheet`

plasma-new-hope: add Sheet component (https://github.com/salute-developers/plasma/pull/1225)

### TextArea

-   `TextArea` портирован в `sdds`

sdds-serv: add TextArea component (https://github.com/salute-developers/plasma/pull/1263)

### TextArea

-   исправлена типизация (разбитие на три группы `rows / cols`, `height / width`, `autoResize / minAuto / maxAuto`)
-   исправлен расчёт `autoResize`
-   исправлена документация

plasma-new-hope: TextArea height / width fixes (https://github.com/salute-developers/plasma/pull/1261)

### TextArea

-   удалено упоминание `resize` (свойство `deprecated`)

(plasma-{new-hope, web}, sdds-serv): remove resize from docs (https://github.com/salute-developers/plasma/pull/1267)

### Segment

-   добавлена возможность задать выбранные по умолчанию сегменты
-   добавлен тест на выбранные значения
-   добавлено пояснение в документации

feat(plasma-new-hope): add default selected segment (https://github.com/salute-developers/plasma/pull/1252)

## Icons

### 24 [s, small]

-   обновлен набор `.svg` иконок
-   обновлены/расширенны категории иконок
-   обновлены snapshots для тестов измененных иконок

feat(plasma-icons): Add icons preset [24, s, small](https://github.com/salute-developers/plasma/pull/1247)

### 16 [xs, xsmall]

-   обновлен набор `.svg` иконок

feat(plasma-icons): Add icons preset [16, xs, xsmall](https://github.com/salute-developers/plasma/pull/1250)

### 36 [m, medium]

-   обновлен набор `.svg` иконок

feat(plasma-icons): Add icons preset [36, m, medium](https://github.com/salute-developers/plasma/pull/1257)

### React

-   добавлена обработка всех имеющихся размеров: 16, 24, 36
-   обновлены cypress snapshots с использованием иконки `IconDone`

#### Before/After

![Icon](https://github.com/salute-developers/plasma/assets/2895992/5d7551d5-d392-4a9f-993e-e265a28d6362)

### New-hope

-   изменен токен по-умолчанию для свойство `color` в `IconRoot` (теперь `var(--text-primary)`)
-   обновлены cypress snapshots связанные с `var(--text-primary)`

plasma-icons: Handle all sizes [React](https://github.com/salute-developers/plasma/pull/1258)

### Android

-   добавлены `.xml` иконки для всех имеющихся размеров: 16, 24, 36

#### After

<img width="672" alt="Screenshot 2024-06-19 at 13 44 22" src="https://github.com/salute-developers/plasma/assets/2895992/878745f3-9f20-4224-826d-c0d898d1a94d" />

<img width="1920" alt="Screenshot 2024-06-19 at 13 46 09" src="https://github.com/salute-developers/plasma/assets/2895992/dca1102a-abbc-4a65-a628-f5acf40f80d8" />

plasma-icons: handle all icons size [Android](https://github.com/salute-developers/plasma/pull/1259)

### Icons page

-   добавлен вывод комбинации (старых + новых) иконок
-   добавлено динамическое изменение размера иконок в grid
-   косметические правки по дизайну

plasma-website: Redesign "Icons" page [Part 2](https://github.com/salute-developers/plasma/pull/1262)

### Icons page

-   добавлено меню фильтра по размеру
-   внесены дизайн правки

plasma-website: Add icons filter menu (https://github.com/salute-developers/plasma/pull/1265)

## Docs

### Edit docs

-   исправлена документация для компонента `Switch`, `Checkbox` и `Radiobox`
-   изменена работа документации, теперь при генерации файла документации туда добавляются все типы, в том числе и из `react`
-   в компонент `PropsTable` добавлен параметр `include`, который добавляет свойство в документацию, если он является типом из `react`

plasma-\*: Edit docs core and change docs Switch, Checkbox and Radiobox (https://github.com/salute-developers/plasma/pull/1232)

### Carousel

-   исправлено свойства `stylingCallback` на `scopeCallback`
-   исправлено свойства `stylingResetCallback` на `scopeResetCallback`

### Before/After

<img width="1778" src="https://github.com/salute-developers/plasma/assets/38344415/7e21b0f0-8fc8-4a45-a5e6-2ca704eba57f" />

Edit carousel docs (https://github.com/salute-developers/plasma/pull/1256)

### Caldera-online

-   добавлена документация для библиотеки `caldera-online`
-   поправлены шаблоны документации для `Button, Segment, Radiobox`

caldera-online: Add documentation (https://github.com/salute-developers/plasma/pull/1249)

### TextArea

-   удалено упоминание `resize` (свойство `deprecated`)

(plasma-{new-hope, web}, sdds-serv): remove resize from docs (https://github.com/salute-developers/plasma/pull/1267)

---

#### 🚀 Enhancement

-   Release by 26.06.2024 [#1269](https://github.com/salute-developers/plasma/pull/1269) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@denivladislav](https://github.com/denivladislav) [@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add default selected prop to SegmentItem ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): examples added to types ([@denivladislav](https://github.com/denivladislav))
-   feat(sdds-serv): TextArea added ([@denivladislav](https://github.com/denivladislav))
-   docs(plasma-new-hope, plasma-web, sdds-serv): Sheet docs added [#1225](https://github.com/salute-developers/plasma/pull/1225) ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-new-hope): Sheet added ([@denivladislav](https://github.com/denivladislav))
-   feat(new-hope): Add disabled, change function and more props [#1254](https://github.com/salute-developers/plasma/pull/1254) ([@iljs](https://github.com/iljs))
-   feat(new-hope): Accordion add to web, b2c and docs ([@iljs](https://github.com/iljs))
-   feat(new-hope): Accordion Sign Anumation ([@iljs](https://github.com/iljs))
-   feat(new-hope): Accordion Component ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   docs: update Segment docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs(plasma-{new-hope, web}, sdds-serv): remove resize [#1267](https://github.com/salute-developers/plasma/pull/1267) ([@denivladislav](https://github.com/denivladislav))
-   docs(plasma-new-hope, plasma-web): TextArea docs updated ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix autoResize ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): types split ([@denivladislav](https://github.com/denivladislav))
-   fix(scaffold): update scaffold settings ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-new-hope): replace old color token to "--text-primary" ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-new-hope): fix Sheet types, design and animation ([@denivladislav](https://github.com/denivladislav))
-   fix(docs): Change proptable and check types after json generate [#1232](https://github.com/salute-developers/plasma/pull/1232) ([@iljs](https://github.com/iljs))

#### Authors: 5

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v0.87.0 (Thu May 30 2024)

### Release Notes

#### Release by 29.05.2024 ([#1222](https://github.com/salute-developers/plasma/pull/1222))

## Components

### Calendar

-   добавлен пропс для включения/исключения минимума и максимума диапазона дат

feat: add calendar edge dates control (https://github.com/salute-developers/plasma/pull/1203)

### Slider

-   добавлен компонент Slider

feat(plasma-new-hope): add slider component (https://github.com/salute-developers/plasma/pull/1194)

### Textarea

-   изменен `padding` для `label`

fix(plasma-\*): Fix padding on textarea (https://github.com/salute-developers/plasma/pull/1209)

### Range

-   включен в поставку `plasma-{b2c,web} / sdds-serv`
-   написаны тесты и документация

feat: Add range component (https://github.com/salute-developers/plasma/pull/1208)

### IconButton

-   включен в поставку `sdds-serv`
-   добавлена документация в `sdds-serv-docs`

feat(sdds-serv): add icon button (https://github.com/salute-developers/plasma/pull/1214)

### Tabs

-   добавлен корректный проброс `className` в `Tab` и `TabItem`
-   поправлена документация для `Tab` и `Segment`

#### ДО:

![image](https://github.com/salute-developers/plasma/assets/40370966/797f897d-95cc-4114-b54a-8629b281b2c7)
![image](https://github.com/salute-developers/plasma/assets/40370966/8a0e6de3-f6cd-4e7b-b87b-a1a26b5dd4e7)

#### ПОСЛЕ:

![image](https://github.com/salute-developers/plasma/assets/40370966/9dd690cc-e8ed-4623-baa0-52e1f22cf71c)
![image](https://github.com/salute-developers/plasma/assets/40370966/0c8bb69e-b2d3-4ae9-aed4-2fd4c4b5bd9b)

feat(plasma-new-hope): fix tabs styles (https://github.com/salute-developers/plasma/pull/1220)

### Button

-   добавлено отображение `value`
-   исправлены внутренние отступы от `contentLeft`, `contentRight`
-   дополнены тесты и документация
-   исправлены тесты, зависящие от `Button: Notification, Pagination, Toast, Toolbar`
-   добавлен токен переопределения цвета `value` в `ButtonGroup`

feat: add button value (https://github.com/salute-developers/plasma/pull/1213)

## Tokens

### Tokens

-   добавлены токены прозрачности для positive, warning, negative цветов
-   добавлены токены с active, hover модификаторами

tokens: add surface transparent tokens to sdds (https://github.com/salute-developers/plasma/pull/1206)

## Misc

### Checkbox/Radiobox

-   исправлен types компонентов для библиотек `plasma-asdk`, `sdds-serv` и `caldera-online`

Fix checkbox types (https://github.com/salute-developers/plasma/pull/1217)

---

#### 🚀 Enhancement

-   Release by 29.05.2024 [#1222](https://github.com/salute-developers/plasma/pull/1222) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@akhdrv](https://github.com/akhdrv) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): add Button value ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix tabs className forward & hide scrollbar [#1220](https://github.com/salute-developers/plasma/pull/1220) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Range component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add react-draggable [#1194](https://github.com/salute-developers/plasma/pull/1194) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add edge dates control for Calendar ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): fix ButtonGroup config & stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: update docs for Button ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(components): fix checkbox types (sdds-serv, caldera-online, plasma-asdk) [#1217](https://github.com/salute-developers/plasma/pull/1217) ([@iljs](https://github.com/iljs))
-   docs: fix Segment & Tabs docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: add Range docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(new-hope): Textarea fix padding and label [#1209](https://github.com/salute-developers/plasma/pull/1209) ([@iljs](https://github.com/iljs))
-   fix(docs): improved docs template ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 5

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.80.0 (Thu May 16 2024)

#### 🚀 Enhancement

-   Release by 15.05.2024 [#1205](https://github.com/salute-developers/plasma/pull/1205) ([@renovate[bot]](https://github.com/renovate[bot]) [@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv))
-   feat(plasma-new-hope): refactor Checkbox & Radiobox file structure & tokens ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(new-hope): fix [#1195](https://github.com/salute-developers/plasma/pull/1195) ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): Add docs ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): Add to b2c ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): Add to web ([@iljs](https://github.com/iljs))
-   feat(plasma-docs): fix [#1201](https://github.com/salute-developers/plasma/pull/1201) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): fixes ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): keyboard navi refactoring ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): Backward compatibility ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): Tree view temporary check ([@shuga2704](https://github.com/shuga2704))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-new-hope, web, b2c): Dropdown refactoring ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-\*): fix ref target for TextField ([@Yakutoc](https://github.com/Yakutoc))
-   chore(deps): update dependency @rollup/plugin-babel to v6.0.4 [#1085](https://github.com/salute-developers/plasma/pull/1085) ([@renovate[bot]](https://github.com/renovate[bot]))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

-   [@iljs](https://github.com/iljs)
-   [@renovate[bot]](https://github.com/renovate[bot])
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.77.0 (Thu Apr 25 2024)

### Release Notes

#### Release by 24.04.2024 ([#1196](https://github.com/salute-developers/plasma/pull/1196))

## Components

### Tooltip

-   исправлено позиционирование стрелочки
-   добавлен тест на много-строчный сценарий

#### Before:

![image](https://github.com/salute-developers/plasma/assets/40370966/230bbda5-2c2f-4628-b5b4-7a7a14ffc2c9)

#### After:

![image](https://github.com/salute-developers/plasma/assets/40370966/6c142730-0b4b-47de-a64d-1c6ad2c4fc77)

fix(plasma-new-hope): fix tooltip arrow placing (https://github.com/salute-developers/plasma/pull/1171)

### Radiobox

-   расширен пример в `stories` с учетом `a11y` возможностей

plasma-new-hope(radiobox): Improved a11y (https://github.com/salute-developers/plasma/pull/1188)

### Storybook

-   исправлено некорректное поведение свойства `placement`
-   исправлено свойство `enableContentLeft` и `enableContentRight` в TextField

feat(plasma-new-hope, b2c, web, sdds): Fix storybook argTypes (https://github.com/salute-developers/plasma/pull/1182)

### Avatar

-   добавлен `aria-label`
-   расширены примеры с доступностью

plasma-new-hope(avatar): Refactoring + a11y (https://github.com/salute-developers/plasma/pull/1180)

### Chip

-   удален лишнее свойство `hasClear` из примера в `story`
-   заменены со старого формата на новый токены в конфигурации (без приставки `--plasma-colors`)
-   добавлена недостающие свойство `view=accent`
-   обновлены `cypress snapshots`

fix: remove extra chip prop in stories (https://github.com/salute-developers/plasma/pull/1179)

## Colors

-   добавлены файлы фирменной палитры в формате `.json`
-   добавлена директория `src` в gitignore, т.к. теперь его содержимое генерируется автоматически на основе `.json`

feat(plasma-color): Add generate color palette from json (https://github.com/salute-developers/plasma/pull/1172)

## Infra

### Audit vulnerabilities

-   исправлены все уязвимости в клиентских пакетах (аля `plasma-web`)
-   обновлен до `vite@4.5.3`
-   обновлен `@babel` и его зависимости до latest
-   заменен `babel-plugin-transform-class-properties` на `@babel/plugin-transform-class-properties`

### `@salutejs/plasma-sb-utils`

-   обновлены `TS` до 4.2.4
-   обновлен `@storybook/react` до 7.6.17
-   исправлены все уязвимости
-   поправлены мелкие ошибки в типах

plasma-infra(sb-utils): Update dependencies versions (https://github.com/salute-developers/plasma/pull/1178)

---

#### 🚀 Enhancement

-   Release by 24.04.2024 [#1196](https://github.com/salute-developers/plasma/pull/1196) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): add new button views to ButtonGroup ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): replace primary to default view ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add popover arrow styles for placing ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix: extend stories examples [#1188](https://github.com/salute-developers/plasma/pull/1188) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: add complex accessibility story [#1183](https://github.com/salute-developers/plasma/pull/1183) ([@Yakutoc](https://github.com/Yakutoc))
-   fix(avatar): used aria-label [a11y](<[@Yakutoc](https://github.com/Yakutoc)>)
-   fix: audit fix [#1184](https://github.com/salute-developers/plasma/pull/1184) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update deps ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-new-hope/web/b2c,sdds-serv): update tokens for Chip configs [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   docs: fix Chip view in docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope/web/b2c,sdds-serv): fix stories for Chip ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope, b2c, web, sdds): Fix storybook argTypes [#1182](https://github.com/salute-developers/plasma/pull/1182) ([@shuga2704](https://github.com/shuga2704))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.73.0 (Thu Apr 11 2024)

### Release Notes

#### Release by 10.04.2024 ([#1175](https://github.com/salute-developers/plasma/pull/1175))

## Components

### Dropdown

-   добавлена прослойка для dropdown в `b2c` и `web` (работает на старом api и с dropdown из new-hope)

feat(plasma-new-hope, b2c, web): Dropdown interlayer (https://github.com/salute-developers/plasma/pull/1104)

### Cell

-   добавлен в поставку `plasma-{web,b2c}`

feat(new-hope): Add cell (https://github.com/salute-developers/plasma/pull/1148)

### Chip

-   поправлена типизация
-   компонент добавлен в поставку для `sdds-serv`, включая документацию

feat(plasma-new-hope): fix Chip types (https://github.com/salute-developers/plasma/pull/1155)

### Button

-   добавлены токены состояний (active / hover) для конфигов компонента в библиотеках `@salutejs/plasma-{b2c,web,asdk}`, `@salutejs/sdds-serv`, `@salutejs/caldera-online` .

fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update state tokens for `Button` component (https://github.com/salute-developers/plasma/pull/1167)

### Select

-   убрана поддержка вложенности
-   добавлена прослойка для компонента в `plasma-{b2c,web}` и `sdds-serv` (\* работает на старом api и с select из new-hope).
-   переделаны тесты и обновлена документация

feat(plasma-new-hope, b2c, web, sdds-serv): Select interlayer (https://github.com/salute-developers/plasma/pull/1161)

### TextField

-   проведен рефакторинг и редизайн
-   обновлены тесты и документация
-   добавлен в поставку в sdds-serv

feat(plasma-new-hope): TextField redesign (https://github.com/salute-developers/plasma/pull/1160)

## Icons

### iOS

-   добавлен конвертор SVG в PNG для iOS app

plasma-icons: Convert SVG to PNG for iOS (https://github.com/salute-developers/plasma/pull/1163)

## Tokens

### Tokens

-   исправлена формула для расчёта `hover / active` состояний
-   добавлены новые токены (но в выключенном состоянии) в существующие темы и схемы для библиотек `@salutejs/plasma-tokens`, `@salutejs/data-themes`, `@salutejs/caldera-online-themes`, `@salutejs/sdds-serv-themes`, `@salutejs/plasma-themes`, `@salutejs/flamingo-themes`
-   добавлены недостающие токены для обратной совместимости у библиотек `@salutejs/plasma-tokens-web`, `@salutejs/plasma-tokens-b2c`, `@salutejs/plasma-tokens-b2b`,
-   добавлены недостающие токены в темы `plasma_b2c`, `plasma_web`, `sds_engineer` для библиотеки `@salutejs/plasma-new-hope`

feat(plasma-tokens,plasma-theme-builder): Add tokens to existed themes (https://github.com/salute-developers/plasma/pull/1165)

## Docs

### Popup

-   исправлена ошибка в документации

fix(new-hope): Fix popup doc (https://github.com/salute-developers/plasma/pull/1168)

## Misc

### Plasma Theme Builder

-   Добавлена генерация hover / active состояний для групп токенов.

feat(plasma-theme-builder): Add generate hover / active state for tokens (https://github.com/salute-developers/plasma/pull/1134)

### Pagination

-   исправлена ошибка навигации с помощью кнопок `next` \ `pre`

fix(new-hope): Edit storybook content (https://github.com/salute-developers/plasma/pull/1154)

### Website icons grid

-   исправлен поиск иконок по названию
-   исправлен grid для набора иконок

fix(plasma-website): Fix Icons (https://github.com/salute-developers/plasma/pull/1169)

---

#### 🚀 Enhancement

-   Release by 10.04.2024 [#1175](https://github.com/salute-developers/plasma/pull/1175) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs) [@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor & redesign TextField component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix Chip types ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Add state tokens for css themes in examples [#1165](https://github.com/salute-developers/plasma/pull/1165) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(new-hope): Cell web, b2c and docs [#1148](https://github.com/salute-developers/plasma/pull/1148) ([@iljs](https://github.com/iljs))
-   feat(new-hope): Add cell ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-04-10 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-hope, b2c, web, new-hope, sdds-serv): Select interlayer [#1161](https://github.com/salute-developers/plasma/pull/1161) ([@shuga2704](https://github.com/shuga2704))
-   fix(plasma-website): Fix Icons [#1169](https://github.com/salute-developers/plasma/pull/1169) ([@iljs](https://github.com/iljs))
-   fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update state tokens for `Button` ([@neretin-trike](https://github.com/neretin-trike))
-   fix(new-hope): Edit storybook content [#1154](https://github.com/salute-developers/plasma/pull/1154) ([@iljs](https://github.com/iljs))
-   feat(plasma-b2c, web): Dropdown added ([@shuga2704](https://github.com/shuga2704))

#### Authors: 6

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.67.1 (Tue Apr 02 2024)

#### 🐛 Bug Fix

-   fix(new-hope): Edit core and storybook [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@iljs](https://github.com/iljs))
-   fix(new-hope): Edit core and storybook ([@iljs](https://github.com/iljs))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@iljs](https://github.com/iljs)
-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.67.0 (Thu Mar 28 2024)

### Release Notes

#### Release by 27.03.2024 ([#1151](https://github.com/salute-developers/plasma/pull/1151))

## Components

### Progress

-   добавлен в библиотеку в `new-hope`
-   добавлен в поставку пакетов `plasma-{b2c, web}, sdds-serv`
-   написаны тесты и документация

feat: Progress redesign refactor (https://github.com/salute-developers/plasma/pull/1126)

### Tooltip

-   добавлены fallback на следующие свойства: isVisible, arrow, animated

feat(plasma-new-hope): tooltip old api fallback (https://github.com/salute-developers/plasma/pull/1140)

### Divider

-   включен в поставку `plasma-{b2c/web}` и `sdds-serv`
-   написаны тесты и документация

feat(plasma-new-hope): Divider component (https://github.com/salute-developers/plasma/pull/1132)

### Pagination

-   добавлен в поставку клиентских библиотек

feat(new-hope): Pagination (https://github.com/salute-developers/plasma/pull/1107)

### Toolbar

-   включили в поставку в `plasma-{b2c/web}` \ `sdds-serv`
-   написаны тесты и документация

feat(plasma-new-hope): add toolbar component (https://github.com/salute-developers/plasma/pull/1150)

## Icons

### Icons for android

-   Добавлен скрипт генерации иконок под android на основе svg
-   Обновлена инструкция по добавлению иконок

plasma-icons: script to generate android icons (https://github.com/salute-developers/plasma/pull/1109)

### Icons publish

-   добавлена директория `old` для обратной совместимости

plasma-icons: Add `old` dir for publish (https://github.com/salute-developers/plasma/pull/1149)

## Infra

### Scaffold docs CLI

-   добавлен CLI для создание **директории** документации по шаблону
-   добавлен CLI для создание **компонента** документации по шаблону

plasma-infra: Scaffold docs dir CLI (https://github.com/salute-developers/plasma/pull/1099)

### Retry

-   добавлен retry для шага `Update package-lock files` для обхода ошибки `ECONNRESET`
-   добавлен `workflow` для ручного запуска `Update package-lock files`

plasma-infra: Retry failure step (https://github.com/salute-developers/plasma/pull/922)

### Deploy documentations artefacts

-   распараллели процесс создания и загрузки артефактов документации
-   добавили `marocchino/sticky-pull-request-comment` для приклеивания сообщения к одному комментарию в pr
-   добавлена конфигурация: `config-ci.json`
-   удалены неиспользуемые переменные

plasma-infra: Refactoring deploy documentations artefacts [PR context](https://github.com/salute-developers/plasma/pull/1125)

### Build android icons plugin

-   добавлен dispatch события для запуска `build icons` в `plasma-android`

plasma-infra: Dispatch build-icons event (https://github.com/salute-developers/plasma/pull/1145)

### Scaffold components docs

-   добавлена генерация компонентов по заданному шаблону

plasma-infra: Scaffold components docs by template (https://github.com/salute-developers/plasma/pull/1128)

## Docs

### Docs

-   Исправлена ошибка примера путём обновления токенов бэграундов в сторибуке для библиотек `plasma-web`, `plasma-b2c`, `plasma-asdk`.

#### До:

<img width="412" alt="Screenshot 2024-03-21 at 12 28 41" src="https://github.com/salute-developers/plasma/assets/26903236/5814e04f-1425-403c-8e20-1151a12063c6" />

#### После:

<img width="412" alt="Screenshot 2024-03-21 at 17 03 31" src="https://github.com/salute-developers/plasma/assets/26903236/259c6397-2e5c-4d82-a2a6-4d6fdcc31e79" />

fix(plasma-web,plasma-b2c,plasma-asdk): Replace tokens for background in storybook to new (https://github.com/salute-developers/plasma/pull/1139)

## Misc

### Drawer

-   изменили величину измерения высоты на dvh в storybook

fix: change height for Drawer stories (https://github.com/salute-developers/plasma/pull/1116)

### Image

-   поправлена передача `props` в `Image.stories`

fix: fix args for Image stories (https://github.com/salute-developers/plasma/pull/1119)

### Plasma Theme Builder

-   произведён рефакторинг методов, которые генерируют токены
-   актуализированы базовые токены, которые генерируются сервисом ThemeBuilder
-   добавлена новая группа `outline`, используемая в обводках / рамках

feat(plasma-theme-builder): Actualize default tokens (https://github.com/salute-developers/plasma/pull/1127)

### Button

-   поправлен размер и отступ фокуса на кнопке

feat(plasma-new-hope): fix button focus (https://github.com/salute-developers/plasma/pull/1141)

### Badge

-   поправлен токен фона для `transparent-accent` Badge
-   поправлен токен цвета текста для `transparent-light`

#### До:

![image](https://github.com/salute-developers/plasma/assets/40370966/67673520-cfe8-4b6d-87eb-f700df308627)
![image](https://github.com/salute-developers/plasma/assets/40370966/aa9fb631-c1b3-4f58-aa0b-4e5a9dc9617c)

#### После:

![image](https://github.com/salute-developers/plasma/assets/40370966/59170271-0a32-4680-ab18-5aa4afde0cef)
![image](https://github.com/salute-developers/plasma/assets/40370966/9fdc8bea-add8-4798-955d-a896d6c32a40)

feat: update badge view tokens (https://github.com/salute-developers/plasma/pull/1142)

---

#### 🚀 Enhancement

-   Release by 27.03.2024 [#1151](https://github.com/salute-developers/plasma/pull/1151) ([@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@akhdrv](https://github.com/akhdrv) [@eg-zhuravlev](https://github.com/eg-zhuravlev))
-   feat(plasma-new-hope): update Toolbar configs in examples ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-b2c): Component Toolbar added ([@eg-zhuravlev](https://github.com/eg-zhuravlev))
-   feat(plasma-web): Component Toolbar added ([@eg-zhuravlev](https://github.com/eg-zhuravlev))
-   feat(plasma-new-hope): Component Toolbar added ([@eg-zhuravlev](https://github.com/eg-zhuravlev))
-   feat(new-hope): add sdds-serv [#1107](https://github.com/salute-developers/plasma/pull/1107) ([@iljs](https://github.com/iljs))
-   feat(new-hope): Pagination fixed ([@iljs](https://github.com/iljs))
-   feat(new-hope): Pagination tests ([@iljs](https://github.com/iljs))
-   feat(new-hope): Pagination add to web and b2c and fix bags ([@iljs](https://github.com/iljs))
-   feat(new-hope): Pagination ([@iljs](https://github.com/iljs))
-   feat(plasma-new-hope): fix Badge view tokens ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Divider component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add old Tooltip API fallback ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix Button outline focus [#1141](https://github.com/salute-developers/plasma/pull/1141) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Progress component ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(template): add components docs template [#1128](https://github.com/salute-developers/plasma/pull/1128) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: Update package-lock.json files [no ci](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore: bump manual package-locks [#1119](https://github.com/salute-developers/plasma/pull/1119) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix: fix args for Image stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix: change height for Drawer stories [#1116](https://github.com/salute-developers/plasma/pull/1116) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

-   [@iljs](https://github.com/iljs)
-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Evgeniy Zhuravlev ([@eg-zhuravlev](https://github.com/eg-zhuravlev))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.61.0 (Thu Mar 14 2024)

### Release Notes

#### Release by 13.03.2024 ([#1112](https://github.com/salute-developers/plasma/pull/1112))

## Components

### Calendar

-   добавлено возможность выбора одного дня для `range`

feat(new-hope): edit calendar range logic and fix name (https://github.com/salute-developers/plasma/pull/1084)

### TextField

-   исправлен ошибка связанная с прозрачностью в `Safari`

feat(plasma-new-hope): TextField issue with opacity (https://github.com/salute-developers/plasma/pull/1082)

### Button

-   удалены токены `scale` из кнопки и группы кнопок в пакетах `plasma-{b2c, web, sdds-serv}, caldera/-online`
-   удалены токены `scale` из `example` для `plasma-new-hope`

feat: remove scale tokens from Button & ButtonGroup (https://github.com/salute-developers/plasma/pull/1110)

### Grid

-   добавлен в поставку в `plasma-{b2c, web, new-hope}, sdds-serv`
-   написаны тесты и обновлена документация

feat(plasma-new-hope): Grid refactor redesign (https://github.com/salute-developers/plasma/pull/1105)

### ButtonBase

-   добавлен базовый компонент для создания `custom` кнопок для библиотек `plasma-{b2c,new-hope}`

feat(plasma-new-hope, b2c): ButtonBase (https://github.com/salute-developers/plasma/pull/1080)

## Icons

### SVG

-   добавлен svg формат иконок (не попадают в итоговой билд)

feat(plasma-icons): Add svg icons (https://github.com/salute-developers/plasma/pull/1095)

### Icons generation

-   добавлена генерация компонентов иконок на основе svg во время билда
-   удалены компоненты и их assets из git

plasma-icons: build-time generate Icon components (https://github.com/salute-developers/plasma/pull/1101)

## Docs

### SDDS SERV DOCS

-   добавлена новый пакет документации

plasma-docs: Setup `sdds-serv` package docs (https://github.com/salute-developers/plasma/pull/1062)

## Misc

### Tooltip

-   исправлена логика работы classname, теперь все наследуется корректно

fix(new-hope): remove wrapper from popover (https://github.com/salute-developers/plasma/pull/1083)

### Pickers

-   исправлена ошибка UI в документации

fix(ui): fix pickers documentation bug with overflow (https://github.com/salute-developers/plasma/pull/1089)

---

#### 🚀 Enhancement

-   Release by 13.03.2024 [#1112](https://github.com/salute-developers/plasma/pull/1112) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704) [@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): add Grid component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: remove scale tokens from bButton & ButtonGroup [#1110](https://github.com/salute-developers/plasma/pull/1110) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Update note in TextField [#1082](https://github.com/salute-developers/plasma/pull/1082) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): TextField's label tag got a display:block ([@shuga2704](https://github.com/shuga2704))
-   feat(new-hope): edit calendar range logic and fix name [#1084](https://github.com/salute-developers/plasma/pull/1084) ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-03-13 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-web, b2c, new-hope): Added ButtonBase [#1080](https://github.com/salute-developers/plasma/pull/1080) ([@shuga2704](https://github.com/shuga2704))
-   chore: bump manual package-locks [#1111](https://github.com/salute-developers/plasma/pull/1111) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore(storybook): bump storybook to "@latest" [#1096](https://github.com/salute-developers/plasma/pull/1096) ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks [no ci](<[@Yakutoc](https://github.com/Yakutoc)>)
-   fix(new-hope): tooltip classname fix [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@iljs](https://github.com/iljs))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

-   [@iljs](https://github.com/iljs)
-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.56.1 (Tue Mar 05 2024)

#### 🐛 Bug Fix

-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

-   [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.56.0 (Fri Mar 01 2024)

### Release Notes

#### Release by 29.02.2024 ([#1079](https://github.com/salute-developers/plasma/pull/1079))

## Components

### Drawer

-   добавлены компоненты `Drawer` и `Panel`
-   включен в поставку `plasma-{b2c/web/sdds-serv}`
-   для компонента `Drawer` написаны тесты

feat(plasma-new-hope): add Drawer (https://github.com/salute-developers/plasma/pull/1068)

### Indicator

-   добавлены тесты и документация
-   добавлен в поставку для библиотек: `plasma-{web,b2c}`
-   интегрирован в компонент `Avatar`

feat(plasma-new-hope, web, b2c): Indicator component (https://github.com/salute-developers/plasma/pull/1067)

### ButtonGroup

-   добавлен новый компонент и тесты с документацией
-   исправлена структура файлов для `Spiner`
-   добавлен компонент `Button` в поставку в `plasma-{b2c,web}`
-   обновлена документация для `Button`
-   обновлены тесты зависящие от `Button`

feat(plasma-new-hope): add button group component (https://github.com/salute-developers/plasma/pull/1061)

### TextField [Note]

TextField перевезен на новую Архитектуру, могут быть незначительные отличия от текущего поведeния.

### Рефакторинг TextField

-   поведение анимация `label` внутри поля стала запускаться одинаковым между `b2c` и `web`. Запуск на фокусе, а не на начале редактирования.
-   при показе `label` внутри поля больше не учитывается `placeholder`

### TextField [plasma-b2c]

-   исправлено поведение для цвет `placeholder`, больше не зависит от наличия `leftHelper`

feat(plasma-new-hope): TextField (https://github.com/salute-developers/plasma/pull/949)

## Infra

### Upload assets

-   добавлена возможность указать пакет/релиз к которому нужно прикрепить assets

plasma-infra: Upload assets for target package(-s) (https://github.com/salute-developers/plasma/pull/1054)

### plasma-temple

-   удалены все упоминания о пакете `plasma-temple` из текущего репозитория

Remove `plasma-temple` from repo [Part 1](https://github.com/salute-developers/plasma/pull/1048)

## Tokens

-   Добавлен пакет `@salutejs/data-themes`, который содержит все созданные json-схемы, а также набор методов, позволяющие сгенерировать темы для web-платформы в формате js объектов для `styled-component` и css стилей для подключения с помощью нативных способов.

-   В пакетах с наборами тем были объеденены токены с цветами и типографикой.

-   Так же если необходимы токены цвета или типографики отдельно, забрать их можно по пути `@salutejs/<vertical-name>-themes/tokens` для общих токенов и `@salutejs/<vertical-name>-themes/tokens/<theme-name>` для конкретных тем.

-   Добавлена новые пакеты с наборами тем для следующих дизайн вертикаль:
    -   `@salutejs/plasma-themes` - для вертикали `Plasma` - пока нигде не используется;
    -   `@salutejs/sdds-themes` - для вертикали `SDDS` - используется с библиотекой `@salutejs/sdds-serv`;
    -   `@salutejs/cladera-online-themes` - для вертикали `Caldera Online` - используется с библиотеками `@salutejs/cladera-online` и `@salutejs/cladera`;
    -   `@salutejs/flamingo-themes` - для вертикали `Flamingo` - пока нигде не используется;

### New-hope

-   Удалена зависимость `@salutejs/plasma-tokens` из пакета.

### SDDS-Serv

-   Обновлена документация со способом установки и подключением;
-   Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/sdds-themes`;
-   Обновлён способ подключение темы в storybook;
-   Исправлена сторис LiveDemo в компоненте `Toast`;
-   Заменены токены цветов в конфигах компонента `Segment` на актуальные

### Caldera / Caldera Online

-   Обновлена документация со способом установки и подключением;
-   Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/caldera-online-themes`;
-   Обновлён способ подключение темы в storybook;
-   Исправлена сторис LiveDemo в компоненте `Toast`;
-   Заменены токены цветов в конфигах компонента `Segment` на актуальные

Add new tokens architecture (https://github.com/salute-developers/plasma/pull/1074)

## Docs

### Сontributing Typos

-   исправлены опечатки в документации
-   добавлен параграф об обязательном наличие локально browser `chromium`

plasma-docs: Fix cypress cli commands (https://github.com/salute-developers/plasma/pull/1058)

## Misc

### SDDS Android

-   добавлен `SDDS Android` проект, включающий:

    -   Theme Builder Gradle Plugin
    -   SDDS Sandbox App
    -   UIKit
    -   UIKit Compose
    -   файл с лицензией и `README.md` в каждый модуль

chore[sdds-android]: SDDS Android project was created. (https://github.com/salute-developers/plasma/pull/1045)

### CI/CD Pipeline [SDDS Android]

-   Project build system migration to composite builds was made to support multiproject structure.
-   Code quality check workflow was created.
-   Merge report tasks were added.
-   Codeowners file was modified.

chore[sdds-android, cicd]: code quality check workflow (https://github.com/salute-developers/plasma/pull/1070)

---

#### 🚀 Enhancement

-   Release by 29.02.2024 [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike) [@malilex](https://github.com/malilex) [@shuga2704](https://github.com/shuga2704) [@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): add Drawer & Panel ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): TextField: bg:hover:focus ([@Yeti-or](https://github.com/Yeti-or))
-   feat(plasma-new-hope): Engine: multiple css to variant ([@Yeti-or](https://github.com/Yeti-or))
-   feat(plasma-new-hope): TextField ([@Yeti-or](https://github.com/Yeti-or))
-   feat(plasma-new-hope): fix toast close button [#1061](https://github.com/salute-developers/plasma/pull/1061) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor stretching prop in ButtonGroup component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add correct loader to Button ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor Spinner folder structure ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add types to Button component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add ButtonGroup component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(sdds-serv): add components from new-hope [#1056](https://github.com/salute-developers/plasma/pull/1056) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update package-locks [no ci](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(plasma-new-hope): Remove `plasma-tokens` deps ([@neretin-trike](https://github.com/neretin-trike))
-   chore(plasma-new-hope): TextField: remove useCallback ([@Yeti-or](https://github.com/Yeti-or))
-   fix(new-hope): TextField better inner label-placement ([@Yeti-or](https://github.com/Yeti-or))
-   chore(new-hope): fix overlay stories [#1075](https://github.com/salute-developers/plasma/pull/1075) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-new-hope, web, b2c): Added Indicator component [#1067](https://github.com/salute-developers/plasma/pull/1067) ([@shuga2704](https://github.com/shuga2704))
-   chore: bump manual package-locks [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore: Update package-lock.json files \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Alexander Malishev ([@malilex](https://github.com/malilex))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.49.0 (Thu Feb 15 2024)

### Release Notes

#### Release by 14.02.2024 ([#1047](https://github.com/salute-developers/plasma/pull/1047))

## Components

### SSRProvider

-   SSRProvider перенесен в библиотеку plasma-new-hope
-   добавлен в поставку b2c/web/asdk
-   из `plasma-asdk` удалена plasma-core зависимость

feat(plasma-new-hope): add ssr provider component (https://github.com/salute-developers/plasma/pull/1021)

### Calendar

-   добавлено новое свойство `onChangeStartOfRange` в библиотеки `plasma-{web,b2c}`

### After

<img width="600" alt="prop onChangeStartOfRange" src="https://github.com/salute-developers/plasma/assets/2895992/a2e01d6e-01f1-4041-b57f-57bb7d3de54e" />

plasma-web: Add `onChangeStartOfRange` prop into Calendar (https://github.com/salute-developers/plasma/pull/1014)

### Overlay

-   добавлен в новой архитектуре
-   добавлен в поставку для `plasma-{b2c/web}`
-   написаны тесты и документация
-   интегрирован в компоненты `Toast`, `Modal`

feat(plasma-new-hope/web/b2c): overlay component (https://github.com/salute-developers/plasma/pull/1033)

### Select

-   Обновлены зависимости у callback onChangeValue, который вызывался при выборе элемента в `multiselect` режиме для библиотеки `@salutejs/plasma-hope`

fix(plasma-hope): Add value deps for `Select` component with multiselect mode (https://github.com/salute-developers/plasma/pull/1040)

### Tabs

-   выполнен редизайн компонента `Tabs`
-   компонент добавлен в `plasma-web/b2c` в новой архитектуре
-   добавлены новые свойства для `TabItem`
-   `TabsController` теперь deprecated. Для подключения клавиатурной навигации необходимо дополнительно прокинуть свойства `index, itemIndex, onIndexChange`.

feat(plasma-web, plasma-b2c): Tabs refactor and redesign (https://github.com/salute-developers/plasma/pull/983)

### Avatar & AvatarGroup

-   Упрощен функционал аватара
-   Avatar и AvatarGroup были добавлены в web, b2c

feat(plasma-new-hope, plasma-web, plasma-b2c): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/1036)

### Combobox

-   добавлен компонент `Combobox` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web, а также в `@salutejs/plasma-b2c` и `@salutejs/plasma-web`

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

-   обновлены шрифты SBSans Display для CDN

## Infra

### Plasma-web-docs

-   обновлен пакет `docusaurus` и все что с ним связано до `@latest` версии
-   исправлены **все** уязвимости в пакете `plasma-web-docs`

plasma-infra: Bump `Docusaurus` to latest [plasma-web-docs](https://github.com/salute-developers/plasma/pull/1025)

### Plasma-ui-docs

-   обновлен пакет `docusaurus` и все что с ним связано до `@latest` версии
-   исправлены **все** уязвимости в пакете `plasma-ui-docs`

plasma-infra: Bump `Docusaurus` to latest [plasma-ui-docs](https://github.com/salute-developers/plasma/pull/1026)

### DEV Stage

-   добавлен dev stage для возможности сделать deploy dev branch. Нужен для QA

plasma-infra: Setup s3 DEV stage – manual run (https://github.com/salute-developers/plasma/pull/1029)

### Fonts

-   обновлены шрифты для документации, storybook , тестов

chore: update sb fonts (https://github.com/salute-developers/plasma/pull/1041)

## Misc

### Сборка без `styled-components`

-   добавили возможность использовать `plasma-{web,b2c}` без `styled-components`

Пример использования:

```js
import { TextArea } from @salutejs/plasma-web/css;
```

plasma-web/plasma-b2c: Добавлена сборка без styled-components (https://github.com/salute-developers/plasma/pull/942)

### SDDS SRVC

-   добавлена библиотека sdds-srvc
-   поднят storybook в рамках pull request
-   опубликован npm пакет
-   добавлена Typography (в виде компонентов как старого, так и нового формата)
-   добавлены компоненты: Button, Checkbox, Dropdown, Link, Modal, Popup, Radiobox, Segment, Spinner, Switch

feat(sdds-srvc): add sdds srvc package (https://github.com/salute-developers/plasma/pull/1023)

### Caldera

-   добавлена библиотека Caldera
-   поднят storybook в рамках pull request
-   опубликован npm пакет
-   добавлена Typography (в виде компонентов как старого, так и нового формата)
-   добавлены компоненты: Button, Checkbox, Dropdown, Link, ModalBase, PopupBase, Radiobox, Segment, Spinner, Switch

feat(caldera): add Caldera package (https://github.com/salute-developers/plasma/pull/990)

### Caldera-online

-   добавлена библиотека Caldera-online
-   поднят storybook в рамках pull request
-   опубликован npm пакет
-   добавлена Typography (в виде компонентов как старого, так и нового формата)
-   добавлены компоненты: Button, Checkbox, Dropdown, Link, ModalBase, PopupBase, Radiobox, Segment, Spinner, Switch

feat(caldera): add caldera online package (https://github.com/salute-developers/plasma/pull/1012)

---

#### 🚀 Enhancement

-   Release by 14.02.2024 [#1047](https://github.com/salute-developers/plasma/pull/1047) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yeti-or](https://github.com/Yeti-or) [@luizasok](https://github.com/luizasok) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Combobox` config for plasma_web ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Combobox` config for plasma_b2c ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Combobox` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add some improvements for `Select` and `Dropdown` components ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-web, b2c): Added documentation for Avatar and AvatarGroup [#1036](https://github.com/salute-developers/plasma/pull/1036) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): Classnames fixes ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-new-hope): Action icon is removed ([@shuga2704](https://github.com/shuga2704))
-   fix(plasma-new-hope): add key navigation to Tabs [#983](https://github.com/salute-developers/plasma/pull/983) ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): Tabs redesign ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): add Overlay component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(new-hope): add "onChangeStartOfRange" prop ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-new-hope): add SSRProvider ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update fonts for storybook ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope, web, b2c): Insignificant improvements in Avatar.stories ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-web, plasma-b2c): Populated AvatarGroup into web, b2c ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-web, plasma-b2c): Populated Avatar into web, b2c ([@shuga2704](https://github.com/shuga2704))
-   fix(plasma-web, plasma-b2c): fix default Tabs sizes ([@kayman233](https://github.com/kayman233))
-   fix(plasma-new-hope): remove carousel and observers from Tabs ([@kayman233](https://github.com/kayman233))
-   fix(plasma-web, plasma-b2c): height, arrows design fixes ([@kayman233](https://github.com/kayman233))
-   fix(plasma-new-hope): backward compatibility support ([@kayman233](https://github.com/kayman233))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Luiza_Sok ([@luizasok](https://github.com/luizasok))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.41.0 (Thu Feb 01 2024)

### Release Notes

#### Release by 31.01.2024 ([#1020](https://github.com/salute-developers/plasma/pull/1020))

## Components

### Modal

-   поправлена генерация id для `Modal, Popup`
-   добавлены тесты для `Modal, Popup`

plasma-new-hope: fix id generation for Modal, Popup (https://github.com/salute-developers/plasma/pull/1001)

### Avatar и Avatar Group

-   добавлены компоненты Avatar и AvatarGroup
-   Временно добавлен полифил `focus-visible` в linaria.tsx

feat(plasma-new-hope): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/962)

### Select

-   добавлен компонент `Select` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web
-   добавлена клавиатурная навигация со следующими комбинациями:
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

-   добавлены новые иконки и изменена структура файлов старых в библиотеку `@salutejs/plasma-new-hope`

### Button

-   добавлены токены для компонента `Button`, регулирующие высоту и scale при hover и active состояниях #706
-   исправлен баг, при котором у компонента `Button` будет отсутствовать бэкграунд в состоянии disabled и при hover'е

### Checkbox, Radiobox

-   добавлены токены для компонент `Checkbox`, `Radiobox`, отвечающие за отступы

### Chip

-   добавлен токен для компонента `Chip`, отвечающий за цвет иконки закрытия

### Dropdown

-   добавлена поддержка react-компонент в props `contentLeft` и `contentRight`
-   убрано свойство isNested, т.к. теперь можно вкладывать Dropdown друг в друга без него

feat(plasma-new-hope): Add `Select` component (https://github.com/salute-developers/plasma/pull/956)

### Toast

-   добавлен компонент Toast в новой архитектуре
-   добавлен в поставку в b2c/web
-   обновлены тесты
-   обновлена документация

feat(plasma-new-hope/web/b2c): toast refactor & redesign (https://github.com/salute-developers/plasma/pull/1010)

### TextArea

-   добавлена поддержка переноса строки для свойства `placeholder`;
-   исправлено поведение компонента при использовании свойств `defaultValue` и `placeholder`.

fix(plasma-new-hope): Fixes for `TextArea` component (https://github.com/salute-developers/plasma/pull/1017)

## Icons

### Hotfix

-   поправлена публикация пакета со всем содержимым билда

fix(plasma-icons): fix package publish (https://github.com/salute-developers/plasma/pull/989)

## Infra

### Workflow for `dev` branch

-   добавлен отдельный workflow для **безусловной** сборки документация и storybook на основе dev ветки

plasma-infra(documentation): Add documentation workflow for dev branch (https://github.com/salute-developers/plasma/pull/996)

### Коллаборативный прогон [Perftool]

-   добавлен коллаборативный прогон (прогон одновременно двух веток в рамках одного процесса)

ci: use perftool collaborative mode (https://github.com/salute-developers/plasma/pull/991)

### Override `lerna ls`

-   переопределили логику `ignoreChanges` для команды `lerna ls` чтобы изменения файлов `*.component-test.tsx` тоже учитывалось

plasma-infra: Override `lerna ls` config (https://github.com/salute-developers/plasma/pull/995)

### Mattermost notifications

-   добавлено уведомление для упавшего процесса публикации релиз кандидата

plasma-infra: Add notification when publish failed (https://github.com/salute-developers/plasma/pull/935)

### Release pull request

-   добавлен выбор ветки для создания release pull request

plasma-infra: Refactoring release pull request workflow (https://github.com/salute-developers/plasma/pull/1007)

### Versionate docs

-   вынесли этот процесс в отдельный, от публикация релиза, workflow.

plasma-infra: Move the `versionate_docs` job to a separate workflow (https://github.com/salute-developers/plasma/pull/1006)

### Perftool

-   убиран verbose loglevel в `perftool`

Remove perftool max log verbosity (https://github.com/salute-developers/plasma/pull/1004)

## Misc

### Storybook

-   поправлено отображение примера Popup в storybook

chore: fix Popup storybook example (https://github.com/salute-developers/plasma/pull/997)

---

#### 🚀 Enhancement

-   Release by 31.01.2024 [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@luizasok](https://github.com/luizasok) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv) [@nikewht](https://github.com/nikewht) [@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): add Toast with new architecture ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Add support usePortal for `Select` component [#956](https://github.com/salute-developers/plasma/pull/956) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add keyboard navigation for `Select` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Select` config for plasm_web ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Select` config for plasma_b2c ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Select` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Update and refactor `Dropdown` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add color icon close tokens to `Chip` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-\*): Add margin tokens to `Radiobox` component and update configs ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-\*): Add margin tokens to `Checkbox` component and update configs ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add and refactoring icons ([@neretin-trike](https://github.com/neretin-trike))
-   feat(new-hope): add Avatar, AvatarGroup [#962](https://github.com/salute-developers/plasma/pull/962) ([@nikewht](https://github.com/nikewht))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-01-31 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): Update behavior with defaultValue for `TextArea` component [#1017](https://github.com/salute-developers/plasma/pull/1017) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): Add wrapping to placeholder for `TextArea` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope,-asdk): Add scale tokens to `Button` component ([@neretin-trike](https://github.com/neretin-trike))
-   chore: fix Popup storybook example [#997](https://github.com/salute-developers/plasma/pull/997) ([@kayman233](https://github.com/kayman233))
-   fix(plasma-new-hope): fix id generation for Modal, Popup [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@kayman233](https://github.com/kayman233))

#### Authors: 8

-   [@kayman233](https://github.com/kayman233)
-   [@nikewht](https://github.com/nikewht)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Luiza_Sok ([@luizasok](https://github.com/luizasok))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.35.0 (Thu Jan 18 2024)

### Release Notes

#### Release by 18.01.2024 ([#981](https://github.com/salute-developers/plasma/pull/981))

## Components

### Carousel

-   добавлен пропс `scrollSnapStop` в `Carousel`

feat(plasma-core): Add new prop (scrollSnapStop) to the Carousel component (https://github.com/salute-developers/plasma/pull/940)

### Skeleton

-   добавлен компонент в новой архитектуре
-   включен в поставку b2c/web
-   удален из plasma-hope
-   написаны тесты
-   поправлен компонент Button для использования в styled

feat(plasma-new-hope/b2c/web): add skeleton with new architecture (https://github.com/salute-developers/plasma/pull/954)

### Skeleton

-   добавлены размеры под новую типографику

feat(plasma-b2c/web): add skeleton new typography sizes (https://github.com/salute-developers/plasma/pull/960)

### Header

-   добавлен prop, который позволяет применять mediaQuery для S-viewport по условию
-   добавлен тест на данный кейс

feat(plasma-ui): add property to show/hide subtitle on S viewport (https://github.com/salute-developers/plasma/pull/958)

### Popover arrow

-   Поправлено отображение `Popover arrow` в Safari, Firefox

fix(plasma-web): fix Popover arrow in Safari, Firefox (https://github.com/salute-developers/plasma/pull/963)

### Image

-   добавлен в поставку `plasma-{b2c, web}`
-   добавлен UI тесты
-   удален из `plasma-hope`

feat(plasma-new-hope/web/b2c): Image refactor & redesign (https://github.com/salute-developers/plasma/pull/968)

### Badge

-   добавлен в поставку `plasma-{b2c,web,new-hope}`
-   дополнены тесты

feat(plasma-new-hope/web/b2c): Badge refactor & redesign (https://github.com/salute-developers/plasma/pull/964)

### Counter

-   добавлен в поставку `plasma-{b2c,web,new-hope}`
-   написаны тесты и документация

feat(plasma-new-hope/web/b2c): Counter component (https://github.com/salute-developers/plasma/pull/965)

## Icons

-   добавлены **новые** иконки размера 24x24, 1025 штук
-   добавлены **новые** категории иконок в разделе icons на сайте

feat(plasma-icons): Add new 24x24 icons (https://github.com/salute-developers/plasma/pull/955)

## Infra

### Perftool

-   обновление версии @salutejs/perftool@0.24

Update perftool (https://github.com/salute-developers/plasma/pull/932)

### @Auto-it CLI

-   добавлена возможность прокинуть опции/флаги для запуска - **auto shipit**;
-   выключили генерацию changelog для pubslish: canary, RC;

plasma-infra: Pass cli options for "@auto-it" (https://github.com/salute-developers/plasma/pull/890)

### Changelog workflow

-   добавлена новая категория `Bugs`
-   экранирование спец символов

plasma-infra: Improve changelog workflow (https://github.com/salute-developers/plasma/pull/967)

## Tokens

### Tokens naming

-   изменена нотация с `camelCase` на `kebab-case` для старых токенов цветов и типографики

Было:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 54" src="https://github.com/salute-developers/plasma/assets/26903236/b83f776b-e4f9-43e1-9506-bff3d25f7e71">

Стало:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 17" src="https://github.com/salute-developers/plasma/assets/26903236/10298375-1a54-4dd4-8fe3-8af74c3e40b1">

feat(plasma-tokens-utils): Update formatting tokens name from camelCase to kebab-case (https://github.com/salute-developers/plasma/pull/971)

## Bugs

### Calendar

-   добавлен `ref` в `forwardRef` вторым аргументом

feat(plasma-new-hope): fix CalendarDouble ref (https://github.com/salute-developers/plasma/pull/959)

### Carousel

-   решен баг с пролистыванием (onDragScroll) в accessible mode - mobile & desktop.
-   control panel в карусели работает корректно (можно выбрать scrollAlign).

fix(plasma-hope/plasma-web): Turn onDragScroll off by default in accessibility mode in Carousel. Fix storybook control panel in it. (https://github.com/salute-developers/plasma/pull/957)

### Spinner

-   исправлено отображение компонента `Spinner` при размере 8px

fix(plasma-new-hope): Fix size for `Spinner` component (https://github.com/salute-developers/plasma/pull/966)

## Misc

### Typography

-   root для типографики вынесен в общий компонент
-   className, style теперь явно задаются в компоненте
-   исправлены конфиги для asdk поставки

feat(plasma-new-hope/b2c/web): redefining classnames for typography (https://github.com/salute-developers/plasma/pull/947)

---

#### 🚀 Enhancement

-   Release by 18.01.2024 [#981](https://github.com/salute-developers/plasma/pull/981) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): add Counter component ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope/web/b2c): remove QuantityBadge [#964](https://github.com/salute-developers/plasma/pull/964) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Badge with new architecture ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-web/b2c/new-hope): add Image in new architecture ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix Button className and style passing ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add Skeleton components ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix CalendarDouble ref [#959](https://github.com/salute-developers/plasma/pull/959) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-asdk): fix typography configs [#947](https://github.com/salute-developers/plasma/pull/947) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor typography root ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix typography for new-hope ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into t1 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): Add flex to warpper in `Spinner` component [#966](https://github.com/salute-developers/plasma/pull/966) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-web): fix Popover arrow in Safari, Firefox [#963](https://github.com/salute-developers/plasma/pull/963) ([@kayman233](https://github.com/kayman233))
-   chore: manual package.lock bump ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### Authors: 7

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.27.0 (Mon Dec 25 2023)

#### 🚀 Enhancement

-   hot-fix(plasma-new-hope): redefining classnames for typography [#951](https://github.com/salute-developers/plasma/pull/951) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-asdk): fix typography configs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor typography root ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): fix typography for new-hope ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): remove useEffect from typography [#946](https://github.com/salute-developers/plasma/pull/946) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   chore: manual package.lock bump ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.26.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

-   Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
-   feat: Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-new-hope): add stretch prop for segment ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope/web/b2c): remove extra views for SegmentItem ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): unite selectedView & view props for SegmentItem ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): separate configs for segment ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add view control from SegmentProvider ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add segment stories in example ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add segment item ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): make dspl and h bold by default ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): implement addFocus mixin in button ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-\*): Update config for `Link` component ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): fix Notification layout with long text [#927](https://github.com/salute-developers/plasma/pull/927) ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): Notification redesign ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): revert button tag for root [#896](https://github.com/salute-developers/plasma/pull/896) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add comments for button types ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): refactor & add stretch/pin props ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): fix underline uppercase ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): fix aply hypens selector ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-new-hope): Fix `TextArea` behavior with uncontrolled value ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-\*): Add sizes for `Link` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-b2c,plasma-web): Update configs for components with new design ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): Add support children props to `Tooltip` component [#937](https://github.com/salute-developers/plasma/pull/937) ([@neretin-trike](https://github.com/neretin-trike))
-   chore(vite): bump to 4.5.1 ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-web, plasma-b2c): redesign Notification ([@kayman233](https://github.com/kayman233))

#### Authors: 5

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.21.0 (Thu Dec 14 2023)

### Release Notes

#### Release by 14.12.2023 ([#925](https://github.com/salute-developers/plasma/pull/925))

## Components

### Tabs

-   вынесены токены в отдельный файл
-   исправлен конфиг
-   убрана вариация active

plasma-new-hope: Refactoring tabs tokens, variations, config (https://github.com/salute-developers/plasma/pull/873)

### AddFocus

-   добавлен общий mixin addFocus(на него переведены компоненты: **Chip, Checkbox, Radiobox, Calendar** )

plasma-(new-hope, asdk): Add focus mixin (https://github.com/salute-developers/plasma/pull/888)

### Header

Для plasma-{new-hope,asdk}

-   добавлен компонент **Header**, в качестве составных компонента (HeaderLogo, HeaderArrow, etc.)
-   добавлен mixin **mediaQuery**

feat(plasma-new-hope): Add header as separate components (https://github.com/salute-developers/plasma/pull/887)

### Tooltip

-   добавлен `Tooltip` с новым дизайном и API (для `plasma-{web,b2c,new-hope}`)

plasma-new-hope: Add tooltip (https://github.com/salute-developers/plasma/pull/879)

### Switch

-   добавлена реализация на новой архитектуре для plasma-{new-hope, web, asdk}

feat(new-hope): switch (https://github.com/salute-developers/plasma/pull/816)

## Infra

### Upload assets when publish canary, latest

-   добавили условие при котором происходит загрузка assets

plasma-infra: Handling upload-assets (https://github.com/salute-developers/plasma/pull/882)

### Actions/setup-node

-   зафиксировали версию Node.js (18.16.1) для корректной работы в CI

plasma-infra: Use 18.16.1 node version (https://github.com/salute-developers/plasma/pull/904)

### Upload assets when publish RC

-   переопределена логика получения commit для правильного условия загрузки assets в момент публикации RC

plasma-infra: Upload assets when publish rc (https://github.com/salute-developers/plasma/pull/892)

### Auto generate changelog [CI]

-   добавлен workflow для ручного запуска создания PR релиза
-   автоматизирован процесс создания changelog на основе merged prs и labels

plasma-infra: Automation of the release process (https://github.com/salute-developers/plasma/pull/894)

### Storybook

-   добавлен новый location в "https://plasma.sberdevices.ru/asdk-storybook/" (plasma-ASDK)

plasma-infra: Add storybook for "Plasma-ASDK" (https://github.com/salute-developers/plasma/pull/908)

## Tokens

### Theme builder

-   В генератор файлов темы добавлены метод, который восстанавливает значение цвета из ссылки, т.е. переведёт: **[general.red.500] => #FF293E**
-   Добавлена генерация токенов цвета в kebab нотации

fix(plasma-theme-builder): Add restored color method for generate themes (https://github.com/salute-developers/plasma/pull/899)

---

#### 🚀 Enhancement

-   Release by 14.12.2023 [#925](https://github.com/salute-developers/plasma/pull/925) ([@nikewht](https://github.com/nikewht) [@Yakutoc](https://github.com/Yakutoc) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike) nikita.belyanskiy@south.rt.ru [@Yeti-or](https://github.com/Yeti-or))
-   feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-new-hope): Switch add labelPosition ([@Yeti-or](https://github.com/Yeti-or))
-   feat(plasma-web): Replace from plasma-new-hope ([@Yeti-or](https://github.com/Yeti-or))
-   feat(plasma-new-hope): Add core Switch component (nikita.belyanskiy@south.rt.ru)
-   fix(plasma-new-hope): fix tokens usage in Tooltip [#879](https://github.com/salute-developers/plasma/pull/879) ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): Tooltip added ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): remove media-query from root [#887](https://github.com/salute-developers/plasma/pull/887) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-asdk/new-hope): move tokens for button in token file ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add header as separate components ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): replace local addFocus on general in calendar [#888](https://github.com/salute-developers/plasma/pull/888) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): replace local addFocus on general in chip ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): replace local addFocus on general in radiobox ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): replace local addFocus on general ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add general addFocusMixin ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   refactor(plasma-new-hope): sds: rewrite Switch ([@Yeti-or](https://github.com/Yeti-or))
-   refactor(plasma-new-hope): rewrite Switch ([@Yeti-or](https://github.com/Yeti-or))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): Tooltip, Popover, Dropdown refactor ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope, plasma-web, plasma-b2c): Tooltip added ([@kayman233](https://github.com/kayman233))
-   chore: update package locks [#916](https://github.com/salute-developers/plasma/pull/916) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   refactor(new-hope): tokens, variations, config [#873](https://github.com/salute-developers/plasma/pull/873) ([@nikewht](https://github.com/nikewht))
-   chore: update package-locks \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

-   [@kayman233](https://github.com/kayman233)
-   [@nikewht](https://github.com/nikewht)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.17.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

-   Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
-   feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   feat(plasma-new-hope): Add `TextArea` component with new design and tokens for sds_engineer ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `TextArea` component with new design and tokens for plasma-web ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `TextArea` component with new design and tokens for plasma-b2c ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add core `TextArea` component ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope-b2c/web): add close icon size token [#867](https://github.com/salute-developers/plasma/pull/867) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope/b2c/web): add readonly as attribute & remove hasClear prop ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-b2c): add chip from new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add chip ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Add Dropdown [#854](https://github.com/salute-developers/plasma/pull/854) ([@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope, plasms-web, plasma-b2c): fix title font for Notification [#848](https://github.com/salute-developers/plasma/pull/848) ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): Notification added ([@kayman233](https://github.com/kayman233))
-   feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore(plasma-new-hope): add sb-utils package ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): import fix [#862](https://github.com/salute-developers/plasma/pull/862) ([@kayman233](https://github.com/kayman233))
-   chore(plasma-new-hope): downgrade "@types/styled-components" to 5.1.0 [#865](https://github.com/salute-developers/plasma/pull/865) ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-new-hope): bump "default-browser-id" to 2.0.0 [#861](https://github.com/salute-developers/plasma/pull/861) ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-new-hope): fix vulnerabilities: high, critical ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-new-hope): bump "vite" to 4.5.0 ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.13.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

-   Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
-   feat: manual update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-web, plasma-b2c): fix NoScroll behavior in ModalBase [#828](https://github.com/salute-developers/plasma/pull/828) ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): Modal added ([@kayman233](https://github.com/kayman233))
-   feat: bump TS to 4.2.4 ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-new-hope/asdk): add plasma-asdk & add typography ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add focus visible dependency [#821](https://github.com/salute-developers/plasma/pull/821) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): separate typography tokens & refactor folder structure ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): add plasma-tokens to deps ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): separate classes & tokens ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-web/b2c): add calendar with new architecture ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope): Add calendar ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): fix no scroll in Modal ([@kayman233](https://github.com/kayman233))
-   fix(plasma-new-hope): remove styled-components from Modal ([@kayman233](https://github.com/kayman233))
-   feat(plasma-web, plasma-b2c): ModalBase, PopupBase on new-hope ([@kayman233](https://github.com/kayman233))
-   chore(new-hope): bump `@linaria` deps [#845](https://github.com/salute-developers/plasma/pull/845) ([@Yakutoc](https://github.com/Yakutoc))
-   chore(new-hope): resolved "No longer inferring default values of args" ([@Yakutoc](https://github.com/Yakutoc))
-   chore: delete unnecessary options ([@Yakutoc](https://github.com/Yakutoc))
-   chore: bump storybook to @latest (7.5.3) ([@Yakutoc](https://github.com/Yakutoc))
-   chore(new-hope): migrate main.js for storybook@latest ([@Yakutoc](https://github.com/Yakutoc))
-   chore(new-hope): migrate `preview.ts` for storybook@latest ([@Yakutoc](https://github.com/Yakutoc))
-   chore(new-hope): migrate to CSF 3 [typography](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(new-hope): migrate to CSF 3 [sds_engineer](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(new-hope): migrate to CSF 3 [plasma-web](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore(new-hope): migrate to CSF 3 [plasma-b2c](<[@Yakutoc](https://github.com/Yakutoc)>)
-   chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.9.0 (Thu Nov 02 2023)

#### 🚀 Enhancement

-   Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
-   feat(plasma-new-hope): add Tabs export ([@nikewht](https://github.com/nikewht))
-   feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-new-hope): new classes API for Popup [#819](https://github.com/salute-developers/plasma/pull/819) ([@kayman233](https://github.com/kayman233))
-   feat(plasma-new-hope): Popup added ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

-   chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

-   [@kayman233](https://github.com/kayman233)
-   [@nikewht](https://github.com/nikewht)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.6.0 (Thu Oct 19 2023)

#### 🚀 Enhancement

-   Release 19.10.2023 [#815](https://github.com/salute-developers/plasma/pull/815) ([@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Yakutoc](https://github.com/Yakutoc) nikita.belyanskiy@south.rt.ru [@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add core Tabs component (nikita.belyanskiy@south.rt.ru)
-   feat(plasma-new-hope): extend button types ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-new-hope/b2c/web/core): Add Popover to new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   chore(plasma-new-hope): resolve potential conflict by master branch ([@Yakutoc](https://github.com/Yakutoc))
-   fix(plasma-new-hope): add types to Tabs & TabItem, fix css tokens naming (nikita.belyanskiy@south.rt.ru)
-   fix(plasma-new-hope): delete unused code (nikita.belyanskiy@south.rt.ru)
-   fix(plasma-new-hope): Fixes related to Tabs component (nikita.belyanskiy@south.rt.ru)
-   ci: Enable "New hope" storybook ([@Yakutoc](https://github.com/Yakutoc))
-   chore(plasma-new-hope): remove plasma-old theme ([@Yeti-or](https://github.com/Yeti-or))
-   chore(plasma-new-hope): add sds_engineer theme ([@Yeti-or](https://github.com/Yeti-or))
-   chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

-   [@kayman233](https://github.com/kayman233)
-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.5.1 (Fri Oct 06 2023)

### Release Notes

#### fix(plasma-new-hope): cjs build ([#797](https://github.com/salute-developers/plasma/pull/797))

Hotfix: https://github.com/salute-developers/plasma/pull/796

---

#### 🐛 Bug Fix

-   fix(plasma-new-hope): cjs build [#797](https://github.com/salute-developers/plasma/pull/797) ([@Yeti-or](https://github.com/Yeti-or) [@neretin-trike](https://github.com/neretin-trike))
-   fix(plasma-new-hope): cjs build ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.5.0 (Fri Sep 29 2023)

#### 🚀 Enhancement

-   feat(plasma-new-hope): Add `Radiobox` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add core `Radiobox` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Checkbox` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add core `Checkbox` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add wrapper for layout with default props [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Spinner` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Update `Button` component with new design and tokens themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add `Link` component with new design and tokens themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add core `Link` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): Add typing for engines [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope): 🚀 boostrap && init [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

-   chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
-   fix(plasma-new-hope): Update hover and active colors for tertiary and paragraph tokens in themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
-   feat(plasma-new-hope,plasma-core): Add core `Spinner` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))
-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
