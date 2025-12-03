import { fileConfig } from '../../../components/File';
import { component, mergeConfig } from '../../../engines';

import { config } from './File.config';

const mergedConfig = mergeConfig(fileConfig, config);

export const File = component(mergedConfig);
