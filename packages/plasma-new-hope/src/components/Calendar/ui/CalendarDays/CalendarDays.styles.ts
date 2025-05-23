import { styled } from '@linaria/react';

import { tokens } from '../../Calendar.tokens';

export const StyledCalendarDays = styled.div`
    outline: none;

    padding: var(${tokens.calendarDaysPadding});
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);

    width: 100%;
    height: 100%;
`;

export const StyledCalendarDaysHint = styled.span`
    display: none;
`;
