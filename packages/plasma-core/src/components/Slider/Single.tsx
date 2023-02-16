import React from 'react';

import { SliderBase } from './SliderBase';
import { Handle, HandleProps } from './Handle';
import { SliderBaseProps, ThumbProp } from './types';

export interface SliderProps extends SliderBaseProps, ThumbProp {
    /**
     * Текущее значение
     */
    value: number;
    /**
     * Ярлык, определяющий назначение ползунка, например «Минимальная цена» [a11y].
     */
    ariaLabel?: string;
    /**
     * Размера увеличенного шага (для клавиш PageUp, PageDown).
     * Указывает процентное отношение от максимально возможного значения.
     * Указав значение 20 при максимуме в 100, получим 20%.
     */
    multipleStepSize?: number;
    /**
     * Вызывается при перемещении ползунка
     */
    onChangeCommitted(value: number): void;
    /**
     * Вызывается при отпускании ползунка
     */
    onChange?(value: number): void;
}

export const Slider: React.FC<SliderProps> = ({
    min,
    max,
    value,
    disabled,
    onChangeCommitted,
    onChange,
    ariaLabel,
    multipleStepSize = 10,
    thumb,
    ...rest
}) => {
    const [state, setState] = React.useState({
        xHandle: 0,
        stepSize: 0,
        railFillWidth: 0,
    });

    const { stepSize } = state;

    React.useEffect(() => {
        const localValue = Math.min(Math.max(value, min), max) - min;

        setState((prevState) => ({
            ...prevState,
            xHandle: stepSize * localValue,
            railFillWidth: stepSize * localValue,
        }));
    }, [value, stepSize, min, max]);

    const setStepSize = React.useCallback((newStepSize: number) => {
        setState((prevState) => ({
            ...prevState,
            stepSize: newStepSize,
        }));
    }, []);

    const onHandleChange = React.useCallback<NonNullable<HandleProps['onChange']>>(
        (handleValue, data) => {
            const newHandleXPosition = data.x;

            setState((prevState) => ({
                ...prevState,
                railFillWidth: newHandleXPosition,
            }));

            if (onChange) {
                onChange(handleValue);
            }
        },
        [onChange],
    );

    const onHandleChangeCommitted = React.useCallback<HandleProps['onChangeCommitted']>(
        (handleValue, data) => {
            onChangeCommitted(handleValue);
            setState((prevState) => ({
                ...prevState,
                xHandle: data.lastX,
                railFillWidth: data.lastX,
            }));
        },
        [onChangeCommitted],
    );

    return (
        <SliderBase
            min={min}
            max={max}
            disabled={disabled}
            setStepSize={setStepSize}
            onChange={onHandleChangeCommitted}
            railFillWidth={state.railFillWidth}
            {...rest}
        >
            <Handle
                stepSize={state.stepSize}
                onChangeCommitted={onHandleChangeCommitted}
                onChange={onHandleChange}
                xPosition={state.xHandle}
                min={min}
                max={max}
                value={value}
                disabled={disabled}
                ariaLabel={ariaLabel}
                multipleStepSize={multipleStepSize}
                thumb={thumb}
            />
        </SliderBase>
    );
};
