import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base as viewCSS } from './_view/base';
import { base as sizeCSS } from './_size/base';
import { base as disabledCSS } from './_disabled/base';
import { base as focusedCSS } from './_focused/base';
import type { ButtonProps } from './Button.types';
import { base, ButtonText, Loader, LoadWrap, StyledButton } from './Button.styles';
import { classes } from './tokens';

export const buttonRoot = (Root: RootProps<HTMLDivElement, ButtonProps>) =>
    forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
        const {
            children,
            view,
            size,
            text,
            contentLeft,
            contentRight,
            isLoading,
            loader,
            stretch,
            square,
            pin,
            disabled,
            focused,
            ...rest
        } = props;

        const txt = typeof children === 'string' ? children : text;

        const stretchClass = stretch ? classes.buttonStretch : undefined;
        const squareClass = square ? classes.buttonSquare : undefined;

        return (
            <Root view={view} size={size} disabled={disabled} focused={focused} className={cx(stretchClass)}>
                <StyledButton
                    type="button"
                    ref={ref}
                    className={cx(classes.buttonRoot, squareClass)}
                    pin={pin}
                    disabled={disabled}
                    {...rest}
                >
                    <LoadWrap isLoading={isLoading}>
                        {contentLeft}
                        {txt ? <ButtonText>{txt}</ButtonText> : children}
                        {contentRight}
                    </LoadWrap>
                    {isLoading && <Loader>{loader || '♻️'}</Loader>}
                </StyledButton>
            </Root>
        );
    });

export const buttonConfig = {
    name: 'Button',
    tag: 'div',
    layout: buttonRoot,
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
            // TODO: isLoading => disabled
        },
    },
    defaults: {
        view: 'secondary',
        size: 'm',
    },
};
