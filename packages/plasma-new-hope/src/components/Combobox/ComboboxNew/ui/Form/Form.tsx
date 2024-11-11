import React, { ChangeEvent, forwardRef, useEffect, useRef } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { createEvent } from '../../../../../utils/syntheticEvent';
import { ComboboxProps } from '../../Combobox.types';

import { SelectHidden } from './Form.styles';

type Props = Pick<ComboboxProps, 'name' | 'value' | 'multiple'> & {
    onChange: (value: ChangeEvent<HTMLSelectElement> | null) => void;
};

export const Form = forwardRef<HTMLSelectElement, Props>(({ name, multiple, value, onChange }, ref) => {
    const values = (multiple ? value : [value]) as string[];
    const selectRef = useRef<HTMLSelectElement | null>(null);
    const forkRef = useForkRef(selectRef, ref);

    useEffect(() => {
        const event = createEvent(selectRef);
        onChange && onChange(event);
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
