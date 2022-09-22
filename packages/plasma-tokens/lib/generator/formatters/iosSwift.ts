import type { Dictionary, File } from 'style-dictionary';
import { upperFirstLetter, lowerFirstLetter } from '../../themeBuilder/utils';

const getSwiftTemplate = (structContent: string, enumsContent: string) => {
    const header = `
// swiftlint:disable all

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
}`;

    const structHeader = `    public let plasmaTokensColorLight: UIColor
    public let plasmaTokensColorLDark: UIColor

    public var color: SwiftUI.Color { return Color(UIColor(light: plasmaTokensColorLight, dark: plasmaTokensColorLDark)) }
    public var uiColor: UIColor { return UIColor(light: plasmaTokensColorLight, dark: plasmaTokensColorLDark) }
`;

    const struct = `public struct ColorToken {\n${[structHeader, structContent].join('\n')}\n}`;
    const enums = `private enum PlasmaTokensColor {\n${enumsContent}\n}\n`;

    return [header, struct, enums].join('\n\n');
};

export const iosSwiftCustomFormatter = ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    const themeName = file.className || '';
    const filterWord = 'light';

    const struct = dictionary.allTokens
        .filter((tokens) => tokens.attributes?.type?.includes(filterWord))
        .map((token) => {
            const modName = token.name.replace(`${filterWord}${themeName}`, '');
            const name = upperFirstLetter(modName);

            return `    public static let ${lowerFirstLetter(
                name,
            )} = ColorToken(plasmaTokensColorLight: PlasmaTokensColor.light${name}, plasmaTokensColorLDark: PlasmaTokensColor.dark${name})`;
        })
        .join(`\n`);

    const enums = dictionary.allTokens
        .map((token) => {
            const { name, value } = token;
            const modName = name.replace(themeName, '');

            return `    static let ${modName} = ${value}`;
        })
        .join(`\n`);

    return getSwiftTemplate(struct, enums);
};
