import styled from 'styled-components';
import { FieldPlaceholder } from '@salutejs/plasma-core';

export const Placeholder = styled(FieldPlaceholder)<{ visible?: boolean }>`
    --display: ${({ visible }) => (visible ? 'inline-flex' : 'none')};

    display: inline-flex;
    align-items: center;
    padding: var(--padding-default);

    height: auto;

    font-size: var(--font-size);
    line-height: var(--line-height);

    font-weight: var(--plasma-typo-body-m-font-weight);

    input:not(:placeholder-shown) ~ & {
        display: var(--display);
        padding: var(--padding-placeholder-inactive);

        font-size: var(--placeholder-active-font-size);
        line-height: var(--placeholder-active-line-height);
    }
`;
