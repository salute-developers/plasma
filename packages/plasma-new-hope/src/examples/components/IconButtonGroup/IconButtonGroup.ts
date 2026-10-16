import { iconButtonGroupConfig } from '../../../components/IconButtonGroup';
import { component, mergeConfig } from '../../../engines';

import { config } from './IconButtonGroup.config';

const mergedConfig = mergeConfig(iconButtonGroupConfig, config);

export const IconButtonGroup = component(mergedConfig);
