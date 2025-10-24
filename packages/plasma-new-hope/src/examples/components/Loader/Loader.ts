import { loaderConfig } from '../../../components/Loader';
import { component, mergeConfig } from '../../../engines';

import { config } from './Loader.config';

const mergedConfig = mergeConfig(loaderConfig, config);

export const Loader = component(mergedConfig);
