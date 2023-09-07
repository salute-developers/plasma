import React, { forwardRef } from 'react';
import type { ButtonProps } from '@salutejs/plasma-hope';
import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);

const ButtonBase = component(mergedConfig);

/**
 * Кнопка.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { square, ...rest } = props;
    // TODO: I don't like these code
    const isSquare = square !== undefined ? square : !props.text && !props.children;

    // old API – remove this code
    const style = {} as Record<string, string>;
    // TODO: PLASMA-2165
    style['--btn-padding'] = 'var(--plasma-button-padding)';
    if (props.contentLeft || props.contentRight) {
        // NOTE: packages/plasma-tokens-b2c/data/components.ts => button
        // TODO: PLASMA-2163
        if (props.size === 'm' || props.size === 's' || props.size === undefined) {
            style['--btn-padding'] = 'calc(var(--plasma-button-padding) + 0.125rem)';
        }
    }

    // TODO: PLASMA-2166
    if (props.children) {
        // we need to keep them as props but remove its content
        rest.contentLeft = Boolean(rest.contentLeft);
        rest.contentRight = Boolean(rest.contentRight);
    }

    return <ButtonBase style={style} square={isSquare} {...rest} ref={ref} />;
});
