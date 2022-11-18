import type { Dictionary, TransformedToken } from 'style-dictionary';

const DEFAULT_FONT_SIZE = 16;

const fontWeightMap: Record<string, string> = {
    '100': 'thin',
    '200': 'ultraLight',
    '300': 'light',
    '400': 'regular',
    '500': 'medium',
    '600': 'semibold',
    '700': 'bold',
    '800': 'heavy',
    '900': 'black',
};

const getReactNativeTemplate = (
    baseFontFamily: string,
    tokensName: string,
    paragraphStyleContent: string,
    lineStyleContent: string,
    uiFontContent: string,
    fontContent: string,
) => {
    const fontFamilyName = baseFontFamily.replace(/ /g, '');

    const header = `//

import Foundation
import SwiftUI
import UIKit

// swiftlint:disable file_length
private extension UIFont {
    convenience init?(font: FontConvertible, size: CGFloat) {
        #if os(iOS) || os(tvOS) || os(watchOS)
            if !UIFont.fontNames(forFamilyName: font.family).contains(font.name) {
                font.register()
            }
        #elseif os(OSX)
            if let url = font.url, CTFontManagerGetScopeForURL(url as CFURL) == .none {
                font.register()
            }
        #endif

        self.init(name: font.name, size: size)
    }
}

private final class BundleToken {
    static let bundle: Bundle = .init(for: BundleToken.self)
}

public struct FontConvertible {
    public let name: String
    public let family: String
    public let path: String

    fileprivate var url: URL? {
        let bundle = BundleToken.bundle
        return bundle.url(forResource: path, withExtension: nil)
    }

    fileprivate func register() {
        guard let url = url else {
            return
        }

        CTFontManagerRegisterFontsForURL(url as CFURL, .process, nil)
    }

    fileprivate func fixedSizeFont(size: CGFloat) -> Font {
        return Font.custom(name, fixedSize: size)
    }

    public func uiFont(size: CGFloat) -> UIFont {
        guard let font = UIFont(font: self, size: size) else {
            fatalError("Unabble to initialize font '\\(name)' (\\(family))")
        }

        return font
    }

    public func font(size: CGFloat) -> SwiftUI.Font {
        return Font.custom(name, size: size)
    }
}
`;

    const fonts = `public enum FontFamily {
    public enum ${fontFamilyName} {
        public static let regular = FontConvertible(
            name: "${fontFamilyName}-Regular",
            family: "${baseFontFamily}",
            path: "${fontFamilyName}-Regular.otf"
        )

        public static let semibold = FontConvertible(
            name: "${fontFamilyName}-Semibold",
            family: "${baseFontFamily}",
            path: "${fontFamilyName}-Semibold.otf"
        )

        public static let bold = FontConvertible(
            name: "${fontFamilyName}-Bold",
            family: "${baseFontFamily}",
            path: "${fontFamilyName}-Bold.otf"
        )

        fileprivate static let all: [FontConvertible] = [regular, semibold, bold]
    }

    fileprivate static let allCustomFonts: [FontConvertible] = [${fontFamilyName}.all].flatMap { $0 }

    fileprivate static func registerAllCustomFonts() {
        allCustomFonts.forEach { $0.register() }
    }
}
`;
    const lineStyleStruct = `public struct LineStyle {
    public internal(set) var spacing: CGFloat
    public internal(set) var kerning: CGFloat
}`;

    const paragraphStyle = `    public func paragraphStyle() -> NSMutableParagraphStyle {
        switch self {
${paragraphStyleContent}
        }
    }`;

    const lineStyle = `    public func lineStyle() -> LineStyle {
        switch self {
${lineStyleContent}
        }
    }`;

    const uiFont = `    public func uiFont() -> UIFont {
        switch self {
${uiFontContent}
        }
    }`;

    const font = `    public func font() -> Font {
        switch self {
${fontContent}
        }
    }`;

    const fontBookStyle = `\n// swiftlint:disable cyclomatic_complexity function_body_length
public enum FontBookStyle {
${tokensName}

${paragraphStyle}

${lineStyle}

${uiFont}

${font}
}

// swiftlint:enable cyclomatic_complexity function_body_length
`;

    return [header, fonts, lineStyleStruct, fontBookStyle].join('\n');
};

const getFontFamily = (tokenItems: TransformedToken[]) => {
    const [baseFontFamily] = tokenItems.filter(({ name }) => name === 'dsplL');

    return baseFontFamily?.value['font-family'] || 'SB Sans Display';
};

const getTokens = (tokenItems: TransformedToken[]) => tokenItems.map(({ name }) => `    case ${name}`).join(`\n`);

const getParagraphStyle = (tokenItems: TransformedToken[]) =>
    tokenItems
        .map(({ name, value }) => {
            const lineHeight = Number(value['line-height'].replace(/rem/gi, '') * DEFAULT_FONT_SIZE);

            return `        case .${name}:
            let style = NSMutableParagraphStyle()
            style.minimumLineHeight = ${lineHeight}
            style.maximumLineHeight = ${lineHeight}
            return style`;
        })
        .join(`\n`);

const getLineStyle = (tokenItems: TransformedToken[]) =>
    tokenItems
        .map(({ name, value }) => {
            const letterSpacing = Number(value['letter-spacing'].replace(/r?em/gi, '')) || 0;

            return `        case .${name}:
            return LineStyle(spacing: 0, kerning: ${letterSpacing})`;
        })
        .join(`\n`);

const getUiFont = (tokenItems: TransformedToken[], baseFontFamily: string) =>
    tokenItems
        .map(({ name, value }) => {
            const fontFamilyName = baseFontFamily.replace(/ /g, '');
            const fontWeight = fontWeightMap[value['font-weight']];
            const fontSize = Number(value['font-size'].replace(/rem/gi, '') * DEFAULT_FONT_SIZE);

            return `        case .${name}:
            return FontFamily.${fontFamilyName}.${fontWeight}.uiFont(size: ${fontSize})`;
        })
        .join(`\n`);

const getFont = (tokenItems: TransformedToken[], baseFontFamily: string) =>
    tokenItems
        .map(({ name, value }) => {
            const fontFamilyName = baseFontFamily.replace(/ /g, '');
            const fontWeight = fontWeightMap[value['font-weight']];
            const fontSize = Number(value['font-size'].replace(/rem/gi, '') * DEFAULT_FONT_SIZE);

            return `        case .${name}:
            return FontFamily.${fontFamilyName}.${fontWeight}.fixedSizeFont(size: ${fontSize})`;
        })
        .join(`\n`);

export const typoIosSwiftCustomFormatter = ({ dictionary }: { dictionary: Dictionary }) => {
    const baseFontFamily = getFontFamily(dictionary.allTokens);

    const tokensName = getTokens(dictionary.allTokens);
    const paragraphStyle = getParagraphStyle(dictionary.allTokens);
    const lineStyle = getLineStyle(dictionary.allTokens);
    const uiFont = getUiFont(dictionary.allTokens, baseFontFamily);
    const font = getFont(dictionary.allTokens, baseFontFamily);

    return getReactNativeTemplate(baseFontFamily, tokensName, paragraphStyle, lineStyle, uiFont, font);
};
