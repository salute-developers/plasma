import { codeInputConfig } from '../../../../components/CodeInput';
import { component, mergeConfig } from '../../../../engines';

import { config } from './CodeInput.config';

const mergedConfig = mergeConfig(codeInputConfig, config);

export const CodeInput = component(mergedConfig);
