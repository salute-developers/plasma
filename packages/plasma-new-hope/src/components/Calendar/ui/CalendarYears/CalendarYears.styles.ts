import { styled } from '@linaria/react';

import { classes, tokens } from '../../Calendar.tokens';
import { addFocus } from '../../../../mixins';
import { addSelected, flexCenter } from '../../mixins';

export const StyledCalendarYears = styled.div`
    padding: var(${tokens.calendarYearsPadding});
    box-sizing: border-box;
`;

export const StyledFlex = styled.div`
    ${String(flexCenter)};
`;

export const StyledYear = styled.div`
    border-radius: calc(var(${tokens.calendarYearItemBorderRadius}) - 0.125rem);

    ${String(flexCenter)};
`;

export const StyledYearRoot = styled.div`
    font-family: var(${tokens.calendarYearFontFamily});
    font-size: var(${tokens.calendarYearFontSize});
    font-style: var(${tokens.calendarYearFontStyle});
    font-weight: var(${tokens.calendarYearFontWeight});
    letter-spacing: var(${tokens.calendarYearFontLetterSpacing});
    line-height: var(${tokens.calendarYearFontLineHeight});
    position: relative;
    box-sizing: border-box;

    min-height: var(${tokens.calendarYearItemHeight});
    min-width: var(${tokens.calendarYearItemWidth});

    border-radius: var(${tokens.calendarYearItemBorderRadius});

    ${String(flexCenter)};

    ${addSelected({
        minWidth: `calc(var(${tokens.calendarYearItemWidth}) - 0.25rem)`,
        minHeight: `calc(var(${tokens.calendarYearItemHeight}) - 0.25rem)`,
        selectedFontWeight: `var(${tokens.calendarYearSelectedFontWeight})`,
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
        outlineRadius: `calc(var(${tokens.calendarYearItemBorderRadius}) + 0.125rem)`,
    })};

    &.${classes.currentItem} {
        ${addFocus({
            outlineSize: '0.063rem',
            outlineOffset: '-0.1875rem',
            outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
            outlineRadius: `calc(var(${tokens.calendarYearItemBorderRadius}) + 0.125rem)`,
        })};
    }
`;
