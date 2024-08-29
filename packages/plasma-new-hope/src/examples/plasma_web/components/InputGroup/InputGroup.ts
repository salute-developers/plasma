import { inputGroupConfig } from '../../../../components/InputGroup';
import { component, mergeConfig } from '../../../../engines';

import { config } from './InputGroup.config';

const mergedConfig = mergeConfig(inputGroupConfig, config);

export const InputGroup = component(mergedConfig);
