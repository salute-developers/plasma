import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';

import { Props } from './EmptyState.types';
import { Wrapper, StyledButton, IconWrapper, Description } from './EmptyState.styles';

/**
 * Компонент для альтернативного показа содержимого выпадающего списка.
 */
export const emptyStateRoot = (Root: RootProps<HTMLDivElement, Props>) =>
    forwardRef<HTMLDivElement, Props>((props, ref) => {
        const { icon, description, buttonText, buttonAction } = props;

        return (
            <Root {...props} ref={ref}>
                <Wrapper>
                    {icon && <IconWrapper>{icon}</IconWrapper>}

                    <Description>{description}</Description>

                    {buttonText && (
                        <StyledButton stretching="filled" onClick={buttonAction}>
                            {buttonText}
                        </StyledButton>
                    )}
                </Wrapper>
            </Root>
        );
    });

export const emptyStateConfig = {
    name: 'EmptyState',
    tag: 'div',
    layout: emptyStateRoot,
    base: '',
    defaults: {
        size: 'l',
    },
    variations: {},
};
