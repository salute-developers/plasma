import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { BadgeProps } from './Badge.types';

const componentExists = hasComponent('Badge');
const describeFn = getDescribeFN('Badge');

const componentProps = {
    text: 'Бейдж',
};

getBaseVisualTests({
    component: 'Badge',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

getBaseVisualTests({
    component: 'Badge',
    componentProps: { ...componentProps, appearance: 'clear' },
    configPropsForMatrix: ['view', 'size'],
    propsForName: ['appearance=clear'],
});

getBaseVisualTests({
    component: 'Badge',
    componentProps: { ...componentProps, appearance: 'transparent' },
    configPropsForMatrix: ['view', 'size'],
    propsForName: ['appearance=transparent'],
    packagesForSkip: ['sdds-cs'],
});

describeFn('Badge', () => {
    const Badge = componentExists ? getComponent<BadgeProps>('Badge') : () => null;

    it('icon only', () => {
        mount(<Badge contentLeft={<IconPlasma color="inherit" size="xs" />} />);
        cy.matchImageSnapshot();
    });

    it('customBackgroundColor, customColor', () => {
        mount(<Badge text="Badge_custom" customBackgroundColor="red" customColor="white" />);
        cy.matchImageSnapshot();
    });
});
