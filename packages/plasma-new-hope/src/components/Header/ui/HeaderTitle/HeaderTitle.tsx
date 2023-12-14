import React from 'react';

import { StyledHeaderTitle } from './HeaderTitle.styles';

/**
 * Компонент для размещения заголовка.
 */
export const HeaderTitle = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
    <StyledHeaderTitle {...rest}>{children}</StyledHeaderTitle>
);
