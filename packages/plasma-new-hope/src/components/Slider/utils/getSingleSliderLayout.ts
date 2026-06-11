import type { CSSProperties, ReactNode } from 'react';

import { classes, tokens } from '../Slider.tokens';

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
    valuePlacement?: 'top' | 'bottom' | 'left' | 'right' | 'none';
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
    rangeMinValueOpacity: number;
    rangeMaxValueOpacity: number;
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
    valuePlacement,
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

    const FADE_RANGE = 0.3;
    const fadeOpacity = (proximity: number) => Math.min(1, Math.max(0, proximity / FADE_RANGE));

    const thumbPercent = (value - min) / (max - min);
    const thumbSize = `var(${tokens.thumbSize})`;

    const progressSize = showPointer ? `calc(${thumbPercent} * (100% - ${thumbSize}))` : `calc(${thumbPercent} * 100%)`;
    const progressSizeStyle: CSSProperties = isVertical ? { height: progressSize } : { width: progressSize };

    const shouldFadeRangeValues = innerShowCurrentValue && valuePlacement !== 'none';
    const rangeMaxValueOpacity = shouldFadeRangeValues ? fadeOpacity(reversed ? thumbPercent : 1 - thumbPercent) : 1;
    const rangeMinValueOpacity = shouldFadeRangeValues ? fadeOpacity(reversed ? 1 - thumbPercent : thumbPercent) : 1;

    const nearHighFactor = Math.min(1, Math.max(0, (thumbPercent - (1 - FADE_RANGE)) / FADE_RANGE));
    const nearLowFactor = Math.min(1, Math.max(0, (FADE_RANGE - thumbPercent) / FADE_RANGE));
    const verticalScaleCompensation = reversed ? '' : ' scaleY(-1)';

    const getHorizontalCurrentValueStyle = (): CSSProperties => {
        if (nearHighFactor > 0) {
            return {
                left: `calc(${thumbPercent} * (100% - ${thumbSize}) + ${thumbSize} / 2 * ${1 + nearHighFactor})`,
                transform: `translateX(-${50 + nearHighFactor * 50}%)`,
            };
        }
        if (nearLowFactor > 0) {
            return {
                left: `calc(${thumbPercent} * (100% - ${thumbSize}) + ${thumbSize} / 2 * ${1 - nearLowFactor})`,
                transform: `translateX(-${50 - nearLowFactor * 50}%)`,
            };
        }

        return { left: `calc(${thumbPercent} * (100% - ${thumbSize}) + ${thumbSize} / 2)` };
    };

    const getVerticalCurrentValueStyle = (): CSSProperties => {
        if (nearHighFactor > 0) {
            return {
                top: `calc(${1 - thumbPercent} * (100% - ${thumbSize}) + ${thumbSize} / 2 * ${1 - nearHighFactor})`,
                transform: `translateY(-${50 - nearHighFactor * 50}%)${verticalScaleCompensation}`,
            };
        }
        if (nearLowFactor > 0) {
            return {
                top: `calc(${1 - thumbPercent} * (100% - ${thumbSize}) + ${thumbSize} / 2 * ${1 + nearLowFactor})`,
                transform: `translateY(-${50 + nearLowFactor * 50}%)${verticalScaleCompensation}`,
            };
        }

        return { top: `calc(${1 - thumbPercent} * (100% - ${thumbSize}) + ${thumbSize} / 2)` };
    };

    const currentValueStyle: CSSProperties = isVertical
        ? getVerticalCurrentValueStyle()
        : getHorizontalCurrentValueStyle();

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
        rangeMinValueOpacity,
        rangeMaxValueOpacity,
    };
};
