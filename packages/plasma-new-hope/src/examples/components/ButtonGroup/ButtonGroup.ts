import { buttonGroupConfig } from '../../../components/ButtonGroup';
import { component, mergeConfig } from '../../../engines';

import { config } from './ButtonGroup.config';

const mergedConfig = mergeConfig(buttonGroupConfig, config);

export const ButtonGroup = component(mergedConfig);
