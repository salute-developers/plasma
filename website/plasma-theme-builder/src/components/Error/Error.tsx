import React from 'react';
import styled from 'styled-components';
import { Button } from '@salutejs/plasma-b2c';

const StyledError = styled.div``;

const Description = styled.div`
    margin-top: 2rem;
`;

const StyledButton = styled(Button)`
    display: block;
    margin: 2rem 0;
    margin-left: auto;
`;

interface ErrorProps {
    message?: string;
    onMain: () => void;
}

export const Error = ({ onMain, message }: ErrorProps) => {
    return (
        <StyledError>
            <Description>{message}</Description>
            <StyledButton view="primary" text="Вернуться на главную" onClick={onMain} />
        </StyledError>
    );
};
