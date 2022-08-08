import styled, { css } from 'styled-components';

import { gridGutters, gridMargins, gridSizes, mediaQuery } from '../../utils';

const deviceScale = 1;
const sidesCount = 2;

/**
 * Блок с полями по бокам для размещения контента по вертикали.
 * Блок нельзя вкладывать сам в себя или дальше по дереву.
 */
export const Container = styled.div`
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
