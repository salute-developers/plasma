import React, { ComponentProps, useCallback, MouseEvent } from 'react';
import {
    buttonConfig,
    component,
    mergeConfig,
    buttonClasses,
    buttonTokens,
} from '@salutejs/plasma-new-hope/styled-components';
import styled from 'styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

export type ButtonProps = ComponentProps<typeof ButtonComponent>;

// INFO: Данное поведение запрошено продуктом/командой `sdds-cs`
const StyledButton = styled(ButtonComponent)`
    &&.${String(buttonClasses.buttonLoading)} {
        color: var(${buttonTokens.buttonColorActive}, var(${buttonTokens.buttonColor}));
        background: var(${buttonTokens.buttonBackgroundColorActive}, var(${buttonTokens.buttonBackgroundColor}));

        pointer-events: none;
    }
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
