import React, { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { IconClose, IconPlasma } from '@salutejs/plasma-icons';

import { Tabs as TabsWEB, TabItem as TabItemWEB, IconTabItem as IconTabItemWEB } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const items = [{ label: 'Joy' }, { label: 'Sber' }, { label: 'Athena' }];

describe('plasma-web: Tabs', () => {
    const Tabs = getComponent('Tabs') as typeof TabsWEB;
    const TabItem = getComponent('TabItem') as typeof TabItemWEB;
    const IconTabItem = getComponent('IconTabItem') as typeof IconTabItemWEB;
    const withAutoFocus = getComponent('withAutoFocus');
    const AutoFocusTabItem = withAutoFocus(TabItem);

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('item autoFocus', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs>
                    {items.map((item, i) => (
                        <AutoFocusTabItem key={i} selected={i === 1} autoFocus={i === 1}>
                            {item.label}
                        </AutoFocusTabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > button:nth-child(2)').focus();
        cy.matchImageSnapshot();
    });

    it('_actionContent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs>
                    {items.map((item, i) => (
                        <TabItem key={i} selected={i === 1} actionContent={<IconClose color="inherit" />}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs size="l" view="divider" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="l" view="divider" key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
                <PadMe />
                <Tabs size="l" view="divider" forwardedAs="ul">
                    {items.map((_, i) => (
                        <IconTabItem size="l" view="divider" key={i} selected={i === 1} forwardedAs="li">
                            <IconPlasma color="inherit" size="s" />
                        </IconTabItem>
                    ))}
                </Tabs>
                <PadMe />
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
                <PadMe />
                <Tabs size="l" orientation="vertical" view="divider" forwardedAs="ul">
                    {items.map((_, i) => (
                        <IconTabItem
                            size="l"
                            orientation="vertical"
                            view="divider"
                            key={i}
                            selected={i === 1}
                            forwardedAs="li"
                        >
                            <IconPlasma color="inherit" size="s" />
                        </IconTabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_header', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs size="h5" view="clear" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="h5" view="clear" key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('horizontal: clicking on arrows scrolls to prev/next tab', () => {
        mount(
            <CypressTestDecorator>
                <Tabs clip="scroll" size="m" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem size="m" pilled key={i} selected={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Joy').should('not.be.visible');
        cy.get('button').contains('Athena').should('be.visible');

        cy.get('[aria-label="Предыдущий таб"]').click();
        cy.get('button').contains('Sber').should('be.visible');
        cy.get('button').contains('Joy').should('be.visible');

        cy.get('[aria-label="Следующий таб"]').click();
        cy.get('button').contains('Joy').should('not.be.visible');
    });

    it('vertical: clicking on arrows scrolls to prev/next tab', () => {
        mount(
            <CypressTestDecorator>
                <Tabs clip="scroll" orientation="vertical" size="m" style={{ height: '9rem' }}>
                    {items.map((item, i) => (
                        <TabItem orientation="vertical" pilled key={i} selected={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Sber').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('button').contains('Joy').should('not.be.visible');
        cy.get('button').contains('Athena').should('be.visible');

        cy.get('[aria-label="Предыдущий таб"]').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('button').contains('Sber').should('be.visible');
        cy.get('button').contains('Joy').should('be.visible');

        cy.get('[aria-label="Следующий таб"]').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('button').contains('Joy').should('not.be.visible');
    });

    it('truncate', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs size="l" view="divider" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem
                            size="l"
                            view="divider"
                            key={i}
                            selected={i === 1}
                            forwardedAs="li"
                            maxItemWidth="2rem"
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
                <PadMe />
                <Tabs size="l" view="divider" forwardedAs="ul" orientation="vertical">
                    {items.map((item, i) => (
                        <TabItem
                            size="l"
                            view="divider"
                            orientation="vertical"
                            key={i}
                            selected={i === 1}
                            forwardedAs="li"
                            maxItemWidth="5rem"
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
                <PadMe />
                <Tabs size="h5" view="clear" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="h5" view="clear" key={i} selected={i === 1} forwardedAs="li" maxItemWidth="2rem">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
