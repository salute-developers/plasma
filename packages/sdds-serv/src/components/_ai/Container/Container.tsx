import { aiContainerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Container.config';

export const containerMergedConfig = mergeConfig(aiContainerConfig, config);
export const Container = component(containerMergedConfig);
