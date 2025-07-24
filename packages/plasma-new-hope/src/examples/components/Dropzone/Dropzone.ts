import { dropzoneConfig } from '../../../components/Dropzone';
import { component, mergeConfig } from '../../../engines';

import { config } from './Dropzone.config';

const mergedConfig = mergeConfig(dropzoneConfig, config);

export const Dropzone = component(mergedConfig);
