import React, { KeyboardEvent, FC, useState, useCallback } from 'react';

import { DoubleSlider } from '../index';
import { FormTypeString } from '../../../../types/FormType';

import { DoubleUncontrolledProps } from './DoubleUncontrolled.types';

export const DoubleUncontrolled: FC<DoubleUncontrolledProps> = (props) => {
    const { defaultValue, min, max, value, name, onChange } = props;
    const [sliderValue, setSliderValue] = useState<number[]>(defaultValue ?? [min, max]);

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

    const onChangeHandle = useCallback(
        (values: number[]) => {
            const sortValue = sortValues(values);

            if (onChange && !value && name) {
                (onChange as (event: FormTypeString) => void)({
                    target: {
                        value: sortValue.join(' - '),
                        name,
                    },
                });
            }

            setSliderValue(sortValue);
        },
        [name, value, onChange, sortValues],
    );

    const onChangeCommittedHandle = useCallback(
        (values: number[]) => {
            const sortValue = sortValues(values);

            if (onChange && !value && name) {
                (onChange as (event: FormTypeString) => void)({
                    target: {
                        value: sortValue.join(' - '),
                        name,
                    },
                });
            }

            setSliderValue(sortValue);
        },
        [name, value, onChange, sortValues],
    );

    const onBlurTextField = useCallback(
        (values: number[]) => {
            const sortValue = sortValues(values);

            if (onChange && !value && name) {
                (onChange as (event: FormTypeString) => void)({
                    target: {
                        value: sortValue.join(' - '),
                        name,
                    },
                });
            }

            setSliderValue(sortValue);
        },
        [name, value, onChange, sortValues],
    );

    const onKeyDownTextField = useCallback(
        (values: number[], e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                const sortValue = sortValues(values);

                if (onChange && !value && name) {
                    (onChange as (event: FormTypeString) => void)({
                        target: {
                            value: sortValue.join(' - '),
                            name,
                        },
                    });
                }

                setSliderValue(sortValue);
            }
        },
        [name, value, onChange, sortValues],
    );

    return value ? (
        <DoubleSlider {...props} value={value} onChange={onChange as (values: number[]) => void} />
    ) : (
        <DoubleSlider
            value={sliderValue}
            onKeyDownTextField={onKeyDownTextField}
            onBlurTextField={onBlurTextField}
            onChangeCommitted={onChangeCommittedHandle}
            {...props}
            onChange={onChangeHandle}
        />
    );
};
