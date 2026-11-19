import { css } from 'styled-components';

import { ratingInputTokens as tokens } from '../../../components/RatingInput';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        iconSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.iconColor}: var(--text-primary);
                ${tokens.outlineIconColor}: var(--text-tertiary);
                ${tokens.limitLabelColor}: var(--text-tertiary);
                ${tokens.focusColor}: var(--surface-accent);
            `,
            accent: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.iconColor}: var(--data-yellow, #f3a912);
                ${tokens.outlineIconColor}: var(--data-yellow-transparent, #f3a9128f);
                ${tokens.limitLabelColor}: var(--text-tertiary);
                ${tokens.focusColor}: var(--surface-accent);
            `,
        },
        size: {
            l: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            m: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            s: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            h1: css`
                ${tokens.fontFamily}: var(--plasma-typo-h1-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h1-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h1-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h1-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h1-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h1-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            h2: css`
                ${tokens.fontFamily}: var(--plasma-typo-h2-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h2-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h2-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h2-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h2-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            h3: css`
                ${tokens.fontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h3-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            h4: css`
                ${tokens.fontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h4-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h4-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            h5: css`
                ${tokens.fontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            dsplL: css`
                ${tokens.fontFamily}: var(--plasma-typo-dspl-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-l-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            dsplM: css`
                ${tokens.fontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-m-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            dsplS: css`
                ${tokens.fontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-s-line-height);

                ${tokens.limitLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.limitLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.limitLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.limitLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.limitLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.limitLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
        },
        iconSize: {
            l: css`
                ${tokens.iconSize}: 3rem;
                ${tokens.focusBorderRadius}: 0.75rem;
                ${tokens.valueGap}: 1rem;
                ${tokens.valueGapWithLimitLabels}: 0.75rem;
                ${tokens.limitLabelsGap}: 0.25rem;
            `,
            m: css`
                ${tokens.iconSize}: 2.25rem;
                ${tokens.focusBorderRadius}: 0.5rem;
                ${tokens.valueGap}: 0.75rem;
                ${tokens.valueGapWithLimitLabels}: 0.625rem;
                ${tokens.limitLabelsGap}: 0.25rem;
            `,
            s: css`
                ${tokens.iconSize}: 1.5rem;
                ${tokens.focusBorderRadius}: 0.375rem;
                ${tokens.valueGap}: 0.5rem;
                ${tokens.valueGapWithLimitLabels}: 0.5rem;
                ${tokens.limitLabelsGap}: 0.125rem;
            `,
        },
    },
    intersections: [
        {
            size: 'h1',
            iconSize: 's',
            style: css`
                ${tokens.valueGap}: 1.25rem;
                ${tokens.valueGapWithLimitLabels}: 1.25rem;
            `,
        },
        {
            size: 'h1',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 1.375rem;
                ${tokens.valueGapWithLimitLabels}: 1.375rem;
            `,
        },
        {
            size: 'h1',
            iconSize: 'l',
            style: css`
                ${tokens.valueGap}: 1.5rem;
                ${tokens.valueGapWithLimitLabels}: 1.5rem;
            `,
        },
        {
            size: 'h2',
            iconSize: 's',
            style: css`
                ${tokens.valueGap}: 1rem;
                ${tokens.valueGapWithLimitLabels}: 1rem;
            `,
        },
        {
            size: 'h2',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 1.125rem;
                ${tokens.valueGapWithLimitLabels}: 1.125rem;
            `,
        },
        {
            size: 'h2',
            iconSize: 'l',
            style: css`
                ${tokens.valueGap}: 1.25rem;
                ${tokens.valueGapWithLimitLabels}: 1.25rem;
            `,
        },
        {
            size: 'h3',
            iconSize: 's',
            style: css`
                ${tokens.valueGap}: 0.75rem;
                ${tokens.valueGapWithLimitLabels}: 0.75rem;
            `,
        },
        {
            size: 'h3',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 0.875rem;
                ${tokens.valueGapWithLimitLabels}: 0.875rem;
            `,
        },
        {
            size: 'h3',
            iconSize: 'l',
            style: css`
                ${tokens.valueGap}: 1rem;
                ${tokens.valueGapWithLimitLabels}: 1rem;
            `,
        },
        {
            size: 'h4',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 0.625rem;
                ${tokens.valueGapWithLimitLabels}: 0.625rem;
            `,
        },
        {
            size: 'h4',
            iconSize: 'l',
            style: css`
                ${tokens.valueGap}: 0.75rem;
                ${tokens.valueGapWithLimitLabels}: 0.75rem;
            `,
        },
        {
            size: 'h5',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 0.625rem;
                ${tokens.valueGapWithLimitLabels}: 0.625rem;
            `,
        },
        {
            size: 'h5',
            iconSize: 'l',
            style: css`
                ${tokens.valueGap}: 0.75rem;
                ${tokens.valueGapWithLimitLabels}: 0.75rem;
            `,
        },
        {
            size: 'dsplL',
            iconSize: 's',
            style: css`
                ${tokens.valueGap}: 1.25rem;
                ${tokens.valueGapWithLimitLabels}: 1.25rem;
            `,
        },
        {
            size: 'dsplL',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 1.375rem;
                ${tokens.valueGapWithLimitLabels}: 1.375rem;
            `,
        },
        {
            size: 'dsplL',
            iconSize: 'l',
            style: css`
                ${tokens.valueGap}: 1.5rem;
                ${tokens.valueGapWithLimitLabels}: 1.5rem;
            `,
        },
        {
            size: 'dsplM',
            iconSize: 's',
            style: css`
                ${tokens.valueGap}: 1.25rem;
                ${tokens.valueGapWithLimitLabels}: 1.25rem;
            `,
        },
        {
            size: 'dsplM',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 1.375rem;
                ${tokens.valueGapWithLimitLabels}: 1.375rem;
            `,
        },
        {
            size: 'dsplM',
            iconSize: 'l',
            style: css`
                ${tokens.valueGap}: 1.5rem;
                ${tokens.valueGapWithLimitLabels}: 1.5rem;
            `,
        },
        {
            size: 'dsplS',
            iconSize: 's',
            style: css`
                ${tokens.valueGap}: 1.25rem;
                ${tokens.valueGapWithLimitLabels}: 1.25rem;
            `,
        },
        {
            size: 'dsplS',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 1.375rem;
                ${tokens.valueGapWithLimitLabels}: 1.375rem;
            `,
        },
        {
            size: 'dsplS',
            iconSize: 'l',
            style: css`
                ${tokens.valueGap}: 1.5rem;
                ${tokens.valueGapWithLimitLabels}: 1.5rem;
            `,
        },
    ],
};
