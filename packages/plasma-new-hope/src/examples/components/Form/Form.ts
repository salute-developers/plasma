import { formConfig } from '../../../components/Form';
import { component, mergeConfig } from '../../../engines';

import { config } from './Form.config';

const mergedConfig = mergeConfig(formConfig, config);

export const Form = component(mergedConfig);
