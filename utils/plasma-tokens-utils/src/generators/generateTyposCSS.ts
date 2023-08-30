import { CreateVariablesByArcheTypeProps, TypoCommonProps } from '@salutejs/plasma-typo';

import { getMediaQuery } from '../utils';
import type { CSSObject, GeneratedFiles } from '../types';

import { generateCSSTypoRootFile } from './generateFile';

const convertObjectToCssVarStrings = (typo: CSSObject, indent?: string) =>
    Object.entries(typo)
        .map(([typoKey, typoProps]) =>
            Object.entries(typoProps || {})
                .map(([typoProp, propValue]) => `--typo-${typoKey}-${typoProp}: ${propValue};`)
                .join(`\n${indent}`),
        )
        .join(`\n${indent}`);

const getCommonRootProps = (
    displayFontFamily?: string,
    textFontFamily?: string,
    getTypoCommonProps?: TypoCommonProps,
) => {
    const indent = '  ';
    const displayFontFamilyVar = 'var(--typo-display-font-family)';
    const textFontFamilyVar = 'var(--typo-text-font-family)';

    const typoCommonProps = getTypoCommonProps?.(displayFontFamilyVar, textFontFamilyVar) || {};
    const result = convertObjectToCssVarStrings(typoCommonProps, indent);

    return `:root {
  font-size: 16px;
  --typo-overflow-wrap: break-word;
  --typo-hyphens: auto;
  --typo-display-font-family: '${displayFontFamily}', sans-serif;
  --typo-text-font-family: '${textFontFamily}', sans-serif;
  ${result}
}`;
};

const getBreakpointTypo = (typeProps?: CSSObject, from?: number, to?: number, selector = ':root') => {
    if (!typeProps) {
        return;
    }

    const indent = '    ';
    const mediaQuery = getMediaQuery(from, to);
    const result = convertObjectToCssVarStrings(typeProps, indent);

    return `${mediaQuery} {
  ${selector} {
    ${result}
  }
}`;
};

const getTypoCSS = (typoObject: CreateVariablesByArcheTypeProps) => {
    const { displayFontFamily, textFontFamily, getTypoCommonProps, typoS, typoM, typoL } = typoObject;

    return [
        getCommonRootProps(displayFontFamily, textFontFamily, getTypoCommonProps),
        getBreakpointTypo(typoS, 559),
        getBreakpointTypo(typoM, 560, 959),
        getBreakpointTypo(typoL, undefined, 960),
    ];
};

export const generateTyposCSS = (typoObjects: Record<string, CreateVariablesByArcheTypeProps>) => {
    const files: GeneratedFiles = [];

    for (const [typoName, typeObject] of Object.entries(typoObjects)) {
        const typos = getTypoCSS(typeObject);
        files.push(generateCSSTypoRootFile(typoName, typos));
    }

    return files;
};
