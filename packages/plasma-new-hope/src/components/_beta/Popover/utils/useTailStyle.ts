import type { CSSProperties } from 'react';
import type { MiddlewareData } from '@floating-ui/react';

type Side = 'top' | 'right' | 'bottom' | 'left';

/**
 * Вычисляет сторону хвостика и его позицию.
 * При выравнивании (start/end) без поперечного смещения хвостик фиксируется на отступе
 * arrowPadding от края, чтобы не залезать на скругление угла. При поперечном смещении
 * или без выравнивания используются координаты arrow-middleware.
 */
export const useTailStyle = (calculatedPlacement: string, middlewareData: MiddlewareData, arrowPadding: number) => {
    const [side, alignment] = calculatedPlacement.split('-') as [Side, 'start' | 'end' | undefined];
    const isVerticalSide = side === 'top' || side === 'bottom';
    const crossAxisOffset = isVerticalSide ? middlewareData.offset?.x : middlewareData.offset?.y;

    let tailStyle: CSSProperties;

    if (alignment && !crossAxisOffset && isVerticalSide) {
        tailStyle = alignment === 'end' ? { right: `${arrowPadding}px` } : { left: `${arrowPadding}px` };
    } else if (alignment && !crossAxisOffset && !isVerticalSide) {
        tailStyle = alignment === 'end' ? { bottom: `${arrowPadding}px` } : { top: `${arrowPadding}px` };
    } else {
        tailStyle = {
            left: middlewareData.arrow?.x == null ? undefined : `${middlewareData.arrow.x}px`,
            top: middlewareData.arrow?.y == null ? undefined : `${middlewareData.arrow.y}px`,
        };
    }

    return { side, tailStyle };
};
