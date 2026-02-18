import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { IconArrowRight } from '@salutejs/plasma-icons';
import { IconButton } from '@salutejs/plasma-b2c';

const Root = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    height: 3.5rem;
`;

const Label = styled.label<{ view: 'black' | 'white' }>`
    cursor: pointer;
    display: block;
    flex: 1;
    padding: 1rem 0;

    color: ${({ view }) => (view === 'white' ? '#FFFFFF' : '#080808')};

    font-family: var(--plasma-typo-text-l-font-family);
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
`;

const Input = styled.input<{ view: 'black' | 'white' }>`
    display: none;

    &:checked + ${Label} {
        flex: unset;

        border-radius: 2.5rem;
        padding: 1rem 2.375rem;
        border: 0.125rem solid ${({ view }) => (view === 'white' ? '#FFFFFF' : '#000000')};
    }
`;

const ContinueButton = styled(IconButton)`
    position: relative;
`;

interface RadioboxButtonProps {
    label: string;
    id: string;
    value?: number;
    checked?: boolean;
    view: 'black' | 'white';
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const RadioboxButton = ({ value, checked, label, view, id, onChange, onClick }: RadioboxButtonProps) => {
    return (
        <Root>
            <Input
                view={view}
                autoComplete="off"
                type="radio"
                id={id}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <Label view={view} htmlFor={id}>
                {label}
            </Label>
            {checked && (
                <ContinueButton size="l" view={view} pin="circle-circle" onClick={onClick}>
                    <IconArrowRight color="inherit" />
                </ContinueButton>
            )}
        </Root>
    );
};
