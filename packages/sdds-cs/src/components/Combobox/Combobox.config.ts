import { css, comboboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: 2.5rem;
                ${comboboxTokens.borderRadius}: 0.625rem;
                ${comboboxTokens.paddingTop}: 0.125rem;
                ${comboboxTokens.paddingRight}: 0.125rem;
                ${comboboxTokens.paddingBottom}: 0.125rem;
                ${comboboxTokens.paddingLeft}: 0.125rem;

                ${comboboxTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${comboboxTokens.dividerHeight}: 0.063rem;
                ${comboboxTokens.dividerMarginTop}: 0;
                ${comboboxTokens.dividerMarginRight}: 0.75rem;
                ${comboboxTokens.dividerMarginBottom}: 0;
                ${comboboxTokens.dividerMarginLeft}: 0.75rem;

                ${comboboxTokens.itemWidth}: auto;
                ${comboboxTokens.itemHeight}: 1.5rem;
                ${comboboxTokens.itemPaddingTop}: 0.5rem;
                ${comboboxTokens.itemPaddingRight}: 0.75rem;
                ${comboboxTokens.itemPaddingBottom}: 0.5rem;
                ${comboboxTokens.itemPaddingLeft}: 0.75rem;
                ${comboboxTokens.itemBorderRadius}: 0.5rem;
                ${comboboxTokens.itemContentLeftWidth}: 1.75rem;
                ${comboboxTokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${comboboxTokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${comboboxTokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${comboboxTokens.itemFontWeightBold}: var(--plasma-typo-body-s-font-weight);
                ${comboboxTokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${comboboxTokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${comboboxTokens.chipGap}: 0.25rem;
                ${comboboxTokens.chipBorderRadius}: 0.25rem;
                ${comboboxTokens.chipWidth}: auto;
                ${comboboxTokens.chipHeight}: 1.75rem;
                ${comboboxTokens.chipPaddingRight}: 0.5rem;
                ${comboboxTokens.chipPaddingLeft}: 0.75rem;
                ${comboboxTokens.chipClearContentMarginLeft}: 0.375rem;
                ${comboboxTokens.chipClearContentMarginRight}: 0rem;
                ${comboboxTokens.chipCloseIconSize}: 0.75rem;
                ${comboboxTokens.chipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${comboboxTokens.chipFontSize}: var(--plasma-typo-body-s-font-size);
                ${comboboxTokens.chipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${comboboxTokens.chipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${comboboxTokens.chipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${comboboxTokens.chipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${comboboxTokens.targetArrowRight}: 0.75rem;
                ${comboboxTokens.targetHeight}: 2.5rem;
                ${comboboxTokens.targetWidth}: 100%;
                ${comboboxTokens.targetRadius}: 0.625rem;
                ${comboboxTokens.targetPadding}: 0 3rem 0 1rem;
                ${comboboxTokens.targetPaddingHasChips}: 0 3.125rem 0 0.375rem;
                ${comboboxTokens.targetPaddingWithInput}: 0 3.125rem 0 0.625rem;
                ${comboboxTokens.targetInnerTop}: 0.5rem;
                ${comboboxTokens.targetLabelInnerTop}: 0.375rem;
                ${comboboxTokens.targetFontFamily}: var(--plasma-typo-body-s-font-family);
                ${comboboxTokens.targetFontSize}: var(--plasma-typo-body-s-font-size);
                ${comboboxTokens.targetFontStyle}: var(--plasma-typo-body-s-font-style);
                ${comboboxTokens.targetFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${comboboxTokens.targetLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${comboboxTokens.targetLineHeight}: var(--plasma-typo-body-s-line-height);
                ${comboboxTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${comboboxTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${comboboxTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${comboboxTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${comboboxTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${comboboxTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
        view: {
            default: css`
                ${comboboxTokens.targetColor}: var(--text-primary);
                ${comboboxTokens.targetLabelColor}: var(--text-secondary);
                ${comboboxTokens.targetArrowColor}: var(--text-secondary);
                ${comboboxTokens.targetBackgroundColor}: var(--surface-transparent-primary);
                ${comboboxTokens.targetBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${comboboxTokens.targetBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${comboboxTokens.targetBackgroundColorOpen}: var(--surface-transparent-secondary);

                ${comboboxTokens.background}: var(--surface-solid-card-brightness);
                ${comboboxTokens.boxShadow}: var(--shadow-down-soft-s);

                ${comboboxTokens.itemBackground}: var(--surface-clear);
                ${comboboxTokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${comboboxTokens.itemBackgroundSelectedHover}: var(--surface-transparent-secondary);
                ${comboboxTokens.itemColor}: var(--text-primary);
                ${comboboxTokens.itemContentLeftColor}: var(--text-accent);

                ${comboboxTokens.chipCloseIconColor}: var(--text-secondary);
                ${comboboxTokens.chipColor}: var(--text-primary);
                ${comboboxTokens.chipBackground}: var(--surface-transparent-secondary);
                ${comboboxTokens.chipColorHover}: var(--text-primary);
                ${comboboxTokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${comboboxTokens.chipColorActive}: var(--text-primary);
                ${comboboxTokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${comboboxTokens.chipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${comboboxTokens.chipColorReadOnly}: var(--text-primary);
                ${comboboxTokens.chipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${comboboxTokens.chipColorReadOnlyHover}: var(--text-primary);
                ${comboboxTokens.chipOpacityReadonly}: 0.72;

                ${comboboxTokens.disabledOpacity}: 0.4;
                ${comboboxTokens.focusColor}: var(--surface-accent);
            `,
        },
    },
};
