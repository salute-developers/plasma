import React, { useState } from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    skipForPackages,
    PadMe,
} from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconClose, IconDone, IconPlasma } from 'override/_Icon';

import type { CounterProps } from '../Counter/Counter.types';

import type { TabsProps } from './Tabs.types';
import type { TabItemProps, HorizontalIconTabItemProps, VerticalIconTabItemProps } from './TabItem.types';

type IconTabItemProps = HorizontalIconTabItemProps | VerticalIconTabItemProps;

const componentExists = hasComponent('Tabs');
const componentIconTabItemExists = hasComponent('IconTabItem');
const componentCounterExists = hasComponent('Counter');
const describeFn = getDescribeFN('Tabs');

const itSkipCs = skipForPackages(['sdds-cs']);
const itSkipNoHeader = skipForPackages(['sdds-cs', 'sdds-os']);

const items = [{ label: 'Joy' }, { label: 'Sber' }, { label: 'Athena' }];

const TabItemForMatrix = componentExists ? getComponent<TabItemProps>('TabItem') : () => null;

const componentProps = {
    forwardedAs: 'ul',
    children: items.map((item, i) => (
        <TabItemForMatrix key={i} selected={i === 1} forwardedAs="li">
            {item.label}
        </TabItemForMatrix>
    )),
};

getBaseVisualTests({
    component: 'Tabs',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Tabs', () => {
    const Tabs = componentExists ? getComponent<TabsProps>('Tabs') : () => null;
    const TabItem = componentExists ? getComponent<TabItemProps>('TabItem') : () => null;
    const IconTabItem = componentIconTabItemExists ? getComponent<IconTabItemProps>('IconTabItem') : () => null;
    const Counter = componentCounterExists ? getComponent<CounterProps>('Counter') : () => null;

    it('pilled', () => {
        mount(
            <Tabs pilled>
                {items.map((item, i) => (
                    <TabItem pilled key={i} selected={i === 1}>
                        {item.label}
                    </TabItem>
                ))}
            </Tabs>,
        );

        cy.matchImageSnapshot();
    });

    it('action content', () => {
        mount(
            <Tabs>
                {items.map((item, i) => (
                    <TabItem key={i} selected={i === 1} actionContent={<IconClose color="inherit" />}>
                        {item.label}
                    </TabItem>
                ))}
            </Tabs>,
        );

        cy.matchImageSnapshot();
    });

    it('orientation: horizontal vs vertical, with divider', () => {
        mount(
            <>
                <Tabs view="divider">
                    {items.map((item, i) => (
                        <TabItem view="divider" key={i} selected={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
                <PadMe />
                <Tabs orientation="vertical" view="divider">
                    {items.map((item, i) => (
                        <TabItem orientation="vertical" view="divider" key={i} selected={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </>,
        );

        cy.matchImageSnapshot();
    });

    itSkipNoHeader('header: size=h5, view=clear', () => {
        mount(
            <Tabs size="h5" view="clear">
                {items.map((item, i) => (
                    <TabItem size="h5" view="clear" key={i} selected={i === 1}>
                        {item.label}
                    </TabItem>
                ))}
            </Tabs>,
        );

        cy.matchImageSnapshot();
    });

    it('focus and click change the selected tab', () => {
        function StubComponent() {
            const [index, setIndex] = useState(1);

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

        mount(<StubComponent />);

        cy.get('div > button:nth-child(2)').focus();
        cy.get('div > button:nth-child(1)').last().focus().click({ force: true });

        cy.matchImageSnapshot();
    });

    itSkipCs('horizontal: clicking on arrows scrolls to prev/next tab', () => {
        mount(
            <Tabs clip="scroll" size="m" style={{ width: '10.5rem' }}>
                {items.map((item, i) => (
                    <TabItem size="m" pilled key={i} selected={i === 1}>
                        {item.label}
                    </TabItem>
                ))}
            </Tabs>,
        );

        cy.get('button').contains('Joy').should('not.be.visible');
        cy.get('button').contains('Athena').should('be.visible');

        cy.get('[aria-label="Предыдущий таб"]').click();
        cy.get('button').contains('Sber').should('be.visible');
        cy.get('button').contains('Joy').should('be.visible');

        cy.get('[aria-label="Следующий таб"]').click();
        cy.get('button').contains('Joy').should('not.be.visible');
    });

    itSkipCs('vertical: clicking on arrows scrolls to prev/next tab', () => {
        mount(
            <Tabs clip="scroll" orientation="vertical" size="m" style={{ height: '8rem' }}>
                {items.map((item, i) => (
                    <TabItem orientation="vertical" size="m" key={i}>
                        {item.label}
                    </TabItem>
                ))}
            </Tabs>,
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
            <>
                <Tabs view="divider">
                    {items.map((item, i) => (
                        <TabItem view="divider" key={i} selected={i === 1} maxItemWidth="2rem">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
                <PadMe />
                <Tabs view="divider" orientation="vertical">
                    {items.map((item, i) => (
                        <TabItem view="divider" orientation="vertical" key={i} selected={i === 1} maxItemWidth="5rem">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('keyboard navigation: arrow keys change the selected tab', () => {
        function StubComponent() {
            const [index, setIndex] = useState(0);

            return (
                <Tabs index={index}>
                    {items.map((item, i) => (
                        <TabItem
                            key={i}
                            itemIndex={i}
                            onIndexChange={setIndex}
                            selected={i === index}
                            tabIndex={0}
                            onClick={() => setIndex(i)}
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            );
        }

        mount(<StubComponent />);

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 39 });
        cy.get('button:nth-child(2)').last().should('have.attr', 'tabindex', '0');

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 37 });
        cy.get('button:nth-child(1)').last().should('have.attr', 'tabindex', '0');

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 35 });
        cy.get('button:nth-child(3)').last().should('have.attr', 'tabindex', '0');

        cy.root().get('[role="tablist"]').trigger('keydown', { keyCode: 36 });
        cy.get('button:nth-child(1)').last().should('have.attr', 'tabindex', '0');
    });

    it('disabled: click and keydown do not change the selection', () => {
        const onIndexChange = cy.stub();

        mount(
            <Tabs disabled index={0}>
                {items.map((item, i) => (
                    <TabItem
                        key={i}
                        disabled
                        itemIndex={i}
                        onIndexChange={onIndexChange}
                        selected={i === 0}
                        tabIndex={0}
                    >
                        {item.label}
                    </TabItem>
                ))}
            </Tabs>,
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

    it('without divider, stretch, contentLeft, contentRight as counter', () => {
        mount(
            <Tabs stretch forwardedAs="ul">
                {items.map((item, i) => (
                    <TabItem
                        key={i}
                        isActive={i === 1}
                        forwardedAs="li"
                        contentLeft={<IconDone size="s" color="inherit" />}
                        contentRight={<Counter size="s" count={1} view="positive" />}
                    >
                        {item.label}
                    </TabItem>
                ))}
            </Tabs>,
        );

        cy.matchImageSnapshot();
    });

    it('clip=scroll, contentRight as icon', () => {
        mount(
            <>
                <Tabs view="divider" clip="scroll" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem key={i} isActive={i === 1} contentRight={<IconDone size="xs" color="inherit" />}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>

                <PadMe />

                <Tabs view="divider" clip="scroll" style={{ width: '5.5rem' }}>
                    {items.map((_, i) => (
                        <IconTabItem key={i} isActive={i === 1} forwardedAs="li">
                            <IconPlasma color="inherit" size="s" />
                        </IconTabItem>
                    ))}
                </Tabs>
            </>,
        );

        cy.matchImageSnapshot();
    });
});
