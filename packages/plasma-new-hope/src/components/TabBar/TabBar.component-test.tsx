import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconStar, IconStarFill } from 'override/_Icon';

import type { TabBarItemProps, TabBarProps, TabBarSlotProps } from './TabBar.types';

const componentExists = hasComponent('TabBar');
const describeFn = getDescribeFN('TabBar');

const TabBarItem = hasComponent('TabBarItem') ? getComponent<TabBarItemProps>('TabBarItem') : () => null;
const TabBarSlot = hasComponent('TabBarSlot') ? getComponent<TabBarSlotProps>('TabBarSlot') : () => null;

const icon = <IconStar size="s" color="inherit" />;
const selectedIcon = <IconStarFill size="s" color="inherit" />;

const items = (
    <>
        <TabBarItem selected icon={selectedIcon} label="Label" />
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
        const itemStyle = { background: 'rgba(8, 8, 8, 0.06)', borderRadius: 0 };

        mount(
            <Frame>
                <TabBar island>
                    <TabBarItem selected weight={1} icon={selectedIcon} label="1" style={itemStyle} />
                    <TabBarSlot>
                        <div
                            style={{
                                width: '4rem',
                                height: '4rem',
                                background: 'var(--on-light-surface-positive-minor)',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            Slot
                        </div>
                    </TabBarSlot>
                    <TabBarItem weight={0.5} icon={icon} label="0.5" counter={1} style={itemStyle} />
                </TabBar>
            </Frame>,
        );
        cy.matchImageSnapshot();
    });

    it('selected background', () => {
        mount(
            <Frame>
                <TabBar hasSelectedItemBackground>{items}</TabBar>
                <PadMe />
                <TabBar view="accent" hasSelectedItemBackground>
                    {items}
                </TabBar>
                <PadMe />
                <TabBar view="secondary" hasSelectedItemBackground>
                    {items}
                </TabBar>
            </Frame>,
        );
        cy.matchImageSnapshot();
    });

    it('home indicator', () => {
        mount(
            <Frame>
                <TabBar homeIndicator>{items}</TabBar>
                <PadMe />
                <TabBar island homeIndicator>
                    {items}
                </TabBar>
            </Frame>,
        );
        cy.matchImageSnapshot();
    });

    it('without label', () => {
        mount(
            <Frame>
                <TabBar>
                    <TabBarItem selected icon={selectedIcon} />
                    <TabBarItem icon={icon} />
                    <TabBarItem icon={icon} counter={1} />
                </TabBar>
            </Frame>,
        );
        cy.matchImageSnapshot();
    });
});
