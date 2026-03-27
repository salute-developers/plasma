import {
    bodyM,
    bodyMBold,
    bodyS,
    outlineSolidPrimary,
    surfaceSolidCard,
    textAccent,
    textAccentMinor,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, notificationTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        closeIconType: 'thin',
    },
    variations: {
        view: {
            default: css`
                ${notificationTokens.titleColor}: ${textPrimary};
                ${notificationTokens.contentLeftIconColor}: ${textPrimary};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceSolidCard};
                ${notificationTokens.borderRadius}: 0.75rem;
                ${notificationTokens.padding}: 0.75rem;
                ${notificationTokens.borderColor}: ${outlineSolidPrimary};

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;

                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.25rem;
                ${notificationTokens.contentTopIconMargin}: 0.25rem;

                ${notificationTokens.contentFontFamily}: ${bodyS.fontFamily};
                ${notificationTokens.contentFontSize}: ${bodyS.fontSize};
                ${notificationTokens.contentFontStyle}: ${bodyS.fontStyle};
                ${notificationTokens.contentFontWeight}: ${bodyS.fontWeight};
                ${notificationTokens.contentFontLetterSpacing}: ${bodyS.letterSpacing};
                ${notificationTokens.contentFontLineHeight}: ${bodyS.lineHeight};

                ${notificationTokens.titleFontFamily}: ${bodyM.fontFamily};
                ${notificationTokens.titleFontSize}: ${bodyM.fontSize};
                ${notificationTokens.titleFontStyle}: ${bodyM.fontStyle};
                ${notificationTokens.titleFontWeight}: ${bodyMBold.fontWeight};
                ${notificationTokens.titleFontLetterSpacing}: ${bodyM.letterSpacing};
                ${notificationTokens.titleFontLineHeight}: ${bodyM.lineHeight};

                ${notificationTokens.closeIconColor}: ${textAccent};
                ${notificationTokens.closeIconColorOnHover}:${textAccentMinor};

                ${notificationTokens.horizontalLayoutGap}: 0.5rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;
            `,
        },
        layout: {
            horizontal: css`
                ${notificationTokens.width}: 30rem;
                ${notificationTokens.horizontalLayoutPadding}: 0.75rem 0.75rem 0.75rem 0.75rem;
                ${notificationTokens.horisontalIconLeftAlignSelf}: flex-start;
                ${notificationTokens.horisontalActionsAlignSelf}: flex-end;
                ${notificationTokens.horisontalIconCloseAlignSelf}: flex-start;
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
                ${notificationTokens.borderWidth}: 0.125rem;

                ${notificationTokens.padding}: 0.75rem;
                ${notificationTokens.textboxPaddingTopWithTopIcon}: 0rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.buttonsMarginLeft}: 0rem;
            `,
            xxs: css`
                ${notificationTokens.closeIconTop}: 0.875rem;
                ${notificationTokens.closeIconRight}: 1rem;
                ${notificationTokens.borderWidth}: 0.125rem;

                ${notificationTokens.padding}: 0.75rem 1rem 1rem 1rem;
                ${notificationTokens.textboxPaddingTopWithTopIcon}: 0.1875rem;

                ${notificationTokens.contentPaddingTop}: 0.25rem;
                ${notificationTokens.contentPaddingRight}: 0rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0rem;

                ${notificationTokens.buttonsMarginLeft}: 2rem;
            `,
        },
        closeIconType: {
            thin: css`
                ${notificationTokens.closeIconButtonSize}: 1.5rem;
                ${notificationTokens.closeIconSize}: 1.5rem;
            `,
        },
    },
};
