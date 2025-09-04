## 0.323.0 (4 сентября 2025)

## Функциональные изменения в компонентах

### Autocomplete

* Добавлен пример очистки поля ввода

[PR](https://github.com/salute-developers/plasma/pull/2165)

* Добавлено опциональное свойство `flip`, при котором выпадающий список при недостатке места снизу может отобразиться вверху;

[PR](https://github.com/salute-developers/plasma/pull/2199)

### Popup

* добавлено свойство `providerFrame`, которое определяет элемент, в который поместится контейнер Popupов

[PR](https://github.com/salute-developers/plasma/pull/2151)

### DatePicker

* добавлена возможность передавать zIndex в выпадающий календарь

[PR](https://github.com/salute-developers/plasma/pull/2181)

* размеры приведены в соответствие с макетами

[PR](https://github.com/salute-developers/plasma/pull/2196)

### Docs

* в документацию добавлен поиск на базе `typesense`

[PR](https://github.com/salute-developers/plasma/pull/2173)

### Autocomplete, Combobox, Select

* виртуализация теперь поддерживает работу с элементами с динамической высотой;

[PR](https://github.com/salute-developers/plasma/pull/2183)

### Carousel

* добавлено свойство `defaultIndex`, которое отвечает за показ первого слайда по-умолчанию;

[PR](https://github.com/salute-developers/plasma/pull/2175)

### Combobox

* свойство `renderValue` теперь работает и в одиночном режиме;

[PR](https://github.com/salute-developers/plasma/pull/2172)

### Tree

* добавлено свойство `radioMode`, включающее поведение выбора элемента как у radio-checkbox;

[PR](https://github.com/salute-developers/plasma/pull/2179)

### Tooltip

* добавлены свойства `mouseEnterDelay` и `mouseLeaveDelay` для задержки перед открытием/закрытием подсказки;

[PR](https://github.com/salute-developers/plasma/pull/2186)

### Tabs

* добавлен `actionContent` в `TabItem`

* добавлен `IconTabItem`

[PR](https://github.com/salute-developers/plasma/pull/2177)

### Chip

* Добавлен размер `xxs` в `chip`

[PR](https://github.com/salute-developers/plasma/pull/2194)

### Attach

* переработана документация компонента

* добавлены примеры взаимодействия с формой

[PR](https://github.com/salute-developers/plasma/pull/2167)

### Drawer

* Добавили поддержку css свойства scrollbar-gutter чтобы предотвратить дергания экрана из-за наличие scrollbar

[PR](https://github.com/salute-developers/plasma/pull/2074)

### Button

* Добавлен новый параметр `AdditionalContent`

[PR](https://github.com/salute-developers/plasma/pull/2195)

### LinkButton

* Добавлен новый параметр `AdditionalContent`

[PR](https://github.com/salute-developers/plasma/pull/2195)


## 0.322.0 (21 августа 2025)

## Функциональные изменения в компонентах

### DatePicker

* добавлено свойство `preserveInvalidOnBlur`, которое отключает сброс некорректных значений из поля ввода

[PR](https://github.com/salute-developers/plasma/pull/2134)

* исправлен `controlled` вариант `DatePicker`

[PR](https://github.com/salute-developers/plasma/pull/2148)

### NumberFormat

* добавлена поддержка `defaultValue`

[PR](https://github.com/salute-developers/plasma/pull/2138)

* добавлена функция `numberFormatter`, которая приводит число к нужному формату

[PR](https://github.com/salute-developers/plasma/pull/2137)

### Pagination

* исправлен `controlled` вариант

[PR](https://github.com/salute-developers/plasma/pull/2141)

* отключено взаимодействие с текущей выбранной страницей;

[PR](https://github.com/salute-developers/plasma/pull/2160)

### NumberInput

* расширен тип `value` до `number | string | undefined` для поддержки пустых значений

[PR](https://github.com/salute-developers/plasma/pull/2135)

### InformationWrapper

* добавлен компонент-обертка для элементов формы

[PR](https://github.com/salute-developers/plasma/pull/2065)

### Dropdown, Combobox

* исправлен баг в свойстве `alwaysOpened`, из-за которого приходилось делать двойные нажатия для открытия дочерних списков;

[PR](https://github.com/salute-developers/plasma/pull/2152)

### Modal, Popup

* исправлен раздел документации связанный со свойством resizable

[PR](https://github.com/salute-developers/plasma/pull/2158)

### Switch

* тип свойства `label` расширен до `ReactNode`

[PR](https://github.com/salute-developers/plasma/pull/2157)

### TextField

* свойства, связанные с `chip` помечены как deprecated;

[PR](https://github.com/salute-developers/plasma/pull/2133)

### Spinner

* свойство size теперь union type и может быть как string, так и number

[PR](https://github.com/salute-developers/plasma/pull/2156)


## 0.320.0 (7 августа 2025)

## Функциональные изменения в компонентах

### EmbedIconButton

* добавлен новый компонент

[PR](https://github.com/salute-developers/plasma/pull/2093)

### Combobox

* исправлен баг, связанный с невозможностью получить актуальное значение поля ввода после ререндера;

[PR](https://github.com/salute-developers/plasma/pull/2101)

### Segment

* добавлена логика задания максимальной ширины `SegmentItem` и обрезанию текста троеточием

[PR](https://github.com/salute-developers/plasma/pull/2110)

### Autocomplete

* добавлено свойство `zIndex`;

[PR](https://github.com/salute-developers/plasma/pull/2114)

### Tree

* добавлено свойство `autoExpandParent`, которое отвечает за автоматическое раскрытие всех родителей у элемента;

[PR](https://github.com/salute-developers/plasma/pull/2115)

### Table

* стало возможным добавлять сложные типы данных (объекты, массивы, функции) во входных данных `data`;

[PR](https://github.com/salute-developers/plasma/pull/2111)

### Chip

* добавлены токены отступов для `contentRight`

[PR](https://github.com/salute-developers/plasma/pull/2112)

### Skeleton

* исправлена типизация пропсов внутри `withSkeleton`

[PR](https://github.com/salute-developers/plasma/pull/2116)

### Notification

* Добавлена возможность указать пользовательскую иконку закрытия компонента

[PR](https://github.com/salute-developers/plasma/pull/2126)

### Attach

* Добавлен новый параметр `customIcon`

* Расширены типы файлов с вшитыми иконками `docx` , `xlsx`

[PR](https://github.com/salute-developers/plasma/pull/2123)

### Tokens

* Добавлена новая палитра `warmGray` с "тёплыми" оттенками серого

[PR](https://github.com/salute-developers/plasma/pull/2127)

### Accordion

* Исправлены отступы в соответсвии с макетами

[PR](https://github.com/salute-developers/plasma/pull/2122)


## 0.319.2 (30 июля 2025)

## Функциональные изменения в компонентах

### TextArea

* Сделали свойство `labelAriaHidden` опциональным


## 0.319.1 (28 июля 2025)

## Функциональные изменения в компонентах

### Combobox

* исправлен баг, связанный с невозможностью получить актуальное значение поля ввода после ререндера;


## 0.319.0 (24 июля 2025)

## Функциональные изменения в компонентах

### Button

* Удалены неактуальные размеры: `xlr, lr, mr, sr, xsr`

[PR](https://github.com/salute-developers/plasma/pull/2079)

### Dropdown

* Добавлен отступ между выпадающим списком и таргетом;

[PR](https://github.com/salute-developers/plasma/pull/2085)

### Icons

* Удален лишний атрибут style со значением `mix-blend-mode` в иконках: `DislikeFill`, `LikeFill`

[PR](https://github.com/salute-developers/plasma/pull/2090)

### Chip

* Исправлен цвет токена для иконки закрытия

[PR](https://github.com/salute-developers/plasma/pull/2082)

* Убраны `scale` при `hover` и `active`

[PR](https://github.com/salute-developers/plasma/pull/2089)

### Heading

* Добавлена поддержка a11y для aria role heading

[PR](https://github.com/salute-developers/plasma/pull/2097)

### Textarea

* Добавлено новое свойство `labelAriaHidden` для управления `aria-hidden`

[PR](https://github.com/salute-developers/plasma/pull/2097)

### Note

* Добавлена документация для свойства `hasClose`

* Исправлен баг связанный со свойством `text`

* Добавлена возможность многострочного текста

[PR](https://github.com/salute-developers/plasma/pull/2098)


## 0.317.0 (10 июля 2025)

## Функциональные изменения в компонентах

### Tour

* Добавлен в поставку новый компонент

![4539d0a6\_Kapture\_2025-06-30\_at\_13 45 01](https://github.com/user-attachments/assets/b6dac64b-0623-4308-a4b2-8a827c5d4d55)

[PR](https://github.com/salute-developers/plasma/pull/2010)

### DatePicker

* Добавлена проверка при обновлении `value/defaultValue`, чтобы избежать коллизии при `mount/unmount`

**Before**:

![460583735-fea399b1-8225-4b39-889b-b332664a4bcc](https://github.com/user-attachments/assets/ae641e2c-1ab8-47b4-8855-4267bb26a7d4)

**After**:
![460583334-2e733867-15fb-4818-97f1-f0c024dc37cb](https://github.com/user-attachments/assets/971cc214-415f-4e53-9984-242e63ba084a)

[PR](https://github.com/salute-developers/plasma/pull/2058)

### useUniqId

* Помечен как deprecated по причине устаревания и не актуальности. Рекомендуем использовать метод `safeUseId`

[PR](https://github.com/salute-developers/plasma/pull/2053)

### NumberFormat

* Улучшен механизм копирование и вставки числа

![459900391-30817797-7211-4d0e-8e4b-799d7fdab2c9](https://github.com/user-attachments/assets/11c52f11-b847-49c1-9a82-4df74bf64ff7)

[PR](https://github.com/salute-developers/plasma/pull/2050)

### Chip

* изменен размер иконки `Close` для размера `XS`, стало `12x12`

[PR](https://github.com/salute-developers/plasma/pull/2070)

### Icons

* добавлен `rest props` для IconRoot. Теперь есть возможность прокинуть `data-attrs` и другие атрибуты тега

<img width="1024" src="https://github.com/user-attachments/assets/ff1831f3-98f9-46df-a874-3c4891ca47b4" />

[PR](https://github.com/salute-developers/plasma/pull/2066)

### Combobox

* Добавлен токен для галочки и иконки в режиме `single`

[PR](https://github.com/salute-developers/plasma/pull/2049)

### Select

* Добавлен токен для галочки и иконки в режиме `single`

[PR](https://github.com/salute-developers/plasma/pull/2049)

### TextArea

* добавлено свойство `headerSlot`

<img width="685" alt="image" src="https://github.com/user-attachments/assets/e092e789-b5ca-4b8e-a500-9f6594dc59ef" />

[PR](https://github.com/salute-developers/plasma/pull/2075)

## Изменения в библиотеки

### Themes

* добавлена поддержка темы `sdds-procom`

* добавлена поддержка темы `sdds-bcp`

[PR](https://github.com/salute-developers/plasma/pull/2060)


## 0.314.0 (26 июня 2025)

## Функциональные изменения в компонентах

### Tree

* исправлен баг, из-за которого в некоторых случаях не отображался цвет выделенного элемента;

[PR](https://github.com/salute-developers/plasma/pull/2038)

### Combobox

* исправлен баг, из-за которого label в таргете не обновлялся при обновлении списка `items`;

[PR](https://github.com/salute-developers/plasma/pull/2043)

### Calendar

* исправлен функционал по формированию ref на элементы календарной сетки
* добавлена возможность динамически менять `type`

**Before**:

https://github.com/user-attachments/assets/45c7c426-6d31-4fb9-bc5f-b20a2f8a4105

**After**:

https://github.com/user-attachments/assets/8a13d0ec-8d8a-4764-8305-7a3dc33887d2

[PR](https://github.com/salute-developers/plasma/pull/2024)

### Popup, Modal, Drawer

* массив элементов контекста Popup заменен на Map

* исправлен импорт safeUseId

[PR](https://github.com/salute-developers/plasma/pull/2022)

### Carousel

* появилась возможно настраивать отступ между слайдами через пропс `gap`;

* незначительные исправления и улучшения;

[PR](https://github.com/salute-developers/plasma/pull/2018)

### CodeInput

* добавлен новый компонент

<img width="764" src="https://github.com/user-attachments/assets/aaf5c046-9229-475f-aa5d-312533d5d5f6" />

[PR](https://github.com/salute-developers/plasma/pull/1973)


