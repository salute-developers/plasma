# HOW TO CYPRESS COMPONENT TEST

Тесты проверяют, что компоненты выглядят правильно: рендерятся, делают скриншот, сравнивают с эталоном. Если пиксели расошлись больше порога (0.5%) — тест падает.

---

## Содержание

-   [Как это работает в двух словах](#как-это-работает-в-двух-словах)
-   [Структура файлов](#структура-файлов)
-   [Запуск тестов](#запуск-тестов)
-   [Два типа тест-файлов](#два-типа-тест-файлов)
-   [Как добавить тест для нового компонента](#как-добавить-тест-для-нового-компонента)
-   [Обновление эталонных снимков](#обновление-эталонных-снимков)
-   [Устройство конфигурации Vite](#устройство-конфигурации-vite)
-   [Docker и браузеры](#docker-и-браузеры)
-   [Снимки в git](#снимки-в-git)

---

## Как это работает в двух словах

```
npm run cy:b2c:run
        │
        ▼
  Docker-контейнер
        │
        ▼
  Cypress запускает Vite dev-сервер
        │
        ▼
  Для каждого *.component-test.tsx:
    1. Компонент монтируется в браузере
    2. cy.matchImageSnapshot() делает скриншот viewport'а
    3. Скриншот сравнивается с эталоном в cypress/snapshots/
    4. Если diff > 0.5% — тест падает
```

Тесты — **компонентные** (не e2e): браузер открывает не всё приложение, а отдельный компонент, завёрнутый в тему и SSR-провайдер.

---

## Структура файлов

```
cypress/
├── Dockerfile                   # образ с Cypress + Chromium + WebKit
├── vite.config.ts               # конфигурация Vite dev-сервера
├── plugins/
│   ├── index.ts                 # setupNodeEvents: скриншоты, регистрация webkit-браузера
│   ├── virtualTestPackage.ts    # виртуальный модуль '@plasma-cy/test-package'
│   ├── virtualTestConfigs.ts    # виртуальный модуль '@plasma-cy/test-configs'
│   └── virtualTestTheme.ts      # виртуальный модуль '@plasma-cy/test-theme'
├── support/
│   ├── index.ts                 # глобальный setup: команды, css, плагины
│   └── commands.ts              # cy.matchImageSnapshot() + webkit font fix
├── snapshots/
│   ├── b2c/chromium/Button/     # эталонные PNG по пакету → браузеру → компоненту
│   ├── b2c/webkit/Button/
│   └── ...
└── fixtures/
    └── css/plasmaGlobalStyle.css  # базовый CSS (normalize, шрифты)
```

Тест-файлы живут **внутри пакетов**, не в папке `cypress/`:

```
packages/
├── plasma-b2c/src/components/Button/
│   ├── Button.tsx
│   ├── Button.config.ts                        # конфигурация вариаций
│   └── Button.component-test.tsx               # тесты
├── plasma-new-hope/src/components/Button/
│   ├── Button.component-test.tsx               # "базовые" тесты для всех пакетов
│   └── (нет Button.config.ts — он в пакете)
└── ...
```

---

## Запуск тестов

Все команды запускают тесты **внутри Docker**.

### Запустить все тесты пакета

```bash
npm run cy:b2c:run          # plasma-b2c, chromium
npm run cy:b2c:run:webkit   # plasma-b2c, webkit
npm run cy:web:run          # plasma-web, chromium
npm run cy:cs:run           # sdds-cs, chromium
# ... аналогично для других пакетов: cy:giga, cy:ui, cy:insol, cy:serv, cy:scan, cy:os
```

### Запустить конкретные компоненты

```bash
npm run cy:b2c:run --components="Button"
npm run cy:b2c:run:webkit --components="Button,Chip"
```

Имена — через запятую, регистр не важен (`button` и `Button` оба работают).

### Посмотреть, какие файлы найдёт команда

Паттерн поиска строится в `cypress.config.ts → getTestMatch()`. Например, для `PACKAGE_NAME=plasma-b2c, COMPONENTS=Button,Chip` Cypress ищет:

```
**/{plasma-b2c,plasma-new-hope}/**/{Button,Chip}/*.component-test.{ts,tsx}
```

Таким образом к тестам конкретного пакета всегда добавляются "базовые" тесты из `plasma-new-hope`.

---

## Тест-файлы

### 1. Тесты для новых компонентов — `ComponentName.component-test.tsx`

Пишутся вручную. Используются для специфичных сценариев: интерактивность, редкие состояния, регрессии.

```tsx
// packages/plasma-b2c/src/components/Chip/Chip.component-test.tsx
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { Chip as ChipB2C } from '.';

describe('plasma-b2c: Chip', () => {
    const Chip = getComponent('Chip') as typeof ChipB2C; // берёт из pre-bundled дистрибутива

    it('size=l, view=default, hasClear', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Привет" view="default" size="l" hasClear />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
```

> `getComponent('Chip')` — ищет компонент в pre-bundled дистрибутиве текущего пакета
> (см. виртуальный модуль `@plasma-cy/test-package`). Не импортирует исходник напрямую.

### 2. Базовые тесты из `plasma-new-hope` — используют `getBaseVisualTests`

Живут в `plasma-new-hope/src/components/ComponentName/`. Запускаются для **всех** пакетов (кроме `plasma-ui`), потому что большинство пакетов (`plasma-b2c`, `plasma-web`, `sdds-*`) основаны на `plasma-new-hope`.

Тесты генерируют комбинаторную матрицу из `ComponentName.config.ts` и делают скриншот для каждой комбинации `view × size × ...`:

```tsx
// packages/plasma-new-hope/src/components/Button/Button.component-test.tsx
getBaseVisualTests({
    component: 'Button',
    componentProps: { text: 'Button' },
    configPropsForMatrix: ['view', 'size', 'stretching'],
});
// → автоматически создаёт it-кейс для каждой комбинации: view=accent, size=m, stretching=fixed и т.д.
```

Конфиг с вариациями лежит в самом пакете:

```
packages/plasma-b2c/src/components/Button/Button.config.ts  ← вариации для b2c
packages/plasma-web/src/components/Button/Button.config.ts  ← вариации для web
```

---

## Как добавить тест для нового компонента

### Базовые тесты, характерные для всех пакетов

1. Создайте `packages/plasma-new-hope/src/components/MyComponent/MyComponent.component-test.tsx` с `getBaseVisualTests`
2. Создайте `packages/<package>/src/components/MyComponent/MyComponent.config.ts` с вариациями пропов

---

### Уникальный тест для пакета

Создайте `packages/<package>/src/components/<Component>/<Component>.component-test.tsx`:

```tsx
import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import type { MyComponent as MyComponentType } from '.';

describe('<package>: MyComponent', () => {
    const MyComponent = getComponent('MyComponent') as typeof MyComponentType;

    it('default state', () => {
        mount(
            <CypressTestDecorator>
                <MyComponent label="Привет" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
```

## Обновление эталонных снимков

Если компонент изменился намеренно, нужно обновить PNG-эталоны:

```bash
npm run cy:b2c:update --components="Button"          # chromium
npm run cy:b2c:update:webkit --components="Button"   # webkit
```

Команда запишет новые `.snap.png` в `cypress/snapshots/<product>/<browser>/<Component>/`. После этого закоммитьте обновлённые снимки.

---

## Устройство конфигурации Vite

Vite поднимается как dev-сервер внутри Cypress. Конфиг в `cypress/vite.config.ts`.

### Виртуальные модули

Три плагина создают "несуществующие" модули, которые Vite генерирует на лету:

| Модуль                    | Плагин                  | Содержит                                                                                  |
| ------------------------- | ----------------------- | ----------------------------------------------------------------------------------------- |
| `@plasma-cy/test-package` | `virtualTestPackage.ts` | Реэкспорт dist тестируемого пакета. `getComponent('Button')` возвращает компонент отсюда  |
| `@plasma-cy/test-configs` | `virtualTestConfigs.ts` | Namespace-реэкспорт всех `*.config.ts` файлов пакета. Используется в `getBaseVisualTests` |
| `@plasma-cy/test-theme`   | `virtualTestTheme.ts`   | Тема и типографика для текущего пакета. Используется в `CypressTestDecorator`             |

### Pre-bundling зависимостей

`optimizeDeps.include` в vite.config задаёт, что Vite должен пре-бандлить (CJS → ESM) до старта:

-   `react`, `react-dom`, `styled-components` — стандартные CJS-пакеты
-   `TEST_PACKAGE_DIST_ALIAS` (`@plasma-cy/test-package-dist`) — весь дистрибутив пакета + plasma-icons собирается в один файл

### Env-переменные

| Переменная                | Пример        | Что делает                                            |
| ------------------------- | ------------- | ----------------------------------------------------- |
| `PACKAGE_NAME`            | `plasma-b2c`  | Обязательная. Определяет пакет, тему, dist-барель     |
| `COMPONENTS`              | `Button,Chip` | Фильтрует тест-файлы. Без неё — все компоненты пакета |
| `BROWSER`                 | `webkit`      | `chromium` по умолчанию                               |
| `RETRIES`                 | `5`           | Количество повторов упавшего теста (по умолчанию 5)   |
| `CYPRESS_updateSnapshots` | `true`        | Режим обновления эталонов                             |

---

## Docker и браузеры

Тесты всегда запускаются в Docker (`cypress/Dockerfile`). Образ содержит:

-   Chromium (системный)
-   WebKit (через `playwright-webkit`)
-   Node.js + Cypress

**Почему Docker:** воспроизводимость рендеринга. Шрифты, субпиксельный рендеринг и поведение браузера должны быть одинаковыми на всех машинах и в CI.

**Chromium** — основной браузер.

**WebKit** — для проверки Safari-совместимости. Работает медленнее (нет GPU-акселерации в Docker), скриншоты хранятся отдельно (`snapshots/<product>/webkit/`).

---

## Снимки в git

```
cypress/snapshots/
├── b2c/
│   ├── chromium/
│   │   ├── Button/
│   │   │   ├── Button -- view=accent, size=m, stretching=fixed.snap.png
│   │   │   ├── Button -- disabled.snap.png
│   │   │   └── ...
│   │   └── Chip/
│   └── webkit/
│       └── Button/
├── web/
│   └── chromium/
└── ...
```

Путь к снимку: `cypress/snapshots/<productName>/<browser>/<ComponentName>/<TestName>.snap.png`

`productName` — часть имени пакета после `plasma-` или `sdds-`: `b2c`, `web`, `cs`, `giga` и т.д.

Все снимки хранятся в репозитории. При обновлении компонента обновляйте снимки соответствующей командой `cy:<package>:update`.
