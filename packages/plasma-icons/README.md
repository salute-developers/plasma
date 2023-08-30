# Plasma-icons

Пакет предоставляет самостоятельный набор иконок для совместного использования с `plasma-ui`.

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/);

Использование данного пакета предполагает использование `react` & `react-dom`;

### Установка пакета

```sh
npm i --save @salutejs/plasma-icons
```

### Использование компонентов

Все иконки доступны из корня пакета
Пример:

```jsx
import { IconApps } from '@salutejs/plasma-icons';

const App = () => {
    return <IconApps />;
};
```

Также имеется возможность использовать иконки через переиспользуемый компонент. В этом случае все иконки попадут в бандл при сборке.
Пример:

```jsx
import { Icon } from '@salutejs/plasma-icons';

const App = () => {
    return <Icon icon="iconApps" />;
};
```

### Как добавить новую иконку

-   Создать React компонент с соответствующим именем, например `MessageChatFill.tsx` в директории `src/Icon.assets`
-   Убедиться, что у тега `<svg />` **нет атрибута** `height`, `width` использует проценты и прокинуты `props`.
-   Убедиться, что свойство `fill` для тега `<path />` использует значение `currentColor`
-   Так же можно убрать атрибуты: **fillRule**, **clipRule**
-   [Проверить SVG](https://github.com/salute-developers/plasma/pull/668#discussion_r1310927087), что не сломалось после удаления атрибутов

#### Пример правильного компонента

```tsx
import React from 'react';

import { IconProps } from '../IconRoot';

export const MessageChatFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="..." fill="currentColor" />
    </svg>
);
```

-   Создать React компонент с соответствующим именем, например `IconMessageChatFill.tsx` в директории `src/Icon`
    -   префикс `Icon` обязателен
-   Убедиться, что все необходимые свойства прокидываются, см. пример ниже

```tsx
import React from 'react';

import { MessageChatFill } from '../Icon.assets/MessageChatFill';
import { IconRoot, IconProps } from '../IconRoot';

export const IconMessageChatFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={MessageChatFill} />;
};
```

-   Сделать import в файле `Icon.tsx` по аналогии с импортами в самом файле
-   Сделать import в файле `index.ts` по аналогии с импортами в самом файле

## Полезные ссылки:

Витрина с компонентами [storybook](https://master--5f96ec813d800900227e3b93.chromatic.com)

Документация о каждом компоненте: https://bit.ly/36MIrA0
