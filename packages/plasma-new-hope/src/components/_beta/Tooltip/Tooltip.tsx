import React, { forwardRef, useState, useRef } from 'react';
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

import { ARROW_PADDING } from '../Popover/Popover';
import { getFloatingPortalProps, useTailStyle } from '../Popover/utils';
import { Slot } from '../utils/Slot';

import { classes } from './Tooltip.tokens';
import type { TooltipProps } from './Tooltip.types';
// @ts-expect-error
import styles from './Tooltip.module.css';

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
    const {
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
        portal,
        // @ts-ignore
        _configClassName,
        ...rest
    } = props;

    const [opened, setOpened] = useState(false);

    const arrowRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = (nextOpened: boolean) => {
        setOpened(nextOpened);
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
                    <div
                        ref={refs.setFloating}
                        className={styles.root}
                        style={{ ...floatingStyles, zIndex, visibility: isPositioned ? 'visible' : 'hidden' }}
                        {...getFloatingProps()}
                    >
                        <div
                            ref={ref}
                            {...rest}
                            className={cls(styles.wrapper, _configClassName, rest.className, classes.tooltipRoot)}
                            data-tooltip-open={opened}
                        >
                            {iconSlot && <div className={styles.iconWrapper}>{iconSlot}</div>}

                            {children}

                            {hasTail && (
                                <div
                                    ref={arrowRef}
                                    className={styles.tail}
                                    data-side={side}
                                    style={tailStyle}
                                    aria-hidden="true"
                                />
                            )}
                        </div>
                    </div>
                </FloatingPortal>
            )}
        </>
    );
});
