import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applyEllipsis } from '../../mixins';

import { tokens } from './Chip.tokens';

export const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;

    appearance: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const StyledContentLeft = styled.div`
    display: flex;
    margin-left: var(${tokens.leftContentMarginLeft});
    margin-right: var(${tokens.leftContentMarginRight});
`;

export const StyledContentMain = styled.div`
    ${applyEllipsis()};
`;

export const StyledContentRight = styled.div`
    display: flex;
    margin-left: var(${tokens.rightContentMarginLeft});
    margin-right: var(${tokens.rightContentMarginRight});
`;

export const StyledContentClear = styled.div`
    display: flex;
    margin-left: var(${tokens.clearContentMarginLeft});
    margin-right: var(${tokens.clearContentMarginRight});
    color: var(${tokens.closeIconColor});
`;
