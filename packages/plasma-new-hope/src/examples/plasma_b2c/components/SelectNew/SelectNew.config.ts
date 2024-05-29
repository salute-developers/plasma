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
                ${selectNewTokens.chipFocusSize}: 0.0625rem;

                ${selectNewTokens.targetArrowMarginLeft}: 0.75rem;
                ${selectNewTokens.targetHeight}: 2rem;
                ${selectNewTokens.targetWidth}: 100%;
                ${selectNewTokens.targetRadius}: 0.5rem;
                ${selectNewTokens.targetButtonPadding}: 0.625rem 0 0.75rem;
                ${selectNewTokens.targetTextfieldPadding}: 0.5rem 0 0.375rem;
                ${selectNewTokens.targetInnerTop}: 0.5rem;
                ${selectNewTokens.targetFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.targetFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.targetFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.targetFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.targetLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.targetLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.labelOffset}: 0.375rem;
                ${selectNewTokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.innerLabelGap}: 0;
                ${selectNewTokens.innerLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.innerLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.innerLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.innerLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.innerLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.innerLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.helperTextOffset}: 0.25rem;
                ${selectNewTokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.placeholderFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.placeholderFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.placeholderFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.placeholderFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.placeholderLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.placeholderLineHeight}: var(--plasma-typo-body-xs-line-height);
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
                ${selectNewTokens.chipFocusSize}: 0.0625rem;

                ${selectNewTokens.targetArrowMarginLeft}: 0.75rem;
                ${selectNewTokens.targetHeight}: 2.5rem;
                ${selectNewTokens.targetWidth}: 100%;
                ${selectNewTokens.targetRadius}: 0.625rem;
                ${selectNewTokens.targetButtonPadding}: 0.875rem 0 1rem;
                ${selectNewTokens.targetTextfieldPadding}: 0.75rem 0 0.375rem;
                ${selectNewTokens.targetInnerTop}: 0.5rem;
                ${selectNewTokens.targetFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.targetFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.targetFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.targetFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.targetLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.targetLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectNewTokens.labelOffset}: 0.5rem;
                ${selectNewTokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectNewTokens.innerLabelGap}: 0;
                ${selectNewTokens.innerLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.innerLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.innerLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.innerLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.innerLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.innerLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.helperTextOffset}: 0.25rem;
                ${selectNewTokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.placeholderFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.placeholderFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.placeholderFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.placeholderFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.placeholderLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.placeholderLineHeight}: var(--plasma-typo-body-s-line-height);
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
                ${selectNewTokens.chipFocusSize}: 0.0625rem;

                ${selectNewTokens.targetArrowMarginLeft}: 0.75rem;
                ${selectNewTokens.targetHeight}: 3rem;
                ${selectNewTokens.targetWidth}: 100%;
                ${selectNewTokens.targetRadius}: 0.75rem;
                ${selectNewTokens.targetButtonPadding}: 1.125rem 0 1.25rem;
                ${selectNewTokens.targetTextfieldPadding}: 0.875rem 0 0.375rem;
                ${selectNewTokens.targetInnerTop}: 0.5rem;
                ${selectNewTokens.targetFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.targetFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.targetFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.targetFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.targetLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.targetLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectNewTokens.labelOffset}: 0.625rem;
                ${selectNewTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectNewTokens.innerLabelGap}: 0.125rem;
                ${selectNewTokens.innerLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.innerLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.innerLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.innerLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.innerLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.innerLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.helperTextOffset}: 0.25rem;
                ${selectNewTokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.placeholderFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.placeholderFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.placeholderFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.placeholderFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.placeholderLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.placeholderLineHeight}: var(--plasma-typo-body-m-line-height);
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
                ${selectNewTokens.chipFocusSize}: 0.0625rem;

                ${selectNewTokens.targetArrowMarginLeft}: 0.75rem;
                ${selectNewTokens.targetHeight}: 3.5rem;
                ${selectNewTokens.targetWidth}: 100%;
                ${selectNewTokens.targetRadius}: 0.875rem;
                ${selectNewTokens.targetButtonPadding}: 1.38rem 0 1.5rem;
                ${selectNewTokens.targetTextfieldPadding}: 1rem 0 0.375rem;
                ${selectNewTokens.targetInnerTop}: 0.5rem;
                ${selectNewTokens.targetFontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectNewTokens.targetFontSize}: var(--plasma-typo-body-l-font-size);
                ${selectNewTokens.targetFontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectNewTokens.targetFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${selectNewTokens.targetLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectNewTokens.targetLineHeight}: var(--plasma-typo-body-l-line-height);

                ${selectNewTokens.labelOffset}: 0.75rem;
                ${selectNewTokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectNewTokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${selectNewTokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectNewTokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${selectNewTokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectNewTokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${selectNewTokens.innerLabelGap}: 0.125rem;
                ${selectNewTokens.innerLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.innerLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.innerLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.innerLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.innerLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.innerLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.helperTextOffset}: 0.25rem;
                ${selectNewTokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.placeholderFontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectNewTokens.placeholderFontSize}: var(--plasma-typo-body-l-font-size);
                ${selectNewTokens.placeholderFontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectNewTokens.placeholderFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${selectNewTokens.placeholderLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectNewTokens.placeholderLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
        },
        view: {
            default: css`
                ${selectNewTokens.disabledOpacity}: 0.4;
                ${selectNewTokens.focusColor}: var(--surface-accent);
                ${selectNewTokens.background}: var(--surface-solid-card);
                ${selectNewTokens.boxShadow}: var(--shadow-down-soft-s);
                ${selectNewTokens.disclosureIconColor}: var(--text-secondary);
                ${selectNewTokens.disclosureIconColorHover}: var(--text-secondary-hover);
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

                ${selectNewTokens.labelColor}: var(--text-primary);
                ${selectNewTokens.innerLabelColor}: var(--text-secondary);
                ${selectNewTokens.helperTextColor}: var(--text-secondary);
                ${selectNewTokens.placeholderColor}: var(--text-secondary);

                ${selectNewTokens.targetColor}: var(--text-primary);
                ${selectNewTokens.targetArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);
                ${selectNewTokens.targetTextfieldBackgroundColor}: var(--surface-transparent-primary);
                ${selectNewTokens.targetTextfieldBackgroundColorOpened}: var(--surface-transparent-secondary);
            `,
            accent: css`
                ${selectNewTokens.targetColor}: var(--on-dark-text-primary);
                ${selectNewTokens.targetArrowColor}: var(--on-dark-text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}: var(--surface-accent);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${selectNewTokens.targetColor}: var(--text-primary);
                ${selectNewTokens.targetArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${selectNewTokens.targetColor}: var(--text-primary);
                ${selectNewTokens.targetArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}: var(--surface-clear);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-clear);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--surface-clear);
            `,
            positive: css`
                ${selectNewTokens.targetColor}: var(--on-dark-text-primary);
                ${selectNewTokens.targetArrowColor}: var(--on-dark-text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--surface-positive);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--surface-positive-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--surface-positive-active);

                ${selectNewTokens.labelColor}: var(--text-primary);
                ${selectNewTokens.innerLabelColor}: var(--text-secondary);
                ${selectNewTokens.helperTextColor}: var(--text-positive);
                ${selectNewTokens.placeholderColor}: var(--text-secondary);

                ${selectNewTokens.targetTextfieldBackgroundColor}: var(--surface-transparent-positive);
                ${selectNewTokens.targetTextfieldBackgroundColorOpened}: var(--surface-transparent-positive-active);
            `,
            warning: css`
                ${selectNewTokens.targetColor}:var(--on-dark-text-primary);
                ${selectNewTokens.targetArrowColor}:var(--on-dark-text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--surface-warning);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--surface-warning-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--surface-warning-active);

                ${selectNewTokens.labelColor}: var(--text-primary);
                ${selectNewTokens.innerLabelColor}: var(--text-secondary);
                ${selectNewTokens.helperTextColor}: var(--text-warning);
                ${selectNewTokens.placeholderColor}: var(--text-secondary);

                ${selectNewTokens.targetTextfieldBackgroundColor}: var(--surface-transparent-warning);
                ${selectNewTokens.targetTextfieldBackgroundColorOpened}: var(--surface-transparent-warning-active);
            `,
            negative: css`
                ${selectNewTokens.targetColor}:var(--on-dark-text-primary);
                ${selectNewTokens.targetArrowColor}:var(--on-dark-text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--surface-negative);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-negative-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--surface-negative-active);

                ${selectNewTokens.labelColor}: var(--text-primary);
                ${selectNewTokens.innerLabelColor}: var(--text-secondary);
                ${selectNewTokens.helperTextColor}: var(--text-negative);
                ${selectNewTokens.placeholderColor}: var(--text-secondary);

                ${selectNewTokens.targetTextfieldBackgroundColor}: var(--surface-transparent-negative);
                ${selectNewTokens.targetTextfieldBackgroundColorOpened}: var(--surface-transparent-negative-active);
            `,
            dark: css`
                ${selectNewTokens.targetColor}:var(--on-dark-text-primary);
                ${selectNewTokens.targetArrowColor}:var(--on-dark-text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--on-light-surface-transparent-deep);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--on-light-surface-transparent-deep-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${selectNewTokens.targetColor}:var(--on-dark-text-primary);
                ${selectNewTokens.targetArrowColor}:var(--on-dark-text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--on-light-surface-solid-default);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--on-light-surface-solid-default-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${selectNewTokens.targetColor}: var(--on-light-text-primary);
                ${selectNewTokens.targetArrowColor}: var(--on-light-text-secondary);
                ${selectNewTokens.targetArrowColorHover}: var(--on-light-text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--on-dark-surface-solid-default);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--on-dark-surface-solid-default-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--on-dark-surface-solid-default-active);
            `,
        },
    },
};
