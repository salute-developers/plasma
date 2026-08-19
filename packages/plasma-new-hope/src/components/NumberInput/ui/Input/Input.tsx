import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, FocusEvent, SyntheticEvent } from 'react';
import { NumericFormat, numericFormatter } from 'react-number-format';
import type { NumberFormatValues, SourceInfo } from 'react-number-format';
import { cx, isNumber } from 'src/utils';
import { useDidMountEffect, useForkRef } from 'src/hooks';
import { keyCodes } from 'src/utils/constants';

import { caretWidthOffset, defaultCharacterWidth, getPreciseValue } from '../../utils';
import { classes } from '../../NumberInput.tokens';

import type { InputProps } from './Input.types';
import {
    AdditionalText,
    Input,
    InputWrapper,
    DynamicInput,
    InputWidthHelper,
    TextWrapper,
    StyledSpinner,
    Loader,
} from './Input.styles';

const getPreciseValueWithLeadingZeros = (value: number | string, precision: number) => {
    const stringValue = String(value);
    const isNegative = stringValue.startsWith('-');
    const unsignedValue = isNegative ? stringValue.slice(1) : stringValue;
    const [integerPart] = unsignedValue.split('.');

    const preciseValue = getPreciseValue(value, precision);
    const unsignedPreciseValue = preciseValue.startsWith('-') ? preciseValue.slice(1) : preciseValue;
    const [preciseIntegerPart, preciseFractionPart] = unsignedPreciseValue.split('.');
    const normalizedIntegerPart = preciseIntegerPart.padStart(integerPart.length, '0');
    const normalizedFractionPart = preciseFractionPart === undefined ? '' : `.${preciseFractionPart}`;

    return (isNegative ? '-' : '') + normalizedIntegerPart + normalizedFractionPart;
};

