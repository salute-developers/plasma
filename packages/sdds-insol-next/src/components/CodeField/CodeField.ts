import { codeFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './CodeField.config';

const mergedConfig = mergeConfig(codeFieldConfig, config);

export const CodeField = component(mergedConfig);
