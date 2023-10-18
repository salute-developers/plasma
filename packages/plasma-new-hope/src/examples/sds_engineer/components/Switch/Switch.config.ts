import { css } from '@linaria/core';

import { switchTokens } from '../../../../components/Switch';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        size: {
            xs: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-caption-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-s-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-s-bold-font-size);
                ${switchTokens.letterSpacing}: 0;
                ${switchTokens.switchTriggerWidth}: 1.75rem;
                ${switchTokens.switchTriggerHeight}: 1rem;
                ${switchTokens.switchEllipseSize}: 0.85rem;
                ${switchTokens.switchEllipseMargin}: 0.05rem;
                ${switchTokens.switchEllipseBoxShadowSize}: 0.25rem;
                ${switchTokens.switchTriggerBorderRadius}: 0.975rem;
            `,
            s: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-caption-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${switchTokens.letterSpacing}: 0;
                ${switchTokens.switchTriggerWidth}: 1.75rem;
                ${switchTokens.switchTriggerHeight}: 1rem;
                ${switchTokens.switchEllipseSize}: 0.875rem;
                ${switchTokens.switchEllipseMargin}: 0.05rem;
                ${switchTokens.switchEllipseBoxShadowSize}: 0.25rem;
                ${switchTokens.switchTriggerBorderRadius}: 0.975rem;
            `,
            m: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-caption-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${switchTokens.letterSpacing}: 0;
                ${switchTokens.switchTriggerWidth}: 1.75rem;
                ${switchTokens.switchTriggerHeight}: 1rem;
                ${switchTokens.switchEllipseSize}: 0.875rem;
                ${switchTokens.switchEllipseMargin}: 0.05rem;
                ${switchTokens.switchEllipseBoxShadowSize}: 0.25rem;
                ${switchTokens.switchTriggerBorderRadius}: 0.975rem;
            `,
        },
        view: {
            default: css`
                ${switchTokens.switchTriggerBackground}: var(--switch-bg);
                ${switchTokens.switchTriggerBackgroundHover}: var(--switch-bg-hover);
                ${switchTokens.switchTriggerBackgroundChecked}: var(--switch-active-bg);
                ${switchTokens.switchTriggerBackgroundCheckedHover}: var(--switch-active-bg-hover);
                ${switchTokens.switchEllipseBackground}: var(--switch-ellipse-bg);
                ${switchTokens.switchEllipseBoxShadow}: 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-off);
                ${switchTokens.switchEllipseBoxShadowChecked}: 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-on);
                ${switchTokens.flexDirection}: row;
                ${switchTokens.justifyContent}: flex-start;
                ${switchTokens.fontColor}: var(--text-primary);
            `,
        },
        disabled: {
            true: css`
                ${switchTokens.switchEllipseBoxShadowDisabled}: 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-off-disabled);
                ${switchTokens.switchTriggerBackgroundDisabled}: var(--surface-solid-secondary);
                ${switchTokens.switchTriggerBackgroundCheckedDisabled}: var(--surface-solid-secondary);
                ${switchTokens.switchTriggerBackgroundCheckedDisabledHover}: var(--surface-solid-secondary);
                ${switchTokens.switchFontColorDisabled}: var(--text-secondary);
                ${switchTokens.switchOpacityDisabled}: 1;
            `,
        },
        focused: {
            true: css`
                ${switchTokens.switchFocusColor}: var(--switch-focus-color);
            `,
        },
    },
};
