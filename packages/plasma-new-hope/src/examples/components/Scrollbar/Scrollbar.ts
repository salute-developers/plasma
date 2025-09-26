import { scrollbarConfig } from '../../../components/Scrollbar';
import { component, mergeConfig } from '../../../engines';

import { config } from './Scrollbar.config';

const mergedConfig = mergeConfig(scrollbarConfig, config);

export const Scrollbar = component(mergedConfig);
