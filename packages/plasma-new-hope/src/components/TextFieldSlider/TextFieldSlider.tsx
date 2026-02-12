import React, { forwardRef, useMemo, useState } from 'react';
import type { RootProps } from 'src/engines';

import { numberFormatter } from '../NumberFormat';

import { TextFieldSliderProps, TextFiledSliderRootProps } from './TextFieldSlider.types';
import { Input, SliderUI } from './ui';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as sliderViewCSS } from './variations/_slider-view/base';
import { base as hintViewCSS } from './variations/_hint-view/base';
import { base as hintSizeCSS } from './variations/_hint-size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { base, ScaleValue, ScaleWrapper, SliderContainer, SliderWithHelpersWrapper } from './TextFieldSlider.styles';

const HINT_DEFAULT_OFFSET: [number, number] = [0, 0];

export const textFieldSliderRoot = (Root: RootProps<HTMLDivElement, TextFiledSliderRootProps>) =>
    forwardRef<HTMLInputElement, TextFieldSliderProps>(
        (
            {
                id,
                className,
                style,

                // layout
                hasPointer = true,
                hasScale,
                titleCaption,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,

                // required
                required,
                requiredPlacement = 'right',
                optional,
                optionalText,
                hasRequiredIndicator = false,

                // hint
                hintTrigger = 'hover',
                hintText,
                hintView = 'default',
                hintSize = 'm',
                hintTargetIcon,
                hintTargetPlacement = 'outer',
                hintPlacement = 'auto',
                hintHasArrow,
                hintOffset = HINT_DEFAULT_OFFSET,
                hintWidth,
                hintContentLeft,

                // variations
                view,
                sliderView = 'default',
                size,
                readOnly = false,
                disabled = false,

                // controlled
                value: outerValue,
                defaultValue,
                min,
                max,
                step,

                decimalScale = 2,
                thousandsGroupStyle = 'none',
                thousandSeparator = '',
                decimalSeparator = '.',
                fixedDecimalScale = false,

                // events
                onChange,
                onChangeSlider,
                onChangeTextField,

                ...rest
            },
            ref,
        ) => {
            const [innerValue, setInnerValue] = useState<number | string | undefined>(
                defaultValue !== undefined ? defaultValue : '',
            );
            const value = outerValue !== undefined ? outerValue : innerValue;

            const formattedMin = useMemo(
                () =>
                    numberFormatter(String(min) || '', {
                        decimalScale,
                        thousandsGroupStyle,
                        thousandSeparator,
                        decimalSeparator,
                        fixedDecimalScale,
                    }),
                [min, decimalScale, thousandsGroupStyle, thousandSeparator, decimalSeparator, fixedDecimalScale],
            );

            const formattedMax = useMemo(
                () =>
                    numberFormatter(String(max) || '', {
                        decimalScale,
                        thousandsGroupStyle,
                        thousandSeparator,
                        decimalSeparator,
                        fixedDecimalScale,
                    }),
                [max, decimalScale, thousandsGroupStyle, thousandSeparator, decimalSeparator, fixedDecimalScale],
            );

            return (
                <Root
                    view={view}
                    size={size}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    data-root
                    className={className}
                    style={style}
                    sliderView={sliderView}
                    {...(hintText && { hintView, hintSize })}
                >
                    <SliderWithHelpersWrapper>
                        <Input
                            ref={ref}
                            id={id}
                            value={value}
                            min={min}
                            max={max}
                            decimalScale={decimalScale}
                            thousandsGroupStyle={thousandsGroupStyle}
                            thousandSeparator={thousandSeparator}
                            decimalSeparator={decimalSeparator}
                            fixedDecimalScale={fixedDecimalScale}
                            disabled={disabled}
                            readOnly={readOnly}
                            titleCaption={titleCaption}
                            contentLeft={contentLeft}
                            contentRight={contentRight}
                            textBefore={textBefore}
                            textAfter={textAfter}
                            required={required}
                            requiredPlacement={requiredPlacement}
                            optional={optional}
                            optionalText={optionalText}
                            hasRequiredIndicator={hasRequiredIndicator}
                            {...(hintText
                                ? {
                                      hintText,
                                      hintView,
                                      hintSize,
                                      hintTrigger,
                                      hintTargetIcon,
                                      hintPlacement,
                                      hintHasArrow,
                                      hintOffset,
                                      hintWidth,
                                      hintContentLeft,
                                      hintTargetPlacement,
                                  }
                                : { hintText: undefined })}
                            setInnerValue={setInnerValue}
                            onChange={onChange}
                            onChangeTextField={onChangeTextField}
                            {...rest}
                        />
                        <SliderContainer>
                            <SliderUI
                                value={value}
                                min={min}
                                max={max}
                                step={step}
                                decimalScale={decimalScale}
                                thousandsGroupStyle={thousandsGroupStyle}
                                thousandSeparator={thousandSeparator}
                                decimalSeparator={decimalSeparator}
                                fixedDecimalScale={fixedDecimalScale}
                                disabled={disabled}
                                readOnly={readOnly}
                                hasPointer={hasPointer}
                                onChange={onChange}
                                onChangeSlider={onChangeSlider}
                                setInnerValue={setInnerValue}
                            />
                        </SliderContainer>
                    </SliderWithHelpersWrapper>

                    {hasScale && (
                        <ScaleWrapper>
                            <ScaleValue>{formattedMin}</ScaleValue>
                            <ScaleValue>{formattedMax}</ScaleValue>
                        </ScaleWrapper>
                    )}
                </Root>
            );
        },
    );

export const textFieldSliderConfig = {
    name: 'TextFieldSlider',
    tag: 'div',
    layout: textFieldSliderRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        readOnly: {
            css: readOnlyCSS,
            attrs: true,
        },
        sliderView: {
            css: sliderViewCSS,
        },
        hintView: {
            css: hintViewCSS,
        },
        hintSize: {
            css: hintSizeCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
        sliderView: 'default',
    },
};
