import { dropzoneConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Dropzone.config';

const mergedConfig = mergeConfig(dropzoneConfig, config);

export const Dropzone = component(mergedConfig);
