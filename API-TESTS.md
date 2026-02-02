# Тестирование типов компонента

API tests — это контрактные тесты типов, которые гарантируют стабильность публичного API React-компонентов на уровне TypeScript.

### Их цель:

-   зафиксировать публичный контракт компонента;
-   предотвратить случайные breaking changes;
-   задокументировать допустимые и недопустимые комбинации пропсов;
-   проверить корректность union, generic, conditional и overload-типов.

**⚠️ ВНИМАНИЕ**
Эти тесты не рендерят компонент и не проверяют поведение — только типы.

## Используемый стек:

-   TypeScript
-   vitest — как тест-раннер
-   expect-type — для проверок типов
-   // @ts-expect-error — для негативных кейсов

```tsx
import { describe, it } from 'vitest';
import { expectTypeOf } from 'expect-type';
```

## Общие правила

### 1. Расположение

Все тесты лежат внутри пакета `utils/api-tests`.

### 2. Один компонент — один файл

Имя файла:

```tsx
<ComponentName>.api.test.tsx
```

Пример:

```tsx
Combobox.api.test.tsx;
```

### 3. Всегда тестируем ComponentProps<typeof Component>

```tsx
type ComboboxProps = ComponentProps<typeof Combobox>;
```

❌ Нельзя тестировать внутренние типы напрямую
✅ Только публичный API компонента

### 4. Структура файла

Рекомендуемая структура:

```tsx
describe('Basics', () => {});
describe('Unions', () => {});
describe('Generics', () => {});
describe('Examples', () => {});
```

## Когда добавлять API-тесты

-   новый публичный компонент
-   новый публичный проп
-   изменение union / conditional types
-   добавление generic-поведения
