import styled, { css } from 'styled-components';

import { gridGutters, gridMargins, gridSizes, mediaQuery } from '../../../../utils';
import { ContainerProps } from '../../types';
import { applyMaxWidth } from '../applyMaxWidth';

const deviceScale = 1;
const sidesCount = 2;

export const ContainerWeb = styled.div<ContainerProps>`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    width: 100%;
    padding-left: var(--plasma-grid-margin);
    padding-right: var(--plasma-grid-margin);

    ${({ maxWidth }) => css`
        ${applyMaxWidth({ maxWidth, defaultMaxWidth: '90rem' })}
    `}

    ${() =>
        gridSizes.map((breakpoint) =>
            mediaQuery(
                breakpoint,
                deviceScale,
            )(css`
                --plasma-grid-margin: ${gridMargins[breakpoint]}rem;
                --plasma-grid-gutter: ${gridGutters[breakpoint] / sidesCount}rem;
            `),
        )}
`;
