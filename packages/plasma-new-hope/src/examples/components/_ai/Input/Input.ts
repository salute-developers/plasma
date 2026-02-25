import { inputConfig } from 'src/components/_ai';
import { component, mergeConfig } from 'src/engines';

import { config } from './Input.config';

const mergedConfig = mergeConfig(inputConfig, config);

export const Input = component(mergedConfig);
