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
});
