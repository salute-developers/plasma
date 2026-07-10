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
    textPrimary,
    textPrimaryHover,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, calendarDoubleTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${calendarDoubleTokens.calendarSelectedItemBackground}: ${surfaceAccent};
                ${calendarDoubleTokens.calendarSelectedItemColor}: ${inverseTextPrimary};
                ${calendarDoubleTokens.calendarSelectableItemBackgroundHover}: ${surfaceTransparentAccent};
                ${calendarDoubleTokens.calendarCurrentItemBorderColor}: ${inverseOutlineSolidSecondary};
                ${calendarDoubleTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarDoubleTokens.calendarCurrentItemColorHover}: ${textPrimary};
                ${calendarDoubleTokens.calendarCurrentItemChildBackgroundHover}: ${surfaceTransparentAccent};
                ${calendarDoubleTokens.calendarActiveItemBackground}: ${surfaceAccent};
                ${calendarDoubleTokens.calendarActiveItemColor}: ${inverseTextPrimary};
                ${calendarDoubleTokens.calendarHoveredItemBackground}: ${surfaceTransparentAccent};
                ${calendarDoubleTokens.calendarHoveredItemColor}: ${textPrimary};
                ${calendarDoubleTokens.calendarRangeBackground}: ${surfaceTransparentAccent};
                ${calendarDoubleTokens.calendarOutlineFocusColor}: ${surfaceAccent};
                ${calendarDoubleTokens.calendarContentPrimaryColor}: var(--surface-primary);
                ${calendarDoubleTokens.calendarContentPrimaryDisabledColor}: ${textSecondary};
                ${calendarDoubleTokens.calendarContentSecondaryColor}: ${textSecondary};
                ${calendarDoubleTokens.calendarContentSecondaryDisabledColor}: ${textSecondary};
                ${calendarDoubleTokens.calendarDayOfWeekColor}: ${textSecondary};
                ${calendarDoubleTokens.calendarHeaderArrowColor}: ${textAccent};
                ${calendarDoubleTokens.calendarDisabledOpacity}: 1;

                ${calendarDoubleTokens.iconButtonColor}: ${textPrimary};
                ${calendarDoubleTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${calendarDoubleTokens.iconButtonColorHover}: ${textPrimaryHover};
                ${calendarDoubleTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${calendarDoubleTokens.iconButtonColorActive}: ${textPrimaryHover};
                ${calendarDoubleTokens.iconButtonBackgroundColorActive}: ${surfaceClear};
                ${calendarDoubleTokens.iconButtonFocusColor}: ${surfaceAccent};
            `,
        },
        size: {
            s: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 37.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 17rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.calendarYearFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.calendarYearFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.calendarYearFontLineHeight}: ${bodyS.lineHeight};
                ${calendarDoubleTokens.calendarYearFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.calendarQuarterFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.calendarQuarterFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: ${bodyS.lineHeight};
                ${calendarDoubleTokens.calendarQuarterFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.calendarMonthFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.calendarMonthFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: ${bodyS.lineHeight};
                ${calendarDoubleTokens.calendarMonthFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.calendarDayFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.calendarDayFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.calendarDayFontLineHeight}: ${bodyS.lineHeight};
                ${calendarDoubleTokens.calendarDayFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.125rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0.5rem;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: ${bodyMBold.fontFamily};
                ${calendarDoubleTokens.calendarHeaderFontSize}: ${bodyMBold.fontSize};
                ${calendarDoubleTokens.calendarHeaderFontStyle}: ${bodyMBold.fontStyle};
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: ${bodyMBold.letterSpacing};
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: ${bodyMBold.lineHeight};
                ${calendarDoubleTokens.calendarHeaderFontWeight}: ${bodyM.fontWeight};
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: ${bodyMBold.fontWeight};

                ${calendarDoubleTokens.iconButtonHeight}: 2.5rem;
                ${calendarDoubleTokens.iconButtonWidth}: 2.5rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.625rem;
            `,
        },
    },
};
