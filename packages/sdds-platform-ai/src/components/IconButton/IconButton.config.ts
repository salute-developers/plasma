import { css, iconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

// доработка в core
// - hover для градиентов (возможно ли)
// - толщина border
// - gradient for css color - (black view for example)
// view secondary
// - к чему применять hover
// - макет и изменения противоречат себе (при чем тут outline)
// size L
// - применять ко всем? Странные размеры ширина высота - уточнить у дизайна

// на фоне системного background-color плохо видно (обсудить с Таней или Настей)
// на что влияет iconButtonPadding ?
// TODO: add xxs size
export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${iconButtonTokens.iconButtonColor}: var(--inverse-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-solid-default);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--inverse-text-primary-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--inverse-text-primary-active);
            `,
            accent: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-accent-gradient);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: transparent;

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});

                ${iconButtonTokens.iconButtonBorderColor}: var(--text-primary);
                ${iconButtonTokens.iconButtonBorderColorHover}: var(--text-primary-hover);
                ${iconButtonTokens.iconButtonBorderColorActive}: var(--text-primary-hover);
            `,
            clear: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            positive: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-positive);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-positive-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-positive-active);
            `,
            warning: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-warning);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-warning-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-warning-active);
            `,
            negative: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-negative);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-negative-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-negative-active);
            `,
            dark: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-dark-text-primary-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-dark-text-primary-active);
            `,
            black: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-accent);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-solid-default);
                ${iconButtonTokens.iconButtonColorHover}: var(--surface-solid-default-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--surface-solid-default-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            white: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-light-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-light-text-primary-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-light-text-primary-active);
            `,
            secondaryWhite: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: trasparent;

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});

                ${iconButtonTokens.iconButtonBorderColor}: var(--on-dark-outline-solid-default);
                ${iconButtonTokens.iconButtonBorderColorHover}: var(--on-dark-outline-solid-default-hover);
                ${iconButtonTokens.iconButtonBorderColorActive}: var(--on-dark-outline-solid-default-hover);
            `,
            clearWhite: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: trasparent;
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${iconButtonTokens.iconButtonHeight}: 4rem;
                ${iconButtonTokens.iconButtonWidth}: 4.25rem;
                ${iconButtonTokens.iconButtonPadding}: 1.375rem;
                ${iconButtonTokens.iconButtonRadius}: 1.75rem;

                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.5rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            l: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1.5rem;
                ${iconButtonTokens.iconButtonRadius}: 0.875rem;

                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            m: css`
                ${iconButtonTokens.iconButtonHeight}: 3rem;
                ${iconButtonTokens.iconButtonWidth}: 3.25rem;
                ${iconButtonTokens.iconButtonPadding}: 0.875rem;
                ${iconButtonTokens.iconButtonRadius}: 1.25rem;

                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            s: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.75rem;

                ${iconButtonTokens.iconButtonPadding}: 1rem;
                ${iconButtonTokens.iconButtonRadius}: 1.125rem;

                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xs: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
                ${iconButtonTokens.iconButtonRadius}: 0.5rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${iconButtonTokens.iconButtonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${iconButtonTokens.iconButtonFocusColor}: var(--surface-accent);
            `,
        },
    },
    intersections: [
        {
            view: 'secondaryWhite',
            size: 'l',
            style: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.75rem;

                ${iconButtonTokens.iconButtonRadius}: 1.5rem;
            `,
        },
        {
            view: 'clearWhite',
            size: 'l',
            style: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;

                ${iconButtonTokens.iconButtonRadius}: 1.5rem;
            `,
        },
    ],
};
