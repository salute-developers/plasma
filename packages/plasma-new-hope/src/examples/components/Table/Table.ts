import { component, mergeConfig } from '../../../engines';
import { tableConfig } from '../../..';

import { config } from './Table.config';

const mergedConfig = mergeConfig(tableConfig, config);
const Table = component(mergedConfig);

export { Table };
