import React, { forwardRef, useState, useRef } from 'react';
import type { RootProps } from 'src/engines/types';
import cls from 'classnames';
import {
    useFloating,
    useInteractions,
    useClick,
    useFocus,
    useDismiss,
    useRole,
    FloatingArrow,
    arrow,
    offset,
    useHover,
    safePolygon,
    FloatingPortal,
    autoUpdate,
} from '@floating-ui/react';
import { css } from '@linaria/core';

import { Slot } from '../../_Slot/Slot';
import { ARROW_HEIGHT, ARROW_PADDING, ARROW_POLYGON, ARROW_WIDTH } from '../Popover/Popover';

import { tokens, classes } from './Tooltip.tokens';
import { base, Wrapper, IconWrapper } from './Tooltip.styles';
import type { TooltipProps } from './Tooltip.types';

export const tooltipRoot = (Root: RootProps<HTMLDivElement, Omit<TooltipProps, 'target' | 'children' | 'iconSlot'>>) =>
    forwardRef<HTMLDivElement, TooltipProps>(
        (
            {
                children,
                target,
                iconSlot,
                trigger = 'click',
                placement = 'bottom',
                hasTail = true,
                offset: outerOffset = 0,
                delayOpen = 0,
                delayClose = 0,
                zIndex = 1000,
                className,
                style,
                size,
                view,
                ...rest
            },
            outerRootRef,
        ) => {
            const [opened, setOpened] = useState(false);

            const arrowRef = useRef(null);

            const handleToggle = (opened: boolean) => {
                setOpened(opened);
            };

            const { refs, floatingStyles, context } = useFloating({
                whileElementsMounted: autoUpdate,
                placement,
                open: opened,
                onOpenChange: handleToggle,
                middleware: [
                    hasTail && arrow({ element: arrowRef, padding: ARROW_PADDING }),
                    offset((hasTail ? ARROW_HEIGHT : 0) + outerOffset),
                ],
            });

            const click = useClick(context, {
                enabled: trigger === 'click' || matchMedia('(hover: none)').matches,
            });
            const focus = useFocus(context, { enabled: trigger === 'focus' });
            const dismiss = useDismiss(context, {
                enabled: true,
                outsidePress: true,
            });
            const role = useRole(context);
            const hover = useHover(context, {
                mouseOnly: true,
                enabled: trigger === 'hover',
                handleClose: safePolygon({
                    requireIntent: false,
                }),
                delay: {
                    open: delayOpen,
                    close: delayClose,
                },
            });

            const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, role, click, hover, focus]);

            return (
                <>
                    <Slot ref={refs.setReference} {...getReferenceProps()}>
                        {target}
                    </Slot>

                    {opened && (
                        <FloatingPortal>
                            <Root
                                ref={refs.setFloating}
                                size={size}
                                view={view}
                                style={{ ...floatingStyles, zIndex }}
                                {...getFloatingProps()}
                            >
                                <Wrapper
                                    ref={outerRootRef}
                                    className={cls(className, classes.tooltipRoot)}
                                    style={style}
                                    data-tooltip-open={opened}
                                    {...rest}
                                >
                                    {iconSlot && <IconWrapper>{iconSlot}</IconWrapper>}

                                    {children}

                                    {hasTail && (
                                        <FloatingArrow
                                            ref={arrowRef}
                                            context={context}
                                            width={ARROW_WIDTH}
                                            height={ARROW_HEIGHT}
                                            fill={`var(${tokens.backgroundColor})`}
                                            d={ARROW_POLYGON}
                                        />
                                    )}
                                </Wrapper>
                            </Root>
                        </FloatingPortal>
                    )}
                </>
            );
        },
    );

export const tooltipConfig = {
    name: 'Tooltip',
    tag: 'div',
    layout: tooltipRoot,
    base,
    variations: {
        view: {
            css: css``,
        },
        size: {
            css: css``,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
