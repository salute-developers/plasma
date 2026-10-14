import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { Props as EmptyStateProps } from './EmptyState.types';

const componentExists = hasComponent('EmptyState');
const describeFn = getDescribeFN('EmptyState');

const componentProps = {
    description: 'Description',
};

getBaseVisualTests({
    component: 'EmptyState',
    componentProps,
    configPropsForMatrix: ['size'],
});

describeFn('EmptyState', () => {
    const EmptyState = componentExists ? getComponent<EmptyStateProps>('EmptyState') : () => null;

    const Demo = ({ size = 'l', description = 'Description', buttonText = 'Button', enableIcon = true }) => {
        return (
            <EmptyState
                size={size}
                description={description}
                buttonText={buttonText}
                icon={enableIcon ? <IconPlasma size="s" /> : undefined}
            />
        );
    };

    it('with Icon, description, buttonText', () => {
        mount(
            <>
                <Demo />
                <PadMe />
                <Demo buttonText="" enableIcon={false} />
                <PadMe />
                <Demo description="" enableIcon={false} />
                <PadMe />
                <Demo enableIcon={false} />
            </>,
        );

        cy.viewport(500, 600);

        cy.matchImageSnapshot();
    });
});
