import { breadcrumbsConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Breadcrumbs.config';

const mergedConfig = mergeConfig(breadcrumbsConfig, config);
const BreadcrumbsComponent = component(mergedConfig);

/**
 * Breadcrumbs
 */
export const Breadcrumbs = BreadcrumbsComponent;
