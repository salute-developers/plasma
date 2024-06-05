import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { tokens } from '../Calendar.tokens';

export const StyledCalendar = css`
    position: relative;
    user-select: none;
    z-index: 1;

    display: flex;
    flex-direction: column;

    width: var(${tokens.calendarWidth});
    height: var(${tokens.calendarHeight});
`;

export const StyledSeparator = styled.div`
    background-color: var(${tokens.calendarSeparatorBackground});
    min-width: 0.063rem;
    margin: 0.5rem 1rem 0 1rem;
`;

export const StyledWrapper = styled.div`
    display: flex;
`;
