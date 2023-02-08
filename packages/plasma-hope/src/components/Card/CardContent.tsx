import styled, { css } from 'styled-components';
import { CardContent as CardContentBase, CardContentProps as CardContentPropsBase } from '@salutejs/plasma-core';

export type CardContentProps = Omit<CardContentPropsBase, 'compact'>;

/**
 * Компонент для отображения как текстового, так и любого другого контента.
 */
export const CardContent = styled(CardContentBase)<CardContentProps>`
    padding: 0;
    padding-top: 1rem;

    ${({ cover }) =>
        cover &&
        css`
            padding: 1.25rem;
        `}
`;
