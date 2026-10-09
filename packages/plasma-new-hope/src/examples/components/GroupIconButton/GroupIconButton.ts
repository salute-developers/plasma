import { groupIconButtonConfig } from '../../../components/GroupIconButton';
import { component, mergeConfig } from '../../../engines';

import { config } from './GroupIconButton.config';

const mergedConfig = mergeConfig(groupIconButtonConfig, config);

export const GroupIconButton = component(mergedConfig);
