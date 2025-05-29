import { styled } from '@linaria/react';

import { tokens } from '../../Calendar.tokens';

export const StyledCalendarQuarters = styled.div`
    padding: var(${tokens.calendarQuartersPadding});
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    width: 100%;
    height: 100%;
`;
