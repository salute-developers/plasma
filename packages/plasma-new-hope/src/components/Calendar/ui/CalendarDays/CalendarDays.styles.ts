import styled from 'styled-components';

import { tokens } from '../../Calendar.tokens';

export const StyledCalendarDays = styled.div`
    outline: none;

    padding: var(${tokens.calendarDaysPadding});
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    row-gap: var(${tokens.calendarDaysRowGap}, 0);

    width: 100%;
    height: 100%;
`;

export const StyledCalendarDaysHint = styled.span`
    display: none;
`;
