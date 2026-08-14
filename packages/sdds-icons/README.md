# SDDS Icons

React-иконки для Salute Design System с поддержкой tree-shaking.

## Установка

```sh
npm install @salutejs/sdds-icons
```

## Использование

Выберите размер иконки в пути импорта. Пакет поддерживает именованный импорт из общего файла размера:

```tsx
import { AddFillIcon } from '@salutejs/sdds-icons/24';

export const AddButton = () => <AddFillIcon />;
```

Также доступен прямой импорт конкретной иконки. Он позволяет сборщику не обрабатывать общий файл со всеми иконками выбранного размера:

```tsx
import AddFillIcon from '@salutejs/sdds-icons/24/AddFillIcon';

export const AddButton = () => <AddFillIcon />;
```

У пакета нет экспорта из корня, поэтому размер необходимо указывать всегда. Доступны размеры `16`, `24` и `36`:

```tsx
import { AddFillIcon as AddFillIcon16 } from '@salutejs/sdds-icons/16';
import { AddFillIcon as AddFillIcon24 } from '@salutejs/sdds-icons/24';
import { AddFillIcon as AddFillIcon36 } from '@salutejs/sdds-icons/36';
```

Каждая точка входа содержит только SVG-иконки соответствующего размера. Компоненты создают один элемент `svg`, наследуют цвет через `currentColor`, поддерживают `ref` и принимают стандартные свойства SVG.

Размер по умолчанию соответствует выбранному варианту. Отображаемые ширину и высоту можно переопределить стандартными SVG-свойствами:

```tsx
<AddFillIcon width={32} height={32} color="tomato" />
```

## Динамические иконки

Если имя иконки приходит во время выполнения, например из CMS или с сервера, используйте отдельную динамическую точку входа нужного размера:

```tsx
import { DynamicIcon } from '@salutejs/sdds-icons/24/dynamic';

export const ServerIcon = () => <DynamicIcon name="AddFillIcon" />;
```

Иконка загружается отдельным модулем только после появления компонента в браузере. Пока модуль загружается, можно показать fallback-компонент:

```tsx
import { DynamicIcon } from '@salutejs/sdds-icons/24/dynamic';

export const ServerIcon = () => <DynamicIcon name="AddFillIcon" fallback={<span>Загрузка…</span>} />;
```

Для произвольной строки доступна проверка, которая одновременно сужает TypeScript-тип:

```tsx
import { DynamicIcon, isIconName } from '@salutejs/sdds-icons/24/dynamic';

export const ServerIcon = ({ iconName }: { iconName: string }) =>
    isIconName(iconName) ? <DynamicIcon name={iconName} /> : null;
```

Также динамическая точка входа экспортирует `IconName`, `iconNames` и `dynamicIconImports`. Реестр генерируется автоматически из SVG выбранного размера.

Динамический API предназначен только для случаев, когда имя заранее неизвестно. Он заставляет сборщик обработать весь реестр и создать отдельный модуль для каждой иконки. Для обычного интерфейса статические импорты быстрее при сборке и не требуют дополнительного запроса в браузере.

## Разработка

Исходные файлы иконок хранятся отдельно от React-кода:

```text
svg/
├── 16/AddFill.svg
├── 24/AddFill.svg
└── 36/AddFill.svg
```

Сейчас в пакете оставлена одна иконка в трёх размерах для разработки архитектуры. Чтобы добавить новую иконку, положите SVG с одинаковым именем во все три директории. Например, `Search.svg` должен существовать в `svg/16`, `svg/24` и `svg/36`.

Команда сборки создаёт временное дерево `build-temp`, генерирует в нём React-компоненты, динамические реестры и точки входа, компилирует его TypeScript и удаляет временные файлы:

```sh
npm run build
```

Временное дерево `build-temp` удаляется и после успешной сборки, и при ошибке. В `src` находятся только общие фабрики `createIcon16`, `createIcon24` и `createIcon36`: они задают размер, `viewBox`, поддержку `ref` и стандартных SVG-свойств. Единственным источником геометрии иконок остаются файлы в `svg`. SVGO оптимизирует SVG-разметку, а SVGR преобразует её в JSX; заполнения и обводки становятся `currentColor`.

### Android

Для Android SVG преобразуются в VectorDrawable XML, после чего собираются в архив:

```sh
npm run build:android
```

Результат находится в `native-build/android`, архив — в `native-build/android-icons.zip`.

### iOS

Для iOS из каждого SVG создаётся Xcode imageset с PNG-вариантами `1x`, `2x` и `3x`:

```sh
npm run build:ios
```

Результат находится в `native-build/ios`. Весь каталог `native-build` генерируется из SVG и не хранится в Git.

В публикуемый npm-пакет входят только готовые файлы из `dist`, README и лицензия. Исходные SVG, генератор и TypeScript-исходники остаются в репозитории.
