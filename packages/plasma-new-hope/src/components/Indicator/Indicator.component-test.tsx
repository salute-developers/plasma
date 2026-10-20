import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';

getBaseVisualTests({
    component: 'Indicator',
    componentProps: {},
    configPropsForMatrix: ['view', 'size'],
});
