import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { IconSearch } from '@salutejs/plasma-icons';

import { Context, setIconGridSize, setIconSize } from '../../store';
import { listSizes } from '../../utils/listSizes';

import { StyledActionIcon } from './StyledActionIcon';

type IconFilterMenuProps = {
    setInputFocus: () => void;
};

const StyledFilterMenu = styled.div`
    position: sticky;
    top: 2.125rem;
    display: inline-flex;
    row-gap: 0.75rem;
    flex-direction: column;
    align-items: center;
`;

const StyledIconSearch = styled.span`
    margin-bottom: 2.5rem;

    ${StyledActionIcon};
`;

const StyledFilterMenuItem = styled.div<{ isActive?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: rgba(255, 255, 255, 0.28);

    cursor: pointer;

    transition: var(--color-transition);

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

export const IconFilterMenu = ({ setInputFocus }: IconFilterMenuProps) => {
    const { state, dispatch } = useContext(Context);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        setInputFocus();
    };

    return (
        <StyledFilterMenu>
            <StyledIconSearch onClick={scrollToTop}>
                <IconSearch size="xs" color="inherit" />
            </StyledIconSearch>
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
