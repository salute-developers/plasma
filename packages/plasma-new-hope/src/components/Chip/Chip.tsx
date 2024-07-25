import React, { forwardRef, useMemo } from 'react';

import type { RootProps } from '../../engines';
import { IconClose } from '../_Icon/Icons/IconClose';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readonlyCSS } from './variations/_readonly/base';
import { base as focusedCSS } from './variations/_focused/base';
import { base as pilledCSS } from './variations/_pilled/base';
import type { ChipProps } from './Chip.types';
import { StyledContentClear, StyledContentLeft, StyledContentMain, StyledContentRight, base } from './Chip.styles';
import { classes, tokens } from './Chip.tokens';

export const chipRoot = (Root: RootProps<HTMLButtonElement, ChipProps>) =>
    forwardRef<HTMLButtonElement, ChipProps>((props, ref) => {
        const {
            children,
            text,
            contentLeft,
            contentRight,
            contentClearButton,
            hasClear = true,
            size,
            className,
            onClear,
            onClick,
            pilled = false,
            readOnly = false,
            disabled = false,
            ...rest
        } = props;

        const txt = !text && typeof children === 'string' ? children : text;
        const pilledClass = pilled ? classes.pilled : undefined;

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (disabled || readOnly) {
                return;
            }

            onClick?.(event);
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
                className={cx(pilledClass, className)}
                tabIndex={readOnly ? -1 : 0}
                onClick={handleClick}
                disabled={disabled}
                pilled={pilled}
                readOnly={!disabled && readOnly}
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
        readOnly: {
            css: readonlyCSS,
            attrs: true,
        },
        focused: {
            css: focusedCSS,
        },
        pilled: {
            css: pilledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
