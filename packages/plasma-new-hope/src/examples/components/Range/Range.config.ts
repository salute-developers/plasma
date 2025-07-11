import { css } from '@linaria/core';

import { rangeTokens as tokens } from '../../../components/Range';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-transparent-primary);
                ${tokens.backgroundError}: var(--surface-transparent-negative);
                ${tokens.backgroundSuccess}: var(--surface-transparent-positive);

                ${tokens.dividerColor}: var(--text-primary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);
                ${tokens.leftHelperColorError}: var(--text-negative);
                ${tokens.leftHelperColorSuccess}: var(--text-positive);

                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.textFieldBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-secondary);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-negative);
                ${tokens.textFieldBackgroundErrorColorHover}: var(--surface-transparent-negative-hover);
                ${tokens.textFieldBackgroundErrorColorFocus}: var(--surface-transparent-negative-active);
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-transparent-positive);
                ${tokens.textFieldBackgroundSuccessColorHover}: var(--surface-transparent-positive-hover);
                ${tokens.textFieldBackgroundSuccessColorFocus}: var(--surface-transparent-positive-active);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.indicatorColor}: var(--surface-negative);

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
            `,
        },
        size: {
            l: css`
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.leftContentMargin}: 0 0 0 1rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.75rem;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;
            `,
            m: css`
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.875rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.625rem;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.6875rem auto auto;
            `,
            s: css`
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.5rem;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;
            `,
            xs: css`
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.375rem;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.6875rem auto auto;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: var(--surface-transparent-primary);
                ${tokens.labelColorReadOnly}: var(--text-primary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.dividerColorReadOnly}: var(--text-secondary);
                ${tokens.readOnlyOpacity}: 0.4;
                ${tokens.dividerOpacityReadOnly}: 0.4;
                ${tokens.rightContentOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
