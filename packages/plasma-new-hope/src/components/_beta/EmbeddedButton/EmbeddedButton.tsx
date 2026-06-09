import React, { forwardRef } from 'react';

import type { RootProps } from '../../../engines';
import { cx } from '../../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import type { EmbeddedButtonProps } from './EmbeddedButton.types';
import { base, IconContainer, Loader, LoadWrap, StyledSpinner } from './EmbeddedButton.styles';
import { classes } from './EmbeddedButton.tokens';

export const embeddedButtonRoot = (Root: RootProps<HTMLButtonElement, EmbeddedButtonProps>) =>
    forwardRef<HTMLButtonElement, EmbeddedButtonProps>((props, ref) => {
        const { children, view, size, disabled, isLoading, loader, position = 'center', className, ...rest } = props;

        const isLoadingClass = isLoading ? classes.embeddedButtonLoading : undefined;

        return (
            <Root
                type="button"
                ref={ref}
                view={view}
                size={size}
                disabled={disabled}
                className={cx(isLoadingClass, className)}
                {...rest}
            >
                <LoadWrap position={position} isLoading={isLoading}>
                    <IconContainer>{children}</IconContainer>
                </LoadWrap>
                {isLoading && <Loader>{loader || <StyledSpinner />}</Loader>}
            </Root>
        );
    });

export const embeddedButtonConfig = {
    name: 'EmbeddedButton',
    tag: 'button',
    layout: embeddedButtonRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'secondary',
        size: 'm',
    },
};
