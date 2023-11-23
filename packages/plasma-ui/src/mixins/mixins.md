# Миксины (примеси)

Раздел содержит функции-примеси для компонентов, которые стилизуют с помощью `styled-components`.

Для удобства типизации, каждый модуль, в котором лежит миксин, дополнительно экспортирует соответствующий интерфейс `props`.

## `addFocus`

Добавляет фокусную рамку компонентам, для которых возможно фокусирование или если передан флаг `focused`.

### Пример

```tsx
import styled from 'styled-components';
import { FocusProps, addFocus } from '@salutejs/plasma-ui';

const Button = styled.button<FocusProps>`
    ${addFocus}
`;

<Button outlined={true}>Hello!</Button>;
```

## `applyBlur`

Позволяет применять фильтр размытия к фону компонента.

### Пример

```tsx
import styled from 'styled-components';
import { BlurProps, applyBlur } from '@salutejs/plasma-ui';

const Button = styled.button<BlurProps>`
    ${applyBlur}
`;

<Button blur="small">Blur on the background</Button>;
```

## `applyDisabled`

Делает компонент недоступным для взаимодействия, если компонент может быть disabled, или если передан флаг `disabled`.

### Пример

```tsx
import styled from 'styled-components';
import { DisabledProps, applyDisabled } from '@salutejs/plasma-ui';

const Button = styled.button<DisabledProps>`
    ${applyDisabled}
`;

<Button disabled>I'm disabled</Button>;
```

## `applyInteraction`

Увеличивает/уменьшает компонент при таких видах взаимодействия, как наведение (:hover) и нажатие (:active).

### Пример

```tsx
import styled from 'styled-components';
import { InteractionProps, applyInteraction } from '@salutejs/plasma-ui/mixins';

const Button = styled.button<InteractionProps>`
    ${applyInteraction}
`;

<Button scaleOnInteraction>Button!</Button>;
```

## `applyRoundness`

Применяет к компоненту скругление из списка `radiuses`.

Скругление указывается в пикселях.
Пример, `roundness={16}` = `1rem` = `16px` (при `deviceScale = 1`) = **32px** (при `deviceScale = 2`).

### Пример

```tsx
import styled from 'styled-components';
import { RoundnessProps, applyRoundness } from '@salutejs/plasma-ui';

const Button = styled.button<RoundnessProps>`
    ${applyRoundness}
`;

<Button roundness={16}>Button!</Button>;
```

## `applyView`

Применяет цвет фона и текста при передаче соответствующего значения в свойство `view`.

### Пример

```tsx
import styled from 'styled-components';
import { ViewProps, applyView } from '@salutejs/plasma-ui';

const Button = styled.button<ViewProps>`
    ${applyView}
`;

<Button view="primary">Primary button</Button>;
```

## `applyEllipsis`

С помощью многоточия сокращает в элементе текст, если последний не помещается в одной строке.

### Пример

```tsx
import styled from 'styled-components';
import { applyEllipsis } from '@salutejs/plasma-ui';

const ShortenedLine = styled.span`
    ${applyEllipsis}
`;

<ShortenedLine>Текст сократится, если не поместится в строке</ShortenedLine>;
```
