import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

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
                        <TabItem size="s" key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
                <Tabs size="l" forwardedAs="ul">
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

    it('_pilled', () => {
        mount(
            <CypressTestDecorator>
                <Tabs pilled forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem pilled key={i} isActive={i === 1} forwardedAs="li">
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
                        <TabAutoFocus key={i} isActive={i === 1} autoFocus={i === 1}>
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
                        <TabAutoFocus pilled key={i} isActive={i === 1} autoFocus={i === 1}>
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
                        <TabItem key={i} tabIndex={0} isActive={i === index} onClick={() => setIndex(i)}>
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

    it('Clicking on arrows scrolls to previous or next tab', () => {
        mount(
            <CypressTestDecorator>
                <Tabs size="m" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem pilled key={i} isActive={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Athena').should('not.be.visible');
        cy.get('[aria-label="Следующий таб"]').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('button').contains('Athena').should('be.visible');

        cy.get('[aria-label="Предыдущий таб"]').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('button').contains('Sber').should('be.visible');
        cy.get('button').contains('Joy').should('not.be.visible');
    });
});
