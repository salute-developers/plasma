import styled from 'styled-components';
import { Container } from '@salutejs/plasma-b2c';

export const Main = styled(Container).attrs(() => ({ forwardedAs: 'main' }))`
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
`;
