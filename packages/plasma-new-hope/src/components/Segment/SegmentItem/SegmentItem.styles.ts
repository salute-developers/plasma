import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applyEllipsis } from '../../../mixins';

export const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    align-items: center;

    appearance: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const StyledContent = styled.div`
    display: inline-block;
    width: fit-content;
    ${applyEllipsis()};
`;
