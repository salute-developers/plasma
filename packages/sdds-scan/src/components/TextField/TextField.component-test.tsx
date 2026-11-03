import React from 'react';
import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';
import { IconPlasma, IconEye } from '@salutejs/plasma-icons';

const componentProps = {
    placeholder: 'Placeholder',
    value: 'Value',
    label: 'Label',
    labelPlacement: 'outer',
    leftHelper: 'Helper text',
    rightHelper: 'Right helper',
    contentLeft: <IconPlasma color="inherit" size="s" />,
    contentRight: <IconEye color="inherit" size="s" />,
    appearance: 'white',
};

getBaseVisualTests({
    component: 'TextField',
    componentProps,
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});

getBaseVisualTests({
    component: 'TextField',
    componentProps,
    propsForName: ['appearance=white,focused'],
    configPropsForMatrix: ['view'],
    actionBeforeSnapshot: () => {
        cy.get('input').focus();
    },
});
