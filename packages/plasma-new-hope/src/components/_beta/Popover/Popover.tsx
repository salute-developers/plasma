import React, { forwardRef, useState, useRef } from 'react';
import cls from 'classnames';
import {
    useFloating,
    useInteractions,
    useClick,
    useFocus,
    useDismiss,
    useRole,
    FloatingFocusManager,
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

import type { RootProps } from '../../../engines/types';
import { IconClose } from '../../_Icon';
import { Resizable } from '../../_Resizable';
import { Slot } from '../../_Slot/Slot';
import { ARROW_PADDING } from '../../Tour/utils';

import { sizeToIconSize, matchPlacements, getFloatingPortalProps, useTailStyle } from './utils';
import { classes } from './Popover.tokens';
import type { PopoverProps } from './Popover.types';
// @ts-expect-error CSS Modules are processed during the beta build.
import styles from './Popover.module.css';

export { ARROW_WIDTH, ARROW_HEIGHT, ARROW_POLYGON, ARROW_PADDING } from '../../Tour/utils';

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

            const arrowRef = useRef<HTMLDivElement | null>(null);

            const handleToggle = (opened: boolean) => {
                setInnerOpened(opened);

                if (onToggle) {
                    onToggle(opened);
                }
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

            const { side, tailStyle } = useTailStyle(calculatedPlacement, middlewareData, ARROW_PADDING);

            return (
                <>
                    <Slot ref={refs.setReference} {...getReferenceProps()}>
                        {target}
                    </Slot>

                    {opened && (
                        <FloatingPortal {...getFloatingPortalProps(portal)}>
                            <FloatingFocusManager context={context}>
                                <Root
                                    ref={refs.setFloating}
                                    size={size}
                                    view={view}
                                    className={styles.root}
                                    style={{
                                        ...floatingStyles,
                                        zIndex,
                                        visibility: isPositioned ? 'visible' : 'hidden',
                                    }}
                                    {...getFloatingProps()}
                                >
                                    <Resizable
                                        placement={matchPlacements(placement)}
                                        resizable={resizable}
                                        onResizeStart={onResizeStart}
                                        onResizeEnd={onResizeEnd}
                                    >
                                        <div
                                            ref={outerRootRef}
                                            className={cls(styles.wrapper, className, classes.popoverRoot)}
                                            style={style}
                                            data-popover-open={opened}
                                            {...rest}
                                        >
                                            {hasTail && (
                                                <div
                                                    ref={arrowRef}
                                                    className={styles.tail}
                                                    data-side={side}
                                                    style={tailStyle}
                                                    aria-hidden="true"
                                                />
                                            )}

                                            {children}

                                            {appearance === 'closeInner' && (
                                                <button
                                                    type="button"
                                                    className={cls(styles.closeButton, classes.popoverCloseIconButton)}
                                                    onClick={() => handleToggle(false)}
                                                >
                                                    <IconClose size={sizeToIconSize(size)} color="inherit" />
                                                </button>
                                            )}
                                        </div>
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
    base: '',
    variations: {
        view: {
            css: '',
        },
        size: {
            css: '',
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
