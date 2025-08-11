import styled, { css } from 'styled-components';

import { multipleMediaQuery } from '../../../mixins';

export const DraggableScrollContainer = styled.div`
    width: 100%;
    overflow: hidden;
    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;

        a {
            cursor: grabbing;
        }
    }
`;

export const ScrollableContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0 4rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    &.inactiveLinks {
        a {
            pointer-events: none;
        }
    }
    
    ${multipleMediaQuery(['XL', 'L'])(css`
        padding-left: 2.5rem;
    `)}

    ${multipleMediaQuery(['M'])(css`
        padding-left: 1.75rem;
        padding-right: 3.5rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        padding-left: 1.25rem;
        padding-right: 3.5rem;
    `)}
`;
