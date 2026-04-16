import { codeInputConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './CodeInput.config';

const mergedConfig = mergeConfig(codeInputConfig, config);
const CodeInputComponent = component(mergedConfig);

/**
 * CodeInput
 */
export const CodeInput = CodeInputComponent;
