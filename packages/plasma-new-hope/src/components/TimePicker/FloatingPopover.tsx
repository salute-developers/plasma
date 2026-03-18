import { flip, shift, useFloating, FloatingPortal, offset as offsetMiddleware, autoUpdate } from '@floating-ui/react';
import React, { forwardRef } from 'react';
import { safeUseId } from 'src/utils';

import type { TimePickerFloatingPopoverProps } from './TimePicker.types';
import { FloatingContent, FloatingTarget, FloatingWrapper } from './TimePicker.styles';

type FloatingPortalReturnedProps = {
    root?: React.RefObject<HTMLElement>;
    id?: string;
};

const getFloatingPortalProps = (
    portal: TimePickerFloatingPopoverProps['portal'],
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

const FloatingPopover = forwardRef<HTMLDivElement, TimePickerFloatingPopoverProps>(
    ({ target, children, opened, onToggle, placement, portal, offset, zIndex, disableFlip }, ref) => {
        const { refs, floatingStyles } = useFloating({
            whileElementsMounted(referenceEl, floatingEl, update) {
                return autoUpdate(referenceEl, floatingEl, update, {
                    ancestorScroll: false,
                    ancestorResize: false,
                    layoutShift: false,
                });
            },
            placement,
            open: opened,
            middleware: [
                offsetMiddleware({
                    mainAxis: offset?.[1] ?? 0,
                    crossAxis: offset?.[0] ?? 0,
                }),
                ...(disableFlip ? [] : [flip({ fallbackAxisSideDirection: 'end' })]),
                shift(),
            ],
        });

        const wrappedId = safeUseId();

        const handleClick = () => {
            if (onToggle) {
                onToggle();
            }
        };

        // Проверка на target. Это может быть как ReactNode, так и функция, в которую пробрасывается ref.
        // Это нужно для более тонкой настройки reference-элемента, вокруг которого и будет позиционироваться выпадашка.
        // Пример: когда в Textfield под инпутом находится helperText (или еще что-либо),
        // но выпадающий список должен позиционироваться непосредственно возле самого инпута.
        const isTargetAsFunction = typeof target === 'function';

        return (
            <FloatingWrapper ref={ref} id={wrappedId} style={{ position: 'relative' }}>
                <FloatingTarget ref={isTargetAsFunction ? undefined : refs.setReference} onClick={handleClick}>
                    {typeof target === 'function' ? target(refs.setReference as any) : target}
                </FloatingTarget>

                {opened && (
                    <FloatingPortal {...getFloatingPortalProps(portal, wrappedId)}>
                        <FloatingContent ref={refs.setFloating} style={{ ...floatingStyles, zIndex: zIndex || 1000 }}>
                            {children}
                        </FloatingContent>
                    </FloatingPortal>
                )}
            </FloatingWrapper>
        );
    },
);

export { FloatingPopover };
