import { breadcrumbsConfig } from '../../../../components/Breadcrumbs';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Breadcrumbs.config';

const mergedConfig = mergeConfig(breadcrumbsConfig, config);

export const Breadcrumbs = component(mergedConfig);
