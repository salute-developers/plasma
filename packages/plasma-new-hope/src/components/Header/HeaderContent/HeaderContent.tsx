import React from 'react';

import { StyledHeaderContent } from './HeaderContent.styles';

/**
 * Контейнер для контента шапки.
 */
export const HeaderContent = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
    <StyledHeaderContent {...rest}>{children}</StyledHeaderContent>
);
