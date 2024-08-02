import React, { FC } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const items = [{ label: 'Joy' }, { label: 'Sber' }, { label: 'Athena' }];

describe('plasma-web: Tabs', () => {
    const Tabs = getComponent('Tabs');
    const TabItem = getComponent('TabItem');
    const withAutoFocus = getComponent('withAutoFocus');
    const AutoFocusTabItem = withAutoFocus(TabItem);

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
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
                        <AutoFocusTabItem key={i} isActive={i === 1} autoFocus={i === 1}>
                            {item.label}
                        </AutoFocusTabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > button:nth-child(2)').focus();
        cy.matchImageSnapshot();
    });

    it('Clicking on arrows scrolls to previous or next tab', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs size="m" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem pilled key={i} isActive={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
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
