## 0.320.0 (1 октября 2025)

## Функциональные изменения в компонентах

### Autocomplete, Combobox, Datepicker, Select, TextArea, TextField

* изменен token для value на `--text-primary`
* изменен opacity для separator на `0.4`
* изменен opacity для `rightContent` на `0.4`

[PR](https://github.com/salute-developers/plasma/pull/1906)

### Modal

* добавлена возможность отключать `focusTrap`

[PR](https://github.com/salute-developers/plasma/pull/2244)

### Tooltip

* удален лишний `pointer-events` блокирующий click на содержимом компонента

[PR](https://github.com/salute-developers/plasma/pull/2249)

### Note

* исправлена ошибка с некорректным переносом по буквам - правильно по словам

* расширен `type` до ReactNode для свойств `title, text`

[PR](https://github.com/salute-developers/plasma/pull/2247)

### TimePicker

* Добавлен новый компонент

[PR](https://github.com/salute-developers/plasma/pull/2184)

### Pagination

* Убрано ограничение на минимальное количество слотов для элементов

[PR](https://github.com/salute-developers/plasma/pull/2258)

### Dropdown

* добавлена возможность указывать beforeList во вложенные списки

[PR](https://github.com/salute-developers/plasma/pull/2250)

### Tree

* добавлено свойство `singleLine`, отвечающее за перенес заголовка

* исправлено поведение сокращения текста при нехватке места

[PR](https://github.com/salute-developers/plasma/pull/2253)

### TextField, Select, Combobox, Dropdown, Autocomplete

* Исправлен баг с открытием вложенных уровней при использовании свойства `portal`

[PR](https://github.com/salute-developers/plasma/pull/2263)

### Docs

* Исправлено описание для свойства `isNumeric` в типографии

[PR](https://github.com/salute-developers/plasma/pull/2264)

### Avatar

* Добавлен `customBorderRadius` для `fit` размера при `shape = rounded`

[PR](https://github.com/salute-developers/plasma/pull/2262)


## 0.319.1 (19 сентября 2025)

## Функциональные изменения в компонентах

### Avatar

* Исправлен `type` для свойства `shape`

### What/why changed

<!-- GITHUB_RELEASE PR BODY: canary-version -->

<details>
  <summary>📦 Published PR as canary version: <code>Canary Versions</code></summary>
  <br />

:sparkles: Test out this PR locally via:

```bash
npm install @salutejs/plasma-asdk@0.350.1-canary.2246.17847852413.0
npm install @salutejs/plasma-b2c@1.592.1-canary.2246.17847852413.0
npm install @salutejs/plasma-giga@0.319.1-canary.2246.17847852413.0
npm install @salutejs/plasma-new-hope@0.336.1-canary.2246.17847852413.0
npm install @salutejs/plasma-web@1.594.1-canary.2246.17847852413.0
npm install @salutejs/sdds-bizcom@0.324.1-canary.2246.17847852413.0
npm install @salutejs/sdds-crm@0.323.1-canary.2246.17847852413.0
npm install @salutejs/sdds-cs@0.328.1-canary.2246.17847852413.0
npm install @salutejs/sdds-dfa@0.322.1-canary.2246.17847852413.0
npm install @salutejs/sdds-finai@0.315.1-canary.2246.17847852413.0
npm install @salutejs/sdds-insol@0.319.1-canary.2246.17847852413.0
npm install @salutejs/sdds-netology@0.323.1-canary.2246.17847852413.0
npm install @salutejs/sdds-scan@0.322.1-canary.2246.17847852413.0
npm install @salutejs/sdds-serv@0.323.1-canary.2246.17847852413.0
# or 
yarn add @salutejs/plasma-asdk@0.350.1-canary.2246.17847852413.0
yarn add @salutejs/plasma-b2c@1.592.1-canary.2246.17847852413.0
yarn add @salutejs/plasma-giga@0.319.1-canary.2246.17847852413.0
yarn add @salutejs/plasma-new-hope@0.336.1-canary.2246.17847852413.0
yarn add @salutejs/plasma-web@1.594.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-bizcom@0.324.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-crm@0.323.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-cs@0.328.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-dfa@0.322.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-finai@0.315.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-insol@0.319.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-netology@0.323.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-scan@0.322.1-canary.2246.17847852413.0
yarn add @salutejs/sdds-serv@0.323.1-canary.2246.17847852413.0
```

</details>
<!-- GITHUB_RELEASE PR BODY: canary-version -->


## 0.319.0 (18 сентября 2025)

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


## 0.318.0 (4 сентября 2025)

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


## 0.317.0 (21 августа 2025)

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


## 0.315.0 (7 августа 2025)

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


## 0.314.2 (30 июля 2025)

## Функциональные изменения в компонентах

### TextArea

* Сделали свойство `labelAriaHidden` опциональным


## 0.314.1 (28 июля 2025)

## Функциональные изменения в компонентах

### Combobox

* исправлен баг, связанный с невозможностью получить актуальное значение поля ввода после ререндера;


## 0.314.0 (24 июля 2025)

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


## 0.312.0 (10 июля 2025)

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

### Docs

* Исправлен UI документации, добавлено условие для переопределения token фона

[PR](https://github.com/salute-developers/plasma/pull/2064)


## 0.310.0 (26 июня 2025)

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


## 0.309.0 (11 июня 2025)

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


## 0.308.0 (29 мая 2025)

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


## 0.306.1 (20 мая 2025)

## Функциональные изменения в компонентах

### NumberFormat

-   исправлено использование `ref`

## 0.306.0 (15 мая 2025)

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

## 0.305.0 (30 апреля 2025)

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

## 0.304.0 (17 апреля 2025)

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

## Изменения в библиотеки

### Themes

-   Обновлены значения типографики в темах `plasma_giga` и `plasma_giga_app`.

[PR](https://github.com/salute-developers/plasma/pull/1905)

## 0.303.0 (3 апреля 2025)

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

## 0.293.0 (20 марта 2025)

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

## Изменения в библиотеки

### Button

-   Добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1843)

### ButtonGroup

-   Добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1843)

### IconButton

-   Добавлен размер `xl`

[PR](https://github.com/salute-developers/plasma/pull/1843)

### Form

-   исправлена работа документации в разделе `Формы`

[PR](https://github.com/salute-developers/plasma/pull/1813)

## 0.274.0 (6 марта 2025)

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

-   Добавлен миксин `applyPaper`, который позволяет создать базовый стиль подложки для любого блока, со следующим набором свойств, значения которых доступны из темы plasma_giga:
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

[PR](https://github.com/salute-developers/plasma/pull/1784)

## 0.256.0 (20 февраля 2025)

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

## 0.241.0 (6 февраля 2025)

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

-   В документацию добавлено предупреждение о том, что `view`:`dark` и `light` устарели; добавлен пример того, как переключать темы при помощи `ViewContainer`
-   В документацию добавлен пример для `view`:`positive`, `negative` с иконкой `color=inherit`

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
