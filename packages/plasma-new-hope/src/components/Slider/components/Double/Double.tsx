import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { FC, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import cls from 'classnames';

import { SliderBase } from '../SliderBase/SliderBase';
import { Handler } from '../../ui';
import type { HandlerProps } from '../../ui';
import { isNumber, noop } from '../../../../utils';
import { sizeData } from '../../utils';
import { classes } from '../../Slider.tokens';
import { InputHidden } from '../SliderBase/SliderBase.styles';

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
    pointerSize = 'small',
    onChangeCommitted,
    onChangeTextField,
    onBlurTextField,
    onKeyDownTextField,
    onChange,
    ariaLabel,
    multipleStepSize = 10,
    name,
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
    const [firstInputHovered, setFirstInputHovered] = useState(false);
    const [firstInputFocused, setFirstInputFocused] = useState(false);
    const [secondInputHovered, setSecondInputHovered] = useState(false);
    const [secondInputFocused, setSecondInputFocused] = useState(false);

    const [firstValue, setFirstValue] = useState<number>(value[0]);
    const [secondValue, setSecondValue] = useState<number>(value[1]);

    const handleClicked = useRef(false);

    const firstHandleRef = useRef<HTMLDivElement | null>(null);
    const secondHandleRef = useRef<HTMLDivElement | null>(null);

    const firstHandleValue = useRef<number>(value[0]);
    const secondHandleValue = useRef<number>(value[1]);

    const innerRefFirst = useRef<HTMLInputElement>(null);
    const innerRefSecond = useRef<HTMLInputElement>(null);

    const { stepSize } = state;

    const hasLabelContent = label || labelContentLeft;

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
        setFirstInputFocused(false);
        setFirstInputHovered(false);

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
        setSecondInputFocused(false);
        setSecondInputHovered(false);

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
    const settings = sizeData[size][pointerSize === 'large' ? 'large' : 'small'];

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

    useEffect(() => {
        const onMouseUp = () => {
            if (handleClicked.current) {
                handleClicked.current = false;

                setFirstInputFocused(false);
                setSecondInputFocused(false);
            }
        };

        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

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
                    size={size}
                    disabled={disabled}
                    setStepSize={setStepSize}
                    railFillWidth={state.railFillWidth}
                    settings={settings}
                    railFillXPosition={state.railFillXPosition}
                    orientation="horizontal"
                    {...rest}
                >
                    <Handler
                        ref={firstHandleRef}
                        size={pointerSize}
                        stepSize={state.stepSize}
                        multipleStepSize={multipleStepSize}
                        onChangeCommitted={onFirstHandleChangeCommitted}
                        onChange={onFirstHandleChange}
                        min={min}
                        max={state.secondValue}
                        disabled={disabled}
                        bounds={[min, state.secondValue]}
                        side="left"
                        orientation="horizontal"
                        position={state.xFirstHandle}
                        zIndex={state.firstHandleZIndex}
                        value={currentFirstSliderValue}
                        ariaLabel={ariaLabelLeft}
                        onTouchStart={() => {
                            handleClicked.current = true;
                            setFirstInputFocused(true);
                        }}
                        onTouchEnd={() => {
                            handleClicked.current = false;
                            setFirstInputFocused(false);
                        }}
                        onMouseDown={() => {
                            handleClicked.current = true;
                            setFirstInputFocused(true);
                        }}
                        onMouseEnter={() => setFirstInputHovered(true)}
                        onMouseLeave={() => setFirstInputHovered(false)}
                    />
                    <Handler
                        ref={secondHandleRef}
                        size={pointerSize}
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
                        orientation="horizontal"
                        position={state.xSecondHandle}
                        zIndex={state.secondHandleZIndex}
                        value={Math.max(state.secondValue, min)}
                        ariaLabel={ariaLabelRight}
                        onTouchStart={() => {
                            handleClicked.current = true;
                            setSecondInputFocused(true);
                        }}
                        onTouchEnd={() => {
                            handleClicked.current = false;
                            setSecondInputFocused(false);
                        }}
                        onMouseDown={() => {
                            handleClicked.current = true;
                            setSecondInputFocused(true);
                        }}
                        onMouseEnter={() => setSecondInputHovered(true)}
                        onMouseLeave={() => setSecondInputHovered(false)}
                    />
                </SliderBase>

                <InputsWrapper>
                    <StyledInput
                        className={cls(classes.firstTextField, {
                            [classes.textFieldHovered]: !firstInputFocused && firstInputHovered && !disabled,
                            [classes.textFieldFocused]: firstInputFocused && !disabled,
                        })}
                        enumerationType="plain"
                        disabled={disabled}
                        value={firstValue}
                        onChange={onFirstTextfieldChange}
                        onFocus={() => setFirstInputFocused(true)}
                        onBlur={onFirstTextfieldBlur}
                        onKeyDown={onTextfieldKeyDown}
                    />
                    <StyledInput
                        className={cls(classes.secondTextField, {
                            [classes.textFieldHovered]: !secondInputFocused && secondInputHovered && !disabled,
                            [classes.textFieldFocused]: secondInputFocused && !disabled,
                        })}
                        enumerationType="plain"
                        disabled={disabled}
                        value={secondValue}
                        onChange={onSecondTextfieldChange}
                        onFocus={() => setSecondInputFocused(true)}
                        onBlur={onSecondTextfieldBlur}
                        onKeyDown={onTextfieldKeyDown}
                    />
                </InputsWrapper>
            </SliderWrapper>
            <InputHidden
                name={name}
                type="number"
                datatype="slider-double"
                data-slidertype="min"
                value={firstValue}
                ref={innerRefFirst}
                {...noop}
            />
            <InputHidden
                name={name}
                type="number"
                datatype="slider-double"
                data-slidertype="max"
                value={secondValue}
                ref={innerRefSecond}
                {...noop}
            />
        </DoubleWrapper>
    );
};
