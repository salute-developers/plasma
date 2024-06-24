import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { Context, setIconGridSize, setIconSize } from '../../store';
import { listSizes } from '../../utils/listSizes';

const StyledFilterMenu = styled.div`
    position: sticky;
    top: 3rem;
    display: inline-flex;
    row-gap: 0.75rem;
    flex-direction: column;
    align-self: self-end;
`;

const StyledFilterMenuItem = styled.div<{ isActive?: boolean }>`
    display: inline-flex;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: rgba(255, 255, 255, 0.28);

    cursor: pointer;

    transition: color 120ms ease-in;

    &:hover {
        color: rgba(255, 255, 255, 1);
    }

    ${({ isActive }) =>
        isActive &&
        css`
            color: rgba(255, 255, 255, 1);

            cursor: default;

            &:hover {
                color: rgba(255, 255, 255, 1);
            }
        `}
`;

export const IconFilterMenu = () => {
    const { state, dispatch } = useContext(Context);

    return (
        <StyledFilterMenu>
            {listSizes.map(({ value, label }) => (
                <StyledFilterMenuItem
                    key={label}
                    isActive={label === state.gridItemsSize.label}
                    onClick={() => {
                        dispatch(setIconGridSize({ value, label }));
                        dispatch(setIconSize({ value, label }));
                    }}
                >
                    {label}
                </StyledFilterMenuItem>
            ))}
        </StyledFilterMenu>
    );
};
