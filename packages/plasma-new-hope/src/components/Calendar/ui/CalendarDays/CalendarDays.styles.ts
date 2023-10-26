import { styled } from '@linaria/react';

import { flexCenter } from '../../shared/mixins';

export const StyledFlex = styled.div`
    ${String(flexCenter)};
`;

export const StyledCalendarDays = styled.div`
    outline: none;

    padding: 0.5rem 1rem 1.5rem;
    box-sizing: border-box;
`;

export const StyledCalendarDaysHint = styled.span`
    display: none;
`;
