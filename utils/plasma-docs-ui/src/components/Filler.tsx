import styled from 'styled-components';
import { applySpacing, SpacingProps } from '@salutejs/plasma-typo';

export const Filler = styled.div<SpacingProps>`
    ${applySpacing}

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    width: 100%;
    padding: 0.5rem 1rem;

    background-color: var(--plasma-colors-surface-liquid01);
`;
