import React, { ComponentProps, useCallback, MouseEvent, forwardRef } from 'react';
import {
    iconButtonConfig,
    component,
    mergeConfig,
    buttonClasses,
    iconButtonTokens,
} from '@salutejs/plasma-new-hope/emotion';
import styled from '@emotion/styled';

import { config } from './IconButton.config';

const mergedConfig = mergeConfig(iconButtonConfig, config);
const IconButtonComponent = component(mergedConfig);

type IconButtonProps = ComponentProps<typeof IconButtonComponent>;

const {
    iconButtonBackgroundColorActive,
    iconButtonBackgroundColor,
    iconButtonColor,
    iconButtonColorActive,
} = iconButtonTokens;

// INFO: Данное поведение запрошено продуктом
const StyledIconButton = styled(IconButtonComponent)`
    &&.${String(buttonClasses.buttonLoading)} {
        color: var(${iconButtonColorActive}, var(${iconButtonColor}));
        background: var(${iconButtonBackgroundColorActive}, var(${iconButtonBackgroundColor}));

        pointer-events: none;
    }
`;

/**
 * Кнопка с иконкой.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ onClick, isLoading, ...props }, ref) => {
    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (!isLoading) {
                onClick?.(event);
            }
        },
        [isLoading, onClick],
    );

    return <StyledIconButton ref={ref} onClick={handleClick} isLoading={isLoading} {...props} />;
});
