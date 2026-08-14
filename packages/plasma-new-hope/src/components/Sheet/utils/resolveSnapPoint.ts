import type { SheetSnapPoint, SheetSnapPoints } from '../Sheet.types';

/**
 * Преобразует snap-точку в пиксели относительно высоты viewport.
 * Строки — CSS-длины ('50%', '320px', '40dvh').
 */
export const resolveSnapPointToPx = (point: SheetSnapPoint, viewportHeight: number): number => {
    const trimmed = point.trim();

    if (trimmed.endsWith('%')) {
        const value = parseFloat(trimmed);

        return Number.isFinite(value) ? (value / 100) * viewportHeight : 0;
    }

    if (typeof document === 'undefined') {
        const value = parseFloat(trimmed);

        return Number.isFinite(value) ? value : 0;
    }

    const probe = document.createElement('div');
    probe.style.cssText = `
        position: absolute;
        visibility: hidden;
        pointer-events: none;
        height: ${trimmed};
    `;
    document.body.appendChild(probe);
    const height = probe.offsetHeight;
    document.body.removeChild(probe);

    return height;
};

/**
 * Возвращает индекс ближайшей snap-точки к заданной высоте.
 */
export const findNearestSnapPoint = (heightPx: number, pointsPx: number[]): number => {
    if (pointsPx.length === 0) {
        return -1;
    }

    let nearestIndex = 0;
    let nearestDistance = Math.abs(pointsPx[0] - heightPx);

    for (let i = 1; i < pointsPx.length; i += 1) {
        const distance = Math.abs(pointsPx[i] - heightPx);

        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = i;
        }
    }

    return nearestIndex;
};

/**
 * Сортирует snap-точки по возрастанию высоты, сохраняя исходные значения.
 */
export const getSortedSnapPoints = (
    snapPoints: SheetSnapPoints,
    viewportHeight: number,
): { points: SheetSnapPoints; pointsPx: number[] } => {
    const resolved = snapPoints.map((point) => ({
        point,
        px: resolveSnapPointToPx(point, viewportHeight),
    }));

    resolved.sort((a, b) => a.px - b.px);

    return {
        points: resolved.map((item) => item.point),
        pointsPx: resolved.map((item) => item.px),
    };
};

/**
 * Возвращает preferred-точку, если она есть в snapPoints, иначе первую точку.
 */
export const resolveActiveSnapPoint = (
    snapPoints?: SheetSnapPoints,
    preferred?: SheetSnapPoint,
): SheetSnapPoint | undefined => {
    if (!snapPoints?.length) {
        return undefined;
    }

    if (preferred !== undefined && snapPoints.includes(preferred)) {
        return preferred;
    }

    return snapPoints[0];
};
