import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { DeviceKind } from '../utils';

export interface ThemeProviderContext {
    deviceKind: DeviceKind;
    deviceScale: number;
    lowPerformance: boolean;
    [key: string]: unknown;
}

/**
 * Возвращает контекст темы.
 * @return {ThemeProviderContext}
 */
export const useThemeContext = (): ThemeProviderContext => {
    return useContext<ThemeProviderContext>(ThemeContext) || {};
};
