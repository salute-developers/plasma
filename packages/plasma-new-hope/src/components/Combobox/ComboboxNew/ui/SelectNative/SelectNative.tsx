import React, { ChangeEvent, forwardRef, useEffect, useRef } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { createEvent } from '../../../../../utils';
import { ComboboxProps } from '../../Combobox.types';

import { SelectHidden } from './SelectNative.styles';

type Props = Pick<ComboboxProps, 'name' | 'value' | 'multiple'> & {
    onChange: (value: ChangeEvent<HTMLSelectElement> | null) => void;
};

export const SelectNative = forwardRef<HTMLInputElement, Props>(({ name, multiple, value, onChange }, ref) => {
    const values = (multiple ? value : [value]) as string[];
    const selectRef = useRef<HTMLSelectElement>(null);
    const forkRef = useForkRef(selectRef, ref as any);

    useEffect(() => {
        const event = createEvent(selectRef);
        if (onChange) {
            onChange(event);
        }
    }, [values]);

    return (
        <>
            <SelectHidden ref={forkRef} multiple={multiple} name={name} hidden value={multiple ? values : values[0]}>
                {values.map((v) => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ))}
            </SelectHidden>
        </>
    );
});
