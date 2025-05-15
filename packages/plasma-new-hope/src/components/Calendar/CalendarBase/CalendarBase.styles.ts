import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from '../Calendar.tokens';

export const StyledCalendar = css`
    position: relative;
    user-select: none;
    z-index: 1;

    width: var(${tokens.calendarContainerWidth});
    height: var(${tokens.calendarContainerHeight});
    border: var(${tokens.calendarBorderWidth}) solid var(${tokens.calendarBorderColor});
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    &.${classes.stretched} {
        width: 100%;
        height: 100%;
    }
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
