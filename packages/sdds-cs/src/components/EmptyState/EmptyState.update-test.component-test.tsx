import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { EmptyState as EmptyStateCS } from '.';

describe('sdds-cs: EmptyState', () => {
    const EmptyState = getComponent('EmptyState') as typeof EmptyStateCS;

    const Demo = ({ size = 'l', description = 'Description', buttonText = 'Button', enableIcon = true }) => {
        return (
            <EmptyState
                size={size}
                description={description}
                buttonText={buttonText}
                enableIcon={enableIcon}
                icon={enableIcon ? <IconPlasma size="s" /> : undefined}
            />
        );
    };

    it('[PLASMA-T1813] EmptyState: size=l, description, buttonText, with Icon', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1814] EmptyState: size=m, description', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="m" buttonText="" enableIcon={false} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1815] EmptyState: size=s, buttonText', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" description="" enableIcon={false} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1816] EmptyState: size=xs, description, buttonText', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="xs" enableIcon={false} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
