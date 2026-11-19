import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';

getBaseVisualTests({
    component: 'Range',
    componentProps: {
        firstPlaceholder: 'От',
        secondPlaceholder: 'До',
        label: 'Label',
        leftHelper: 'Helper text',
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});
