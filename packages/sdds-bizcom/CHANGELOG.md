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


