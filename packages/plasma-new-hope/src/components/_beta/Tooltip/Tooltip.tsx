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
    arrow,
    offset,
    shift,
    flip,
    useHover,
    safePolygon,
    FloatingPortal,
    autoUpdate,
    limitShift,
} from '@floating-ui/react';
import { css } from 'styled-components';

import { Slot } from '../../_Slot/Slot';
import { ARROW_PADDING } from '../Popover/Popover';
import { getFloatingPortalProps, useTailStyle } from '../Popover/utils';

import { classes } from './Tooltip.tokens';
import { base, Wrapper, IconWrapper, Tail } from './Tooltip.styles';
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
                flip: outsideFlip = false,
                shift: outsideShift = false,
                offset: outerOffset = 0,
                delayOpen = 0,
                delayClose = 0,
                zIndex = 1000,
                className,
                style,
                size,
                view,
                portal,
                ...rest
            },
            outerRootRef,
        ) => {
            const [opened, setOpened] = useState(false);

            const arrowRef = useRef<HTMLDivElement | null>(null);

            const handleToggle = (opened: boolean) => {
                setOpened(opened);
            };

            const {
                refs,
                floatingStyles,
                context,
                middlewareData,
                placement: calculatedPlacement,
                isPositioned,
            } = useFloating({
                whileElementsMounted: autoUpdate,
                placement,
                open: opened,
                onOpenChange: handleToggle,
                middleware: [
                    outsideShift &&
                        shift({
                            limiter: limitShift(),
                        }),
                    outsideFlip && flip(),
                    hasTail && arrow({ element: arrowRef, padding: ARROW_PADDING }),
                    offset(
                        ({ placement: currentPlacement }) => {
                            if (!hasTail) {
                                return outerOffset;
                            }

                            const side = currentPlacement.split('-')[0];
                            const { width = 0, height = 0 } = arrowRef.current?.getBoundingClientRect() ?? {};
                            const tailOffset = side === 'top' || side === 'bottom' ? height : width;

                            return tailOffset + outerOffset;
                        },
                        [outerOffset, hasTail],
                    ),
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

            const { side, tailStyle } = useTailStyle(calculatedPlacement, middlewareData, ARROW_PADDING);

            return (
                <>
                    <Slot ref={refs.setReference} {...getReferenceProps()}>
                        {target}
                    </Slot>

                    {opened && (
                        <FloatingPortal {...getFloatingPortalProps(portal)}>
                            <Root
                                ref={refs.setFloating}
                                size={size}
                                view={view}
                                style={{ ...floatingStyles, zIndex, visibility: isPositioned ? 'visible' : 'hidden' }}
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
                                        <Tail ref={arrowRef} side={side} style={tailStyle} aria-hidden="true" />
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
