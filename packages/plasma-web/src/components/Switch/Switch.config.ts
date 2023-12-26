import {
    Switch_LabelPosition_After,
    Switch_LabelPosition_Before,
    css,
    switchTokens,
} from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPosition: 'before',
        focused: 'true',
    },
    variations: {
        size: {
            m: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body1-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body1-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body1-font-weight);
                ${switchTokens.fontWeight}: var(--plasma-typo-body1-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body1-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body1-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body1-letter-spacing);
                ${switchTokens.trackWidth}: 2.75rem;
                ${switchTokens.trackHeight}: 1.75rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 1.5rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbOffset}: 0.125rem;
                ${switchTokens.thumbPressScale}: 1.25;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
        },
        view: {
            default: css`
                ${switchTokens.trackBackgroundColorOn}: var(--plasma-colors-accent);
                ${switchTokens.trackBackgroundColorOff}: var(--plasma-colors-tertiary);
                ${switchTokens.thumbBackgroundColor}: var(--plasma-colors-white);
                ${switchTokens.thumbBoxShadow}: 0 1px 1px rgba(0, 0, 0, 0.11);
            `,
        },
        // TODO: could we not css into css ???
        labelPosition: {
            before: css`
                ${Switch_LabelPosition_Before}
            `,
            after: css`
                ${Switch_LabelPosition_After}
            `,
        },
        disabled: {
            true: css`
                ${switchTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${switchTokens.trackFocusColor}: var(--plasma-colors-button-focused);
            `,
        },
    },
};
