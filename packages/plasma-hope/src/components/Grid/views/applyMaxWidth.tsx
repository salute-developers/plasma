import { css, InterpolationFunction } from 'styled-components';

import { ContainerProps } from '../types';

export const applyMaxWidth: InterpolationFunction<ContainerProps & { defaultMaxWidth?: string }> = ({
    defaultMaxWidth = '125rem',
    maxWidth,
}) =>
    css`
        max-width: ${maxWidth ?? defaultMaxWidth};
    `;
