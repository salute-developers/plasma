import React from 'react';

import { Radiobox } from '.';

const onFocus = () => {};
const onBlur = () => {};

const cDescription = (
    <div>
        A general-purpose, procedural computer programming{' '}
        <a href="https://en.wikipedia.org/wiki/C_(programming_language)">language</a>{' '}
    </div>
);

const langName = 'language';
const items = [
    {
        langName,
        value: 'c',
        label: 'C',
        disabled: false,
        description: cDescription,
    },
    { langName, value: 'cpp', label: 'C++', disabled: false },
    { langName, value: 'assembly', label: 'Assembly', disabled: false },
    { langName, value: 'elixir', label: 'Elixir', disabled: true },
];
const func = () => {};

export const Live = () => {
    return items.map((item) => (
        <Radiobox
            key={item.value}
            name={item.langName}
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            checked
            description={item.description}
            onChange={func}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ));
};

const defaultProps = {
    name: 'Radiobox' as const,
    label: 'Label' as const,
    description: 'Description' as const,
    disabled: false,
    size: 'm' as const,
};

export const Default = () => {
    const { name, label, description, disabled, size } = defaultProps;

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
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};
