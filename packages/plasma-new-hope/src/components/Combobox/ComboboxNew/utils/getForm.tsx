import React, { ComponentType, useEffect, useRef, useState } from 'react';

import { ComboboxProps, ComboboxFormProps } from '../Combobox.types';

import { createEvent } from './syntheticEvent';

type ComboboxWithComponent = ComboboxFormProps & {
    component: ComponentType<ComboboxProps>;
};

const SingleForm = (args: ComboboxWithComponent) => {
    const { onChange, component: Component, ...rest } = args;
    const [value, setValue] = useState<string | undefined>();
    const selectRef = useRef<HTMLSelectElement | null>(null);

    const handleChange = (value: string) => {
        setValue(value);
    };

    useEffect(() => {
        const event = createEvent(selectRef);
        onChange && onChange(event);
    }, [value]);

    return (
        <>
            <select ref={selectRef} value={value} hidden>
                <option value={value}>{value}</option>
            </select>
            <Component {...(rest as any)} value={value} onChange={handleChange} />
        </>
    );
};

const MultipleForm = (args: ComboboxWithComponent) => {
    const { onChange, component: Component, ...rest } = args;
    const [values, setValues] = useState<string[]>([]);
    const selectRef = useRef<HTMLSelectElement | null>(null);

    const handleChange = (value: string[]) => {
        setValues(value);
    };

    useEffect(() => {
        const event = createEvent(selectRef);
        onChange && onChange(event);
    }, [values]);

    return (
        <>
            <select ref={selectRef} value={values} multiple hidden>
                {values.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            <Component {...(rest as any)} value={values} onChange={handleChange} />
        </>
    );
};

export const getFormComponentGenerator = (Component: ComponentType<ComboboxProps>) => {
    return (args: ComboboxFormProps) => {
        return args.multiple ? (
            <MultipleForm {...args} component={Component} />
        ) : (
            <SingleForm {...args} component={Component} />
        );
    };
};
