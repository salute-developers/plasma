import { css, autocompleteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldClearColor}: var(--text-primary);

                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldClearPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldClearPlaceholderColorFocus}: var(--text-tertiary);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: var(--text-secondary);
                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${tokens.textFieldDividerColor}: var(--surface-transparent-tertiary);
                ${tokens.textFieldDividerColorHover}: var(--text-secondary);
                ${tokens.textFieldDividerColorFocus}: var(--surface-accent);

                ${tokens.textFieldBorderColor}: var(--outline-clear);
                ${tokens.textFieldBorderColorFocus}: var(--outline-solid-secondary);
                ${tokens.textFieldBorderColorHover}: var(--outline-clear);

                ${tokens.textFieldBoxShadow}: var(--shadow-down-soft-s);

                ${tokens.background}: var(--surface-solid-card);
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: var(--plasma-colors-transparent);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemColor}: var(--text-primary);

                ${tokens.infiniteLoaderSpinnerColor}: var(--text-primary);

                ${tokens.textFieldHintIconColor}: var(--text-secondary);
            `,
            positive: css`
                ${tokens.textFieldColor}: color-mix(in oklab, var(--text-positive) 70%, transparent);
                ${tokens.textFieldClearColor}: color-mix(in oklab, var(--text-positive) 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldClearPlaceholderColor}: var(--text-positive);
                ${tokens.textFieldClearPlaceholderColorFocus}: var(--text-positive);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, var(--text-positive) 70%, transparent);
                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${tokens.textFieldDividerColor}: var(--surface-positive);
                ${tokens.textFieldDividerColorHover}: var(--surface-positive);
                ${tokens.textFieldDividerColorFocus}: var(--surface-accent);

                ${tokens.textFieldBorderColor}: var(--outline-positive-minor);
                ${tokens.textFieldBorderColorFocus}: var(--outline-positive-minor-active);
                ${tokens.textFieldBorderColorHover}: var(--outline-positive-minor-hover);

                ${tokens.textFieldBoxShadow}: var(--shadow-down-soft-s);

                ${tokens.background}: var(--surface-solid-card);
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: var(--plasma-colors-transparent);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemColor}: var(--text-primary);

                ${tokens.infiniteLoaderSpinnerColor}: var(--text-primary);

                ${tokens.textFieldHintIconColor}: var(--text-secondary);
            `,
            warning: css`
                ${tokens.textFieldColor}: color-mix(in oklab, var(--text-warning) 70%, transparent);
                ${tokens.textFieldClearColor}: color-mix(in oklab, var(--text-warning) 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldClearPlaceholderColor}: var(--text-warning);
                ${tokens.textFieldClearPlaceholderColorFocus}: var(--text-warning);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, var(--text-warning) 70%, transparent);
                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${tokens.textFieldDividerColor}: var(--surface-warning);
                ${tokens.textFieldDividerColorHover}: var(--surface-warning);
                ${tokens.textFieldDividerColorFocus}: var(--surface-accent);

                ${tokens.textFieldBorderColor}: var(--outline-warning-minor);
                ${tokens.textFieldBorderColorFocus}: var(--outline-warning-minor-active);
                ${tokens.textFieldBorderColorHover}: var(--outline-warning-minor-hover);

                ${tokens.textFieldBoxShadow}: var(--shadow-down-soft-s);

                ${tokens.background}: var(--surface-solid-card);
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: var(--plasma-colors-transparent);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemColor}: var(--text-primary);

                ${tokens.infiniteLoaderSpinnerColor}: var(--text-primary);

                ${tokens.textFieldHintIconColor}: var(--text-secondary);
            `,
            negative: css`
                ${tokens.textFieldColor}: color-mix(in oklab, var(--text-negative) 70%, transparent);
                ${tokens.textFieldClearColor}: color-mix(in oklab, var(--text-negative) 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldClearPlaceholderColor}: var(--text-negative);
                ${tokens.textFieldClearPlaceholderColorFocus}: var(--text-negative);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, var(--text-negative) 70%, transparent);
                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${tokens.textFieldDividerColor}: var(--surface-negative);
                ${tokens.textFieldDividerColorHover}: var(--surface-negative);
                ${tokens.textFieldDividerColorFocus}: var(--surface-accent);

                ${tokens.textFieldBorderColor}: var(--outline-negative-minor);
                ${tokens.textFieldBorderColorFocus}: var(--outline-negative-minor-active);
                ${tokens.textFieldBorderColorHover}: var(--outline-negative-minor-hover);

                ${tokens.textFieldBoxShadow}: var(--shadow-down-soft-s);

                ${tokens.background}: var(--surface-solid-card);
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: var(--plasma-colors-transparent);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemColor}: var(--text-primary);

                ${tokens.infiniteLoaderSpinnerColor}: var(--text-primary);

                ${tokens.textFieldHintIconColor}: var(--text-secondary);
            `,
        },
        size: {
            xl: css`
                ${tokens.textFieldHeight}: 4rem;
                ${tokens.textFieldPadding}: 1.375rem 1.25rem;
                ${tokens.textFieldBorderRadius}: 1rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.625rem -0.125rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem 0rem -0.125rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.8125rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.938rem 0 0.813rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.75rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.75rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.75rem -2.488rem auto auto;

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.82rem -2.938rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.82rem -2.063rem auto auto;

                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 1.25rem 1.125rem;
                ${tokens.itemBorderRadius}: 0.875rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.emptyStatePadding}: 2rem 1.125rem 1.125rem 1.125rem;
                ${tokens.emptyStateGap}: 0.75rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.625rem;
            `,
            l: css`
                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.625rem -0.0625rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0rem -0.0625rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;

                ${tokens.borderRadius}: 0.875rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 1rem;
                ${tokens.itemBorderRadius}: 0.75rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.emptyStatePadding}: 2rem 1rem 1rem 1rem;
                ${tokens.emptyStateGap}: 0.5rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.5rem;
            `,
            m: css`
                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.625rem -0.125rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem 0rem -0.125rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelOffset}: 0.625rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.25rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.6875rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.25rem -2.25rem auto auto;

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 0.875rem;
                ${tokens.itemBorderRadius}: 0.625rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.emptyStatePadding}: 1.625rem 0.875rem 0.875rem 0.875rem;
                ${tokens.emptyStateGap}: 0.375rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.375rem;
            `,
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.75rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.5rem -0.1875rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem 0rem -0.1875rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.375rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.25rem auto auto -0.6875rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;

                ${tokens.textFieldHintCustomIconTargetSize}:1rem;
                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.062rem -2.1875rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.062rem -1.938rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -1.988rem auto auto;

                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 0.75rem 0.625rem;
                ${tokens.itemBorderRadius}: 0.5rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.emptyStatePadding}: 1.375rem 0.625rem 0.625rem 0.625rem;
                ${tokens.emptyStateGap}: 0.25rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.25rem;
            `,
            xs: css`
                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldPadding}: 0.5rem 0.625rem 0.5rem 0.625rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0rem -0.0625rem 0.625rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelOffset}: 0.375rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.375rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.125rem -0.6875rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 0.813rem -1.875rem auto auto;

                ${tokens.textFieldHintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;

                ${tokens.borderRadius}: 0.5rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 0.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.emptyStatePadding}: 1rem 0.5rem 0.5rem 0.5rem;
                ${tokens.emptyStateGap}: 0.25rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1rem;
                ${tokens.infiniteLoaderGap}: 0.25rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
            `,
            outer: css``,
        },
        hintView: {
            default: css`
                ${tokens.textFieldTooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${tokens.textFieldTooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.textFieldTooltipColor}: var(--text-primary);
                ${tokens.textFieldTooltipArrowBackground}: var(--surface-solid-card);
            `,
        },
        hintSize: {
            m: css`
                ${tokens.textFieldTooltipPaddingTop}: 0.6875rem;
                ${tokens.textFieldTooltipPaddingRight}: 0.875rem;
                ${tokens.textFieldTooltipPaddingBottom}: 0.6875rem;
                ${tokens.textFieldTooltipPaddingLeft}: 0.875rem;
                ${tokens.textFieldTooltipMinHeight}: 2.5rem;
                ${tokens.textFieldTooltipBorderRadius}: 0.625rem;
                ${tokens.textFieldTooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldTooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldTooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldTooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldTooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldTooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.textFieldTooltipContentLeftMargin}: 0.375rem;
                ${tokens.textFieldTooltipArrowMaskWidth}: 1.25rem;
                ${tokens.textFieldTooltipArrowMaskHeight}: 1.25rem;
                ${tokens.textFieldTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.textFieldTooltipArrowHeight}: 0.5rem;
                ${tokens.textFieldTooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.textFieldTooltipPaddingTop}: 0.5rem;
                ${tokens.textFieldTooltipPaddingRight}: 0.75rem;
                ${tokens.textFieldTooltipPaddingBottom}: 0.5rem;
                ${tokens.textFieldTooltipPaddingLeft}: 0.75rem;
                ${tokens.textFieldTooltipMinHeight}: 2rem;
                ${tokens.textFieldTooltipBorderRadius}: 0.5rem;
                ${tokens.textFieldTooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldTooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldTooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldTooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldTooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldTooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.textFieldTooltipContentLeftMargin}: 0.25rem;
                ${tokens.textFieldTooltipArrowMaskWidth}: 1rem;
                ${tokens.textFieldTooltipArrowMaskHeight}: 1rem;
                ${tokens.textFieldTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.textFieldTooltipArrowHeight}: 0.375rem;
                ${tokens.textFieldTooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.textFieldDisabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-solid-secondary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-primary);
                ${tokens.textFieldLeftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLabelColorReadOnly}: var(--text-primary);
                ${tokens.textFieldDividerColorReadOnly}: var(--surface-transparent-primary);
            `,
        },
    },
};
