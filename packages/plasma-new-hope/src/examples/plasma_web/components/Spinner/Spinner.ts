import { spinnerConfig } from '../../../../components/Spinner';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Spinner.config';

const mergedConfig = mergeConfig(spinnerConfig, config);

export const Spinner = component(mergedConfig);
