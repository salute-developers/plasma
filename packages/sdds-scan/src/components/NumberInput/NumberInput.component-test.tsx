import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';

getBaseVisualTests({
    component: 'NumberInput',
    componentProps: {
        value: 5,
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
});
