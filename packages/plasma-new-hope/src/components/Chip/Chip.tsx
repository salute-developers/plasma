import React, { forwardRef, MouseEvent } from 'react';

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
            onClickClose,
            pilled = false,
            readOnly = false,
            disabled = false,
            // @ts-ignore
            _forceChipManipulationWithReadonly,
            // @ts-ignore
            chipClickArea,
            ...rest
        } = props;

        const txt = !text && typeof children === 'string' ? children : text;
        const pilledClass = pilled ? classes.pilled : undefined;

        const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
            // TODO: #1547
            // eslint-disable-next-line no-underscore-dangle
            if (disabled || (readOnly && !_forceChipManipulationWithReadonly)) {
                return;
            }

            onClick?.(event);
        };

        const handleClickClose = (event: MouseEvent<HTMLDivElement>) => {
            if (disabled || (readOnly && !_forceChipManipulationWithReadonly) || !onClickClose) {
                return;
            }

            event.stopPropagation();
            onClickClose(event);

            if (onClear) {
                onClear();
            }
        };

        return (
            <Root
                type="button"
                ref={ref}
                className={cx(pilledClass, classes.chipItem, className)}
                tabIndex={readOnly ? -1 : 0}
                onClick={handleClick}
                disabled={disabled}
                readOnly={!disabled && readOnly && !_forceChipManipulationWithReadonly}
                size={size}
                {...rest}
            >
                {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                {txt ? <StyledContentMain>{txt}</StyledContentMain> : children}
                {contentRight && <StyledContentRight hasClear={hasClear}>{contentRight}</StyledContentRight>}
                {hasClear &&
                    (contentClearButton || (
                        <StyledContentClear onClick={handleClickClose}>
                            <IconClose sizeCustomProperty={tokens.closeIconSize} color="inherit" />
                        </StyledContentClear>
                    ))}
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
