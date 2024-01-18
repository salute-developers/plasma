# v0.76.0 (Thu Jan 18 2024)

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

# v0.75.0 (Fri Dec 22 2023)

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

# v0.74.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.72.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(utils): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.71.0 (Fri Sep 29 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.70.0 (Thu Sep 14 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.68.0 (Mon Sep 04 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(utils): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.66.0 (Fri Aug 18 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.64.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.62.0 (Thu Jun 01 2023)

#### 🐛 Bug Fix

- chore: [utils] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.60.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.59.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.54.0 (Mon Apr 24 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.50.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

- fix(plasma-*): Fix some types by es-lint rules ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.49.0 (Fri Mar 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.47.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix(plasma-cy-utils): Update js files by new typescript version [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.46.0 (Mon Mar 06 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- build(plasma-cy-utils): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.45.0 (Mon Feb 20 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.44.0 (Fri Feb 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.39.0 (Thu Jan 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: improve ts-coverage report [#282](https://github.com/salute-developers/plasma/pull/282) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.36.0 (Wed Dec 14 2022)

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.34.3 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- fix(plasma-cy-utils): improve type-coverage [#240](https://github.com/salute-developers/plasma/pull/240) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.34.2 (Wed Nov 09 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.33.1 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.29.2 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.29.1 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.27.0 (Mon Oct 03 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.26.0 (Wed Sep 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.25.2 (Mon Sep 26 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.25.1 (Tue Sep 20 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.25.0 (Thu Sep 15 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.18.1 (Tue Aug 16 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.14.0 (Tue Jun 07 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.13.0 (Tue May 24 2022)

#### 🚀 Enhancement

- feat(plasma-cy-utils): Add `Portal` component for cy-utils [#30](https://github.com/salute-developers/plasma/pull/30) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.12.1 (Thu May 19 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.11.0 (Wed May 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.10.1 (Thu May 05 2022)

#### 🐛 Bug Fix

- fix: packages structure [#17](https://github.com/salute-developers/plasma/pull/17) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.9.0 (Thu Apr 07 2022)

#### 🐛 Bug Fix

- ci: Added B2B `TextField` tests [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.8.0 (Fri Mar 04 2022)

#### 🐛 Bug Fix

- ci: Added `plasma-tokens-b2b` ct jobs [#1123](https://github.com/salute-developers/plasma/pull/1123) ([@fanisco](https://github.com/fanisco))
- test: update snaps [#1083](https://github.com/salute-developers/plasma/pull/1083) ([@didolf](https://github.com/didolf))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Дмитрий Лекомцев ([@didolf](https://github.com/didolf))

---

# v0.7.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.5.2 (Thu Feb 03 2022)

#### 🐛 Bug Fix

- fix: peer dependencies versions [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v0.4.1 (Thu Dec 23 2021)

#### 🐛 Bug Fix

- test(plasma-cy-utils): wrap SSRProvider over all tests [#1001](https://github.com/salute-developers/plasma/pull/1001) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.4.0 (Tue Dec 14 2021)

#### 🐛 Bug Fix

- test(plasma-cy-utils): add withNoAnimation helper [#978](https://github.com/salute-developers/plasma/pull/978) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.3.1 (Wed Oct 13 2021)

#### 🐛 Bug Fix

- fix: Update package-locks [#853](https://github.com/salute-developers/plasma/pull/853) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.2.0 (Fri Oct 08 2021)

#### 🐛 Bug Fix

- build(plasma-cy-utils): fix pck-locks [#829](https://github.com/salute-developers/plasma/pull/829) ([@Yeti-or](https://github.com/Yeti-or))
- chore(plasma-cy-utils): Update styled-components version [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))
- test(plasma-b2c): Added B2C typos for cy component test [#829](https://github.com/salute-developers/plasma/pull/829) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.1.1 (Wed Oct 06 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- test: update snapshots [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
- test: add SBSans to cypress [#832](https://github.com/salute-developers/plasma/pull/832) ([@Yeti-or](https://github.com/Yeti-or))
- ci: fix cy-tests build [#830](https://github.com/salute-developers/plasma/pull/830) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.1.0 (Sun Oct 03 2021)

#### 🚀 Enhancement

- feat(plasma-cy-utils): padMe [#824](https://github.com/salute-developers/plasma/pull/824) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.0.1 (Sun Oct 03 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- test(plasma-b2c): enable cypress comp tests [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))
- chore: move cypress helpers to utils [#823](https://github.com/salute-developers/plasma/pull/823) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
