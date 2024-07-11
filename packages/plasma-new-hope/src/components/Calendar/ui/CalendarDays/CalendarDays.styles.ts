import { styled } from '@linaria/react';

import { flexCenter } from '../../mixins';
import { tokens } from '../../Calendar.tokens';

export const StyledFlex = styled.div`
    ${String(flexCenter)};
`;

export const StyledCalendarDays = styled.div`
    outline: none;

    padding: var(${tokens.calendarDaysPadding});
    box-sizing: border-box;
`;

export const StyledCalendarDaysHint = styled.span`
    display: none;
`;
