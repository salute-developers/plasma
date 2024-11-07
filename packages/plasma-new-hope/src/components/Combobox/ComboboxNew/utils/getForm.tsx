import React, { ComponentType, forwardRef, useEffect, useRef, useState } from 'react';

import { ComboboxProps, ComboboxFormProps } from '../Combobox.types';
import { mergeRefs } from '../../../../utils';
import { SelectHidden } from '../Combobox.styles';

import { createEvent } from './syntheticEvent';

type ComboboxWithComponent = ComboboxFormProps & {
    component: ComponentType<ComboboxProps>;
};

const SingleForm = forwardRef<HTMLSelectElement, ComboboxWithComponent>((args, ref) => {
    const { onChange, name, defaultValue, component: Component, ...rest } = args;
    const [value, setValue] = useState<string | undefined>(String(defaultValue));
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
            <SelectHidden ref={mergeRefs(selectRef, ref)} value={value} name={name} hidden>
                <option value={value}>{value}</option>
            </SelectHidden>
            <Component {...(rest as any)} value={value} onChange={handleChange} />
        </>
    );
});

const MultipleForm = forwardRef<HTMLSelectElement, ComboboxWithComponent>((args, ref) => {
    const { onChange, name, defaultValue, component: Component, ...rest } = args;
    const [values, setValues] = useState<string[]>(defaultValue && Array.isArray(defaultValue) ? defaultValue : []);
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
            <SelectHidden ref={mergeRefs(selectRef, ref)} value={values} name={name} multiple hidden>
                {values.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </SelectHidden>
            <Component {...(rest as any)} value={values} onChange={handleChange} />
        </>
    );
});

export const getFormComponentGenerator = (Component: ComponentType<ComboboxProps>) => {
    return forwardRef<HTMLSelectElement, ComboboxFormProps>((args, ref) => {
        return args.multiple ? (
            <MultipleForm {...args} ref={ref} component={Component} />
        ) : (
            <SingleForm {...args} ref={ref} component={Component} />
        );
    });
};
