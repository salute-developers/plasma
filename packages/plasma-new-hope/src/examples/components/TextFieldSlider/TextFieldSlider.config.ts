import { css } from '@linaria/core';

import { tokens } from '../../../components/TextFieldSlider/TextFieldSlider.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        sliderView: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.textFieldErrorColor}: var(--text-negative);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-negative);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.textFieldBackgroundColorHover}: var(--surface-transparent-primary-active);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-secondary);

                ${tokens.textFieldBorderColor}: var(--surface-transparent-tertiary);
                ${tokens.textFieldBorderColorHover}: var(--text-secondary);
                ${tokens.textFieldBorderColorFocus}: var(--surface-accent);

                ${tokens.labelColor}: var(--text-primary);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.optionalColor}: var(--text-tertiary);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentRightSlotColorActive}: var(--text-secondary-active);

                ${tokens.sliderTrackBackground}: var(--surface-solid-tertiary);
                ${tokens.sliderThumbBackground}: var(--on-light-surface-solid-card);
                ${tokens.sliderThumbBorderBoxShadow}: 0 0 0 0.063rem var(--on-light-surface-transparent-tertiary);
                ${tokens.sliderThumbBorderBoxShadowFocus}: 0 0 0 0.063rem var(--surface-solid-default);

                ${tokens.scaleValueColor}: var(--text-secondary);
            `,
            positive: css`
                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.textFieldErrorColor}: var(--text-negative);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-negative);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-positive);
                ${tokens.textFieldBackgroundColorHover}: var(--surface-transparent-positive-active);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-positive-active);

                ${tokens.labelColor}: var(--text-primary);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.optionalColor}: var(--text-tertiary);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentRightSlotColorActive}: var(--text-secondary-active);

                ${tokens.sliderTrackBackground}: var(--surface-solid-tertiary);
                ${tokens.sliderThumbBackground}: var(--on-light-surface-solid-card);
                ${tokens.sliderThumbBorderBoxShadow}: 0 0 0 0.063rem var(--on-light-surface-transparent-tertiary);
                ${tokens.sliderThumbBorderBoxShadowFocus}: 0 0 0 0.063rem var(--surface-solid-default);

                ${tokens.scaleValueColor}: var(--text-secondary);
            `,
            warning: css`
                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.textFieldErrorColor}: var(--text-negative);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-negative);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-warning);
                ${tokens.textFieldBackgroundColorHover}: var(--surface-transparent-warning-active);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-warning-active);

                ${tokens.labelColor}: var(--text-primary);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.optionalColor}: var(--text-tertiary);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentRightSlotColorActive}: var(--text-secondary-active);

                ${tokens.sliderTrackBackground}: var(--surface-solid-tertiary);
                ${tokens.sliderThumbBackground}: var(--on-light-surface-solid-card);
                ${tokens.sliderThumbBorderBoxShadow}: 0 0 0 0.063rem var(--on-light-surface-transparent-tertiary);
                ${tokens.sliderThumbBorderBoxShadowFocus}: 0 0 0 0.063rem var(--surface-solid-default);

                ${tokens.scaleValueColor}: var(--text-secondary);
            `,
            negative: css`
                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.textFieldErrorColor}: var(--text-negative);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-negative);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-negative);
                ${tokens.textFieldBackgroundColorHover}: var(--surface-transparent-negative-active);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-negative-active);

                ${tokens.labelColor}: var(--text-primary);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.optionalColor}: var(--text-tertiary);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentRightSlotColorActive}: var(--text-secondary-active);

                ${tokens.sliderTrackBackground}: var(--surface-solid-tertiary);
                ${tokens.sliderThumbBackground}: var(--on-light-surface-solid-card);
                ${tokens.sliderThumbBorderBoxShadow}: 0 0 0 0.063rem var(--on-light-surface-transparent-tertiary);
                ${tokens.sliderThumbBorderBoxShadowFocus}: 0 0 0 0.063rem var(--surface-solid-default);

                ${tokens.scaleValueColor}: var(--text-secondary);
            `,
        },
        sliderView: {
            default: css`
                ${tokens.sliderProgressBackground}: var(--surface-solid-default);
            `,
            accent: css`
                ${tokens.sliderProgressBackground}: var(--surface-accent);
            `,
            gradient: css`
                ${tokens.sliderProgressBackground}: var(--surface-accent-gradient);
            `,
        },
        size: {
            xl: css`
                ${tokens.textFieldHeight}: 4rem;
                ${tokens.textFieldBorderRadius}: 1rem;
                ${tokens.textFieldPadding}: 1.3125rem 1.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.8125rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.813rem 0 0.813rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.82rem -2.938rem auto auto;

                ${tokens.sliderContainerOffset}: 0.25rem;

                ${tokens.sliderTrackHeight}: 0.25rem;
                ${tokens.sliderTrackBorderRadius}: 100%;
                ${tokens.sliderThumbSize}: 1rem;

                ${tokens.scaleWrapperOffset}: 0.25rem;
                ${tokens.scaleWrapperPaddingTop}: 0.25rem;

                ${tokens.scaleValueFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.scaleValueFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.scaleValueFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.scaleValueFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.scaleValueLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.scaleValueLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;

                ${tokens.sliderContainerOffset}: 0.25rem;

                ${tokens.sliderTrackHeight}: 0.25rem;
                ${tokens.sliderTrackBorderRadius}: 100%;
                ${tokens.sliderThumbSize}: 1rem;

                ${tokens.scaleWrapperOffset}: 0.25rem;
                ${tokens.scaleWrapperPaddingTop}: 0.25rem;

                ${tokens.scaleValueFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.scaleValueFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.scaleValueFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.scaleValueFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.scaleValueLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.scaleValueLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.6875rem auto auto;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;

                ${tokens.sliderContainerOffset}: 0.25rem;

                ${tokens.sliderTrackHeight}: 0.25rem;
                ${tokens.sliderTrackBorderRadius}: 100%;
                ${tokens.sliderThumbSize}: 1rem;

                ${tokens.scaleWrapperOffset}: 0.25rem;
                ${tokens.scaleWrapperPaddingTop}: 0.25rem;

                ${tokens.scaleValueFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.scaleValueFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.scaleValueFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.scaleValueFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.scaleValueLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.scaleValueLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.688rem auto auto;

                ${tokens.sliderContainerOffset}: 0.25rem;

                ${tokens.sliderTrackHeight}: 0.25rem;
                ${tokens.sliderTrackBorderRadius}: 100%;
                ${tokens.sliderThumbSize}: 1rem;

                ${tokens.scaleWrapperOffset}: 0.25rem;
                ${tokens.scaleWrapperPaddingTop}: 0.25rem;

                ${tokens.scaleValueFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.scaleValueFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.scaleValueFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.scaleValueFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.scaleValueLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.scaleValueLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xs: css`
                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelOffset}: 0.375rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.6875rem auto auto;

                ${tokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;

                ${tokens.sliderContainerOffset}: 0.25rem;

                ${tokens.sliderTrackHeight}: 0.25rem;
                ${tokens.sliderTrackBorderRadius}: 100%;
                ${tokens.sliderThumbSize}: 1rem;

                ${tokens.scaleWrapperOffset}: 0.25rem;
                ${tokens.scaleWrapperPaddingTop}: 0.25rem;

                ${tokens.scaleValueFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.scaleValueFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.scaleValueFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.scaleValueFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.scaleValueLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.scaleValueLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        hintView: {
            default: css`
                ${tokens.hintTooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${tokens.hintTooltipBoxShadow}: var(--shadow-down-hard-m);
                ${tokens.hintTooltipColor}: var(--text-primary);
                ${tokens.hintTooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
        },
        hintSize: {
            m: css`
                ${tokens.hintTooltipPaddingTop}: 0.6875rem;
                ${tokens.hintTooltipPaddingRight}: 0.875rem;
                ${tokens.hintTooltipPaddingBottom}: 0.6875rem;
                ${tokens.hintTooltipPaddingLeft}: 0.875rem;

                ${tokens.hintTooltipMinHeight}: 2.5rem;
                ${tokens.hintTooltipBorderRadius}: 0.625rem;

                ${tokens.hintTooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.hintTooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.hintTooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.hintTooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.hintTooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.hintTooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.hintTooltipContentLeftMargin}: 0.375rem;

                ${tokens.hintTooltipArrowMaskWidth}: 1.25rem;
                ${tokens.hintTooltipArrowMaskHeight}: 1.25rem;
                ${tokens.hintTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.hintTooltipArrowHeight}: 0.5rem;
                ${tokens.hintTooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.hintTooltipPaddingTop}: 0.5rem;
                ${tokens.hintTooltipPaddingRight}: 0.75rem;
                ${tokens.hintTooltipPaddingBottom}: 0.5rem;
                ${tokens.hintTooltipPaddingLeft}: 0.75rem;

                ${tokens.hintTooltipMinHeight}: 2rem;
                ${tokens.hintTooltipBorderRadius}: 0.5rem;

                ${tokens.hintTooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.hintTooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.hintTooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.hintTooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.hintTooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.hintTooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.hintTooltipContentLeftMargin}: 0.25rem;

                ${tokens.hintTooltipArrowMaskWidth}: 1rem;
                ${tokens.hintTooltipArrowMaskHeight}: 1rem;
                ${tokens.hintTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.hintTooltipArrowHeight}: 0.375rem;
                ${tokens.hintTooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.labelColorReadOnly}: var(--text-primary);

                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.textFieldBorderColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);

                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.textFieldReadOnlyOpacity}: 0.1;
            `,
        },
    },
};
