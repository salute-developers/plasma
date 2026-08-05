import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTabsStories } from '@salutejs/plasma-sb-utils';

import { Dropdown } from '../Dropdown/Dropdown';
import { Counter } from '../Counter/Counter';

import { Tabs } from './Tabs';
import { TabItem, IconTabItem } from './TabItem';
import { config as horizontalConfig } from './horizontal/HorizontalTabItem.config';
import { config as verticalConfig } from './vertical/VerticalTabItem.config';

type TabsProps = ComponentProps<typeof Tabs>;

const { meta: META, Default, HeaderTabs } = getTabsStories({
    component: Tabs,
    tabItemComponent: TabItem,
    iconTabItemComponent: IconTabItem,
    dropdownComponent: Dropdown,
    counterComponent: Counter,
    componentConfig: { horizontal: horizontalConfig, vertical: verticalConfig },
});

const meta: Meta<TabsProps> = {
    ...(META as Meta<TabsProps>),
    title: 'Navigation/⚠️ Tabs',
};

export default meta;

export { Default, HeaderTabs };
