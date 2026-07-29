import type { CSSProperties } from 'react';
import type { MiddlewareData } from '@floating-ui/react';

type Side = 'top' | 'right' | 'bottom' | 'left';

/**
 * Вычисляет сторону хвостика и его позицию.
 * При выравнивании (start/end) хвостик фиксируется на отступе ARROW_PADDING от края,
 * чтобы не залезать на скругление угла; без выравнивания — позиционируется динамически
 * по данным arrow-middleware.
 */
export const useTailStyle = (calculatedPlacement: string, middlewareData: MiddlewareData, arrowPadding: number) => {
    const [side, alignment] = calculatedPlacement.split('-') as [Side, 'start' | 'end' | undefined];
    const isVerticalSide = side === 'top' || side === 'bottom';

    let tailStyle: CSSProperties;

    if (alignment && isVerticalSide) {
        tailStyle = alignment === 'end' ? { right: `${arrowPadding}px` } : { left: `${arrowPadding}px` };
    } else if (alignment && !isVerticalSide) {
        tailStyle = alignment === 'end' ? { bottom: `${arrowPadding}px` } : { top: `${arrowPadding}px` };
    } else {
        tailStyle = {
            left: middlewareData.arrow?.x == null ? undefined : `${middlewareData.arrow.x}px`,
            top: middlewareData.arrow?.y == null ? undefined : `${middlewareData.arrow.y}px`,
        };
    }

    return { side, tailStyle };
};
