import React, { forwardRef } from 'react';
import { css } from '@linaria/core';

import { RootProps } from '../../engines';
import { base as sizeCSS } from '../Switch/_size/base';
import { base as viewCSS } from '../Switch/_view/base';
import { base as focusedCSS } from '../Switch/_focused/base';
import { base as disabledCSS } from '../Switch/_disabled/base';

import { StyledInput, StyledLabel, StyledTrigger } from './Switch.styles';
import { SwitchProps } from './Switch.types';

const base = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:focus {
        outline: 0 none;
    }
`;

export const switchRoot = (Root: RootProps<HTMLInputElement, SwitchProps>) =>
    forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
        const {
            size,
            view,
            focused,
            disabled,

            label,

            id,
            style,
            className,

            // singleLine,

            checked,
            defaultChecked,

            ...rest
        } = props;

        const exactChecked = Boolean(checked !== undefined ? checked : defaultChecked);
        // const singleLineClass = singleLine ? 'single-line' : '';

        return (
            <Root
                view={view}
                size={size}
                disabled={disabled}
                focused={focused}
                id={id}
                style={style}
                className={className}
            >
                <StyledInput
                    {...rest}
                    ref={ref}
                    role="switch"
                    aria-checked={exactChecked}
                    type="checkbox"
                    checked={checked}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
                {label && <StyledLabel tabIndex={-1}>{label}</StyledLabel>}
                <StyledTrigger aria-hidden />
            </Root>
        );
    });

export const switchConfig = {
    name: 'Switch',
    tag: 'label',
    base,
    layout: switchRoot,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
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
        size: 's',
        view: 'default',
    },
};
