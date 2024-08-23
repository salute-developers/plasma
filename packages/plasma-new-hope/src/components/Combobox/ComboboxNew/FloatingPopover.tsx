import { flip, shift, size, useFloating, FloatingPortal, offset as offsetMiddleware } from '@floating-ui/react';
import React, { forwardRef } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import type { FloatingPopoverProps } from './Combobox.types';

const FloatingPopover = forwardRef<HTMLDivElement, FloatingPopoverProps>(
    ({ target, children, opened, onToggle, placement, portal, offset = 0 }, ref) => {
        const { refs, floatingStyles } = useFloating({
            placement,
            open: opened,
            middleware: [
                offsetMiddleware(offset),
                flip({ fallbackAxisSideDirection: 'end' }),
                shift(),
                size({
                    apply({ rects, elements }) {
                        Object.assign(elements.floating.style, {
                            width: `${rects.reference.width}px`,
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
            <div ref={ref} id={wrappedId}>
                <div ref={isTargetAsFunction ? undefined : refs.setReference} onClick={handleClick}>
                    {typeof target === 'function' ? target(refs.setReference as any) : target}
                </div>

                {opened && (
                    // root - принимает ref контейнера портала.
                    // id - если есть портал - не используется, если портала нет - подставляется 'wrappedId'.
                    <FloatingPortal root={portal} id={portal ? undefined : wrappedId}>
                        <div ref={refs.setFloating} style={{ ...floatingStyles, zIndex: 1 }}>
                            {children}
                        </div>
                    </FloatingPortal>
                )}
            </div>
        );
    },
);

export { FloatingPopover };
