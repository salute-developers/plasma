import { treeConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Tree.config';

const mergedConfig = mergeConfig(treeConfig, config);

export const Tree = component(mergedConfig);
