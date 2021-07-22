import styled from 'styled-components';
import { Spinner as SpinnerBase } from '@salutejs/plasma-core';
import type { SpinnerProps as BaseProps } from '@salutejs/plasma-core';

export interface SpinnerProps extends BaseProps {}

/**
 * Компонент для отображения индикатора загрузки.
 */
export const Spinner = styled(SpinnerBase)<SpinnerProps>``;
