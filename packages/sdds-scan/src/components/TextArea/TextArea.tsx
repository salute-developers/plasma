import { textAreaConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextArea.config';

const mergedConfig = mergeConfig(textAreaConfig, config);
export const TextArea = component(mergedConfig);
