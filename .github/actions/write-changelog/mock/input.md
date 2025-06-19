## Core

### TextField

-   добавлен **новый** размер `XL`

<img width="1024" src="https://github.com/user-attachments/assets/4fc66785-2c3c-4352-bbb8-7b1dc23c6390" />

[PR](https://github.com/salute-developers/plasma/pull/1715)

### Mask

-   добавили обработку, если не задан параметр mask, то возвращается обычный `TextField`

[PR](https://github.com/salute-developers/plasma/pull/1964)

### Slider

-   убрали наслоение контейнера для шкалы минимум/максимум с текущим значением бегунка

![Kapture 2025-05-29 at 12 40 21](https://github.com/user-attachments/assets/db518bf3-d9c8-43a0-b718-dcd58e429cd6)

[PR](https://github.com/salute-developers/plasma/pull/1978)

### Link

-   изменена поставка компонента ( добавлены файлы `types`, `tokens` )

[PR](https://github.com/salute-developers/plasma/pull/1966)

### Progress

-   добавлен новый `view` - `info`

<img width="1024" src="https://github.com/user-attachments/assets/1fcad509-3a21-4a78-8162-2c4e32ebe9f6" />

[PR](https://github.com/salute-developers/plasma/pull/1975)

### Autocomplete, Combobox

-   улучшено поведение виртуализированного списка при динамическом изменении высоты оного;

![Kapture 2025-05-29 at 14 52 03](https://github.com/user-attachments/assets/0df860d6-f2e6-4c6e-a220-6b3496e83a0f)

[PR](https://github.com/salute-developers/plasma/pull/1968)

### Note

-   добавлен возможность закрыть компонент, через свойство `hasClose` и `onCloseButtonClick`

![Kapture 2025-05-29 at 13 15 39](https://github.com/user-attachments/assets/babc7f1d-ba21-4868-a7f1-635055928dd5)

[PR](https://github.com/salute-developers/plasma/pull/1962)

### Calendar

-   исправлен метод получения модификации даты: учитывается свойство `includeEdgeDates`

[PR](https://github.com/salute-developers/plasma/pull/1984)

-   добавлена возможность растягивать на всю доступную ширину и высоту

![Kapture 2025-05-29 at 15 01 01](https://github.com/user-attachments/assets/188619f1-7bad-4e6a-812b-2a46c22439f0)

[PR](https://github.com/salute-developers/plasma/pull/1972)

### DatePicker

-   добавлена возможность управлять размером выпадающего календаря

-   добавлена возможность растягивать поле ввода на всю доступную ширину

[PR](https://github.com/salute-developers/plasma/pull/1972)

### Icons

-   добавлены новые иконки:
    -   ArrowBack
    -   FloorTypeFill
    -   FloorTypeOutline
    -   SensorFill
    -   SensorOutline
    -   FlashlightOutline
    -   DocumentExportFill
    -   DocumentExportOutline
    -   DocumentImportFill
    -   DocumentImportOutline
    -   InternationalTradeOutline
    -   SensorTemperatureFill
    -   SensorTemperatureOutline

[PR](https://github.com/salute-developers/plasma/pull/1992)

-   изменены название иконок с ключевым словом `sber` на `sb` для всех платформ

<img width="768" src="https://github.com/user-attachments/assets/7cd5e024-4586-48e4-bebc-9fa46b760927" />

[PR](https://github.com/salute-developers/plasma/pull/1981)

### CodeField

-   добавлен **новый** компонент

![Kapture 2025-05-29 at 13 28 14](https://github.com/user-attachments/assets/1bc20b57-0b4f-4976-adde-35e6ac082a1e)

[PR](https://github.com/salute-developers/plasma/pull/1993)

### Notifications

-   добавлена возможность управлять шириной уведомления, через свойство `width` и `maxWidth`

![Kapture 2025-05-29 at 13 43 54](https://github.com/user-attachments/assets/0eae5726-4b23-40ae-9025-2016da019de2)

[PR](https://github.com/salute-developers/plasma/pull/1967)

### List

-   переведен на новую архитектуру

<img width="768" src="https://github.com/user-attachments/assets/454586b5-ddc3-4574-b510-8830b65f1618" />

[PR](https://github.com/salute-developers/plasma/pull/1954)

## PLASMA-B2C

### PaginationDots

-   компонент перенесен внутрь core пакет

[PR](https://github.com/salute-developers/plasma/pull/1970)

## PLASMA-WEB

### PaginationDots

-   компонент перенесен внутрь core пакет

[PR](https://github.com/salute-developers/plasma/pull/1970)

## SDDS-CS

### NumberFormat

-   исправлены значения свойства `size` в примерах документации и storybook

[PR](https://github.com/salute-developers/plasma/pull/1961)

### Select

-   изменена конфигурация `select item` для состояния `disabled`

[PR](https://github.com/salute-developers/plasma/pull/1963)
