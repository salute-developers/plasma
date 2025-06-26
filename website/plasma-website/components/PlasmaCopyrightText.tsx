import styled from 'styled-components';
import { BodyXXS } from '@salutejs/plasma-b2c';
import { tertiary } from '@salutejs/plasma-tokens-b2c';

export const PlasmaCopyrightText = styled(BodyXXS)`
    position: fixed;
    transform-origin: bottom right;
    right: 0.5rem;
    bottom: 0.75rem;
    transform: rotate(-90deg) translateX(100%);
    color: ${tertiary};
`;
