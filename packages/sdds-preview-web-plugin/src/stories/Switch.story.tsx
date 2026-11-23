import React, { useState } from 'react';
import { component, switchConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Switch = component(mergeConfig(switchConfig as any, {}));

const SwitchDefault = {
    name: 'Default',
    args: [
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'singleLine',
            value: false,
        },
        {
            name: 'label',
            value: 'Label',
        },
        {
            name: 'description',
            value: 'Description',
        },
        {
            name: 'labelPosition',
            value: 'before',
            items: [
                {
                    value: 'before',
                    label: 'before',
                },
                {
                    value: 'after',
                    label: 'after',
                },
            ],
        },
    ],
    render: function Story(args: any) {
        const value = 0;
        const [checked, setChecked] = useState(true);

        const onChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
            event.persist();

            setChecked(event.target.checked);
        };

        return <Switch value={value} checked={checked} onChange={onChecked} focused {...args} />;
    },
};

export const SwitchStories = [SwitchDefault];
