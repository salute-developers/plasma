import { css } from '@linaria/core';

import { selectNewTokens } from '../../../../components/SelectNew';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xs: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 10rem;
                ${selectNewTokens.borderRadius}: 0.5rem;

                ${selectNewTokens.itemHeight}: 1rem;
                ${selectNewTokens.itemPaddingTop}: 0.5rem;
                ${selectNewTokens.itemPaddingRight}: 0.5rem;
                ${selectNewTokens.itemPaddingBottom}: 0.5rem;
                ${selectNewTokens.itemPaddingLeft}: 0.375rem;
                ${selectNewTokens.itemBorderRadius}: 0.375rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.25rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.25rem;
                ${selectNewTokens.itemIconSize}: 1rem;
                ${selectNewTokens.itemIconMargin}: 0 0.25rem 0 0;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.checkboxMargin}: 0 0 0.188rem 0.188rem;
                ${selectNewTokens.checkboxTriggerMargin}: 0.188rem 0;
                ${selectNewTokens.checkboxTriggerSize}: 0.875rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;

                ${selectNewTokens.chipGap}: 0.25rem;
                ${selectNewTokens.chipBorderRadius}: 0.125rem;
                ${selectNewTokens.chipWidth}: auto;
                ${selectNewTokens.chipHeight}: 1.25rem;
                ${selectNewTokens.chipPaddingRight}: 0.375rem;
                ${selectNewTokens.chipPaddingLeft}: 0.625rem;
                ${selectNewTokens.chipClearContentMarginLeft}: 0.25rem;
                ${selectNewTokens.chipClearContentMarginRight}: 0rem;
                ${selectNewTokens.chipCloseIconSize}: 0.75rem;
                ${selectNewTokens.chipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.chipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.chipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.chipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.chipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.chipLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.targetArrowRight}: 0.5rem;
                ${selectNewTokens.targetHeight}: 2rem;
                ${selectNewTokens.targetWidth}: 100%;
                ${selectNewTokens.targetRadius}: 0.5rem;
                ${selectNewTokens.targetPadding}: 0.75rem;
                ${selectNewTokens.targetPaddingHasChips}: 0 2.625rem 0 0.375rem;
                ${selectNewTokens.targetPaddingWithInput}: 0 2.625rem 0 0.625rem;
                ${selectNewTokens.targetInnerTop}: 0.5rem;
                ${selectNewTokens.targetLabelInnerTop}: 0.375rem;
                ${selectNewTokens.targetFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.targetFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.targetFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.targetFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.targetLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.targetLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${selectNewTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 12.5rem;
                ${selectNewTokens.borderRadius}: 0.625rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPaddingTop}: 0.5rem;
                ${selectNewTokens.itemPaddingRight}: 0.75rem;
                ${selectNewTokens.itemPaddingBottom}: 0.5rem;
                ${selectNewTokens.itemPaddingLeft}: 0.675rem;
                ${selectNewTokens.itemBorderRadius}: 0.5rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.25rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.25rem;
                ${selectNewTokens.itemIconSize}: 1.5rem;
                ${selectNewTokens.itemIconMargin}: 0 0.375rem 0 0;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectNewTokens.checkboxMargin}: 0 0 0.188rem 0.188rem;
                ${selectNewTokens.checkboxTriggerMargin}: 0.188rem 0;
                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;

                ${selectNewTokens.chipGap}: 0.25rem;
                ${selectNewTokens.chipBorderRadius}: 0.25rem;
                ${selectNewTokens.chipWidth}: auto;
                ${selectNewTokens.chipHeight}: 1.75rem;
                ${selectNewTokens.chipPaddingRight}: 0.5rem;
                ${selectNewTokens.chipPaddingLeft}: 0.75rem;
                ${selectNewTokens.chipClearContentMarginLeft}: 0.375rem;
                ${selectNewTokens.chipClearContentMarginRight}: 0rem;
                ${selectNewTokens.chipCloseIconSize}: 0.75rem;
                ${selectNewTokens.chipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.chipFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.chipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.chipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.chipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.chipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectNewTokens.targetArrowRight}: 0.75rem;
                ${selectNewTokens.targetHeight}: 2.5rem;
                ${selectNewTokens.targetWidth}: 100%;
                ${selectNewTokens.targetRadius}: 0.625rem;
                ${selectNewTokens.targetPadding}: 1rem;
                ${selectNewTokens.targetPaddingHasChips}: 0 3.125rem 0 0.375rem;
                ${selectNewTokens.targetPaddingWithInput}: 0 3.125rem 0 0.625rem;
                ${selectNewTokens.targetInnerTop}: 0.5rem;
                ${selectNewTokens.targetLabelInnerTop}: 0.375rem;
                ${selectNewTokens.targetFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.targetFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.targetFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.targetFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.targetLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.targetLineHeight}: var(--plasma-typo-body-s-line-height);
                ${selectNewTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${selectNewTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${selectNewTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${selectNewTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${selectNewTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${selectNewTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            m: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 15rem;
                ${selectNewTokens.borderRadius}: 0.75rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPaddingTop}: 0.75rem;
                ${selectNewTokens.itemPaddingRight}: 0.75rem;
                ${selectNewTokens.itemPaddingBottom}: 0.75rem;
                ${selectNewTokens.itemPaddingLeft}: 0.75rem;
                ${selectNewTokens.itemBorderRadius}: 0.625rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.5rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.5rem;
                ${selectNewTokens.itemIconMargin}: 0 0.375rem 0 0;
                ${selectNewTokens.itemIconSize}: 1.5rem;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectNewTokens.checkboxMargin}: 0;
                ${selectNewTokens.checkboxTriggerMargin}: 0;
                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;

                ${selectNewTokens.chipGap}: 0.25rem;
                ${selectNewTokens.chipBorderRadius}: 0.375rem;
                ${selectNewTokens.chipWidth}: auto;
                ${selectNewTokens.chipHeight}: 2.25rem;
                ${selectNewTokens.chipPaddingRight}: 0.875rem;
                ${selectNewTokens.chipPaddingLeft}: 0.625rem;
                ${selectNewTokens.chipClearContentMarginLeft}: 0.5rem;
                ${selectNewTokens.chipClearContentMarginRight}: 0rem;
                ${selectNewTokens.chipCloseIconSize}: 1rem;
                ${selectNewTokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectNewTokens.targetArrowRight}: 0.875rem;
                ${selectNewTokens.targetHeight}: 3rem;
                ${selectNewTokens.targetWidth}: 100%;
                ${selectNewTokens.targetRadius}: 0.75rem;
                ${selectNewTokens.targetPadding}: 1.25rem;
                ${selectNewTokens.targetPaddingHasChips}: 0 3.375rem 0 0.375rem;
                ${selectNewTokens.targetPaddingWithInput}: 0 3.375rem 0 0.625rem;
                ${selectNewTokens.targetInnerTop}: 0.5rem;
                ${selectNewTokens.targetLabelInnerTop}: 0.375rem;
                ${selectNewTokens.targetFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.targetFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.targetFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.targetFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.targetLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.targetLineHeight}: var(--plasma-typo-body-m-line-height);
                ${selectNewTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 17.5rem;
                ${selectNewTokens.borderRadius}: 0.875rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPaddingTop}: 1rem;
                ${selectNewTokens.itemPaddingRight}: 1rem;
                ${selectNewTokens.itemPaddingBottom}: 1rem;
                ${selectNewTokens.itemPaddingLeft}: 0.875rem;
                ${selectNewTokens.itemBorderRadius}: 0.75rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.75rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.75rem;
                ${selectNewTokens.itemIconMargin}: 0 0.5rem 0 0;
                ${selectNewTokens.itemIconSize}: 1.5rem;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-l-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-l-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-l-line-height);

                ${selectNewTokens.checkboxMargin}: 0 0 0.188rem 0.188rem;
                ${selectNewTokens.checkboxTriggerMargin}: 0.188rem 0;
                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;

                ${selectNewTokens.chipGap}: 0.25rem;
                ${selectNewTokens.chipBorderRadius}: 0.5rem;
                ${selectNewTokens.chipWidth}: auto;
                ${selectNewTokens.chipHeight}: 2.75rem;
                ${selectNewTokens.chipPaddingRight}: 0.75rem;
                ${selectNewTokens.chipPaddingLeft}: 1rem;
                ${selectNewTokens.chipClearContentMarginLeft}: 0.625rem;
                ${selectNewTokens.chipClearContentMarginRight}: 0rem;
                ${selectNewTokens.chipCloseIconSize}: 1rem;
                ${selectNewTokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectNewTokens.targetArrowRight}: 1rem;
                ${selectNewTokens.targetHeight}: 3.5rem;
                ${selectNewTokens.targetWidth}: 100%;
                ${selectNewTokens.targetRadius}: 0.875rem;
                ${selectNewTokens.targetPadding}: 1.5rem;
                ${selectNewTokens.targetPaddingHasChips}: 0 3.625rem 0 0.375rem;
                ${selectNewTokens.targetPaddingWithInput}: 0 3.625rem 0 0.625rem;
                ${selectNewTokens.targetInnerTop}: 0.5rem;
                ${selectNewTokens.targetLabelInnerTop}: 0.375rem;
                ${selectNewTokens.targetFontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectNewTokens.targetFontSize}: var(--plasma-typo-body-l-font-size);
                ${selectNewTokens.targetFontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectNewTokens.targetFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${selectNewTokens.targetLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectNewTokens.targetLineHeight}: var(--plasma-typo-body-l-line-height);
                ${selectNewTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        view: {
            default: css`
                ${selectNewTokens.disabledOpacity}: 0.4;
                ${selectNewTokens.focusColor}: var(--surface-accent);
                ${selectNewTokens.background}: var(--surface-solid-card);
                ${selectNewTokens.boxShadow}: var(--shadow-down-soft-s);
                ${selectNewTokens.disclosureIconColor}: var(--text-secondary);
                ${selectNewTokens.itemBackground}: var(--plasma-colors-transparent);
                ${selectNewTokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${selectNewTokens.itemColor}: var(--text-primary);

                ${selectNewTokens.chipCloseIconColor}: var(--text-secondary);
                ${selectNewTokens.chipColor}: var(--text-primary);
                ${selectNewTokens.chipBackground}: var(--surface-transparent-secondary);
                ${selectNewTokens.chipColorHover}: var(--text-primary);
                ${selectNewTokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${selectNewTokens.chipColorActive}: var(--text-primary);
                ${selectNewTokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${selectNewTokens.chipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${selectNewTokens.chipColorReadOnly}: var(--text-primary);
                ${selectNewTokens.chipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${selectNewTokens.chipColorReadOnlyHover}: var(--text-primary);
                ${selectNewTokens.chipOpacityReadonly}: 0.72;

                ${selectNewTokens.targetColor}: var(--text-primary);
                ${selectNewTokens.targetLabelColor}: var(--text-primary);
                ${selectNewTokens.targetArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetBackgroundColor}: var(--surface-transparent-secondary);
                ${selectNewTokens.targetBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${selectNewTokens.targetBackgroundColorActive}: var(--surface-transparent-secondary-active);
                ${selectNewTokens.targetBackgroundColorOpen}: var(--surface-transparent-secondary);
                ${selectNewTokens.targetFontWeight}: 600 !important; /* TODO: Переделать когда появится возможность пересечения свойств */
            `,
        },
    },
};
