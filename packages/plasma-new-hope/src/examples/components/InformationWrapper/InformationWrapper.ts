import { component, mergeConfig } from '../../../engines';
import { informationWrapperConfig } from '../../../components/InformationWrapper';

import { config } from './InformationWrapper.config';

const mergedConfig = mergeConfig(informationWrapperConfig, config);
export const InformationWrapper = component(mergedConfig);
