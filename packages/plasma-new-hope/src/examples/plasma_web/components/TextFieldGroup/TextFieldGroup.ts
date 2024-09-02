import { textFieldGroupConfig } from '../../../../components/TextFieldGroup';
import { component, mergeConfig } from '../../../../engines';

import { config } from './TextFieldGroup.config';

const mergedConfig = mergeConfig(textFieldGroupConfig, config);

export const TextFieldGroup = component(mergedConfig);
