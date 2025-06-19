import {
    flip,
    shift,
    useFloating,
    FloatingPortal,
    offset as offsetMiddleware,
    autoPlacement,
    autoUpdate,
} from '@floating-ui/react';
import React, { forwardRef, MouseEvent } from 'react';
import { safeUseId } from 'src/utils';

import { FloatingPopoverProps } from './Dropdown.types';

// TODO: #2003
const LIST_PADDING = 2;

const FloatingPopover = forwardRef<HTMLDivElement, FloatingPopoverProps>(
    ({ target, children, opened, onToggle, placement, portal, offset, isInner, trigger, zIndex }, ref) => {
        const { refs, floatingStyles } = useFloating({
            whileElementsMounted(referenceEl, floatingEl, update) {
                return autoUpdate(referenceEl, floatingEl, update, {
                    ancestorScroll: false,
                    ancestorResize: false,
                    layoutShift: false,
                });
            },
            placement: placement === 'auto' ? undefined : placement,
            open: opened,
            middleware: [
                placement === 'auto' && autoPlacement(),
                offsetMiddleware({
                    mainAxis: offset?.[1] || (isInner ? LIST_PADDING * 2 : 0),
                    crossAxis: offset?.[0] || (isInner ? -LIST_PADDING : 0),
                }),
                flip({ fallbackAxisSideDirection: 'end' }),
                shift(),
            ],
        });
        const wrappedId = safeUseId();

        const handleTargetClick = (event: MouseEvent<HTMLDivElement>) => {
            if (trigger === 'hover') {
                return;
            }

            if (onToggle) {
                onToggle(!opened, event);
            }
        };

        const handleTargetMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
            if (trigger === 'click' || opened) {
                return;
            }

            onToggle(true, event);
        };

        const handleTargetMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
            if (event.relatedTarget instanceof HTMLElement && refs.floating.current instanceof HTMLElement) {
                if (
                    trigger === 'click' ||
                    !opened ||
                    (event.relatedTarget && refs.floating && refs.floating.current?.contains(event.relatedTarget))
                ) {
                    return;
                }

                onToggle(false, event);
            }
        };

        const handleFloatingMouseLeave = (event: MouseEvent) => {
            if (event.relatedTarget instanceof HTMLElement && refs.reference.current instanceof HTMLElement) {
                if (
                    trigger === 'click' ||
                    !opened ||
                    (event.relatedTarget && refs.reference && refs.reference.current?.contains(event.relatedTarget))
                ) {
                    return;
                }

                onToggle(false, event);
            }
        };

        return (
            <div
                ref={ref}
                id={wrappedId}
                style={{
                    position: 'relative',
                    display: isInner ? 'block' : 'inline-block',
                }}
            >
                <div
                    ref={refs.setReference}
                    onClick={handleTargetClick}
                    onMouseEnter={handleTargetMouseEnter}
                    onMouseLeave={handleTargetMouseLeave}
                >
                    {target}
                </div>

                {opened && (
                    <FloatingPortal {...getFloatingPortalProps(portal, wrappedId)}>
                        <div
                            ref={refs.setFloating}
                            onMouseLeave={handleFloatingMouseLeave}
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
