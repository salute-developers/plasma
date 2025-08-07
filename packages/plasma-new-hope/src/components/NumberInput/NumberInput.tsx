import React, { CSSProperties, forwardRef, useState } from 'react';

import type { RootProps } from '../../engines';
import { cx, getSizeValueFromProp, isNumber } from '../../utils';
import { IconMinus, IconPlus } from '../_Icon';

import type { NumberInputProps, NumberInputRootProps } from './NumberInput.types';
import { ActionButton, NumberInput } from './ui';
import { classes, privateTokens } from './NumberInput.tokens';
import { base } from './NumberInput.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as shapeCSS } from './variations/_shape/base';
import { base as inputBackgroundTypeCSS } from './variations/_background-type/base';
import { base as segmentationCSS } from './variations/_segmentation/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { getPreciseValue } from './utils';

export const numberInputRoot = (Root: RootProps<HTMLDivElement, NumberInputRootProps>) =>
    forwardRef<HTMLInputElement, NumberInputProps>(
        (
            {
                className,
                style,
                width,
                value: outerValue,
                min,
                max,
                step = 1,
                precision = 2,
                isLoading,
                loader,
                size,
                view,
                clear,
                shape,
                segmentation,
                inputBackgroundType = 'fill',
                disabled,
                textBefore,
                textAfter,
                customIncrementButton,
                incrementIcon,
                customDecrementButton,
                decrementIcon,
                isManualInput,
                onChange,
                onIncrement,
                onDecrement,
                ...rest
            },
            ref,
        ) => {
            if (
                outerValue &&
                !isNumber(outerValue) &&
                outerValue !== undefined &&
                outerValue !== '-' &&
                outerValue !== '.'
            ) {
                console.error('`value` должен быть undefined, числом или строкой с числом');
            }

            const [isInputFocused, setIsInputFocused] = useState(false);
            const [isAnimationRun, setIsAnimationRun] = useState(false);
            const [innerValue, setInnerValue] = useState<number | string | undefined>('');

            const value = outerValue ?? innerValue;

            const innerWidth = width ? getSizeValueFromProp(width) : '100%';

            const actionIconSize = size === 'xs' ? 'xs' : 's';
            const solidViewClass = segmentation === 'solid' ? classes.solidView : undefined;
            const segmentedViewClass = segmentation === 'segmented' ? classes.segmentedView : undefined;
            const clearViewClass = clear ? classes.clearView : undefined;
            const disabledClass = disabled ? classes.disabled : undefined;
            const loadingClass = isLoading ? classes.loading : undefined;
            const focusedClass = isInputFocused ? classes.focused : undefined;

            const isMinValue = (currentValue: number) => min !== undefined && currentValue <= min;
            const isMaxValue = (currentValue: number) => max !== undefined && currentValue >= max;

            const decrementButtonDisabled =
                (isNumber(value) && value !== '' && isMinValue(Number(value)) && !isAnimationRun) || isLoading
                    ? classes.actionButtonDecrementDisabled
                    : undefined;
            const incrementButtonDisabled =
                (isNumber(value) && value !== '' && isMaxValue(Number(value)) && !isAnimationRun) || isLoading
                    ? classes.actionButtonIncrementDisabled
                    : undefined;

            const handleDecrement = () => {
                if (isLoading || disabled || isAnimationRun) {
                    return;
                }

                const processedValue = isNumber(value) && value !== '' ? Number(value) : max ?? 0;
                const preciseDiff = getPreciseValue(processedValue - step, precision);
                const diffValue = Number(preciseDiff);
                const resValue = min !== undefined && diffValue <= min ? min : diffValue;

                setInnerValue(resValue);

                if (onDecrement) {
                    onDecrement(resValue);
                }

                if (onChange) {
                    onChange(null, resValue);
                }
            };

            const handleIncrement = () => {
                if (isLoading || disabled || isAnimationRun) {
                    return;
                }

                const processedValue = isNumber(value) && value !== '' ? Number(value) : min ?? 0;
                const preciseDiff = getPreciseValue(processedValue + step, precision);
                const diffValue = Number(preciseDiff);
                const resValue = max !== undefined && diffValue >= max ? max : diffValue;

                setInnerValue(resValue);

                if (onIncrement) {
                    onIncrement(resValue);
                }

                if (onChange) {
                    onChange(null, resValue);
                }
            };

            return (
                <Root
                    view={view}
                    size={size}
                    disabled={disabled}
                    clear={clear}
                    shape={shape}
                    segmentation={segmentation}
                    isLoading={isLoading}
                    {...(segmentation === 'solid' ? { inputBackgroundType: 'clear' } : { inputBackgroundType })}
                    className={cx(
                        className,
                        solidViewClass,
                        segmentedViewClass,
                        clearViewClass,
                        disabledClass,
                        loadingClass,
                        focusedClass,
                    )}
                    style={
                        {
                            ...style,
                            [privateTokens.inputWidth]: innerWidth,
                        } as CSSProperties
                    }
                >
                    {customDecrementButton || (
                        <ActionButton
                            className={cx(
                                classes.actionButtonDecrement,
                                decrementButtonDisabled,
                                solidViewClass,
                                segmentedViewClass,
                            )}
                            icon={decrementIcon || <IconMinus color="inherit" size={actionIconSize} />}
                            onClick={handleDecrement}
                        />
                    )}
                    <NumberInput
                        ref={ref}
                        segmentation={segmentation}
                        value={value}
                        precision={precision}
                        min={min}
                        max={max}
                        isManualInput={isManualInput}
                        textBefore={textBefore}
                        textAfter={textAfter}
                        isLoading={isLoading}
                        loader={loader}
                        disabled={disabled}
                        isInputFocused={isInputFocused}
                        setIsInputFocused={setIsInputFocused}
                        setIsAnimationRun={setIsAnimationRun}
                        setInnerValue={setInnerValue}
                        onChange={onChange}
                        {...rest}
                    />
                    {customIncrementButton || (
                        <ActionButton
                            className={cx(
                                classes.actionButtonIncrement,
                                incrementButtonDisabled,
                                solidViewClass,
                                segmentedViewClass,
                            )}
                            icon={incrementIcon || <IconPlus color="inherit" size={actionIconSize} />}
                            onClick={handleIncrement}
                        />
                    )}
                </Root>
            );
        },
    );

export const numberInputConfig = {
    name: 'NumberInput',
    tag: 'div',
    layout: numberInputRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        shape: {
            css: shapeCSS,
        },
        inputBackgroundType: {
            css: inputBackgroundTypeCSS,
        },
        segmentation: {
            css: segmentationCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
        size: 'l',
        shape: 'cornered',
        segmentation: 'default',
    },
};
