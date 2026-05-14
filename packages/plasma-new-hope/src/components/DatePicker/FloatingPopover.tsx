import {
    flip,
    shift,
    useFloating,
    useInteractions,
    useDismiss,
    FloatingPortal,
    offset as offsetMiddleware,
    autoUpdate,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/react';
import React, { forwardRef } from 'react';
import { safeUseId } from 'src/utils';

import { FloatingContent, FloatingTarget, FloatingWrapper } from './DatePickerBase.styles';
import type { DatePickerPlacement, DatePickerPlacementBasic } from './SingleDate/SingleDate.types';
import type { DatePickerFloatingPopoverProps } from './DatePickerBase.types';

type FloatingPortalReturnedProps = {
    root?: React.RefObject<HTMLElement>;
    id?: string;
};

export const resolveFloatingPlacement = (
    placement: DatePickerPlacement | Array<DatePickerPlacementBasic>,
): Placement => {
    if (Array.isArray(placement)) {
        return placement[0] || 'bottom';
    }
    if (placement === 'auto') return 'bottom';
    return placement;
};

const getFloatingPortalProps = (
    portal: DatePickerFloatingPopoverProps['portal'],
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

const FloatingPopover = forwardRef<HTMLDivElement, DatePickerFloatingPopoverProps>(
    (
        {
            target,
            children,
            opened,
            onToggle,
            placement,
            portal,
            offset,
            zIndex,
            disableFlip,
            closeOnOverlayClick,
            closeOnEsc,
        },
        ref,
    ) => {
        const { refs, floatingStyles, context } = useFloating({
            whileElementsMounted(referenceEl, floatingEl, update) {
                return autoUpdate(referenceEl, floatingEl, update, {
                    ancestorScroll: false,
                    ancestorResize: false,
                    layoutShift: false,
                });
            },
            placement: resolveFloatingPlacement(placement),
            open: opened,
            onOpenChange: onToggle,
            middleware: [
                offsetMiddleware({
                    mainAxis: offset?.[1] ?? 0,
                    crossAxis: offset?.[0] ?? 0,
                }),
                ...(disableFlip ? [] : [flip({ fallbackAxisSideDirection: 'end' })]),
                shift(),
            ],
        });

        const dismiss = useDismiss(context, {
            enabled: true,
            outsidePress: closeOnOverlayClick,
            escapeKey: closeOnEsc,
        });

        const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

        const wrappedId = safeUseId();

        const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
            onToggle(!opened, event);
        };

        // Проверка на target. Это может быть как ReactNode, так и функция, в которую пробрасывается ref.
        // Это нужно для более тонкой настройки reference-элемента, вокруг которого и будет позиционироваться выпадашка.
        // Пример: когда в Textfield под инпутом находится helperText (или еще что-либо),
        // но выпадающий список должен позиционироваться непосредственно возле самого инпута.
        const isTargetAsFunction = typeof target === 'function';

        return (
            <FloatingWrapper ref={ref} id={wrappedId}>
                <FloatingTarget
                    ref={isTargetAsFunction ? undefined : refs.setReference}
                    {...getReferenceProps({ onClick: handleClick })}
                >
                    {typeof target === 'function' ? target(refs.setReference as any) : target}
                </FloatingTarget>

                {opened && (
                    <FloatingPortal {...getFloatingPortalProps(portal, wrappedId)}>
                        <FloatingContent
                            ref={refs.setFloating}
                            style={{ ...floatingStyles, zIndex: zIndex || 1000 }}
                            {...getFloatingProps()}
                        >
                            {children}
                        </FloatingContent>
                    </FloatingPortal>
                )}
            </FloatingWrapper>
        );
    },
);

export { FloatingPopover };
