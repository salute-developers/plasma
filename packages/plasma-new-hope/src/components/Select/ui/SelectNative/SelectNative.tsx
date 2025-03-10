import React, { ChangeEvent, forwardRef, useLayoutEffect, useRef } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { createEvent } from '../../../../utils';
import { SelectProps } from '../../Select.types';
import { ValueToItemMapType } from '../../hooks/usePathMaps';

import { SelectHidden } from './SelectNative.styles';

type Props = Pick<SelectProps, 'name' | 'multiselect'> & {
    onChange: (newValue: ChangeEvent<HTMLSelectElement> | null) => void;
    onSetValue: (value: string | string[]) => void;
    items: ValueToItemMapType;
    value: string | number | Array<string | number>;
};

export const SelectNative = forwardRef<HTMLButtonElement, Props>(
    ({ name, multiselect, items, value, onChange, onSetValue }, ref) => {
        const values = (multiselect ? value : [value]) as string[];
        const selectRef = useRef<HTMLSelectElement>(null);
        const forkRef = useForkRef(selectRef, ref as any);
        const options = Array.from(items.keys());

        useLayoutEffect(() => {
            if (selectRef.current && !multiselect) {
                const valueInit = selectRef.current.value;

                if (valueInit) {
                    onSetValue(valueInit);
                }
            }

            if (selectRef.current && multiselect) {
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
                    multiple={multiselect}
                    name={name}
                    hidden
                    value={multiselect ? values : values[0]}
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
