import { styled } from '@linaria/react';

import { tokens } from '../Calendar.tokens';
import { addFocus } from '../../../mixins';

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
    border: none;
    background-color: transparent;
    padding: 0;
    outline: none;

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
        outlineRadius: '0.563rem',
    })};
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
