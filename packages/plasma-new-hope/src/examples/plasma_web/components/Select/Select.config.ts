import { css } from '@linaria/core';

import { selectTokens } from '../../../../components/Select';

export const config = {
    defaults: {
        target: 'button-like',
        view: 'default',
        size: 'm',
    },
    variations: {
        target: {
            'textField-like': css`
                ${selectTokens.targetColor}: var(--text-primary);
                ${selectTokens.targetLabelColor}: var(--text-secondary);
                ${selectTokens.targetArrowColor}: var(--text-secondary);
                ${selectTokens.targetBorderColor}: var(--text-tertiary);
                ${selectTokens.targetBorderColorHover}: var(--text-tertiary-hover);
                ${selectTokens.targetBorderColorActive}: var(--text-tertiary-active);
                ${selectTokens.targetBorderColorOpen}: var(--text-accent);
            `,
            'button-like': css`
                ${selectTokens.targetColor}: var(--text-primary);
                ${selectTokens.targetLabelColor}: var(--text-primary);
                ${selectTokens.targetArrowColor}: var(--text-secondary);
                ${selectTokens.targetBackgroundColor}: var(--surface-transparent-secondary);
                ${selectTokens.targetBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${selectTokens.targetBackgroundColorActive}: var(--surface-transparent-secondary-active);
                ${selectTokens.targetBackgroundColorOpen}: var(--surface-transparent-secondary);
                ${selectTokens.targetFontWeight}: 600 !important; /* TODO: Переделать когда появится возможность пересечения свойств */
            `,
        },
        size: {
            xs: css`
                ${selectTokens.width}: 100%;
                ${selectTokens.height}: auto;
                ${selectTokens.borderRadius}: 0.5rem;
                ${selectTokens.paddingTop}: 0.125rem;
                ${selectTokens.paddingRight}: 0.125rem;
                ${selectTokens.paddingBottom}: 0.125rem;
                ${selectTokens.paddingLeft}: 0.125rem;

                ${selectTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${selectTokens.dividerHeight}: 0.063rem;
                ${selectTokens.dividerMarginTop}: 0;
                ${selectTokens.dividerMarginRight}: 0.5rem;
                ${selectTokens.dividerMarginBottom}: 0;
                ${selectTokens.dividerMarginLeft}: 0.375rem;

                ${selectTokens.itemWidth}: auto;
                ${selectTokens.itemHeight}: 1rem;
                ${selectTokens.itemPaddingTop}: 0.5rem;
                ${selectTokens.itemPaddingRight}: 0.5rem;
                ${selectTokens.itemPaddingBottom}: 0.5rem;
                ${selectTokens.itemPaddingLeft}: 0.375rem;
                ${selectTokens.itemBorderRadius}: 0.375rem;
                ${selectTokens.itemContentLeftWidth}: 1.25rem;
                ${selectTokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectTokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectTokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectTokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${selectTokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectTokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectTokens.chipGap}: 0.25rem;
                ${selectTokens.chipBorderRadius}: 0.125rem;
                ${selectTokens.chipWidth}: auto;
                ${selectTokens.chipHeight}: 1.25rem;
                ${selectTokens.chipPaddingRight}: 0.375rem;
                ${selectTokens.chipPaddingLeft}: 0.625rem;
                ${selectTokens.chipClearContentMarginLeft}: 0.25rem;
                ${selectTokens.chipClearContentMarginRight}: 0rem;
                ${selectTokens.chipCloseIconSize}: 0.75rem;
                ${selectTokens.chipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectTokens.chipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectTokens.chipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectTokens.chipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectTokens.chipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectTokens.chipLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectTokens.targetArrowRight}: 0.5rem;
                ${selectTokens.targetHeight}: 2rem;
                ${selectTokens.targetWidth}: 100%;
                ${selectTokens.targetRadius}: 0.5rem;
                ${selectTokens.targetPadding}: 0 2.5rem 0 0.75rem;
                ${selectTokens.targetPaddingHasChips}: 0 2.625rem 0 0.375rem;
                ${selectTokens.targetPaddingWithInput}: 0 2.625rem 0 0.625rem;
                ${selectTokens.targetInnerTop}: 0.5rem;
                ${selectTokens.targetLabelInnerTop}: 0.375rem;
                ${selectTokens.targetFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectTokens.targetFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectTokens.targetFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectTokens.targetFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectTokens.targetLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectTokens.targetLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${selectTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${selectTokens.width}: 100%;
                ${selectTokens.height}: auto;
                ${selectTokens.borderRadius}: 0.625rem;
                ${selectTokens.paddingTop}: 0.125rem;
                ${selectTokens.paddingRight}: 0.125rem;
                ${selectTokens.paddingBottom}: 0.125rem;
                ${selectTokens.paddingLeft}: 0.125rem;

                ${selectTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${selectTokens.dividerHeight}: 0.063rem;
                ${selectTokens.dividerMarginTop}: 0;
                ${selectTokens.dividerMarginRight}: 0.75rem;
                ${selectTokens.dividerMarginBottom}: 0;
                ${selectTokens.dividerMarginLeft}: 0.75rem;

                ${selectTokens.itemWidth}: auto;
                ${selectTokens.itemHeight}: 1.5rem;
                ${selectTokens.itemPaddingTop}: 0.5rem;
                ${selectTokens.itemPaddingRight}: 0.75rem;
                ${selectTokens.itemPaddingBottom}: 0.5rem;
                ${selectTokens.itemPaddingLeft}: 0.75rem;
                ${selectTokens.itemBorderRadius}: 0.5rem;
                ${selectTokens.itemContentLeftWidth}: 1.75rem;
                ${selectTokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectTokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectTokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectTokens.itemFontWeightBold}: var(--plasma-typo-body-s-font-weight);
                ${selectTokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectTokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectTokens.chipGap}: 0.25rem;
                ${selectTokens.chipBorderRadius}: 0.25rem;
                ${selectTokens.chipWidth}: auto;
                ${selectTokens.chipHeight}: 1.75rem;
                ${selectTokens.chipPaddingRight}: 0.5rem;
                ${selectTokens.chipPaddingLeft}: 0.75rem;
                ${selectTokens.chipClearContentMarginLeft}: 0.375rem;
                ${selectTokens.chipClearContentMarginRight}: 0rem;
                ${selectTokens.chipCloseIconSize}: 0.75rem;
                ${selectTokens.chipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectTokens.chipFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectTokens.chipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectTokens.chipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectTokens.chipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectTokens.chipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectTokens.targetArrowRight}: 0.75rem;
                ${selectTokens.targetHeight}: 2.5rem;
                ${selectTokens.targetWidth}: 100%;
                ${selectTokens.targetRadius}: 0.625rem;
                ${selectTokens.targetPadding}: 0 3rem 0 1rem;
                ${selectTokens.targetPaddingHasChips}: 0 3.125rem 0 0.375rem;
                ${selectTokens.targetPaddingWithInput}: 0 3.125rem 0 0.625rem;
                ${selectTokens.targetInnerTop}: 0.5rem;
                ${selectTokens.targetLabelInnerTop}: 0.375rem;
                ${selectTokens.targetFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectTokens.targetFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectTokens.targetFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectTokens.targetFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectTokens.targetLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectTokens.targetLineHeight}: var(--plasma-typo-body-s-line-height);
                ${selectTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${selectTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${selectTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${selectTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${selectTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${selectTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            m: css`
                ${selectTokens.width}: 100%;
                ${selectTokens.height}: auto;
                ${selectTokens.borderRadius}: 0.75rem;
                ${selectTokens.paddingTop}: 0.125rem;
                ${selectTokens.paddingRight}: 0.125rem;
                ${selectTokens.paddingBottom}: 0.125rem;
                ${selectTokens.paddingLeft}: 0.125rem;

                ${selectTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${selectTokens.dividerHeight}: 0.063rem;
                ${selectTokens.dividerMarginTop}: 0;
                ${selectTokens.dividerMarginRight}: 0.875rem;
                ${selectTokens.dividerMarginBottom}: 0;
                ${selectTokens.dividerMarginLeft}: 0.875rem;

                ${selectTokens.itemWidth}: auto;
                ${selectTokens.itemHeight}: 1.5rem;
                ${selectTokens.itemPaddingTop}: 0.75rem;
                ${selectTokens.itemPaddingRight}: 0.875rem;
                ${selectTokens.itemPaddingBottom}: 0.75rem;
                ${selectTokens.itemPaddingLeft}: 0.875rem;
                ${selectTokens.itemBorderRadius}: 0.625rem;
                ${selectTokens.itemContentLeftWidth}: 1.75rem;
                ${selectTokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectTokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectTokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectTokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${selectTokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectTokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectTokens.chipGap}: 0.25rem;
                ${selectTokens.chipBorderRadius}: 0.375rem;
                ${selectTokens.chipWidth}: auto;
                ${selectTokens.chipHeight}: 2.25rem;
                ${selectTokens.chipPaddingRight}: 0.875rem;
                ${selectTokens.chipPaddingLeft}: 0.625rem;
                ${selectTokens.chipClearContentMarginLeft}: 0.5rem;
                ${selectTokens.chipClearContentMarginRight}: 0rem;
                ${selectTokens.chipCloseIconSize}: 1rem;
                ${selectTokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectTokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectTokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectTokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectTokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectTokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectTokens.targetArrowRight}: 0.875rem;
                ${selectTokens.targetHeight}: 3rem;
                ${selectTokens.targetWidth}: 100%;
                ${selectTokens.targetRadius}: 0.75rem;
                ${selectTokens.targetPadding}: 0 3.25rem 0 1.25rem;
                ${selectTokens.targetPaddingHasChips}: 0 3.375rem 0 0.375rem;
                ${selectTokens.targetPaddingWithInput}: 0 3.375rem 0 0.625rem;
                ${selectTokens.targetInnerTop}: 0.5rem;
                ${selectTokens.targetLabelInnerTop}: 0.375rem;
                ${selectTokens.targetFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectTokens.targetFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectTokens.targetFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectTokens.targetFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectTokens.targetLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectTokens.targetLineHeight}: var(--plasma-typo-body-m-line-height);
                ${selectTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${selectTokens.width}: 100%;
                ${selectTokens.height}: auto;
                ${selectTokens.borderRadius}: 0.875rem;
                ${selectTokens.paddingTop}: 0.125rem;
                ${selectTokens.paddingRight}: 0.125rem;
                ${selectTokens.paddingBottom}: 0.125rem;
                ${selectTokens.paddingLeft}: 0.125rem;

                ${selectTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${selectTokens.dividerHeight}: 0.063rem;
                ${selectTokens.dividerMarginTop}: 0;
                ${selectTokens.dividerMarginRight}: 1rem;
                ${selectTokens.dividerMarginBottom}: 0;
                ${selectTokens.dividerMarginLeft}: 1rem;

                ${selectTokens.itemWidth}: auto;
                ${selectTokens.itemHeight}: 1.5rem;
                ${selectTokens.itemPaddingTop}: 1rem;
                ${selectTokens.itemPaddingRight}: 1rem;
                ${selectTokens.itemPaddingBottom}: 1rem;
                ${selectTokens.itemPaddingLeft}: 1rem;
                ${selectTokens.itemBorderRadius}: 0.75rem;
                ${selectTokens.itemContentLeftWidth}: 1.875rem;
                ${selectTokens.itemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectTokens.itemFontSize}: var(--plasma-typo-body-l-font-size);
                ${selectTokens.itemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectTokens.itemFontWeightBold}: var(--plasma-typo-body-l-font-weight);
                ${selectTokens.itemFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectTokens.itemFontLineHeight}: var(--plasma-typo-body-l-line-height);

                ${selectTokens.chipGap}: 0.25rem;
                ${selectTokens.chipBorderRadius}: 0.5rem;
                ${selectTokens.chipWidth}: auto;
                ${selectTokens.chipHeight}: 2.75rem;
                ${selectTokens.chipPaddingRight}: 0.75rem;
                ${selectTokens.chipPaddingLeft}: 1rem;
                ${selectTokens.chipClearContentMarginLeft}: 0.625rem;
                ${selectTokens.chipClearContentMarginRight}: 0rem;
                ${selectTokens.chipCloseIconSize}: 1rem;
                ${selectTokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectTokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectTokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectTokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectTokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectTokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectTokens.targetArrowRight}: 1rem;
                ${selectTokens.targetHeight}: 3.5rem;
                ${selectTokens.targetWidth}: 100%;
                ${selectTokens.targetRadius}: 0.875rem;
                ${selectTokens.targetPadding}: 0 3.5rem 0 1.5rem;
                ${selectTokens.targetPaddingHasChips}: 0 3.625rem 0 0.375rem;
                ${selectTokens.targetPaddingWithInput}: 0 3.625rem 0 0.625rem;
                ${selectTokens.targetInnerTop}: 0.5rem;
                ${selectTokens.targetLabelInnerTop}: 0.375rem;
                ${selectTokens.targetFontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectTokens.targetFontSize}: var(--plasma-typo-body-l-font-size);
                ${selectTokens.targetFontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectTokens.targetFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${selectTokens.targetLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectTokens.targetLineHeight}: var(--plasma-typo-body-l-line-height);
                ${selectTokens.targetLabelInnerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectTokens.targetLabelInnerFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectTokens.targetLabelInnerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectTokens.targetLabelInnerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectTokens.targetLabelInnerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectTokens.targetLabelInnerLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        view: {
            default: css`
                ${selectTokens.disabledOpacity}: 0.4;
                ${selectTokens.background}: var(--surface-solid-card);
                ${selectTokens.boxShadow}: var(--shadow-down-soft-s);

                ${selectTokens.itemBackground}: var(--plasma-colors-transparent);
                ${selectTokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${selectTokens.itemBackgroundSelectedHover}: var(--surface-transparent-secondary);
                ${selectTokens.itemColor}: var(--text-primary);
                ${selectTokens.itemContentLeftColor}: var(--text-accent);

                ${selectTokens.chipCloseIconColor}: var(--text-secondary);
                ${selectTokens.chipColor}: var(--text-primary);
                ${selectTokens.chipBackground}: var(--surface-transparent-secondary);
                ${selectTokens.chipColorHover}: var(--text-primary);
                ${selectTokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${selectTokens.chipColorActive}: var(--text-primary);
                ${selectTokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${selectTokens.chipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${selectTokens.chipColorReadOnly}: var(--text-primary);
                ${selectTokens.chipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${selectTokens.chipColorReadOnlyHover}: var(--text-primary);
                ${selectTokens.chipOpacityReadonly}: 0.72;
            `,
        },
    },
};
