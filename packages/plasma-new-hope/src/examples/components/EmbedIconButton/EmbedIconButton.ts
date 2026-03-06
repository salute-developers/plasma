import { embedIconButtonConfig } from '../../../components/EmbedIconButton';
import { component, mergeConfig } from '../../../engines';

import { config } from './EmbedIconButton.config';

const mergedConfig = mergeConfig(embedIconButtonConfig, config);

export const EmbedIconButton = component(mergedConfig);
