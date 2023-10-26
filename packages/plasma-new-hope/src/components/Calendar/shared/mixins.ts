import { styled } from '@linaria/react';

import { addFocus } from '../../../mixins/addFocus';

import { tokens } from './tokens';

export const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexSpaceBetween = `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

/**
 * Миксин для установки синтетического фокуса на выбранной кнопке.
 */

export const buttonFocus = styled.button`
    --add-focus-outline-offset: 0.125rem;
    --add-focus-outline-size: 0.063rem;
    --add-focus-outline-radius: 0.563rem;
    --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --add-focus-outline-color: var(${tokens.calendarOutlineFocusColor});
    ${addFocus()};

    border: none;
    background-color: transparent;
    padding: 0;
`;

/**
 * Миксины для изменения стиля выбранного дня.
 */
const active = `
    &:active {
        background-color: var(--active-background);
        color: var(--active-color);
        font-weight: var(--plasma-typo-body-s-bold-font-weight);
    }
`;

/*
 *  Если использовать токены и классы из ./tokens rollup ругается на этот миксин
 */
export const selectedMixin = `
    outline: none;
    cursor: pointer;

    &:hover:not(.item-selected) {
        background-color: var(--selectable-background-hover);
        
        ${String(active)};
    };

    &.item-selected {
        border: 0;
        background-color: var(--selected-background);
        color: var(--selected-color);
        cursor: default;
        font-weight: var(--plasma-typo-body-s-bold-font-weight);
    };

    &.item-current {
        border: 0.063rem solid var(--current-border-color);

        &:hover {
            background-color: var(--current-background-hover);
            color: var(--current-color-hover);

            & > div {
                background-color: var(--current-child-background-hover);
                min-width: var(--selected-min-width);
                min-height: var(--selected-min-height);
            }
        }
    };

    &.item-hovered, &.item-hovered:hover {
        background-color: var(--hovered-background);
        color: var(--hovered-color);
        cursor: pointer;
        font-weight: var(--plasma-typo-body-s-bold-font-weight);
        ${String(active)};
    }

    ${String(active)};
`;
