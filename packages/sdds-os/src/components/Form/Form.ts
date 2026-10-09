import { formConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Form.config';

const mergedConfig = mergeConfig(formConfig, config);

export const Form = component(mergedConfig);
