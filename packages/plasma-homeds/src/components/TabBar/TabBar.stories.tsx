import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTabBarStories } from '@salutejs/plasma-sb-utils';

import { TabBar, TabBarItem, TabBarSlot } from './TabBar';
import { config } from './TabBar.config';

type TabBarProps = ComponentProps<typeof TabBar>;

const { meta: META, Default, WithSlot } = getTabBarStories({
    component: TabBar,
    itemComponent: TabBarItem,
    slotComponent: TabBarSlot,
    componentConfig: config,
    disablePropsList: ['island', 'separation', 'islandSeparation', 'hasSelectedItemBackground'],
});

const meta: Meta<TabBarProps> = {
    ...(META as Meta<TabBarProps>),
    title: 'Navigation/TabBar',
};

export default meta;

export { Default, WithSlot };
