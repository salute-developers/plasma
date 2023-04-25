import type { Dictionary, File, TransformedToken } from 'style-dictionary';
import { upperFirstLetter, lowerFirstLetter, camelize } from '@salutejs/plasma-tokens-utils';

import { GradientToken, ThemeColor, ThemeColorType } from '../../types';

const getSwiftTemplate = (structContent: string, gradientContent: string, enumsContent: string) => {
    const header = `// swiftlint:disable all

import SMFoundation
import SwiftUI
import UIKit

extension UIColor {
    convenience init(light: UIColor, dark: UIColor) {
        self.init { traitCollection in
            switch traitCollection.userInterfaceStyle {
            case .dark:
                return dark
            case .light, .unspecified:
                return light
            @unknown default:
                return light
            }
        }
    }

    public var color: SwiftUI.Color { return Color(self) }
}

extension LinearGradient {
    init(stopColors: [ColorToken], startPoint: UnitPoint, endPoint: UnitPoint) {
        self.init(
            stops: stopColors.enumerated().map { index, element in
                Gradient.Stop(color: element.color, location: CGFloat(index))
            },
            startPoint: startPoint,
            endPoint: endPoint
        )
    }
}`;

    const structHeader = `    public let plasmaTokensColorLight: UIColor
    public let plasmaTokensColorDark: UIColor

    public var color: SwiftUI.Color { 
        return Color(UIColor(light: plasmaTokensColorLight, dark: plasmaTokensColorDark)) 
    }

    public var uiColor: UIColor { 
        return UIColor(light: plasmaTokensColorLight, dark: plasmaTokensColorDark) 
    }
`;

    const gradient = `\n    public enum Gradients {\n${gradientContent}\n    }`;

    const struct = `public struct ColorToken {\n${[structHeader, structContent, gradient].join('\n')}\n}`;

    const enums = `private enum PlasmaTokensColor {\n${enumsContent}\n}\n`;

    return [header, struct, enums].join('\n\n');
};

const getConditionalColorToken = (firstValue: string, secondValue: string) => `: UIColor {
        if UIThemeContainer.shared.isSberThemeAvailable {
            return ${firstValue};
        } else {
            return ${secondValue};
        }
    }
`;

const lightTokenSberMap: Record<string, string> = {
    lightTextAccent: 'UIColor(red: 0.819, green: 0.302, blue: 0, alpha: 1)',
    lightOnDarkTextAccent: 'UIColor(red: 0.961, green: 0.365, blue: 0.019, alpha: 1)',
    lightSurfaceAccent: 'UIColor(red: 0.961, green: 0.365, blue: 0.019, alpha: 1)',
    lightOnDarkSurfaceAccent: 'UIColor(red: 0.961, green: 0.365, blue: 0.019, alpha: 1)',
    lightBannersDefaultBannerGreen: 'UIColor(red: 1, green: 0.961, blue: 0.941, alpha: 1)',
};

const getLinearGradient = (
    token: Record<ThemeColorType, GradientToken>,
    startPoint: string,
    endPoint: string,
) => `LinearGradient(
            stopColors: [
                ColorToken(
                    plasmaTokensColorLight: ${token.Light.startColor},
                    plasmaTokensColorDark: ${token.Dark.startColor}
                ),
                ColorToken(
                    plasmaTokensColorLight: ${token.Light.endColor},
                    plasmaTokensColorDark: ${token.Dark.endColor}
                )
            ],
            startPoint: ${startPoint},
            endPoint: ${endPoint}
        )`;

const hasGradientWord = (name: string) => name.toLocaleLowerCase().includes('gradient');

const getStructure = (tokenItems: TransformedToken[], themeName: string) =>
    tokenItems
        .filter(({ name }) => name.includes(`${themeName}${ThemeColor.light}`) && !hasGradientWord(name))
        .map((token) => {
            const tokenName = token.name.replace(`${themeName}${ThemeColor.light}`, '');
            const name = upperFirstLetter(tokenName);

            return `    public static let ${lowerFirstLetter(name)} = ColorToken(
        plasmaTokensColorLight: PlasmaTokensColor.light${name}, 
        plasmaTokensColorDark: PlasmaTokensColor.dark${name}
    )`;
        })
        .join('\n\n');

const getGradient = (tokenItems: TransformedToken[], themeName: string) => {
    const regex = new RegExp(`(${themeName}(${ThemeColor.light}|${ThemeColor.dark}))`);

    const gradient = tokenItems
        .filter(({ name }) => hasGradientWord(name))
        .reduce<Record<string, Record<ThemeColorType, GradientToken>>>((acc, token) => {
            const tokenName = token.name.replace(regex, '');
            const name = lowerFirstLetter(tokenName);
            const themeColor = (token.name.match(regex)?.[2] || ThemeColor.light) as ThemeColorType;

            return {
                ...acc,
                [name]: {
                    ...acc[name],
                    [themeColor]: token.value,
                },
            };
        }, {});

    return Object.entries(gradient)
        .map(([key, value]) => {
            const { startPoint, endPoint } = value[ThemeColor.light];

            return `        public static let ${key} = ${getLinearGradient(value, startPoint, endPoint)}`;
        })
        .join('\n\n');
};

const getEnums = (tokenItems: TransformedToken[], themeName: string) =>
    tokenItems
        .filter(({ name }) => !hasGradientWord(name))
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

    return getSwiftTemplate(struct, gradient, enums);
};
