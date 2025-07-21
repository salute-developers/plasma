import { iconButtonConfig } from '../../../components/IconButton';
import { component, mergeConfig } from '../../../engines';

import { config } from './EmbedIconButton.config';

const mergedConfig = mergeConfig(iconButtonConfig, config);

export const EmbedIconButton = component(mergedConfig);
