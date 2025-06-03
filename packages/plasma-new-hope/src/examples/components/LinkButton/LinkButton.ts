import { linkButtonConfig } from '../../../components/LinkButton';
import { component, mergeConfig } from '../../../engines';

import { config } from './LinkButton.config';

const mergedConfig = mergeConfig(linkButtonConfig, config);

export const LinkButton = component(mergedConfig);
