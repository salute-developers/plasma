import React from 'react';
import styled from 'styled-components';
import { BodyM } from '@salutejs/plasma-typo';

export const CellRoot = styled.div`
    display: flex;
    align-items: center;
`;

export const CellContent = styled(BodyM)`
    margin-left: var(--cell-content-margin-left, 0);
`;

export interface CellProps {
    /**
     * Компонент слева.
     */
    content: React.ReactElement;
    /**
     * Описание ячейки.
     */
    description: string;
}

/**
 * Базовый компонент для отображения блоков контента в списках и карточках.
 */
export const Cell = ({ content, description, ...rest }: CellProps) => {
    return (
        <CellRoot {...rest}>
            {content}
            <CellContent bold>{description}</CellContent>
        </CellRoot>
    );
};
