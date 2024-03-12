import { paginationConfig } from '../../../../components/Pagination';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Pagination.config';

const mergedConfig = mergeConfig(paginationConfig, config);

export const Pagination = component(mergedConfig);
