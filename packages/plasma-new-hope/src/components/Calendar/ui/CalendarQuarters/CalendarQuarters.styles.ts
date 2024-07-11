import { styled } from '@linaria/react';

import { tokens } from '../../Calendar.tokens';
import { flexCenter } from '../../mixins';

export const StyledCalendarQuarters = styled.div`
    padding: var(${tokens.calendarQuartersPadding});
    box-sizing: border-box;
`;

export const StyledFlex = styled.div`
    ${String(flexCenter)};
`;
