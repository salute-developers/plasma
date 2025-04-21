import React from 'react';
import styled from 'styled-components';
import { IconArrowUp, IconArrowDown } from '@salutejs/plasma-icons';
import { TextXS } from '@salutejs/plasma-b2c';

const StyledTextXS = styled(TextXS)`
    color: rgba(255, 255, 255, 0.56);
    line-height: 14px;
`;

const StyledIconArrowUp = styled(IconArrowUp)`
    margin-left: 4px;
`;

const StyledIconArrowDown = styled(IconArrowDown)`
    margin-left: 4px;
`;

const StyledContainer = styled.div<{ type?: 'previous' | 'next' }>`
    display: grid;
    grid-template-columns: subgrid;

    grid-column: ${({ type = 'previous' }) => (type === 'previous' ? '2/-1' : '2/3')};
    height: 16px;

    color: rgba(255, 255, 255, 0.56);
`;

const StyledNavigationControlItem = styled.button`
    all: unset;

    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.56);
    cursor: pointer;

    &:hover,
    &:active {
        color: rgba(255, 255, 255, 1);

        ${StyledTextXS} {
            color: rgba(255, 255, 255, 1);
        }
    }
`;

export const NavigationControl = ({
    version,
    onChange,
    type = 'previous',
    ...rest
}: {
    version: string;
    onChange: (version: string) => void;
    type?: 'previous' | 'next';
    className?: string;
}) => {
    return (
        <StyledContainer type={type} {...rest}>
            <StyledNavigationControlItem onClick={() => onChange(version)}>
                <StyledTextXS>{version}</StyledTextXS>
                {type === 'previous' ? (
                    <StyledIconArrowUp color="inherit" size="xs" />
                ) : (
                    <StyledIconArrowDown color="inherit" size="xs" />
                )}
            </StyledNavigationControlItem>
        </StyledContainer>
    );
};
