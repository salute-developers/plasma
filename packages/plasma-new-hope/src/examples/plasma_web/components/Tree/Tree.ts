import { treeConfig } from '../../../../components/Tree';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Tree.config';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mergedConfig = mergeConfig(treeConfig, config);

export const Tree = component(mergedConfig);
