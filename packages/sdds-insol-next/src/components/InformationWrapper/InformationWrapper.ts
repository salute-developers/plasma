import { informationWrapperConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './InformationWrapper.config';

const mergedConfig = mergeConfig(informationWrapperConfig, config);

export const InformationWrapper = component(mergedConfig);
