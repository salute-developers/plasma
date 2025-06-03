import { indicatorConfig } from '../../../components/Indicator';
import { component, mergeConfig } from '../../../engines';

import { config } from './Indicator.config';

const mergedConfig = mergeConfig(indicatorConfig, config);

const Indicator = component(mergedConfig);

export { Indicator, mergedConfig };
