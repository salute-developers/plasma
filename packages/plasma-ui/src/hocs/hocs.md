# Компоненты высшего порядка (HOC)

## withAutoFocus

Добавляет фокус при инициализации компонента.

### Использование

```tsx
import React from 'react';
import { Button, ButtonProps } from '@salutejs/plasma-core';
import { withAutoFocus } from '@salutejs/plasma-core/hocs';

const AutoFocusButton = withAutoFocus<ButtonProps>(Button);

export const Default = () => {
    return <AutoFocusButton autoFocus preventScroll={false} />;
};
```

## withSkeleton

Делает компонент скелетоном - у него заменяется фоновый цвет, добавляется градиент и текст становится на 100% прозрачным.

Управляется скелетон параметром `skeleton`.

### Использование

```tsx
import React from 'react';
import { Button, ButtonProps } from '@salutejs/plasma-core';
import { withSkeleton, WithSkeletonProps } from '@salutejs/plasma-core/hocs';

const ButtonSkeleton = withSkeleton<ButtonProps & WithSkeletonProps>(Button);

export const Default = () => (
    <>
        <ButtonSkeleton skeleton /> // Скелетон
        <ButtonSkeleton /> // Кнопка
    </>
);
```
