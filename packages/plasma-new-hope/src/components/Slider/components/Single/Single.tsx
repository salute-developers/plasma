import React, { useEffect, useMemo, useState } from 'react';
import type { FC } from 'react';
import cls from 'classnames';

import { classes, tokens } from '../../Slider.tokens';
import { FormTypeNumber } from '../../../../types/FormType';
import { useRangeHandlers } from '../../hooks/useRangeHandlers';
import { getTickStyle } from '../../utils/getTickStyle';
import { getSingleSliderLayout } from '../../utils/getSingleSliderLayout';
import { getTrackSegments } from '../../utils/getTrackSegments';

import type { SingleSliderProps } from './Single.types';
import {
    Label,
    LabelContent,
    LabelWrapper,
    ProgressSegment,
    ScaleTick,
    ScaleTickDot,
    ScaleTickLabel,
    ScaleTicksWrapper,
    SingleWrapper,
    SliderBaseWrapper,
    SliderContainer,
    StyledCurrentValue,
    StyledProgress,
    StyledRange,
    StyledRangeValue,
    StyledTrack,
    TickSeparator,
    TrackSegment,
} from './Single.styles';

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

const normalizeScaleTicks = (scaleTicks: SingleSliderProps['scaleTicks']) =>
    scaleTicks?.map((tick) =>
        typeof tick === 'number'
            ? { value: tick, label: String(tick) }
            : { ...tick, label: tick.label ?? String(tick.value) },
    );

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
    tickType = 'bullet',

    // остальные HTMLAttributes идут на SliderContainer
    ...rest
}) => {
    const isVertical = orientation === 'vertical';
    const [isHovered, setIsHovered] = useState(false);

    const clampedOuterValue = outerValue !== undefined ? clamp(outerValue, min, max) : undefined;
    const clampedDefaultValue = defaultValue !== undefined ? clamp(defaultValue, min, max) : undefined;

    const [dragValue, setDragValue] = useState(clampedDefaultValue ?? min);

    const value = clampedOuterValue ?? dragValue;

    const normalizedScaleTicks = useMemo(() => normalizeScaleTicks(scaleTicks), [scaleTicks]);

    const cutValues = useMemo(() => normalizedScaleTicks?.map(({ value: tickValue }) => tickValue) ?? [], [
        normalizedScaleTicks,
    ]);

    const { trackSegments, progressSegments } = useMemo(
        () =>
            tickType === 'separator'
                ? getTrackSegments({ min, max, value, cutValues, isVertical })
                : { trackSegments: [], progressSegments: [] },
        [tickType, min, max, value, cutValues, isVertical],
    );

    // Округляем значение, если оно не кратно новому шагу
    useEffect(() => {
        const remainder = (value - min) % step;

        if (Math.abs(remainder) > 0.000001) {
            const roundedValue = Math.round((value - min) / step) * step + min;
            const validValue = Math.max(min, Math.min(max, roundedValue));

            setDragValue(validValue);

            if (outerValue !== undefined) {
                emitChange(validValue);
            }
        }
    }, [step, min, max, value, outerValue]);

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
        rangeMinValueOpacity,
        rangeMaxValueOpacity,
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
        valuePlacement,
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
                [classes.pointerHidden]: !showPointer,
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
                        style={{ opacity: rangeMinValueOpacity }}
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
                    {...rest}
                >
                    {tickType === 'separator' ? (
                        <>
                            {trackSegments.map((segmentStyle, index) => (
                                <TrackSegment key={`track-segment-${index}`} style={segmentStyle} />
                            ))}
                            {progressSegments.map((segmentStyle, index) => (
                                <ProgressSegment key={`progress-segment-${index}`} style={segmentStyle} />
                            ))}
                        </>
                    ) : (
                        <>
                            <StyledTrack />
                            <StyledProgress style={progressSizeStyle} />
                        </>
                    )}

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
                        style={{ opacity: rangeMaxValueOpacity }}
                    >
                        {reversed ? min : max}
                    </StyledRangeValue>
                )}

                {normalizedScaleTicks && (
                    <ScaleTicksWrapper isVertical={isVertical} reversed={reversed}>
                        {normalizedScaleTicks.map(({ value: tickValue, label: tickLabel, labelAlign }) => {
                            const tickStyle = getTickStyle({
                                tick: tickValue,
                                min,
                                max,
                                isVertical,
                                reversed: reversed ?? false,
                                edgeOffset: tickType === 'separator' ? `var(${tokens.tickSeparatorWidth})` : undefined,
                            });

                            return (
                                <ScaleTick key={tickValue} style={tickStyle} onClick={() => handleTickClick(tickValue)}>
                                    <ScaleTickLabel
                                        isVertical={isVertical}
                                        sliderAlign={sliderAlign}
                                        scaleAlign={scaleAlign}
                                        labelAlign={labelAlign}
                                    >
                                        {tickLabel}
                                    </ScaleTickLabel>
                                    {tickType === 'bullet' && (
                                        <ScaleTickDot
                                            isVertical={isVertical}
                                            filled={tickValue <= value}
                                            reversed={reversed}
                                            scaleAlign={scaleAlign}
                                            sliderAlign={sliderAlign}
                                        />
                                    )}
                                    {tickType === 'separator' && (
                                        <TickSeparator
                                            isVertical={isVertical}
                                            filled={tickValue <= value}
                                            scaleAlign={scaleAlign}
                                            sliderAlign={sliderAlign}
                                        />
                                    )}
                                </ScaleTick>
                            );
                        })}
                    </ScaleTicksWrapper>
                )}
            </SliderBaseWrapper>
        </SingleWrapper>
    );
};
