import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import type { Ref, ChangeEventHandler } from 'react';
import { useForkRef } from 'src/hooks';
import { createEvent } from 'src/utils';

import { ComboboxProps, Value } from '../../Combobox.types';
import { ValueToItemMapType } from '../../hooks/usePathMaps';

import { SelectHidden } from './SelectNative.styles';

type Props = Pick<ComboboxProps, 'name' | 'multiple'> & {
    handleChange: (value: Value, item: null) => void;
    items: ValueToItemMapType;
    value: Value;
    outerOnChange?: ChangeEventHandler<HTMLSelectElement>;
};

export const SelectNative = forwardRef<HTMLSelectElement, Props>(
    ({ name, multiple, items, value, handleChange, outerOnChange }, ref) => {
        const values = Array.isArray(value) ? value : [value].filter(Boolean);

        const selectRef = useRef<HTMLSelectElement>(null);
        const forkRef = useForkRef<HTMLSelectElement>(selectRef, ref as Ref<HTMLSelectElement>);
        const options = Array.from(new Set([...items.keys(), ...values]));

        useLayoutEffect(() => {
            if (selectRef.current && !multiple) {
                const valueInit = selectRef.current.value;

                if (valueInit) {
                    handleChange(valueInit, null);
                }
            }

            if (selectRef.current && multiple) {
                const valuesInit = Array.from(selectRef.current.selectedOptions).map((v) => v.value);

                if (valuesInit.length !== 0) {
                    handleChange(valuesInit, null);
                }
            }
        }, []);

        useLayoutEffect(() => {
            const event = createEvent(selectRef);

            if (event && outerOnChange) {
                outerOnChange(event);
            }
        }, [value]);

        return (
            <>
                <SelectHidden
                    ref={forkRef}
                    multiple={multiple}
                    name={name}
                    hidden
                    value={multiple ? values : values[0] ?? ''}
                >
                    {/* Пустой option нужен для нативного поведения. Он автоматически выбирает первый пункт,
                        если нет изначального значения */}
                    <option value=""> </option>

                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </SelectHidden>
            </>
        );
    },
);
