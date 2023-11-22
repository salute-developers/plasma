import React, { forwardRef, useMemo } from 'react';

import type { RootProps } from '../../engines';
import { IconClose } from '../_Icon/IconClose';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as focusedCSS } from './variations/_focused/base';
import type { ChipProps } from './Chip.types';
import { StyledContentClear, StyledContentLeft, StyledContentMain, StyledContentRight, base } from './Chip.styles';
import { classes } from './Chip.tokens';

export const chipRoot = (Root: RootProps<HTMLButtonElement, ChipProps>) =>
    forwardRef<HTMLButtonElement, ChipProps>((props, ref) => {
        const {
            children,
            text,
            contentLeft,
            contentRight,
            contentClear,
            size,
            onClear,
            hasClear = false,
            readOnly = false,
            disabled = false,
            ...rest
        } = props;

        const txt = !text && typeof children === 'string' ? children : text;
        const readOnlyClass = readOnly ? classes.readOnly : undefined;

        const handleClick = () => {
            if (disabled || readOnly) {
                return;
            }

            onClear?.();
        };

        const getClearIconSize = (componentSize?: string) => {
            if (componentSize === 'l') {
                return 's';
            }

            return 'xs';
        };

        const ClearContent = useMemo(() => {
            return (
                contentClear || (
                    <StyledContentClear>
                        <IconClose size={getClearIconSize(size)} color="inherit" />
                    </StyledContentClear>
                )
            );
        }, [contentClear, size]);

        return (
            <Root
                type="button"
                ref={ref}
                className={cx(readOnlyClass)}
                tabIndex={readOnly ? -1 : 0}
                onClick={handleClick}
                disabled={disabled}
                size={size}
                {...rest}
            >
                {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                {txt ? <StyledContentMain>{txt}</StyledContentMain> : children}
                {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}
                {hasClear && ClearContent}
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
        focused: {
            css: focusedCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