export const NumberInput = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            value,
            precision,
            thousandSeparator,
            decimalSeparator,
            thousandsGroupStyle,
            decimalScale,
            fixedDecimalScale,
            allowNegative,
            allowLeadingZeros,
            isAllowed,
            min,
            max,
            isLoading,
            loader,
            disabled,
            readOnly,
            segmentation,
            textBefore,
            textAfter,
            isManualInput,
            isInputFocused,
            setIsInputFocused,
            setIsAnimationRun,
            setInnerValue,
            onChange,
            onBlur,
            onKeyDown,
            onDecrementKey,
            onIncrementKey,
            shouldFocusInput,
            onFocusHandled,
            ...rest
        },
        ref,
    ) => {
        const formatProps = {
            thousandSeparator,
            decimalSeparator,
            thousandsGroupStyle,
            decimalScale,
            fixedDecimalScale,
            allowNegative,
            allowLeadingZeros,
            isAllowed,
        };
        const formattedValue = numericFormatter(String(value ?? ''), formatProps);

        const [dynamicWidth, setDynamicWidth] = useState(
            formattedValue ? `${formattedValue.length}ch` : defaultCharacterWidth,
        );
        const [lastValidValue, setLastValidValue] = useState<number | string | undefined>(value);
        const [errorClass, setErrorClass] = useState<string | undefined>(undefined);
        const [errorValue, setErrorValue] = useState<number>();

        const inputHelperRef = useRef<HTMLSpanElement>(null);
        const wrapperRef = useRef<HTMLDivElement>(null);
        const textWrapperRef = useRef<HTMLDivElement>(null);
        const inputRef = useRef<HTMLInputElement>(null);
        const inputForkRef = useForkRef(inputRef, ref);

        const solidViewClass = segmentation === 'solid' ? classes.solidView : undefined;
        const manualInputClass = isManualInput ? classes.manualInput : undefined;

        const getInputWidth = (firstRender = true) => {
            if (!firstRender && inputHelperRef.current?.clientWidth) {
                return `${inputHelperRef.current?.clientWidth + caretWidthOffset}px`;
            }

            if (formattedValue) {
                return `calc(${formattedValue.length}ch + ${caretWidthOffset}px)`;
            }

            return defaultCharacterWidth;
        };

        const setValues = (event: SyntheticEvent<HTMLInputElement> | null, newValue: number | string | undefined) => {
            setLastValidValue(newValue);
            setInnerValue(newValue);

            if (onChange) {
                onChange(event, newValue);
            }
        };

        const validateValue = (newValue: number | string | undefined) => {
            if (!newValue?.toString() || !isNumber(newValue)) {
                setValues(null, '');
                setIsAnimationRun(false);
                return;
            }

            const resValue = Number(newValue);
            if (max !== undefined && resValue > max) {
                setErrorClass(classes.errorAnimation);
                setErrorValue(max);
                setIsAnimationRun(true);
                return;
            }

            if (min !== undefined && resValue < min) {
                setErrorClass(classes.errorAnimation);
                setErrorValue(min);
                setIsAnimationRun(true);
                return;
            }

            if (String(newValue).endsWith('.')) {
                setValues(null, allowLeadingZeros ? String(newValue).slice(0, -1) : Number(newValue));
                setIsAnimationRun(false);
                return;
            }

            if (precision !== undefined) {
                const preciseValue = getPreciseValue(newValue, precision);
                const preciseNewValue = allowLeadingZeros
                    ? getPreciseValueWithLeadingZeros(newValue, precision)
                    : Number(preciseValue);
                setValues(null, preciseNewValue);
            }

            setIsAnimationRun(false);
        };

        const handleManualInputChange = (values: NumberFormatValues, sourceInfo: SourceInfo) => {
            const { event } = sourceInfo;
            if (!event || !isManualInput || disabled || readOnly) {
                return;
            }

            setIsAnimationRun(true);

            const { value: newValue } = values;

            if (!isNumber(lastValidValue) && lastValidValue !== '' && !newValue) {
                return;
            }

            if (!newValue) {
                setInnerValue('');

                if (onChange) {
                    onChange(event, '');
                }
                return;
            }

            if (newValue.endsWith('.') || newValue === '-') {
                setInnerValue(newValue);

                if (onChange) {
                    onChange(event, newValue);
                }
                return;
            }

            if (
                textWrapperRef?.current &&
                wrapperRef?.current &&
                textWrapperRef?.current?.clientWidth > wrapperRef?.current?.clientWidth
            ) {
                wrapperRef.current.scrollLeft =
                    textWrapperRef.current.offsetWidth - textWrapperRef.current.offsetLeft || 0;
            }

            setValues(event, newValue);
        };

        const handleClickInputWrapper = () => {
            if (!isManualInput || !inputRef.current) {
                return;
            }

            if (!isInputFocused) {
                inputRef.current.focus();
            }

            setIsInputFocused(true);
        };

        const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
            validateValue(value);
            setIsInputFocused(false);

            if (onBlur) {
                onBlur(event);
            }
        };

        const handleFocus = () => {
            if (isManualInput && !isInputFocused) {
                inputRef.current?.select();
            }
            setIsInputFocused(true);
        };

        const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
            if (disabled) {
                return;
            }

            if (event.keyCode === keyCodes.Up && onIncrementKey) {
                event.preventDefault();
                onIncrementKey();
                return;
            }

            if (event.keyCode === keyCodes.Down && onDecrementKey) {
                event.preventDefault();
                onDecrementKey();
                return;
            }

            if (event.keyCode === keyCodes.Enter) {
                event.preventDefault();

                validateValue(value);

                if (onKeyDown) {
                    onKeyDown(event);
                }
            }
        };

        const handleEndErrorAnimation = (correctValue: number) => {
            setIsAnimationRun(false);
            setIsInputFocused(false);

            setErrorClass(undefined);
            setValues(null, correctValue);
        };

        useEffect(() => {
            setDynamicWidth(getInputWidth());
        }, []);

        useDidMountEffect(() => {
            setDynamicWidth(getInputWidth(false));
        }, [formattedValue]);

        useEffect(() => {
            if (shouldFocusInput && inputRef.current) {
                inputRef.current.focus();
                onFocusHandled?.();
            }
        }, [shouldFocusInput]);

        return (
            <InputWrapper
                ref={wrapperRef}
                className={cx(solidViewClass, errorClass, manualInputClass)}
                isManualInput={Boolean(isManualInput)}
                onClick={handleClickInputWrapper}
            >
                <TextWrapper ref={textWrapperRef}>
                    {!isLoading && textBefore && (
                        <AdditionalText className={classes.textBefore}>{textBefore}</AdditionalText>
                    )}
                    {isLoading ? (
                        <Loader>{loader || <StyledSpinner />}</Loader>
                    ) : (
                        <DynamicInput>
                            <NumericFormat
                                customInput={Input}
                                getInputRef={inputForkRef}
                                dynamicWidth={dynamicWidth}
                                value={formattedValue}
                                {...formatProps}
                                isManualInput={Boolean(isManualInput)}
                                tabIndex={disabled ? -1 : 0}
                                onValueChange={handleManualInputChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onKeyDown={handleKeyDown}
                                onAnimationEnd={() => handleEndErrorAnimation(Number(errorValue))}
                                {...rest}
                                readOnly={!isManualInput || readOnly}
                            />
                            <InputWidthHelper ref={inputHelperRef}>{formattedValue}</InputWidthHelper>
                        </DynamicInput>
                    )}
                    {!isLoading && textAfter && (
                        <AdditionalText className={classes.textAfter}>{textAfter}</AdditionalText>
                    )}
                </TextWrapper>
            </InputWrapper>
        );
    },
);
