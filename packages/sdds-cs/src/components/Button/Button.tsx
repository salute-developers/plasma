import React, { ComponentProps, useCallback, MouseEvent } from 'react';
import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import styled from 'styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

export type ButtonProps = ComponentProps<typeof ButtonComponent>;

// INFO: Данное поведение запрошено продуктом/командой `sdds-cs`
const StyledButton = styled(ButtonComponent)`
    pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};
`;

/**
 * Кнопка.
 */
export const Button = ({ onClick, isLoading, ...props }: ButtonProps) => {
    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (!isLoading) {
                onClick?.(event);
            }
        },
        [isLoading, onClick],
    );

    return <StyledButton onClick={handleClick} isLoading={isLoading} {...props} />;
};
