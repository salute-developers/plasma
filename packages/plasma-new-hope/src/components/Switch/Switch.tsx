import React, { forwardRef } from 'react';
import { css } from '@linaria/core';

import { RootProps } from '../../engines';
import { base as sizeCSS } from '../Switch/_size/base';
import { base as viewCSS } from '../Switch/_view/base';
import { base as focusedCSS } from '../Switch/_focused/base';
import { base as disabledCSS } from '../Switch/_disabled/base';
import { base as labelPositionCSS } from '../Switch/_label-position/base';

import { StyledInput, StyledLabel, StyledTrigger } from './Switch.styles';
import { SwitchProps } from './Switch.types';

const base = css`
    position: relative;
    display: flex;
    align-items: center;

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
            outlined,
            disabled,
            labelPosition,

            label,

            id,
            style,
            className,

            // singleLine,

            checked,
            pressed,
            defaultChecked,

            ...rest
        } = props;

        const exactChecked = Boolean((checked ?? pressed) !== undefined ? checked ?? pressed : defaultChecked);

        return (
            <Root
                view={view}
                size={size}
                disabled={disabled}
                focused={focused ?? outlined}
                labelPosition={labelPosition}
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
                    checked={checked ?? pressed}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
                <StyledLabel tabIndex={-1}>{label}</StyledLabel>
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
        labelPosition: {
            css: labelPositionCSS,
        },
    },
    defaults: {
        size: 's',
        view: 'default',
    },
};
