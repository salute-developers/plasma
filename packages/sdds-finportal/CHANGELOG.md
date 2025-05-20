## 0.302.1 (20 мая 2025)

## Функциональные изменения в компонентах

### NumberFormat

-   исправлено использование `ref`

## 0.302.0 (15 мая 2025)

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

## 0.301.0 (30 апреля 2025)

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

## 0.300.0 (17 апреля 2025)

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

## 0.299.0 (3 апреля 2025)

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

## 0.289.0 (20 марта 2025)

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

## 0.270.0 (6 марта 2025)

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

## Изменения в библиотеки

### applyPaper

-   Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы sdds_finportal:
    -   backgroundColor - отвечает за цвет подложки в котором можно выбрать токены цветов и градиентов;
    -   borderRadius - отвечает за скругление углов блока;
    -   shadow - отвечает за применение стилей теней для блока;
    -   styles - отвечает за все доступные css свойства.

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

## 0.252.0 (20 февраля 2025)

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

## 0.237.0 (6 февраля 2025)

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

## Изменения в библиотеки

### Divider

-   актуализирован согласно макетам

[PR](https://github.com/salute-developers/plasma/pull/1725)

### Badge

-   исправлен `margin` у `contentLeft` и `contentRight`

[PR](https://github.com/salute-developers/plasma/pull/1728)

-   токены приведены в соответствие с макетом

[PR](https://github.com/salute-developers/plasma/pull/1733)

## 0.224.0 (23 января 2025)

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

## 0.212.0 (26 декабря 2024)

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

## 0.195.0 (12 декабря 2024)

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

# v0.180.0 (Thu Nov 28 2024)

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
-   chore(finportal): add draft config [Badge][#1581](https://github.com/salute-developers/plasma/pull/1581) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(plasma-_, sdds-_): Switch track and thumb tokens improved ([@denivladislav](https://github.com/denivladislav))
-   feat(plasma-_, sdds-_): Add chipType prop in Select [#1577](https://github.com/salute-developers/plasma/pull/1577) ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add chipType props in TextField ([@shuga2704](https://github.com/shuga2704))
-   feat(plasma-_, sdds-_): Add required functionality [#1561](https://github.com/salute-developers/plasma/pull/1561) ([@shuga2704](https://github.com/shuga2704))
-   chore(finportal): Handle build flag "IS_DRAFT" in storybook ([@Yakutoc](https://github.com/Yakutoc))
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

# v0.167.0 (Thu Nov 14 2024)

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

# v0.154.0 (Thu Oct 31 2024)

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

# v0.142.0 (Thu Oct 17 2024)

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
-   docs: regenerate api reports [#1478](https://github.com/salute-developers/plasma/pull/1478) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   test(plasma-\*): update Toast tests ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   fix(plasma-_,sdds-_): fix Toast background token ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   chore(): added width and height to Tabs storybooks [#1476](https://github.com/salute-developers/plasma/pull/1476) ([@denivladislav](https://github.com/denivladislav))
-   docs(): api reports regenerated [#1374](https://github.com/salute-developers/plasma/pull/1374) ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-new-hope): fix tokens, styles and typos ([@denivladislav](https://github.com/denivladislav))
-   chore(plasma-_, sdds-_): Tabs ported ([@denivladislav](https://github.com/denivladislav))
-   fix(plasma-_,sdds-_): fix Modal & Popup stories docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_, sdds-_): add scrollbar to TextArea ([@denivladislav](https://github.com/denivladislav))
-   fix: api report update [#1467](https://github.com/salute-developers/plasma/pull/1467) ([@Yakutoc](https://github.com/Yakutoc))
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

# v0.133.0 (Thu Oct 03 2024)

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

# v0.123.0 (Tue Sep 24 2024)

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

# v0.120.0 (Thu Sep 19 2024)

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
-   fix(api-report): update after add TextFieldGroup [#1427](https://github.com/salute-developers/plasma/pull/1427) ([@Yakutoc](https://github.com/Yakutoc))
-   fix(sdds-finportal): add TextFieldGroup component ([@Yakutoc](https://github.com/Yakutoc))
-   fix(sdds-finportal): add TextField/TextArea prop `required` ([@Yakutoc](https://github.com/Yakutoc))
-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
-   Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.112.0 (Tue Sep 10 2024)

#### 🚀 Enhancement

-   plasma-\*: Fix `TextField` placeholder logic [HOTFIX][#1425](https://github.com/salute-developers/plasma/pull/1425) ([@TitanKuzmich](https://github.com/TitanKuzmich))
-   feat(plasma-_/sdds-_): update TextField stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

-   [@Salute-Eva](https://github.com/Salute-Eva)
-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.111.0 (Thu Sep 05 2024)

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
-   feat: update lock file [#1417](https://github.com/salute-developers/plasma/pull/1417) ([@Yakutoc](https://github.com/Yakutoc))
-   feat(sdds-finportal): add package ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

-   Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

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
