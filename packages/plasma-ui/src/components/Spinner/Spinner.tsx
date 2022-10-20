import React from 'react';
import styled from 'styled-components';
import { Spinner as SpinnerBase, SpinnerProps as SpinnerPropsBase } from '@salutejs/plasma-core';

import { useThemeContext } from '../../hooks';

export interface SpinnerProps extends SpinnerPropsBase {
    deviceScale?: number;
}

/**
 * Компонент для отображения индикатора загрузки.
 */
const StyledSpinner = styled(SpinnerBase)<SpinnerProps>``;

export const Spinner = (props: SpinnerProps) => {
    const { deviceScale } = useThemeContext();

    return <StyledSpinner deviceScale={deviceScale} {...props} />;
};
