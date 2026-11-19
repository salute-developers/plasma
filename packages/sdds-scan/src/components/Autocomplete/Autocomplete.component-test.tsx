import React from 'react';
import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

const suggestions = [{ label: 'Алексей Смирнов' }, { label: 'Екатерина Иванова' }, { label: 'Дмитрий Петров' }];

getBaseVisualTests({
    component: 'Autocomplete',
    componentProps: {
        suggestions,
        value: 'Алексей Смирнов',
        placeholder: 'Placeholder',
        label: 'Label',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Helper text',
        contentLeft: <IconPlasma color="inherit" size="s" />,
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});
