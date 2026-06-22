import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { TimePickerGridProps } from './TimePickerGrid.types';

const componentExists = hasComponent('TimePickerGrid');
const describeFn = getDescribeFN('TimePickerGrid');

const componentProps = {
    value: '00:00',
};

getBaseVisualTests({
    component: 'TimePickerGrid',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('TimePickerGrid', () => {
    const TimePickerGrid = componentExists ? getComponent<TimePickerGridProps>('TimePickerGrid') : () => null;

    it('renders minutes with multiplicity 5', () => {
        mount(<TimePickerGrid value="00:00" multiplicityMinutes={5} />);
        cy.matchImageSnapshot();
    });

    it('renders minutes with multiplicity 15', () => {
        mount(<TimePickerGrid value="00:15" multiplicityMinutes={15} />);
        cy.matchImageSnapshot();
    });

    it('renders seconds with multiplicity 20', () => {
        mount(<TimePickerGrid value="00:00:00" format="HH:mm:ss" multiplicitySeconds={20} />);
        cy.matchImageSnapshot();
    });

    it('rounds value to multiplicity 5', () => {
        mount(<TimePickerGrid value="00:14" multiplicityMinutes={5} />);
        cy.matchImageSnapshot();
    });

    it('prop: onChange', () => {
        mount(
            <TimePickerGrid
                value="00:00"
                onChange={(event) => {
                    expect(event.value).to.eq('01:00');
                }}
            />,
        );

        cy.contains('01').click();
    });
});
