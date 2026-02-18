import React, { forwardRef, useMemo } from 'react';
import type { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import { numberFormatter } from 'src/components/NumberFormat';
import { excludingNumberSchema } from 'src/components/NumberInput/utils';
import { safeUseId } from 'src/utils';

import type { TextFieldSliderProps } from '../../TextFieldSlider.types';
import { createFormatterArgs, createNormalizedFormatterArgs } from '../../utils';

import { SliderWrapper, StyledProgress, StyledSlider, StyledTrack } from './Slider.styles';

type SliderUIProps = {
    setInnerValue: Dispatch<SetStateAction<number | string | undefined>>;
} & TextFieldSliderProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'required' | 'value' | 'onChange' | 'max' | 'min'>;

export const SliderUI = forwardRef<HTMLInputElement, SliderUIProps>(
    (
        {
            value,
            min,
            max,
            step,

            decimalScale,
            thousandsGroupStyle,
            thousandSeparator = ' ',
            decimalSeparator,
            fixedDecimalScale,

            disabled,
            readOnly,
            hasPointer,

            // callbacks
            onChange,
            onChangeSlider,
            setInnerValue,
        },
        ref,
    ) => {
        const sliderId = safeUseId();

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

        const normalizedFormatterArgs = useMemo(
            () =>
                createNormalizedFormatterArgs({
                    decimalScale,
                    thousandsGroupStyle,
                    thousandSeparator,
                    decimalSeparator,
                    fixedDecimalScale,
                }),
            [decimalScale, thousandsGroupStyle, thousandSeparator, decimalSeparator, fixedDecimalScale],
        );

        const sliderValue = useMemo(
            () => Math.max(min, Math.min(max, Number(numberFormatter(String(value) || '', normalizedFormatterArgs)))),
            [value, min, max, normalizedFormatterArgs],
        );

        const roundedSliderValue = useMemo(
            () => (step ? min + Math.round((sliderValue - min) / step) * step : sliderValue),
            [sliderValue, min, step],
        );

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (disabled || readOnly) {
                return;
            }

            const { value: rawValue } = event.target;

            const withoutExtraSymbols = rawValue.replace(excludingNumberSchema, '');

            const cleanValue = Number(withoutExtraSymbols);

            setInnerValue(cleanValue);

            const formatted = numberFormatter(String(cleanValue) || '', commonFormatterArgs);

            if (onChange) {
                onChange(event || undefined, { raw: cleanValue, formatted });
            }

            if (onChangeSlider) {
                onChangeSlider({ raw: cleanValue, formatted });
            }
        };

        return (
            <SliderWrapper>
                <StyledTrack />
                <StyledProgress value={roundedSliderValue} max={max} min={min} />
                <StyledSlider
                    id={sliderId}
                    ref={ref}
                    type="range"
                    value={sliderValue}
                    min={min}
                    max={max}
                    step={step}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    hasPointer={hasPointer}
                    aria-orientation="horizontal"
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                />
            </SliderWrapper>
        );
    },
);
