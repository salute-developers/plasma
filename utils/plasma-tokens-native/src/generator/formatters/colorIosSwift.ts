import type { Dictionary, File, TransformedToken } from 'style-dictionary';
import { upperFirstLetter, lowerFirstLetter, camelize } from '@salutejs/plasma-tokens-utils';

import { GradientToken, GradientType, ThemeColor, ThemeColorType } from '../../types';

const lightTokenSberMap: Record<string, string> = {
    lightTextAccent: 'UIColor(red: 0.819, green: 0.302, blue: 0, alpha: 1)',
    lightOnDarkTextAccent: 'UIColor(red: 0.961, green: 0.365, blue: 0.019, alpha: 1)',
    lightSurfaceAccent: 'UIColor(red: 0.961, green: 0.365, blue: 0.019, alpha: 1)',
    lightOnDarkSurfaceAccent: 'UIColor(red: 0.961, green: 0.365, blue: 0.019, alpha: 1)',
    lightBannersDefaultBannerGreen: 'UIColor(red: 1, green: 0.961, blue: 0.941, alpha: 1)',
};

const getSwiftTemplate = (structContent: string, gradientContent: string, enumsContent: string, themeName: string) => {
    const header = `// swiftlint:disable all

${
    themeName.includes('sbermarket')
        ? 'import SMFoundation\nimport SwiftUI\nimport UIKit'
        : 'import SwiftUI\nimport UIKit'
}`;

    const gradientStructs = `public struct GradientToken {
    public enum Kind {
        case linear
        case radial
    }

    public let type: Kind
    public let colors: [PlasmaColorToken]
    public let locations: [CGFloat]
    public let startPoint: CGPoint
    public let endPoint: CGPoint
}

public struct ComplexGradientToken {
    public let gradients: [GradientToken]
    public let backgroundColor: PlasmaColorToken
}`;

    const plasmaColorScheme = `public enum PlasmaColorScheme {
    case light
    case dark
}`;

    const structHeader = `    public let light: UIColor
    public let dark: UIColor

    public func color(_ scheme: PlasmaColorScheme) -> UIColor {
        switch scheme {
        case .dark:
            return dark
        case .light:
            return light
        }
    }
`;

    const gradient = `\n    public enum PlasmaGradient {\n${gradientContent}\n    }`;

    const colorStruct = `public struct PlasmaColorToken {\n${[structHeader, structContent, gradient].join('\n')}\n}`;

    const enums = `private enum PlasmaTokensColor {\n${enumsContent}\n}\n`;

    return [header, gradientStructs, plasmaColorScheme, colorStruct, enums].join('\n\n');
};

const getConditionalColorToken = (firstValue: string, secondValue: string) => `: UIColor {
        if UIThemeContainer.shared.isSberThemeAvailable {
            return ${firstValue};
        } else {
            return ${secondValue};
        }
    }
`;

const padFormatter = (strings: TemplateStringsArray, ...expressionValues: string[]) => {
    const pads = expressionValues[0];

    let finalString = '';
    for (let i = 1; i < expressionValues.length; i++) {
        finalString += `${strings[i]}${expressionValues[i]}`;
    }
    finalString += strings[strings.length - 1];

    return finalString.substring(1).replace(/\n/gm, `\n${pads}`);
};

const getColorToken = (lightColor: string, darkColor: string, pads = ' '.repeat(8)) =>
    padFormatter`${pads}
PlasmaColorToken(
    light: ${lightColor},
    dark: ${darkColor}
)`;

const getColorTokenList = (token: Record<ThemeColorType, GradientToken>) => {
    const tokenCount = token.Light.colors.length === token.Dark.colors.length ? token.Light.colors.length : 0;

    return [...Array(tokenCount).keys()]
        .map((index) => getColorToken(token.Light.colors[index], token.Dark.colors[index]))
        .join(',\n        ');
};

const getPlasmaGradient = (
    token: Record<ThemeColorType, GradientToken>,
    startPoint: string,
    endPoint: string,
    type: GradientType,
    locations: number[],
    pads = ' '.repeat(8),
) => padFormatter`${pads}
GradientToken(
    type: ${type},
    colors: [
        ${getColorTokenList(token)}
    ],
    locations: [${locations?.join(', ')}],
    startPoint: ${startPoint},
    endPoint: ${endPoint}
)`;

