import styled from 'styled-components';
import { primary } from '@salutejs/plasma-core';

export const Caption = styled.span`
    display: flex;
    margin-bottom: var(--label-margin-bottom);

    font-size: var(--font-size);
    line-height: var(--line-height);
    font-weight: var(--plasma-typo-body-m-font-weight);
    color: ${primary};
`;
