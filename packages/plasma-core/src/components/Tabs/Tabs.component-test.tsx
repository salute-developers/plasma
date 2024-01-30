import React, { FC, useState } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconDone } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const items = [{ label: 'Joy' }, { label: 'Sber' }, { label: 'Athena' }];

describe('plasma-core: Tabs', () => {
    const Tabs = getComponent('Tabs');
    const TabItem = getComponent('TabItem');
    const TabsController = getComponent('TabsController');

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const ControlledTabsController = (props) => {
        const [index, setIndex] = useState(0);

        return <TabsController items={items} index={index} onIndexChange={(i) => setIndex(i)} {...props} />;
    };

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem
                            key={i}
                            isActive={i === 1}
                            forwardedAs="li"
                            contentLeft={<IconDone size="xs" color="inherit" />}
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs disabled forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem key={i} isActive={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('controller', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ControlledTabsController />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > button:nth-child(2)').click();
        cy.matchImageSnapshot();
    });

    it('controller with keydown', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ControlledTabsController />
            </CypressTestDecoratorWithTypo>,
        );

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 13 });
        cy.get('button:nth-child(1)').last().should('have.attr', 'tabindex', '0');

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 39 });
        cy.get('button:nth-child(2)').last().should('have.attr', 'tabindex', '0');

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 37 });
        cy.get('button:nth-child(1)').last().should('have.attr', 'tabindex', '0');

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 35 });
        cy.get('button:nth-child(3)').last().should('have.attr', 'tabindex', '0');

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 36 });
        cy.get('button:nth-child(1)').last().should('have.attr', 'tabindex', '0');
    });

    it('_stretch', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs stretch>
                    <TabItem>Joy</TabItem>
                    <TabItem isActive>Sber</TabItem>
                    <TabItem>Eva</TabItem>
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('try click by disabled tabs', () => {
        const onIndexChange = cy.stub();

        mount(
            <CypressTestDecoratorWithTypo>
                <TabsController items={items} index={0} disabled onIndexChange={onIndexChange} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > button:nth-child(2)')
            .click({ force: true })
            .then(() => {
                expect(onIndexChange).not.called;
            });

        cy.root()
            .get('[role="tablist"]')
            .trigger('keydown', { keyCode: 39 })
            .then(() => {
                expect(onIndexChange).not.called;
            });
    });

    it('autoscroll', () => {
        const Container = ({ children }) => {
            return <div style={{ width: '80px' }}>{children}</div>;
        };

        mount(
            <CypressTestDecoratorWithTypo>
                <Container>
                    <ControlledTabsController autoscroll style={{ width: 'inherit' }} />
                </Container>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > button:nth-child(2)').first().click();
        cy.matchImageSnapshot();
    });
});
