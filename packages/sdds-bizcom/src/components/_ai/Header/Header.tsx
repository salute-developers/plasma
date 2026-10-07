import { component, headerConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Header.config';

export const headerMergedConfig = mergeConfig(headerConfig, config);
export const Header = component(headerMergedConfig);
