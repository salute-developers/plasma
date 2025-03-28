import styled, { css } from 'styled-components';

import { multipleMediaQuery } from '../../../mixins';

export const DraggableScrollContainer = styled.div`
    width: 100%;
    overflow: hidden;
    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }
`;

export const ScrollableContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding-right: 4rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    ${multipleMediaQuery(['M', 'S'])(css`
        padding-right: 3.5rem;
    `)}
`;
