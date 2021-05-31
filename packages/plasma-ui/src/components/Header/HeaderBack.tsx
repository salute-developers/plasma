import React from 'react';
import styled, { css } from 'styled-components';
import { scalingPixelBasis } from '@salutejs/plasma-tokens';
import { IconChevronLeft, IconSize } from '@salutejs/plasma-icons';
import type { PickOptional } from '@salutejs/plasma-core';
import { mediaQuery } from '@salutejs/plasma-core';

import { Button, ButtonProps } from '../Button';

const StyledHeaderBackButton = styled(Button)`
    && {
        position: absolute;
        /* От паддинга отнимаем сдвиг на разницу между button="s" (40) и высотой шапки (от 28 до 36) */
        top: calc(var(--plasma-header-pt) - (2.5rem - var(--plasma-header-height)) / 2);
        left: calc(var(--plasma-grid-margin) * -1 + ${16 / scalingPixelBasis}rem);
        padding: 0;

        ${({ theme }) =>
            mediaQuery(
                'S',
                theme.deviceScale,
            )(css`
                position: static;
                margin-right: 1rem;
                width: auto;
                height: auto;
            `)}
    }
`;
export interface HeaderBackProps
    extends PickOptional<ButtonProps, 'as' | 'size' | 'scaleOnInteraction' | 'disabled'>,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconSize?: IconSize;
}

/**
 * Кнопка назад.
 */
export const HeaderBack: React.FC<HeaderBackProps> = ({ iconSize = 's', ...rest }) => (
    <StyledHeaderBackButton size="s" square view="clear" {...rest}>
        <IconChevronLeft size={iconSize} />
    </StyledHeaderBackButton>
);
