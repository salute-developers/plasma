import { component, fileConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './File.config';

const mergedConfig = mergeConfig(fileConfig, config);

export const File = component(mergedConfig);
