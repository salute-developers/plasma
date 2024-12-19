import { treeConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Tree.config';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mergedConfig = mergeConfig(treeConfig, config);

export const Tree = component(mergedConfig);
