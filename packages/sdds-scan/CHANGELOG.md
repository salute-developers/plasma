## 0.322.0 (18 сентября 2025)

## Функциональные изменения в компонентах

### Drawer

* исправлен баг, при котором `unmount` компонента не очищал свойство `overflow` у `body`;

[PR](https://github.com/salute-developers/plasma/pull/2208)

* добавлена возможность задавать кастомные анимации в компоненте

[PR](https://github.com/salute-developers/plasma/pull/2222)

### Autocomplete

* добавлен дженерик для гибкой настройки `SuggestionItem`;

[PR](https://github.com/salute-developers/plasma/pull/2211)

### Dropdown

* в коллбэк `onHover` добавлен вторым аргументом `item` наведенного элемента;

[PR](https://github.com/salute-developers/plasma/pull/2212)

### Select, Combobox

* добавлено свойство `mode` со значениями `default` и `radio`;

[PR](https://github.com/salute-developers/plasma/pull/2213)

### Engine

* добавлена проверка свойств на nullable значения. Например если значение для свойства типа `view` или `size` будет указано, как `undefined`, то применится значение по-умолчанию, взятое из конфигурации компонента.

[PR](https://github.com/salute-developers/plasma/pull/2202)

### CodeField

* добавлена поддержка чтения OTP из смс

* исправлен `controlled` вариант компонента

[PR](https://github.com/salute-developers/plasma/pull/2210)

### Combobox, Select

* переработана логика работы с disabled-элементами. Теперь взаимодействие с ними изнутри компонента невозможно;

[PR](https://github.com/salute-developers/plasma/pull/2220)

* при закрытии выпадающего списка происходит скролл всех чипов в начало.

[PR](https://github.com/salute-developers/plasma/pull/2231)

### Combobox, Select, Dropdown

* разработан функционал, позволяющий корректно позиционировать вложенные выпадающие списки в контейнерах со скроллом;

[PR](https://github.com/salute-developers/plasma/pull/2205)

### Range

* добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/2227)

### DatePicker

* удален автофокус инпута при закрытии выпадающего календаря
* исправлен вызов `callback` внутри `onBlur`

[PR](https://github.com/salute-developers/plasma/pull/2216)

### Popover

* исправлена генерация `id` портала

[PR](https://github.com/salute-developers/plasma/pull/2216)

### Pagination

* Добавлен пропс `helperText`

[PR](https://github.com/salute-developers/plasma/pull/2163)

### Switch

* Добавлен новый параметр `singleLine`, который влияет на перенос строки текста `label`

[PR](https://github.com/salute-developers/plasma/pull/2224)

### Tree

* добавлен DragAndDrop

[PR](https://github.com/salute-developers/plasma/pull/2214)

### Attach

* добавлен обработчик `onClick`

* добавлена возможность скрывать кнопку после прикрепления файла, с помощью `hideButtonOnAttach`

[PR](https://github.com/salute-developers/plasma/pull/2228)

### Avatar

* Добавлен новый параметр `shape`

* Обновлены тесты и документация

[PR](https://github.com/salute-developers/plasma/pull/2209)

### Skeleton

* Добавлено новое значение для `view` - `lighter`

[PR](https://github.com/salute-developers/plasma/pull/2238)


## 0.321.0 (4 сентября 2025)

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


## 0.320.0 (21 августа 2025)

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


## 0.318.0 (7 августа 2025)

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


## 0.317.2 (30 июля 2025)

## Функциональные изменения в компонентах

### TextArea

* Сделали свойство `labelAriaHidden` опциональным


## 0.317.1 (28 июля 2025)

## Функциональные изменения в компонентах

### Combobox

* исправлен баг, связанный с невозможностью получить актуальное значение поля ввода после ререндера;


## 0.317.0 (24 июля 2025)

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


## 0.315.0 (10 июля 2025)

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


## 0.313.0 (26 июня 2025)

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


## 0.312.0 (11 июня 2025)

## Функциональные изменения в компонентах

### Select, Combobox

* добавлена возможность использовать кнопку `Выбрать всё` внутри выпадающего списка;

![Kapture 2025-06-11 at 11 52 38](https://github.com/user-attachments/assets/95108fe4-29ec-486d-a964-b5340748ad04)

[PR](https://github.com/salute-developers/plasma/pull/1986)

### Popover

* добавлена обработка случая, когда frame передан как ID

[PR](https://github.com/salute-developers/plasma/pull/2001)

### Sheet

* добавлена проверка `canUseDOM` перед использованием document

[PR](https://github.com/salute-developers/plasma/pull/2014)

### DatePicker

* добавлено свойство `closeAfterDateSelect` в одиночный DatePicker

![Kapture 2025-06-11 at 12 47 51](https://github.com/user-attachments/assets/f7751193-9316-4e5c-9111-2b8590fd42d9)

[PR](https://github.com/salute-developers/plasma/pull/2012)

### Notification

* добавлен `type-cast` для корректной типизации

<img width="977" alt="image" src="https://github.com/user-attachments/assets/99858965-49ff-4fc0-bec9-b3f79d2fa965" />

[PR](https://github.com/salute-developers/plasma/pull/2015)

### Carousel

* добавлена элементы управления: пагинация, стрелочки

![Kapture 2025-06-11 at 11 28 34](https://github.com/user-attachments/assets/5ace4ec0-3ed6-4556-bf94-ec8abb2d7798)

[PR](https://github.com/salute-developers/plasma/pull/2013)


## 0.311.0 (29 мая 2025)

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


