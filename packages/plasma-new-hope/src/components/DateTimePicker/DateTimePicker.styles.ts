import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { popoverClasses } from '../Popover';

import { classes, tokens } from './DateTimePicker.tokens';

export const base = css`
    display: inline-block;

    .${popoverClasses.wrapper}, .${popoverClasses.target} {
        width: inherit;
    }

    &.${classes.stretched} {
        width: 100%;

        .${popoverClasses.root} {
            width: 100%;
        }
    }
`;

export const CalendarContainerOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
`;

export const LeftHelper = styled.div`
    color: var(${tokens.leftHelperColor});

    &.${classes.error} {
        color: var(${tokens.leftHelperColorError});
    }

    &.${classes.success} {
        color: var(${tokens.leftHelperColorSuccess});
    }
`;
