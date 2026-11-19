import React from 'react';
import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

const items = [
    { value: 'north_america', label: 'Северная Америка' },
    { value: 'south_america', label: 'Южная Америка' },
    { value: 'europe', label: 'Европа' },
];

getBaseVisualTests({
    component: 'Combobox',
    componentProps: {
        items,
        value: 'north_america',
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper text',
        contentLeft: <IconPlasma color="inherit" size="s" />,
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});
