# v0.167.0 (Thu Nov 14 2024)

### Release Notes

#### Release by 13.11.2024 ([#1559](https://github.com/salute-developers/plasma/pull/1559))

## Components

### Autocomplete

- добавлены новые св-ва `required`, `requiredPlacement` и `optional`;
 
feat(plasma-*, sdds-*): Add required functionality in Autocomplete (https://github.com/salute-developers/plasma/pull/1522)

### Combobox

- добавлены новые св-ва `required`, `requiredPlacement` и `optional`;

feat(plasma-*, sdds-*): Add required functionality in Combobox (https://github.com/salute-developers/plasma/pull/1527)

### Range, DatePickerRange

- добавлена возможность передать свойство `autoComplete`

feat(plasma-new-hope): Add autoComplete prop to Range (https://github.com/salute-developers/plasma/pull/1530)

### Chip

- добавлено событие `onClickClose` по клику на крестик
- `onClear` помечено как deprecated
- написан тест на onClickClose

feat(plasma-new-hope): Divide chip events (https://github.com/salute-developers/plasma/pull/1536)

### Badge, Tabs

- реализована возможность обрезания текста по максимальной ширине

feat: add Badge & Tabs truncate props (https://github.com/salute-developers/plasma/pull/1500)

### NumberInput

- компонент включен в поставку `plasma-*` и `sdds-*` библиотек

**After**:
<img width="216" alt="image" src="https://github.com/user-attachments/assets/4b51c0e6-099d-41d7-af07-88344f7f77b0" />

feat(plasma-new-hope): Add NumberInput component (https://github.com/salute-developers/plasma/pull/1511)

### Dropdown

- добавлено свойство alwaysOpened
- добавлен тест на новое свойство

feat(plasma-new-hope): Add alwaysOpened prop for Dropdown (https://github.com/salute-developers/plasma/pull/1538)

### TextField

- добавлен токен изменения цвета фона компонента при наведении

feat(plasma-*,sdds-*): Fix TextField hover tokens (https://github.com/salute-developers/plasma/pull/1551)

### Tabs

- для `sdds-cs` исправлены значения токенов `itemSelectedDividerColor` и `itemSelectedDividerColorHover`
- для `sdds-dfa` исправлены токены для состояния `disabled`
- исправлены `argTypes` в stories

### Breadcrumbs

- исправлен курсор при наведении на текущий `Breadcrumb`
- исправлены токены для `hover` и `active` состояний у `Breadcrumb` 

`plasma-new-hope, sdds-cs`: fix `Tabs` and `Breadcrumbs` (https://github.com/salute-developers/plasma/pull/1532)

### Switch
- добавлены размеры `s`, `l`
- добавлено свойство `description`
- добавлено свойство `toggleSize`
- обновлены документация и тесты

`plasma-*, sdds-*`: `Switch` sizes added (https://github.com/salute-developers/plasma/pull/1539)

### Attach, Button

- свойство `square` у `Button` помечено как `deprecated`
- свойство `square` удалено из storybooks для `Attach`
- для размеров `m`, `l` у `Attach` исправлен размер иконки по умолчанию в варианте `IconButton`
- исправлены токены для view=secondary в пакете `sdds-cs`

### IconButton
- исправлены токены для view=secondary в пакете `sdds-cs`

`plasma-*, sdds-*`: fix `Attach` `square` prop (https://github.com/salute-developers/plasma/pull/1525)

### Steps

- исправлены смещающиеся активные элементы
- добавлен фокус 
- добавлены тесты
 
plasma-*: Fix `Steps` jumping bullets (https://github.com/salute-developers/plasma/pull/1517)

### Select

- осуществлен переход на `floating-ui`
- расширена типизация, позволяющая использовать компонент в режиме uncontrolled (b2c и web)
- исправлено некорректное отображение ячейки выпадающего списка при длинных значениях
- расширены возможности использования компонента через портал. Теперь помимо рефки можно пробросить id `dom-элемента`
- исправлены UI-баги при использовании портала
- улучшена поддержка типов
 
feat(plasma-*, sdds-*): Select improvements (https://github.com/salute-developers/plasma/pull/1550)

### Tabs

- вернули возможность использовать `TabItemProps`, `TabsProps` во все пакетах

`plasma-*, sdds-*`: `TabItemProps`, `TabsProps` exported (https://github.com/salute-developers/plasma/pull/1545)


## Вертикали 

### `SDDS-CS`

- добавлен view `negative` для `Combobox` 
- добавлен view `negative` для `Autocomplete`

plasma(sdds-cs): Add view negative to combobox and autocomplite (https://github.com/salute-developers/plasma/pull/1523)

Добавлены новые токены для компонентов: 

- `Autocomplete`, 
- `Combobox`, 
- `Dropdown`, 
- `Notifications`, 
- `Range`, 
- `Pagination`, 
- `Tabs`, 
- `DatePicker`
 
feat(new-hope): Add new tokens to components (https://github.com/salute-developers/plasma/pull/1506)
 
### `SDDS-INSOL`

- обновлена тема `sdds_insol`
- обновлено свойство `background-color` на background в компоненте `Button` для поддержки градиентов в значениях у токенов.
- обновлены конфигурации для компонентов `Button`, `TextArea` и  `TextField`

feat(sdds-insol): Update configs for `Button`, `TextArea` and  `TextField` components [part 1] (https://github.com/salute-developers/plasma/pull/1526)

## Docs

### Edit docs components for correctly view

- изменена документация ( значения `size` ) для корректного отображения в документации в вертикали `sdds-cs`

fix(sdds-cs-docs): Edit docs components for correctly view (https://github.com/salute-developers/plasma/pull/1557)

### Theme documentation

- добавлен подраздел примеры смены тем
 
feat: change theme docs (https://github.com/salute-developers/plasma/pull/1516)

---

#### 🚀 Enhancement

- Release by 13.11.2024 [#1559](https://github.com/salute-developers/plasma/pull/1559) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@vadim-kudr](https://github.com/vadim-kudr) [@TitanKuzmich](https://github.com/TitanKuzmich) [@denivladislav](https://github.com/denivladislav) [@luizasok](https://github.com/luizasok))
- docs(): api reports regenerated [#1539](https://github.com/salute-developers/plasma/pull/1539) ([@denivladislav](https://github.com/denivladislav))
- feat(sdds-dfa/finportal/serv): fix TextField hover token ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-*): add alwaysOpened to Dropdown [#1538](https://github.com/salute-developers/plasma/pull/1538) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-*): add NumberInput component [#1511](https://github.com/salute-developers/plasma/pull/1511) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat: add Badge & Tabs truncate props [#1500](https://github.com/salute-developers/plasma/pull/1500) ([@vadim-kudr](https://github.com/vadim-kudr))
- feat(new-hope): add thin cross to notification and toast [#1506](https://github.com/salute-developers/plasma/pull/1506) ([@iljs](https://github.com/iljs))
- feat(*): add tokens to all libs in dropdown ([@iljs](https://github.com/iljs))
- feat(*): add tokens to all libs in combobox ([@iljs](https://github.com/iljs))
- feat(*): add tokens to all libs in calender and datepicker ([@iljs](https://github.com/iljs))
- feat(*): add tokens to all libs in autocomplite ([@iljs](https://github.com/iljs))
- feat(new-hope): toast and notification tokens ([@iljs](https://github.com/iljs))
- feat(new-hope): datepicker add more tokens ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-*, sdds-*): Select improvements [#1550](https://github.com/salute-developers/plasma/pull/1550) ([@shuga2704](https://github.com/shuga2704))
- fix: fix Steps jumping bullets [#1517](https://github.com/salute-developers/plasma/pull/1517) ([@vadim-kudr](https://github.com/vadim-kudr))
- fix(plasma-*, sdds-*): square control removed from storybooks ([@denivladislav](https://github.com/denivladislav))
- chore(plasma-*, sdds-*): Switch ported; tests added ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-*, sdds-*): fixed Tabs storybooks ([@denivladislav](https://github.com/denivladislav))
- docs(): api reports regenerated [#1545](https://github.com/salute-developers/plasma/pull/1545) ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-*, sdds-*): TabItemProps and TabsProps exported ([@denivladislav](https://github.com/denivladislav))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*, sdds-*): Add required functionality in Combobox [#1527](https://github.com/salute-developers/plasma/pull/1527) ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-*, sdds-*): Add required functionality in Autocomplete [#1522](https://github.com/salute-developers/plasma/pull/1522) ([@shuga2704](https://github.com/shuga2704))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 9

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vlad Denisov  ([@denivladislav](https://github.com/denivladislav))

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

- исправлен параметр `contentRight`
- исправлен отступы во всех поставках `sdds` в `AccordionItem`
- добавлен новый параметр `opened`, для контроля состоянием вне компонента
- добавлена возможность прокидывать `ref` в `AccordionItem`

 
feat(*): Fix Accordion Right Content and Paddings (https://github.com/salute-developers/plasma/pull/1484)

### TextArea, TextField

- добавлены подсказки сверху справа и в виде Tooltip
- обновлены тесты и документация

**After**:
<img width="498" alt="image" src="https://github.com/user-attachments/assets/31f03fe2-1325-4412-80b5-b443e19e2a2d">


 
feat(plasma-*,sdds-*): add TextArea and TextField hints (https://github.com/salute-developers/plasma/pull/1459)


### Select

- добавлены новые токены в ядро компонента
- исправлена конфигурация компонента с учетом новых токенов для поставки `sdds-cs`

 
plasma-*: Update config for `Select` (https://github.com/salute-developers/plasma/pull/1504)

### Dropdown
- компонент Dropdown переведен на новую архитекутуру. API сохранен;
- исправлен баг, связанный с невозможностью раскрытия выпадающего списка в старом(legacy) Dropdown;
- исправлены недочеты по UI;
- расширены возможности использования через портал;

 
feat(plasma-*, sdds-*): Dropdown architecture improvement (https://github.com/salute-developers/plasma/pull/1497)

### Combobox
- несуществующие value (которых нет в массиве items) теперь отбрасываются и не принимают участие в работе компонента;
- изменение массива items теперь приводит к обновлению выбранных элементов (для гибкой асинхронной работы);
- исправлен баг, связанный с мутацией исходного массива items;
- добавлено новое св-во renderValue;

### Select
- несуществующие value (которых нет в массиве items) теперь отбрасываются и не принимают участие в работе компонента;
- изменение массива items теперь приводит к обновлению выбранных элементов (для гибкой асинхронной работы);

 
feat(plasma-*, sdds-*): Combobox & Select improvements (https://github.com/salute-developers/plasma/pull/1505)

### Slider

* добавлено вертикальное отображение
* обновлен дизайн горизонтального отображения

 
feat: vertical single Slider (https://github.com/salute-developers/plasma/pull/1452)

### Notification

- изменен `type` для `title` на `ReactNode`
- добавлено расположение `bottom-left`

 
feat: Notification placement prop (https://github.com/salute-developers/plasma/pull/1503)

### Tabs
- добавлены `Header Tabs`
- добавлены `hover` и `active` состояния для стрелок
- обновлены тесты и `storybooks`

 
plasma-*, sdds-*: Header Tabs added (https://github.com/salute-developers/plasma/pull/1502)

### SDDS-CS

- добавлена `view negative` для компонента `Select`
- исправлен цветовой токен для `contentLeftColor` в компоненте `Select`
- убраны лишние опции и примеры из storybook для компонента `Select`

 
[PLASMA-3718]: Fix config for `Select` (https://github.com/salute-developers/plasma/pull/1519)

### Combobox

- добавлены тесты;


feat(plasma-b2c, plasma-web): Combobox component tests (https://github.com/salute-developers/plasma/pull/1518)

### Counter
- видимое значение не может быть меньше 1
- для значений от 1 до 9 `Counter` становится круглым
- добавлены размеры `l`, `m`, `s` во все пакеты (в `sdds-cs` только размер `s`)
- исправлены токены отступов для размера `xxs`
- обновлены `storybooks` и документация

**Before**:

<img width="292" alt="berfore" src="https://github.com/user-attachments/assets/7762823b-2ae4-4474-abb6-d638fd98b805">

**After**:

<img width="827" alt="after" src="https://github.com/user-attachments/assets/27ec7202-6243-43a7-91a6-b94131f3b84f">
 

`plasma-*, sdds-*`: `Counter` impovements added (https://github.com/salute-developers/plasma/pull/1514)


## Tokens

### Tokens

- собраны изменение всех тем в один PR:
  * https://github.com/salute-developers/plasma/pull/1491
  * https://github.com/salute-developers/plasma/pull/1489
  * https://github.com/salute-developers/plasma/pull/1486
  * https://github.com/salute-developers/plasma/pull/1485
- добавлена новая тема `sdds_os` на основе `sdds_serv`
- обновлена `default` тема для пакета plasma-tokens

 
feat(plasma-tokens,sdds-themes,plasma-themes): Add and update themes from other PRs (https://github.com/salute-developers/plasma/pull/1495)

### Tokens

* обновлены токены типографики в теме `sdds-cs`. Теперь для всех размеров экранов (L, M и S) значения всех параметров одинаковые

 
fix(sdds-themes): Update typography tokens for `sdds-cs` theme (https://github.com/salute-developers/plasma/pull/1507)

### Tokens

- исправлена генерация токенов для модульного css, а также обновлены все темы
- добавлены методы генерации наборов токенов (dark и light режимов) для компонента `ViewContainer`
- добавлено подключение темы через css модули из пакета @salutejs/plasma-themes в plasma-new-hope

### ViewContainer

- добавлен компонент `ViewContainer` в plasma-new-hope в качестве примера
- добавлен декоратор `decoratorViewContainer` в plasma-new-hope с возможностью переключения тем и режимов контейнера (onDark / onLight / default)
- добавлен компонент `ViewContainer` во все библиотеки вертикали `sdds`, а также примеры и документация


feat(plasma-new-hope, sdds-*): Add `ViewContainer` component (https://github.com/salute-developers/plasma/pull/1488)


## Misc

### Calendar

- поправлено поведение hover для дней на календарной сетке

**Before**:

https://github.com/user-attachments/assets/992d2566-10a1-40ff-8d76-d3e2d8de4d13

**After**:

https://github.com/user-attachments/assets/8e0bf060-a103-46ba-aa4a-b5bc6bef632d

 
fix(plasma-new-hope): Fix Calendar hover behaviour (https://github.com/salute-developers/plasma/pull/1498)

### Sdds-insol

- добавлена новая библиотека

 
sdds-insol: Add library of components `sdds-insol` (https://github.com/salute-developers/plasma/pull/1509)

---

#### 🚀 Enhancement

- Release by 30.10.2024 [#1521](https://github.com/salute-developers/plasma/pull/1521) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@simashova](https://github.com/simashova) [@Irinkv](https://github.com/Irinkv) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@vadim-kudr](https://github.com/vadim-kudr) [@denivladislav](https://github.com/denivladislav))
- docs(): api reports regenerated [#1514](https://github.com/salute-developers/plasma/pull/1514) ([@denivladislav](https://github.com/denivladislav))
- feat(plasma-*,sdds-*): add hasHint to TextField/Area stories [#1513](https://github.com/salute-developers/plasma/pull/1513) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat: Notification placement prop [#1503](https://github.com/salute-developers/plasma/pull/1503) ([@vadim-kudr](https://github.com/vadim-kudr))
- feat: vertical single Slider [#1452](https://github.com/salute-developers/plasma/pull/1452) ([@vadim-kudr](https://github.com/vadim-kudr))
- feat(*): add new tokens to select in all libs [#1504](https://github.com/salute-developers/plasma/pull/1504) ([@iljs](https://github.com/iljs))
- feat(sdds-*): Add `ViewContainer` component [#1488](https://github.com/salute-developers/plasma/pull/1488) ([@neretin-trike](https://github.com/neretin-trike))
- feat(sdds-*): add hint to TextArea & TextField [#1459](https://github.com/salute-developers/plasma/pull/1459) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(*): add new props, edit contentRight, add ref to item and fix margin in sdds [#1484](https://github.com/salute-developers/plasma/pull/1484) ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-*, sdds-*): Counter configs and storybooks updated ([@denivladislav](https://github.com/denivladislav))
- docs(): api reports regenerated [#1502](https://github.com/salute-developers/plasma/pull/1502) ([@denivladislav](https://github.com/denivladislav))
- fix(): add arrow hover & active state; fix tokens ([@denivladislav](https://github.com/denivladislav))
- feat(plasma-*, sdds-*): Header tabs added ([@denivladislav](https://github.com/denivladislav))
- feat(plasma-*, sdds-*): Combobox & Select improvements [#1505](https://github.com/salute-developers/plasma/pull/1505) ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-*, sdds-*): Dropdown architecture improvement [#1497](https://github.com/salute-developers/plasma/pull/1497) ([@shuga2704](https://github.com/shuga2704))
- docs(sdds-*): Regenerate API report ([@neretin-trike](https://github.com/neretin-trike))
- docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Irinkv](https://github.com/Irinkv)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Anastasia Simashova ([@simashova](https://github.com/simashova))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v0.142.0 (Thu Oct 17 2024)

### Release Notes

#### Release by 16.10.2024 ([#1487](https://github.com/salute-developers/plasma/pull/1487))

## Components

### Accordion

- свойство `view` помечено как `optional`
- свойство `view` для AccordionItem помечено как `deprecated`      
- свойство `title` для `AccordionItem` теперь `ReactNode` 


 
[PLASMA-3591]: Fix Accordion types  (https://github.com/salute-developers/plasma/pull/1467)

### TextArea

- исправлен скроллбар
- обновлены `snapshots`

 
feat(plasma-*, sdds-*): TextArea scrollbar (https://github.com/salute-developers/plasma/pull/1471)

### Popup

- добавлены storybook декораторы для `Popup` и `Notification` для правильного отображения: `Drawer, Modal, Notification, Popup`

 
plasma-*: Fix popup mount logic (https://github.com/salute-developers/plasma/pull/1412)

### Tabs 

- вертикальные табы добавлены в поставку всех клиентских библиотек
- добавлено свойство `value` для горизонтальных и вертикальных табов
- исправлены токены для всех пакетов

<img width="181" alt="Снимок экрана 2024-09-24 в 14 39 29" src="https://github.com/user-attachments/assets/9889e4d1-9297-4cf9-a577-23f5d1c8c9af">

<img width="163" alt="Снимок экрана 2024-09-24 в 14 38 56" src="https://github.com/user-attachments/assets/596e92aa-1136-4f41-bb29-67ce31dbff75">

 
`plasma-*, sdds-*`: Vertical Tabs added (https://github.com/salute-developers/plasma/pull/1374)

### Badge

- добавлен новый размер `XS`


 
[PLASMA-3598]: Badge: Add size XS   (https://github.com/salute-developers/plasma/pull/1466)

### `SDDS-CS`

#### Button

- используется token `--text-accent` когда `view: secondary` 

#### Chip

- для `closeIconColor` используется token `--text-accent` когда `view: secondary` 

#### Badge

- изменены `padding{Right,Left}` на  `8px`

 
[PLASMA-3611]: Правки конфигураций Button, Chip, Badge [SDDS-CS] (https://github.com/salute-developers/plasma/pull/1473)

### Breadcrumbs

* добавлена поддержка обработчика `onClick` при клике на ссылку
* поправлены union типы 
* обновлена документация с указанием типов элементов

 
feat(plasma-new-hope, *-docs): Add onClick for item to `Breadcrumbs` component (https://github.com/salute-developers/plasma/pull/1480)

### Tabs
- исправлен скролл табов при малой ширине
- в `storybooks` добавлены свойства `width` и `height`, доступные при условии `clip = scroll`

 
`plasma-new-hope`: fix tabs arrow scroll (https://github.com/salute-developers/plasma/pull/1476)

### Attach
- исправлен `onChange`, `id` и `name`
- добавлено свойство `onClear`
- в документацию добавлен пример с использованием компонента внутри формы

 
`plasma-new-hope`: fix Attach (https://github.com/salute-developers/plasma/pull/1481)

### Combobox

- добавлен дженерик для св-ва `items` в компоненте Combobox

 
feat(plasma-b2c, web, sdds): Added generic for items in Combobox (https://github.com/salute-developers/plasma/pull/1470)

### TextArea 

- добавлена фокусировка по клику на дочерние элементы

 
plasma-*: Focus TextArea by click inside (https://github.com/salute-developers/plasma/pull/1444)

### SDDS CS Pack 4 ( overlay and navigation )

- изменены токены для компонентов: `Autocomplie`, `Avatar`, `Breadcrumbs`, `Cell`, `Drawer`, `Dropdown`, `Modal`, `Notification`, `Pagination`, `Popover`, `Price`, `Progress`, `Segment`, `Slider`, `Tabs`, `Toast`, `Toolbar`, `Tooltip`
- добавлена и обновлена актуальная документация

 
fix(sdds-cs): set overlay and navigation tokens (https://github.com/salute-developers/plasma/pull/1458)

### DatePicker

- добавлен вызов change callback при выборе даты из календаря
- добавлена возможность указать frame, в котором будет происходить рендер календаря
- добавлена сортировка дат для Range DatePicker
- исправлено поведение фокуса при закрытии календаря

 
feat(plasma-new-hope): Datepicker improvements (https://github.com/salute-developers/plasma/pull/1475)

### Segment

* добавлен вертикальный режим
* обновлен дизайн горизонтального отображения
* обновлен CS дизайн

 
feat: Segment redesign (https://github.com/salute-developers/plasma/pull/1392)


## Docs

### Документация `SDDS-CS`

- исправлены некорректные `imports` для примеров в документации к `Dropdown`
- добавлена страница для компонента `Tooltip`

 
[PLASMA-3536]: Fix incorrect imports by doc (https://github.com/salute-developers/plasma/pull/1469)


## Misc

### Attach

- исправлен `truncate` имени файла
- исправлены тесты

 
`plasma-new-hope`: fix attach truncate (https://github.com/salute-developers/plasma/pull/1454)


feat(plasma-tokens): auto generate stylesSalute theme (https://github.com/salute-developers/plasma/pull/1472)

### ThemeBuilder 

* изменены методы генерации базовой темы в старом формате
* изменены методы генерации базовой темы для новой архитектуры 

 
feat(plasma-theme-builder): Update generating default theme (https://github.com/salute-developers/plasma/pull/1477)

### Toast

- исправлен токен background для view="dark"

**Before**
<img width="319" alt="image" src="https://github.com/user-attachments/assets/fea32b30-270b-48c1-87f0-d6169e2d3bd7">

**After**
<img width="128" alt="image" src="https://github.com/user-attachments/assets/f52f5174-2a52-4dd0-a964-7fbcd52fdad6">


 
fix(plasma-*,sdds-*): Fix Toast background token (https://github.com/salute-developers/plasma/pull/1478)

---

#### 🚀 Enhancement

- Release by 16.10.2024 [#1487](https://github.com/salute-developers/plasma/pull/1487) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@denivladislav](https://github.com/denivladislav) [@luizasok](https://github.com/luizasok) [@neretin-trike](https://github.com/neretin-trike) [@vadim-kudr](https://github.com/vadim-kudr) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@Yeti-or](https://github.com/Yeti-or))
- feat: SegmentGroup redesign & vertical mode [#1392](https://github.com/salute-developers/plasma/pull/1392) ([@vadim-kudr](https://github.com/vadim-kudr))
- feat(*): add breadrumbs new tokens [#1458](https://github.com/salute-developers/plasma/pull/1458) ([@iljs](https://github.com/iljs))
- feat(plasma-web, plasma-b2c, sdds): Interlayer in Combobox according to the new generic [#1470](https://github.com/salute-developers/plasma/pull/1470) ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-new-hope): Add generic of ItemOption in ComboboxProps ([@shuga2704](https://github.com/shuga2704))
- feat: api report update by prop `size:xs` [#1466](https://github.com/salute-developers/plasma/pull/1466) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-*): add `size:xs` [badge] ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs: regenerate api reports [#1478](https://github.com/salute-developers/plasma/pull/1478) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- test(plasma-*): update Toast tests ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-*,sdds-*): fix Toast background token ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore(): added width and height to Tabs storybooks [#1476](https://github.com/salute-developers/plasma/pull/1476) ([@denivladislav](https://github.com/denivladislav))
- docs(): api reports regenerated [#1374](https://github.com/salute-developers/plasma/pull/1374) ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-new-hope): fix tokens, styles and typos ([@denivladislav](https://github.com/denivladislav))
- chore(plasma-*, sdds-*): Tabs ported ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-*,sdds-*): fix Modal & Popup stories docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*, sdds-*): add scrollbar to TextArea ([@denivladislav](https://github.com/denivladislav))
- fix: api report update [#1467](https://github.com/salute-developers/plasma/pull/1467) ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v0.133.0 (Thu Oct 03 2024)

### Release Notes

#### Release by 02.10.2024 ([#1465](https://github.com/salute-developers/plasma/pull/1465))

## Components

### ChipGroup

- добавлен новый компонент в поставку пакетов `plasma-*` и `sdds-*`
- написаны тесты и документация

**After**:
<img width="425" alt="image" src="https://github.com/user-attachments/assets/017e9c45-0276-43bb-b94c-d64832268ae5">

 
feat(plasma-*, sdds-*): Add ChipGroup component (https://github.com/salute-developers/plasma/pull/1445)

### Dropdown

- исправлен баг с некорректной работой св-ва `placement` в storybook в новой вкладке;
- убрана приписка `new` в названиях сторей для `combobox` в sdds-*;

 
feat(plasma-web, b2c): Added mappings for placement prop in Dropdown (https://github.com/salute-developers/plasma/pull/1455)

### Switch

- Свойство `label-position` заложено в ядро компонента, а не в конфиг ( как-раньше )
- Добавлен в поставку `web` и `b2c` в сборке с linaria

 
plasma-*: Fix Switch Config (https://github.com/salute-developers/plasma/pull/1447)

### Calendar 

- добавлено новое свойство `locale` для работы с локалями отличными от `ru`

 
[PLASMA-3484]: Calendar support `EN` local (https://github.com/salute-developers/plasma/pull/1428)

### Dropdown

- добавлен divider в новый Dropdown
- обновлена документация

**After**:
<img width="229" alt="image" src="https://github.com/user-attachments/assets/8b871aa3-ad57-4461-8049-a3f3826003c8">


 
feat(plasma-*,sdds-*): Add divider to Dropdown (https://github.com/salute-developers/plasma/pull/1446)

### Drawer

- исправлено появление горизонтального скроллбара при открытии Drawer
- исправлено динамическое изменение placement и анимации открытия/закрытия

**Before**:
https://github.com/user-attachments/assets/4532f60a-5122-498f-a684-849c899cde1e

**After**:
https://github.com/user-attachments/assets/58c8eb93-67a7-4f45-8941-b193a996c184

 
plasma-*: Fix Drawer positioning and overflow scrollbar (https://github.com/salute-developers/plasma/pull/1461)

### TextField

- добавлено **новое** отображение `clear`
- добавлен `divider` для `clear` отображения
- обновлены тесты и документация
- включено в поставку `plasma-*`, `sdds-*` пакетов

**After**:
<img width="491" alt="image" src="https://github.com/user-attachments/assets/1db9b69e-d834-48d4-8a7c-1dcf3a3c1e89" />

 
feat(plasma-*,sdds-*): add TextField clear views (https://github.com/salute-developers/plasma/pull/1449)

### TextArea

- добавлено отображение clear TextArea
- добавлен divider для clear отображения
- обновлены тесты и документация
- включено в поставку plasma-\*, sdds-\* пакетов

**After**:
<img width="486" alt="image" src="https://github.com/user-attachments/assets/8e8eee98-efc7-4d5e-957c-b6e4defb0f05">


 
feat(plasma-*,sdds-*): add TextArea clear views (https://github.com/salute-developers/plasma/pull/1451)

### Form

Для компонентов `TextField`, `TextArea`, `Radioboxe`, `Switch`, `Checkbox`, `Slider`, `DatePicker`, `DatepickerRange`, 

- добавлена поддержка `React Hook Form`
- добавлена поддержка работы с `html form`

 
plasma-*: Support form  (https://github.com/salute-developers/plasma/pull/1464)

### Steps

- добавлен новый компонент: горизонтальный, вертикальный режим

<img width="140" src="https://github.com/user-attachments/assets/44a553d4-c191-4c14-b251-18188ea7544f" />
<img width="736" src="https://github.com/user-attachments/assets/3044c7b9-60d8-491d-993b-52b49344d352" />

 
plasma-*: Steps (https://github.com/salute-developers/plasma/pull/1443)

---

#### 🚀 Enhancement

- Release by 02.10.2024 [#1465](https://github.com/salute-developers/plasma/pull/1465) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@iljs](https://github.com/iljs) [@IgorYar](https://github.com/IgorYar) [@vadim-kudr](https://github.com/vadim-kudr))
- feat: Steps (horizontal + vertical) [#1443](https://github.com/salute-developers/plasma/pull/1443) ([@vadim-kudr](https://github.com/vadim-kudr))
- feat(*): add docs [#1464](https://github.com/salute-developers/plasma/pull/1464) ([@iljs](https://github.com/iljs))
- feat(new-hope): add react-hok-form-support ([@iljs](https://github.com/iljs))
- feat(new-hope): add support datepicker ([@iljs](https://github.com/iljs))
- feat(new-hope): add support double slider ([@iljs](https://github.com/iljs))
- feat(plasma-*,sdds-*): update TextArea config & stories [#1451](https://github.com/salute-developers/plasma/pull/1451) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*,sdds-*): update configs depending on TextField [#1449](https://github.com/salute-developers/plasma/pull/1449) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-*): update Textfield config & stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*,sdds-*): update Dropdown configs & stories [#1446](https://github.com/salute-developers/plasma/pull/1446) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*): extend stories examples ([@Yakutoc](https://github.com/Yakutoc))
- feat(new-hope): edit work label position switch [#1447](https://github.com/salute-developers/plasma/pull/1447) ([@iljs](https://github.com/iljs))
- feat(sdds-*): add ChipGroup component [#1445](https://github.com/salute-developers/plasma/pull/1445) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-*,sdds-*): fix TextField configs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-new-hope,sdds-*): fix Drawer stories ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web, b2c): Added mappings for placement prop in Dropdown [#1455](https://github.com/salute-developers/plasma/pull/1455) ([@shuga2704](https://github.com/shuga2704))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))

---

# v0.123.0 (Tue Sep 24 2024)

### Release Notes

#### Release by 24.09.2024 ([#1450](https://github.com/salute-developers/plasma/pull/1450))

## Components

### Mask

- добавлен **новый** компонент
- включен в поставку plasma-* и sdds-* пакетов
 
feat(plasma-*): add Mask  (https://github.com/salute-developers/plasma/pull/1418)

### Правка токенов в SDDS CS

- Изменены токены для компонентов `Autocomplite`, `Combobox`, `Datepicker`, `Range`, `Textfield`, `Textarea`, `Select` в поставке `sdds-cs`

 
feat(sdds-cs): edit tokens (https://github.com/salute-developers/plasma/pull/1439)

### Attach
- добавлен **новый** компонент в поставку всех клиентских библиотек 

<img width="554" src="https://github.com/user-attachments/assets/0ede5244-018b-4801-9816-6d3f425a1ec5" />

<img width="296" src="https://github.com/user-attachments/assets/e86d1a79-13f9-430c-8c78-60da463bda6d" />

### Cell
- добавлена возможность использовать свойство `className`

 
`plasma-*, sdds-*`: Add Attach (https://github.com/salute-developers/plasma/pull/1437)


## Misc

### Tests
-   изменены тесты plasma-b2c компонента TextArea

 
test(plasma-b2c): update tests for TextArea (https://github.com/salute-developers/plasma/pull/1434)

---

#### 🚀 Enhancement

- Release by 24.09.2024 [#1450](https://github.com/salute-developers/plasma/pull/1450) ([@IgorYar](https://github.com/IgorYar) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@denivladislav](https://github.com/denivladislav))
- docs(): api reports regenerated [#1437](https://github.com/salute-developers/plasma/pull/1437) ([@denivladislav](https://github.com/denivladislav))
- feat(plasma-*): fix Mask stories prop [#1418](https://github.com/salute-developers/plasma/pull/1418) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-*): add Mask component ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-*, sdds-*): Attach ported; tests added ([@denivladislav](https://github.com/denivladislav))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v0.120.0 (Thu Sep 19 2024)

### Release Notes

#### Release by 18.09.2024 ([#1442](https://github.com/salute-developers/plasma/pull/1442))

## Components

### Badge

- добавлено свойство `clear`, которое меняет отображение `view`
- обновлена документация и storybook

**After**:

<img width="328" src="https://github.com/user-attachments/assets/d44c10e8-ffe3-4137-a833-4351b7b82bdc" />

 
feat(plasma-*): Badge add prop clear (https://github.com/salute-developers/plasma/pull/1424)

### TextField

- используется корректный `color token` для содержимого `contentLeft\Right` slots
- добавлен `hover` для `contentRight` slot

**Before(incorrect color token):**

<img width="928" src="https://github.com/user-attachments/assets/42aa0845-54f4-45ed-8fb0-b71edac4ebf7" />

**After(correct color token):**

<img width="922" src="https://github.com/user-attachments/assets/e6c05099-b9fb-4959-b815-7f2307690263" />

**Hover:**

<img width="940" src="https://github.com/user-attachments/assets/508db157-deff-44e2-9dd9-4893184eb59a" />


 
[PLASMA-3412]: TextField contentRight\Left fix UI (https://github.com/salute-developers/plasma/pull/1429)

### Combobox

- добавлено новое свойство `alwaysOpened`
- обновлены токены в конфигурации компонента для `plasma-web`
- обновлена документация 

 
feat(plasma-*): combobox always opened (https://github.com/salute-developers/plasma/pull/1422)

### Grid

- исправили `view` по-умолчанию для `sdds` вертикалей 

**Before:**
<img width="1920" src="https://github.com/user-attachments/assets/6476ef70-294d-492b-b462-2e42cdb341d4" />
 
**After:**
<img width="1920" src="https://github.com/user-attachments/assets/aa004cf2-9e43-4691-84f3-fb33f94b3e5f" />
 
fix(sdds-*): Use correct default view for Grid (https://github.com/salute-developers/plasma/pull/1431)

### Editable

- переведен на новую архитектуру и добавлен в поставки `plasma-{b2c, web}`
- исправлена работа свойства `placeholder`

<img width="276" src="https://github.com/user-attachments/assets/bdd67ba7-62f1-48f1-8f04-78a13fbb8045" />
 
plasma-{web, b2c}: Editable component refactor (https://github.com/salute-developers/plasma/pull/1430)

### Combobox

- исправлена ошибка, когда изначальное значение в `single combobox` не отображалось

 
plasma-*: Fixed issue with predefined value in single Combobox (https://github.com/salute-developers/plasma/pull/1436)


## Icons

### Add new icons   

**pcMouse**
<img width="71" src="https://github.com/user-attachments/assets/f2097d88-d354-404a-91af-d59af0a61c3f" />

**Blank JPG/PNG**
<img width="140" src="https://github.com/user-attachments/assets/0d3a251a-ec39-4e0d-943b-e37c8d96c22f" />

 
[PLASMA-3502]: Add icons: Mouse, Blank JPG/PNG (https://github.com/salute-developers/plasma/pull/1435)


## Tokens

- исправлены формулы генерации `brightness` токенов
- обновлены / добавлены `active`, `hover`, `brightness` токены для `plasma-{b2c, web}` themes
 
fix(plasma-tokens): Update active, hover and brightness tokens in themes (https://github.com/salute-developers/plasma/pull/1441)


## Misc

### QA Auto test

-   изменены тесты `plasma-b2c` компонентов `Slider`, `Tabs`, `DatePicker` и `Card`

---

#### 🚀 Enhancement

- Release by 18.09.2024 [#1442](https://github.com/salute-developers/plasma/pull/1442) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))
- feat(sdds-*): update Badge stories & configs [#1424](https://github.com/salute-developers/plasma/pull/1424) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*/sdds-*): update TextField stories [#1426](https://github.com/salute-developers/plasma/pull/1426) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-18 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(sdds-*): use correct default view for Grid [#1431](https://github.com/salute-developers/plasma/pull/1431) ([@Yakutoc](https://github.com/Yakutoc))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*,sdds-*): update Combobox stories props ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(api-report): update api report (InputHTMLAttributes) [#1429](https://github.com/salute-developers/plasma/pull/1429) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-*): fix `content{Left\Right}Slot` UI ([@Yakutoc](https://github.com/Yakutoc))
- fix(api-report): update after add TextFieldGroup [#1427](https://github.com/salute-developers/plasma/pull/1427) ([@Yakutoc](https://github.com/Yakutoc))
- fix(sdds-finportal): add TextFieldGroup component ([@Yakutoc](https://github.com/Yakutoc))
- fix(sdds-finportal): add TextField/TextArea prop `required` ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.112.0 (Tue Sep 10 2024)

#### 🚀 Enhancement

- plasma-*: Fix `TextField` placeholder logic [HOTFIX] [#1425](https://github.com/salute-developers/plasma/pull/1425) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*/sdds-*): update TextField stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.111.0 (Thu Sep 05 2024)

### Release Notes

#### Release by 04.09.2024 ([#1420](https://github.com/salute-developers/plasma/pull/1420))

## Components

### Switch

- токены для `Switch` приведены в соответствие с макетами
- добавлено состояние `hover`
- удален `skip test` для свойства `pressed` (это свойство deprecated). Вместо него добавлен тест `onMouseDown` с событием `realMouseDown`
- в тест `OnClick` добавлен `realClick`

 
plasma-*, sdds-*: Fix `Switch` tokens (https://github.com/salute-developers/plasma/pull/1388)

### DatePicker

- добавлена поддержка русского и английского языка
- добавлено форматирование даты 

 
plasma-(*): Add format and lang in Datepicker (https://github.com/salute-developers/plasma/pull/1404)

### ModalBase

- обновлен токен `modalOverlayColor` в `plasma-{web, b2c}`

 
plasma-{web,b2c}: update ModalBase modalOverlayColor token (https://github.com/salute-developers/plasma/pull/1364)

### TextFieldGroup

- добавлен новый компонент для `plasma-{web, b2c}, sdds-{serv, dfa}`
- написаны тесты и документация

 
feat(plasma-*,sdds-*): component textfield group (https://github.com/salute-developers/plasma/pull/1405)

### TextArea/TextField

- добавлены новые свойства: `required`, `requiredPlacement, optional`
- обновлены screenshots и документация

 
feat(plasma-*, sdds-*): Add required variation to TextArea/TextField (https://github.com/salute-developers/plasma/pull/1352)

### Combobox

- добавлен в поставку для `plasma-{web, b2c},  sdds-*`
- реализована вложенность (на основе [Floating UI](https://floating-ui.com/))
- добавлено новое свойство `closeAfterSelect` в `Combobox` и `Select`.
- поправлен отступ в компоненте `Select` в варианте `textfield-like`.

 
plasma-*, sdds-*: Combobox v2 (https://github.com/salute-developers/plasma/pull/1406)

### SDDS FIN PORTAL

- опубликован новый пакет `@salutejs/sdds-finportal`


 
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

- Добавлены новые токены `-brightness` в `theme-builder`
- Во все темы добавлены новый токены для высветления: `combobox`, `dropdown`, `notification`, `toast`, `toolbar` и `tooltip` 
- Исправлен компонент `Comobox` и обновлены тесты
- Изменен workfkow cypress

 
plasma-(*): Add Brightness Tokens (https://github.com/salute-developers/plasma/pull/1361)


## Misc

### Tests
-   изменены тесты plasma-b2c компонентов ButtonGroup и IconButton

 
test(plasma-b2c): update tests for ButtonGroup and IconButton (https://github.com/salute-developers/plasma/pull/1407)

---

#### 🚀 Enhancement

- Release by 04.09.2024 [#1420](https://github.com/salute-developers/plasma/pull/1420) ([@denivladislav](https://github.com/denivladislav) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@IgorYar](https://github.com/IgorYar) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) VAnaKudryavtsev@sberbank.ru [@shuga2704](https://github.com/shuga2704))
- feat: update lock file [#1417](https://github.com/salute-developers/plasma/pull/1417) ([@Yakutoc](https://github.com/Yakutoc))
- feat(sdds-finportal): add package ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))
- Кудрявцев Вадим Анатольевич (vanakudryavtsev@sberbank.ru)
- Кудрявцев Вадим Анатольевич (VAnaKudryavtsev@sberbank.ru)

---

