import { css } from 'styled-components';
import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

const { buttonViews: baseViews } = plasmaCore;

export const buttonPrimaryHover = 'var(--plasma-colors-button-primary-hover)';
export const buttonPrimaryActive = 'var(--plasma-colors-button-primary-active)';

export const buttonSecondaryHover = 'var(--plasma-colors-button-secondary-hover)';
export const buttonSecondaryActive = 'var(--plasma-colors-button-secondary-active)';

export const buttonSuccessHover = 'var(--plasma-colors-button-success-hover)';
export const buttonSuccessActive = 'var(--plasma-colors-button-success-active)';

export const buttonWarningHover = 'var(--plasma-colors-button-warning-hover)';
export const buttonWarningActive = 'var(--plasma-colors-button-warning-active)';

export const buttonCriticalHover = 'var(--plasma-colors-button-critical-hover)';
export const buttonCriticalActive = 'var(--plasma-colors-button-critical-active)';

export const buttonCheckedHover = 'var(--plasma-colors-button-checked-hover)';
export const buttonCheckedHoverColor = 'var(--plasma-colors-button-checked-hover-color)';
export const buttonCheckedActive = 'var(--plasma-colors-button-checked-active)';
export const buttonCheckedActiveColor = 'var(--plasma-colors-button-checked-active-color)';

/**
 * Views (colors) for both B2B and B2C
 */
export const buttonViews = {
    primary: css`
        ${baseViews.primary}

        &:hover {
            background-color: ${buttonPrimaryHover};
            color: ${baseViews.primary.color};
        }

        &:active {
            background-color: ${buttonPrimaryActive};
            color: ${baseViews.primary.color};
        }
    `,
    success: css`
        ${baseViews.success}

        &:hover {
            background-color: ${buttonSuccessHover};
            color: ${baseViews.success.color};
        }

        &:active {
            background-color: ${buttonSuccessActive};
            color: ${baseViews.success.color};
        }
    `,
    warning: css`
        ${baseViews.warning}

        &:hover {
            background-color: ${buttonWarningHover};
            color: ${baseViews.warning.color};
        }

        &:active {
            background-color: ${buttonWarningActive};
            color: ${baseViews.warning.color};
        }
    `,
    critical: css`
        ${baseViews.critical}

        &:hover {
            background-color: ${buttonCriticalHover};
            color: ${baseViews.critical.color};
        }

        &:active {
            background-color: ${buttonCriticalActive};
            color: ${baseViews.critical.color};
        }
    `,
    secondary: css`
        ${baseViews.secondary}

        &:hover {
            background-color: ${buttonSecondaryHover};
            color: ${baseViews.secondary.color};
        }

        &:active {
            background-color: ${buttonSecondaryActive};
            color: ${baseViews.secondary.color};
        }
    `,
    checked: css`
        ${baseViews.checked}

        &:hover {
            background-color: ${buttonCheckedHover};
            color: ${buttonCheckedHoverColor};
        }

        &:active {
            background-color: ${buttonCheckedActive};
            color: ${buttonCheckedActiveColor};
        }
    `,
    overlay: baseViews.overlay,
    clear: baseViews.clear,
};

/**
 * @private
 */
export type ButtonView = keyof typeof buttonViews;
