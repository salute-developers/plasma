import { indicatorConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Indicator.config';

const mergedConfig = mergeConfig(indicatorConfig, config);
const Indicator = component(mergedConfig);

export { Indicator, mergedConfig };
