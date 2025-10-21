import { css, calendarDoubleTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        tooltipSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${calendarDoubleTokens.calendarSeparatorBackground}: var(--surface-transparent-secondary);
                ${calendarDoubleTokens.calendarBackgroundColor}: transparent;
                ${calendarDoubleTokens.calendarSelectedItemBackground}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarSelectedItemColor}: var(--inverse-text-primary);
                ${calendarDoubleTokens.calendarSelectableItemBackgroundHover}: var(--surface-transparent-secondary);
                ${calendarDoubleTokens.calendarCurrentItemBorderColor}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarDoubleTokens.calendarCurrentItemColorHover}: var(--text-primary);
                ${calendarDoubleTokens.calendarCurrentItemChildBackgroundHover}: var(--surface-transparent-secondary);
                ${calendarDoubleTokens.calendarActiveItemBackground}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarActiveItemColor}: var(--inverse-text-primary);
                ${calendarDoubleTokens.calendarHoveredItemBackground}: var(--surface-accent);
                ${calendarDoubleTokens.calendarHoveredItemColor}: var(--text-primary);
                ${calendarDoubleTokens.calendarRangeBackground}: var(--surface-transparent-secondary);
                ${calendarDoubleTokens.calendarOutlineFocusColor}: var(--surface-accent);
                ${calendarDoubleTokens.calendarContentPrimaryColor}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarContentPrimaryDisabledColor}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarHeaderArrowColor}: ${calendarDoubleTokens.calendarContentPrimaryColor};
                ${calendarDoubleTokens.calendarContentSecondaryColor}: var(--text-secondary);
                ${calendarDoubleTokens.calendarContentSecondaryDisabledColor}: var(--text-secondary);
                ${calendarDoubleTokens.calendarDisabledOpacity}: 0.4;

                ${calendarDoubleTokens.iconButtonColor}: var(--text-primary);
                ${calendarDoubleTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${calendarDoubleTokens.iconButtonColorHover}: var(--text-primary-hover);
                ${calendarDoubleTokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${calendarDoubleTokens.iconButtonColorActive}: var(--text-primary-hover);
                ${calendarDoubleTokens.iconButtonBackgroundColorActive}: var(--surface-clear);
                ${calendarDoubleTokens.iconButtonFocusColor}: var(--surface-accent);

                ${calendarDoubleTokens.tooltipBackgroundColor}: var(--inverse-surface-solid-card-brightness);
                ${calendarDoubleTokens.tooltipBoxShadow}: var(--shadow-down-hard-s);
                ${calendarDoubleTokens.tooltipColor}: var(--inverse-text-primary);
                ${calendarDoubleTokens.tooltipArrowBackground}: var(--inverse-surface-solid-card-brightness);
            `,
        },
        size: {
            l: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 51.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 25rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.75rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.75rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarDoubleTokens.calendarQuarterFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarDoubleTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarDoubleTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.75rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.75rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0.5rem;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.5rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 3.5rem;
                ${calendarDoubleTokens.iconButtonWidth}: 3.5rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1.5rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.875rem;
            `,
            m: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 44.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 21rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarDoubleTokens.calendarQuarterFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarDoubleTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarDoubleTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0.5rem;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.75rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.375rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 3rem;
                ${calendarDoubleTokens.iconButtonWidth}: 3rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1.25rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.75rem;
            `,
            s: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 37.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 17rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarQuarterFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0.5rem;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 2.5rem;
                ${calendarDoubleTokens.iconButtonWidth}: 2.5rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.625rem;
            `,
            xs: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 37.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 15.5rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.375rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.375rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarDoubleTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.375rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarDoubleTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.375rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1rem;

                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h5-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h5-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h5-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h5-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h5-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 2rem;
                ${calendarDoubleTokens.iconButtonWidth}: 2rem;
                ${calendarDoubleTokens.iconButtonPadding}: 0.75rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.5rem;
            `,
        },
        eventTooltipSize: {
            m: css`
                ${calendarDoubleTokens.tooltipPaddingTop}: 0.6875rem;
                ${calendarDoubleTokens.tooltipPaddingRight}: 0.875rem;
                ${calendarDoubleTokens.tooltipPaddingBottom}: 0.6875rem;
                ${calendarDoubleTokens.tooltipPaddingLeft}: 0.875rem;

                ${calendarDoubleTokens.tooltipMinHeight}: 2.5rem;
                ${calendarDoubleTokens.tooltipBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.tooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.tooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.tooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.tooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${calendarDoubleTokens.tooltipContentLeftMargin}: 0.375rem;

                ${calendarDoubleTokens.tooltipArrowMaskWidth}: 1.25rem;
                ${calendarDoubleTokens.tooltipArrowMaskHeight}: 1.25rem;
                ${calendarDoubleTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${calendarDoubleTokens.tooltipArrowHeight}: 0.5rem;
                ${calendarDoubleTokens.tooltipArrowEdgeMargin}: 0.625rem;
                ${calendarDoubleTokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
            s: css`
                ${calendarDoubleTokens.tooltipPaddingTop}: 0.5rem;
                ${calendarDoubleTokens.tooltipPaddingRight}: 0.75rem;
                ${calendarDoubleTokens.tooltipPaddingBottom}: 0.5rem;
                ${calendarDoubleTokens.tooltipPaddingLeft}: 0.75rem;

                ${calendarDoubleTokens.tooltipMinHeight}: 2rem;
                ${calendarDoubleTokens.tooltipBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${calendarDoubleTokens.tooltipContentLeftMargin}: 0.25rem;

                ${calendarDoubleTokens.tooltipArrowMaskWidth}: 1rem;
                ${calendarDoubleTokens.tooltipArrowMaskHeight}: 1rem;
                ${calendarDoubleTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${calendarDoubleTokens.tooltipArrowHeight}: 0.375rem;
                ${calendarDoubleTokens.tooltipArrowEdgeMargin}: 0.5625rem;
                ${calendarDoubleTokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
        },
    },
};
