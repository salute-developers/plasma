import { css } from '@linaria/core';

import { notificationTokens } from '../../../components/Notification';

export const config = {
    defaults: {
        view: 'default',
        closeIconType: 'default',
    },
    variations: {
        view: {
            default: css`
                ${notificationTokens.titleColor}: var(--text-primary);
                ${notificationTokens.contentLeftIconColor}: var(--text-primary);
                ${notificationTokens.contentColor}: var(--text-secondary);
                ${notificationTokens.background}: var(--surface-transparent-card);
                ${notificationTokens.borderRadius}: 0.75rem;
                ${notificationTokens.padding}: 0.375rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0.1875rem;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;

                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.375rem;
                ${notificationTokens.contentTopIconMargin}: 0.5rem;

                ${notificationTokens.contentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.contentFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.contentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.contentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${notificationTokens.contentFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.contentFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.titleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.titleFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.titleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.titleFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${notificationTokens.titleFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.titleFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.closeIconColor}: var(--text-tertiary);
                ${notificationTokens.closeIconColorOnHover}: var(--text-primary);

                ${notificationTokens.horizontalLayoutGap}: 0.375rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;
            `,
            negative: css`
                ${notificationTokens.titleColor}: var(--text-negative);
                ${notificationTokens.contentLeftIconColor}: var(--text-negative);
                ${notificationTokens.contentColor}: var(--text-secondary);
                ${notificationTokens.background}: var(--surface-transparent-card);
                ${notificationTokens.borderRadius}: 0.75rem;
                ${notificationTokens.padding}: 0.375rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0.1875rem;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;

                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.375rem;
                ${notificationTokens.contentTopIconMargin}: 0.5rem;

                ${notificationTokens.contentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.contentFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.contentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.contentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${notificationTokens.contentFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.contentFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.titleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.titleFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.titleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.titleFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${notificationTokens.titleFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.titleFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.closeIconColor}: var(--text-tertiary);
                ${notificationTokens.closeIconColorOnHover}: var(--text-primary);

                ${notificationTokens.horizontalLayoutGap}: 0.375rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;
            `,
            positive: css`
                ${notificationTokens.titleColor}: var(--text-positive);
                ${notificationTokens.contentLeftIconColor}: var(--text-positive);
                ${notificationTokens.contentColor}: var(--text-secondary);
                ${notificationTokens.background}: var(--surface-transparent-card);
                ${notificationTokens.borderRadius}: 0.75rem;
                ${notificationTokens.padding}: 0.375rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0.1875rem;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;

                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.375rem;
                ${notificationTokens.contentTopIconMargin}: 0.5rem;

                ${notificationTokens.contentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.contentFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.contentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.contentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${notificationTokens.contentFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.contentFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.titleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.titleFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.titleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.titleFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${notificationTokens.titleFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.titleFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.closeIconColor}: var(--text-tertiary);
                ${notificationTokens.closeIconColorOnHover}: var(--text-primary);

                ${notificationTokens.horizontalLayoutGap}: 0.375rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;
            `,
            warning: css`
                ${notificationTokens.titleColor}: var(--text-warning);
                ${notificationTokens.contentLeftIconColor}: var(--text-warning);
                ${notificationTokens.contentColor}: var(--text-secondary);
                ${notificationTokens.background}: var(--surface-transparent-card);
                ${notificationTokens.borderRadius}: 0.75rem;
                ${notificationTokens.padding}: 0.375rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0.1875rem;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;

                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.375rem;
                ${notificationTokens.contentTopIconMargin}: 0.5rem;

                ${notificationTokens.contentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.contentFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.contentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.contentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${notificationTokens.contentFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.contentFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.titleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.titleFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.titleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.titleFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${notificationTokens.titleFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.titleFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.closeIconColor}: var(--text-tertiary);
                ${notificationTokens.closeIconColorOnHover}: var(--text-primary);

                ${notificationTokens.horizontalLayoutGap}: 0.375rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;
            `,
            info: css`
                ${notificationTokens.titleColor}: var(--text-info);
                ${notificationTokens.contentLeftIconColor}: var(--text-info);
                ${notificationTokens.contentColor}: var(--text-secondary);
                ${notificationTokens.background}: var(--surface-transparent-card);
                ${notificationTokens.borderRadius}: 0.75rem;
                ${notificationTokens.padding}: 0.375rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0.1875rem;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;

                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.375rem;
                ${notificationTokens.contentTopIconMargin}: 0.5rem;

                ${notificationTokens.contentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.contentFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.contentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.contentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${notificationTokens.contentFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.contentFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.titleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${notificationTokens.titleFontSize}: var(--plasma-typo-body-s-font-size);
                ${notificationTokens.titleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${notificationTokens.titleFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${notificationTokens.titleFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${notificationTokens.titleFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${notificationTokens.closeIconColor}: var(--text-tertiary);
                ${notificationTokens.closeIconColorOnHover}: var(--text-primary);

                ${notificationTokens.horizontalLayoutGap}: 0.375rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;
            `,
        },
        layout: {
            horizontal: css`
                ${notificationTokens.width}: 25rem;
                ${notificationTokens.horizontalLayoutPadding}: 1rem 0.5rem 1rem 0.875rem;
            `,
            vertical: css`
                ${notificationTokens.width}: 15rem;
                ${notificationTokens.padding}: 0.375rem;
            `,
        },
        size: {
            xs: css`
                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.padding}: 0.375rem;
                ${notificationTokens.textboxPaddingTopWithTopIcon}: 0rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.buttonsMarginLeft}: 0rem;
            `,
            xxs: css`
                ${notificationTokens.closeIconTop}: 0.8125rem;
                ${notificationTokens.closeIconRight}: 1rem;

                ${notificationTokens.padding}: 0.5625rem 1rem 1rem 1rem;
                ${notificationTokens.textboxPaddingTopWithTopIcon}: 0.1875rem;

                ${notificationTokens.contentPaddingTop}: 0.25rem;
                ${notificationTokens.contentPaddingRight}: 0rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0rem;

                ${notificationTokens.buttonsMarginLeft}: 2rem;
            `,
        },
        closeIconType: {
            default: css`
                ${notificationTokens.closeIconButtonSize}: 1.5rem;
                ${notificationTokens.closeIconSize}: 1.5rem;
            `,
            thin: css`
                ${notificationTokens.closeIconButtonSize}: 1.5rem;
                ${notificationTokens.closeIconSize}: 1.5rem;
            `,
        },
    },
};
