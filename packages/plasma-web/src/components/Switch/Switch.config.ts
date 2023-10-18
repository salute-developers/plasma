import { css, switchTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body1-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body1-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body1-font-weight);
                ${switchTokens.fontWeight}: var(--plasma-typo-body1-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body1-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body1-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body1-letter-spacing);
                ${switchTokens.switchTriggerWidth}: 2.75rem;
                ${switchTokens.switchTriggerHeight}: 1.75rem;
                ${switchTokens.switchEllipseSize}: 1.5rem;
                ${switchTokens.switchEllipseMargin}: 0.125rem;
                ${switchTokens.switchEllipseBoxShadowSize}: 0.25rem;
                ${switchTokens.switchTriggerBorderRadius}: 1rem;
            `,
        },
        view: {
            default: css`
              ${switchTokens.switchTriggerBackground}: var(--plasma-colors-tertiary);
              ${switchTokens.switchTriggerBackgroundHover}: var(--plasma-colors-tertiary);
              ${switchTokens.switchTriggerBackgroundChecked}: var(--plasma-colors-accent);
              ${switchTokens.switchTriggerBackgroundCheckedHover}: var(--plasma-colors-accent);
              ${switchTokens.switchEllipseBackground}: var(--plasma-colors-white);
              ${switchTokens.switchEllipseBoxShadow}: 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-off);
              ${switchTokens.switchEllipseBoxShadowChecked}: 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-on);
              ${switchTokens.flexDirection}: row-reverse;
              ${switchTokens.justifyContent}: space-between;
              ${switchTokens.fontColor}: var(--text-primary);
            `,
        },
        disabled: {
            true: css`
                ${switchTokens.switchEllipseBoxShadowDisabled}: 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-off-disabled);
                ${switchTokens.switchTriggerBackgroundDisabled}: var(--plasma-colors-tertiary);
                ${switchTokens.switchTriggerBackgroundCheckedDisabled}: var(--plasma-colors-accent);
                ${switchTokens.switchTriggerBackgroundCheckedDisabledHover}: var(--plasma-colors-accent);
                ${switchTokens.switchFontColorDisabled}: var(--text-secondary);
                ${switchTokens.switchOpacityDisabled}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${switchTokens.switchFocusColor}: var(--plasma-colors-accent);
            `,
        },
    },
};
