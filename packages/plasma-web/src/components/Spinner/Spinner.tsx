import styled from 'styled-components';
import { spinnerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Spinner.config';

import type { SpinnerProps } from '.';

const mergedConfig = mergeConfig(spinnerConfig, config);
const SpinnerComponent = component(mergedConfig) as React.FunctionComponent<SpinnerProps>;

/**
 * Компонент для отображения индикатора загрузки.
 */
export const Spinner = styled(SpinnerComponent)``;
