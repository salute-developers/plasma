import { _beta_embeddedButtonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './EmbeddedButton.config';

const mergedConfig = mergeConfig(_beta_embeddedButtonConfig, config);
export const EmbeddedButton = component(mergedConfig);
