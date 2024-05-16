import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import {
    createColorTokens,
    createDefaultColorTokens,
    createMockColorTokens,
    createGradientTokens,
    createDefaultGradientTokens,
    createMockGradientTokens,
    createMockShadowTokens,
    createDefaultShadowTokens,
    createShadowTokens,
    createMockShapeTokens,
    createDefaultShapeTokens,
    createShapeTokens,
    createMockTypographyTokens,
    createDefaultTypographyTokens,
    createTypographyTokens,
    createFontFamilyTokens,
    createDefaultFontFamilyTokens,
    createMockFontFamilyTokens,
} from '../tokens';
import { Theme } from './';
import { PlatformsVariations, ThemeMeta, TokenType } from '../types';

export const buildDefaultTheme = (config: ThemeConfig) => {
    const color = createDefaultColorTokens(config);
    const gradient = createDefaultGradientTokens(config);
    const shadow = createDefaultShadowTokens(config);
    const shape = createDefaultShapeTokens(config);
    const typography = createDefaultTypographyTokens(config);
    const fontFamily = createDefaultFontFamilyTokens(config);

    return new Theme(config.name, '0.1.0', {
        color,
        gradient,
        shadow,
        shape,
        typography,
        fontFamily,
    });
};

export const buildTheme = (meta: ThemeMeta, variations: PlatformsVariations) => {
    const metaGrouped = meta.tokens.reduce((acc, token) => {
        return {
            ...acc,
            [token.type]: [...(acc[token.type] || []), token],
        };
    }, {} as Record<TokenType['type'], Array<TokenType>>);

    const color = createColorTokens(metaGrouped.color, variations.color);
    const gradient = createGradientTokens(metaGrouped.gradient, variations.gradient);
    const shadow = createShadowTokens(metaGrouped.shadow, variations.shadow);
    const shape = createShapeTokens(metaGrouped.shape, variations.shape);
    const typography = createTypographyTokens(metaGrouped.typography, variations.typography);
    const fontFamily = createFontFamilyTokens(metaGrouped.fontFamily, variations.fontFamily);

    return new Theme(meta.name, meta.version, {
        color,
        gradient,
        shadow,
        shape,
        typography,
        fontFamily,
    });
};

// TODO: Удалить метод после завершения разработки разделов с токенами
export const buildMockTheme = () => {
    const color = createMockColorTokens();
    const gradient = createMockGradientTokens();
    const shadow = createMockShadowTokens();
    const shape = createMockShapeTokens();
    const typography = createMockTypographyTokens();
    const fontFamily = createMockFontFamilyTokens();

    return new Theme('mock', '0.1.0', {
        color,
        gradient,
        shadow,
        shape,
        typography,
        fontFamily,
    });
};
