import { css } from '@linaria/core';

import { switchTokens } from '../../../../components/Switch';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        toggleSize: 'l',
        labelPosition: 'before',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-s-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${switchTokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${switchTokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${switchTokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${switchTokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${switchTokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${switchTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${switchTokens.verticalGap}: 0.25rem;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
            m: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${switchTokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${switchTokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${switchTokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${switchTokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
                ${switchTokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${switchTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${switchTokens.verticalGap}: 0.25rem;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
            l: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-l-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${switchTokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${switchTokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                ${switchTokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${switchTokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
                ${switchTokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                ${switchTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${switchTokens.verticalGap}: 0.25rem;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
        },
        toggleSize: {
            l: css`
                ${switchTokens.trackWidth}: 2.75rem;
                ${switchTokens.trackHeight}: 1.75rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 1.375rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbOffsetOn}: 0.125rem;
                ${switchTokens.thumbOffsetOff}: 0.125rem;
                ${switchTokens.thumbPressScale}: 1.25;
            `,
            s: css`
                ${switchTokens.trackWidth}: 2rem;
                ${switchTokens.trackHeight}: 1.25rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 0.875rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbOffsetOn}: 0.125rem;
                ${switchTokens.thumbOffsetOff}: 0.125rem;
                ${switchTokens.thumbPressScale}: 1.25;
            `,
        },
        view: {
            default: css`
                ${switchTokens.labelColor}: var(--text-primary);
                ${switchTokens.descriptionColor}: var(--text-secondary);
                ${switchTokens.descriptionMaxLines}: initial;
                ${switchTokens.trackBorderWidthOn}: 0.0625rem;
                ${switchTokens.trackBorderWidthOff}: 0.0625rem;
                ${switchTokens.trackBorderColorOn}: var(--outline-accent);
                ${switchTokens.trackBorderColorOnHover}: var(--outline-accent-hover);
                ${switchTokens.trackBorderColorOff}: var(--outline-secondary);
                ${switchTokens.trackBorderColorOffHover}: var(--outline-secondary-hover);
                ${switchTokens.thumbBackgroundColorOn}: var(--text-accent);
                ${switchTokens.thumbBackgroundColorOff}: var(--text-tertiary);
                ${switchTokens.thumbBoxShadow}: 0 1px 1px rgba(0, 0, 0, 0.11);
            `,
        },
        disabled: {
            true: css`
                ${switchTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${switchTokens.trackFocusColor}: var(--surface-accent);
            `,
        },
    },
};
