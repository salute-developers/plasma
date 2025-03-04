import { component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

// INFO: Temporary method
export const createComponentByConfig = (baseConfig: any, config: any) => {
    return component(mergeConfig(baseConfig, config));
};
