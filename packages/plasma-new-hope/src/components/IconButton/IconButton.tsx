import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base, IconButtonStyled } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';
import { classes } from './IconButton.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as focusedCSS } from './variations/_focused/base';

export const iconButtonRoot = (Root: RootProps<HTMLButtonElement, IconButtonProps>) =>
    forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
        const {
            children,
            view,
            size,
            icon,
            isLoading,
            loader,
            pin,
            disabled,
            focused,
            outlined,
            className,
            style,
            ...rest
        } = props;

        return (
            <Root view={view} size={size} focused={focused} disabled={disabled} className={classes.iconButtonItem}>
                <IconButtonStyled
                    view={view}
                    size={size}
                    loader={loader}
                    isLoading={isLoading}
                    pin={pin}
                    disabled={disabled}
                    focused={focused}
                    outlined={outlined}
                    ref={ref}
                    square // Временное решение
                    stretching="fixed" // Не работает не понятное почему
                    className={cx(className)}
                    style={style}
                    {...rest}
                >
                    {icon || children}
                </IconButtonStyled>
            </Root>
        );
    });

export const iconButtonConfig = {
    name: 'Button',
    tag: 'div',
    layout: iconButtonRoot,
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
        focused: {
            css: focusedCSS,
        },
    },
    defaults: {
        view: 'secondary',
        size: 'm',
    },
};
