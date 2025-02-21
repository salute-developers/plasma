import { paginationDotsConfig } from '../../../../components/PaginationDots';
import { component, mergeConfig } from '../../../../engines';

import { config } from './PaginationDots.config';

const mergedConfig = mergeConfig(paginationDotsConfig, config);

export const PaginationDots = component(mergedConfig);
