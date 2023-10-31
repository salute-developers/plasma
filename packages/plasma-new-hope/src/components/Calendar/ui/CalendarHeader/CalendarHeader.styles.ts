import { styled } from '@linaria/react';

import { buttonFocus, flexCenter, flexSpaceBetween } from '../../mixins';
import { tokens } from '../../Calendar.tokens';

export const StyledCalendarHeader = styled.div`
    padding: 1rem 1.5rem 0;
    font-family: var(${tokens.calendarHeaderFontFamily});
    font-size: var(${tokens.calendarHeaderFontSize});
    font-style: var(${tokens.calendarHeaderFontStyle});
    font-weight: var(${tokens.calendarHeaderFontWeightBold});
    letter-spacing: var(${tokens.calendarHeaderFontLetterSpacing});
    line-height: var(${tokens.calendarHeaderFontLineHeight});

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeader = styled(buttonFocus)`
    color: var(${tokens.calendarContentPrimaryColor});
    cursor: pointer;
    padding: 0.5rem 0;
    font-family: var(${tokens.calendarHeaderFontFamily});
    font-size: var(${tokens.calendarHeaderFontSize});
    font-style: var(${tokens.calendarHeaderFontStyle});
    font-weight: var(${tokens.calendarHeaderFontWeightBold});
    letter-spacing: var(${tokens.calendarHeaderFontLetterSpacing});
    line-height: var(${tokens.calendarHeaderFontLineHeight});

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeaderDouble = styled.h4`
    font-family: var(${tokens.calendarHeaderFontFamily});
    font-size: var(${tokens.calendarHeaderFontSize});
    font-style: var(${tokens.calendarHeaderFontStyle});
    font-weight: var(${tokens.calendarHeaderFontWeightBold});
    letter-spacing: var(${tokens.calendarHeaderFontLetterSpacing});
    line-height: var(${tokens.calendarHeaderFontLineHeight});
    margin-top: 0;
    margin-bottom: 0;
    padding: 0.5rem 0;
    flex: 1;

    ${String(flexCenter)};

    &:first-of-type {
        margin-right: 3rem;
    }

    &:last-of-type {
        margin-left: 3rem;
    }
`;

export const StyledArrows = styled.div`
    padding: 0.5rem 0;
    width: var(${tokens.calendarHeaderArrowContainerWidth});

    ${String(flexSpaceBetween)};
`;

export const StyledArrow = styled(buttonFocus)`
    display: flex;
    cursor: pointer;
`;

export const StyledNavigation = styled.div`
    width: 100%;

    ${String(flexCenter)};
`;
