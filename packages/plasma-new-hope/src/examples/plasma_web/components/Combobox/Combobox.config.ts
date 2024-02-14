import { css } from '@linaria/core';

import { comboboxTokens } from '../../../../components/Combobox';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xs: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: auto;
                ${comboboxTokens.borderRadius}: 0.5rem;
                ${comboboxTokens.paddingTop}: 0.125rem;
                ${comboboxTokens.paddingRight}: 0.125rem;
                ${comboboxTokens.paddingBottom}: 0.125rem;
                ${comboboxTokens.paddingLeft}: 0.125rem;

                ${comboboxTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${comboboxTokens.dividerHeight}: 0.063rem;
                ${comboboxTokens.dividerMarginTop}: 0;
                ${comboboxTokens.dividerMarginRight}: 0.5rem;
                ${comboboxTokens.dividerMarginBottom}: 0;
                ${comboboxTokens.dividerMarginLeft}: 0.375rem;

                ${comboboxTokens.itemWidth}: auto;
                ${comboboxTokens.itemHeight}: 1rem;
                ${comboboxTokens.itemPaddingTop}: 0.5rem;
                ${comboboxTokens.itemPaddingRight}: 0.5rem;
                ${comboboxTokens.itemPaddingBottom}: 0.5rem;
                ${comboboxTokens.itemPaddingLeft}: 0.375rem;
                ${comboboxTokens.itemBorderRadius}: 0.375rem;
                ${comboboxTokens.itemContentLeftWidth}: 1.25rem;
                ${comboboxTokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${comboboxTokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${comboboxTokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${comboboxTokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${comboboxTokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${comboboxTokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${comboboxTokens.chipGap}: 0.25rem;
                ${comboboxTokens.chipBorderRadius}: 0.125rem;
                ${comboboxTokens.chipWidth}: auto;
                ${comboboxTokens.chipHeight}: 1.25rem;
                ${comboboxTokens.chipPaddingRight}: 0.375rem;
                ${comboboxTokens.chipPaddingLeft}: 0.625rem;
                ${comboboxTokens.chipClearContentMarginLeft}: 0.25rem;
                ${comboboxTokens.chipClearContentMarginRight}: 0rem;
                ${comboboxTokens.chipCloseIconSize}: 0.75rem;
                ${comboboxTokens.chipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${comboboxTokens.chipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${comboboxTokens.chipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${comboboxTokens.chipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${comboboxTokens.chipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${comboboxTokens.chipLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${comboboxTokens.targetArrowRight}: 0.5rem;
                ${comboboxTokens.targetHeight}: 2rem;
                ${comboboxTokens.targetWidth}: 100%;
                ${comboboxTokens.targetRadius}: 0.5rem;
                ${comboboxTokens.targetPadding}: 0 2.5rem 0 0.75rem;
                ${comboboxTokens.targetPaddingHasChips}: 0 2.625rem 0 0.375rem;
                ${comboboxTokens.targetPaddingWithInput}: 0 2.625rem 0 0.625rem;
                ${comboboxTokens.targetInnerTop}: 0.5rem;
                ${comboboxTokens.targetLabelInnerTop}: 0.375rem;
                ${comboboxTokens.targetFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${comboboxTokens.targetFontSize}: var(--plasma-typo-body-xs-font-size);
                ${comboboxTokens.targetFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${comboboxTokens.targetFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${comboboxTokens.targetLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${comboboxTokens.targetLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${comboboxTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${comboboxTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${comboboxTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${comboboxTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${comboboxTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${comboboxTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: auto;
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
            m: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: auto;
                ${comboboxTokens.borderRadius}: 0.75rem;
                ${comboboxTokens.paddingTop}: 0.125rem;
                ${comboboxTokens.paddingRight}: 0.125rem;
                ${comboboxTokens.paddingBottom}: 0.125rem;
                ${comboboxTokens.paddingLeft}: 0.125rem;

                ${comboboxTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${comboboxTokens.dividerHeight}: 0.063rem;
                ${comboboxTokens.dividerMarginTop}: 0;
                ${comboboxTokens.dividerMarginRight}: 0.875rem;
                ${comboboxTokens.dividerMarginBottom}: 0;
                ${comboboxTokens.dividerMarginLeft}: 0.875rem;

                ${comboboxTokens.itemWidth}: auto;
                ${comboboxTokens.itemHeight}: 1.5rem;
                ${comboboxTokens.itemPaddingTop}: 0.75rem;
                ${comboboxTokens.itemPaddingRight}: 0.875rem;
                ${comboboxTokens.itemPaddingBottom}: 0.75rem;
                ${comboboxTokens.itemPaddingLeft}: 0.875rem;
                ${comboboxTokens.itemBorderRadius}: 0.625rem;
                ${comboboxTokens.itemContentLeftWidth}: 1.75rem;
                ${comboboxTokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${comboboxTokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${comboboxTokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${comboboxTokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${comboboxTokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${comboboxTokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${comboboxTokens.chipGap}: 0.25rem;
                ${comboboxTokens.chipBorderRadius}: 0.375rem;
                ${comboboxTokens.chipWidth}: auto;
                ${comboboxTokens.chipHeight}: 2.25rem;
                ${comboboxTokens.chipPaddingRight}: 0.875rem;
                ${comboboxTokens.chipPaddingLeft}: 0.625rem;
                ${comboboxTokens.chipClearContentMarginLeft}: 0.5rem;
                ${comboboxTokens.chipClearContentMarginRight}: 0rem;
                ${comboboxTokens.chipCloseIconSize}: 1rem;
                ${comboboxTokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${comboboxTokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${comboboxTokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${comboboxTokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${comboboxTokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${comboboxTokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${comboboxTokens.targetArrowRight}: 0.875rem;
                ${comboboxTokens.targetHeight}: 3rem;
                ${comboboxTokens.targetWidth}: 100%;
                ${comboboxTokens.targetRadius}: 0.75rem;
                ${comboboxTokens.targetPadding}: 0 3.25rem 0 1.25rem;
                ${comboboxTokens.targetPaddingHasChips}: 0 3.375rem 0 0.375rem;
                ${comboboxTokens.targetPaddingWithInput}: 0 3.375rem 0 0.625rem;
                ${comboboxTokens.targetInnerTop}: 0.5rem;
                ${comboboxTokens.targetLabelInnerTop}: 0.375rem;
                ${comboboxTokens.targetFontFamily}: var(--plasma-typo-body-m-font-family);
                ${comboboxTokens.targetFontSize}: var(--plasma-typo-body-m-font-size);
                ${comboboxTokens.targetFontStyle}: var(--plasma-typo-body-m-font-style);
                ${comboboxTokens.targetFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${comboboxTokens.targetLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${comboboxTokens.targetLineHeight}: var(--plasma-typo-body-m-line-height);
                ${comboboxTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${comboboxTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${comboboxTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${comboboxTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${comboboxTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${comboboxTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: auto;
                ${comboboxTokens.borderRadius}: 0.875rem;
                ${comboboxTokens.paddingTop}: 0.125rem;
                ${comboboxTokens.paddingRight}: 0.125rem;
                ${comboboxTokens.paddingBottom}: 0.125rem;
                ${comboboxTokens.paddingLeft}: 0.125rem;

                ${comboboxTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${comboboxTokens.dividerHeight}: 0.063rem;
                ${comboboxTokens.dividerMarginTop}: 0;
                ${comboboxTokens.dividerMarginRight}: 1rem;
                ${comboboxTokens.dividerMarginBottom}: 0;
                ${comboboxTokens.dividerMarginLeft}: 1rem;

                ${comboboxTokens.itemWidth}: auto;
                ${comboboxTokens.itemHeight}: 1.5rem;
                ${comboboxTokens.itemPaddingTop}: 1rem;
                ${comboboxTokens.itemPaddingRight}: 1rem;
                ${comboboxTokens.itemPaddingBottom}: 1rem;
                ${comboboxTokens.itemPaddingLeft}: 1rem;
                ${comboboxTokens.itemBorderRadius}: 0.75rem;
                ${comboboxTokens.itemContentLeftWidth}: 1.875rem;
                ${comboboxTokens.itemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${comboboxTokens.itemFontSize}: var(--plasma-typo-body-l-font-size);
                ${comboboxTokens.itemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${comboboxTokens.itemFontWeightBold}: var(--plasma-typo-body-l-font-weight);
                ${comboboxTokens.itemFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${comboboxTokens.itemFontLineHeight}: var(--plasma-typo-body-l-line-height);

                ${comboboxTokens.chipGap}: 0.25rem;
                ${comboboxTokens.chipBorderRadius}: 0.5rem;
                ${comboboxTokens.chipWidth}: auto;
                ${comboboxTokens.chipHeight}: 2.75rem;
                ${comboboxTokens.chipPaddingRight}: 0.75rem;
                ${comboboxTokens.chipPaddingLeft}: 1rem;
                ${comboboxTokens.chipClearContentMarginLeft}: 0.625rem;
                ${comboboxTokens.chipClearContentMarginRight}: 0rem;
                ${comboboxTokens.chipCloseIconSize}: 1rem;
                ${comboboxTokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${comboboxTokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${comboboxTokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${comboboxTokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${comboboxTokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${comboboxTokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${comboboxTokens.targetArrowRight}: 1rem;
                ${comboboxTokens.targetHeight}: 3.5rem;
                ${comboboxTokens.targetWidth}: 100%;
                ${comboboxTokens.targetRadius}: 0.875rem;
                ${comboboxTokens.targetPadding}: 0 3.5rem 0 1.5rem;
                ${comboboxTokens.targetPaddingHasChips}: 0 3.625rem 0 0.375rem;
                ${comboboxTokens.targetPaddingWithInput}: 0 3.625rem 0 0.625rem;
                ${comboboxTokens.targetInnerTop}: 0.5rem;
                ${comboboxTokens.targetLabelInnerTop}: 0.375rem;
                ${comboboxTokens.targetFontFamily}: var(--plasma-typo-body-l-font-family);
                ${comboboxTokens.targetFontSize}: var(--plasma-typo-body-l-font-size);
                ${comboboxTokens.targetFontStyle}: var(--plasma-typo-body-l-font-style);
                ${comboboxTokens.targetFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${comboboxTokens.targetLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${comboboxTokens.targetLineHeight}: var(--plasma-typo-body-l-line-height);
                ${comboboxTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${comboboxTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-s-font-size);
                ${comboboxTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${comboboxTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${comboboxTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${comboboxTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        view: {
            default: css`
                ${comboboxTokens.targetColor}: var(--text-primary);
                ${comboboxTokens.targetLabelColor}: var(--text-secondary);
                ${comboboxTokens.targetArrowColor}: var(--text-secondary);
                ${comboboxTokens.targetBorderColor}: var(--text-tertiary);
                ${comboboxTokens.targetBorderColorHover}: var(--text-tertiary-hover);
                ${comboboxTokens.targetBorderColorActive}: var(--text-tertiary-active);
                ${comboboxTokens.targetBorderColorOpen}: var(--text-accent);

                ${comboboxTokens.background}: var(--surface-solid-card);
                ${comboboxTokens.boxShadow}: var(--shadow-down-soft-s);

                ${comboboxTokens.itemBackground}: var(--plasma-colors-transparent);
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
