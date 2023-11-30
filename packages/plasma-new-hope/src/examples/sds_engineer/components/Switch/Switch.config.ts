import { css } from '@linaria/core';

import { switchTokens } from '../../../../components/Switch';
import { labelPosition_After } from '../../../../components/Switch/_label-position/after';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        focused: 'true',
        labelPosition: 'after',
    },
    variations: {
        size: {
            xs: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-s-bold-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-s-bold-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${switchTokens.trackWidth}: 1.75rem;
                ${switchTokens.trackHeight}: 1rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 0.85rem;
                ${switchTokens.thumbOffset}: 0.05rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbPressScale}: 1.25;
                ${switchTokens.labelOffset}: 0.5rem;
            `,
            s: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-m-bold-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-m-bold-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${switchTokens.trackWidth}: 1.75rem;
                ${switchTokens.trackHeight}: 1rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 0.875rem;
                ${switchTokens.thumbOffset}: 0.05rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbPressScale}: 1.25;
                ${switchTokens.labelOffset}: 0.5rem;
            `,
            m: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-m-bold-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-m-bold-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${switchTokens.trackWidth}: 1.75rem;
                ${switchTokens.trackHeight}: 1rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 0.875rem;
                ${switchTokens.thumbOffset}: 0.05rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbPressScale}: 1.25;
                ${switchTokens.labelOffset}: 0.5rem;
            `,
        },
        view: {
            default: css`
                ${switchTokens.trackBackgroundColorOn}: rgb(71, 212, 95);
                ${switchTokens.trackBackgroundColorOnHover}: rgb(22, 200, 62);
                ${switchTokens.trackBackgroundColorOff}: rgba(30, 131, 198, 0.11);
                ${switchTokens.trackBackgroundColorOffHover}: rgba(30, 131, 198, 0.25);
                ${switchTokens.thumbBackgroundColor}: var(--on-dark-surface-solid-default);
                ${switchTokens.thumbBoxShadowOn}: 0 0 0.25rem 0 rgba(1, 111, 0, 0.71);
                ${switchTokens.thumbBoxShadow}: 0 0 0.25rem 0 rgba(70, 106, 251, 0.71);
            `,
        },
        labelPosition: {
            after: labelPosition_After,
        },
        disabled: {
            true: css`
                ${switchTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${switchTokens.trackFocusColor}: rgb(22, 200, 62);
            `,
        },
    },
};
