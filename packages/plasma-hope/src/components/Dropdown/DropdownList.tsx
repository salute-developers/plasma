import styled, { css, InterpolationFunction } from 'styled-components';
import { backgroundPrimary } from '@salutejs/plasma-core';
import { CSSProperties } from 'react';

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

export interface DropdownListCssProperties {
    /**
     * Значение css overflow для выпадающего меню.
     * @default initial
     * @example listOverflow="scroll"
     */
    listOverflow?: CSSProperties['overflow'];
    /**
     * Значение css height для выпадающего меню.
     * @default initial
     * @example listHeight="11", listHeight="auto", listHeight={11}
     */
    listHeight?: number | CSSProperties['height'];
}

export const applyDropdownListCssProperties: InterpolationFunction<DropdownListCssProperties> = ({
    listHeight,
    listOverflow,
}) => {
    const computedHeight = !Number.isNaN(Number(listHeight)) ? `${listHeight}rem` : listHeight;

    return css`
        --plasma-dropdown-height: ${computedHeight};
        --plasma-dropdown-overflow: ${listOverflow};
    `;
};
