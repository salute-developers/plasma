import { fileConfig } from 'src/components/File';
import { component, mergeConfig } from 'src/engines';

import { config } from './File.config';

const mergedConfig = mergeConfig(fileConfig, config);

export const File = component(mergedConfig);
