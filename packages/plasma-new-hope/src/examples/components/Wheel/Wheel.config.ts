import { css } from 'styled-components';

import { wheelTokens as tokens } from '../../../components/Wheel';

const commonView = css`
    ${tokens.animationDuration}: 200ms;
    ${tokens.animationEasing}: cubic-bezier(0.2, 0, 0, 1);
    ${tokens.color}: var(--text-primary);
    ${tokens.controlColor}: var(--text-secondary);
    ${tokens.dividerColor}: var(--surface-transparent-tertiary);
    ${tokens.focusColor}: var(--text-accent);
`;

export const config = {
    defaults: {
        size: 'displayL',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${commonView}
                ${tokens.textAfterColor}: var(--text-secondary);
                ${tokens.selectionBackgroundColor}: transparent;
                ${tokens.selectionBorderRadius}: 0;
                ${tokens.secondaryOpacity}: 0.4;
                ${tokens.tertiaryOpacity}: 0.16;
            `,
            highlighted: css`
                ${commonView}
                ${tokens.textAfterColor}: var(--text-primary);
                ${tokens.selectionBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.selectionBorderRadius}: 1.25rem;
                ${tokens.secondaryOpacity}: 0.5;
                ${tokens.tertiaryOpacity}: 0.2;
            `,
        },
        size: {
            displayL: css`
                ${tokens.columnGap}: 3.75rem;
                ${tokens.dotColumnGap}: 1.375rem;
                ${tokens.dividerColumnGap}: 1.84375rem;
                ${tokens.itemGap}: 2.5rem;
                ${tokens.descriptionGap}: 1rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 1.25rem;
                ${tokens.dotSize}: 1rem;
                ${tokens.dotGap}: 1.25rem;
                ${tokens.dotOffset}: 2.25rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-l-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            displayM: css`
                ${tokens.columnGap}: 3rem;
                ${tokens.dotColumnGap}: 1.125rem;
                ${tokens.dividerColumnGap}: 1.46875rem;
                ${tokens.itemGap}: 2.25rem;
                ${tokens.descriptionGap}: 0.875rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 1rem;
                ${tokens.dotSize}: 0.75rem;
                ${tokens.dotGap}: 1rem;
                ${tokens.dotOffset}: 1.125rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-m-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            displayS: css`
                ${tokens.columnGap}: 2.25rem;
                ${tokens.dotColumnGap}: 0.875rem;
                ${tokens.dividerColumnGap}: 1.09375rem;
                ${tokens.itemGap}: 1.5rem;
                ${tokens.descriptionGap}: 0.75rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 0.75rem;
                ${tokens.dotSize}: 0.5rem;
                ${tokens.dotGap}: 0.75rem;
                ${tokens.dotOffset}: 1rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-s-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            h1: css`
                ${tokens.columnGap}: 2.5rem;
                ${tokens.dotColumnGap}: 1.0625rem;
                ${tokens.dividerColumnGap}: 1.21875rem;
                ${tokens.itemGap}: 1.25rem;
                ${tokens.descriptionGap}: 0.5rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 0.5rem;
                ${tokens.dotSize}: 0.375rem;
                ${tokens.dotGap}: 0.625rem;
                ${tokens.dotOffset}: 1.3125rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-h1-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h1-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h1-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h1-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h1-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h1-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            h2: css`
                ${tokens.columnGap}: 2rem;
                ${tokens.dotColumnGap}: 0.875rem;
                ${tokens.dividerColumnGap}: 0.96875rem;
                ${tokens.itemGap}: 1rem;
                ${tokens.descriptionGap}: 0.5rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 0.375rem;
                ${tokens.dotSize}: 0.25rem;
                ${tokens.dotGap}: 0.5rem;
                ${tokens.dotOffset}: 1.625rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-h2-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h2-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h2-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h2-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h2-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            h3: css`
                ${tokens.columnGap}: 1.75rem;
                ${tokens.dotColumnGap}: 0.75rem;
                ${tokens.dividerColumnGap}: 0.84375rem;
                ${tokens.itemGap}: 0.75rem;
                ${tokens.descriptionGap}: 0.375rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.375rem;
                ${tokens.dotSize}: 0.25rem;
                ${tokens.dotGap}: 0.5rem;
                ${tokens.dotOffset}: 1.5rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h3-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            h4: css`
                ${tokens.columnGap}: 1.5rem;
                ${tokens.dotColumnGap}: 0.6875rem;
                ${tokens.dividerColumnGap}: 0.71875rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.descriptionGap}: 0.375rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.25rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.25rem;
                ${tokens.dotOffset}: 1.5625rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h4-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h4-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            h5: css`
                ${tokens.columnGap}: 1.25rem;
                ${tokens.dotColumnGap}: 0.5625rem;
                ${tokens.dividerColumnGap}: 0.59375rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.descriptionGap}: 0.25rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.25rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.25rem;
                ${tokens.dotOffset}: 1.375rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            l: css`
                ${tokens.columnGap}: 1.25rem;
                ${tokens.dotColumnGap}: 0.5625rem;
                ${tokens.dividerColumnGap}: 0.59375rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.descriptionGap}: 0.125rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.125rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.375rem;
                ${tokens.dotOffset}: 1.375rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            m: css`
                ${tokens.columnGap}: 1.25rem;
                ${tokens.dotColumnGap}: 0.5625rem;
                ${tokens.dividerColumnGap}: 0.59375rem;
                ${tokens.itemGap}: 0.5rem;
                ${tokens.descriptionGap}: 0.25rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.125rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.375rem;
                ${tokens.dotOffset}: 1.3125rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            s: css`
                ${tokens.columnGap}: 1.25rem;
                ${tokens.dotColumnGap}: 0.5625rem;
                ${tokens.dividerColumnGap}: 0.59375rem;
                ${tokens.itemGap}: 0.5rem;
                ${tokens.descriptionGap}: 0.25rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1rem;
                ${tokens.controlGap}: 0.125rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.375rem;
                ${tokens.dotOffset}: 1.4375rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
