import { component, mergeConfig } from '../../engines';

import { textAreaConfig } from './TextArea';
import { config } from './TextArea.config';

const mergedConfig = mergeConfig(textAreaConfig, config);

export const TextArea = component(mergedConfig);
