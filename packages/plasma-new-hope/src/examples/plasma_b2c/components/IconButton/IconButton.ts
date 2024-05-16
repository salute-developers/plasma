import { iconButtonConfig } from '../../../../components/IconButton';
import { component, mergeConfig } from '../../../../engines';

import { config } from './IconButton.config';

const mergedConfig = mergeConfig(iconButtonConfig, config);

export const IconButton = component(mergedConfig);
