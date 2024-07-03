import { gridConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Grid.config';

export { Row, Col } from '@salutejs/plasma-new-hope/emotion';

const mergedConfig = mergeConfig(gridConfig, config);
export const Grid = component(mergedConfig);
