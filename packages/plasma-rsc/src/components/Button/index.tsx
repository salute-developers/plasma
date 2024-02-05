import { styled } from '@linaria/react';
import React from 'react';

const Wrapper = styled.button`
    display: flex;
    background-color: #0d8523;
`;

const Button = ({ children }: any) => {
    return <Wrapper>{children}</Wrapper>;
};

export { Button };
