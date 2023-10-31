import { headingConfig } from '../../../../components/Typography';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Heading.config';

const mergedConfig = mergeConfig(headingConfig, config);

export const Heading = component(mergedConfig);
