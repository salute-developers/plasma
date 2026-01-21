import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfigDefault = mergeConfig(textFieldConfig, config);
export const TextField = component(mergedConfigDefault);
