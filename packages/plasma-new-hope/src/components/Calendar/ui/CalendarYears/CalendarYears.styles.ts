import { styled } from '@linaria/react';

import { tokens } from '../../Calendar.tokens';
import { flexCenter } from '../../mixins';

export const StyledCalendarYears = styled.div`
    padding: var(${tokens.calendarYearsPadding});
    box-sizing: border-box;
`;

export const StyledFlex = styled.div`
    ${String(flexCenter)};
`;
