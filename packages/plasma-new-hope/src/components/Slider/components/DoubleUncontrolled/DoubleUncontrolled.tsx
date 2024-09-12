import React, { KeyboardEvent, FC, useState } from 'react';

import { DoubleSlider } from '../index';

import { DoubleUncontrolledProps } from './DoubleUncontrolled.types';

export const DoubleUncontrolled: FC<DoubleUncontrolledProps> = (props) => {
    const [sliderValue, setSliderValue] = useState<number[]>([props.min, props.max]);

    const sortValues = (values: number[]) => {
        return values
            .map((val) => {
                if (val < props.min) {
                    return props.min;
                }
                if (val > props.max) {
                    return props.max;
                }
                return val;
            })
            .sort((a, b) => a - b);
    };

    const onChangeHandle = (values: number[]) => {
        setSliderValue(sortValues(values));
    };

    const onChangeCommitedHandle = (values: number[]) => {
        setSliderValue(sortValues(values));
    };

    const onBlurTextField = (values: number[]) => {
        setSliderValue(sortValues(values));
    };

    const onKeyDownTextField = (values: number[], event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSliderValue(sortValues(values));
        }
    };

    return props.value ? (
        <DoubleSlider {...props} value={props.value} />
    ) : (
        <DoubleSlider
            value={sliderValue}
            onKeyDownTextField={onKeyDownTextField}
            onBlurTextField={onBlurTextField}
            onChangeCommitted={onChangeCommitedHandle}
            onChange={onChangeHandle}
            {...props}
        />
    );
};
