import { CreateVariablesByArcheTypeProps, TypoCommonProps } from '@salutejs/plasma-typo';

import { getMediaQuery } from '../utils';
import type { CSSObject, GeneratedFiles } from '../types';

import { generateCSSTypoRootFile } from './generateFile';

const convertObjectToCssVarStrings = (typo: CSSObject, indent?: string, withDesignPrefix?: boolean) => {
    const prefix = withDesignPrefix ? 'plasma-typo' : 'typo';

    return Object.entries(typo)
        .map(([typoKey, typoProps]) =>
            Object.entries(typoProps || {})
                .map(([typoProp, propValue]) => `--${prefix}-${typoKey}-${typoProp}: ${propValue};`)
                .join(`\n${indent}`),
        )
        .join(`\n${indent}`);
};

const getCommonRootProps = (
    withDesignPrefix?: boolean,
    displayFontFamily?: string,
    textFontFamily?: string,
    getTypoCommonProps?: TypoCommonProps,
) => {
    const prefix = withDesignPrefix ? 'plasma-typo' : 'typo';
    const indent = '  ';
    const displayFontFamilyVar = `var(--${prefix}-display-font-family)`;
    const textFontFamilyVar = `var(--${prefix}-text-font-family)`;

    const typoCommonProps = getTypoCommonProps?.(displayFontFamilyVar, textFontFamilyVar) || {};
    const result = convertObjectToCssVarStrings(typoCommonProps, indent, withDesignPrefix);

    return `:root {
  font-size: 16px;
  --${prefix}-overflow-wrap: break-word;
  --${prefix}-hyphens: auto;
  --${prefix}-display-font-family: '${displayFontFamily}', sans-serif;
  --${prefix}-text-font-family: '${textFontFamily}', sans-serif;
  ${result}
}`;
};

const getBreakpointTypo = (
    withDesignPrefix?: boolean,
    typeProps?: CSSObject,
    from?: number,
    to?: number,
    selector = ':root',
) => {
    if (!typeProps) {
        return;
    }

    const indent = '    ';
    const mediaQuery = getMediaQuery(from, to);
    const result = convertObjectToCssVarStrings(typeProps, indent, withDesignPrefix);

    return `${mediaQuery} {
  ${selector} {
    ${result}
  }
}`;
};

export const getTypoCSS = (typoObject: CreateVariablesByArcheTypeProps, withDesignPrefix: boolean) => {
    const { displayFontFamily, textFontFamily, getTypoCommonProps, typoS, typoM, typoL } = typoObject;

    return [
        getCommonRootProps(withDesignPrefix, displayFontFamily, textFontFamily, getTypoCommonProps),
        getBreakpointTypo(withDesignPrefix, typoS, 559),
        getBreakpointTypo(withDesignPrefix, typoM, 560, 959),
        getBreakpointTypo(withDesignPrefix, typoL, undefined, 960),
    ];
};

export const generateTyposCSS = (
    typoObjects: Record<string, CreateVariablesByArcheTypeProps>,
    withDesignPrefix = false,
) => {
    const files: GeneratedFiles = [];

    for (const [typoName, typeObject] of Object.entries(typoObjects)) {
        const typos = getTypoCSS(typeObject, withDesignPrefix);
        files.push(generateCSSTypoRootFile(typoName, typos));
    }

    return files;
};
