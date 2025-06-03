import { treeConfig } from '../../../components/Tree';
import { component, mergeConfig } from '../../../engines';

import { config } from './Tree.config';

const mergedConfig = mergeConfig(treeConfig, config);

export const Tree = component(mergedConfig);
