import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { gridGutters, gridMargins, gridSizes, mediaQuery } from '../../../../utils';

const deviceScale = 1;
const sidesCount = 2;

export const ContainerWeb = styled.div<HTMLAttributes<HTMLDivElement>>`
    margin: 0 auto;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    width: 100%;
    padding-left: var(--plasma-grid-margin);
    padding-right: var(--plasma-grid-margin);

    max-width: 90rem;

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
