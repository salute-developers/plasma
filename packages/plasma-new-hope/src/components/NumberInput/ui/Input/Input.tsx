import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { classes } from '../../NumberInput.tokens';
import { cx, isNumber } from '../../../../utils';
import { useDidMountEffect } from '../../../../hooks';
import { defaultCharacterWidth, excludingNumberSchema, getPreciseValue, numberSchema } from '../../utils';
import { keyCodes } from '../../../../utils/constants';

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

export const NumberInput = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            value,
            precision,
            min,
            max,
            isLoading,
            loader,
            disabled,
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
            ...rest
        },
        ref,
    ) => {
        const [dynamicWidth, setDynamicWidth] = useState(value ? `${String(value).length}ch` : defaultCharacterWidth);
        const [lastValidValue, setLastValidValue] = useState<number | string>(Number(value));
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
                return `${inputHelperRef.current?.clientWidth}px`;
            }

            if (value) {
                return `${String(value).length}ch`;
            }

            return defaultCharacterWidth;
        };

        const setValues = (event: ChangeEvent<HTMLInputElement> | null, newValue: number | string) => {
            setLastValidValue(newValue);
            setInnerValue(newValue);

            if (onChange) {
                onChange(event, newValue);
            }
        };

        const validateValue = (newValue: number | string) => {
            if (!newValue || !isNumber(newValue)) {
                setValues(null, lastValidValue);
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
                setValues(null, Number(newValue));
                setIsAnimationRun(false);
                return;
            }

            if (precision !== undefined) {
                const preciseNewValue = Number(getPreciseValue(newValue, precision));
                setValues(null, preciseNewValue);
            }

            setIsAnimationRun(false);
        };

        const handleManualInputChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (!isManualInput || disabled) {
                return;
            }

            setIsAnimationRun(true);

            const { value: newValue } = event.target;

            if (!newValue) {
                setInnerValue('');

                if (onChange) {
                    onChange(event, '');
                }
                return;
            }

            const cleanValue = newValue.replace(excludingNumberSchema, '');
            if (cleanValue.endsWith('.') || cleanValue === '-') {
                setInnerValue(cleanValue);

                if (onChange) {
                    onChange(event, cleanValue);
                }
                return;
            }

            const isValid = numberSchema.test(cleanValue);

            if (!isValid) {
                setValues(event, lastValidValue);
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

            setValues(event, cleanValue);
        };

        const handleClickInputWrapper = () => {
            if (!isManualInput || !inputRef.current) {
                return;
            }

            if (!isInputFocused) {
                inputRef.current.select();
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

        const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
            if (!isManualInput || disabled) {
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
        }, [value]);

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
                            <Input
                                ref={inputForkRef}
                                dynamicWidth={dynamicWidth}
                                value={value}
                                isManualInput={Boolean(isManualInput)}
                                tabIndex={disabled || !isManualInput ? -1 : 0}
                                onChange={handleManualInputChange}
                                onBlur={handleBlur}
                                onKeyDown={handleKeyDown}
                                onAnimationEnd={() => handleEndErrorAnimation(Number(errorValue))}
                                {...rest}
                            />
                            <InputWidthHelper ref={inputHelperRef}>{value}</InputWidthHelper>
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
