import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import type { SelectProps as SelectBase } from '@salutejs/plasma-new-hope';

type SelectProps = SelectBase & { appearance?: 'default' | 'viewMode' };

const views = ['default', 'positive', 'warning', 'negative'] as const;
const sizes = ['s', 'xs'] as const;

const items = [
    { value: 'north_america', label: 'Северная Америка' },
    { value: 'south_america', label: 'Южная Америка' },
    { value: 'europe', label: 'Европа' },
];

describe('sdds-finai: Select', () => {
    const Select = getComponent<SelectProps>('Select');

    const Demo = (props: any) => (
        <Select
            placeholder="Placeholder"
            value="north_america"
            label="Label"
            helperText="Helper text"
            items={items}
            {...props}
        />
    );

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

    it(':multiselect appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Demo
                            key={size}
                            appearance="viewMode"
                            multiselect
                            view={views[0]}
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
