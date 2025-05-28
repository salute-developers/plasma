import { codeFieldConfig } from '../../../../components/CodeField';
import { component, mergeConfig } from '../../../../engines';

import { config } from './CodeField.config';

const mergedConfig = mergeConfig(codeFieldConfig, config);

export const CodeField = component(mergedConfig);
