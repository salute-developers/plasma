import {
    flip,
    shift,
    useFloating,
    FloatingPortal,
    offset as offsetMiddleware,
    autoPlacement,
} from '@floating-ui/react';
import React, { forwardRef, MouseEvent } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import { FloatingPopoverProps } from './Dropdown.types';

const FloatingPopover = forwardRef<HTMLDivElement, FloatingPopoverProps>(
    ({ target, children, opened, onToggle, placement, portal, offset = [0, 0], isInner, trigger }, ref) => {
        const { refs, floatingStyles } = useFloating({
            placement: placement === 'auto' ? undefined : placement,
            open: opened,
            middleware: [
                placement === 'auto' && autoPlacement(),
                offsetMiddleware({ mainAxis: offset[1], crossAxis: offset[0] }),
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
                id={wrappedId}
                style={{
                    display: isInner ? 'block' : 'inline-block',
                }}
                ref={ref}
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
                                zIndex: 1,
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
