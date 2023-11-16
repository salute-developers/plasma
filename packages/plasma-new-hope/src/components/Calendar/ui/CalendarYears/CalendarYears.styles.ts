import { styled } from '@linaria/react';

import { flexCenter, selectedMixin, addFocus } from '../../mixins';
import { tokens } from '../../Calendar.tokens';

export const StyledCalendarYears = styled.div`
    padding: 0.5rem 1.5rem 1.5rem;
    box-sizing: border-box;
`;

export const StyledFlex = styled.div`
    ${String(flexCenter)};
`;

export const StyledYear = styled.div`
    border-radius: 0.438rem;

    ${String(flexCenter)};
`;

const selectable = () => `
    --calendar_private-add-focus-outline-offset: -0.063rem;
    --calendar_private-add-focus-outline-size: 0.063rem;
    --calendar_private-add-focus-outline-radius: 0.563rem;
    --calendar_private-add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --calendar_private-add-focus-outline-color: var(${tokens.calendarOutlineFocusColor});
    
    ${String(addFocus)};

    --calendar_private-selected-min-width: 5.25rem;
    --calendar_private-selected-min-height: 3.25rem;
    --calendar_private-selected-background: var(${tokens.calendarSelectedItemBackground});
    --calendar_private-selected-color: var(${tokens.calendarSelectedItemColor});
    --calendar_private-selectable-background-hover: var(${tokens.calendarSelectableItemBackgroundHover});
    --calendar_private-current-border-color: var(${tokens.calendarCurrentItemBorderColor});
    --calendar_private-current-background-hover: var(${tokens.calendarCurrentItemBackgroundHover});
    --calendar_private-current-color-hover: var(${tokens.calendarCurrentItemColorHover});
    --calendar_private-current-child-background-hover: var(${tokens.calendarCurrentItemChildBackgroundHover});
    --calendar_private-active-background: var(${tokens.calendarActiveItemBackground});
    --calendar_private-active-color: var(${tokens.calendarActiveItemColor});
    --calendar_private-hovered-background: var(${tokens.calendarHoveredItemBackground});
    --calendar_private-hovered-color: var(${tokens.calendarHoveredItemColor});
    
    ${String(selectedMixin)};
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

    min-height: 3.5rem;

    border-radius: var(${tokens.calendarItemBorderRadius});

    flex: 1;

    ${String(flexCenter)};
    ${selectable()};
`;
