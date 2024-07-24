import { emptyStateConfig } from '../../../../components/EmptyState';
import { component, mergeConfig } from '../../../../engines';

import { config } from './EmptyState.config';

export const mergedConfig = mergeConfig(emptyStateConfig, config);

export const EmptyState = component(mergedConfig);
