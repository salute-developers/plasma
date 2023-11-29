import React, { useEffect, forwardRef, ForwardRefExoticComponent, RefAttributes, useMemo } from 'react';

import { RootProps, component } from '../../engines';
import { PopoverProps } from '../Popover';
import { cx } from '../../utils';

import { TooltipProps, TooltipPropsWithConfig } from './Tooltip.types';
import { StyledContentLeft, TooltipRoot } from './Tooltip.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { classes } from './Tooltip.tokens';

const ESCAPE_KEYCODE = 27;

const getStringValue = (value?: number | string) => {
    return typeof value === 'number' ? `${value}rem` : value;
};

/**
 * Компонент для текстовых подсказок. Основное предназначение — подписи к блокам.
 */

export const tooltipRoot = (Root: RootProps<HTMLDivElement, Omit<TooltipProps, 'isOpen' | 'text'>>) =>
    forwardRef<HTMLDivElement, TooltipPropsWithConfig>(
        (
            {
                id,
                text,
                isOpen,
                hasArrow = true,
                offset = [0, 8],
                minWidth,
                maxWidth,
                placement = 'bottom',
                insidePortal = true,
                target,
                onDismiss,
                view,
                size,
                contentLeft,
                config,
                ...rest
            },
            outerRef,
        ) => {
            useEffect(() => {
                const onKeyDown = (event: KeyboardEvent) => {
                    if (event.keyCode === ESCAPE_KEYCODE) {
                        onDismiss?.();
                    }
                };

                window.addEventListener('keydown', onKeyDown);

                return () => {
                    window.removeEventListener('keydown', onKeyDown);
                };
            }, []);

            const Popover = useMemo(() => component(config), [config]) as ForwardRefExoticComponent<
                PopoverProps & RefAttributes<HTMLDivElement>
            >;

            return (
                <Popover
                    isOpen={isOpen && Boolean(text?.length)}
                    placement={placement}
                    offset={offset}
                    zIndex="9200"
                    target={target}
                    insidePortal={insidePortal}
                    hasArrow={hasArrow}
                    aria-hidden={!isOpen}
                    aria-live="polite"
                    role="tooltip"
                    {...rest}
                >
                    <Root view={view} size={size}>
                        <TooltipRoot
                            ref={outerRef}
                            id={id}
                            className={cx(contentLeft ? classes.hasContentLeft : '')}
                            maxWidth={getStringValue(maxWidth)}
                            minWidth={getStringValue(minWidth)}
                        >
                            {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                            {text}
                        </TooltipRoot>
                    </Root>
                </Popover>
            );
        },
    );

export const tooltipConfig = {
    name: 'Tooltip',
    tag: 'div',
    layout: tooltipRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
