import React, { forwardRef } from 'react';
import type { CSSProperties } from 'react';

import type { RootProps } from '../../engines';
import { convertRoundnessMatrix } from '../../utils/roundness';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as focusedCSS } from './variations/_focused/base';
import type { ButtonProps } from './Button.types';
import { base, ButtonText, Loader, LoadWrap } from './Button.styles';
import { classes, tokens } from './Button.tokens';

export const buttonRoot = (Root: RootProps<HTMLButtonElement, ButtonProps>) =>
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
            className,
            style,
            ...rest
        } = props;

        const txt = typeof children === 'string' ? children : text;

        const stretchClass = stretch ? classes.buttonStretch : undefined;
        const squareClass = square ? classes.buttonSquare : undefined;
        const buttonBorderRadius = pin
            ? convertRoundnessMatrix(pin, `var(${tokens.buttonRadius})`, `var(${tokens.buttonHeight})`)
            : `var(${tokens.buttonRadius}, calc(var(${tokens.buttonHeight}) / 4))`;

        return (
            <Root
                type="button"
                ref={ref}
                view={view}
                size={size}
                disabled={disabled}
                focused={focused}
                className={cx(squareClass, stretchClass, className)}
                style={{ ...style, '--plasma_computed-btn-br': buttonBorderRadius } as CSSProperties}
                {...rest}
            >
                <LoadWrap isLoading={isLoading}>
                    {contentLeft}
                    {txt ? <ButtonText>{txt}</ButtonText> : children}
                    {contentRight}
                </LoadWrap>
                {isLoading && <Loader>{loader || '♻️'}</Loader>}
            </Root>
        );
    });

export const buttonConfig = {
    name: 'Button',
    tag: 'button',
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
