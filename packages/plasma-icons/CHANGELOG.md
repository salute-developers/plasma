# v1.179.0 (Thu Feb 01 2024)

### Release Notes

#### Release by 31.01.2024 ([#1020](https://github.com/salute-developers/plasma/pull/1020))

## Components

### Modal

-   поправлена генерация id для `Modal, Popup`
-   добавлены тесты для `Modal, Popup`
 
plasma-new-hope: fix id generation for Modal, Popup (https://github.com/salute-developers/plasma/pull/1001)

### Avatar и Avatar Group

- добавлены компоненты Avatar и AvatarGroup
- Временно добавлен полифил `focus-visible` в linaria.tsx

 
feat(plasma-new-hope): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/962)

### Select

- добавлен компонент `Select` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web
- добавлена клавиатурная навигация со следующими комбинациями:
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

- добавлены новые иконки и изменена структура файлов старых в библиотеку `@salutejs/plasma-new-hope`

### Button

- добавлены токены для компонента `Button`, регулирующие высоту и scale при hover и active состояниях #706 
- исправлен баг, при котором у компонента `Button` будет отсутствовать бэкграунд в состоянии disabled и при hover'е

### Checkbox, Radiobox

- добавлены токены для компонент `Checkbox`, `Radiobox`, отвечающие за отступы

### Chip

- добавлен токен для компонента `Chip`, отвечающий за цвет иконки закрытия

### Dropdown

