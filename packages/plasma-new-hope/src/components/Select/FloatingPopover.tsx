import { flip, shift, size, useFloating, FloatingPortal, offset as offsetMiddleware } from '@floating-ui/react';
import React, { forwardRef } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import { getPlacement, getFallbackPlacements } from './utils';
import type { FloatingPopoverProps } from './Select.types';

const FloatingPopover = forwardRef<HTMLDivElement, FloatingPopoverProps>(
    ({ target, children, opened, onToggle, placement, portal, listWidth, offset = 0, zIndex }, ref) => {
        const { refs, floatingStyles } = useFloating({
            placement: getPlacement(placement),
            open: opened,
            middleware: [
                offsetMiddleware(offset),
                flip({ fallbackPlacements: getFallbackPlacements(placement) }),
                shift(),
                size({
                    apply({ rects, elements }) {
                        Object.assign(elements.floating.style, {
                            width: listWidth || `${rects.reference.width}px`,
                        });
                    },
                }),
            ],
        });

        const wrappedId = safeUseId();

        const handleClick = () => {
            if (onToggle) {
                onToggle(!opened);
            }
        };

        // Проверка на target. Это может быть как ReactNode, так и функция, в которую пробрасывается ref.
        // Это нужно для более тонкой настройки reference-элемента, вокруг которого и будет позиционироваться выпадашка.
        // Пример: когда в Textfield под инпутом находится helperText (или еще что-либо),
        // но выпадающий список должен позиционироваться непосредственно возле самого инпута.
        const isTargetAsFunction = typeof target === 'function';

        return (
            <div ref={ref} id={wrappedId} style={{ position: 'relative' }}>
                <div ref={isTargetAsFunction ? undefined : refs.setReference} onClick={handleClick}>
                    {typeof target === 'function' ? target(refs.setReference as any) : target}
                </div>

                {opened && (
                    // root - принимает ref контейнера портала.
                    // id - если есть портал - не используется, если портала нет - подставляется 'wrappedId'.
                    <FloatingPortal {...getFloatingPortalProps(portal, wrappedId)}>
                        <div ref={refs.setFloating} style={{ ...floatingStyles, zIndex: zIndex || 1000 }}>
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
