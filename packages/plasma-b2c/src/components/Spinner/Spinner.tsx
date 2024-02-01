import { spinnerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import styled from 'styled-components';
import { FunctionComponent } from 'react';

import { config } from './Spinner.config';

import type { SpinnerProps } from '.';

const mergedConfig = mergeConfig(spinnerConfig, config);
const SpinnerComponent = component(mergedConfig) as FunctionComponent<SpinnerProps>;

/**
 * Компонент для отображения индикатора загрузки.
 */
export const Spinner = styled(SpinnerComponent)``;
