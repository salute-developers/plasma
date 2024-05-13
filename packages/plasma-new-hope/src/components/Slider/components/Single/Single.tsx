import React, { useCallback, useEffect, useState, useRef } from 'react';
import type { FC } from 'react';

import { SliderBase } from '../SliderBase/SliderBase';
import { Handler } from '../../ui';
import { sizeData } from '../../utils';
import type { HandlerProps } from '../../ui';
import { cx, isNumber } from '../../../../utils';
import { classes } from '../../Slider.tokens';

import type { SingleSliderProps } from './Single.types';
import {
    Label,
    LabelContentLeft,
    LabelWrapper,
    SingleWrapper,
    SliderBaseWrapper,
    StyledRangeValue,
} from './Single.styles';

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
    showRangeValues,
    showCurrentValue,
    hideMinValueDiff,
    hideMaxValueDiff,
    labelPlacement = 'outer',
    rangeValuesPlacement = 'outer',
    multipleStepSize = 10,
    size = 'm',
    ...rest
}) => {
    const [state, setState] = useState({
        xHandle: 0,
        stepSize: 0,
        railFillWidth: 0,
    });

    const [startOffset, setStartOffset] = useState(0);
    const [endOffset, setEndOffset] = useState(0);

    const [dragValue, setDragValue] = useState(value);

    const { stepSize } = state;

    const hasLabelContent = label || labelContentLeft;
    const labelPlacementClass = labelPlacement === 'outer' ? classes.labelPlacementOuter : classes.labelPlacementInner;
    const rangeValuesPlacementClass =
        rangeValuesPlacement === 'outer' ? classes.rangeValuesPlacementOuter : classes.rangeValuesPlacementInner;
    const hideMinValueDiffClass = hideMinValueDiff && value - min <= hideMinValueDiff ? classes.hideMinValue : '';
    const hideMaxValueDiffClass = hideMaxValueDiff && max - value <= hideMaxValueDiff ? classes.hideMaxValue : '';

    const startLabelRef = useRef<HTMLDivElement>(null);
    const endLabelRef = useRef<HTMLDivElement>(null);

    const activeFirstValue = dragValue === min ? classes.activeRangeValue : undefined;
    const activeSecondValue = dragValue === max ? classes.activeRangeValue : undefined;

    useEffect(() => {
        const localValue = Math.min(Math.max(value, min), max) - min;

        if (rangeValuesPlacement === 'outer') {
            const startWidth = startLabelRef.current?.offsetWidth;
            if (isNumber(startWidth)) {
                setStartOffset(Number(startWidth));
            }

            const endWidth = endLabelRef.current?.offsetWidth;
            if (isNumber(endWidth)) {
                setEndOffset(Number(endWidth));
            }
        } else {
            setStartOffset(1);
            setEndOffset(1);
        }

        setState((prevState) => ({
            ...prevState,
            xHandle: stepSize * localValue,
            railFillWidth: stepSize * localValue,
        }));
    }, [value, labelPlacement, stepSize, rangeValuesPlacement, min, max, setStartOffset, setEndOffset]);

    const setStepSize = useCallback(
        (newStepSize: number) => {
            setState((prevState) => ({
                ...prevState,
                stepSize: newStepSize,
            }));
        },
        [setState],
    );

    const onHandleChange: NonNullable<HandlerProps['onChange']> = (handleValue, data) => {
        const newHandleXPosition = data.x;
        const newValue = Math.round(handleValue);

        setState((prevState) => ({
            ...prevState,
            railFillWidth: newHandleXPosition,
        }));

        if (onChange) {
            onChange(newValue);
        }

        setDragValue(newValue);
    };

    const onHandleChangeCommitted: NonNullable<HandlerProps['onChangeCommitted']> = (handleValue, data) => {
        const newValue = Math.round(handleValue);

        if (onChangeCommitted) {
            onChangeCommitted(newValue);
        }

        setState((prevState) => ({
            ...prevState,
            xHandle: data.lastX,
            railFillWidth: data.lastX,
        }));

        setDragValue(newValue);
    };

    return (
        <SingleWrapper className={labelPlacementClass}>
            {hasLabelContent && (
                <LabelWrapper>
                    {labelContentLeft && <LabelContentLeft>{labelContentLeft}</LabelContentLeft>}
                    {label && <Label>{label}</Label>}
                </LabelWrapper>
            )}
            <SliderBaseWrapper className={rangeValuesPlacementClass}>
                {showRangeValues && (
                    <StyledRangeValue ref={startLabelRef} className={cx(hideMinValueDiffClass, activeFirstValue)}>
                        {min}
                    </StyledRangeValue>
                )}
                <SliderBase
                    min={min}
                    max={max}
                    disabled={disabled}
                    setStepSize={setStepSize}
                    onChange={onHandleChangeCommitted}
                    railFillWidth={state.railFillWidth}
                    settings={sizeData[size]}
                    labelPlacement={labelPlacement}
                    rangeValuesPlacement={rangeValuesPlacement}
                    {...rest}
                >
                    <Handler
                        stepSize={state.stepSize}
                        onChangeCommitted={onHandleChangeCommitted}
                        onChange={onHandleChange}
                        xPosition={state.xHandle}
                        min={min}
                        max={max}
                        startOffset={startOffset}
                        endOffset={endOffset}
                        value={dragValue}
                        disabled={disabled}
                        ariaLabel={ariaLabel}
                        multipleStepSize={multipleStepSize}
                        showCurrentValue={showCurrentValue}
                    />
                </SliderBase>
                {showRangeValues && (
                    <StyledRangeValue
                        ref={endLabelRef}
                        className={cx(classes.maxRangeValue, hideMaxValueDiffClass, activeSecondValue)}
                    >
                        {max}
                    </StyledRangeValue>
                )}
            </SliderBaseWrapper>
        </SingleWrapper>
    );
};
