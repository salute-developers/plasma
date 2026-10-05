import { DefaultTheme } from 'styled-components';

export interface ThemeProviderContextBase extends DefaultTheme {
    /**
     * Отключить любую анимацию компонента.
     */
    lowPerformance?: boolean;

    deviceScale?: number;
}

// TODO: https://github.com/salute-developers/plasma/issues/232
