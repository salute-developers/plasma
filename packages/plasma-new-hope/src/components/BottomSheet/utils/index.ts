import type { CSSProperties } from 'react';

import { getSortedSnapPoints, resolveActiveSnapPoint } from '../../Sheet/utils';
import type { BottomSheetSnapPoint, BottomSheetSnapPoints } from '../BottomSheet.types';

export const getPanelZIndex = (zIndex: CSSProperties['zIndex']) => {
    const numericZIndex = Number(zIndex);

    return Number.isNaN(numericZIndex) ? zIndex : numericZIndex + 1;
};

export const applyHeight = (element: HTMLElement, heightPx: number) => {
    element.style.height = `${heightPx}px`;
};

export const applyActiveSnapHeight = (
    element: HTMLElement,
    snapPoints: BottomSheetSnapPoints,
    preferred?: BottomSheetSnapPoint,
) => {
    const { points, pointsPx } = getSortedSnapPoints(snapPoints, window.innerHeight);
    const current = resolveActiveSnapPoint(points, preferred) ?? points[0];
    const index = Math.max(
        0,
        points.findIndex((point) => point === current),
    );

    applyHeight(element, pointsPx[index]);

    return current;
};
