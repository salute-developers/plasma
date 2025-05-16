import { popoverConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Popover.config';

const mergedConfig = mergeConfig(popoverConfig, config);

export const Popover = component(mergedConfig);