type ComplexGradientTokens = Record<ThemeColorType, Array<GradientToken & { backgroundColor: string }>>;

const getPlasmaComplexGradient = (tokens: ComplexGradientTokens) => {
    const gradientLayersCount = tokens[ThemeColor.dark].length;

    const gradients: Array<string> = [];
    for (let i = 1; i < gradientLayersCount; i++) {
        const Dark = tokens[ThemeColor.dark][i];
        const Light = tokens[ThemeColor.light][i];

        const { startPoint, endPoint, type, locations } = Light;

        const gradientToken = getPlasmaGradient({ Dark, Light }, startPoint, endPoint, type, locations, ' '.repeat(16));
        gradients.push(gradientToken);
    }

    const backgroundColorDark = tokens[ThemeColor.dark][0].backgroundColor;
    const backgroundColorLight = tokens[ThemeColor.light][0].backgroundColor;

    return `ComplexGradientToken(
            gradients: [
                ${gradients.join(`,\n${' '.repeat(16)}`)}
            ],
            backgroundColor: PlasmaColorToken(
                light: ${backgroundColorLight},
                dark: ${backgroundColorDark}
            )
        )`;
};

const getStructure = (tokenItems: TransformedToken[], themeName: string) =>
    tokenItems
        .filter(({ name, value }) => name.includes(`${themeName}${ThemeColor.light}`) && !value.gradient)
        .map((token) => {
            const tokenName = token.name.replace(`${themeName}${ThemeColor.light}`, '');
            const name = upperFirstLetter(tokenName);

            return `    public static let ${lowerFirstLetter(name)} = PlasmaColorToken(
        light: PlasmaTokensColor.light${name},
        dark: PlasmaTokensColor.dark${name}
    )`;
        })
        .join('\n\n');

const getGradient = (tokenItems: TransformedToken[], themeName: string) => {
    const regex = new RegExp(`(${themeName}(${ThemeColor.light}|${ThemeColor.dark}))`);

    const gradient = tokenItems
        .filter(({ value }) => value.gradient)
        .reduce<Record<string, Record<ThemeColorType, GradientToken>>>((acc, token) => {
            const tokenName = token.name.replace(regex, '');
            const name = lowerFirstLetter(tokenName);
            const themeColor = (token.name.match(regex)?.[2] || ThemeColor.light) as ThemeColorType;

            return {
                ...acc,
                [name]: {
                    ...acc[name],
                    [themeColor]: token.value.gradient,
                },
            };
        }, {});

    return Object.entries(gradient)
        .map(([key, value]) => {
            if (Array.isArray(value[ThemeColor.light]) && Array.isArray(value[ThemeColor.dark])) {
                return `        public static let ${key} = ${getPlasmaComplexGradient(
                    (value as unknown) as ComplexGradientTokens,
                )}`;
            }

            const { startPoint, endPoint, type, locations } = value[ThemeColor.light];

            return `        public static let ${key} = ${getPlasmaGradient(
                value,
                startPoint,
                endPoint,
                type,
                locations,
            )}`;
        })
        .join('\n\n');
};

const getEnums = (tokenItems: TransformedToken[], themeName: string) =>
    tokenItems
        .filter(({ value }) => !value.gradient)
        .map((token) => {
            const { name, value } = token;
            const modName = lowerFirstLetter(name.replace(themeName, ''));

            if (lightTokenSberMap[modName]) {
                return `    static var ${modName}${getConditionalColorToken(value, lightTokenSberMap[modName])}`;
            }
            return `    static let ${modName} = ${value}`;
        })
        .join('\n');

export const colorIosSwiftCustomFormatter = ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    const themeName = lowerFirstLetter(camelize(file.className) || '');

    const struct = getStructure(dictionary.allTokens, themeName);
    const gradient = getGradient(dictionary.allTokens, themeName);
    const enums = getEnums(dictionary.allTokens, themeName);

    return getSwiftTemplate(struct, gradient, enums, themeName);
};
