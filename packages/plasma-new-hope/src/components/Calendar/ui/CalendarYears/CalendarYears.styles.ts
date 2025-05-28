import { styled } from '@linaria/react';

import { tokens } from '../../Calendar.tokens';

export const StyledCalendarYears = styled.div`
    padding: var(${tokens.calendarYearsPadding});
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);

    width: 100%;
    height: 100%;
`;
