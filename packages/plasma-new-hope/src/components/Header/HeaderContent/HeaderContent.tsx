import React from 'react';
import { styled } from '@linaria/react';

const StyledHeaderContent = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1 0 max-content;
    margin-left: auto;
    padding-left: 0.75rem;
`;

/**
 * Контейнер для контента шапки.
 */
export const HeaderContent = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
    <StyledHeaderContent {...rest}>{children}</StyledHeaderContent>
);
