import React from 'react';

import { Select } from '.';

const items = [
    {
        value: 'north_america',
        label: 'Северная Америка',
    },
    {
        value: 'south_america',
        label: 'Южная Америка',
        items: [
            {
                value: 'brazil',
                label: 'Бразилия',
            },
            {
                value: 'argentina',
                label: 'Аргентина',
            },
        ],
    },
];

export const Default = () => {
    return (
        <>
            <Select items={items} label="Label" placeholder="Placeholder" />
            <Select multiselect items={items} label="Label" placeholder="Placeholder" />
        </>
    );
};
