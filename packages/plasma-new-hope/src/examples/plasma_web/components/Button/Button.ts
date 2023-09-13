import { buttonConfig } from '../../../../components/Button';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);

export const Button = component(mergedConfig);
