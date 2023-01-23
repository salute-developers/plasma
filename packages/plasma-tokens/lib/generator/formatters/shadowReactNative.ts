import type { Dictionary, TransformedToken } from 'style-dictionary';

import { upperFirstLetter } from '../../themeBuilder/utils';

const PREDEFINED_DIRECTION = 'down';

const getReactNativeTemplate = (
    shadowEnumsContent: string,
    shadowsSizeContent: string,
    shadowTokensContent: string,
) => {
    const header = `/**
 * @description
 * Design System 2.0 shadows
 * do not add custom shadows / custom deps in this file
 */

/**
 * @description
 * Use elevation directly only for animations and complex styles
 * Use Shadows constant in all other cases
 */`;

    const shadowEnums = `export enum EShadow {
  ${shadowEnumsContent}
}
`;

    const shadowsSize = `export const ShadowsSizes: Record<EShadow, number> = {
  ${shadowsSizeContent}
}
`;

    const mainContent = `export type Shadow = {
  elevation: string
  shadowColor: string
}
    
export const DEFAULT_SHADOW_COLOR = 'rgba(36, 40, 43, 0.8)'
    
/**
 * @description
 * direct use is deprecated
 * use Shadows constant
 */
export const makeShadow = (
  shadow?: EShadow,
  color: string = DEFAULT_SHADOW_COLOR,
): Shadow | {} =>
  shadow
    ? {
        elevation: \`\${ShadowsSizes[shadow]}\`,
        shadowColor: color,
      }
    : {}
`;

    const shadows = `export const Shadows = {
  ${shadowTokensContent}
}`;

    return [header, shadowEnums, shadowsSize, mainContent, shadows].join('\n');
};

const getShadowEnumValues = (sizes: string[]) =>
    sizes.map((size) => `${size.toUpperCase()} = '${size.toUpperCase()}',`).join('\n  ');

const getShadowSizes = (sizes: string[]) =>
    sizes.map((size, i) => `[EShadow.${size.toUpperCase()}]: ${4 * (i + 1)},`).join('\n  ');

const getShadowTokensByType = (sizes: string[], tokenItems: TransformedToken[], type: string) =>
    sizes
        .map((size) => {
            const upperSize = size.toUpperCase();
            const upperType = upperFirstLetter(type);

            const token = tokenItems.find((item) => item.name.includes(`${upperType}${upperSize}`));
            const value = token?.value[token?.value.length - 1];

            return `[EShadow.${upperSize}]: makeShadow(EShadow.${upperSize}, '${value.color}'),`;
        })
        .join('\n    ');

const getShadowTokens = (types: string[], sizes: string[], tokenItems: TransformedToken[]) =>
    types
        .map((type) => {
            const tokens = getShadowTokensByType(sizes, tokenItems, type);

            return `${upperFirstLetter(type)}: {
    ${tokens}
  },`;
        })
        .join('\n  ');

const getArray = (dictionary: Dictionary, token: string) =>
    Array.from(new Set(dictionary.allTokens.map((item) => item.attributes?.[token])));

export const shadowReactNativeCustomFormatter = ({ dictionary }: { dictionary: Dictionary }) => {
    const sizes = getArray(dictionary, 'subitem');
    const types = getArray(dictionary, 'item');

    const shadowEnums = getShadowEnumValues(sizes);
    const shadowsSize = getShadowSizes(sizes);
    const shadowTokens = getShadowTokens(types, sizes, dictionary.allTokens);

    return getReactNativeTemplate(shadowEnums, shadowsSize, shadowTokens);
};
