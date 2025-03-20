import React, { ChangeEvent, forwardRef, useLayoutEffect, useRef } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { createEvent } from '../../../../../utils';
import { ComboboxProps } from '../../Combobox.types';
import { ValueToItemMapType } from '../../hooks/getPathMaps';

import { SelectHidden } from './SelectNative.styles';

type Props = Pick<ComboboxProps, 'name' | 'value' | 'multiple'> & {
    onChange: (value: ChangeEvent<HTMLSelectElement> | null) => void;
    onSetValue: (value: string | string[]) => void;
    items: ValueToItemMapType;
};

export const SelectNative = forwardRef<HTMLInputElement, Props>(
    ({ name, multiple, items, value, onChange, onSetValue }, ref) => {
        const values = (multiple ? value : [value]) as string[];
        const selectRef = useRef<HTMLSelectElement>(null);
        const forkRef = useForkRef(selectRef, ref as any);
        const options = Array.from(items.keys());

        useLayoutEffect(() => {
            if (selectRef.current && !multiple) {
                const valueInit = selectRef.current.value;

                if (valueInit) {
                    onSetValue(valueInit);
                }
            }

            if (selectRef.current && multiple) {
                const valuesInit = Array.from(selectRef.current.selectedOptions).map((v) => v.value);
                if (valuesInit.length !== 0) {
                    onSetValue(valuesInit);
                }
            }
        }, []);

        useLayoutEffect(() => {
            const event = createEvent(selectRef);

            if (onChange) {
                onChange(event);
            }
        }, [value]);

        return (
            <>
                <SelectHidden
                    ref={forkRef}
                    multiple={multiple}
                    name={name}
                    hidden
                    value={multiple ? values : values[0]}
                >
                    {/* Пустой option нужен для нативного поведения. Он автоматически выбирает первый пункт,
                        если нет изначального значения */}
                    <option> </option>

                    {options.map((v) => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </SelectHidden>
            </>
        );
    },
);
