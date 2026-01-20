import { emptyStateConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './EmptyState.config';

export const mergedConfig = mergeConfig(emptyStateConfig, config);

export const EmptyState = component(mergedConfig);
