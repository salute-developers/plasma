import { styled } from '@linaria/react';

import { flexCenter, selectedMixin } from '../../shared/mixins';
import { addFocus, bodyS } from '../../../../mixins';
import { tokens } from '../../shared/tokens';

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
    --add-focus-outline-offset: -0.063rem;
    --add-focus-outline-size: 0.063rem;
    --add-focus-outline-radius: 0.563rem;
    --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --add-focus-outline-color: var(${tokens.calendarOutlineFocusColor});
    --selected-min-width: 5.25rem;
    --selected-min-height: 3.25rem;
    --selected-background: var(${tokens.calendarSelectedItemBackground});
    --selected-color: var(${tokens.calendarSelectedItemColor});
    --selectable-background-hover: var(${tokens.calendarSelectableItemBackgroundHover});
    --current-border-color: var(${tokens.calendarCurrentItemBorderColor});
    --current-background-hover: var(${tokens.calendarCurrentItemBackgroundHover});
    --current-color-hover: var(${tokens.calendarCurrentItemColorHover});
    --current-child-background-hover: var(${tokens.calendarCurrentItemChildBackgroundHover});
    --active-background-hover: var(${tokens.calendarActiveItemBackground});
    --active-color-hover: var(${tokens.calendarActiveItemColor});
    --hovered-background: var(${tokens.calendarHoveredItemBackground});
    --hovered-color: var(${tokens.calendarHoveredItemColor});

    ${String(selectedMixin)};
    ${addFocus()};
`;

export const StyledYearRoot = styled.div`
    ${String(bodyS)};

    position: relative;
    box-sizing: border-box;

    min-height: 3.5rem;

    border-radius: var(${tokens.calendarItemBorderRadius});

    flex: 1;

    ${String(flexCenter)};
    ${selectable()};
`;
