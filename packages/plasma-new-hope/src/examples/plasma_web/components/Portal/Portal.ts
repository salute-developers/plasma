import { portalConfig } from '../../../../components/Portal';
import { component, mergeConfig } from '../../../../engines';

const mergedConfig = mergeConfig(portalConfig);

export const Portal = component(mergedConfig);
