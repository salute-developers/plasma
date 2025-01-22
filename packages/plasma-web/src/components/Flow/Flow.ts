import { flowConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const mergedConfig = mergeConfig(flowConfig);

export const Flow = component(mergedConfig);
