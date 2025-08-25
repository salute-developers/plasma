import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { IconClose } from '@salutejs/plasma-icons';

const items = [{ label: 'Joy' }, { label: 'Sber' }, { label: 'Athena' }];

describe('plasma-b2c: Tabs', () => {
    const Tabs = getComponent('Tabs');
    const TabItem = getComponent('TabItem');

    const withAutoFocus = getComponent('withAutoFocus');
    const TabAutoFocus = withAutoFocus(TabItem);

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="s" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="s" key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
                <Tabs size="l" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="l" key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_pilled', () => {
        mount(
            <CypressTestDecorator>
                <Tabs pilled forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem pilled key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_actionContent', () => {
        mount(
            <CypressTestDecorator>
                <Tabs>
                    {items.map((item, i) => (
                        <TabItem key={i} selected={i === 1} actionContent={<IconClose color="inherit" />}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="l" view="divider" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="l" view="divider" key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
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
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_header', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="h5" view="clear" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="h5" view="clear" key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('Handle tab focus: autoFocus', () => {
        mount(
            <CypressTestDecorator>
                <Tabs>
                    {items.map((item, i) => (
                        <TabAutoFocus key={i} selected={i === 1} autoFocus={i === 1}>
                            {item.label}
                        </TabAutoFocus>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.get('div > button:nth-child(2)').focus();
        cy.matchImageSnapshot();
    });

    it('Handle tab focus: pilled', () => {
        mount(
            <CypressTestDecorator>
                <Tabs pilled>
                    {items.map((item, i) => (
                        <TabAutoFocus pilled key={i} selected={i === 1} autoFocus={i === 1}>
                            {item.label}
                        </TabAutoFocus>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.get('div > button:nth-child(2)').focus();
        cy.matchImageSnapshot();
    });

    // INFO: Этот тест должен обязательно идти после проверки на autoFocus,
    // иначе фокус в предыдущих двух не будет работать.
    it('Handle tab focus: default', () => {
        function StubComponent() {
            const [index, setIndex] = React.useState(1);

            return (
                <Tabs>
                    {items.map((item, i) => (
                        <TabItem key={i} tabIndex={0} selected={i === index} onClick={() => setIndex(i)}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            );
        }

        mount(
            <CypressTestDecorator>
                <StubComponent />
            </CypressTestDecorator>,
        );

        cy.get('div > button:nth-child(2)').focus();
        cy.get('div > button:nth-child(1)').last().focus().click({ force: true });

        cy.matchImageSnapshot();
    });

    it('horizontal: clicking on arrows scrolls to prev/next tab', () => {
        mount(
            <CypressTestDecorator>
                <Tabs clip="scroll" size="m" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem pilled key={i} selected={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

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

    it('vertical: clicking on arrows scrolls to prev/next tab', () => {
        mount(
            <CypressTestDecorator>
                <Tabs clip="scroll" orientation="vertical" size="m" style={{ height: '9rem' }}>
                    {items.map((item, i) => (
                        <TabItem orientation="vertical" key={i}>
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
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
