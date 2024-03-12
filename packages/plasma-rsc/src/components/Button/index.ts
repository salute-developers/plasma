import { component, mergeConfig } from '../../engines';

import { buttonConfig } from './Button';
import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);

export const Button = component(mergedConfig);
