import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { tokens } from '../Calendar.tokens';

export const StyledCalendar = css`
    position: relative;
    user-select: none;
    z-index: 1;

    width: var(${tokens.calendarWidth});
    height: var(${tokens.calendarHeight});
    border: var(${tokens.calendarBorderWidth}) solid var(${tokens.calendarBorderColor});
    box-sizing: border-box;
`;

export const IsOutOfRange = styled.div`
    position: absolute;
    padding: 0;
    margin: 0;
    height: 0;
    width: 0;
    border: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
`;
