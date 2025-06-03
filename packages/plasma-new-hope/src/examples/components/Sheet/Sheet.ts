import { sheetConfig } from '../../../components/Sheet';
import { component, mergeConfig } from '../../../engines';

import { config } from './Sheet.config';

export { sheetClasses } from '../../../components/Sheet';

const mergedConfig = mergeConfig(sheetConfig, config);

export const Sheet = component(mergedConfig);
