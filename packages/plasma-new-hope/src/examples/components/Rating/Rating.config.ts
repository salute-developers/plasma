import { css } from '@linaria/core';

import { ratingTokens as tokens } from '../../../components/Rating';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.helperTextColor}: var(--text-secondary);
                ${tokens.iconColor}: var(--text-primary);
                ${tokens.outlineIconColor}: var(--text-primary);
            `,
            accent: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.helperTextColor}: var(--text-secondary);
                // TODO: change with token data-yellow, when it will be added to theme
                ${tokens.iconColor}: #F3A912;
                ${tokens.outlineIconColor}: var(--text-tertiary);
            `,
        },
        size: {
            l: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1.25rem;
            `,
            m: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1.25rem;
            `,
            s: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1rem;
            `,
            xs: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.iconSize}: 0.75rem;
                ${tokens.actualIconSize}: 1rem;
                ${tokens.scaleFactor}: 0.75;
            `,
            xxs: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xxs-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.contentGap}: 0.375rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 0.75rem;
                ${tokens.actualIconSize}: 1rem;
                ${tokens.scaleFactor}: 0.75;
            `,
            h1: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-h1-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h1-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h1-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h1-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h1-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h1-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.contentGap}: 1rem;
                ${tokens.singleIconContentGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.25rem;
                ${tokens.iconSizeLarge}: 3rem;
                ${tokens.iconSizeMedium}: 3rem;
                ${tokens.iconSizeSmall}: 2.25rem;

                ${tokens.singleIconMarginBottom}: 0.25rem;
                ${tokens.singleIconSizeLarge}: 3rem;
                ${tokens.singleIconSizeMedium}: 3rem;
                ${tokens.singleIconSizeSmall}: 2.25rem;
            `,
            h2: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-h2-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h2-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h2-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h2-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h2-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.contentGap}: 0.875rem;
                ${tokens.singleIconContentGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.25rem;
                ${tokens.iconSizeLarge}: 2rem;
                ${tokens.iconSizeMedium}: 1.75rem;
                ${tokens.iconSizeSmall}: 1.5rem;

                ${tokens.singleIconMarginBottom}: 0.25rem;
                ${tokens.singleIconSizeLarge}: 2rem;
                ${tokens.singleIconSizeMedium}: 1.75rem;
                ${tokens.singleIconSizeSmall}: 1.5rem;
            `,
            h3: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h3-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.75rem;
                ${tokens.singleIconContentGap}: 0.375rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.75rem;
                ${tokens.iconSizeMedium}: 1.5rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.75rem;
                ${tokens.singleIconSizeMedium}: 1.5rem;
                ${tokens.singleIconSizeSmall}: 1.25rem;
            `,
            h4: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h4-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h4-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.5rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.5rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1.25rem;
            `,
            h5: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.25rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.25rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1rem;
            `,
            h6: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-h6-font-family);
                ${tokens.fontSize}: var(--plasma-typo-h6-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-h6-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-h6-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-h6-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-h6-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.25rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.25rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1rem;
            `,
            displayL: css`
                ${tokens.gap}: 0.375rem;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-l-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.625rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 4rem;
                ${tokens.iconSizeMedium}: 3rem;
                ${tokens.iconSizeSmall}: 2.25rem;

                ${tokens.singleIconMarginBottom}: 0.5rem;
                ${tokens.singleIconSizeLarge}: 7.5rem;
                ${tokens.singleIconSizeMedium}: 7rem;
                ${tokens.singleIconSizeSmall}: 5.5rem;
            `,
            displayM: css`
                ${tokens.gap}: 0.375rem;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-m-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 3rem;
                ${tokens.iconSizeMedium}: 2.25rem;
                ${tokens.iconSizeSmall}: 1.75rem;

                ${tokens.singleIconMarginBottom}: 0.5rem;
                ${tokens.singleIconSizeLarge}: 5.25rem;
                ${tokens.singleIconSizeMedium}: 4.5rem;
                ${tokens.singleIconSizeSmall}: 4rem;
            `,
            displayS: css`
                ${tokens.gap}: 0.375rem;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-dspl-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-dspl-s-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.375rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 2rem;
                ${tokens.iconSizeMedium}: 1.5rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.313rem;
                ${tokens.singleIconSizeLarge}: 4rem;
                ${tokens.singleIconSizeMedium}: 3.5rem;
                ${tokens.singleIconSizeSmall}: 2.75rem;
            `,
        },
    },
};
