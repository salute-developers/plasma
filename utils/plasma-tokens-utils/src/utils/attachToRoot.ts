import { CSSProperties, CSSRootTheme } from '../types';

/**
 * Обернуть переменные CSS в объект с корневыми переменными.
 */
export const attachToRoot = (cssVariables: CSSProperties, themeName?: string): CSSRootTheme => {
    const selector = themeName ? `:root:not([data-theme]), [data-theme='${themeName}']` : ':root';

    return {
        [selector]: cssVariables,
    };
};
