// TODO: Убрать использование файла: https://github.com/salute-developers/plasma/issues/1363

import { createColorTokens } from '../creators';
import { TokenType } from '../types';

import { camelToKebab } from './other';

export const deprecatedColorTokenOnActualToken: Record<string, string> = {
    whitePrimary: 'onDarkTextPrimary',
    whiteSecondary: 'onDarkTextSecondary',
    whiteTertiary: 'onDarkTextTertiary',
    blackPrimary: 'onLightTextPrimary',
    blackSecondary: 'onLightTextSecondary',
    blackTertiary: 'onLightTextTertiary',
    buttonBlack: 'onLightSurfaceSolidDefault',
    buttonBlackSecondary: 'onLightSurfaceTransparentSecondary',
    buttonWhite: 'onDarkSurfaceSolidDefault',
    buttonWhiteSecondary: 'onDarkSurfaceTransparentSecondary',
    text: 'textPrimary',
    primary: 'textPrimary',
    secondary: 'textSecondary',
    tertiary: 'textTertiary',
    paragraph: 'textParagraph',
    background: 'backgroundPrimary',
    accent: 'textAccent',
    success: 'textPositive',
    warning: 'textWarning',
    critical: 'textNegative',
    overlay: 'overlaySoft',
    surfaceLiquid01: 'surfaceTransparentPrimary',
    surfaceLiquid02: 'surfaceTransparentSecondary',
    surfaceLiquid03: 'surfaceTransparentTertiary',
    surfaceSolid01: 'surfaceSolidPrimary',
    surfaceSolid02: 'surfaceSolidSecondary',
    surfaceSolid03: 'surfaceSolidTertiary',
    surfaceCard: 'surfaceTransparentCard',
    buttonSecondary: 'surfaceTransparentSecondary',
    buttonAccent: 'textAccent',
    buttonSuccess: 'surfacePositive',
    buttonWarning: 'surfaceWarning',
    buttonCritical: 'surfaceNegative',
};

export const getFallbackTokens = (isJS?: boolean) => {
    const legacyPrefix = 'plasmaColors';

    return Object.entries(deprecatedColorTokenOnActualToken)
        .map(([oldName, actualName]) => {
            const oldVarName = `--${camelToKebab(legacyPrefix)}-${camelToKebab(oldName)}`;
            const actualVarName = `--${camelToKebab(actualName)}`;

            if (isJS) {
                return `/** @deprecated instead use ${actualName} */\nexport const ${oldName} = 'var(${oldVarName}, var(${actualVarName}))';\n`;
            }

            return `  ${oldVarName}: var(${actualVarName});`;
        })
        .join('\n');
};

export const fallbackCreateColorTokensWrapper = (name: string, color: any, tokens?: Array<TokenType>, isJS = false) => {
    const colorVariables = createColorTokens(color, tokens, isJS);

    if (name === 'plasma_web' || name === 'plasma_b2c') {
        const fallbackTokens = getFallbackTokens(isJS);

        return {
            dark: `${colorVariables.dark}\n${fallbackTokens}`,
            light: `${colorVariables.light}\n${fallbackTokens}`,
        };
    }

    return colorVariables;
};
