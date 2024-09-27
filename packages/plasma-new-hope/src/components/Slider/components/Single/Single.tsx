import React, { useCallback, useEffect, useState, useRef } from 'react';
import type { FC } from 'react';

import { SliderBase } from '../SliderBase/SliderBase';
import { Handler } from '../../ui';
import { sizeData } from '../../utils';
import type { HandlerProps } from '../../ui';
import { cx, isNumber, noop } from '../../../../utils';
import { classes } from '../../Slider.tokens';
import { InputHidden } from '../SliderBase/SliderBase.styles';
import { FormTypeNumber } from '../../../../types/FormType';

import type { SingleSliderProps } from './Single.types';
import { Label, LabelContent, LabelWrapper, SingleWrapper, SliderBaseWrapper, StyledRangeValue } from './Single.styles';

export const SingleSlider: FC<SingleSliderProps> = ({
    min,
    max,
    value,
    disabled,
    onChangeCommitted,
    onChange,
    ariaLabel,
    label,
    labelContentLeft,
    labelContent,
    sliderAlign = 'left',
    showScale,
    showRangeValues,
    showCurrentValue,
    hideMinValueDiff,
    hideMaxValueDiff,
    labelPlacement = 'top',
    rangeValuesPlacement: rangeValuesPlacementOld,
    scaleAlign = 'bottom',
    multipleStepSize = 10,
    defaultValue,
    size = 'm',
    name,
    pointerSize = 'small',
    orientation = 'horizontal',
    reversed,
    labelReversed,
    ...rest
}) => {
    const isVertical = orientation === 'vertical';

    const [state, setState] = useState({
        handlePosition: 0,
        stepSize: 0,
        railFillWidth: 0,
    });

    const innerRef = useRef<HTMLInputElement>(null);

    const [startOffset, setStartOffset] = useState(0);
    const [endOffset, setEndOffset] = useState(0);

    const innerValue = value ?? defaultValue ?? min;
    const [dragValue, setDragValue] = useState(innerValue);

    const { stepSize } = state;

    const innerShowScale = showRangeValues || showScale;

    const hasLabelContent =
        Boolean(label || labelContentLeft || labelContent) && (!isVertical || (isVertical && sliderAlign !== 'none'));
    const labelPlacementClass =
        !isVertical && (labelPlacement === 'outer' || labelPlacement === 'top')
            ? classes.labelPlacementOuter
            : classes.labelPlacementInner;

    const rangeValuesPlacement = rangeValuesPlacementOld === 'outer' || scaleAlign === 'bottom' ? 'outer' : 'inner';
    const scaleAlignClass =
        rangeValuesPlacement === 'outer' ? classes.rangeValuesPlacementOuter : classes.rangeValuesPlacementInner;

    const hideMinValueDiffClass = hideMinValueDiff && dragValue - min <= hideMinValueDiff ? classes.hideMinValue : '';
    const hideMaxValueDiffClass = hideMaxValueDiff && max - dragValue <= hideMaxValueDiff ? classes.hideMaxValue : '';
    const verticalOrientationClass = orientation === 'vertical' ? classes.verticalOrientation : '';

    const startLabelRef = useRef<HTMLDivElement>(null);
    const endLabelRef = useRef<HTMLDivElement>(null);

    const activeFirstValue = dragValue === min ? classes.activeRangeValue : undefined;
    const activeSecondValue = dragValue === max ? classes.activeRangeValue : undefined;

    useEffect(() => {
        const visibleValue = reversed ? max - dragValue + min : dragValue;
        const localValue = Math.min(Math.max(visibleValue, min), max) - min;

        if (!isVertical && rangeValuesPlacement === 'outer') {
            const startWidth = startLabelRef.current?.offsetWidth;
            if (isNumber(startWidth)) {
                setStartOffset(Number(startWidth));
            }

            const endWidth = endLabelRef.current?.offsetWidth;
            if (isNumber(endWidth)) {
                setEndOffset(Number(endWidth));
            }
        } else if (isVertical && innerShowScale && sliderAlign !== 'center') {
            setStartOffset(12);
            setEndOffset(12);
        } else {
            setStartOffset(1);
            setEndOffset(1);
        }

        setState((prevState) => ({
            ...prevState,
            handlePosition: stepSize * localValue,
            railFillWidth: stepSize * localValue,
        }));
    }, [
        dragValue,
        innerShowScale,
        labelPlacement,
        stepSize,
        rangeValuesPlacement,
        min,
        max,
        isVertical,
        reversed,
        // для перерасчета размеров
        sliderAlign,
        size,
    ]);

    const setStepSize = useCallback((newStepSize: number) => {
        setState((prevState) => ({
            ...prevState,
            stepSize: newStepSize,
        }));
    }, []);

    const onHandleChange: NonNullable<HandlerProps['onChange']> = (handleValue, data) => {
        const newValue = Math.round(reversed ? max - handleValue + min : handleValue);

        const newHandlePosition = isVertical ? data.y : data.x;
        setState((prevState) => ({
            ...prevState,
            railFillWidth: newHandlePosition,
        }));

        if (onChange) {
            if (value !== undefined) {
                (onChange as (value: number) => void)(newValue);
            }

            if (name && !value) {
                (onChange as (event: FormTypeNumber) => void)({
                    target: {
                        value: newValue,
                        name,
                    },
                });
            }
        }

        setDragValue(newValue);
    };

    const onHandleChangeCommitted: NonNullable<HandlerProps['onChangeCommitted']> = useCallback(
        (handleValue, data) => {
            const newValue = Math.round(reversed ? max - handleValue + min : handleValue);

            if (onChangeCommitted) {
                onChangeCommitted(newValue);
            }

            setState((prevState) => ({
                ...prevState,
                handlePosition: isVertical ? data.lastY : data.lastX,
                railFillWidth: isVertical ? data.lastY : data.lastX,
            }));

            setDragValue(newValue);
        },
        [isVertical, min, max, reversed],
    );

    const labelVerticalPlacement = reversed ? 'bottom' : 'top';
    const valuePlacement = sliderAlign === 'right' ? 'left' : 'right';
    const settings = sizeData[size][pointerSize === 'large' ? 'large' : 'small'];

    return (
        <SingleWrapper
            className={cx(
                labelPlacementClass,
                scaleAlignClass,
                verticalOrientationClass,
                sliderAlign === 'right' && classes.labelAlignLeft,
                (sliderAlign === 'center' || sliderAlign === 'none') && classes.labelAlignCenter,
                sliderAlign === 'left' && classes.labelAlignRight,
                labelVerticalPlacement === 'bottom' && classes.labelPlacementBottom,
                labelReversed && classes.labelContentReversed,
            )}
        >
            {hasLabelContent && (
                <LabelWrapper>
                    {(labelContentLeft || labelContent) && <LabelContent>{labelContent}</LabelContent>}
                    {label && <Label>{label}</Label>}
                </LabelWrapper>
            )}
            <SliderBaseWrapper
                className={cx(
                    !isVertical && rangeValuesPlacement === 'outer' && classes.rangeValuesPlacementOuter,
                    !isVertical && rangeValuesPlacement !== 'outer' && classes.rangeValuesPlacementInner,
                    verticalOrientationClass,
                )}
            >
                {innerShowScale && (
                    <StyledRangeValue ref={startLabelRef} className={cx(hideMinValueDiffClass, activeFirstValue)}>
                        {reversed ? max : min}
                    </StyledRangeValue>
                )}
                <SliderBase
                    min={min}
                    max={max}
                    disabled={disabled}
                    size={size}
                    sliderAlign={sliderAlign}
                    setStepSize={setStepSize}
                    onChange={onHandleChangeCommitted}
                    railFillWidth={state.railFillWidth}
                    settings={settings}
                    labelPlacement={labelPlacement}
                    rangeValuesPlacement={rangeValuesPlacement}
                    orientation={orientation}
                    {...rest}
                >
                    <Handler
                        size={pointerSize}
                        orientation={orientation}
                        stepSize={state.stepSize}
                        onChangeCommitted={onHandleChangeCommitted}
                        onChange={onHandleChange}
                        position={state.handlePosition}
                        min={min}
                        max={max}
                        startOffset={startOffset}
                        endOffset={endOffset}
                        value={dragValue}
                        disabled={disabled}
                        ariaLabel={ariaLabel}
                        multipleStepSize={multipleStepSize}
                        showCurrentValue={showCurrentValue}
                        valuePlacement={valuePlacement}
                    />
                </SliderBase>
                {innerShowScale && (
                    <StyledRangeValue
                        ref={endLabelRef}
                        className={cx(classes.maxRangeValue, hideMaxValueDiffClass, activeSecondValue)}
                    >
                        {reversed ? min : max}
                    </StyledRangeValue>
                )}
            </SliderBaseWrapper>
            <InputHidden
                name={name}
                type="number"
                datatype="slider-single"
                value={dragValue}
                ref={innerRef}
                {...noop}
            />
        </SingleWrapper>
    );
};
