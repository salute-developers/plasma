import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconStar } from 'override/_Icon';

import type { TabBarItemProps, TabBarProps, TabBarSlotProps } from './TabBar.types';

const componentExists = hasComponent('TabBar');
const describeFn = getDescribeFN('TabBar');

const TabBarItem = hasComponent('TabBarItem') ? getComponent<TabBarItemProps>('TabBarItem') : () => null;
const TabBarSlot = hasComponent('TabBarSlot') ? getComponent<TabBarSlotProps>('TabBarSlot') : () => null;

const icon = <IconStar size="s" color="inherit" />;

const items = (
    <>
        <TabBarItem selected icon={icon} label="Label" />
        <TabBarItem icon={icon} label="Label" />
        <TabBarItem icon={icon} label="Очень длинная подпись элемента" />
        <TabBarItem icon={icon} label="Label" />
        <TabBarItem icon={icon} label="Label" counter={1} />
    </>
);

const Frame = ({ children }: { children: React.ReactNode }) => (
    <div style={{ width: 393, padding: 24, background: 'var(--background-primary, #f9f9f9)' }}>{children}</div>
);

getBaseVisualTests({
    component: 'TabBar',
    componentProps: {},
    children: items,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('TabBar', () => {
    const TabBar = componentExists ? getComponent<TabBarProps>('TabBar') : () => null;

    it('separation', () => {
        mount(
            <Frame>
                <TabBar>{items}</TabBar>
                <PadMe />
                <TabBar separation="shadow">{items}</TabBar>
                <PadMe />
                <TabBar separation="divider">{items}</TabBar>
            </Frame>,
        );
        cy.matchImageSnapshot();
    });

    it('island', () => {
        mount(
            <Frame>
                <TabBar island>{items}</TabBar>
                <PadMe />
                <TabBar island separation="shadow">
                    {items}
                </TabBar>
                <PadMe />
                <TabBar island separation="divider">
                    {items}
                </TabBar>
            </Frame>,
        );
        cy.matchImageSnapshot();
    });

    it('weight', () => {
        mount(
            <Frame>
                <TabBar>
                    <TabBarItem weight={1} icon={icon} label="1" style={{ background: 'rgba(0, 0, 0, 0.06)' }} />
                    <TabBarSlot style={{ width: 64 }}>
                        <div style={{ width: 64, height: 48, background: 'rgba(0, 0, 0, 0.18)' }} />
                    </TabBarSlot>
                    <TabBarItem weight={0.5} icon={icon} label="0.5" style={{ background: 'rgba(0, 0, 0, 0.12)' }} />
                </TabBar>
            </Frame>,
        );
        cy.matchImageSnapshot();
    });

    it('without label', () => {
        mount(
            <Frame>
                <TabBar>
                    <TabBarItem selected icon={icon} />
                    <TabBarItem icon={icon} />
                    <TabBarItem icon={icon} counter={1} />
                </TabBar>
            </Frame>,
        );
        cy.matchImageSnapshot();
    });
});
