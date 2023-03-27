import styled, { css } from 'styled-components';
import { TabItem as TabItemCore, button2, surfaceLiquid03 } from '@salutejs/plasma-core';
import { accent } from '@salutejs/plasma-tokens-b2c';

import { addFocus } from '../../../../mixins';
import type { TabItemProps } from '../../types';

// TODO: https://github.com/salute-developers/plasma/issues/232
/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = styled(TabItemCore)<TabItemProps>`
    ${button2};

    height: var(--tab-item-height);
    padding: var(--tab-item-padding);

    border-radius: var(--tab-item-border-radius);
    transition: background-color 0.3s ease-in-out;

    /**
    * Если анимация отключена
    */
    ${({ animated, isActive }) =>
        !animated &&
        isActive &&
        css`
            background-color: ${surfaceLiquid03};
            /* stylelint-disable-next-line number-max-precision */
            box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.05);
        `}

    /* TODO: https://github.com/salute-developers/plasma/issues/232 */
    ${({ theme: { lowPerformance } }: { theme: { lowPerformance: boolean } }) => css`
        ${addFocus({
            outlineRadius: 'var(--tab-focus-border-radius)',
            outlined: true,
            outlineSize: '0.063rem',
            outlineOffset: '0.125rem',
            outlineColor: accent,
            lowPerformance,
        })}
    `}
`;
