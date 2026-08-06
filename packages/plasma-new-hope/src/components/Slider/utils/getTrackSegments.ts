import type { CSSProperties } from 'react';

import { tokens } from '../Slider.tokens';

type GetTrackSegmentsParams = {
    min: number;
    max: number;
    value: number;
    cutValues: number[];
    isVertical: boolean;
};

type TrackSegmentsResult = {
    trackSegments: CSSProperties[];
    progressSegments: CSSProperties[];
};

const gapVar = `var(${tokens.tickSeparatorGap})`;

const toPercent = (tick: number, min: number, max: number) => ((tick - min) / (max - min)) * 100;

/**
 * Трек/прогресс лежат внутри SliderContainer, который сам разворачивается через
 * transform: scaleY(-1) (и отменяет его при reversed) — поэтому здесь, в отличие от
 * getTickStyle (позиционирует метки вне этого контейнера), ось всегда считается
 * от одного и того же края (аналогично bottom-anchor у BaseStyledProgress),
 * без ветвления по reversed.
 *
 * hasStartEdgeGap/hasEndEdgeGap — есть ли сепаратор на самом min/max: там зазор
 * только с одной стороны (нет соседнего сегмента снаружи), поэтому вдвое меньше,
 * чем между двумя внутренними сегментами (где половину зазора отдаёт каждый сосед).
 */
const buildAxisSegments = (
    boundaries: number[],
    isVertical: boolean,
    hasStartEdgeGap: boolean,
    hasEndEdgeGap: boolean,
): CSSProperties[] => {
    const lastIndex = boundaries.length - 2;
    const startProp = isVertical ? 'bottom' : 'left';
    const sizeProp = isVertical ? 'height' : 'width';

    const segments = boundaries.slice(0, -1).map((start, index) => {
        const end = boundaries[index + 1];
        const isFirst = index === 0;
        const isLast = index === lastIndex;

        const hasLeftGap = !isFirst || hasStartEdgeGap;
        const hasRightGap = !isLast || hasEndEdgeGap;

        const leftGapFraction = isFirst ? 0.75 : 0.5;
        const rightGapFraction = isLast ? 0.75 : 0.5;

        const startExpr = hasLeftGap ? `calc(${start}% + ${leftGapFraction} * ${gapVar})` : `${start}%`;
        const leftInset = hasLeftGap ? `${leftGapFraction} * ${gapVar}` : '0px';
        const rightInset = hasRightGap ? `${rightGapFraction} * ${gapVar}` : '0px';
        const sizeExpr = `calc(${end - start}% - ${leftInset} - ${rightInset})`;

        return { [startProp]: startExpr, [sizeProp]: sizeExpr } as CSSProperties;
    });

    return segments;
};

export const getTrackSegments = ({
    min,
    max,
    value,
    cutValues,
    isVertical,
}: GetTrackSegmentsParams): TrackSegmentsResult => {
    const uniqueCutValues = Array.from(new Set(cutValues));
    const hasMinSeparator = uniqueCutValues.includes(min);
    const hasMaxSeparator = uniqueCutValues.includes(max);

    const sortedInteriorCuts = uniqueCutValues.filter((tick) => tick > min && tick < max).sort((a, b) => a - b);
    const cutPercents = sortedInteriorCuts.map((tick) => toPercent(tick, min, max));

    const trackBoundaries = [0, ...cutPercents, 100];
    const trackSegments = buildAxisSegments(trackBoundaries, isVertical, hasMinSeparator, hasMaxSeparator);

    const valuePercent = toPercent(value, min, max);
    const filledCutPercents = cutPercents.filter((percent) => percent < valuePercent);
    const progressBoundaries = [0, ...filledCutPercents, valuePercent];
    const progressSegments = buildAxisSegments(
        progressBoundaries,
        isVertical,
        hasMinSeparator,
        hasMaxSeparator && value >= max,
    );

    return { trackSegments, progressSegments };
};
