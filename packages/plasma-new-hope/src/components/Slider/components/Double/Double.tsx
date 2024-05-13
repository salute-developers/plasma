import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { FC, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

import { SliderBase } from '../SliderBase/SliderBase';
import { Handler } from '../../ui';
import type { HandlerProps } from '../../ui';
import { sizeData } from '../../utils';
import { cx, isNumber } from '../../../../utils';
import { classes } from '../../Slider.tokens';

import { DoubleSliderProps } from './Double.types';
import {
    SliderWrapper,
    InputsWrapper,
    Label,
    LabelContentLeft,
    LabelWrapper,
    StyledInput,
    DoubleWrapper,
} from './Double.styles';

function getXCenterHandle(handle: HTMLDivElement) {
    const containerX = handle.parentElement?.getBoundingClientRect()?.x || 0;
    const handleRect = handle.getBoundingClientRect();
    const handlePosition = handleRect.x;
    return handlePosition - containerX;
}

export const DoubleSlider: FC<DoubleSliderProps> = ({
    min,
    max,
    value,
    disabled,
    label,
    labelContentLeft,
    size = 'm',
    onChangeCommitted,
    onChangeTextField,
    onBlurTextField,
    onKeyDownTextField,
    onChange,
    ariaLabel,
    multipleStepSize = 10,
    ...rest
}) => {
    const [state, setState] = useState({
        stepSize: 0,
        railFillWidth: 0,
        railFillXPosition: 0,
        xFirstHandle: 0,
        xSecondHandle: 0,
        firstHandleZIndex: 100,
        secondHandleZIndex: 101,
        firstValue: value[0],
        secondValue: value[1],
    });
    const [firstInputActive, setFirstInputActive] = useState(false);
    const [secondInputActive, setSecondInputActive] = useState(false);

    const [firstValue, setFirstValue] = useState<number>(value[0]);
    const [secondValue, setSecondValue] = useState<number>(value[1]);

    const firstHandleRef = useRef<HTMLDivElement | null>(null);
    const secondHandleRef = useRef<HTMLDivElement | null>(null);

    const firstHandleValue = useRef<number>(value[0]);
    const secondHandleValue = useRef<number>(value[1]);

    const { stepSize } = state;

    const hasLabelContent = label || labelContentLeft;
    const firstInputActiveClass = firstInputActive && !disabled ? classes.textFieldActive : undefined;
    const secondInputActiveClass = secondInputActive && !disabled ? classes.textFieldActive : undefined;

    useEffect(() => {
        const firstLocalValue = Math.min(Math.max(value[0], min), max) - min;
        const secondLocalValue = Math.min(Math.max(value[1], min), max) - min;

        setFirstValue(value[0]);
        setSecondValue(value[1]);

        setState((prevState) => ({
            ...prevState,
            railFillXPosition: stepSize * firstLocalValue,
            railFillWidth: stepSize * secondLocalValue - stepSize * firstLocalValue,
            xFirstHandle: stepSize * firstLocalValue,
            xSecondHandle: stepSize * secondLocalValue,
        }));
    }, [value, stepSize, min, max, setFirstValue, setSecondValue]);

    const setStepSize = useCallback(
        (newStepSize: number) => {
            setState((prevState) => ({
                ...prevState,
                stepSize: newStepSize,
            }));
        },
        [setState],
    );

    const onFirstHandleChange: NonNullable<HandlerProps['onChange']> = (handleValue, data) => {
        if (!secondHandleRef?.current) {
            return;
        }
        const newHandleXPosition = data.x;
        const secondHandleXPosition = getXCenterHandle(secondHandleRef.current);
        const fillWidth = secondHandleXPosition - newHandleXPosition;

        firstHandleValue.current = handleValue;

        setFirstValue(handleValue);

        setState((prevState) => ({
            ...prevState,
            firstHandleZIndex: 101,
            secondHandleZIndex: 100,
            railFillWidth: fillWidth < 0 ? 0 : fillWidth,
            railFillXPosition: newHandleXPosition,
        }));
        if (onChange) {
            onChange([handleValue, value[1]]);
        }
    };

    const onFirstHandleChangeCommitted: NonNullable<HandlerProps['onChangeCommitted']> = (handleValue, data) => {
        if (!secondHandleRef?.current) {
            return;
        }
        const newHandleXPosition = data.x;
        const secondHandleXPosition = getXCenterHandle(secondHandleRef.current);
        const fillWidth = secondHandleXPosition - newHandleXPosition;

        firstHandleValue.current = handleValue;

        setFirstValue(handleValue);
        if (onChangeCommitted) {
            onChangeCommitted([handleValue, value[1]]);
        }

        setState((prevState) => ({
            ...prevState,
            firstValue: handleValue,
            xFirstHandle: data.x,
            railFillWidth: fillWidth < 0 ? 0 : fillWidth,
            railFillXPosition: newHandleXPosition,
        }));
    };

    const onFirstTextfieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = Number(event.target.value);

        setFirstValue(handleValue);
        if (onChangeTextField) {
            onChangeTextField([handleValue, secondValue], event);
        }
    };

    const onFirstTextfieldBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = Number(event.target.value);

        setFirstValue(handleValue);
        if (onBlurTextField) {
            onBlurTextField && onBlurTextField([handleValue, secondValue], event);
        }
    };

    const onSecondHandleChange: NonNullable<HandlerProps['onChange']> = (handleValue, data) => {
        if (!firstHandleRef?.current) {
            return;
        }
        const firstXHandleXPosition = getXCenterHandle(firstHandleRef.current);

        const newHandleXPosition = data.x;
        const fillWidth = newHandleXPosition - firstXHandleXPosition;

        secondHandleValue.current = handleValue;

        setSecondValue(handleValue);
        setState((prevState) => ({
            ...prevState,
            firstHandleZIndex: 100,
            secondHandleZIndex: 101,
            railFillWidth: fillWidth < 0 ? 0 : fillWidth,
            railFillXPosition: firstXHandleXPosition,
        }));
        if (onChange) {
            onChange([value[0], handleValue]);
        }
    };

    const onSecondHandleChangeCommitted: NonNullable<HandlerProps['onChangeCommitted']> = (handleValue, data) => {
        if (!firstHandleRef?.current) {
            return;
        }
        const firstXHandleXPosition = getXCenterHandle(firstHandleRef.current);

        const newHandleXPosition = data.x;
        const fillWidth = newHandleXPosition - firstXHandleXPosition;

        secondHandleValue.current = handleValue;

        if (onChangeCommitted) {
            onChangeCommitted([value[0], handleValue]);
        }

        setSecondValue(handleValue);
        setState((prevState) => ({
            ...prevState,
            secondValue: handleValue,
            xSecondHandle: data.x,
            railFillWidth: fillWidth < 0 ? 0 : fillWidth,
            railFillXPosition: firstXHandleXPosition,
        }));
    };

    const onSecondTextfieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isNumber(event.target.value)) {
            return;
        }
        const handleValue = Number(event.target.value);

        setSecondValue(handleValue);
        if (onChangeTextField) {
            onChangeTextField([firstValue, handleValue], event);
        }
    };

    const onSecondTextfieldBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = Number(event.target.value);

        setSecondValue(handleValue);
        if (onBlurTextField) {
            onBlurTextField([firstValue, handleValue], event);
        }
    };

    const onTextfieldKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDownTextField) {
            onKeyDownTextField([firstValue, secondValue], event);
        }
    };

    const [ariaLabelLeft, ariaLabelRight] = ariaLabel || [];
    const currentFirstSliderValue = Math.max(state.firstValue, min);

    return (
        <DoubleWrapper>
            {hasLabelContent && (
                <LabelWrapper>
                    {labelContentLeft && <LabelContentLeft>{labelContentLeft}</LabelContentLeft>}
                    {label && <Label>{label}</Label>}
                </LabelWrapper>
            )}
            <SliderWrapper>
                <SliderBase
                    min={min}
                    max={max}
                    disabled={disabled}
                    setStepSize={setStepSize}
                    railFillWidth={state.railFillWidth}
                    settings={sizeData[size]}
                    railFillXPosition={state.railFillXPosition}
                    {...rest}
                >
                    <Handler
                        ref={firstHandleRef}
                        stepSize={state.stepSize}
                        multipleStepSize={multipleStepSize}
                        onChangeCommitted={onFirstHandleChangeCommitted}
                        onChange={onFirstHandleChange}
                        min={min}
                        max={state.secondValue}
                        disabled={disabled}
                        bounds={[min, state.secondValue]}
                        side="left"
                        xPosition={state.xFirstHandle}
                        zIndex={state.firstHandleZIndex}
                        value={currentFirstSliderValue}
                        ariaLabel={ariaLabelLeft}
                        onMouseEnter={() => setFirstInputActive(true)}
                        onMouseLeave={() => setFirstInputActive(false)}
                    />
                    <Handler
                        ref={secondHandleRef}
                        stepSize={state.stepSize}
                        multipleStepSize={multipleStepSize}
                        onChangeCommitted={onSecondHandleChangeCommitted}
                        onChange={onSecondHandleChange}
                        min={min}
                        ariaValueMin={currentFirstSliderValue}
                        max={max}
                        disabled={disabled}
                        bounds={[state.firstValue, max]}
                        side="right"
                        xPosition={state.xSecondHandle}
                        zIndex={state.secondHandleZIndex}
                        value={Math.max(state.secondValue, min)}
                        ariaLabel={ariaLabelRight}
                        onMouseEnter={() => setSecondInputActive(true)}
                        onMouseLeave={() => setSecondInputActive(false)}
                    />
                </SliderBase>

                <InputsWrapper>
                    <StyledInput
                        className={cx(classes.firstTextField, firstInputActiveClass)}
                        enumerationType="plain"
                        disabled={disabled}
                        value={firstValue}
                        onChange={onFirstTextfieldChange}
                        onBlur={onFirstTextfieldBlur}
                        onKeyDown={onTextfieldKeyDown}
                    />
                    <StyledInput
                        className={cx(classes.secondTextField, secondInputActiveClass)}
                        enumerationType="plain"
                        disabled={disabled}
                        value={secondValue}
                        onChange={onSecondTextfieldChange}
                        onBlur={onSecondTextfieldBlur}
                        onKeyDown={onTextfieldKeyDown}
                    />
                </InputsWrapper>
            </SliderWrapper>
        </DoubleWrapper>
    );
};
