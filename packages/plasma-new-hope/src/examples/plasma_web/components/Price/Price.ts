import { priceConfig } from '../../../../components/Price';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Price.config';

export { priceClasses } from '../../../../components/Price';

const mergedConfig = mergeConfig(priceConfig, config);

export const Price = component(mergedConfig);
