## Пример

```tsx
import ReactDOM from 'react-dom';
import { DeviceThemeProvider } from '@salutejs/plasma-ui';

// Стандартная функция определения поверхности на основе `userAgent`
import { detectDevice } from '@salutejs/plasma-ui/utils';

import { App } from './App';

// Если стилизованным компонентам необходимо передать свой объект темы
const myFancyTheme = {
    brandColor: '#BADA55',
};

// Если стандартная функция определения поверхности не подходит, можно передать свою
const detectDeviceCallback = () => {
    // Здесь проводится проверка, например, на основе userAgent.
    window.navigator.userAgent.toLowerCase().includes('sberbox') ? 'sberBox' : 'mobile';
};

ReactDOM.render(
    <DeviceThemeProvider theme={myFancyTheme} detectDeviceCallback={detectDeviceCallback}>
        <App />
    </DeviceThemeProvider>,
    document.getElementById('root'),
);
```
