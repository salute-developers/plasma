import { css, codeFieldTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        shape: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.caretColor}: var(--surface-accent);

                ${tokens.captionColor}: var(--text-secondary);
                ${tokens.captionColorError}: var(--text-negative);

                ${tokens.codeColor}: var(--text-primary);
                ${tokens.codeColorError}: var(--text-negative);

                ${tokens.backgroundColor}: var(--surface-transparent-primary);
                ${tokens.backgroundColorHover}: var(--surface-transparent-primary-hover);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-secondary);
                ${tokens.backgroundErrorColor}: var(--surface-transparent-negative);
            `,
        },
        size: {
            l: css`
                ${tokens.captionGap}: 0.875rem;
                ${tokens.codeItemsGap}: 0.125rem;

                ${tokens.separatorWidth}: 0.25rem;

                ${tokens.codeItemWidth}: 2.75rem;
                ${tokens.codeItemHeight}: 3.5rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.captionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.borderRadius}: 0.875rem;
                ${tokens.borderRadiusSegmented}: 0.375rem;
                ${tokens.segmentedSideBorderRadius}: 0.875rem;
            `,
            m: css`
                ${tokens.captionGap}: 0.75rem;
                ${tokens.codeItemsGap}: 0.125rem;

                ${tokens.separatorWidth}: 0.25rem;

                ${tokens.codeItemWidth}: 2.375rem;
                ${tokens.codeItemHeight}: 3rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.captionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderRadiusSegmented}: 0.25rem;
                ${tokens.segmentedSideBorderRadius}: 0.75rem;
            `,
        },
        shape: {
            default: css``,
            segmented: css``,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
