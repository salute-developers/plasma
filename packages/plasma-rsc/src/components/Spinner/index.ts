import { component, mergeConfig } from '../../engines';

import { config } from './Spinner.config';
import { spinnerConfig } from './Spinner';

const mergedConfig = mergeConfig(spinnerConfig, config);
const SpinnerComponent = component(mergedConfig);

/**
 * Компонент для отображения индикатора загрузки.
 */
export const Spinner = SpinnerComponent;
