import { priceConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Price.config';

const mergedConfig = mergeConfig(priceConfig, config);
const PriceComponent = component(mergedConfig);

/**
 * Компонент для отображения цены / стоимости / суммы.
 */
export const Price = PriceComponent;
