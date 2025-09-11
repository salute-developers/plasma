import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { base as sizeCSS } from '../Switch/_size/base';
import { base as toggleSizeCSS } from '../Switch/_toggleSize/base';
import { base as viewCSS } from '../Switch/_view/base';
import { base as focusedCSS } from '../Switch/_focused/base';
import { base as disabledCSS } from '../Switch/_disabled/base';
import { cx } from '../../utils';

import { StyledContent, StyledDescription, StyledInput, StyledLabel, StyledTrigger, base } from './Switch.styles';
import { SwitchProps } from './Switch.types';
import { classes } from './Switch.tokens';

export const switchRoot = (Root: RootProps<HTMLInputElement, SwitchProps>) =>
    forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
        const {
            size,
            toggleSize,
            view,
            focused,
            outlined,
            disabled,
            labelPosition,

            label,
            description,
            singleLine = true,

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
                toggleSize={toggleSize}
                disabled={disabled}
                focused={focused ?? outlined}
                labelPosition={labelPosition}
                id={id}
                style={style}
                className={cx(className)}
            >
                <StyledContent className={cx(classes[`${labelPosition}SwitchLabelPosition` as keyof typeof classes])}>
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
                    <StyledLabel tabIndex={-1} className={singleLine ? classes.singleLine : ''}>
                        {label}
                    </StyledLabel>
                    <StyledTrigger aria-hidden />
                </StyledContent>
                {description && <StyledDescription>{description}</StyledDescription>}
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
        toggleSize: {
            css: toggleSizeCSS,
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
