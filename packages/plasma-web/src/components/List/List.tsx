import styled from 'styled-components';
import { applySpacing, SpacingProps } from '@salutejs/plasma-core';

export const List = styled.ul<SpacingProps>`
    margin: 0;
    padding: 0;

    ${applySpacing}
`;
