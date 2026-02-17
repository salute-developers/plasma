import React, { forwardRef, useMemo, useState } from 'react';
import type { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import { numberFormatter } from 'src/components/NumberFormat';
import { excludingNumberSchema } from 'src/components/NumberInput/utils';

import type { TextFieldSliderProps } from '../../TextFieldSlider.types';
import { classes } from '../../TextFieldSlider.tokens';
import { createFormatterArgs, createNormalizedFormatterArgs } from '../../utils';

import { StyledInput } from './Input.styles';

type InputUIProps = {
    setInnerValue: Dispatch<SetStateAction<number | string | undefined>>;
} & TextFieldSliderProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'required' | 'value' | 'onChange' | 'max' | 'min'>;

export const Input = forwardRef<HTMLInputElement, InputUIProps>(
    (
        {
            id,
            size,

            value,
            min,
            max,

            decimalScale,
            thousandsGroupStyle,
            thousandSeparator = ' ',
            decimalSeparator,
            fixedDecimalScale,

            disabled,
            readOnly,

            // callbacks
            onChange,
            onChangeTextField,
            setInnerValue,

            ...rest
        },
        ref,
    ) => {
        const [errorClass, setErrorClass] = useState<string | undefined>(undefined);

        const commonFormatterArgs = useMemo(
            () =>
                createFormatterArgs({
                    decimalScale,
                    thousandsGroupStyle,
                    thousandSeparator,
                    decimalSeparator,
                    fixedDecimalScale,
                }),
            [decimalScale, thousandsGroupStyle, thousandSeparator, decimalSeparator, fixedDecimalScale],
        );

        const displayValue = useMemo(() => numberFormatter(String(value) || '', commonFormatterArgs), [
            value,
            commonFormatterArgs,
        ]);

        const [lastValidValue, setLastValidValue] = useState<number | string | undefined>(value);

        const setValues = (event: ChangeEvent<HTMLInputElement> | null, newValue: number | string | undefined) => {
            setInnerValue(newValue);

            const formatted = numberFormatter(String(newValue) || '', commonFormatterArgs);

            if (onChange) {
                onChange(event || undefined, { raw: newValue, formatted });
            }

            if (onChangeTextField) {
                onChangeTextField({ raw: newValue, formatted });
            }
        };

        const validateValue = (event: ChangeEvent<HTMLInputElement> | null, newValue: number | string | undefined) => {
            if (!newValue) {
                setValues(event, '');
                setLastValidValue('');

                return;
            }

            const cleanValue = Number(newValue);

            if (max !== undefined && cleanValue > max) {
                setErrorClass(classes.errorAnimation);
                setValues(event, newValue);
                setLastValidValue(max);

                return;
            }

            if (min !== undefined && cleanValue < min) {
                setErrorClass(classes.errorAnimation);
                setValues(event, newValue);
                setLastValidValue(min);

                return;
            }

            setValues(event, newValue);
            setLastValidValue(newValue);
        };

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (disabled || readOnly) {
                return;
            }

            const { value: rawValue } = event.target;

            const withoutExtraSymbols = rawValue.replace(excludingNumberSchema, '');

            const formattedValue = numberFormatter(
                withoutExtraSymbols,
                createNormalizedFormatterArgs({
                    decimalScale,
                    thousandsGroupStyle,
                    thousandSeparator,
                    decimalSeparator,
                    fixedDecimalScale,
                }),
            );

            validateValue(event, formattedValue);
        };

        const handleEndErrorAnimation = () => {
            setErrorClass(undefined);
            setValues(null, lastValidValue);
        };

        return (
            <StyledInput
                id={id}
                ref={ref}
                size={size}
                value={displayValue}
                disabled={disabled}
                readOnly={readOnly}
                className={errorClass}
                onChange={handleChange}
                onAnimationEnd={handleEndErrorAnimation}
                {...rest}
            />
        );
    },
);
