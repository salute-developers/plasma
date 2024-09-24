import { datePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-solid-card);
                ${tokens.borderColor}: var(--outline-solid-primary);
                ${tokens.borderColorHover}: var(--outline-solid-primary-hover);
                ${tokens.borderColorFocus}: var(--outline-accent);
                ${tokens.borderColorError}: var(--outline-negative);
                ${tokens.borderColorSuccess}: var(--outline-accent);

                ${tokens.dividerColor}: var(--text-primary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);

                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldBorderColor}: var(--outline-solid-primary);
                ${tokens.textFieldBorderColorHover}: var(--outline-solid-primary-hover);
                ${tokens.textFieldBorderColorFocus}: var(--outline-accent);
                ${tokens.textFieldBorderColorError}: var(--outline-negative);
                ${tokens.textFieldBorderColorErrorFocus}: var(--outline-negative);
                ${tokens.textFieldBorderColorSuccess}: var(--outline-accent);
                ${tokens.textFieldBorderColorSuccessFocus}: var(--outline-accent);
                ${tokens.textFieldBackgroundColor}: var(--surface-solid-card);
                ${tokens.textFieldContentSlotColor}: var(--text-secondary);

                ${tokens.textFieldTextBeforeColor}: var(--text-secondary);
                ${tokens.textFieldTextAfterColor}: var(--text-secondary);

                ${tokens.focusColor}: var(--text-accent);

                ${tokens.calendarShadow}: var(--shadow-down-soft-s);
                ${tokens.calendarSeparatorBackground}: var(--surface-transparent-secondary);
                ${tokens.calendarBackgroundColor}: var(--surface-solid-card);
                ${tokens.calendarSelectedItemBackground}: var(--surface-solid-default);
                ${tokens.calendarSelectedItemColor}: var(--inverse-text-primary);
                ${tokens.calendarSelectableItemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.calendarCurrentItemBorderColor}: var(--surface-solid-default);
                ${tokens.calendarCurrentItemBackgroundHover}: transparent;
                ${tokens.calendarCurrentItemColorHover}: var(--text-primary);
                ${tokens.calendarCurrentItemChildBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.calendarActiveItemBackground}: var(--surface-solid-default);
                ${tokens.calendarActiveItemColor}: var(--inverse-text-primary);
                ${tokens.calendarHoveredItemBackground}: var(--surface-accent);
                ${tokens.calendarHoveredItemColor}: var(--text-primary);
                ${tokens.calendarRangeBackground}: var(--surface-transparent-secondary);
                ${tokens.calendarOutlineFocusColor}: var(--surface-accent);
                ${tokens.calendarContentPrimaryColor}: var(--surface-solid-default);
                ${tokens.calendarContentSecondaryColor}: var(--text-secondary);

                ${tokens.iconButtonColor}: var(--text-accent);
                ${tokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${tokens.iconButtonColorHover}: var(--text-primary-hover);
                ${tokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${tokens.iconButtonColorActive}: var(--text-primary-hover);
                ${tokens.iconButtonBackgroundColorActive}: var(--surface-clear);
                ${tokens.iconButtonFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${tokens.width}: 19.5rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0 0 0.5rem 0;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.calendarWidth}: 19.5rem;
                ${tokens.calendarBorderRadius}: 0.875rem;

                ${tokens.calendarYearsPadding}: 0.5rem 1rem 0.875rem 1rem;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;
                ${tokens.calendarYearItemWidth}: 5.5rem;
                ${tokens.calendarYearItemHeight}: 3.5rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;
                ${tokens.calendarQuarterItemWidth}: 8.25rem;
                ${tokens.calendarQuarterItemHeight}: 7rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 1rem 0.875rem 1rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;
                ${tokens.calendarMonthItemWidth}: 5.5rem;
                ${tokens.calendarMonthItemHeight}: 3.5rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.5rem 1rem 0.875rem 1rem;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;
                ${tokens.calendarDayItemWidth}: 2.5rem;
                ${tokens.calendarDayItemHeight}: 2rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarHeaderWrapperPadding}: 0.75rem 1rem 0 1rem;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${tokens.iconButtonHeight}: 2rem;
                ${tokens.iconButtonWidth}: 2rem;
                ${tokens.iconButtonPadding}: 0.75rem;
                ${tokens.iconButtonRadius}: 0.5rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.background}: var(--surface-solid-primary);
                ${tokens.borderColor}: var(--surface-solid-primary);
                ${tokens.borderColorHover}: var(--surface-solid-primary);
                ${tokens.borderColorFocus}: var(--surface-solid-primary);
                ${tokens.borderColorSuccess}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColorFocus}: var(--surface-solid-primary);
                ${tokens.textFieldColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldCaretColor}: var(--text-secondary);
                ${tokens.textFieldBackgroundColor}: var(--surface-solid-primary);
                ${tokens.labelColor}: var(--text-secondary);
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: var(--surface-transparent-primary);
                ${tokens.labelColorReadOnly}: var(--text-secondary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.dividerColorReadOnly}: var(--text-secondary);
                ${tokens.labelColor}: var(--text-secondary);

                ${tokens.textFieldColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
