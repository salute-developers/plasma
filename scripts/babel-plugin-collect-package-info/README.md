# Babel плагин babel-plugin-collect-package-info

Данный плагин предназначен для интеграции и вызова метода `collectPackageInfo` во всех файлах, которые ре-экспортируются в `index.ts` на уровне компонент.

**Важно**, чтобы файл `collectPackageInfo.ts` обязательно лежал в директории в `./src`, т.к. плагин смотрит на все компоненты верхнеуровнево (`./src/components/Badge` и т.д.):

`Badge.js`
```
...
import { collectPackageInfo } from '../../collectPackageInfo';
collectPackageInfo('${entityName}');
...
```

## Описание

Метод `collectPackageInfo` предназначен для записи в глобальную переменную `__PLASMA_INFO__` информации, которая хранит в себе версию используемого пакета (`version`), и массив сущностей, которые были импортированы в формате "<имя__компонента>/<имя__файла>" (`entities`). Описывается следующим интерфейсом:

```ts
__PLASMA_INFO__: {
    [k: string]: {
        version: string;
        entities: string[];
    };
};
```

## Пример работы

Например, на основании файла `plasma-core/src/components/Button/index.ts`

```ts
export { Button, ButtonRoot } from './Button';
export type { ButtonProps, ButtonContentProps, ButtonSizeProps, ButtonViewProps } from './Button.types';

export { buttonViews, buttonSizes, buttonTypography } from './Button.props';

export { getButtonSizesMixin } from './Button.mixins';

export { createButton } from './createButton';
```

Метод `collectPackageInfo` попадёт в файлах `Button.js`, `Button.types.js`, `Button.props.js`, `Button.mixins.js` и `createButton.js` и вызовется в случае импорта одной из сущностей (`createButton`, `buttonViews` и т.д.).

Для файла `plasma-ui/src/components/Button/index.ts`

```ts
export { Button } from './Button';
export type { ButtonProps } from './Button';

export { ActionButton } from './ActionButton';
export type { ActionButtonProps } from './ActionButton';
```

После работы плагина метод появится в файлах `Button.js` и `ActionButton.js` и вызовется в случае импорта одной из сущностей (`Button`, `ButtonProps` и т.д.).

И теперь, при использовании компонента `Button` из пакета `plasma-ui`, сформируется глобальная переменная со следующей структурой:

```ts
__PLASMA_INFO__: {
    '@salutejs/plasma-core': {
        version: '"1.100.0',
        entities: [
          "Spinner/Spinner",
          "Button/Button",
          "Button/createButton".
          "Button/Button.mixins"
          "Button/Button.props"
        ]
    },
    '@salutejs/plasma-ui': {
        version: '"1.180.0',
        entities: [
          "Button/Button"
        ]
    },
};
```

*Примечание: Дополнительные сущности (`Spinner/Spinner` и т.д.) появились из-за импортов в самой реализации компонента `Button`.*
