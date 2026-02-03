import { css, embedIconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-primary);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});

                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-primary-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-primary-active);
            `,
            accent: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-accent);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});

                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-accent-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-accent-active);
            `,
            secondary: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-secondary);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});

                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-secondary-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-secondary-active);
            `,
            positive: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-positive);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});

                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-positive-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-positive-active);
            `,
            warning: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-warning);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});

                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-warning-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-warning-active);
            `,
            negative: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-negative);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});

                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-negative-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-negative-active);
            `,
            info: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-info);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});

                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-info-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-info-active);
            `,
        },
        size: {
            l: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 2.25rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 2.25rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 0rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.75rem;

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1.75rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            m: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 0rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.625rem;

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1.25rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            s: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 1rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 1rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 0rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.5rem;

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 0.75rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${embedIconButtonTokens.embedIconButtonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${embedIconButtonTokens.embedIconButtonFocusColor}: var(--surface-accent);
            `,
        },
    },
};
