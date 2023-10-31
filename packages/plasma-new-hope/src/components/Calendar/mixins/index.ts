import { styled } from '@linaria/react';

import { tokens } from '../Calendar.tokens';

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

export const addFocus = () => `
    position: relative;

    &::before {
        content: '';

        position: absolute;
        top: var(--calendar_private-add-focus-outline-offset);
        left: var(--calendar_private-add-focus-outline-offset);
        right: var(--calendar_private-add-focus-outline-offset);
        bottom: var(--calendar_private-add-focus-outline-offset);

        display: block;
        box-sizing: content-box;

        border: var(--calendar_private-add-focus-outline-size) solid transparent;
        border-radius: var(--calendar_private-add-focus-outline-radius);

        transition: var(--calendar_private-add-focus-outline-transition);

        pointer-events: none;
    }

    &.focus-visible:focus,
    &[data-focus-visible-added] {
        outline: none;
        z-index: 1;
        
        &::before {
            box-shadow: 0 0 0 var(--calendar_private-add-focus-outline-size) var(--calendar_private-add-focus-outline-color);
        }
    }
`;

export const buttonFocus = styled.button`
    --calendar_private-add-focus-outline-offset: -0.125rem;
    --calendar_private-add-focus-outline-size: 0.063rem;
    --calendar_private-add-focus-outline-radius: 0.563rem;
    --calendar_private-add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --calendar_private-add-focus-outline-color: var(${tokens.calendarOutlineFocusColor});

    border: none;
    background-color: transparent;
    padding: 0;

    ${addFocus()};
`;

/**
 * Миксины для изменения стиля выбранного дня.
 */
const active = `
    &:active {
        background-color: var(--calendar_private-active-background);
        color: var(--calendar_private-active-color);
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
        background-color: var(--calendar_private-selectable-background-hover);
        
        ${String(active)};
    };

    &.item-selected {
        border: 0;
        background-color: var(--calendar_private-selected-background);
        color: var(--calendar_private-selected-color);
        cursor: default;
        font-weight: var(--plasma-typo-body-s-bold-font-weight);
    };

    &.item-current {
        border: 0.063rem solid var(--calendar_private-current-border-color);

        &:not(.item-selected):hover {
            background-color: var(--calendar_private-current-background-hover);
            color: var(--calendar_private-current-color-hover);

            & > div:first-of-type {
                background-color: var(--calendar_private-current-child-background-hover);
                min-width: var(--calendar_private-selected-min-width);
                min-height: var(--calendar_private-selected-min-height);
            }
        
            ${String(active)};
        }
        &:active {
            background-color: var(--calendar_private-active-background);
            color: var(--calendar_private-active-color);
            font-weight: var(--plasma-typo-body-s-bold-font-weight);
        }
    };

    &.item-hovered, &.item-hovered:hover {
        background-color: var(--calendar_private-hovered-background);
        color: var(--calendar_private-hovered-color);
        cursor: pointer;
        font-weight: var(--plasma-typo-body-s-bold-font-weight);
        ${String(active)};
    }

    ${String(active)};
`;
