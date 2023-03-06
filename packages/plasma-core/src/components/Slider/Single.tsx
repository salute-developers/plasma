import React from 'react';

import { SliderBase } from './SliderBase';
import { Handle, HandleProps } from './Handle';
import { SliderInternalProps, SingleSliderProps } from './types';

export const Slider: React.FC<SliderInternalProps & SingleSliderProps> = ({
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
