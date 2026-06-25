import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import type { ComboboxProps } from '@salutejs/plasma-new-hope';

const views = ['default', 'positive', 'warning', 'negative'] as const;
const sizes = ['s', 'xs'] as const;

const items = [
    { value: 'north_america', label: 'Северная Америка' },
    { value: 'south_america', label: 'Южная Америка' },
    { value: 'europe', label: 'Европа' },
];

describe('sdds-finai: Combobox', () => {
    const Combobox = getComponent<ComboboxProps>('Combobox');

    const Demo = (props: any) => (
        <Combobox label="Label" placeholder="Placeholder" helperText="Helper text" items={items} {...props} />
    );

    it(':view appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {views.map((view) => (
                    <>
                        <Demo key={view} appearance="viewMode" view={view} size="s" />
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
                        <Demo key={size} appearance="viewMode" view="default" size={size} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':multiple appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Demo
                            key={size}
                            appearance="viewMode"
                            multiple
                            view="default"
                            size={size}
                            value={['north_america', 'europe']}
                        />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
