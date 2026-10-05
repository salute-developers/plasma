import styled, { css } from 'styled-components';
import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

export const CardContentBase = plasmaCore.CardContent;
export type CardContentPropsBase = plasmaCore.CardContentProps;

export type CardContentProps = Omit<CardContentPropsBase, 'compact' | 'nonce' | 'onResize' | 'onResizeCapture'>;

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
