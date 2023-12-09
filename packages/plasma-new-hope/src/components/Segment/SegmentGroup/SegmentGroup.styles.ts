import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { addFocus } from '../../../mixins';
import { tokens } from '../tokens';

export const base = css`
    display: inline-flex;
    align-items: center;
`;

export const StyledContent = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledContentWrapper = styled.div`
    position: relative;
    height: 100%;
    margin: 0;

    /* allows correctly display outline focus on segment item */
    padding: 0.25rem;

    /* stylelint-disable-next-line selector-max-empty-lines, selector-nested-pattern, selector-type-no-unknown */
    ::-webkit-scrollbar {
        display: none;
    }

    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
`;

export const StyledArrow = styled.button`
    display: flex;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;
    outline: none;

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: 'calc(var(--plasma_private-outline-radius) - 0.063rem)',
    })};

    &[disabled] {
        cursor: not-allowed;
    }
`;
