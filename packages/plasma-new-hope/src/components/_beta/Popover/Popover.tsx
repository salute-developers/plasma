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

import { Slot } from '../utils/Slot';

import { Resizable } from './Resizable';
import { ARROW_PADDING, matchPlacements, getFloatingPortalProps, useTailStyle } from './utils';
import { classes } from './Popover.tokens';
import type { PopoverProps } from './Popover.types';
import styles from './Popover.module.css';

const CloseIcon = () => (
    <svg className={styles.closeIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19L19 5M5 5l14 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
);

export const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
    const {
        appearance = 'default',
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
        portal,
        // @ts-ignore
        _configClassName,
        ...rest
    } = props;

    const [innerOpened, setInnerOpened] = useState(defaultOpened);

    const opened = outerOpened ?? innerOpened;

    const arrowRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = (nextOpened: boolean) => {
        setInnerOpened(nextOpened);

        if (onToggle) {
            onToggle(nextOpened);
        }
    };

    const { refs, floatingStyles, context, middlewareData, placement: calculatedPlacement, isPositioned } = useFloating(
        {
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
        },
    );

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
                        <div
                            ref={refs.setFloating}
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
                                    ref={ref}
                                    {...rest}
                                    className={cls(
                                        styles.wrapper,
                                        _configClassName,
                                        rest.className,
                                        classes.popoverRoot,
                                    )}
                                    data-popover-open={opened}
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
                                            <CloseIcon />
                                        </button>
                                    )}
                                </div>
                            </Resizable>
                        </div>
                    </FloatingFocusManager>
                </FloatingPortal>
            )}
        </>
    );
});
