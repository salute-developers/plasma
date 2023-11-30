import { textAreaConfig } from '../../../../components/TextArea';
import { component, mergeConfig } from '../../../../engines';

import { config } from './TextArea.config';

const mergedConfig = mergeConfig(textAreaConfig, config);

export const TextArea = component(mergedConfig);
