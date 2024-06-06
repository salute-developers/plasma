### Описание работы документации

В файле docusaurus.config.js в каждой из библиотек, задаются функции, которые собирают, фильтруют типы и на их основе генерируют json файлы. ( В файле более подробно )

Хук useDynamicImport - динамически импорирует нужный json файл

### Работа PropsTable

PropsTable.tsx - Вывод типов и их форматирование ( Подробнее в файле компонента )

В файл поступает 3 параметра:

-   Props: Object[]
-   Exlude: String[]
-   Include: String: []

Props: Массив объектов, где есть два ключа:

-   Key: название параметра
-   Prop: Информация об параметре

### Использование

```jsx
import React, { FC } from 'react';
import { PropsTable } from '@salutejs/plasma-docs-ui';

function App({ props }) {
    return (
        <div className="App">
            <PropsTable props={props} exclude={['css', 'focused']} include={['defaultChecked']} />
        </div>
    );
}

export default App;
```
