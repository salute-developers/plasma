import styled, { css } from 'styled-components';
import { TabItem as BaseTabItem, secondary, footnote2 } from '@salutejs/plasma-core';

import { link, linkHover, linkActive } from '../../../../tokens';
import { TabItemProps } from '../../types';

/**
 * Элемент списка вкладок, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = styled(BaseTabItem)<TabItemProps>`
    ${footnote2};

    /* stylelint-disable-next-line number-max-precision */
    padding: 1rem 1.3125rem;
    height: 3.75rem;

    /* stylelint-disable-next-line number-max-precision */
    box-shadow: inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.16);
    color: ${secondary};

    transition: color 0.1s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        color: ${linkHover};
    }

    /**
     * Состояние активности
     */
    ${({ isActive }) =>
        isActive &&
        css`
            color: ${link};
            box-shadow: inset 0 -0.125rem 0 ${link};
        `}

    &.focus-visible:focus {
        color: ${linkActive};
        box-shadow: inset 0 -0.125rem 0 ${linkActive};
    }
`;
