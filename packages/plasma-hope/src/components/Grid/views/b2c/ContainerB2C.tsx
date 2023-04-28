import styled from 'styled-components';

import { ContainerWeb } from '../web/ContainerWeb';
import { applyMaxWidth } from '../applyMaxWidth';
import { ContainerProps } from '../../types';

export const ContainerB2C = styled(ContainerWeb)<ContainerProps>`
    ${({ maxWidth }) => applyMaxWidth({ maxWidth, defaultMaxWidth: '125rem' })}
`;
