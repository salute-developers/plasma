---
name: api-test
description: Create an API type-check test for a component. Use when asked to create, generate, or write an API test for a component. Example - "создай api-test для Checkbox", "api-test Switch".
argument-hint: '[ComponentName]'
allowed-tools: Glob, Grep, Read, Write, Edit, Bash, Agent
---

# Создание API type-check теста для компонента **\$ARGUMENTS**

Тесты проверяют публичный API (типы пропсов) компонента через `expectTypeOf` из `expect-type`.
Исходный файл пишется для `@salutejs/plasma-b2c`, затем `script.mjs` автоматически генерирует варианты для всех библиотек.

## Архитектурный контекст

-   Тесты: `utils/api-tests/src/components/{ComponentName}/{ComponentName}.api.test.tsx`
-   `utils/api-tests/script.mjs` копирует тесты из `src/` в `tests/{lib}/`, заменяя импорт `@salutejs/plasma-b2c` на каждую целевую библиотеку

---

## Шаг 1 — Найти определение типов компонента

1. Найти экспорт компонента в `packages/plasma-b2c`
2. Найти основные типы в `packages/plasma-new-hope/src/components/$ARGUMENTS/*.types.ts` либо во внутренних папках компонента.
3. Обратить внимание на:
    - Дискриминированные юнионы (conditional props)
    - Пропсы из `Pick<>` от новых типов
    - Наследование от HTML-элементов (`HTMLInputElement`, `HTMLButtonElement`, `HTMLDivElement`)
    - Дженерики (если есть)

---

## Шаг 2 — Создать файл теста

Путь: `utils/api-tests/src/components/$ARGUMENTS/$ARGUMENTS.api.test.tsx`

### Структура файла

```tsx
import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole /*, другие нужные утилитарные типы */ } from 'react';
// Добавить useState если секция Examples использует его:
// import { useState } from 'react';
import { describe, it } from 'vitest';
import { expectTypeOf } from 'expect-type';
// Импорт иконок если нужны в примерах:
// import { IconDownload } from '@salutejs/plasma-icons';
import { $ARGUMENTS } from '@salutejs/plasma-b2c';

type ${ARGUMENTS}Props = ComponentProps<typeof $ARGUMENTS>;

describe('Basics', () => {
    it('Common', () => {
        // Проверка каждого собственного пропа компонента
    });

    it('Variations', () => {
        // Проверка вариативных пропсов (view, size, labelPlacement и т.д.)
    });

    it('HTML...Element', () => {
        // Проверка наследуемых HTML-пропсов (назвать по реальному элементу)
    });
});

// Только если есть дискриминированные юнионы:
describe('Unions', () => {
    it('UnionName', () => {
        // Валидные и невалидные комбинации
    });
});

// Только если есть дженерики:
describe('Generics', () => {
    it('ItemOption', () => {
        // Проверка потока типов через JSX
    });
});

describe('Examples', () => {
    it('Basic', () => {
        () => {
            // JSX-примеры с useState, хуками
            return (<$ARGUMENTS /* props */ />);
        };
    });
});
```

---

## Правила написания тестов

### Секция Common

Каждый собственный проп проверяется отдельной строкой. Группировка: layout → state → content slots → callbacks.

```tsx
// Простые пропсы
expectTypeOf<Props>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
expectTypeOf<Props>().toHaveProperty('label').toEqualTypeOf<string | undefined>();

// Строковые литералы — точный тип зависит от компонента
expectTypeOf<Props>()
    .toHaveProperty('pin')
    .toEqualTypeOf<'square-square' | 'square-clear' | 'clear-square' | /* ... */ | undefined>();

// ReactNode / ReactElement — проверить по типам конкретного компонента
expectTypeOf<Props>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
expectTypeOf<Props>().toHaveProperty('contentLeft').toEqualTypeOf<ReactNode>(); // или ReactElement | undefined

// Callback-пропсы — тип handler зависит от базового HTML-элемента
expectTypeOf<Props>()
    .toHaveProperty('onChange')
    .toEqualTypeOf<React.ChangeEventHandler<HTMLInputElement> | undefined>();
```

