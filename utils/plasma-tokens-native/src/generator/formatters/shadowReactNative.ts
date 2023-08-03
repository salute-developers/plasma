import type { Dictionary, TransformedToken } from 'style-dictionary';
import { upperFirstLetter } from '@salutejs/plasma-tokens-utils';

const FIXED_DIRECTION = 'down';

const getReactNativeTemplate = (
    shadowEnumsContent: string,
    shadowColorAndroidContent: string,
    shadowSizeAndroidContent: string,
    shadowOpacityIOSContent: string,
    shadowSizeIOSContent: string,
    shadowsContent: string,
) => {
    const header = `/**
 * @description
 * Design System 2.0 shadows
 * do not add custom shadows / custom deps in this file
 */

import {Platform} from 'react-native'
import type {ShadowStyleIOS} from 'react-native'

/**
 * @description
 * Use elevation directly only for animations and complex styles
 * Use Shadows constant in all other cases
 */`;

    const shadowEnums = `export enum EShadow {
  ${shadowEnumsContent}
}
`;

    const types = `export enum EShadowType {
  SOFT = 'Soft',
  HARD = 'Hard',
}

type ShadowIOS = ShadowStyleIOS & {
  shadowColor?: string
  overflow: 'visible'
}

type ShadowAndroid = {
  shadowColor?: string
  elevation: string
}

export type Shadow = ShadowIOS | ShadowAndroid
`;

    const defaultShadowColors = `export const DEFAULT_SHADOW_COLOR = Platform.select({
  android: 'rgba(36, 40, 43, 0.8)',
  ios: 'rgba(52,52,52, 0.14)',
})
`;

    const shadowColorAndroid = `export const ShadowColorAndroid = {
  ${shadowColorAndroidContent}
}
`;

    const shadowSizeAndroid = `export const ShadowSizeAndroid = {
  ${shadowSizeAndroidContent}
}
`;

    const shadowOpacityIOS = `const ShadowColorIOS = '#000000'
const ShadowOpacityIOS = {
  ${shadowOpacityIOSContent}
}
`;

    const shadowSizeIOS = `const ShadowSizeIOS = {
  ${shadowSizeIOSContent}
}
`;

    const shadows = `export const Shadows = {
  ${shadowsContent}
}
`;

    return [
        header,
        shadowEnums,
        types,
        defaultShadowColors,
        shadowColorAndroid,
        shadowSizeAndroid,
        shadowOpacityIOS,
        shadowSizeIOS,
        getMakeShadowIOS(),
        getMakeShadowAndroid(),
        getMakeShadow(),
        shadows,
    ].join('\n');
};

const getMakeShadowIOS = () => `export const makeShadowIOS = (
  shadow: EShadow,
  shadowType: EShadowType = EShadowType.SOFT,
): ShadowIOS => ({
  ...ShadowSizeIOS[shadow],
  shadowColor: ShadowColorIOS,
  shadowOpacity: ShadowOpacityIOS[shadowType][shadow],
  overflow: 'visible',
})
`;

const getMakeShadowAndroid = () => `const makeShadowAndroid = (
  shadow: EShadow,
  shadowType: EShadowType = EShadowType.SOFT,
): ShadowAndroid => ({
  elevation: \`\${ShadowSizeAndroid[shadowType][shadow]}\`,
  shadowColor: ShadowColorAndroid[shadowType][shadow],
})
`;

const getMakeShadow = () => `/**
 * @deprecated
 * @description
 * direct use is deprecated
 * use Shadows constant
 */
export const makeShadow = (
  shadow?: EShadow,
  shadowType: EShadowType = EShadowType.SOFT,
): Shadow | {} =>
  shadow
    ? Platform.select<Shadow>({
        ios: makeShadowIOS(shadow, shadowType),
        android: makeShadowAndroid(shadow, shadowType),
      }) || {}
    : {}
`;

const getShadowEnumValues = (sizes: string[]) =>
    sizes.map((size) => `${size.toUpperCase()} = '${size.toUpperCase()}',`).join('\n  ');

const getShadows = (sizes: string[]) => (type: string) =>
    sizes
        .map((size) => {
            const upperSize = size.toUpperCase();
            const upperType = type.toUpperCase();
            return `[EShadow.${upperSize}]: makeShadow(EShadow.${upperSize}, EShadowType.${upperType}),`;
        })
        .join('\n    ');

const getShadowColorAndroid = (sizes: string[], tokenItems: TransformedToken[]) => (type: string) =>
    sizes
        .map((size) => {
            const upperSize = size.toUpperCase();
            const upperType = upperFirstLetter(type);

            const token = tokenItems.find((item) => item.name === `${FIXED_DIRECTION}${upperType}${upperSize}`);
            const value = token?.value[token?.value.length - 1].android;

            return value ? `[EShadow.${upperSize}]: '${value.color}',` : '';
        })
        .join('\n    ');

const getShadowSizeAndroid = (sizes: string[], tokenItems: TransformedToken[]) => (type: string) =>
    sizes
        .map((size) => {
            const upperSize = size.toUpperCase();
            const upperType = upperFirstLetter(type);

            const token = tokenItems.find((item) => item.name === `${FIXED_DIRECTION}${upperType}${upperSize}`);
            const value = token?.value[token?.value.length - 1].android;

            return value ? `[EShadow.${upperSize}]: ${value.elevation},` : '';
        })
        .join('\n    ');

const getShadowOpacityIOS = (sizes: string[], tokenItems: TransformedToken[]) => (type: string) =>
    sizes
        .map((size) => {
            const upperSize = size.toUpperCase();
            const upperType = upperFirstLetter(type);

            const token = tokenItems.find((item) => item.name === `${FIXED_DIRECTION}${upperType}${upperSize}`);
            const value = token?.value[token?.value.length - 1].ios;

            return value ? `[EShadow.${upperSize}]: ${value.opacity},` : '';
        })
        .join('\n    ');

const getShadowSizeIOS = (sizes: string[], tokenItems: TransformedToken[]) =>
    sizes
        .map((size) => {
            const upperSize = size.toUpperCase();
            const upperType = 'Soft';

            const token = tokenItems.find((item) => item.name === `${FIXED_DIRECTION}${upperType}${upperSize}`);
            const value = token?.value[token?.value.length - 1].ios;

            return value
                ? `[EShadow.${upperSize}]: {
    shadowOffset: {width: ${value.offset.width}, height: ${value.offset.height}},
    shadowRadius: ${value.radius},
  },`
                : '';
        })
        .join('\n  ');

const getShadowTokens = (types: string[], func: (type: string) => string) =>
    types
        .map((type) => {
            const tokens = func(type);
            const upperType = type.toUpperCase();
            return `[EShadowType.${upperType}]: {
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

    const shadowColorAndroidTokens = getShadowTokens(types, getShadowColorAndroid(sizes, dictionary.allTokens));
    const shadowSizeAndroidTokens = getShadowTokens(types, getShadowSizeAndroid(sizes, dictionary.allTokens));

    const shadowOpacityIOSTokens = getShadowTokens(types, getShadowOpacityIOS(sizes, dictionary.allTokens));
    const shadowSizeIOSTokens = getShadowSizeIOS(sizes, dictionary.allTokens);

    const shadowTokens = getShadowTokens(types, getShadows(sizes));

    return getReactNativeTemplate(
        shadowEnums,
        shadowColorAndroidTokens,
        shadowSizeAndroidTokens,
        shadowOpacityIOSTokens,
        shadowSizeIOSTokens,
        shadowTokens,
    );
};
