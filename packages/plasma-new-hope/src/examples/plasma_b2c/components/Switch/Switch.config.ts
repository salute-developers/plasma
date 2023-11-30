import { css } from '@linaria/core';

import { switchTokens } from '../../../../components/Switch';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
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
            `,
        },
        view: {
            default: css`
                ${switchTokens.trackBackgroundColorOn}: var(--surface-accent);
                ${switchTokens.trackBackgroundColorOff}: var(--surface-transparent-tertiary-active);
                ${switchTokens.thumbBackgroundColor}: var(--on-dark-surface-solid-default);
                ${switchTokens.thumbBoxShadow}: 0 1px 1px rgba(0, 0, 0, 0.11);
            `,
            // ${switchTokens.flexDirection}: row-reverse;
            // ${switchTokens.justifyContent}: space-between;
            //   ${switchTokens.switchTriggerBackground}: var(--plasma-colors-tertiary);
            //   ${switchTokens.switchTriggerBackgroundHover}: var(--plasma-colors-tertiary);
            //   ${switchTokens.switchTriggerBackgroundChecked}: var(--plasma-colors-accent);
            //   ${switchTokens.switchTriggerBackgroundCheckedHover}: var(--plasma-colors-accent);
            //   ${switchTokens.switchEllipseBackground}: var(--plasma-colors-white);
            //   ${switchTokens.switchEllipseBoxShadow}:
            // 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-off);
            //   ${switchTokens.switchEllipseBoxShadowChecked}:
            // 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-on);
            //   ${switchTokens.fontColor}: var(--text-primary);
        },
        disabled: {
            true: css`
                ${switchTokens.disabledOpacity}: 0.4;
            `,
        },
        //         ${switchTokens.switchEllipseBoxShadowDisabled}:
        // 0 0 var(${switchTokens.switchEllipseBoxShadowSize}) 0 var(--switch-ellipse-shadow-off-disabled);
        //         ${switchTokens.switchTriggerBackgroundDisabled}: var(--plasma-colors-tertiary);
        //         ${switchTokens.switchTriggerBackgroundCheckedDisabled}: var(--plasma-colors-accent);
        //         ${switchTokens.switchTriggerBackgroundCheckedDisabledHover}: var(--plasma-colors-accent);
        //         ${switchTokens.switchFontColorDisabled}: var(--text-secondary);
        //         ${switchTokens.switchOpacityDisabled}: 0.4;
        //     `,
        // },
        focused: {
            true: css`
                ${switchTokens.trackFocusColor}: var(--surface-accent);
            `,
        },
    },
};
