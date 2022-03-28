import styled from 'styled-components';
import { applySpacing, SpacingProps } from '@salutejs/plasma-core';

export const ListItem = styled.li<SpacingProps>`
    list-style: none;

    ${applySpacing}
`;
