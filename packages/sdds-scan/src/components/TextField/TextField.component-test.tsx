import React from 'react';
import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';
import { IconPlasma, IconEye } from '@salutejs/plasma-icons';

getBaseVisualTests({
    component: 'TextField',
    componentProps: {
        placeholder: 'Placeholder',
        value: 'Value',
        label: 'Label',
        labelPlacement: 'outer',
        leftHelper: 'Helper text',
        rightHelper: 'Right helper',
        contentLeft: <IconPlasma color="inherit" size="s" />,
        contentRight: <IconEye color="inherit" size="s" />,
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});
