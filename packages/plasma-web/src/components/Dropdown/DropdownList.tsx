import styled from 'styled-components';
import { backgroundPrimary } from '@salutejs/plasma-core';

/**
 * Выпадающий список.
 */
export const DropdownList = styled.ul`
    margin: 0;
    padding: var(--plasma-dropdown-padding, 0);

    width: 100%;
    height: var(--plasma-dropdown-height, initial);

    border-radius: var(--plasma-dropdown-border-radius, 0);

    background-color: var(--plasma-dropdown-background, ${backgroundPrimary});

    box-shadow: 0 0.75rem 1.75rem rgba(0, 0, 0, 0.08);
    transition: opacity 0.3s ease-in-out;
    list-style: none;

    box-sizing: border-box;
    overflow-y: var(--plasma-dropdown-overflow, initial);
`;
