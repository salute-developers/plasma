import React from 'react';
import styled, { css } from 'styled-components';
import { IconChevronLeft, IconSize } from '@salutejs/plasma-icons';
import type { PickOptional } from '@salutejs/plasma-core';

import { mediaQuery } from '../../utils';
import { Button, ButtonProps } from '../Button';

export interface HeaderArrowProps
    extends PickOptional<ButtonProps, 'as' | 'size' | 'scaleOnInteraction' | 'disabled'>,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Тип стрелки.
     */
    arrow: 'back' | 'minimize';
    iconSize?: IconSize;
}

// TODO: https://github.com/salute-developers/plasma/issues/232
const StyledButton = styled(Button)`
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    right: 100%;
    margin-right: 0.5rem;

    ${({ theme }) =>
        mediaQuery(
            'S',
            theme.deviceScale,
        )(css`
            position: static;
            width: auto;
            height: calc(var(--plasma-header-pt) + var(--plasma-header-height) + var(--plasma-header-pb));
            padding: 0;
            margin-right: 1rem;
            margin-top: calc(var(--plasma-header-pt) * -1);
        `)}
`;
// TODO: https://github.com/salute-developers/plasma/issues/232
const StyledIcon = styled(IconChevronLeft)<Pick<HeaderArrowProps, 'arrow'>>`
    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'transform 0.15s ease-in-out')};

    ${({ arrow }) =>
        arrow === 'minimize' &&
        css`
            transform: rotate(-90deg);
        `}
`;

/**
 * Кнопка-стрелка с возможностью отображения в двух типах - "назад" или "свернуть".
 */
export const HeaderArrow = ({ arrow, iconSize = 's', ...rest }: HeaderArrowProps) => (
    <StyledButton size="s" square view="clear" tabIndex={-1} outlined={false} forwardedAs="div" {...rest}>
        <StyledIcon size={iconSize} arrow={arrow} />
    </StyledButton>
);
