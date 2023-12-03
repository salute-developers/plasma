import React from 'react';
import { styled } from '@linaria/react';

import { applyEllipsis, h3, mediaQuery } from '../../../../mixins';

const StyledHeaderTitle = styled.div`
    ${applyEllipsis()};

    ${h3};
    font-weight: 600;

    ${mediaQuery('S')(`
        font-family: var(--plasma-typo-body-m-font-family);
        font-size: var(--plasma-typo-body-m-font-size);
        font-style: var(--plasma-typo-body-m-font-style);
        letter-spacing: var(--plasma-typo-body-m-letter-spacing);
        line-height: var(--plasma-typo-body-m-line-height);
        font-weight: 600;
    `)};
`;

/**
 * Компонент для размещения заголовка.
 */
export const HeaderTitle = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
    <StyledHeaderTitle {...rest}>{children}</StyledHeaderTitle>
);
