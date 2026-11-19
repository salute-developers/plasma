import React from 'react';
import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';

const items = [
    { value: 'north_america', label: 'Северная Америка' },
    { value: 'south_america', label: 'Южная Америка' },
    { value: 'europe', label: 'Европа' },
];

const excludeButtonLikeViews = {
    view: ['accent', 'secondary', 'clear', 'dark', 'black', 'white'],
};

getBaseVisualTests({
    component: 'Select',
    componentProps: {
        items,
        placeholder: 'Placeholder',
        value: 'north_america',
        label: 'Label',
        titleCaption: 'Подпись к полю',
        helperText: 'Helper text',
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
    excludePropsValues: excludeButtonLikeViews,
});

getBaseVisualTests({
    component: 'Select',
    componentProps: {
        id: 'select',
        items,
        placeholder: 'Placeholder',
        value: 'north_america',
        label: 'Label',
        titleCaption: 'Подпись к полю',
        helperText: 'Helper text',
        appearance: 'white',
    },
    propsForName: ['appearance=white,opened'],
    configPropsForMatrix: ['view'],
    excludePropsValues: excludeButtonLikeViews,
    actionBeforeSnapshot: () => {
        cy.get('#select').click();
    },
});

getBaseVisualTests({
    component: 'Select',
    componentProps: {
        items,
        placeholder: 'Placeholder',
        value: 'north_america',
        appearance: 'white',
        target: 'button-like',
    },
    propsForName: ['target=button-like', 'appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});

getBaseVisualTests({
    component: 'Select',
    componentProps: {
        items,
        placeholder: 'Placeholder',
        value: ['north_america', 'europe'],
        multiselect: true,
        label: 'Label',
        appearance: 'white',
    },
    propsForName: ['multiselect', 'appearance=white'],
    configPropsForMatrix: ['chipView'],
    excludePropsValues: excludeButtonLikeViews,
});
