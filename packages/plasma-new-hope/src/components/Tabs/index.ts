export { horizontalTabsRoot, horizontalTabsConfig } from './ui/horizontal/HorizontalTabs/HorizontalTabs';
export { horizontalTabItemRoot, horizontalTabItemConfig } from './ui/horizontal/HorizontalTabItem/HorizontalTabItem';
export {
    horizontalIconTabItemRoot,
    horizontalIconTabItemConfig,
} from './ui/horizontal/HorizontalIconTabItem/HorizontalIconTabItem';

export { verticalTabsRoot, verticalTabsConfig } from './ui/vertical/VerticalTabs/VerticalTabs';
export { verticalTabItemRoot, verticalTabItemConfig } from './ui/vertical/VerticalTabItem/VerticalTabItem';
export {
    verticalIconTabItemRoot,
    verticalIconTabItemConfig,
} from './ui/vertical/VerticalIconTabItem/VerticalIconTabItem';

export { tokens as tabsTokens } from './tokens';
export { TabItemRefs, TabsContext } from './TabsContext';
export { createTabsController } from './createTabsController';

export type { TabsControllerProps } from './createTabsController';
export type { HorizontalTabsProps, BaseTabsProps, TabsProps } from './Tabs.types';
export type {
    HorizontalTabItemProps,
    HorizontalIconTabItemProps,
    VerticalIconTabItemProps,
    BaseTabItemProps,
    RightContent,
    TabItemProps,
} from './TabItem.types';
