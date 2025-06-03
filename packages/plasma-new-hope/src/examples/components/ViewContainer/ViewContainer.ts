import { viewContainerConfig } from '../../../components/ViewContainer';
import { component, mergeConfig } from '../../../engines';

import { config } from './ViewContainer.config';

const mergedConfig = mergeConfig(viewContainerConfig, config);

export const ViewContainer = component(mergedConfig);
