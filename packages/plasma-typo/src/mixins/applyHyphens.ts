import { css, InterpolationFunction } from 'styled-components';

export interface BreakWordProps {
    breakWord?: boolean;
}

export const applyHyphens: InterpolationFunction<BreakWordProps> = ({ breakWord }) => css`
    ${breakWord === true &&
    `
        --plasma-typo-overflow-wrap: break-word;
        --plasma-typo-hyphens: auto;
    `}

    ${breakWord === false &&
    `
        --plasma-typo-overflow-wrap: normal;
        --plasma-typo-hyphens: manual;
    `}

    overflow-wrap: var(--plasma-typo-overflow-wrap);
    hyphens: var(--plasma-typo-hyphens);
`;
