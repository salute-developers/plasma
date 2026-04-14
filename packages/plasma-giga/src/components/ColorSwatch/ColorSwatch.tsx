import { colorSwatchConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './ColorSwatch.config';

const mergedConfig = mergeConfig(colorSwatchConfig, config);

export const ColorSwatch = component(mergedConfig);
