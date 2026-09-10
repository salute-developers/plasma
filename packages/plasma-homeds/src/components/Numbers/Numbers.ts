import { component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Numbers.config';
import { numbersConfig } from './component';

const mergedConfig = mergeConfig(numbersConfig, config);

/**
 * Цифры LCD-дисплея с дробной частью и единицей измерения.
 * Шрифт SBLCD входит в поставку и подключается автоматически.
 */
export const Numbers = component(mergedConfig);
