import React, { forwardRef, useMemo } from 'react';

import type { RootProps } from '../../engines';
import { IconClose } from '../_Icon/IconClose';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readonlyCSS } from './variations/_readonly/base';
import { base as focusedCSS } from './variations/_focused/base';
import type { ChipProps } from './Chip.types';
import { StyledContentClear, StyledContentLeft, StyledContentMain, StyledContentRight, base } from './Chip.styles';
import { tokens } from './Chip.tokens';

export const chipRoot = (Root: RootProps<HTMLButtonElement, ChipProps>) =>
    forwardRef<HTMLButtonElement, ChipProps>((props, ref) => {
        const {
            children,
            text,
            contentLeft,
            contentRight,
            contentClearButton,
            size,
            onClear,
            readOnly = false,
            disabled = false,
            ...rest
        } = props;

        const txt = !text && typeof children === 'string' ? children : text;

        const handleClick = () => {
            if (disabled || readOnly) {
                return;
            }

            onClear?.();
        };

        const ClearContent = useMemo(() => {
            return (
                contentClearButton || (
                    <StyledContentClear>
                        <IconClose sizeCustomProperty={tokens.closeIconSize} color="inherit" />
                    </StyledContentClear>
                )
            );
        }, [contentClearButton, tokens.closeIconSize]);

        return (
            <Root
                type="button"
                ref={ref}
                tabIndex={readOnly ? -1 : 0}
                onClick={handleClick}
                disabled={disabled}
                readOnly={!disabled && readOnly}
                size={size}
                {...rest}
            >
                {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                {txt ? <StyledContentMain>{txt}</StyledContentMain> : children}
                {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}
                {ClearContent}
            </Root>
        );
    });

export const chipConfig = {
    name: 'Chip',
    tag: 'button',
    layout: chipRoot,
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
        readOnly: {
            css: readonlyCSS,
            attrs: true,
        },
        focused: {
            css: focusedCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
