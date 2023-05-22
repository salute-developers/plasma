import React from 'react';
import { accent, success, warning, critical } from '@salutejs/plasma-core';
import { IconEye, IconMagicWand, IconAccessibility, IconHeart, IconTrash, IconLocation } from '@salutejs/plasma-icons';

import { Dropdown } from '.';

const items = [
    { value: 'each', label: 'Каждый' },
    { value: 'hunter', label: 'Охотник' },
    {
        value: 'wants',
        label: 'Желает',
        contentLeft: <IconHeart color="inherit" />,
        items: [
            { value: '_nestedLabel', label: 'Лейбл во вложенном списке' },
            { value: '_thePheasant', label: 'Фазан' },
            { value: '_is', label: 'Сидит' },
        ],
    },
    { value: 'toKnow', label: 'Знать', isDisabled: true, contentLeft: <IconEye color="inherit" /> },
    { value: 'where', label: 'Где', color: accent, contentLeft: <IconLocation color="inherit" /> },
    { value: 'is', label: 'Сидит', color: success, contentLeft: <IconAccessibility color="inherit" /> },
    { value: 'thePheasant', label: 'Фазан', color: warning, contentLeft: <IconMagicWand color="inherit" /> },
    {
        value: 'fullLabel',
        label: 'Длинный лейбл: каждый охотник желает знать, где сидит фазан',
        contentLeft: <IconTrash color="inherit" />,
        color: critical,
    },
];
const func = () => {};

export const Trigger = () => {
    return (
        <Dropdown id="example-dropdown-click" items={items} trigger="click" placement="bottom" onItemSelect={func} />
    );
};
