import { css, CSSObject, InterpolationFunction } from 'styled-components';

import { TypoPropName, TypoProps } from './types';

export const prepareStandardBreakpointTypo = (typo: CSSObject) =>
    Object.entries(typo).reduce<CSSObject>((acc, [typoKey, typoProps]) => {
        Object.entries(typoProps as CSSObject).forEach(([typoProp, propValue]) => {
            acc[`--plasma-typo-${typoKey}-${typoProp}`] = propValue;
        });

        return acc;
    }, {});

const compatProps = ['font-family', 'font-size', 'font-style', 'font-weight', 'letter-spacing', 'line-height'];

type CompatProps = 'font-family' | 'font-size' | 'font-style' | 'font-weight' | 'letter-spacing' | 'line-height';
type TypoMap = Record<
    string,
    {
        name: string;
    } & Partial<Record<CompatProps, string>>
>;

export const prepareCompatibleTypo = (typoMap: TypoMap) =>
    Object.entries(typoMap).reduce<CSSObject>((acc, [oldKey, { name, ...rest }]) => {
        const oldPrefix = `--plasma-typo-${oldKey}`;
        const newPrefix = `--plasma-typo-${name}`;

        compatProps.forEach((compatProp) => {
            acc[`${oldPrefix}-${compatProp}`] = `var(${newPrefix}-${compatProp})`;
        });

        Object.entries(rest).forEach(([customCompatProp, value]) => {
            acc[`${oldPrefix}-${customCompatProp}`] = value;
        });

        return acc;
    }, {});

export const mergeTypoProps = (...obj: TypoProps[]): TypoProps =>
    [...obj].reduce(
        (resultObj, currentObj) =>
            Object.entries(currentObj).reduce(
                (acc, [key, value]) => ({
                    ...acc,
                    [key]: {
                        ...acc[key as TypoPropName],
                        ...value,
                    },
                }),
                resultObj,
            ),
        {},
    );

type FontFamily = 'SB Sans Display' | 'SB Serif Display' | 'SB Sans Cond Mono' | 'SB Sans Text' | 'SB Sans Text Mono';

interface CreateVariablesByArcheTypeProps {
    displayFontFamily: FontFamily;
    textFontFamily: FontFamily;
    typoS?: TypoProps;
    typoM?: TypoProps;
    typoL?: TypoProps;
}

export const createVariablesByArcheType = ({
    displayFontFamily,
    textFontFamily,
    typoS,
    typoM,
    typoL,
}: CreateVariablesByArcheTypeProps): InterpolationFunction<{
    deviceScale?: number;
}> => {
    return ({ deviceScale = 1 }) => css`
            :root {
                --plasma-typo-display-font-family: '${displayFontFamily}', sans-serif;
                --plasma-typo-text-font-family: '${textFontFamily}', sans-serif;
                --plasma-typo-dspl-l-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-l-font-style: normal;
                --plasma-typo-dspl-l-letter-spacing: normal;
                --plasma-typo-dspl-m-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-m-font-style: normal;
                --plasma-typo-dspl-m-letter-spacing: normal;
                --plasma-typo-dspl-s-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-s-font-style: normal;
                --plasma-typo-dspl-s-letter-spacing: normal;
                --plasma-typo-h1-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h1-font-style: normal;
                --plasma-typo-h1-letter-spacing: normal;
                --plasma-typo-h2-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h2-font-style: normal;
                --plasma-typo-h2-letter-spacing: normal;
                --plasma-typo-h3-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h3-font-style: normal;
                --plasma-typo-h3-letter-spacing: normal;
                --plasma-typo-h4-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h4-font-style: normal;
                --plasma-typo-h4-letter-spacing: normal;
                --plasma-typo-h5-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h5-font-style: normal;
                --plasma-typo-h5-letter-spacing: normal;
                --plasma-typo-body-l-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-l-font-style: normal;
                --plasma-typo-body-l-letter-spacing: normal;
                --plasma-typo-body-m-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-m-font-style: normal;
                --plasma-typo-body-m-letter-spacing: normal;
                --plasma-typo-body-s-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-s-font-style: normal;
                --plasma-typo-body-s-letter-spacing: normal;
                --plasma-typo-body-xs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-xs-font-style: normal;
                --plasma-typo-body-xs-letter-spacing: normal;
                --plasma-typo-body-xxs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-xxs-font-style: normal;
                --plasma-typo-body-xxs-letter-spacing: normal;
                --plasma-typo-text-l-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-l-font-style: normal;
                --plasma-typo-text-l-letter-spacing: -0.019em;
                --plasma-typo-text-m-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-m-font-style: normal;
                --plasma-typo-text-m-letter-spacing: -0.019em;
                --plasma-typo-text-s-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-s-font-style: normal;
                --plasma-typo-text-s-letter-spacing: -0.019em;
                --plasma-typo-text-xs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-xs-font-style: normal;
                --plasma-typo-text-xs-letter-spacing: -0.019em;

                font-size: ${16 * deviceScale}px;

                ${
                    typoS &&
                    css`
                        @media (max-width: ${559 * deviceScale}px) {
                            ${prepareStandardBreakpointTypo(typoS)}
                        }
                    `
                }

                ${
                    typoM &&
                    css`
                        @media (min-width: ${560 * deviceScale}px) and (max-width: ${959 * deviceScale}px) {
                            ${prepareStandardBreakpointTypo(typoM)}
                        }
                    `
                }

                ${
                    typoL &&
                    css`
                        @media (min-width: ${960 * deviceScale}px) {
                            ${prepareStandardBreakpointTypo(typoL)}
                        }
                    `
                }
            }
        `;
};
