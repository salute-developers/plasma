import { treeConfig } from 'src/components/Tree';
import { component, mergeConfig } from 'src/engines';

import { config } from './Tree.config';

const mergedConfig = mergeConfig(treeConfig, config);

export const Tree = component(mergedConfig);
