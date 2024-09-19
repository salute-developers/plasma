import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconDone } from '@salutejs/plasma-icons';

const items = [{ label: 'Joy' }, { label: 'Sber' }, { label: 'Athena' }];

describe('plasma-b2c: Tabs', () => {
    const Tabs = getComponent('Tabs');
    const TabItem = getComponent('TabItem');

    const withAutoFocus = getComponent('withAutoFocus');
    const TabAutoFocus = withAutoFocus(TabItem);

    it('[PLASMA-T699] Tabs: size=xs, view=divider', () => {
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

    it('[PLASMA-T799] Tabs: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Tabs disabled forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T800] Tabs: size=s, enableContentLeft, enableContentRight', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="s" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem
                            key={i}
                            isActive={i === 1}
                            forwardedAs="li"
                            contentLeft={<IconDone size="xs" color="inherit" />}
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

    it('[PLASMA-T801] Tabs: size=m, stretch', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="m" stretch forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T802] Tabs: size=l, without divider', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="l" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem key={i} isActive={i === 1} forwardedAs="li">
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

    it('[PLASMA-T818] Tabs: clip=scroll', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="m" clip="scroll" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem key={i} isActive={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

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
