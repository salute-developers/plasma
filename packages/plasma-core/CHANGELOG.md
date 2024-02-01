# v1.146.0 (Thu Feb 01 2024)

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
- feat(plasma-core): update Toast tests ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-01-31 ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-new-hope): Update behavior with defaultValue for `TextArea` component [#1017](https://github.com/salute-developers/plasma/pull/1017) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-new-hope): Add wrapping to placeholder for `TextArea` component ([@neretin-trike](https://github.com/neretin-trike))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

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

# v1.144.0 (Thu Jan 18 2024)

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

- feat: manual publish latest ([@Yakutoc](https://github.com/Yakutoc))
- Release by 18.01.2024 [#981](https://github.com/salute-developers/plasma/pull/981) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-web/b2c): update tests depending on Badge ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c/web/core): add Badge & QuantityBadge to packages ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore(plasma-core): return explicit type exports in src/types [#940](https://github.com/salute-developers/plasma/pull/940) ([@shuga2704](https://github.com/shuga2704))
- feat(api-report): add scrollSnapStop property to the Carousel component ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-core): add scrollSnapStop property to the Carousel component ([@shuga2704](https://github.com/shuga2704))

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

# v1.142.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- test(plasma-b2c/web): fix tests depending on typography ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-web,plasma-b2c): Update snapshots and add test ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.141.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-core): bump "@microsoft/api-extractor" to 7.38.3 [#860](https://github.com/salute-developers/plasma/pull/860) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-core): fix vulnerabilities: high, critical ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.139.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
- feat: api report for ts@4.2.4 [#843](https://github.com/salute-developers/plasma/pull/843) ([@Yakutoc](https://github.com/Yakutoc))
- feat: bump TS to 4.2.4 ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.137.0 (Thu Nov 02 2023)

#### 🚀 Enhancement

- Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
- feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-new-hope): new classes API for Popup [#819](https://github.com/salute-developers/plasma/pull/819) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-ui, plasma-web, plasma-b2c): new animation API for PopupBase/ModalBase ([@kayman233](https://github.com/kayman233))
- fix(plasma-core): new animation API for PopupBase/ModalBase ([@kayman233](https://github.com/kayman233))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.135.0 (Thu Oct 19 2023)

#### 🚀 Enhancement

- Release 19.10.2023 [#815](https://github.com/salute-developers/plasma/pull/815) ([@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Yakutoc](https://github.com/Yakutoc) nikita.belyanskiy@south.rt.ru [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-core): animation with other API ([@kayman233](https://github.com/kayman233))
- feat(plasma-ui): add placement for Confirm ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope/b2c/web/core): Add Popover to new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- fix(plasma-core, plasma-ui): remove withAnimation from PopupBase ([@kayman233](https://github.com/kayman233))
- fix(plasma-core, plasma-ui): minor refactoring and types fix ([@kayman233](https://github.com/kayman233))
- feat(plasma-core, plasma-ui): add animation for PopupBase etc ([@kayman233](https://github.com/kayman233))
- docs(plasma-core/hope/web/b2c): generate new api ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs: generate new api for plasma-core ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-web-docs): Make button blur prop deprecated ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-core): refactor in PopupBase/ModalBase ([@kayman233](https://github.com/kayman233))
- feat(plasma-core, plasma-web, plasma-b2c): ModalBase component ([@kayman233](https://github.com/kayman233))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.134.0 (Fri Sep 29 2023)

#### 🚀 Enhancement

- feat(plasma-core): focusTrap, arrow and offset for Popover [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-new-hope,plasma-core): Add core `Spinner` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- fix: Bump package-lock versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-core): PopupBase refactoring [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- feat(plasma-web, plasma-b2c): PopupBase component [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- fix(plasma-core): Popover refactoring [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- fix(plasma-hope): move focusTrap to plasma-core [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- feat(plasma-web, plasma-b2c): Popover component [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- chore: update version [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-ui,plasma-web,plasma-b2c): Button Spinner checked color [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.130.0 (Thu Sep 14 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.128.0 (Mon Sep 04 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.126.0 (Fri Aug 18 2023)

#### 🚀 Enhancement

- fix(plasma-core): Add requestAnimationFrame for useResizeObserver hook [#660](https://github.com/salute-developers/plasma/pull/660) (neretinartem@Neretins-MacBook-Pro.local)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)

---

# v1.125.0 (Thu Aug 03 2023)

#### 🐛 Bug Fix

- test(plasma-core): Update test and snapshots for `contentRight` [#621](https://github.com/salute-developers/plasma/pull/621) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge branch 'dev' ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.124.0 (Thu Jul 13 2023)

#### 🚀 Enhancement

- feat(plasma-core): custom width/height for TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- fix(plasma-core): new height/width types in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
- fix(plasma-core): fix cols/rows usage in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.123.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.122.0 (Tue Jun 20 2023)

#### 🐛 Bug Fix

- fix(plasma-core): Add promise resolve for forceUpdate method in `Popup` and `Tooltip` components [#554](https://github.com/salute-developers/plasma/pull/554) (neretinartem@Neretins-MacBook-Pro.local)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)

---

# v1.121.0 (Thu Jun 01 2023)

#### 🐛 Bug Fix

- fix(deps): update dependency react-popper to v2.3.0 [#526](https://github.com/salute-developers/plasma/pull/526) ([@renovate[bot]](https://github.com/renovate[bot]))
- test: resolve cy-utils [#526](https://github.com/salute-developers/plasma/pull/526) ([@kayman233](https://github.com/kayman233))
- chore: [packages] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- [@renovate[bot]](https://github.com/renovate[bot])
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.120.0 (Mon May 22 2023)

#### 🚀 Enhancement

- feat: change api-report for Basebox [#511](https://github.com/salute-developers/plasma/pull/511) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- fix(plasma-web, plasma-b2c, plasma-ui): fix single/multiple lines in Checkbox/Radiobox ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.118.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.117.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.112.0 (Wed Apr 26 2023)

#### 🚀 Enhancement

- feat: change api-report after usePopper in popup [#490](https://github.com/salute-developers/plasma/pull/490) ([@kayman233](https://github.com/kayman233))
- feat(plasma-core): auto placements in Popup ([@kayman233](https://github.com/kayman233))
- feat(plasma-core): usePopper in popup ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# v1.111.1 (Tue Apr 25 2023)

#### 🐛 Bug Fix

- fix(plasma-core): add default uniqId for Spinner [#492](https://github.com/salute-developers/plasma/pull/492) ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.111.0 (Mon Apr 24 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.108.0 (Wed Apr 12 2023)

#### 🚀 Enhancement

- feat(plasma-core): Add `collectPackageInfo` and custom babel config (neretinartem@Neretins-MBP.netis)
- feat(plasma-core): add test for prop 'as' [#469](https://github.com/salute-developers/plasma/pull/469) ([@Yakutoc](https://github.com/Yakutoc))

#### ⚠️ Pushed to `master`

- refactor(plasma-ui,plasma-core,plasma-hope): Refactor some components for clean re-export (neretinartem@Neretins-MBP.netis)

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v1.107.1 (Mon Apr 10 2023)

#### 🐛 Bug Fix

- fix: api report after export "Image" component from "plasma-core" [#467](https://github.com/salute-developers/plasma/pull/467) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-core): export "Image" as styled component ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.106.0 (Tue Mar 21 2023)

#### 🚀 Enhancement

- feat(plamas-core): Update API for useDebouncedFunction hook [#430](https://github.com/salute-developers/plasma/pull/430) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix(plasma-*): Fix some types by es-lint rules ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.105.0 (Fri Mar 17 2023)

#### 🐛 Bug Fix

- test(plasma-b2c,plasma-web): Add error exclude for `TextArea` component [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.104.0 (Thu Mar 16 2023)

#### 🐛 Bug Fix

- feat(plasma-core,plasma-hope): Add build watcher and export tokens [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.103.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat: add api reports after change slider types [#398](https://github.com/salute-developers/plasma/pull/398) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- fix(plasma-core): rework slider types [#398](https://github.com/salute-developers/plasma/pull/398) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.102.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.101.0 (Mon Mar 06 2023)

#### 🐛 Bug Fix

- build(plasma-core): bump react to 18 version [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.100.1 (Fri Mar 03 2023)

#### 🐛 Bug Fix

- fix(plasma-core): fix IS_REACT_18 [#380](https://github.com/salute-developers/plasma/pull/380) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.100.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export Slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-core): feat react-draggable [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-core): slider move to core [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.99.0 (Mon Feb 20 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.98.0 (Fri Feb 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.97.1 (Thu Feb 16 2023)

#### 🐛 Bug Fix

- build: add api reports to plasma-core & hope [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.97.0 (Wed Feb 15 2023)

#### 🚀 Enhancement

- feat(plasma-core): add test for offset prop [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-core): add offset prop [#336](https://github.com/salute-developers/plasma/pull/336) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- refactor(plasma-web/plasma-b2c): move common code to plasma-hope [#324](https://github.com/salute-developers/plasma/pull/324) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.96.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.95.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- chore(plasma-core): add issue for cypress "clearTimeout on hide" test [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-core): add onHide/onShow callbacks [#319](https://github.com/salute-developers/plasma/pull/319) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.94.0 (Fri Feb 10 2023)

#### 🚀 Enhancement

- feat(plasma-*): Add .npmignore and remove file field for test files [#322](https://github.com/salute-developers/plasma/pull/322) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.92.0 (Thu Feb 02 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove source maps from bundles [#309](https://github.com/salute-developers/plasma/pull/309) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.90.0 (Wed Jan 25 2023)

#### 🚀 Enhancement

- feat(plasma-ui): add support of @salutejs/spatial, fix context memoization in Tabs [#285](https://github.com/salute-developers/plasma/pull/285) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### Authors: 1

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.89.0 (Thu Jan 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: improve ts-coverage report [#282](https://github.com/salute-developers/plasma/pull/282) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.87.0 (Thu Dec 22 2022)

#### 🚀 Enhancement

- feat(plasma-core): handling button type [#272](https://github.com/salute-developers/plasma/pull/272) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.85.0 (Wed Dec 14 2022)

#### 🐛 Bug Fix

- fix(plasma-core): Toast hiding with react-18 [#261](https://github.com/salute-developers/plasma/pull/261) ([@Yeti-or](https://github.com/Yeti-or))
- Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.83.2 (Thu Dec 01 2022)

#### 🐛 Bug Fix

- fix(plasma-core): centering content [#253](https://github.com/salute-developers/plasma/pull/253) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.83.0 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- fix(plasma-core): improve type-coverage [#231](https://github.com/salute-developers/plasma/pull/231) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.82.1 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- docs(plasma-core): Skeleton: fix typo [#241](https://github.com/salute-developers/plasma/pull/241) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.82.0 (Thu Nov 17 2022)

#### 🚀 Enhancement

- feat(plasma-core/plasma-ui): [cypress] processing periodicity [#220](https://github.com/salute-developers/plasma/pull/220) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-core): add price periodicity [#220](https://github.com/salute-developers/plasma/pull/220) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.81.2 (Wed Nov 09 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.81.1 (Tue Nov 08 2022)

#### 🐛 Bug Fix

- feat(plasma-typo,plasma-core): Add duplicate some mixins for interrupt cycle in dependencies [#214](https://github.com/salute-developers/plasma/pull/214) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.80.1 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.80.0 (Mon Oct 31 2022)

#### 🚀 Enhancement

- feat(plasma-core): add tabs gap [#197](https://github.com/salute-developers/plasma/pull/197) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.79.0 (Thu Oct 27 2022)

#### 🚀 Enhancement

- feat(plasma-core): handle "Spinner" size [#193](https://github.com/salute-developers/plasma/pull/193) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-core): pass ThemeProviderContextBase for Button [#193](https://github.com/salute-developers/plasma/pull/193) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.76.2 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- fix(plasma-ui): fixes CarouselLite short track scroll bug [#184](https://github.com/salute-developers/plasma/pull/184) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.76.1 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- fix(plasma-core): Fix wrapper props for `Button` component [#183](https://github.com/salute-developers/plasma/pull/183) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.76.0 (Mon Oct 10 2022)

#### 🚀 Enhancement

- feat(plasma-core): Add loader prop for `Button` component [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- test(plasma-b2c,plasma-ui,plasma-web): Add test and snapshot for `Button` component [#156](https://github.com/salute-developers/plasma/pull/156) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.74.0 (Mon Oct 03 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.73.0 (Wed Sep 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.72.2 (Mon Sep 26 2022)

#### 🐛 Bug Fix

- fix(plasma-ui): scroll carousel on touch devices [#169](https://github.com/salute-developers/plasma/pull/169) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.72.1 (Tue Sep 20 2022)

#### 🐛 Bug Fix

- fix(plasma-ui): restore scroll in translateToIndex [#162](https://github.com/salute-developers/plasma/pull/162) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.72.0 (Thu Sep 15 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.70.0 (Tue Sep 13 2022)

#### 🚀 Enhancement

- feat(plasma-ui): add CarouselLite component [#155](https://github.com/salute-developers/plasma/pull/155) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### Authors: 1

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))

---

# v1.68.0 (Thu Sep 01 2022)

#### 🐛 Bug Fix

- test(plasma-web): Update tests and snapshots for `TextArea` [#148](https://github.com/salute-developers/plasma/pull/148) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.67.0 (Mon Aug 29 2022)

#### 🚀 Enhancement

- feat(plasma-core): pass srcset props to img [#139](https://github.com/salute-developers/plasma/pull/139) ([@Gerpea](https://github.com/Gerpea))

#### Authors: 1

- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# v1.65.1 (Tue Aug 16 2022)

#### 🐛 Bug Fix

- feat(plasma-web,plasma-b2c): Add cover, background and coverGradient for `Card` component [#118](https://github.com/salute-developers/plasma/pull/118) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.65.0 (Wed Aug 10 2022)

#### 🐛 Bug Fix

- chore(plasma-core): Remove `Grid` component and `mediaQuery` utils [#120](https://github.com/salute-developers/plasma/pull/120) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.64.3 (Fri Jul 22 2022)

#### 🐛 Bug Fix

- test(plasma-core,plasma-ui,plasma-web): Update tests for `Tab` component [#106](https://github.com/salute-developers/plasma/pull/106) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-core): Replace tag to div in `TabItem` for `Tab` component [#106](https://github.com/salute-developers/plasma/pull/106) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.64.2 (Wed Jul 20 2022)

#### 🐛 Bug Fix

- fix(plasma-core): fixed skeleton performance issues [#101](https://github.com/salute-developers/plasma/pull/101) (vanxellshing24@gmail.com)

#### Authors: 1

- rpg59 (vanxellshing24@gmail.com)

---

# v1.64.1 (Fri Jul 15 2022)

#### 🐛 Bug Fix

- fix(plasma-core): fix autoscroll with row placement [#95](https://github.com/salute-developers/plasma/pull/95) ([@Gerpea](https://github.com/Gerpea))

#### Authors: 1

- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# v1.64.0 (Wed Jul 06 2022)

#### 🚀 Enhancement

- feat(plasma-core): add autoscroll tabs on focus [#66](https://github.com/salute-developers/plasma/pull/66) ([@Gerpea](https://github.com/Gerpea))

#### Authors: 1

- German Cyganov ([@Gerpea](https://github.com/Gerpea))

---

# v1.63.0 (Wed Jun 29 2022)

#### 🚀 Enhancement

- feat(plasma-ui): update @salutejs/use-virtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
- feat(plasma-ui): drop CarouselColVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
- feat(plasma-ui): fix Carousel types [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- feat(plasma-ui): CarouselColVirtual, CarouselItemVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
- feat(plasma-ui): CarouselTemplate [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- feat(plasma-ui): support of the withUseVirtual in the CarouselCol [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))
- feat(plasma-ui): BasiVirtual wip [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))

#### 🐛 Bug Fix

- docs(plasma-ui): CarouselVirtual [#57](https://github.com/salute-developers/plasma/pull/57) ([@KateKate](https://github.com/KateKate))
- test(plasma-ui): fix export of CarouselItemVirtual, update contributing.md [#57](https://github.com/salute-developers/plasma/pull/57) ([@arsenykruglikov](https://github.com/arsenykruglikov))

#### Authors: 2

- Arseny Kruglikov ([@arsenykruglikov](https://github.com/arsenykruglikov))
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))

---

# v1.62.0 (Wed Jun 22 2022)

#### 🚀 Enhancement

- feat(plasma-core): Add `Card` component [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- test(plasma-core): Add snapshots and tests for `Card` component [#70](https://github.com/salute-developers/plasma/pull/70) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- build(plasma-ui): added @babel/plugin-transform-react-constant-elements [#46](https://github.com/salute-developers/plasma/pull/46) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.61.0 (Tue Jun 07 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.60.1 (Thu Jun 02 2022)

#### 🐛 Bug Fix

- fix(plasma-core, plasma-ui, plasma-web): changes the refs array to html collection [#34](https://github.com/salute-developers/plasma/pull/34) (Kruglikov.A.D@sberbank.ru)

#### Authors: 1

- Arseny Kruglikov (Kruglikov.A.D@sberbank.ru)

---

# v1.60.0 (Tue May 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.59.2 (Mon May 23 2022)

#### 🐛 Bug Fix

- test(plasma-ui): Toast: clearTimeout after hiding [#26](https://github.com/salute-developers/plasma/pull/26) ([@Yeti-or](https://github.com/Yeti-or))
- fix(plasma-ui): Toast: clearTimeout after hiding [#26](https://github.com/salute-developers/plasma/pull/26) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.59.1 (Thu May 19 2022)

#### 🐛 Bug Fix

- fix(plasma-core): unnecessary Price export [#25](https://github.com/salute-developers/plasma/pull/25) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.59.0 (Tue May 17 2022)

#### 🐛 Bug Fix

- test(plasma-b2c): Add test and snapshots for `Dspl` and `H` components [#7](https://github.com/salute-developers/plasma/pull/7) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.58.0 (Wed May 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.57.0 (Wed Apr 27 2022)

#### 🚀 Enhancement

- feat(plasma-core): Add `useResizeObserver` hook ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix: linting errs [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- fix: monorepo deps resolved [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))

#### ⚠️ Pushed to `master`

- test(plasma-web,plasma-b2c,plasma-ui): Update snapshot and test for `TextArea` component ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.56.0 (Tue Apr 12 2022)

#### 🚀 Enhancement

- feat: Added possibility to disable CSS animations via ThemeProvider [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: disableAnimation => lowPerformance [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.55.0 (Thu Apr 07 2022)

#### 🐛 Bug Fix

- fix: `Field` and `Input` props interfaces facelifting [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.54.0 (Thu Mar 31 2022)

#### 🚀 Enhancement

- feat(plasma-web): `Dropdown` a11y: navigating with keyboard [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- test(plasma-web): `Radiobox`: check only for id existance [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))
- fix(plasma-web): `Checkbox` & `Radibox` labeled and described by attrs and elems [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.53.0 (Fri Mar 11 2022)

#### 🚀 Enhancement

- feat(plasma-core): Add onDetectActiveItem callback for `Carousel` component [#1081](https://github.com/salute-developers/plasma/pull/1081) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.52.0 (Fri Mar 04 2022)

#### 🚀 Enhancement

- feat(plasma-core): add ref to popup [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))
- feat(plasma-core): add multiselect logic to keyboard navigation hook [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))
- feat(plasma-core): add keyboard navigation hook [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))

#### Authors: 1

- Дмитрий Лекомцев ([@didolf](https://github.com/didolf))

---

# v1.51.1 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- fix(plasma-core): fix BaseTabs disable state [#1116](https://github.com/salute-developers/plasma/pull/1116) ([@LamaEats](https://github.com/LamaEats))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.51.0 (Tue Mar 01 2022)

#### 🚀 Enhancement

- feat: `PaginationDots`: made `aria-hidden=true` by default [#1108](https://github.com/salute-developers/plasma/pull/1108) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.50.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- fix(plasma-web): Image ratio fix [#1117](https://github.com/salute-developers/plasma/pull/1117) ([@kayman233](https://github.com/kayman233))
- fix(plasma-core): Use default view for input readonly state [#1114](https://github.com/salute-developers/plasma/pull/1114) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))
- test(plasma-b2c): Added responsive typo tests [#1044](https://github.com/salute-developers/plasma/pull/1044) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- [@kvpolyanskiy](https://github.com/kvpolyanskiy)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.49.7 (Thu Feb 24 2022)

#### 🐛 Bug Fix

- fix: `Tabs`: removed focus outline in item text [#1115](https://github.com/salute-developers/plasma/pull/1115) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.49.6 (Thu Feb 24 2022)

#### 🐛 Bug Fix

- fix(plasma-web): `Carousel`: moved style resets to core [#1104](https://github.com/salute-developers/plasma/pull/1104) ([@fanisco](https://github.com/fanisco))
- fix(plasma-core): Add data selector for syntheticFocus in `addFocus` mixin [#1113](https://github.com/salute-developers/plasma/pull/1113) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.49.5 (Fri Feb 18 2022)

#### 🐛 Bug Fix

- chore: Added fixme comments for background tokens [#1106](https://github.com/salute-developers/plasma/pull/1106) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.49.4 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- feat(plasma-ui, plasma-web, plasma-b2c): `Button`: Added theming [#1063](https://github.com/salute-developers/plasma/pull/1063) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.49.3 (Wed Feb 16 2022)

#### 🐛 Bug Fix

- fix(plasma-web, plasma-b2c): `TextField`: separated helper spacing styles [#1090](https://github.com/salute-developers/plasma/pull/1090) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.49.1 (Thu Feb 03 2022)

#### 🐛 Bug Fix

- fix: peer dependencies versions [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.49.0 (Tue Feb 01 2022)

#### 🐛 Bug Fix

- fix(plasma-web, plasma-ui): `Basebox`: Hide input properly; tabIndex={-1} on root [#1057](https://github.com/salute-developers/plasma/pull/1057) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.48.1 (Fri Jan 28 2022)

#### 🐛 Bug Fix

- fix(plasma-core): Add inherit cursor in label for `BaseBox` component [#1056](https://github.com/salute-developers/plasma/pull/1056) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.48.0 (Thu Jan 27 2022)

#### 🚀 Enhancement

- feat(plasma-core): Add scrollable container for `Tab` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- test(plasma-b2c,plasma-web,plasma-ui): Add test and update snapshots for `Tab` component [#976](https://github.com/salute-developers/plasma/pull/976) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.47.0 (Tue Jan 25 2022)

#### 🚀 Enhancement

- feat(plasma-core): Make toasts stretch more then 50% of container [#1037](https://github.com/salute-developers/plasma/pull/1037) (yaarny@gmail.com)

#### Authors: 1

- Булах Александр (yaarny@gmail.com)

---

# v1.46.2 (Thu Jan 13 2022)

#### 🐛 Bug Fix

- test: Skip `Toast` test [#1033](https://github.com/salute-developers/plasma/pull/1033) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.46.1 (Tue Jan 11 2022)

#### 🐛 Bug Fix

- refactor: Move `Carousel`'s modules in Core/UI/Web [#973](https://github.com/salute-developers/plasma/pull/973) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.45.0 (Wed Dec 29 2021)

#### 🐛 Bug Fix

- test: Add controller tests with keydown for plasma-ui [#985](https://github.com/salute-developers/plasma/pull/985) ([@neretin-trike](https://github.com/neretin-trike))
- test: Complete tests for `Tabs` [#985](https://github.com/salute-developers/plasma/pull/985) ([@fanisco](https://github.com/fanisco))
- fix(plasma-core): Add fix for `Carousel` component in start scroll align with vertical orientation [#996](https://github.com/salute-developers/plasma/pull/996) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.44.1 (Thu Dec 23 2021)

#### 🐛 Bug Fix

- fix(plasma-ui): Prevent `Radiobox`'s & `Checkbox`'s trigger from squeeze [#958](https://github.com/salute-developers/plasma/pull/958) ([@fanisco](https://github.com/fanisco))
- test(plasma-ui): Radiobox: uniqId test [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.44.0 (Wed Dec 15 2021)

#### 🐛 Bug Fix

- test(plasma-ui): fix Skeleton component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui): add Fade component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui): add Toast component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui): add Grid component tests [#990](https://github.com/salute-developers/plasma/pull/990) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.43.0 (Wed Dec 15 2021)

#### 🚀 Enhancement

- feat(plasma-core): Add ReactNode type for label in `Checkbox` component [#969](https://github.com/salute-developers/plasma/pull/969) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.42.0 (Tue Dec 14 2021)

#### 🐛 Bug Fix

- fix: Set Underline to uppercase [#950](https://github.com/salute-developers/plasma/pull/950) ([@fanisco](https://github.com/fanisco))
- test(plasma-ui): add more Image component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui): add Skeleton component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-ui): add Spinner component tests [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.41.1 (Thu Dec 09 2021)

#### 🐛 Bug Fix

- test(plasma-web,plasma-ui): Add test and update snapshots for `Typography` components [#962](https://github.com/salute-developers/plasma/pull/962) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c,plasma-core): Add breakWord props for `Typography` components [#962](https://github.com/salute-developers/plasma/pull/962) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.41.0 (Tue Dec 07 2021)

#### 🚀 Enhancement

- feat: add RadioGroup components [#676](https://github.com/salute-developers/plasma/pull/676) ([@OgNellis](https://github.com/OgNellis))

#### 🐛 Bug Fix

- fix: accessibility of checkbox and radiobox for nvda and jaws [#676](https://github.com/salute-developers/plasma/pull/676) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.40.0 (Fri Dec 03 2021)

#### 🚀 Enhancement

- feat: Added `createButton` as a constructor function for `Button` [#946](https://github.com/salute-developers/plasma/pull/946) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- test(plasma-ui): Update tests for `Button` and add for `ActionButton` [#946](https://github.com/salute-developers/plasma/pull/946) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.39.0 (Wed Dec 01 2021)

#### 🚀 Enhancement

- feat: Moved `TabsController` as a creator function [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix: Correct role for `Tabs` - tablist [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- docs(plasma-ui): Added documentation for `useForkRef` [#923](https://github.com/salute-developers/plasma/pull/923) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.38.0 (Mon Nov 22 2021)

#### 🚀 Enhancement

- feat: Replace `TextField` with `Field` [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))
- feat: Separated `Input` and `TextArea` [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))
- feat: Added `Field` component to replace `TextField`'s functionality [#910](https://github.com/salute-developers/plasma/pull/910) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.37.0 (Thu Nov 18 2021)

#### 🚀 Enhancement

- feat: export spacing [#936](https://github.com/salute-developers/plasma/pull/936) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.36.0 (Tue Nov 16 2021)

#### 🐛 Bug Fix

- fix: Render popup `Popup` when it's hidden [#903](https://github.com/salute-developers/plasma/pull/903) ([@fanisco](https://github.com/fanisco))
- test(plasma-ui): Update test for `Image` [#920](https://github.com/salute-developers/plasma/pull/920) ([@fanisco](https://github.com/fanisco))
- Revert "fix: b2c preview gallery image size" [#920](https://github.com/salute-developers/plasma/pull/920) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.35.2 (Mon Nov 15 2021)

#### 🐛 Bug Fix

- fix: Separate `Input`'s animation by b2b and b2c [#908](https://github.com/salute-developers/plasma/pull/908) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.35.1 (Tue Nov 09 2021)

#### 🐛 Bug Fix

- test(plasma-ui): Added for `Image` component [#909](https://github.com/salute-developers/plasma/pull/909) ([@fanisco](https://github.com/fanisco))
- fix: Pass `Image`'s width and height through args [#909](https://github.com/salute-developers/plasma/pull/909) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.35.0 (Tue Nov 09 2021)

#### 🚀 Enhancement

- feat(plasma-ui): A11y for `Toast` [#710](https://github.com/salute-developers/plasma/pull/710) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- test: Improve tests for `TextField` and `TextArea` [#914](https://github.com/salute-developers/plasma/pull/914) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.34.0 (Fri Oct 29 2021)

#### 🚀 Enhancement

- feat(plasma-ui): `Dropdown` custom composition [#866](https://github.com/salute-developers/plasma/pull/866) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.33.4 (Sun Oct 24 2021)

#### 🐛 Bug Fix

- fix: b2c preview gallery image size [#890](https://github.com/salute-developers/plasma/pull/890) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.33.2 (Thu Oct 14 2021)

#### 🐛 Bug Fix

- fix(plasma-web, plasma-b2c): Fix re-exporting [#864](https://github.com/salute-developers/plasma/pull/864) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.33.1 (Wed Oct 13 2021)

#### 🐛 Bug Fix

- fix: Update package-locks [#853](https://github.com/salute-developers/plasma/pull/853) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.32.0 (Mon Oct 11 2021)

#### 🚀 Enhancement

- feat: new grid breakpoint for 16 cols [#825](https://github.com/salute-developers/plasma/pull/825) ([@takovoy](https://github.com/takovoy))

#### Authors: 1

- Aleksandr Sustavov ([@takovoy](https://github.com/takovoy))

---

# v1.31.0 (Fri Oct 08 2021)

#### 🚀 Enhancement

- feat(plasma-core): Added global `dark0N` colors [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))
- feat(plasma-b2c): `Toast` icon [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))
- feat(plasma-core): Shared `Toast` between libraries [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- test: Component test for B2C `Toast` [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### ⚠️ Pushed to `master`

- build(plasma-core/ui/b2c/web): fix storybook build ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.30.1 (Wed Oct 06 2021)

#### 🐛 Bug Fix

- test: add SBSans to cypress [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-core/ui/web): fix tests [#830](https://github.com/salute-developers/plasma/pull/830) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.30.0 (Sun Oct 03 2021)

#### 🚀 Enhancement

- feat(plasma-cy-utils): padMe [#824](https://github.com/salute-developers/plasma/pull/824) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.29.1 (Sun Oct 03 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: move cypress helpers to utils [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
- test(Badge): update screens [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
- test(plasma-web/plasma-ui): move cy tests to plasma-core [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.29.0 (Fri Sep 24 2021)

#### 🐛 Bug Fix

- chore: resolve cypress and jest conflicts [#573](https://github.com/salute-developers/plasma/pull/573) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.28.1 (Tue Sep 21 2021)

#### 🐛 Bug Fix

- chore: Delete extract-sb-docgen-info [#801](https://github.com/salute-developers/plasma/pull/801) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.28.0 (Mon Sep 20 2021)

#### 🐛 Bug Fix

- fix: `Tabs` disabled state [#804](https://github.com/salute-developers/plasma/pull/804) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.27.4 (Tue Sep 14 2021)

#### 🐛 Bug Fix

- fix(plasma-web): Collision of `Button` and global custom css [#703](https://github.com/salute-developers/plasma/pull/703) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.27.3 (Thu Sep 09 2021)

#### 🐛 Bug Fix

- fix: Display `inline-flex` for `Badge` [#784](https://github.com/salute-developers/plasma/pull/784) ([@fanisco](https://github.com/fanisco))
- feat(plasma-ui, plasma-core): Added `forwardedAs` and `as` props to `Tabs` [#724](https://github.com/salute-developers/plasma/pull/724) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.27.2 (Wed Sep 08 2021)

#### 🐛 Bug Fix

- fix: Refactor `Checkbox` & `Radiobox` in order of better understanding [#698](https://github.com/salute-developers/plasma/pull/698) ([@fanisco](https://github.com/fanisco))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-core): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.27.1 (Tue Aug 31 2021)

#### 🐛 Bug Fix

- fix(plasma-core): fix monthName formatter [#693](https://github.com/salute-developers/plasma/pull/693) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.27.0 (Fri Aug 27 2021)

#### 🚀 Enhancement

- feat: A11y Tabs [#659](https://github.com/salute-developers/plasma/pull/659) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.26.0 (Mon Aug 23 2021)

#### 🚀 Enhancement

- feat(plasma-ui): Switch add readOnly prop [#650](https://github.com/salute-developers/plasma/pull/650) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.25.0 (Fri Aug 20 2021)

#### 🚀 Enhancement

- feat: Skeleton in core/ui/web [#628](https://github.com/salute-developers/plasma/pull/628) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.24.0 (Fri Aug 20 2021)

#### 🚀 Enhancement

- feat: A11y Switch [#633](https://github.com/salute-developers/plasma/pull/633) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.23.0 (Mon Aug 16 2021)

#### 🚀 Enhancement

- feat(plasma-ui): tabs api changed [#593](https://github.com/salute-developers/plasma/pull/593) ([@kayman233](https://github.com/kayman233))
- feat(plasma-ui): tabs animation added [#593](https://github.com/salute-developers/plasma/pull/593) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# v1.22.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

- fix: Execution layout effect on server [#607](https://github.com/salute-developers/plasma/pull/607) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.21.1 (Fri Aug 06 2021)

#### 🐛 Bug Fix

- fix(plasma-core): Image: add role attr [#620](https://github.com/salute-developers/plasma/pull/620) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.21.0 (Wed Aug 04 2021)

#### 🚀 Enhancement

- feat: Spacing mixin applySpacing [#585](https://github.com/salute-developers/plasma/pull/585) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.20.0 (Mon Aug 02 2021)

#### 🐛 Bug Fix

- ci: Build plasma without rollup [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.19.0 (Wed Jul 14 2021)

#### 🚀 Enhancement

- feat(plasma-core): delete storybook [#535](https://github.com/salute-developers/plasma/pull/535) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# v1.18.1 (Tue Jul 13 2021)

#### 🐛 Bug Fix

- fix: Pickers performance, no unnecessary rerender [#527](https://github.com/salute-developers/plasma/pull/527) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.18.0 (Tue Jul 13 2021)

#### 🚀 Enhancement

- feat: react17 and test job added [#496](https://github.com/salute-developers/plasma/pull/496) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# v1.17.0 (Fri Jul 09 2021)

#### 🐛 Bug Fix

- fix: Switch's focus [#494](https://github.com/salute-developers/plasma/pull/494) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.16.0 (Fri Jul 02 2021)

#### 🚀 Enhancement

- feat: Checkbox description color [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix: TextField placeholder placement [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
- fix: Build components with own namespace es/cjs [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
- fix: Checkbox layout with various content [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))
- fix: Input interface and props [#463](https://github.com/salute-developers/plasma/pull/463) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.15.1 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- fix(plasma-ui): no-select mixin in plasma-core [#462](https://github.com/salute-developers/plasma/pull/462) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# v1.15.0 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- fix(plasma-web): Removed tokens dependency [#468](https://github.com/salute-developers/plasma/pull/468) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.14.0 (Wed Jun 23 2021)

#### 🐛 Bug Fix

- chore: Added favicon for storybooks [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.13.0 (Tue Jun 22 2021)

#### 🚀 Enhancement

- feat(plasma-core): Spinner sizes [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))
- feat(plasma-web): Button success [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- docs: Stories for field [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))
- feat(plasma-core, plasma-ui, plasma-web): Reassembled Field [#438](https://github.com/salute-developers/plasma/pull/438) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.12.2 (Thu Jun 17 2021)

#### 🐛 Bug Fix

- fix(plasma-core): remove focus on click in button [#437](https://github.com/salute-developers/plasma/pull/437) ([@OgNellis](https://github.com/OgNellis))

#### Authors: 1

- Artem Feoktistov ([@OgNellis](https://github.com/OgNellis))

---

# v1.12.1 (Wed Jun 09 2021)

#### 🐛 Bug Fix

- fix(plasma-core): pass defaultChecked to Switch and Basebox [#338](https://github.com/salute-developers/plasma/pull/338) ([@tsumo](https://github.com/tsumo))

#### Authors: 1

- [@tsumo](https://github.com/tsumo)

---

# v1.12.0 (Mon Jun 07 2021)

#### 🚀 Enhancement

- feat: bump plasma-core [#432](https://github.com/salute-developers/plasma/pull/432) ([@Yeti-or](https://github.com/Yeti-or))
- feat: user Intl short month format for formatting [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: short month name in datepicker [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- fix: correct point deletion in short month name [#392](https://github.com/salute-developers/plasma/pull/392) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.11.0 (Mon May 31 2021)

#### 🚀 Enhancement

- feat: es module build for plasma-tokens [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: add root Spinner export [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: add Basebox export from root [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: add es module exports for plasma-ui [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- fix: all at once exports [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.10.0 (Thu May 20 2021)

#### 🐛 Bug Fix

- feat(plasma-core, plasma-ui, plasma-web): Moved PaginationDots to core [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))
- feat(plasma-core, plasma-ui, plasma-web): Moved Carousel to core [#389](https://github.com/salute-developers/plasma/pull/389) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.9.0 (Mon May 17 2021)

#### 🚀 Enhancement

- feat: Support setting color for Spinner [#326](https://github.com/salute-developers/plasma/pull/326) ([@nyet-ty](https://github.com/nyet-ty))

#### 🐛 Bug Fix

- fix(plasma-core): Id for Spinner's gradient [#326](https://github.com/salute-developers/plasma/pull/326) ([@fanisco](https://github.com/fanisco))
- feat(plasma-core, plasma-ui): Moved Spinner to core [#326](https://github.com/salute-developers/plasma/pull/326) (prokopyevviktor@yandex.ru)

#### Authors: 3

- [@nyet-ty](https://github.com/nyet-ty)
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Viktor Prokopyev (prokopyevviktor@yandex.ru)

---

# v1.8.0 (Thu May 13 2021)

#### 🚀 Enhancement

- feat: add description to Basebox [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- fix: fix Basebox styles [#347](https://github.com/salute-developers/plasma/pull/347) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- chore: soft peerDependencies only [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.7.0 (Fri May 07 2021)

#### 🚀 Enhancement

- feat(plasma-core): Added applyEllipsis mixin [#348](https://github.com/salute-developers/plasma/pull/348) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.6.0 (Thu May 06 2021)

#### 🐛 Bug Fix

- fix(plasma-core): Image: rendering image with background instead of src [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
- feat(plasma-core, plasma-ui, plasma-ui): Moved Image component [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))
- feat(plasma-core, plasma-ui, plasma-ui): Moved Price component [#342](https://github.com/salute-developers/plasma/pull/342) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.5.0 (Tue Apr 27 2021)

#### 🚀 Enhancement

- feat(plasma-web): Added Select component [#328](https://github.com/salute-developers/plasma/pull/328) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.4.0 (Tue Apr 20 2021)

#### 🐛 Bug Fix

- fix(plasma-core): Badge: fix padding for size s [#318](https://github.com/salute-developers/plasma/pull/318) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.3.0 (Fri Apr 16 2021)

#### 🚀 Enhancement

- feat(core): made reexport in ui & web, added showcase for web [#308](https://github.com/salute-developers/plasma/pull/308) (prokopyevviktor@yandex.ru)
- feat(core): added component badge in core [#308](https://github.com/salute-developers/plasma/pull/308) (prokopyevviktor@yandex.ru)

#### Authors: 1

- Viktor Prokopyev (prokopyevviktor@yandex.ru)

---

# v1.2.0 (Thu Apr 15 2021)

#### 🚀 Enhancement

- feat: Moved Typography to plasma-core / plasma-web [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix(plasma-ui, plasma-web): Fix setting props in TextField & TextArea [#299](https://github.com/salute-developers/plasma/pull/299) ([@LamaEats](https://github.com/LamaEats))
- chore(plasma-core, plasma-web): Added components to index files [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.1.0 (Wed Apr 07 2021)

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))
- Update CHANGELOG.md \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.0.0 (Fri Apr 02 2021)

#### 💥 Breaking Change

- feat!: Button view=overlay для расположения над мм-контентом [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))

#### 🚀 Enhancement

- feat(ui): Button/Tabs: resizible => stretch / fixedWidth => stretch. BREAKING [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- feat: Moved Grid from ui to plasma-core, Grid for plasma-web [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: esm build, fix package-lock after rebase [#279](https://github.com/salute-developers/plasma/pull/279) ([@KateKate](https://github.com/KateKate))
- feat: esm build core, icons, ui, web [#279](https://github.com/salute-developers/plasma/pull/279) ([@KateKate](https://github.com/KateKate))
- feat: Button: Code separation for easier composition and styling [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: Button text-overflow, Icon flex [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: Миксин blur для размытия подложек [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: Tabs перенесены в core [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: Контролы перенесены в core [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: Лицензия для core, ui: DeviceDetection [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: В компонент Core / Button занесен основной функционал [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: Button перенесена в plasma-core [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat: Core-библиотека plasma-core [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix: plasma doc before major [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- docs(plasma-core): Switch fix exmpl [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- docs(plasma-ui): Button: improve docs [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- chore(plasma-core): move helpers to __helpers [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- chore: Fix packages versions [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- fix(plasma-core): removed highlight on component tap in Chrome [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- chore: Bump independent versions [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- docs: README.md для core и ui [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- fix: Миксины skeleton и roundness, зависимость от core [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))

#### Authors: 3

- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
