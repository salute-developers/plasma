# v0.37.0 (Thu Jan 18 2024)

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
- feat(plasma-tokens-utils): Add kebab case fot typoe and color tokens ([@neretin-trike](https://github.com/neretin-trike))

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

# v0.36.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-tokens-utils): Add methods for handle fallback themes ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.35.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-tokens-utils): npm audit fix vulnerabilities ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump TS to 4.2.4 [#869](https://github.com/salute-developers/plasma/pull/869) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.34.0 (Thu Nov 16 2023)

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

# v0.33.0 (Fri Sep 29 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-utils): Add method for restored themes value from color palette [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-tokens,plasma-token-native): Change legacy token value to css-variables [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.32.0 (Thu Sep 14 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Add generate css files with typo tokens [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-tokens): Add generate css files with color tokens [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)
- feat(plasma-tokens-utils): Add kebab case for css vars in web themes [#699](https://github.com/salute-developers/plasma/pull/699) (neretinartem@Neretins-MacBook-Pro.local)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v0.31.0 (Mon Sep 04 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-utils): Update API: extract getThemeTokenDataGroups to index [#681](https://github.com/salute-developers/plasma/pull/681) (neretinartem@Neretins-MacBook-Pro.local)

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(utils): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)

---

# v0.30.0 (Fri Aug 18 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-native): Add generate `spacing` tokens for react-native [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- feat(palsma-tokens-*): Add borderRadius tokens generate for react-native and refactor config.ts [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- feat(plasma-tokens,plasma-tokens-utils): Add generate `spacing` tokens for web [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens,plasma-tokens-utils): Update `default` theme with actualized tokens [#660](https://github.com/salute-developers/plasma/pull/660) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.29.0 (Thu Aug 03 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-native): Update `react-native` generator for `shadow` tokens [#624](https://github.com/salute-developers/plasma/pull/624) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-tokens-utils): Add exclude `enabled=false` tokens from generated themes [#617](https://github.com/salute-developers/plasma/pull/617) ([@neretin-trike](https://github.com/neretin-trike))

#### ⚠️ Pushed to `master`

- Merge branch 'dev' ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.28.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.27.0 (Tue Jun 20 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-utils): Add support new format tokens value to generate (neretinartem@Neretins-MacBook-Pro.local)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)

---

# v0.26.0 (Mon May 22 2023)

#### 🚀 Enhancement

- feat(plasma-tokens): Add methods for generate border-radius tokens (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens): Rename file and methods for more symmantics (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v0.25.0 (Thu May 18 2023)

#### ⚠️ Pushed to `master`

- refactor(plasma-tokens-utils): Small refactor and remove unused code (neretinartem@Neretins-MBP.netis)
- feat(plasma-tokens, plasma-tokens-utils): Add generete token set and themes for new schemas (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v0.24.0 (Tue May 16 2023)

#### ⚠️ Pushed to `master`

- feat(plasma-tokens-utils, plasma-tokens): Extract generation methods to utility library (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v0.23.0 (Thu Apr 27 2023)

#### ⚠️ Pushed to `master`

- fix(plasma-tokens, plasma-tokens-utiles): Add plasma-colors prefix to depracted tokens (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v0.22.0 (Fri Apr 21 2023)

#### 🐛 Bug Fix

- fix(plasma-tokens): Change default value for deprecated prop in generateFile (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v0.21.0 (Wed Apr 19 2023)

#### 🚀 Enhancement

- feat(plasma-tokens-utils): Add fallback for legacy theme names (neretinartem@Neretins-MBP.netis)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v0.20.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

- fix(plasma-*): Fix some types by es-lint rules ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.19.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Rename eslint rule and add temp rules [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.18.1 (Tue Mar 07 2023)

#### 🐛 Bug Fix

- fix(plasma-tokens): Remove `plasma-colors` prefix from brand themes [#391](https://github.com/salute-developers/plasma/pull/391) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.17.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.16.0 (Wed Feb 08 2023)

#### 🐛 Bug Fix

- feat(plasma-typo,plasma-ui): Add breakWord props for global style root [#310](https://github.com/salute-developers/plasma/pull/310) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.15.0 (Thu Dec 15 2022)

#### 🚀 Enhancement

- feat(plasma-tokens-utils): describing type for overlay tokens [#265](https://github.com/salute-developers/plasma/pull/265) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.14.0 (Wed Dec 14 2022)

#### 🚀 Enhancement

- feat(plasma-tokens,plasma-tokens-utils): Add remove prefix from data themes [#217](https://github.com/salute-developers/plasma/pull/217) ([@neretin-trike](https://github.com/neretin-trike))

#### ⚠️ Pushed to `master`

- Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.13.1 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- fix(plasma-tokens-utils): Add support origin values in theme schemas [#203](https://github.com/salute-developers/plasma/pull/203) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.13.0 (Wed Aug 10 2022)

#### 🚀 Enhancement

- feat(plasma-tokens): theme creator [#115](https://github.com/salute-developers/plasma/pull/115) ([@kvpolyanskiy](https://github.com/kvpolyanskiy))

#### Authors: 1

- [@kvpolyanskiy](https://github.com/kvpolyanskiy)

---

# v0.12.1 (Thu May 05 2022)

#### 🐛 Bug Fix

- fix: packages structure [#17](https://github.com/salute-developers/plasma/pull/17) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.11.0 (Thu Apr 07 2022)

#### 🚀 Enhancement

- feat(plasma-web): Designing `TextField` for B2B theme [#1121](https://github.com/salute-developers/plasma/pull/1121) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.10.0 (Tue Mar 01 2022)

#### 🚀 Enhancement

- feat(plasma-tokens-utils): Added `WebColors` list [#1084](https://github.com/salute-developers/plasma/pull/1084) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.9.2 (Fri Feb 18 2022)

#### 🐛 Bug Fix

- chore: Added fixme comments for background tokens [#1106](https://github.com/salute-developers/plasma/pull/1106) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.9.1 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- refactor(plasma-tokens-utils): Refactored code base for component theming [#1063](https://github.com/salute-developers/plasma/pull/1063) ([@fanisco](https://github.com/fanisco))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.9.0 (Thu Dec 30 2021)

#### 🐛 Bug Fix

- fix(plasma-tokens-utils): buttonClear not GblBlack [#1026](https://github.com/salute-developers/plasma/pull/1026) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.8.0 (Fri Oct 08 2021)

#### 🚀 Enhancement

- feat(plasma-core): Added global `dark0N` colors [#812](https://github.com/salute-developers/plasma/pull/812) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.7.1 (Tue Sep 14 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- build: freeze typescript [#799](https://github.com/salute-developers/plasma/pull/799) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.7.0 (Fri Aug 20 2021)

#### 🚀 Enhancement

- feat: Skeleton in core/ui/web [#628](https://github.com/salute-developers/plasma/pull/628) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix(plasma-tokens-utils): Escape token value [#628](https://github.com/salute-developers/plasma/pull/628) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.6.0 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- test(plasma-tokens-utils): skip broken tests [#466](https://github.com/salute-developers/plasma/pull/466) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.5.0 (Wed Jun 23 2021)

#### 🚀 Enhancement

- feat(plasma-tokens): Updated tokens from plasma-styles [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

- fix(plasma-web): Components dark theme fixes [#455](https://github.com/salute-developers/plasma/pull/455) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.4.0 (Wed Jun 09 2021)

#### 🚀 Enhancement

- feat(plasma-tokens-web): Using plasma-colors, dark theme [#398](https://github.com/salute-developers/plasma/pull/398) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v0.3.0 (Thu May 06 2021)

#### 🚀 Enhancement

- feat: add plasma-tokens-utils [#331](https://github.com/salute-developers/plasma/pull/331) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v0.2.0 (Wed Mar 10 2021)

#### 🚀 Enhancement

-   feat: Пакет plasma-tokens-utils [#17](https://github.com/salute-developers/pashka/pull/17) ([@fanisco](https://github.com/fanisco))

#### 🐛 Bug Fix

-   fix(plasma-tokens-utils): Генерация типа для токена [#20](https://github.com/salute-developers/pashka/pull/20) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-tokens-utils): Bump version [#19](https://github.com/salute-developers/pashka/pull/19) ([@fanisco](https://github.com/fanisco))
-   chore(plasma-tokens-utils): Bump version ([@fanisco](https://github.com/fanisco))

#### Authors: 1

-   Fanil Zubairov ([@fanisco](https://github.com/fanisco))
