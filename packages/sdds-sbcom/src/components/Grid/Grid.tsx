import { gridConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Grid.config';

export { Row, Col } from '@salutejs/plasma-new-hope/styled-components';

const mergedConfig = mergeConfig(gridConfig, config);
export const Grid = component(mergedConfig);
