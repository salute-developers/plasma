import { aiContainerConfig } from '../../../../components/_ai/Container';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Container.config';

const mergedConfig = mergeConfig(aiContainerConfig, config);

export const Container = component(mergedConfig);
