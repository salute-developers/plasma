import { badgeConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { IS_DRAFT } from '../../helpers/isDraft';

import { config } from './Badge.config';
// INFO: После всех изменений draft станет основной конфигурацией
import { config as draft } from './Badge.config.draft';

const mergedConfig = mergeConfig(badgeConfig, IS_DRAFT() ? draft : config);

/**
 * Компонент Badge.
 */
export const Badge = component(mergedConfig);
