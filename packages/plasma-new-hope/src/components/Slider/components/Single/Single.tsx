import React, { useState } from 'react';
import type { FC } from 'react';
import cls from 'classnames';

import { classes } from '../../Slider.tokens';
import { FormTypeNumber } from '../../../../types/FormType';
import { useRangeHandlers } from '../../hooks/useRangeHandlers';
import { getTickStyle } from '../../utils/getTickStyle';
import { getSingleSliderLayout } from '../../utils/getSingleSliderLayout';

import type { SingleSliderProps } from './Single.types';
import {
    Label,
    LabelContent,
    LabelWrapper,
    ScaleTick,
    ScaleTickDot,
    ScaleTicksWrapper,
    SingleWrapper,
    SliderBaseWrapper,
    SliderContainer,
    StyledCurrentValue,
    StyledProgress,
    StyledRange,
    StyledRangeValue,
    StyledTrack,
} from './Single.styles';

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

export const SingleSlider: FC<SingleSliderProps> = ({
    // value
    min,
    max,
    value: outerValue,
    defaultValue,
    name,
    step = 1,

    // label
    label,
    labelContentLeft,
    labelContent,
    labelPlacement = 'top',
    labelReversed,

    // scale
    showScale,
    showRangeValues,
    scaleAlign = 'bottom',
    hideMinValueDiff,
    hideMaxValueDiff,

    // pointer
    pointerSize = 'small',
    pointerVisibility = 'always',
    showCurrentValue,
    currentValueVisibility = 'always',

    // layout
    orientation = 'horizontal',
    sliderAlign = 'left',
    reversed,
    valuePlacement,
    multipleStepSize = 10,

    // deprecated
    rangeValuesPlacement: rangeValuesPlacementOld,

    // state
    disabled,

    // events
    onChange,
    onChangeCommitted,

    // a11y
    ariaLabel,

    // scale
    scaleTicks,

    // остальные HTMLAttributes идут на SliderContainer
    ...rest
}) => {
    const isVertical = orientation === 'vertical';
    const [isHovered, setIsHovered] = useState(false);

    const clampedOuterValue = outerValue !== undefined ? clamp(outerValue, min, max) : undefined;
    const clampedDefaultValue = defaultValue !== undefined ? clamp(defaultValue, min, max) : undefined;

    const [dragValue, setDragValue] = useState(clampedDefaultValue ?? min);

    const value = clampedOuterValue ?? dragValue;

    const {
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
    } = getSingleSliderLayout({
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
    });

    const emitChange = (newValue: number) => {
        if (!onChange) return;
        if (outerValue !== undefined || !name) {
            (onChange as (v: number) => void)(newValue);
            return;
        }
        (onChange as (e: FormTypeNumber) => void)({ target: { value: newValue, name } });
    };

    const handleTickClick = (tick: number) => {
        if (disabled) {
            return;
        }

        const clamped = clamp(tick, min, max);
        if (outerValue === undefined) {
            setDragValue(clamped);
        }

        emitChange(clamped);

        if (onChangeCommitted) {
            onChangeCommitted(clamped);
        }
    };

    const { handleChange, handleChangeCommitted, handleKeyDown } = useRangeHandlers({
        min,
        max,
        value,
        step,
        multipleStepSize,
        isControlled: outerValue !== undefined,
        onSetValue: setDragValue,
        onEmit: emitChange,
        onCommit: onChangeCommitted,
    });

    return (
        <SingleWrapper
            className={cls(labelPlacementClass, scaleAlignClass, {
                [classes.verticalOrientation]: isVertical,
                [classes.labelContentReversed]: labelReversed,
                [classes.labelPlacementBottom]: labelVerticalPlacement === 'bottom',
                [classes.labelAlignRight]: sliderAlign === 'left',
                [classes.labelAlignLeft]: sliderAlign === 'right',
                [classes.labelAlignCenter]: (sliderAlign === 'center' || sliderAlign === 'none') && !scaleTicks,
                [classes.scalePlacementTop]: scaleAlign === 'top',
                [classes.pointerHidden]: pointerSize === 'none',
            })}
            hasTicks={Boolean(scaleTicks)}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
        >
            {hasLabelContent && (
                <LabelWrapper>
                    {(labelContentLeft || labelContent) && <LabelContent>{labelContent}</LabelContent>}
                    {label && <Label>{label}</Label>}
                </LabelWrapper>
            )}

            <SliderBaseWrapper
                className={cls({
                    [classes.verticalOrientation]: isVertical,
                    [classes.rangeValuesPlacementInner]: !isVertical && rangeValuesPlacement !== 'outer',
                    [classes.rangeValuesPlacementOuter]: !isVertical && rangeValuesPlacement === 'outer',
                    [classes.scalePlacementTop]: scaleAlign === 'top',
                })}
            >
                {innerShowScale && (
                    <StyledRangeValue
                        className={cls({
                            [classes.hideMinValue]:
                                showCurrentValue &&
                                (reversed
                                    ? hideMaxValueDiff && max - value <= hideMaxValueDiff
                                    : hideMinValueDiff && value - min <= hideMinValueDiff),
                            [classes.activeRangeValue]: value === min,
                        })}
                    >
                        {reversed ? max : min}
                    </StyledRangeValue>
                )}

                <SliderContainer
                    className={cls(isVertical && classes.verticalOrientation, reversed && classes.reversed, {
                        [classes.valuePlacementNone]: valuePlacement === 'none',
                        [classes.valuePlacementLeft]: valuePlacement === 'left',
                        [classes.valuePlacementRight]: valuePlacement === 'right',
                        [classes.valuePlacementTop]: valuePlacement === 'top',
                        [classes.valuePlacementBottom]: valuePlacement === 'bottom',
                    })}
                    pointerSize={pointerSize}
                    {...rest}
                >
                    <StyledTrack />
                    <StyledProgress style={progressSizeStyle} />

                    <StyledRange
                        type="range"
                        name={name}
                        value={value}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled}
                        showPointer={showPointer}
                        datatype="slider-single"
                        aria-label={ariaLabel}
                        aria-valuemin={min}
                        aria-valuemax={max}
                        aria-valuenow={value}
                        aria-orientation={orientation}
                        onChange={handleChange}
                        onMouseUp={handleChangeCommitted}
                        onTouchEnd={handleChangeCommitted}
                        onKeyUp={handleChangeCommitted}
                        onKeyDown={handleKeyDown}
                    />

                    {innerShowCurrentValue && (
                        <StyledCurrentValue style={currentValueStyle}>{value}</StyledCurrentValue>
                    )}
                </SliderContainer>

                {innerShowScale && (
                    <StyledRangeValue
                        className={cls(classes.maxRangeValue, {
                            [classes.hideMaxValue]:
                                showCurrentValue &&
                                (reversed
                                    ? hideMinValueDiff && value - min <= hideMinValueDiff
                                    : hideMaxValueDiff && max - value <= hideMaxValueDiff),

                            [classes.activeRangeValue]: value === max,
                        })}
                    >
                        {reversed ? min : max}
                    </StyledRangeValue>
                )}

                {scaleTicks && (
                    <ScaleTicksWrapper isVertical={isVertical} reversed={reversed}>
                        {scaleTicks.map((tick) => {
                            const tickStyle = getTickStyle({ tick, min, max, isVertical, reversed: reversed ?? false });

                            return (
                                <ScaleTick
                                    key={tick}
                                    tickValue={tick}
                                    isVertical={isVertical}
                                    sliderAlign={sliderAlign}
                                    scaleAlign={scaleAlign}
                                    style={tickStyle}
                                    onClick={() => handleTickClick(tick)}
                                >
                                    <ScaleTickDot
                                        isVertical={isVertical}
                                        filled={tick <= value}
                                        reversed={reversed}
                                        scaleAlign={scaleAlign}
                                        sliderAlign={sliderAlign}
                                    />
                                </ScaleTick>
                            );
                        })}
                    </ScaleTicksWrapper>
                )}
            </SliderBaseWrapper>
        </SingleWrapper>
    );
};
