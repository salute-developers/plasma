import { ThemeMode, getRestoredColorFromPalette } from '@salutejs/plasma-tokens-utils';

import { getStateColor, sectionToFormulaMap } from '../../../utils';
import { ColorToken } from '../../tokens';
import { Platform, PlatformsVariations } from '../../types';

export const getHoverAndActiveColorThemeTokens = (
    token: ColorToken,
): PlatformsVariations['color'][Platform] | undefined => {
    const [mode, category] = token.getName().split('.') as [ThemeMode, string];

    const sectionName = sectionToFormulaMap[category];

    if (!sectionName) {
        return undefined;
    }

    const value = token.getValue('web');
    const restoredValue = getRestoredColorFromPalette(value, -1);
    const getDefaultStateToken = getStateColor(restoredValue, sectionName, mode);

    return {
        [`${token.getName()}-hover`]: getDefaultStateToken('hover'),
        [`${token.getName()}-active`]: getDefaultStateToken('active'),
    };
};
