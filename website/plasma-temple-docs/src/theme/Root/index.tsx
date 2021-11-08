import React, { FC } from 'react';
import { GlobalStyle } from '@salutejs/plasma-docs-ui';

// Default implementation, that you can customize
const Root: FC = ({ children }) => {
    return (
        <>
            {children}
            <GlobalStyle />
        </>
    );
};

export default Root;
