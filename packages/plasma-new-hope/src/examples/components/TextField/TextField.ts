import { component, mergeConfig } from '../../../engines';
import { textFieldConfig } from '../../../components/TextField';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
export const TextField = component(mergedConfig);
