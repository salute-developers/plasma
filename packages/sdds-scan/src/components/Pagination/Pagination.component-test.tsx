import { getBaseVisualTests } from '@salutejs/plasma-cy-utils';

getBaseVisualTests({
    component: 'Pagination',
    componentProps: {
        count: 200,
        slots: 9,
        value: 10,
        hasQuickJump: true,
        hasPerPage: true,
        helperText: 'Helper text',
        appearance: 'white',
    },
    propsForName: ['appearance=white'],
    configPropsForMatrix: ['view', 'size'],
    actionBeforeSnapshot: () => {
        // Дефолтный вьюпорт 500px сжимает quick jump и per page.
        cy.viewport(1000, 500);
    },
});
