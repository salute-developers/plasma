import React, { HTMLAttributes, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

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
export const HeaderContent: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, ...rest }) => (
    <StyledHeaderContent {...rest}>{children}</StyledHeaderContent>
);
