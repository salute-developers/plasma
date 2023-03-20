import styled from 'styled-components';
import { FieldContent } from '@salutejs/plasma-core';

export const Content = styled(FieldContent)`
    ${({ pos }) =>
        pos === 'left'
            ? 'left: 0; margin-left: var(--margin-x-field-content)'
            : 'right: 0; margin-right: var(--margin-x-field-content)'};
`;
