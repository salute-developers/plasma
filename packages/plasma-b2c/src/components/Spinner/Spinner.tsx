import { spinnerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import styled from 'styled-components';

import { config } from './Spinner.config';

const mergedConfig = mergeConfig(spinnerConfig, config);
const SpinnerComponent = component(mergedConfig);

/**
 * Компонент для отображения индикатора загрузки.
 */
export const Spinner = styled(SpinnerComponent)``;
