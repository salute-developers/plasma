import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineTransparentAccentTokens = (config: ThemeConfig) => {
    const opacityValue = -0.6;

    const darkValue = `${config.accentColor.dark}[${opacityValue}]`;
    const lightValue = `${config.accentColor.light}[${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный акцентный цвет обводки',
        onDark: 'Прозрачный акцентный цвет обводки на темном фоне',
        onLight: 'Прозрачный акцентный цвет обводки на светлом фоне',
        inverse: 'Прозрачный инвертированный акцентный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
