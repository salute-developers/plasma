import { ThemeMode, getRestoredColorFromPalette } from '@salutejs/plasma-tokens-utils';

import { getStateColor, sectionToFormulaMap } from '../../../utils';
import { ColorToken } from '../../tokens';
import { Platform, PlatformsVariations } from '../../types';

export const getHoverAndActiveColorThemeTokens = (
    token: ColorToken,
): PlatformsVariations['color'][Platform] | undefined => {
    const [mode, category] = token.getName().split('.');

    const sectionName = sectionToFormulaMap[category];

    if (!sectionName) {
        return undefined;
    }

    const value = token.getValue('web');
    const restoredValue = getRestoredColorFromPalette(value);
    const getDefaultStateToken = getStateColor(restoredValue, sectionName, mode as ThemeMode);

    return {
        [`${token.getName()}-hover`]: getDefaultStateToken('hover'),
        [`${token.getName()}-active`]: getDefaultStateToken('active'),
    };
};
