import React, { useCallback, useRef, useState } from 'react';
import type { FC } from 'react';
import cls from 'classnames';

import { classes } from '../../Slider.tokens';
import type { FormTypeString } from '../../../../types/FormType';
import { useRangeHandlers } from '../../hooks/useRangeHandlers';
import { useDoubleTextFieldHandlers } from '../../hooks/useDoubleTextFieldHandlers';
import { roundValueToStep } from '../../utils/roundValueToStep';

import type { DoubleSliderProps } from './Double.types';
import {
    SliderWrapper,
    InputsWrapper,
    Label,
    LabelContentLeft,
    LabelWrapper,
    StyledInput,
    DoubleWrapper,
    SliderContainer,
    TrackWrapper,
    StyledTrack,
    StyledDoubleProgress,
    StyledRange,
} from './Double.styles';

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

export const DoubleSlider: FC<DoubleSliderProps> = ({
    // value
    min,
    max,
    value: outerValue,
    defaultValue,
    name,
    step = 1,
    roundingMode,

    // label
    label,
    labelContentLeft,

    // layout
    multipleStepSize = 10,

    // state
    disabled,

    // events
    onChange,
    onChangeCommitted,
    onChangeTextField,
    onBlurTextField,
    onKeyDownTextField,

    // a11y
    ariaLabel,

    ...rest
}) => {
    const isControlled = outerValue !== undefined;

    const normalizeValue = useCallback(
        (value: number) => clamp(roundingMode ? roundValueToStep(value, min, step, roundingMode) : value, min, max),
        [min, max, step, roundingMode],
    );

    const clampedOuterValue =
        outerValue !== undefined ? [normalizeValue(outerValue[0]), normalizeValue(outerValue[1])] : undefined;
    const clampedDefaultValue =
        defaultValue !== undefined ? [normalizeValue(defaultValue[0]), normalizeValue(defaultValue[1])] : undefined;

    const [dragValue, setDragValue] = useState<number[]>([
        clampedDefaultValue?.[0] ?? min,
        clampedDefaultValue?.[1] ?? max,
    ]);

    const rawFirstValue = clampedOuterValue?.[0] ?? dragValue[0];
    const rawSecondValue = clampedOuterValue?.[1] ?? dragValue[1];
    const firstValue = roundingMode ? normalizeValue(rawFirstValue) : rawFirstValue;
    const secondValue = roundingMode ? normalizeValue(rawSecondValue) : rawSecondValue;

    // z-index: последний взаимодействовавший ползунок — наверху
    const [activeHandle, setActiveHandle] = useState<'first' | 'second'>('second');

    const [firstInputHovered, setFirstInputHovered] = useState(false);
    const [firstInputFocused, setFirstInputFocused] = useState(false);
    const [secondInputHovered, setSecondInputHovered] = useState(false);
    const [secondInputFocused, setSecondInputFocused] = useState(false);

    const innerRefFirst = useRef<HTMLInputElement>(null);
    const innerRefSecond = useRef<HTMLInputElement>(null);

    const hasLabelContent = label || labelContentLeft;

    const [ariaLabelLeft, ariaLabelRight] = ariaLabel || [];

    // Позиция и ширина заливки между ползунками (inline style)
    const firstPercent = (firstValue - min) / (max - min);
    const secondPercent = (secondValue - min) / (max - min);
    const doubleProgressStyle = {
        left: `calc(${firstPercent} * 100%)`,
        width: `calc(${secondPercent - firstPercent} * 100%)`,
    };

    const sortValues = useCallback((values: number[]) => values.map(normalizeValue).sort((a, b) => a - b), [
        normalizeValue,
    ]);

    const emitChange = (values: number[]) => {
        if (!onChange) return;
        if (!isControlled && name) {
            (onChange as (e: FormTypeString) => void)({
                target: { value: values.join(' - '), name },
            });
        } else {
            (onChange as (v: number[]) => void)(values);
        }
    };

    // ─── Первый ползунок ────────────────────────────────────────────────────────

    const {
        handleChange: handleFirstChange,
        handleChangeCommitted: handleFirstChangeCommitted,
        handleKeyDown: handleFirstKeyDown,
    } = useRangeHandlers({
        min,
        max: secondValue, // первый не может выйти за второй
        value: firstValue,
        step,
        roundingMode,
        multipleStepSize,
        isControlled,
        onSetValue: (v) => setDragValue((prev) => [Math.min(v, secondValue), prev[1]]),
        onEmit: (v) => emitChange([Math.min(v, secondValue), secondValue]),
        onCommit: (v) => onChangeCommitted?.([Math.min(v, secondValue), secondValue]),
    });

    // ─── Второй ползунок ────────────────────────────────────────────────────────

    const {
        handleChange: handleSecondChange,
        handleChangeCommitted: handleSecondChangeCommitted,
        handleKeyDown: handleSecondKeyDown,
    } = useRangeHandlers({
        min: firstValue, // второй не может опуститься ниже первого
        max,
        value: secondValue,
        step,
        roundingMode,
        multipleStepSize,
        isControlled,
        onSetValue: (v) => setDragValue((prev) => [prev[0], Math.max(v, firstValue)]),
        onEmit: (v) => emitChange([firstValue, Math.max(v, firstValue)]),
        onCommit: (v) => onChangeCommitted?.([firstValue, Math.max(v, firstValue)]),
    });

    // ─── Text fields ────────────────────────────────────────────────────────────

    const {
        onFirstTextfieldChange,
        onFirstTextfieldBlur,
        onSecondTextfieldChange,
        onSecondTextfieldBlur,
        onTextfieldKeyDown,
    } = useDoubleTextFieldHandlers({
        isControlled,
        firstValue,
        secondValue,
        setDragValue,
        sortValues,
        emitChange,
        normalizeValue: roundingMode ? normalizeValue : undefined,
        onChangeTextField,
        onBlurTextField,
        onKeyDownTextField,
        name,
        setFirstInputFocused,
        setFirstInputHovered,
        setSecondInputFocused,
        setSecondInputHovered,
    });

    return (
        <DoubleWrapper>
            {hasLabelContent && (
                <LabelWrapper>
                    {labelContentLeft && <LabelContentLeft>{labelContentLeft}</LabelContentLeft>}
                    {label && <Label>{label}</Label>}
                </LabelWrapper>
            )}

            <SliderWrapper>
                <SliderContainer {...rest}>
                    <TrackWrapper>
                        <StyledTrack />
                        <StyledDoubleProgress style={doubleProgressStyle} />
                    </TrackWrapper>

                    {/* Первый ползунок (левый / минимальный) */}
                    <StyledRange
                        type="range"
                        ref={innerRefFirst}
                        value={firstValue}
                        name={name}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled}
                        aria-label={ariaLabelLeft}
                        aria-valuemin={min}
                        aria-valuemax={secondValue}
                        aria-valuenow={firstValue}
                        datatype="slider-double"
                        data-slidertype="min"
                        style={{ zIndex: activeHandle === 'first' ? 2 : 1 }}
                        onChange={handleFirstChange}
                        onMouseUp={handleFirstChangeCommitted}
                        onTouchEnd={handleFirstChangeCommitted}
                        onKeyUp={handleFirstChangeCommitted}
                        onKeyDown={handleFirstKeyDown}
                        onMouseDown={() => {
                            setActiveHandle('first');
                            setFirstInputFocused(true);
                        }}
                        onTouchStart={() => {
                            setActiveHandle('first');
                            setFirstInputFocused(true);
                        }}
                        onMouseEnter={() => setFirstInputHovered(true)}
                        onMouseLeave={() => setFirstInputHovered(false)}
                        onFocus={() => setFirstInputFocused(true)}
                        onBlur={() => setFirstInputFocused(false)}
                    />

                    {/* Второй ползунок (правый / максимальный) */}
                    <StyledRange
                        type="range"
                        ref={innerRefSecond}
                        value={secondValue}
                        name={name}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled}
                        aria-label={ariaLabelRight}
                        aria-valuemin={firstValue}
                        aria-valuemax={max}
                        aria-valuenow={secondValue}
                        datatype="slider-double"
                        data-slidertype="max"
                        style={{ zIndex: activeHandle === 'second' ? 2 : 1 }}
                        onChange={handleSecondChange}
                        onMouseUp={handleSecondChangeCommitted}
                        onTouchEnd={handleSecondChangeCommitted}
                        onKeyUp={handleSecondChangeCommitted}
                        onKeyDown={handleSecondKeyDown}
                        onMouseDown={() => {
                            setActiveHandle('second');
                            setSecondInputFocused(true);
                        }}
                        onTouchStart={() => {
                            setActiveHandle('second');
                            setSecondInputFocused(true);
                        }}
                        onMouseEnter={() => setSecondInputHovered(true)}
                        onMouseLeave={() => setSecondInputHovered(false)}
                        onFocus={() => setSecondInputFocused(true)}
                        onBlur={() => setSecondInputFocused(false)}
                    />
                </SliderContainer>

                <InputsWrapper>
                    <StyledInput
                        className={cls(classes.firstTextField, {
                            [classes.textFieldHovered]: !firstInputFocused && firstInputHovered && !disabled,
                            [classes.textFieldFocused]: firstInputFocused && !disabled,
                        })}
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
                        disabled={disabled}
                        value={secondValue}
                        onChange={onSecondTextfieldChange}
                        onFocus={() => setSecondInputFocused(true)}
                        onBlur={onSecondTextfieldBlur}
                        onKeyDown={onTextfieldKeyDown}
                    />
                </InputsWrapper>
            </SliderWrapper>
        </DoubleWrapper>
    );
};
