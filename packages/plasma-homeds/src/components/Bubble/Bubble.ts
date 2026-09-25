import { component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Bubble.config';
import { bubbleConfig } from './component';

const mergedConfig = mergeConfig(bubbleConfig, config);

/**
 * Компактная подсказка-бабл: звезда раскрывается в контентную плашку.
 */
export const Bubble = component(mergedConfig);
