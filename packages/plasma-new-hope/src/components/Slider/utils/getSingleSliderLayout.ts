import type { CSSProperties, ReactNode } from 'react';

import { classes, privateTokens } from '../Slider.tokens';

interface GetSingleSliderLayoutParams {
    value: number;
    min: number;
    max: number;
    isVertical: boolean;
    isHovered: boolean;
    reversed?: boolean;
    scaleTicks?: number[];
    showRangeValues?: boolean;
    showScale?: boolean;
    showCurrentValue?: boolean;
    currentValueVisibility?: 'always' | 'hover';
    label?: ReactNode;
    labelContentLeft?: ReactNode;
    labelContent?: ReactNode;
    labelPlacement?: string;
    sliderAlign?: string;
    rangeValuesPlacementOld?: string;
    scaleAlign?: string;
    pointerSize?: string;
    pointerVisibility?: 'always' | 'hover';
}

export interface SingleSliderLayout {
    innerShowScale: boolean;
    innerShowCurrentValue: boolean | undefined;
    hasLabelContent: boolean;
    labelPlacementClass: string;
    rangeValuesPlacement: 'outer' | 'inner';
    scaleAlignClass: string;
    labelVerticalPlacement: 'bottom' | 'top';
    showPointer: boolean;
    currentValueStyle: CSSProperties;
    progressSizeStyle: CSSProperties;
}

export const getSingleSliderLayout = ({
    value,
    min,
    max,
    isVertical,
    isHovered,
    reversed,
    scaleTicks,
    showRangeValues,
    showScale,
    showCurrentValue,
    currentValueVisibility,
    label,
    labelContentLeft,
    labelContent,
    labelPlacement,
    sliderAlign,
    rangeValuesPlacementOld,
    scaleAlign,
    pointerSize,
    pointerVisibility,
}: GetSingleSliderLayoutParams): SingleSliderLayout => {
    const innerShowScale = Boolean((showRangeValues || showScale) && !scaleTicks);
    const innerShowCurrentValue =
        !scaleTicks && (currentValueVisibility === 'hover' ? showCurrentValue && isHovered : showCurrentValue);

    const hasLabelContent =
        Boolean(label || labelContentLeft || labelContent) && (!isVertical || sliderAlign !== 'none');

    const labelPlacementClass =
        !isVertical && (labelPlacement === 'outer' || labelPlacement === 'top')
            ? classes.labelPlacementOuter
            : classes.labelPlacementInner;

    const rangeValuesPlacement: 'outer' | 'inner' =
        rangeValuesPlacementOld === 'outer' || scaleAlign === 'bottom' || scaleAlign === 'top' || Boolean(scaleTicks)
            ? 'outer'
            : 'inner';
    const scaleAlignClass =
        rangeValuesPlacement === 'outer' ? classes.rangeValuesPlacementOuter : classes.rangeValuesPlacementInner;

    const labelVerticalPlacement = reversed ? 'bottom' : ('top' as const);

    const showPointer = pointerSize !== 'none' && (pointerVisibility === 'always' || isHovered);

    const thumbPercent = (value - min) / (max - min);
    const thumbSize = `var(${privateTokens.thumbSize})`;
    const thumbPosition = `calc(${thumbPercent} * (100% - ${thumbSize}) + ${thumbSize} / 2)`;

    const currentValueStyle: CSSProperties = isVertical
        ? { top: `calc(${1 - thumbPercent} * (100% - ${thumbSize}) + ${thumbSize} / 2)` }
        : { left: thumbPosition };

    const progressSizeStyle: CSSProperties = isVertical
        ? { height: `calc(${thumbPercent} * (100% - ${thumbSize}))` }
        : { width: `calc(${thumbPercent} * (100% - ${thumbSize}))` };

    return {
        innerShowScale,
        innerShowCurrentValue,
        hasLabelContent,
        labelPlacementClass,
        rangeValuesPlacement,
        scaleAlignClass,
        labelVerticalPlacement,
        showPointer,
        currentValueStyle,
        progressSizeStyle,
    };
};
