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
    FloatingFocusManager,
    FloatingArrow,
    arrow,
    offset,
    useHover,
    safePolygon,
    shift,
    flip,
    FloatingPortal,
    autoUpdate,
    limitShift,
} from '@floating-ui/react';
import { css } from '@linaria/core';

import { IconClose } from '../../_Icon';
import { Resizable } from '../../_Resizable';
import { Slot } from '../../_Slot/Slot';

import { sizeToIconSize, matchPlacements } from './utils';
import { tokens, classes } from './Popover.tokens';
import { base, CloseButton, Wrapper } from './Popover.styles';
import type { PopoverProps } from './Popover.types';

/* Ширина хвостика */
export const ARROW_WIDTH = 20;
/* Высота хвостика */
export const ARROW_HEIGHT = 8;
/* SVG хвостика */
export const ARROW_POLYGON = 'M20 20L0 20C8.88889 20.0001 10 12.5714 10 12C10 12.5714 11.3273 20.006 20 20Z';
/* Отступ хвостика по краям (чтобы избежать коллизии со скругленными углами) */
export const ARROW_PADDING = 16;

export const popoverRoot = (Root: RootProps<HTMLDivElement, Omit<PopoverProps, 'target'>>) =>
    forwardRef<HTMLDivElement, PopoverProps>(
        (
            {
                appearance = 'closeNone',
                children,
                target,
                opened: outerOpened,
                defaultOpened = false,
                trigger = 'click',
                placement = 'bottom',
                hasTail = true,
                flip: outsideFlip = false,
                shift: outsideShift = false,
                offset: outerOffset = 0,
                outsideClick = true,
                resizable = false,
                onResizeStart,
                onResizeEnd,
                onToggle,
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
            const [innerOpened, setInnerOpened] = useState(defaultOpened);

            const opened = outerOpened ?? innerOpened;

            const arrowRef = useRef(null);

            const handleToggle = (opened: boolean) => {
                setInnerOpened(opened);

                if (onToggle) {
                    onToggle(opened);
                }
            };

            const { refs, floatingStyles, context } = useFloating({
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
                    offset((hasTail ? ARROW_HEIGHT : 0) + outerOffset),
                ],
            });

            const click = useClick(context, {
                enabled: trigger === 'click' || matchMedia('(hover: none)').matches,
            });
            const focus = useFocus(context, { enabled: trigger === 'focus' });
            const dismiss = useDismiss(context, {
                enabled: true,
                outsidePress: outsideClick,
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
                        <FloatingPortal root={portal}>
                            <FloatingFocusManager context={context}>
                                <Root
                                    ref={refs.setFloating}
                                    size={size}
                                    view={view}
                                    style={{ ...floatingStyles, zIndex }}
                                    {...getFloatingProps()}
                                >
                                    <Resizable
                                        placement={matchPlacements(placement)}
                                        resizable={resizable}
                                        onResizeStart={onResizeStart}
                                        onResizeEnd={onResizeEnd}
                                    >
                                        <Wrapper
                                            ref={outerRootRef}
                                            className={cls(className, classes.popoverRoot)}
                                            style={style}
                                            data-popover-open={opened}
                                            {...rest}
                                        >
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

                                            {children}

                                            {appearance === 'closeInner' && (
                                                <CloseButton
                                                    className={classes.popoverCloseIconButton}
                                                    onClick={() => handleToggle(false)}
                                                >
                                                    <IconClose size={sizeToIconSize(size)} color="inherit" />
                                                </CloseButton>
                                            )}
                                        </Wrapper>
                                    </Resizable>
                                </Root>
                            </FloatingFocusManager>
                        </FloatingPortal>
                    )}
                </>
            );
        },
    );

export const popoverConfig = {
    name: 'Popover',
    tag: 'div',
    layout: popoverRoot,
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
