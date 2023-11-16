import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const StyledCalendar = css`
    position: relative;
    user-select: none;
    z-index: 1;

    width: 19.5rem;
    height: 19.5rem;
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
