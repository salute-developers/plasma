import React from 'react';
import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';
import { IconEye } from '@salutejs/plasma-icons';

getBaseVisualTests({
    component: 'TextArea',
    componentProps: {
        placeholder: 'Placeholder',
        defaultValue: 'Value',
        label: 'Label',
        labelPlacement: 'outer',
        leftHelper: 'Left helper',
        rightHelper: 'Right helper',
        contentRight: <IconEye color="inherit" size="s" />,
        height: '150px',
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});
