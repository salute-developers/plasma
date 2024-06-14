import { styled } from '@linaria/react';

import { classes, tokens } from '../../Calendar.tokens';
import { addFocus } from '../../../../mixins';
import { addSelected, flexCenter } from '../../mixins';

export const StyledCalendarMonths = styled.div`
    padding: var(${tokens.calendarMonthsPadding});
    box-sizing: border-box;
`;

export const StyledFlex = styled.div`
    ${String(flexCenter)};
`;

export const StyledMonth = styled.div`
    border-radius: calc(var(${tokens.calendarMonthItemBorderRadius}) - 0.125rem);

    ${String(flexCenter)};
`;

export const StyledMonthRoot = styled.div`
    font-family: var(${tokens.calendarMonthFontFamily});
    font-size: var(${tokens.calendarMonthFontSize});
    font-style: var(${tokens.calendarMonthFontStyle});
    font-weight: var(${tokens.calendarMonthFontWeight});
    letter-spacing: var(${tokens.calendarMonthFontLetterSpacing});
    line-height: var(${tokens.calendarMonthFontLineHeight});
    position: relative;
    box-sizing: border-box;

    min-height: var(${tokens.calendarMonthItemHeight});
    min-width: var(${tokens.calendarMonthItemWidth});

    border-radius: var(${tokens.calendarMonthItemBorderRadius});

    ${String(flexCenter)};

    ${addSelected({
        minWidth: `calc(var(${tokens.calendarMonthItemWidth}) - 0.25rem)`,
        minHeight: `calc(var(${tokens.calendarMonthItemHeight}) - 0.25rem)`,
        selectedFontWeight: `var(${tokens.calendarMonthSelectedFontWeight})`,
        selectedBackground: `var(${tokens.calendarSelectedItemBackground})`,
        selectedColor: `var(${tokens.calendarSelectedItemColor})`,
        selectableBackgroundHover: `var(${tokens.calendarSelectableItemBackgroundHover})`,
        currentBorderColor: `var(${tokens.calendarCurrentItemBorderColor})`,
        activeBackground: `var(${tokens.calendarActiveItemBackground})`,
        activeColor: `var(${tokens.calendarActiveItemColor})`,
    })};

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
        outlineRadius: `calc(var(${tokens.calendarMonthItemBorderRadius}) + 0.125rem)`,
    })};

    &.${classes.currentItem} {
        ${addFocus({
            outlineSize: '0.063rem',
            outlineOffset: '-0.1875rem',
            outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
            outlineRadius: `calc(var(${tokens.calendarMonthItemBorderRadius}) + 0.125rem)`,
        })};
    }
`;
