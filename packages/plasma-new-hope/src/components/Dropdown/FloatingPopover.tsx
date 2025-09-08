import {
    flip,
    shift,
    useFloating,
    FloatingPortal,
    offset as offsetMiddleware,
    autoPlacement,
    autoUpdate,
    useHover,
    useInteractions,
    safePolygon,
    useClick,
} from '@floating-ui/react';
import React, { forwardRef } from 'react';
import { safeUseId } from 'src/utils';

import { FloatingPopoverProps } from './Dropdown.types';

// TODO: #2003
const LIST_PADDING = 2;

const FloatingPopover = forwardRef<HTMLDivElement, FloatingPopoverProps>(
    ({ target, children, opened, onToggle, placement, portal, offset = [0, 8], isInner, trigger, zIndex }, ref) => {
        const { refs, floatingStyles, context } = useFloating({
            whileElementsMounted(referenceEl, floatingEl, update) {
                return autoUpdate(referenceEl, floatingEl, update, {
                    ancestorScroll: false,
                    ancestorResize: false,
                    layoutShift: false,
                });
            },
            placement: placement === 'auto' ? undefined : placement,
            open: opened,
            onOpenChange: onToggle,
            middleware: [
                placement === 'auto' && autoPlacement(),
                offsetMiddleware({
                    mainAxis: isInner ? LIST_PADDING * 2 : offset[1],
                    crossAxis: isInner ? -LIST_PADDING : offset[0],
                }),
                flip({ fallbackAxisSideDirection: 'end' }),
                shift(),
            ],
        });
        const wrappedId = safeUseId();

        const hover = useHover(context, {
            enabled: trigger === 'hover',
            delay: {
                open: 0,
                close: 50,
            },
            handleClose: safePolygon({
                requireIntent: false,
            }),
        });
        const click = useClick(context, {
            stickIfOpen: false,
            ignoreMouse: trigger === 'hover',
        });

        const { getReferenceProps } = useInteractions([hover, click]);

        return (
            <div
                ref={ref}
                id={wrappedId}
                style={{
                    position: 'relative',
                    display: isInner ? 'block' : 'inline-block',
                }}
            >
                <div ref={refs.setReference} {...getReferenceProps()}>
                    {target}
                </div>

                {opened && (
                    <FloatingPortal {...getFloatingPortalProps(portal, wrappedId)}>
                        <div
                            ref={refs.setFloating}
                            style={{
                                ...floatingStyles,
                                zIndex: zIndex || 1000,
                            }}
                        >
                            {children}
                        </div>
                    </FloatingPortal>
                )}
            </div>
        );
    },
);

type FloatingPortalReturnedProps = {
    root?: React.RefObject<HTMLElement>;
    id?: string;
};

// root - принимает ref контейнера портала.
// id - если есть портал - не используется, если портала нет - подставляется 'wrappedId'.
const getFloatingPortalProps = (
    portal: FloatingPopoverProps['portal'],
    wrappedId: string,
): FloatingPortalReturnedProps => {
    if (!portal) {
        return { id: wrappedId };
    }

    if (typeof portal === 'string') {
        return { id: portal };
    }

    return { root: portal };
};

export { FloatingPopover };
