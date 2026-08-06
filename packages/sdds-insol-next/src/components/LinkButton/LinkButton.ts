import { component, mergeConfig, linkButtonConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './LinkButton.config';

const mergedConfig = mergeConfig(linkButtonConfig, config);

export const LinkButton = component(mergedConfig);