- добавлена поддержка react-компонент в props `contentLeft` и `contentRight`
- убрано свойство isNested, т.к. теперь можно вкладывать Dropdown друг в друга без него

 
feat(plasma-new-hope): Add `Select` component (https://github.com/salute-developers/plasma/pull/956)

### Toast

- добавлен компонент Toast в новой архитектуре
- добавлен в поставку в b2c/web
- обновлены тесты
- обновлена документация

 
feat(plasma-new-hope/web/b2c): toast refactor & redesign (https://github.com/salute-developers/plasma/pull/1010)

### TextArea

- добавлена поддержка переноса строки для свойства `placeholder`;
- исправлено поведение компонента при использовании свойств `defaultValue` и `placeholder`.

 
fix(plasma-new-hope): Fixes for `TextArea` component (https://github.com/salute-developers/plasma/pull/1017)


## Icons

### Hotfix

-   поправлена публикация пакета со всем содержимым билда

 
fix(plasma-icons): fix package publish (https://github.com/salute-developers/plasma/pull/989)


## Infra

### Workflow for `dev` branch

- добавлен отдельный workflow для **безусловной** сборки документация и storybook на основе dev ветки 

 
plasma-infra(documentation): Add documentation workflow for dev branch (https://github.com/salute-developers/plasma/pull/996)

### Коллаборативный прогон [Perftool]

- добавлен коллаборативный прогон (прогон одновременно двух веток в рамках одного процесса)  

 
ci: use perftool collaborative mode (https://github.com/salute-developers/plasma/pull/991)

### Override `lerna ls`

- переопределили логику `ignoreChanges` для команды `lerna ls` чтобы изменения файлов `*.component-test.tsx` тоже учитывалось      

 
plasma-infra: Override `lerna ls` config (https://github.com/salute-developers/plasma/pull/995)

### Mattermost notifications

- добавлено уведомление для упавшего процесса публикации релиз кандидата 

 
plasma-infra: Add notification when publish failed (https://github.com/salute-developers/plasma/pull/935)

### Release pull request 

- добавлен выбор ветки для создания release pull request   

 
plasma-infra: Refactoring release pull request workflow  (https://github.com/salute-developers/plasma/pull/1007)

### Versionate docs

- вынесли этот процесс в отдельный, от публикация релиза, workflow.  

 
plasma-infra: Move the `versionate_docs` job to a separate workflow (https://github.com/salute-developers/plasma/pull/1006)

### Perftool

- убиран verbose loglevel в `perftool`

 
Remove perftool max log verbosity (https://github.com/salute-developers/plasma/pull/1004)


## Misc

### Storybook

-   поправлено отображение примера Popup в storybook

 
chore: fix Popup storybook example (https://github.com/salute-developers/plasma/pull/997)

---

#### 🚀 Enhancement

- Release by 31.01.2024 [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@luizasok](https://github.com/luizasok) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv) [@nikewht](https://github.com/nikewht) [@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-01-31 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-icons): fix package publish [#989](https://github.com/salute-developers/plasma/pull/989) ([@kayman233](https://github.com/kayman233))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.177.1 (Fri Jan 19 2024)

#### 🐛 Bug Fix

- fix(plasma-icons): fix package publish [#988](https://github.com/salute-developers/plasma/pull/988) ([@kayman233](https://github.com/kayman233))
- fix(plasma-icons): fix package publish ([@kayman233](https://github.com/kayman233))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.177.0 (Thu Jan 18 2024)

### Release Notes

#### Release by 18.01.2024 ([#981](https://github.com/salute-developers/plasma/pull/981))

## Components

### Carousel

- добавлен пропс `scrollSnapStop` в `Carousel`

 
feat(plasma-core): Add new prop (scrollSnapStop) to the Carousel component (https://github.com/salute-developers/plasma/pull/940)


### Skeleton

- добавлен компонент в новой архитектуре
- включен в поставку b2c/web
- удален из plasma-hope
- написаны тесты
- поправлен компонент Button для использования в styled

 
feat(plasma-new-hope/b2c/web): add skeleton with new architecture (https://github.com/salute-developers/plasma/pull/954)

### Skeleton

-   добавлены размеры под новую типографику

 
feat(plasma-b2c/web): add skeleton new typography sizes (https://github.com/salute-developers/plasma/pull/960)


### Header

-  добавлен prop, который позволяет применять mediaQuery для S-viewport по условию
-  добавлен тест на данный кейс

 
feat(plasma-ui): add property to show/hide subtitle on S viewport (https://github.com/salute-developers/plasma/pull/958)


### Popover arrow

-   Поправлено отображение `Popover arrow` в Safari, Firefox

 
fix(plasma-web): fix Popover arrow in Safari, Firefox (https://github.com/salute-developers/plasma/pull/963)


### Image

- добавлен в поставку `plasma-{b2c, web}`
- добавлен UI тесты
- удален из `plasma-hope`

 
feat(plasma-new-hope/web/b2c): Image refactor & redesign (https://github.com/salute-developers/plasma/pull/968)

### Badge

-  добавлен в поставку `plasma-{b2c,web,new-hope}`
-  дополнены тесты

 
feat(plasma-new-hope/web/b2c): Badge refactor & redesign (https://github.com/salute-developers/plasma/pull/964)

### Counter

- добавлен в поставку `plasma-{b2c,web,new-hope}`
- написаны тесты и документация

 
feat(plasma-new-hope/web/b2c): Counter component (https://github.com/salute-developers/plasma/pull/965)


## Icons

-  добавлены **новые** иконки размера 24x24, 1025 штук
-  добавлены **новые** категории иконок в разделе icons на сайте

feat(plasma-icons): Add new 24x24 icons (https://github.com/salute-developers/plasma/pull/955)


## Infra

### Perftool

- обновление версии @salutejs/perftool@0.24

 
Update perftool (https://github.com/salute-developers/plasma/pull/932)

### @Auto-it CLI 

- добавлена возможность прокинуть опции/флаги для запуска - **auto shipit**;
- выключили генерацию changelog для pubslish: canary, RC;  

 
plasma-infra: Pass cli options for "@auto-it" (https://github.com/salute-developers/plasma/pull/890)

### Changelog workflow

- добавлена новая категория `Bugs`
- экранирование спец символов 

 
plasma-infra: Improve changelog workflow  (https://github.com/salute-developers/plasma/pull/967)


## Tokens

### Tokens naming

- изменена нотация с `camelCase` на `kebab-case` для старых токенов цветов и типографики

Было:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 54" src="https://github.com/salute-developers/plasma/assets/26903236/b83f776b-e4f9-43e1-9506-bff3d25f7e71">

Стало:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 17" src="https://github.com/salute-developers/plasma/assets/26903236/10298375-1a54-4dd4-8fe3-8af74c3e40b1">

 
feat(plasma-tokens-utils): Update formatting tokens name from camelCase to kebab-case  (https://github.com/salute-developers/plasma/pull/971)

## Bugs

### Calendar

-   добавлен `ref` в `forwardRef` вторым аргументом

 
feat(plasma-new-hope): fix CalendarDouble ref (https://github.com/salute-developers/plasma/pull/959)


### Carousel

- решен баг с пролистыванием (onDragScroll) в accessible mode - mobile & desktop.
- control panel в карусели работает корректно (можно выбрать scrollAlign).

 
fix(plasma-hope/plasma-web): Turn onDragScroll off by default in accessibility mode in Carousel. Fix storybook control panel in it. (https://github.com/salute-developers/plasma/pull/957)

### Spinner

- исправлено отображение компонента `Spinner` при размере 8px

 
fix(plasma-new-hope): Fix size for `Spinner` component (https://github.com/salute-developers/plasma/pull/966)

## Misc

### Typography

-  root для типографики вынесен в общий компонент
-  className, style теперь явно задаются в компоненте
-  исправлены конфиги для asdk поставки

 
feat(plasma-new-hope/b2c/web): redefining classnames for typography (https://github.com/salute-developers/plasma/pull/947)

---

#### 🚀 Enhancement

- Release by 18.01.2024 [#981](https://github.com/salute-developers/plasma/pull/981) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-icons): fix IconRoot API [#955](https://github.com/salute-developers/plasma/pull/955) ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): remove name conflicting old icons ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add missing icons `PeopleGroup, Share` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): add new icons in website ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `VW` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `T` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `S2` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `S1` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `P2` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `P1` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `M2` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `M1` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `ILNOQR` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `FH` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `D` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `C2` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `C1` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `B` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `AEGK` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): remove old icons scalable ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.174.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.173.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-icons): npm audit fix vulnerabilities ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump TS to 4.2.4 [#869](https://github.com/salute-developers/plasma/pull/869) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.171.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
- feat(plasma-icons): raisedHand Icon added [#830](https://github.com/salute-developers/plasma/pull/830) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.168.0 (Thu Nov 02 2023)

#### 🚀 Enhancement

- Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
- feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.165.0 (Fri Sep 29 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- fix: Bump package-lock versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update version [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.161.0 (Thu Sep 14 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.159.0 (Mon Sep 04 2023)

#### 🚀 Enhancement

- feat(plasma-icons): add MessageChatFill [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-icons): add CameraVideoFill [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-icons): add SberSpasibo [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-icons): add part "How to add new icon" [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.155.0 (Fri Aug 18 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.154.0 (Thu Aug 03 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.153.0 (Thu Jul 13 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.152.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.150.0 (Thu Jun 01 2023)

#### 🐛 Bug Fix

- chore: [packages] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.149.0 (Mon May 22 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.147.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.146.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.142.0 (Thu Apr 27 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.141.0 (Wed Apr 26 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.140.1 (Tue Apr 25 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.140.0 (Mon Apr 24 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.137.0 (Wed Apr 12 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.135.0 (Wed Mar 29 2023)

#### 🚀 Enhancement

- feat(plasma-icons): add "Menu" icon [#448](https://github.com/salute-developers/plasma/pull/448) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.134.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.133.0 (Fri Mar 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.130.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.129.0 (Mon Mar 06 2023)

#### 🐛 Bug Fix

- build(plasma-icons): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.127.0 (Mon Feb 20 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.126.0 (Fri Feb 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.125.1 (Thu Feb 16 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.124.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.120.0 (Thu Feb 02 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove source maps from bundles [#309](https://github.com/salute-developers/plasma/pull/309) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.116.0 (Wed Jan 11 2023)

#### 🚀 Enhancement

- feat(plasma-icons): Add `CloudUpload`, `Record` and `Recording` icons [#277](https://github.com/salute-developers/plasma/pull/277) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.115.0 (Mon Dec 26 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.112.0 (Wed Dec 14 2022)

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.110.1 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.109.0 (Wed Nov 23 2022)

#### 🚀 Enhancement

- feat(plasma-icons): add aria-hidden attr [#222](https://github.com/salute-developers/plasma/pull/222) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.107.0 (Wed Nov 09 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add new call icons [#216](https://github.com/salute-developers/plasma/pull/216) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.106.2 (Wed Nov 09 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.105.1 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.103.1 (Thu Oct 27 2022)

#### 🐛 Bug Fix

- chore(plasma-icons,plasma-sb-utils): Bump plasma-core version [#200](https://github.com/salute-developers/plasma/pull/200) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.102.2 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.102.1 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.101.0 (Thu Oct 06 2022)

#### 🐛 Bug Fix

- chore(plasma-sb-utils): bump @salutejs/plasma-core version [#179](https://github.com/salute-developers/plasma/pull/179) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.100.0 (Mon Oct 03 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.99.0 (Wed Sep 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.98.2 (Mon Sep 26 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.98.1 (Tue Sep 20 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.98.0 (Thu Sep 15 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.91.1 (Tue Aug 16 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.90.0 (Tue Jul 19 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add `LocationFill` icon [#102](https://github.com/salute-developers/plasma/pull/102) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.87.0 (Wed Jun 22 2022)

#### 🐛 Bug Fix

- build(plasma-ui): added @babel/plugin-transform-react-constant-elements [#46](https://github.com/salute-developers/plasma/pull/46) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 1

- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.86.0 (Thu Jun 09 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add Sber Icons [#63](https://github.com/salute-developers/plasma/pull/63) ([@andart71](https://github.com/andart71))

#### Authors: 1

- Andrey Loshkarev ([@andart71](https://github.com/andart71))

---

# v1.85.0 (Tue Jun 07 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.84.0 (Tue May 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.83.1 (Thu May 19 2022)

#### 🐛 Bug Fix

- ci(plasma-icons): fix deps [#24](https://github.com/salute-developers/plasma/pull/24) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.83.0 (Wed May 11 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `36 dp` from P to W [#13](https://github.com/salute-developers/plasma/pull/13) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Add icons for `36 dp` from G to O [#11](https://github.com/salute-developers/plasma/pull/11) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.82.0 (Wed May 11 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `36 dp` from A to E [#12](https://github.com/salute-developers/plasma/pull/12) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.81.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `24 dp` from N to W [#10](https://github.com/salute-developers/plasma/pull/10) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.80.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `24 dp` from F to M [#14](https://github.com/salute-developers/plasma/pull/14) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.79.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `24 dp` from A to E [#15](https://github.com/salute-developers/plasma/pull/15) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.78.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add other icons for `24 dp` and `16 dp` [#9](https://github.com/salute-developers/plasma/pull/9) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.77.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `16 dp` [#8](https://github.com/salute-developers/plasma/pull/8) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.76.0 (Wed Apr 27 2022)

#### 🐛 Bug Fix

- fix: monorepo deps resolved [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.72.0 (Fri Mar 25 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add new root files for scalable icons [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Add first icons for 16,24 and 36 sizes [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore(plasma-icons): Update .gitignore and package.json [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.70.0 (Fri Mar 04 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.69.1 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.69.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.68.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.8 (Thu Feb 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.5 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.3 (Mon Feb 14 2022)

#### 🐛 Bug Fix

- fix(plasma-icons): remove unused icon [#1085](https://github.com/salute-developers/plasma/pull/1085) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.67.1 (Thu Feb 03 2022)

#### 🐛 Bug Fix

- fix: peer dependencies versions [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.67.0 (Wed Feb 02 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add all devices icons [#1051](https://github.com/salute-developers/plasma/pull/1051) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.66.0 (Tue Feb 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.65.1 (Fri Jan 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.63.2 (Thu Jan 13 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.63.1 (Tue Jan 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.61.0 (Wed Dec 15 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.60.0 (Wed Dec 15 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.56.0 (Wed Dec 01 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.54.0 (Mon Nov 22 2021)

#### 🚀 Enhancement

- feat(plasma-icons): Mark IconSpinner as deprecated [#919](https://github.com/salute-developers/plasma/pull/919) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix(plasma-icons): Remove IconVolumeMute icon [#919](https://github.com/salute-developers/plasma/pull/919) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.52.0 (Tue Nov 16 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.51.1 (Tue Nov 09 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.49.0 (Thu Oct 28 2021)

#### 🚀 Enhancement

- feat(plasma-icons): Update design for `Hearts` icons [#896](https://github.com/salute-developers/plasma/pull/896) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.48.0 (Thu Oct 21 2021)

#### 🚀 Enhancement

- feat(plasma-icons): Added `PictureFilled` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Added `Drag` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Added `Music` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.47.2 (Thu Oct 14 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.47.1 (Wed Oct 13 2021)

#### 🐛 Bug Fix

- fix: Update package-locks [#853](https://github.com/salute-developers/plasma/pull/853) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.44.0 (Sun Oct 03 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.43.0 (Tue Sep 28 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.41.1 (Tue Sep 21 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.40.0 (Tue Sep 14 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.3 (Thu Sep 09 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.2 (Thu Sep 09 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.1 (Wed Sep 08 2021)

#### 🐛 Bug Fix

- chore(plasma-icons): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.39.0 (Wed Sep 01 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.38.1 (Tue Aug 31 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.37.0 (Fri Aug 27 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.36.0 (Mon Aug 23 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.35.0 (Fri Aug 20 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.33.1 (Wed Aug 18 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.32.0 (Tue Aug 10 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.31.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.30.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.28.0 (Mon Aug 02 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.27.0 (Mon Aug 02 2021)

#### 🐛 Bug Fix

- ci: Build plasma without rollup [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.26.0 (Tue Jul 27 2021)

#### 🐛 Bug Fix

- fix(plasma-icons): chevron-icons updated [#551](https://github.com/salute-developers/plasma/pull/551) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# v1.25.0 (Thu Jul 15 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.2 (Tue Jul 13 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.1 (Tue Jul 13 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.0 (Tue Jul 13 2021)

#### 🚀 Enhancement

- feat: react17 and test job added [#496](https://github.com/salute-developers/plasma/pull/496) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.21.1 (Wed Jul 07 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.21.0 (Fri Jul 02 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.20.1 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.20.0 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.17.0 (Fri Jun 18 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.16.0 (Wed Jun 09 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.15.1 (Wed Jun 09 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.14.0 (Mon May 31 2021)

#### 🚀 Enhancement

- feat: update plus circle icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: update heart stroke icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: add percent stroke icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: update plis circle icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.13.0 (Mon May 31 2021)

#### 🐛 Bug Fix

- fix: import es module from core in icons [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.12.2 (Mon May 31 2021)

#### 🐛 Bug Fix

- add Star icons [#418](https://github.com/salute-developers/plasma/pull/418) ([@Kud8](https://github.com/Kud8))

#### Authors: 1

- [@Kud8](https://github.com/Kud8)

---

# v1.12.1 (Thu May 20 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.11.1 (Mon May 17 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.10.0 (Fri May 14 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.9.0 (Thu May 13 2021)

#### 🐛 Bug Fix

- chore: update package-locks [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- chore: soft peerDependencies only [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.8.0 (Tue May 11 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.7.0 (Fri May 07 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.6.0 (Thu May 06 2021)

#### 🐛 Bug Fix

- build: fix package-locks [#337](https://github.com/salute-developers/plasma/pull/337) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# vnull (Tue Apr 27 2021)

#### ⚠️ Pushed to `master`

- {chore: update package-locks} ([@github-actions[bot]](https://github.com/github-actions[bot]))

#### Authors: 1

- [@github-actions[bot]](https://github.com/github-actions[bot])

---

# v1.2.0 (Thu Apr 15 2021)

#### 🚀 Enhancement

- feat(plasma-icons): Using plasma-core's tokens [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.1.1 (Thu Apr 15 2021)

#### 🐛 Bug Fix

- fix: bump peerDeps [#307](https://github.com/salute-developers/plasma/pull/307) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.1.0 (Wed Apr 07 2021)

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))
- Update CHANGELOG.md \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.0.0 (Fri Apr 02 2021)

#### 🚀 Enhancement

- feat: esm build, fix package-lock after rebase [#279](https://github.com/salute-developers/plasma/pull/279) ([@KateKate](https://github.com/KateKate))
- feat: esm build core, icons, ui, web [#279](https://github.com/salute-developers/plasma/pull/279) ([@KateKate](https://github.com/KateKate))
- feat: Button text-overflow, Icon flex [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat(plasma-icons): убрать фильтры [#279](https://github.com/salute-developers/plasma/pull/279) (alisabelousova007@gmail.com)
- feat(plasma-icons): новые иконки [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- feat(plasma-icons): добавлена иконка feedback [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- feat: иконки вынесены в plasma-icons [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))

#### 🐛 Bug Fix

- fix: plasma doc before major [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- fix(plasma-icons): Icon move className to root obj [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- chore: изменены ссылки на документацию [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- fix(plasma-icons): добавлены styled-components [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- refactor: убраны rem-ы из html svg [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore(plasma-icons): иконки Info и Share [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- fix: исправлена ошибка при билде документации [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore: изменен скрипт сборки доки [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore: изменена документация для иконок [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore: изменены имена некоторых иконок по фигме [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 5

- [@IgorAntonov](https://github.com/IgorAntonov)
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Белоусова Алиса Дмитриевна (alisabelousova007@gmail.com)
