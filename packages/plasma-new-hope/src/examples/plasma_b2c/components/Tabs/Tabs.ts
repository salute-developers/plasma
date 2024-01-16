import { tabsConfig } from '../../../../components/Tabs';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Tabs.config';

const mergedConfig = mergeConfig(tabsConfig, config);

export const Tabs = component(mergedConfig);
