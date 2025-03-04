import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
    },
    variations: {
        size: {
            xs: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.312rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.5rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.5rem;
                ${textAreaTokens.inputPaddingTop}: 0.563rem;
                ${textAreaTokens.inputPaddingRight}: 0.625rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 2.125rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 1.5rem;
                ${textAreaTokens.inputPaddingBottom}: 0.563rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.563rem;
                ${textAreaTokens.inputPaddingLeft}: 0.625rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 0.563rem;
                ${textAreaTokens.rightContentRight}: 0.5rem;
                ${textAreaTokens.rightContentHeight}: 1rem;
                ${textAreaTokens.labelMarginBottom}: 0.375rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: 'SB Sans Text','SBSansText',sans-serif;
                ${textAreaTokens.labelInnerFontSize}: 0.625rem;
                ${textAreaTokens.labelInnerFontStyle}: normal;
                ${textAreaTokens.labelInnerFontWeight}: 400;
                ${textAreaTokens.labelInnerLetterSpacing}: -0.02em;
                ${textAreaTokens.labelInnerLineHeight}: 0.75rem;
                ${textAreaTokens.labelInnerTop}: 0rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.675rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${textAreaTokens.clearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;
                ${textAreaTokens.clearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.187rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.625rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem;
                ${textAreaTokens.inputPaddingTop}: 0.688rem;
                ${textAreaTokens.inputPaddingRight}: 0.875rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 2rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 0.688rem;
                ${textAreaTokens.rightContentRight}: 0.75rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.5rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-footnote1-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-footnote1-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-footnote1-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-footnote1-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-footnote1-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-footnote1-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.063rem -2.238rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: 0.062rem -2.688rem auto auto;
                ${textAreaTokens.clearHintInnerLabelPlacementOffset}: 0.062rem -2.188rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7rem;
                ${textAreaTokens.inputMinHeight}: 1.125rem;
                ${textAreaTokens.borderRadius}: 0.75rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingTop}: 0.875rem;
                ${textAreaTokens.inputPaddingRight}: 1rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.375rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 2.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 0.875rem;
                ${textAreaTokens.rightContentRight}: 0.875rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.625rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body1-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body1-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body1-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body1-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body1-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body1-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.5rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.4375rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.1875rem -0.625rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}:0.312rem -2.813rem auto auto;
                ${textAreaTokens.clearHintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 6.812rem;
                ${textAreaTokens.inputMinHeight}: 1.625rem;
                ${textAreaTokens.borderRadius}: 0.875rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.875rem;
                ${textAreaTokens.inputPaddingTop}: 1rem;
                ${textAreaTokens.inputPaddingRight}: 1.125rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.625rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 2.25rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1.125rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 1.063rem;
                ${textAreaTokens.rightContentRight}: 1rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.75rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.labelInnerTop}: 0.5625rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: 'SB Sans Text','SBSansText',sans-serif;
                ${textAreaTokens.inputFontSize}: 1.125rem;
                ${textAreaTokens.inputFontStyle}: normal;
                ${textAreaTokens.inputFontWeight}: 400;
                ${textAreaTokens.inputLetterSpacing}: -0.02em;
                ${textAreaTokens.inputLineHeight}: 1.375rem;
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.5rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.5rem -2.25rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;
                ${textAreaTokens.clearHintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xl: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 6.812rem;
                ${textAreaTokens.inputMinHeight}: 1.625rem;
                ${textAreaTokens.borderRadius}: 1rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 1rem;
                ${textAreaTokens.inputPaddingTop}: 1.313rem;
                ${textAreaTokens.inputPaddingRight}: 1.25rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.5rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 2.5rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1.25rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 1.25rem;
                ${textAreaTokens.rightContentRight}: 1.25rem;
                ${textAreaTokens.rightContentHeight}: 1.5rem;
                ${textAreaTokens.labelMarginBottom}: 0.75rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${textAreaTokens.labelInnerTop}: 0.813rem;
                ${textAreaTokens.labelInnerTopHelper}: -0.313rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.25rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-l-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-l-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-l-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-l-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.5rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${textAreaTokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: 0.751rem -2.938rem auto auto;
                ${textAreaTokens.clearHintInnerLabelPlacementOffset}: 0.751rem -2.188rem auto auto;
                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        view: {
            default: css`
                ${textAreaTokens.inputBorderColor}: var(--outline-transparent-primary);
                ${textAreaTokens.inputBorderColorHover}: var(--outline-transparent-primary-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--outline-transparent-primary-active);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-accent);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.dividerColorHover}: var(--text-secondary);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${textAreaTokens.inputBorderColor}: var(--outline-transparent-primary);
                ${textAreaTokens.inputBorderColorHover}: var(--outline-transparent-primary-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--outline-transparent-primary-active);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-accent);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.dividerColorHover}: var(--text-secondary);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            positive: css`
                ${textAreaTokens.inputBorderColor}: var(--text-positive);
                ${textAreaTokens.inputBorderColorHover}: var(--text-positive-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--text-positive-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-positive);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-positive);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-positive);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-positive);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-positive);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-positive);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-positive);
                ${textAreaTokens.dividerColorHover}: var(--surface-positive);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            warning: css`
                ${textAreaTokens.inputBorderColor}: var(--text-warning);
                ${textAreaTokens.inputBorderColorHover}: var(--text-warning-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--text-warning-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-warning);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-warning);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-warning);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-warning);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-warning);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-warning);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-warning);
                ${textAreaTokens.dividerColorHover}: var(--surface-warning);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            negative: css`
                ${textAreaTokens.inputBorderColor}: var(--text-negative);
                ${textAreaTokens.inputBorderColorHover}: var(--text-negative-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--text-negative-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-negative);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-negative);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-negative);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-negative);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-negative);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-negative);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-negative);
                ${textAreaTokens.dividerColorHover}: var(--surface-negative);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
        },
        hintView: {
            default: css`
                ${textAreaTokens.tooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${textAreaTokens.tooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${textAreaTokens.tooltipColor}: var(--text-primary);
                ${textAreaTokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
        },
        hintSize: {
            m: css`
                ${textAreaTokens.tooltipPaddingTop}: 0.6875rem;
                ${textAreaTokens.tooltipPaddingRight}: 0.875rem;
                ${textAreaTokens.tooltipPaddingBottom}: 0.6875rem;
                ${textAreaTokens.tooltipPaddingLeft}: 0.875rem;

                ${textAreaTokens.tooltipMinHeight}: 2.5rem;
                ${textAreaTokens.tooltipBorderRadius}: 0.625rem;

                ${textAreaTokens.tooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.tooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.tooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.tooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${textAreaTokens.tooltipContentLeftMargin}: 0.375rem;

                ${textAreaTokens.tooltipArrowMaskWidth}: 1.25rem;
                ${textAreaTokens.tooltipArrowMaskHeight}: 1.25rem;
                ${textAreaTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${textAreaTokens.tooltipArrowHeight}: 0.5rem;
                ${textAreaTokens.tooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${textAreaTokens.tooltipPaddingTop}: 0.5rem;
                ${textAreaTokens.tooltipPaddingRight}: 0.75rem;
                ${textAreaTokens.tooltipPaddingBottom}: 0.5rem;
                ${textAreaTokens.tooltipPaddingLeft}: 0.75rem;

                ${textAreaTokens.tooltipMinHeight}: 2rem;
                ${textAreaTokens.tooltipBorderRadius}: 0.5rem;

                ${textAreaTokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${textAreaTokens.tooltipContentLeftMargin}: 0.25rem;

                ${textAreaTokens.tooltipArrowMaskWidth}: 1rem;
                ${textAreaTokens.tooltipArrowMaskHeight}: 1rem;
                ${textAreaTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${textAreaTokens.tooltipArrowHeight}: 0.375rem;
                ${textAreaTokens.tooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        clear: {
            true: css``,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 0.4;
                ${textAreaTokens.inputColorDisabled}: var(--text-secondary);
                ${textAreaTokens.dividerColorReadOnly}: var(--surface-transparent-primary);
                ${textAreaTokens.titleCaptionColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
