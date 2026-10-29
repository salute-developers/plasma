import React from 'react';

import { Select } from '../../components/Select/Select';

export function FilterSelect({
    label,
    value,
    items,
    onChange,
}: {
    label: string;
    value: string;
    items: { value: string; label: string }[];
    onChange: (value: string) => void;
}) {
    return (
        <div className="field">
            <Select
                label={label}
                aria-label={label}
                labelPlacement="outer"
                size="s"
                mode="radio"
                value={value}
                items={items}
                onChange={onChange}
                placeholder={items.find((item) => item.value === value)?.label}
                virtual
                listMaxHeight="20rem"
            />
        </div>
    );
}