**Важно:** optional пропсы (`prop?: Type`) всегда включают `| undefined` в ожидаемом типе.

### Секция Variations

Вариативные пропсы (значения определяются конфигом и отличаются между библиотеками) проверяются паттерном "подмножество string, но не сам string":

```tsx
type View = NonNullable<Props['view']>;
expectTypeOf<View>().toExtend<string>();
expectTypeOf<string>().not.toExtend<View>();
```

Типичные вариации: `view`, `size`, `labelPlacement`, `chipView`, `hintView`, `hintSize`.

**Внимание:** не все пропсы с типом `string` являются вариациями. Если конфиг компонента не сужает проп до конкретных литералов, `NonNullable` даст `string` и `expectTypeOf<string>().not.toExtend<string>()` сломается. Перед добавлением в Variations — проверить, что конфиг действительно определяет конкретные значения для этого пропа.

### Секция HTML Element

Название `it` по реальному элементу: `'HTMLInputElement'`, `'HTMLButtonElement'` и т.д.

**Общие для всех:**

```tsx
expectTypeOf<Props>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
expectTypeOf<Props>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
expectTypeOf<Props>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
expectTypeOf<Props>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
expectTypeOf<Props>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
```

**Для HTMLInputElement** — добавить:

```tsx
expectTypeOf<Props>().toHaveProperty('value').toEqualTypeOf<string | number | readonly string[] | undefined>();
expectTypeOf<Props>().toHaveProperty('defaultValue').toEqualTypeOf<string | number | readonly string[] | undefined>();
expectTypeOf<Props>()
    .toHaveProperty('onChange')
    .toEqualTypeOf<React.ChangeEventHandler<HTMLInputElement> | undefined>();
expectTypeOf<Props>().toHaveProperty('onFocus').toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
expectTypeOf<Props>().toHaveProperty('onBlur').toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
expectTypeOf<Props>()
    .toHaveProperty('onKeyDown')
    .toEqualTypeOf<React.KeyboardEventHandler<HTMLInputElement> | undefined>();
```

**Для HTMLButtonElement / HTMLElement** — добавить:

```tsx
expectTypeOf<Props>().toHaveProperty('onClick').toEqualTypeOf<React.MouseEventHandler<HTMLElement> | undefined>();
expectTypeOf<Props>().toHaveProperty('onMouseEnter').toEqualTypeOf<React.MouseEventHandler<HTMLElement> | undefined>();
expectTypeOf<Props>().toHaveProperty('onMouseLeave').toEqualTypeOf<React.MouseEventHandler<HTMLElement> | undefined>();
```

### Секция Unions

Дискриминированные юнионы проверяются через `expectTypeOf<Props>({...})`:

```tsx
it('UnionName', () => {
    // Валидные комбинации
    expectTypeOf<Props>({ propA: 'value1', propB: true });
    expectTypeOf<Props>({ propA: 'value2' });

    // Невалидные комбинации
    // @ts-expect-error
    expectTypeOf<Props>({ propA: 'value1', forbiddenProp: true });

    // Если юнион "дырявый" (не ограничивает как должен):
    // TODO: Неправильная работа юниона UnionName. Должна быть ошибка.
    expectTypeOf<Props>({ propA: 'value1', shouldBeForbidden: true });
});
```

### Секция Generics

Для компонентов с дженериками (например, `items` с произвольными полями) — через JSX:

```tsx
it('ItemType', () => {
    const items = [{ value: '', label: '', customProp: '', boolProp: true }];
    void (<Component items={items} />);
    void (
        <Component
            items={items}
            renderItem={(item) => item.customProp}
            filter={(item) => item.boolProp}
            onChange={(value, item) => item && item.customProp}
        />
    );
});
```

