import { styled } from '@linaria/react';

import { tokens } from '../../Calendar.tokens';
import { flexCenter } from '../../mixins';

export const StyledCalendarMonths = styled.div`
    padding: var(${tokens.calendarMonthsPadding});
    box-sizing: border-box;
`;

export const StyledFlex = styled.div`
    ${String(flexCenter)};
`;
