# v0.26.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-new-hope): add stretch prop for segment ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope/web/b2c): remove extra views for SegmentItem ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): unite selectedView & view props for SegmentItem ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): separate configs for segment ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add view control from SegmentProvider ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add segment stories in example ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add segment item ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): make dspl and h bold by default ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): implement addFocus mixin in button ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*): Update config for `Link` component ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-new-hope): fix Notification layout with long text [#927](https://github.com/salute-developers/plasma/pull/927) ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope): Notification redesign ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope): revert button tag for root [#896](https://github.com/salute-developers/plasma/pull/896) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add comments for button types ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): refactor & add stretch/pin props ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-new-hope): fix underline uppercase ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-new-hope): fix aply hypens selector ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-new-hope): Fix `TextArea` behavior with uncontrolled value ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-*): Add sizes for `Link` component ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c,plasma-web): Update configs for components with new design ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-new-hope): Add support children props to `Tooltip` component [#937](https://github.com/salute-developers/plasma/pull/937) ([@neretin-trike](https://github.com/neretin-trike))
- chore(vite): bump to 4.5.1 ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web, plasma-b2c): redesign Notification ([@kayman233](https://github.com/kayman233))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.21.0 (Thu Dec 14 2023)

### Release Notes

#### Release by 14.12.2023 ([#925](https://github.com/salute-developers/plasma/pull/925))

## Components

### Tabs

- вынесены токены в отдельный файл
- исправлен конфиг
- убрана вариация active
 
plasma-new-hope: Refactoring tabs tokens, variations, config (https://github.com/salute-developers/plasma/pull/873)

### AddFocus

- добавлен общий mixin addFocus(на него переведены компоненты: **Chip, Checkbox, Radiobox, Calendar** )
 
plasma-(new-hope, asdk): Add focus mixin (https://github.com/salute-developers/plasma/pull/888)

### Header

Для plasma-{new-hope,asdk}

- добавлен компонент **Header**, в качестве составных компонента (HeaderLogo, HeaderArrow, etc.)
- добавлен mixin **mediaQuery**
 
feat(plasma-new-hope): Add header as separate components (https://github.com/salute-developers/plasma/pull/887)

### Tooltip

- добавлен `Tooltip` с новым дизайном и API (для `plasma-{web,b2c,new-hope}`)
 
plasma-new-hope: Add tooltip (https://github.com/salute-developers/plasma/pull/879)

### Switch

- добавлена реализация на новой архитектуре для plasma-{new-hope, web, asdk}  
 
feat(new-hope): switch (https://github.com/salute-developers/plasma/pull/816)


## Infra

### Upload assets when publish canary, latest

- добавили условие при котором происходит загрузка assets 
 
plasma-infra: Handling upload-assets  (https://github.com/salute-developers/plasma/pull/882)

### Actions/setup-node

- зафиксировали версию Node.js (18.16.1) для корректной работы в CI 
 
plasma-infra: Use 18.16.1 node version (https://github.com/salute-developers/plasma/pull/904)

### Upload assets when publish RC

- переопределена логика получения commit для правильного условия загрузки assets в момент публикации RC
 
plasma-infra: Upload assets when publish rc (https://github.com/salute-developers/plasma/pull/892)

### Auto generate changelog [CI]

- добавлен workflow для ручного запуска создания PR релиза 
- автоматизирован процесс создания changelog на основе merged prs и labels  
 
plasma-infra: Automation of the release process (https://github.com/salute-developers/plasma/pull/894)

### Storybook

- добавлен новый location в "https://plasma.sberdevices.ru/asdk-storybook/" (plasma-ASDK)

 
plasma-infra:  Add storybook for "Plasma-ASDK" (https://github.com/salute-developers/plasma/pull/908)


## Tokens

### Theme builder

- В генератор файлов темы добавлены метод, который восстанавливает значение цвета из ссылки, т.е. переведёт: **[general.red.500] => #FF293E**
- Добавлена генерация токенов цвета в kebab нотации
 
fix(plasma-theme-builder): Add restored color method for generate themes (https://github.com/salute-developers/plasma/pull/899)

---

#### 🚀 Enhancement

- Release by 14.12.2023 [#925](https://github.com/salute-developers/plasma/pull/925) ([@nikewht](https://github.com/nikewht) [@Yakutoc](https://github.com/Yakutoc) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike) nikita.belyanskiy@south.rt.ru [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-new-hope): Switch add labelPosition ([@Yeti-or](https://github.com/Yeti-or))
- feat(plasma-web): Replace from plasma-new-hope ([@Yeti-or](https://github.com/Yeti-or))
- feat(plasma-new-hope): Add core Switch component (nikita.belyanskiy@south.rt.ru)
- fix(plasma-new-hope): fix tokens usage in Tooltip [#879](https://github.com/salute-developers/plasma/pull/879) ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope): Tooltip added ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope): remove media-query from root [#887](https://github.com/salute-developers/plasma/pull/887) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-asdk/new-hope): move tokens for button in token file ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add header as separate components ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): replace local addFocus on general in calendar [#888](https://github.com/salute-developers/plasma/pull/888) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): replace local addFocus on general in chip ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): replace local addFocus on general in radiobox ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): replace local addFocus on general ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add general addFocusMixin ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- refactor(plasma-new-hope): sds: rewrite Switch ([@Yeti-or](https://github.com/Yeti-or))
- refactor(plasma-new-hope): rewrite Switch ([@Yeti-or](https://github.com/Yeti-or))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-new-hope): Tooltip, Popover, Dropdown refactor ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope, plasma-web, plasma-b2c): Tooltip added ([@kayman233](https://github.com/kayman233))
- chore: update package locks [#916](https://github.com/salute-developers/plasma/pull/916) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- refactor(new-hope): tokens, variations, config [#873](https://github.com/salute-developers/plasma/pull/873) ([@nikewht](https://github.com/nikewht))
- chore: update package-locks \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.17.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-new-hope): Add `TextArea` component with new design and tokens for sds_engineer ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add `TextArea` component with new design and tokens for plasma-web ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add `TextArea` component with new design and tokens for plasma-b2c ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add core `TextArea` component ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope-b2c/web): add close icon size token [#867](https://github.com/salute-developers/plasma/pull/867) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope/b2c/web): add readonly as attribute & remove hasClear prop ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-b2c): add chip from new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add chip ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): Add Dropdown [#854](https://github.com/salute-developers/plasma/pull/854) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-new-hope, plasms-web, plasma-b2c): fix title font for Notification [#848](https://github.com/salute-developers/plasma/pull/848) ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope): Notification added ([@kayman233](https://github.com/kayman233))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore(plasma-new-hope): add sb-utils package ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-new-hope): import fix [#862](https://github.com/salute-developers/plasma/pull/862) ([@kayman233](https://github.com/kayman233))
- chore(plasma-new-hope): downgrade "@types/styled-components" to 5.1.0 [#865](https://github.com/salute-developers/plasma/pull/865) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-new-hope): bump "default-browser-id" to 2.0.0 [#861](https://github.com/salute-developers/plasma/pull/861) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-new-hope): fix vulnerabilities: high, critical ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-new-hope): bump "vite" to 4.5.0 ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.13.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
- feat: manual update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-web, plasma-b2c): fix NoScroll behavior in ModalBase [#828](https://github.com/salute-developers/plasma/pull/828) ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope): Modal added ([@kayman233](https://github.com/kayman233))
- feat: bump TS to 4.2.4 ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-new-hope/asdk): add plasma-asdk & add typography ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add focus visible dependency [#821](https://github.com/salute-developers/plasma/pull/821) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): separate typography tokens & refactor folder structure ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): add plasma-tokens to deps ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): separate classes & tokens ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-web/b2c): add calendar with new architecture ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope): Add calendar ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-new-hope): fix no scroll in Modal ([@kayman233](https://github.com/kayman233))
- fix(plasma-new-hope): remove styled-components from Modal ([@kayman233](https://github.com/kayman233))
- feat(plasma-web, plasma-b2c): ModalBase, PopupBase on new-hope ([@kayman233](https://github.com/kayman233))
- chore(new-hope): bump `@linaria` deps [#845](https://github.com/salute-developers/plasma/pull/845) ([@Yakutoc](https://github.com/Yakutoc))
- chore(new-hope): resolved "No longer inferring default values of args" ([@Yakutoc](https://github.com/Yakutoc))
- chore: delete unnecessary options ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump storybook to @latest (7.5.3) ([@Yakutoc](https://github.com/Yakutoc))
- chore(new-hope): migrate main.js for storybook@latest ([@Yakutoc](https://github.com/Yakutoc))
- chore(new-hope): migrate `preview.ts` for storybook@latest ([@Yakutoc](https://github.com/Yakutoc))
- chore(new-hope): migrate to CSF 3 [typography] ([@Yakutoc](https://github.com/Yakutoc))
- chore(new-hope): migrate to CSF 3 [sds_engineer] ([@Yakutoc](https://github.com/Yakutoc))
- chore(new-hope): migrate to CSF 3 [plasma-web] ([@Yakutoc](https://github.com/Yakutoc))
- chore(new-hope): migrate to CSF 3 [plasma-b2c] ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.9.0 (Thu Nov 02 2023)

#### 🚀 Enhancement

- Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
- feat(plasma-new-hope): add Tabs export ([@nikewht](https://github.com/nikewht))
- feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-new-hope): new classes API for Popup [#819](https://github.com/salute-developers/plasma/pull/819) ([@kayman233](https://github.com/kayman233))
- feat(plasma-new-hope): Popup added ([@kayman233](https://github.com/kayman233))

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

# v0.6.0 (Thu Oct 19 2023)

#### 🚀 Enhancement

- Release 19.10.2023 [#815](https://github.com/salute-developers/plasma/pull/815) ([@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Yakutoc](https://github.com/Yakutoc) nikita.belyanskiy@south.rt.ru [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add core Tabs component (nikita.belyanskiy@south.rt.ru)
- feat(plasma-new-hope): extend button types ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-new-hope/b2c/web/core): Add Popover to new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore(plasma-new-hope): resolve potential conflict by master branch ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-new-hope): add types to Tabs & TabItem, fix css tokens naming (nikita.belyanskiy@south.rt.ru)
- fix(plasma-new-hope): delete unused code (nikita.belyanskiy@south.rt.ru)
- fix(plasma-new-hope): Fixes related to Tabs component (nikita.belyanskiy@south.rt.ru)
- ci: Enable "New hope" storybook ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-new-hope): remove plasma-old theme ([@Yeti-or](https://github.com/Yeti-or))
- chore(plasma-new-hope): add sds_engineer theme ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.5.1 (Fri Oct 06 2023)

### Release Notes

#### fix(plasma-new-hope): cjs build ([#797](https://github.com/salute-developers/plasma/pull/797))

Hotfix: https://github.com/salute-developers/plasma/pull/796

---

#### 🐛 Bug Fix

- fix(plasma-new-hope): cjs build [#797](https://github.com/salute-developers/plasma/pull/797) ([@Yeti-or](https://github.com/Yeti-or) [@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-new-hope): cjs build ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.5.0 (Fri Sep 29 2023)

#### 🚀 Enhancement

- feat(plasma-new-hope): Add `Radiobox` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add core `Radiobox` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add `Checkbox` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add core `Checkbox` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add wrapper for layout with default props [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add `Spinner` component with new design and tokens [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Update `Button` component with new design and tokens themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add `Link` component with new design and tokens themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add core `Link` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): Add typing for engines [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope): 🚀 boostrap && init [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-new-hope): Update hover and active colors for tertiary and paragraph tokens in themes [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope,plasma-core): Add core `Spinner` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
