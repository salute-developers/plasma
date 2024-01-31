import styled from 'styled-components';
import { spinnerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Spinner.config';

const mergedConfig = mergeConfig(spinnerConfig, config);
const SpinnerComponent = component(mergedConfig);

export type SpinnerProps = typeof SpinnerComponent;

/**
 * Компонент для отображения индикатора загрузки.
 */
export const Spinner = styled(SpinnerComponent)``;
