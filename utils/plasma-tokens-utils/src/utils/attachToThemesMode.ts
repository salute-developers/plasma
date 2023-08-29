import { CSSProperties, CSSThemeMode } from '../types';

export const attachToThemesMode = (cssVariablesDark: CSSProperties, cssVariablesLight: CSSProperties): CSSThemeMode => {
    return {
        '.dark': cssVariablesDark,
        '.light': cssVariablesLight,
    };
};