### Секция Complex / Examples

Реалистичные примеры через `expectTypeOf` — комбинации пропсов, отражающие реальное использование:

```tsx
it('Examples', () => {
    // Примеры зависят от конкретного компонента
    expectTypeOf<Props>({ label: 'Текст', disabled: true });
    expectTypeOf<Props>({ text: 'Кнопка', stretching: 'filled' });
});
```

### Секция Examples (JSX)

Примеры с реальным JSX и хуками — обёрнуты в анонимную функцию:

```tsx
describe('Examples', () => {
    it('Controlled', () => {
        () => {
            const [value, setValue] = useState('');
            return <Component value={value} onChange={(e) => setValue(e.target.value)} label="Метка" />;
        };
    });

    it('Disabled', () => {
        () => {
            return <Component label="Неактивный" disabled />;
        };
    });
});
```

---

## Шаг 3 — Запуск и валидация

Запустить полный цикл тестов (генерация + typecheck):

```bash
cd utils/api-tests && npm test
```

Это выполнит `rm -rf tests && node script.mjs && vitest run --config ./vitest.config.ts` — сгенерирует тесты для всех библиотек и запустит typecheck.

Все тесты должны пройти без ошибок типов (`Type Errors: no errors`).
Рантайм ошибки `Cannot find module 'styled-components'` — ожидаемые, игнорировать.

Если есть ошибки типов — внимательно прочитать полный вывод (строки с `TypeCheckError`), исправить ассерты в `src/` файле (не в компоненте) и перезапустить.

---

## Важные правила

1. **Только `@salutejs/plasma-b2c`** в импортах — `script.mjs` заменит на остальные библиотеки
2. **Типы из `plasma-new-hope`** как источник истины — не тестировать b2c-only пропсы (например `status`, `caption`, `animatedHint` для TextField). Проп может быть b2c-only для одного компонента, но общим для другого (например `helperText` — b2c-only в TextField, но общий в Combobox). Всегда проверять по new-hope типам конкретного компонента
3. **Вариативные пропсы** — паттерн `toExtend`, НЕ `toEqualTypeOf` — конфиги сужают по-разному в каждой библиотеке
4. **Не проверять `@deprecated` пропсы** (помеченные `@deprecated`)
5. **Не проверять internal пропсы** (помеченные `@internal` или начинающиеся с `$`)
6. **JSX-примеры должны компилироваться** — это реальные type-check проверки, не документация
7. **Группировать пропсы логически** в Common: layout → state → content slots → callbacks
8. **Юнионы с обеих сторон** — валидные комбинации И `@ts-expect-error` для невалидных, или `// TODO` если юнион "дырявый"

---

## Чеклист

-   [ ] Файл создан в `utils/api-tests/src/components/$ARGUMENTS/$ARGUMENTS.api.test.tsx`
-   [ ] Импорт компонента из `@salutejs/plasma-b2c`
-   [ ] Все собственные пропсы покрыты в `Common`
-   [ ] Вариации (`view`, `size` и т.д.) покрыты в `Variations`
-   [ ] HTML-атрибуты покрыты в `HTML...Element`
-   [ ] Дискриминированные юнионы покрыты в `Unions` с `@ts-expect-error`
-   [ ] JSX-примеры в `Examples`
-   [ ] Тесты проходят typecheck (`Type Errors: no errors`)

---

## Референсные файлы

Изучить для понимания паттернов:

-   `utils/api-tests/src/components/Button/Button.api.test.tsx` — простой компонент, один юнион, без дженериков
-   `utils/api-tests/src/components/TextField/TextField.api.test.tsx` — сложный компонент, множественные юнионы, chip-пропсы
-   `utils/api-tests/src/components/Combobox/Combobox.api.test.tsx` — дженерики, сложные юнионы, JSX-примеры
