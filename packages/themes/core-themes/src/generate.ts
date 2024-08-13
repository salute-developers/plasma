import fs from 'fs';

import { ThemeRequest } from './types';
import {
    createColorTokens,
    createGradientTokens,
    createShadowTokens,
    createShapeTokens,
    createTypographyTokens,
} from './creators';
import {
    generateCSSThemes,
    generateCSSModuleThemes,
    generateDefaultTokens,
    generateRootIndex,
    generateThemes,
    generateTokens,
} from './generators';
import { getMetaGrouped, readTheme, fallbackCreateColorTokensWrapper } from './utils';

export const generate = async (themes: ThemeRequest[]) => {
    const themeDir = 'src';
    fs.existsSync(themeDir) || fs.mkdirSync(themeDir);
    const isJS = true;

    for (const theme of themes) {
        // eslint-disable-next-line no-await-in-loop
        const themeSource = await readTheme(theme.name, theme.version);
        const { meta, variations } = themeSource;
        const metaGrouped = getMetaGrouped(themeSource.meta);

        // TODO: Использовать createColorTokens: https://github.com/salute-developers/plasma/issues/1363
        const colorCSSVariables = fallbackCreateColorTokensWrapper(theme.name, variations.color, metaGrouped.color);
        const colorJSVariables = fallbackCreateColorTokensWrapper(
            theme.name,
            variations.color,
            metaGrouped.color,
            isJS,
        );

        const gradientCSSVariables = createGradientTokens(variations.gradient, metaGrouped.gradient);
        const gradientJSVariables = createGradientTokens(variations.gradient, metaGrouped.gradient, isJS);

        const shapeCSSVariables = createShapeTokens(variations.shape, metaGrouped.shape);
        const shapeJSVariables = createShapeTokens(variations.shape, metaGrouped.shape, isJS);

        const shadowCSSVariables = createShadowTokens(variations.shadow, metaGrouped.shadow);
        const shadowJSVariables = createShadowTokens(variations.shadow, metaGrouped.shadow, isJS);

        const typographyCSSVariables = createTypographyTokens(
            variations.typography,
            variations.fontFamily,
            metaGrouped.typography,
        );
        const typographyJSVariables = createTypographyTokens(
            variations.typography,
            variations.fontFamily,
            metaGrouped.typography,
            true,
        );

        const cssVariables = {
            dark: {
                colorTokens: colorCSSVariables.dark,
                gradientTokens: gradientCSSVariables.dark,
                shadowTokens: shadowCSSVariables.dark,
                shapeTokens: shapeCSSVariables.dark,
                typographyTokens: typographyCSSVariables.dark,
            },
            light: {
                colorTokens: colorCSSVariables.light,
                gradientTokens: gradientCSSVariables.light,
                shadowTokens: shadowCSSVariables.light,
                shapeTokens: shapeCSSVariables.light,
                typographyTokens: typographyCSSVariables.light,
            },
        };

        generateThemes(themeDir, meta.name, cssVariables);

        generateCSSThemes(themeDir, meta.name, cssVariables);

        generateCSSModuleThemes(themeDir, meta.name, cssVariables);

        generateTokens(themeDir, meta.name, {
            colorTokens: colorJSVariables.dark,
            gradientTokens: gradientJSVariables.dark,
            shadowTokens: shadowJSVariables.dark,
            shapeTokens: shapeJSVariables.dark,
            typographyTokens: typographyJSVariables.dark,
        });
    }

    const themeDefault = await readTheme('default', 'latest');
    const metaGroupedDefault = getMetaGrouped(themeDefault.meta);

    const colorDefaultJSVariables = createColorTokens(undefined, metaGroupedDefault.color, isJS).dark;
    const gradientDefaultJSVariables = createGradientTokens(undefined, metaGroupedDefault.gradient, isJS).dark;
    const shapeDefaultJSVariables = createShapeTokens(undefined, metaGroupedDefault.shape, isJS).dark;
    const shadowDefaultJSVariables = createShadowTokens(undefined, metaGroupedDefault.shadow, isJS).dark;
    const typographyDefaultJSVariables = createTypographyTokens(
        undefined,
        undefined,
        metaGroupedDefault.typography,
        true,
    ).dark;

    generateDefaultTokens(themeDir, {
        colorTokens: colorDefaultJSVariables,
        gradientTokens: gradientDefaultJSVariables,
        shadowTokens: shadowDefaultJSVariables,
        shapeTokens: shapeDefaultJSVariables,
        typographyTokens: typographyDefaultJSVariables,
    });

    generateRootIndex(themeDir);
};
