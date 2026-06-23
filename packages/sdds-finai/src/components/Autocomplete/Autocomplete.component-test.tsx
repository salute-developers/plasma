import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import type { AutocompleteProps } from '@salutejs/plasma-new-hope';

const views = ['default', 'positive', 'warning', 'negative'] as const;
const sizes = ['s', 'xs'] as const;

describe('sdds-finai: Autocomplete', () => {
    const Autocomplete = getComponent<AutocompleteProps>('Autocomplete');

    const Demo = (props: any) => <Autocomplete label="Label" leftHelper="Helper Text" value="Алексей" {...props} />;

    it(':view appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {views.map((view) => (
                    <>
                        <Demo key={view} appearance="viewMode" view={view} size={sizes[0]} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':size appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Demo key={size} appearance="viewMode" view={views[0]} size={size} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
