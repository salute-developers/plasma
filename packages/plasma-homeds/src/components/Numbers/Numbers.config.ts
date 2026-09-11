import { css } from '@salutejs/plasma-new-hope/styled-components';
import { bodyXS, inverseTextParagraph } from '@salutejs/plasma-themes/tokens/plasma_homeds';

import { numbersTokens } from './component';

export const config = {
    defaults: {
        size: 'xs',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${numbersTokens.color}: ${inverseTextParagraph};
            `,
        },
        size: {
            xs: css`
                ${numbersTokens.fontFamily}: 'SBLCD', monospace;
                ${numbersTokens.unitFontFamily}: ${bodyXS.fontFamily};
                ${numbersTokens.fontSize}: 0.875rem;
                ${numbersTokens.fractionFontSize}: 0.5625rem;
                ${numbersTokens.separatorFontSize}: 0.625rem;
                ${numbersTokens.minusGap}: 0.125rem;
                ${numbersTokens.valueGap}: 0.0625rem;
                ${numbersTokens.fractionGap}: 0.0625rem;
                ${numbersTokens.unitGap}: 0.0625rem;
                ${numbersTokens.degreeWidth}: 0.2164rem;
                ${numbersTokens.percentWidth}: 0.625rem;
            `,
            s: css`
                ${numbersTokens.fontFamily}: 'SBLCD', monospace;
                ${numbersTokens.unitFontFamily}: ${bodyXS.fontFamily};
                ${numbersTokens.fontSize}: 1.75rem;
                ${numbersTokens.fractionFontSize}: 1.125rem;
                ${numbersTokens.separatorFontSize}: 1.25rem;
                ${numbersTokens.minusGap}: 0.25rem;
                ${numbersTokens.valueGap}: 0.125rem;
                ${numbersTokens.fractionGap}: 0.0625rem;
                ${numbersTokens.unitGap}: 0.125rem;
                ${numbersTokens.degreeWidth}: 0.4329rem;
                ${numbersTokens.percentWidth}: 1.188rem;
            `,
            m: css`
                ${numbersTokens.fontFamily}: 'SBLCD', monospace;
                ${numbersTokens.unitFontFamily}: ${bodyXS.fontFamily};
                ${numbersTokens.fontSize}: 2.5rem;
                ${numbersTokens.fractionFontSize}: 1.625rem;
                ${numbersTokens.separatorFontSize}: 1.8125rem;
                ${numbersTokens.minusGap}: 0.25rem;
                ${numbersTokens.valueGap}: 0.125rem;
                ${numbersTokens.fractionGap}: 0.0625rem;
                ${numbersTokens.unitGap}: 0.25rem;
                ${numbersTokens.degreeWidth}: 0.6184rem;
                ${numbersTokens.percentWidth}: 1.688rem;
            `,
        },
    },
};
