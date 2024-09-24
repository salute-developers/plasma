import { css, textFieldTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.backgroundColorFocus}: var(--surface-solid-card-active);
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.placeholderColor}: var(--text-secondary);
                ${tokens.textBeforeColor}: var(--text-secondary);
                ${tokens.textAfterColor}: var(--text-secondary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);
                ${tokens.contentSlotColor}: var(--text-secondary);
                ${tokens.contentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.contentSlotColorActive}: var(--text-secondary-active);
                ${tokens.contentSlotRightColor}: var(--text-accent);
                ${tokens.contentSlotRightColorHover}: var(--text-accent-hover);
                ${tokens.contentSlotRightColorActive}: var(--text-accent-active);

                ${tokens.chipCloseIconColor}: var(--text-secondary);
                ${tokens.chipColor}: var(--text-primary);
                ${tokens.chipBackground}: var(--surface-transparent-secondary);
                ${tokens.chipColorHover}: var(--text-primary-hover);
                ${tokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${tokens.chipColorActive}: var(--text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnly}: var(--text-primary);
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnlyHover}: var(--text-primary);
                ${tokens.chipOpacityReadonly}: 0.72;

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.borderColor}: var(--outline-solid-primary);
                ${tokens.borderColorFocus}: var(--outline-accent);
                ${tokens.borderColorHover}: var(--outline-solid-primary-hover);
                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.optionalColor}: var(--text-tertiary);
            `,
            negative: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.backgroundColorFocus}: var(--surface-solid-card-active);
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.placeholderColor}: var(--text-secondary);
                ${tokens.textBeforeColor}: var(--text-secondary);
                ${tokens.textAfterColor}: var(--text-secondary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-negative);

                ${tokens.chipCloseIconColor}: var(--text-secondary);
                ${tokens.chipColor}: var(--text-primary);
                ${tokens.chipBackground}: var(--surface-transparent-secondary);
                ${tokens.chipColorHover}: var(--text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${tokens.chipColorActive}: var(--text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnly}: var(--text-primary);
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnlyHover}: var(--text-primary);
                ${tokens.chipOpacityReadonly}: 0.72;

                ${tokens.borderColor}: var(--text-negative);
                ${tokens.focusColor}: var(--text-negative);
                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.optionalColor}: var(--text-tertiary);
            `,
        },
        size: {
            s: css`
                ${tokens.height}: 2.5rem;
                ${tokens.padding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.leftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.rightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.25rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.75rem;
                ${tokens.chipPaddingRight}: 0.5rem;
                ${tokens.chipPaddingLeft}: 0.75rem;
                ${tokens.chipClearContentMarginLeft}: 0.375rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1rem;
                ${tokens.chipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
            `,
        },
        labelPlacement: {
            outer: css``,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;
                ${tokens.backgroundColor}: var(--surface-solid-primary);
                ${tokens.backgroundColorFocus}: var(--surface-solid-primary);
                ${tokens.borderColor}: var(--surface-solid-primary);
                ${tokens.borderColorHover}: var(--surface-solid-primary);
                ${tokens.borderColorFocus}: var(--surface-solid-primary);
                ${tokens.color}: var(--text-secondary);
            `,
        },
        readOnly: {
            true: css`
                ${tokens.colorReadOnly}: var(--text-secondary);
                ${tokens.backgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.placeholderColorReadOnly}: var(--text-secondary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.labelColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
