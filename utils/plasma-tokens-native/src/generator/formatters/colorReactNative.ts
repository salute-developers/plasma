import type { Dictionary, TransformedToken } from 'style-dictionary';
import { camelize, upperFirstLetter } from '@salutejs/plasma-tokens-utils';

import { ThemeColor, ThemeColorType } from '../../types';

const getExportColorThemes = (theme: string) => `const ${theme}ColorsMapping = {
  ...${theme}PlainColors,
  ...${theme}Gradients,
}

type ${theme}PlainColorsMap = {
  [name in Exclude<keyof typeof ${theme}ColorsMapping, GradientKey>]: string
}

export const ${theme}Colors: ${theme}PlainColorsMap & GradientsMap = ${theme}ColorsMapping`;

const getReactNativeTemplate = (
    gradientKeysContent: string,
    lightGradientContent: string,
    darkGradientContent: string,
    lightThemeContent: string,
    darkThemeContent: string,
) => {
    const header = `import type * as ReactNative from 'react-native'
import {DeprecatedColors} from './DeprecatedColors'
import {CustomColors} from './CustomColors'

// скопировано из react-native-linear-gradient чтобы вынести в shared тему
interface LinearGradientProps extends ReactNative.ViewProps {
  colors: (string | number)[]
  start?: {x: number; y: number}
  end?: {x: number; y: number}
  locations?: number[]
  useAngle?: boolean
  angleCenter?: {x: number; y: number}
  angle?: number
}`;

    const gradientKeys = `type GradientKey = ${gradientKeysContent}

type GradientsMap = Record<GradientKey, LinearGradientProps>`;

    const lightGradient = `/**
 * relevant (new) color scheme
 */
export const LightGradients: GradientsMap = {\n${lightGradientContent}\n}`;
    const darkGradient = `/**
 * relevant (new) color scheme
 */    
export const DarkGradients: GradientsMap = {\n${darkGradientContent}\n}`;

    const externalColors = `  ...DeprecatedColors,
  ...CustomColors,
  /**
   * relevant (new) color scheme
   */`;

    const lightTheme = `export const LightPlainColors = {\n${externalColors}\n${lightThemeContent}\n}`;
    const darkTheme = `export const DarkPlainColors = {\n${externalColors}\n${darkThemeContent}\n}`;

    const lightExport = getExportColorThemes(upperFirstLetter(ThemeColor.light));
    const darkExport = getExportColorThemes(upperFirstLetter(ThemeColor.dark));

    return [header, gradientKeys, lightGradient, darkGradient, lightTheme, darkTheme, lightExport, darkExport].join(
        '\n\n',
    );
};

const getTokenValue = (token: TransformedToken) => {
    const value = token.original.value.linearGradient
        ? `${token.value.replace(/@@@/g, '{').replace(/!!!/g, '}')}`
        : `'${token.value}'`;

    return `  ${token.attributes?.item}: ${value},`;
};

const isGradientToken = (token: TransformedToken, theme: string) =>
    (camelize(token.attributes?.type) || '').includes(theme) && token.original.value.linearGradient;

const getGradientKeys = (tokenItems: TransformedToken[]) => {
    const keys = `\n  ${tokenItems
        .filter((token) => isGradientToken(token, ThemeColor.light))
        .map((token) => `| '${token.attributes?.item}'`)
        .join('\n  ')}`;

    return keys.replace(/\s/g, '') ? keys : 'any';
};

const getGradientTokens = (tokenItems: TransformedToken[], theme: ThemeColorType) =>
    tokenItems
        .filter((token) => isGradientToken(token, theme))
        .map(getTokenValue)
        .join('\n');

const getTheme = (tokenItems: TransformedToken[], theme: ThemeColorType) =>
    tokenItems
        .filter(
            (token) => (camelize(token.attributes?.type) || '').includes(theme) && !token.original.value.linearGradient,
        )
        .map(getTokenValue)
        .join('\n');

export const colorReactNativeCustomFormatter = ({ dictionary }: { dictionary: Dictionary }) => {
    const gradientKeys = getGradientKeys(dictionary.allTokens);

    const lightGradientTokens = getGradientTokens(dictionary.allTokens, ThemeColor.light);
    const darkGradientTokens = getGradientTokens(dictionary.allTokens, ThemeColor.dark);

    const lightTheme = getTheme(dictionary.allTokens, ThemeColor.light);
    const darkTheme = getTheme(dictionary.allTokens, ThemeColor.dark);

    return getReactNativeTemplate(gradientKeys, lightGradientTokens, darkGradientTokens, lightTheme, darkTheme);
};
