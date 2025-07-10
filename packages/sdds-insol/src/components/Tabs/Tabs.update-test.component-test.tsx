import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconDone } from '@salutejs/plasma-icons';

import { Counter } from '../Counter/Counter';

const items = [{ label: 'Joy' }, { label: 'Sber' }, { label: 'Athena' }];

describe('sdds-insol: Tabs', () => {
    const Tabs = getComponent('Tabs');
    const TabItem = getComponent('TabItem');

    it('[PLASMA-T1655] Tabs: size=l, with divider, orientation=horizontal', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="l" view="divider" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="l" value="Value" key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1656] Tabs: size=m, without divider, stretch, contentLeft, contentRight as counter', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="m" stretch forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem
                            size="m"
                            key={i}
                            isActive={i === 1}
                            forwardedAs="li"
                            contentLeft={<IconDone size="s" color="inherit" />}
                            contentRight={<Counter size="s" count={1} view="positive" />}
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1657] Tabs: size=s, clip=scroll, contentRight as icon', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="s" view="divider" clip="scroll" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem
                            size="s"
                            key={i}
                            isActive={i === 1}
                            contentRight={<IconDone size="xs" color="inherit" />}
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1658] Tabs: size=xs', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="xs" view="divider" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="xs" key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1659] Tabs: vertical', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="l" orientation="vertical" view="divider" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem
                            size="l"
                            orientation="vertical"
                            view="divider"
                            key={i}
                            selected={i === 1}
                            forwardedAs="li"
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T799] Tabs: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="l" view="divider" disabled forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="l" key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T803] Tabs: clicking on arrows scrolls to previous or next', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="m" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem key={i} isActive={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Athena').should('not.be.visible');
        cy.get('[aria-label="Следующий таб"]').click();
        cy.get('button').contains('Athena').should('be.visible');
        cy.get('[aria-label="Предыдущий таб"]').click();
        cy.get('button').contains('Sber').should('be.visible');
        cy.get('button').contains('Joy').should('not.be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T819] Tabs: size=h3', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="h3" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="h3" key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
