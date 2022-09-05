import React, { forwardRef } from 'react';

import { white } from '../../tokens';

import { ButtonContentWrapper, ButtonLoader, ButtonRoot, ButtonText, StyledSpinner } from './Button';
import type { ButtonProps, ButtonAllContentProps } from './Button.types';

/**
 * Функция для создания компонента Button,
 * что дает возможность кастомизировать вид, пропсы и т.п.,
 * при этом сохраняя в базе общий интерфейс.
 */
export function createButton<T extends HTMLElement, P extends ButtonProps>(Root = ButtonRoot) {
    // eslint-disable-next-line prefer-arrow-callback
    return forwardRef<T, P>(function Button(
        {
            children,
            text,
            contentLeft,
            contentRight,
            square,
            loader = <StyledSpinner color={white} size="56" />,
            disabled,
            isLoading,
            ...rest
        }: ButtonProps & ButtonAllContentProps,
        ref,
    ) {
        const isContentLeft = Boolean(contentLeft);
        const isContentRight = Boolean(contentRight);

        return (
            <Root
                ref={ref}
                $isContentLeft={isContentLeft}
                $isContentRight={isContentRight}
                $isLoading={isLoading}
                disabled={isLoading || disabled}
                square={square !== undefined ? square : !text && !children}
                {...rest}
            >
                {isLoading && <ButtonLoader>{loader}</ButtonLoader>}
                <ButtonContentWrapper $isLoading={isLoading}>
                    {children}
                    {!children && contentLeft}
                    {!children && text && (
                        <ButtonText $isContentLeft={isContentLeft} $isContentRight={isContentRight}>
                            {text}
                        </ButtonText>
                    )}
                    {!children && contentRight}
                </ButtonContentWrapper>
            </Root>
        );
    });
}
