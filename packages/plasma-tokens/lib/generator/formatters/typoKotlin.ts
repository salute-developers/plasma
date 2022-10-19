import type { Dictionary, TransformedToken } from 'style-dictionary';

import { upperFirstLetter } from '../../themeBuilder/utils';

const BASE_FONT_NAME = 'FontBase';
const ADDITIONAL_FONT_NAME = 'FontAdditional';

const getKotlinTemplate = (
    dataClassContent: string,
    typoStylesContent: string,
    typoFuncContent: string,
    typoObjectContent: string,
    baseFontFamily: string,
    additionalFontFamily: string,
) => {
    const baseFontFamilyName = baseFontFamily.replace(/ /g, '');
    const additionalFontFamilyName = additionalFontFamily.replace(/ /g, '');

    const isSameFont = baseFontFamilyName === additionalFontFamilyName;

    const header = `package com.sbermarket.uikit.theme.constants
package com.sbermarket.uikit.theme.tokens

import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.TextUnitType
import androidx.compose.ui.unit.sp
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.runtime.Composable

import com.sbermarket.uikit.R

data class SMFontDecoration(
    val Crossed: TextDecoration = TextDecoration.LineThrough
)

@Composable
private fun TextStyle.withoutFontScale(): TextStyle {
    if (fontSize.type == TextUnitType.Unspecified) {
        return this
    }
    val fontScale = LocalDensity.current.fontScale
    return copy(fontSize = fontSize.div(fontScale), lineHeight = lineHeight.div(fontScale))
}

private val defaultFontDecorations = SMFontDecoration()

private val ${baseFontFamilyName} = FontFamily(
    Font(R.font.sbsansdisplay_regular, FontWeight.Normal),
)
private val ${BASE_FONT_NAME} = TextStyle(
    fontWeight = FontWeight.Normal,
    fontFamily = ${baseFontFamilyName},
    color = defaultPalette.black100,
)${
        isSameFont
            ? ''
            : `
private val ${additionalFontFamilyName} = FontFamily(
    Font(R.font.sbsanstext_regular, FontWeight.Normal),
)
private val ${ADDITIONAL_FONT_NAME} = TextStyle(
    fontWeight = FontWeight.Normal,
    fontFamily = ${additionalFontFamilyName},
    color = defaultPalette.black100,
)`
    }`;

    const dataClass = `data class SMTypography(\n    val decoration: SMFontDecoration,\n${dataClassContent}\n)`;
    const typoFunc = `@Composable\nfun SMTypography.withoutFontScale() = SMTypography(\n    decoration = this.decoration,\n${typoFuncContent}\n)`;
    const typoObject = `internal val defaultTypo = SMTypography(\n    decoration = defaultFontDecorations,\n${typoObjectContent}\n)`;

    return [header, dataClass, typoStylesContent, typoFunc, typoObject].join('\n\n');
};

const getFontFamilies = (tokenItems: TransformedToken[]): readonly [string, string] => {
    const [baseFontFamily, additionalFontFamily] = tokenItems.filter(
        ({ name }) => name === 'dsplL' || name === 'bodyL',
    );

    return [
        baseFontFamily?.value['font-family'] || 'SB Sans Display',
        additionalFontFamily?.value['font-family'] || 'SB Sans Text',
    ];
};

const getDataClass = (tokenItems: TransformedToken[]) =>
    tokenItems.map((token) => `    val ${token.name}: TextStyle`).join(`,\n`);

const getTokenValue = (token: TransformedToken, baseFontFamily: string, additionalFontFamily: string) => {
    const { name, value } = token;
    const isSameFont = baseFontFamily === additionalFontFamily;

    const typoMap: Record<string, string> = {
        [baseFontFamily]: BASE_FONT_NAME,
        [additionalFontFamily]: ADDITIONAL_FONT_NAME,
    };

    const fontFamily = isSameFont ? BASE_FONT_NAME : typoMap[value['font-family']];

    const fontSize = value['font-size'].replace(/r?em/gi, '.em');
    const lineHeight = value['line-height'].replace(/r?em/gi, '.em');
    const fontWeight = `FontWeight.W${value['font-weight']}`;
    const letterSpacing = value['letter-spacing'].replace(/r?em/gi, '.em');
    const fontStyle = `FontStyle.${upperFirstLetter(value['font-style'])}`;

    return `private val ${name} = ${fontFamily}.copy(
    fontSize = ${fontSize},
    lineHeight = ${lineHeight},
    letterSpacing = ${letterSpacing},
    fontWeight = ${fontWeight},
    fontStyle = ${fontStyle},
)`;
};

const getTypoStyles = (tokenItems: TransformedToken[], baseFontFamily: string, additionalFontFamily: string) =>
    tokenItems.map((item) => getTokenValue(item, baseFontFamily, additionalFontFamily)).join(`\n`);

const getTypoFunc = (tokenItems: TransformedToken[]) =>
    tokenItems.map((token) => `    ${token.name} = this.${token.name}.withoutFontScale()`).join(`,\n`);

const getTypoObject = (tokenItems: TransformedToken[]) =>
    tokenItems.map((token) => `    ${token.name} = ${token.name}`).join(`,\n`);

export const typoKotlinCustomFormatter = ({ dictionary }: { dictionary: Dictionary }) => {
    const [baseFontFamily, additionalFontFamily] = getFontFamilies(dictionary.allTokens);

    const dataClass = getDataClass(dictionary.allTokens);
    const typoStyles = getTypoStyles(dictionary.allTokens, baseFontFamily, additionalFontFamily);
    const typoFunc = getTypoFunc(dictionary.allTokens);
    const typoObject = getTypoObject(dictionary.allTokens);

    return getKotlinTemplate(dataClass, typoStyles, typoFunc, typoObject, baseFontFamily, additionalFontFamily);
};
