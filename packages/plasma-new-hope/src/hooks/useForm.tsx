import React, { ComponentType, useState } from 'react';

import { SliderProps } from '../components/Slider';

type SliderFormProps = SliderProps & {
    name?: string;
    onChange?: (event: { target: { name?: string; value?: number | number[] } }) => void;
};

type FormComponentsType = SliderFormProps;

export const useFormComponent = (
    Component: ComponentType<FormComponentsType>,
    registerData: {
        onChange?: (event: { target: { name?: string; value?: number | number[] } }) => void;
        name: string;
    },
) => {
    return (props: SliderFormProps) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState<number | number[]>(props.value);

        const handleChange = (value: number | number[]) => {
            setValue(value);

            if (registerData.onChange) {
                registerData.onChange({
                    target: {
                        value,
                        name: registerData.name,
                    },
                });
            }
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return <Component {...props} value={value} onChangeForm={handleChange} />;
    };
};
