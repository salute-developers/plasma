import { _beta_embeddedButtonConfig } from 'src/components/_beta/EmbeddedButton';
import { component, mergeConfig } from 'src/engines';

import { config } from './EmbeddedButton.config';

const mergedConfig = mergeConfig(_beta_embeddedButtonConfig, config);
export const EmbeddedButton = component(mergedConfig);
