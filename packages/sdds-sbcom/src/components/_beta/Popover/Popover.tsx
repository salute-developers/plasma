import { _beta_popoverConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Popover.config';

const mergedConfig = mergeConfig(_beta_popoverConfig, config);
export const Popover = component(mergedConfig);
