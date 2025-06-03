import { gridConfig } from '../../../components/Grid';
import { component, mergeConfig } from '../../../engines';

import { config } from './Grid.config';

export { Row, Col } from '../../../components/Grid';

const mergedConfig = mergeConfig(gridConfig, config);
export const Grid = component(mergedConfig);
