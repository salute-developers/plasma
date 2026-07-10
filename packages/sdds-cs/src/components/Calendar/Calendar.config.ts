import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    inverseOutlineSolidSecondary,
    inverseTextPrimary,
    surfaceAccent,
    surfaceClear,
    surfaceTransparentAccent,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, calendarBaseTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${calendarBaseTokens.calendarSelectedItemBackground}: ${surfaceAccent};
                ${calendarBaseTokens.calendarSelectedItemColor}: ${inverseTextPrimary};
                ${calendarBaseTokens.calendarSelectableItemBackgroundHover}: ${surfaceTransparentAccent};
                ${calendarBaseTokens.calendarCurrentItemBorderColor}: ${inverseOutlineSolidSecondary};
                ${calendarBaseTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarBaseTokens.calendarCurrentItemColorHover}: ${textPrimary};
                ${calendarBaseTokens.calendarCurrentItemChildBackgroundHover}: ${surfaceTransparentAccent};
                ${calendarBaseTokens.calendarActiveItemBackground}: ${surfaceAccent};
                ${calendarBaseTokens.calendarActiveItemColor}: ${inverseTextPrimary};
                ${calendarBaseTokens.calendarHoveredItemBackground}: ${surfaceTransparentAccent};
                ${calendarBaseTokens.calendarHoveredItemColor}: ${textPrimary};
                ${calendarBaseTokens.calendarRangeBackground}: ${surfaceTransparentAccent};
                ${calendarBaseTokens.calendarOutlineFocusColor}: ${surfaceAccent};
                ${calendarBaseTokens.calendarContentPrimaryColor}: var(--surface-primary);
                ${calendarBaseTokens.calendarContentPrimaryDisabledColor}: ${textSecondary};
                ${calendarBaseTokens.calendarContentSecondaryColor}: ${textSecondary};
                ${calendarBaseTokens.calendarContentSecondaryDisabledColor}: ${textSecondary};
                ${calendarBaseTokens.calendarDayOfWeekColor}: ${textSecondary};
                ${calendarBaseTokens.calendarHeaderArrowColor}: ${textAccent};
                ${calendarBaseTokens.calendarDisabledOpacity}: 1;

                ${calendarBaseTokens.iconButtonColor}: ${textAccent};
                ${calendarBaseTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${calendarBaseTokens.iconButtonColorHover}: ${textAccentMinor};
                ${calendarBaseTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${calendarBaseTokens.iconButtonColorActive}: ${textAccentActive};
                ${calendarBaseTokens.iconButtonBackgroundColorActive}: ${surfaceClear};
                ${calendarBaseTokens.iconButtonFocusColor}: ${surfaceAccent};
            `,
        },
        size: {
            s: css`
                ${calendarBaseTokens.calendarContainerWidth}: 17.5rem;
                ${calendarBaseTokens.calendarContainerHeight}: 17rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarYearFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.calendarYearFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.calendarYearFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.calendarYearFontLineHeight}: ${bodyS.lineHeight};
                ${calendarBaseTokens.calendarYearFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarBaseTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.calendarQuarterFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.calendarQuarterFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: ${bodyS.lineHeight};
                ${calendarBaseTokens.calendarQuarterFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarBaseTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.calendarMonthFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.calendarMonthFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.calendarMonthFontLineHeight}: ${bodyS.lineHeight};
                ${calendarBaseTokens.calendarMonthFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarBaseTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarDayFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.calendarDayFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.calendarDayFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.calendarDayFontLineHeight}: ${bodyS.lineHeight};
                ${calendarBaseTokens.calendarDayFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.125rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0.5rem;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: ${bodyMBold.fontFamily};
                ${calendarBaseTokens.calendarHeaderFontSize}: ${bodyMBold.fontSize};
                ${calendarBaseTokens.calendarHeaderFontStyle}: ${bodyMBold.fontStyle};
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: ${bodyMBold.letterSpacing};
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: ${bodyMBold.lineHeight};
                ${calendarBaseTokens.calendarHeaderFontWeight}: ${bodyM.fontWeight};
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: ${bodyMBold.fontWeight};

                ${calendarBaseTokens.iconButtonHeight}: 2.5rem;
                ${calendarBaseTokens.iconButtonWidth}: 2.5rem;
                ${calendarBaseTokens.iconButtonPadding}: 1rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.625rem;
            `,
        },
    },
};
