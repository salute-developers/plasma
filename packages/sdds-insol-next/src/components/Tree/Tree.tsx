import { treeConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Tree.config';

const mergedConfig = mergeConfig(treeConfig, config);

export const Tree = component(mergedConfig);
