import { component, mergeConfig } from '../../../../engines';
import { comboboxNewConfig } from '../../../..';

import { config } from './Combobox.config';

const mergedConfig = mergeConfig(comboboxNewConfig, config);
const Combobox = component(mergedConfig);

export { Combobox };
