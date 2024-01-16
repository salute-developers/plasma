import { tabItemConfig } from '../../../../components/Tabs';
import { component, mergeConfig } from '../../../../engines';

import { config } from './TabItem.config';

const mergedConfig = mergeConfig(tabItemConfig, config);

export const TabItem = component(mergedConfig);
