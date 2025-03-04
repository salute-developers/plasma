import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { classes, tokens } from './Badge.tokens';

export const StyledContentLeft = styled.div`
    display: flex;
    margin-left: var(${tokens.leftContentMarginLeft});
    margin-right: var(${tokens.leftContentMarginRight});
`;

export const StyledContentMain = styled.span``;

export const StyledContentRight = styled.div`
    display: flex;
    margin-left: var(${tokens.rightContentMarginLeft});
    margin-right: var(${tokens.rightContentMarginRight});
`;

export const base = css`
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    width: max-content;

    &.${classes.badgeTruncate} {
        max-width: 100%;

        ${StyledContentMain} {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
`;
