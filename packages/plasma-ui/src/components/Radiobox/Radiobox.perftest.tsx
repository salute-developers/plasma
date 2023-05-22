import React from 'react';
import styled from 'styled-components';

import { Radiobox, RadioGroup } from '.';

const func = () => {};

const items = [
    {
        id: 'radio-1-1',
        name: 'radio-1',
        value: 1,
        label: 'Radiobox with a very very very very very long label',
        disabled: false,
    },
    { id: 'radio-1-2', name: 'radio-1', value: 2, label: 'Radiobox 2', disabled: false },
    { id: 'radio-2-1', name: 'radio-2', value: 3, label: 'Radiobox 3', disabled: true },
    { id: 'radio-2-2', name: 'radio-2', value: 4, label: 'Radiobox 4', disabled: true, checked: true },
];

const StyledGriddyRadioGroup = styled(RadioGroup)`
    display: inline-grid;
    grid-template-columns: repeat(2, 50%);
    gap: 1rem;
    align-items: flex-start;

    /* stylelint-disable-next-line selector-max-universal */
    & > * + * {
        margin-top: 0 !important;
    }
`;

export const Default = () => {
    return (
        <StyledGriddyRadioGroup>
            {items.map((item) => (
                <Radiobox
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    label={item.label}
                    disabled={item.disabled}
                    checked={item.checked}
                    onChange={func}
                    onFocus={func}
                    onBlur={func}
                />
            ))}
        </StyledGriddyRadioGroup>
    );
};

const squeezeStyle = {
    resize: 'horizontal',
    overflow: 'hidden',
    border: '3px solid',
    display: 'inline-block',
} as const;

export const Squeeze = () => {
    return (
        <div style={squeezeStyle}>
            {items.map((item) => (
                <Radiobox
                    key={item.value}
                    name="radiobox"
                    value={item.value}
                    label={item.label}
                    disabled={item.disabled}
                    checked
                    description={`Description of ${item.label}`}
                    onChange={func}
                    onFocus={func}
                    onBlur={func}
                />
            ))}
        </div>
    );
};
