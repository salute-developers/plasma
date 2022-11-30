import React, { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

const StyledSwitchGroup = styled.div`
    margin: 1rem 0;
    min-height: 3rem;

    display: flex;

    align-items: center;
    justify-content: space-between;
`;

const Label = styled.div``;

export interface FormFieldProps {
    label: string;
}

export const FormField = ({ label, children }: FormFieldProps & PropsWithChildren<ReactNode>) => {
    return (
        <StyledSwitchGroup>
            <Label>{label}</Label>
            {children}
        </StyledSwitchGroup>
    );
};
