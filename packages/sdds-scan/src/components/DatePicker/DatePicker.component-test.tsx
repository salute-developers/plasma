import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';

getBaseVisualTests({
    component: 'DatePicker',
    componentProps: {
        defaultDate: new Date(2023, 5, 14),
        label: 'Label',
        leftHelper: 'Helper text',
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});
