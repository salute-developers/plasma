import React from 'react';

import { Radiobox } from '.';

const func = () => {};

const defaultProps = {
    name: 'Radiobox' as const,
    label: 'Label' as const,
    description: 'Description' as const,
    disabled: false,
    size: 'm' as const,
};

export const Default = () => {
    const { name, label, disabled, description, size } = defaultProps;
    return (
        <Radiobox
            name={name}
            value={0}
            label={label}
            description={description}
            disabled={disabled}
            checked
            size={size}
            onChange={func}
            onFocus={func}
            onBlur={func}
        />
    );
};
