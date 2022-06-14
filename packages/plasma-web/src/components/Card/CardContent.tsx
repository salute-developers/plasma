import React from 'react';
import styled, { css } from 'styled-components';
import { DisabledProps } from '@salutejs/plasma-core';

interface OtherProps extends DisabledProps {
    compact?: boolean;
}

export type CardContentProps = OtherProps & React.HTMLAttributes<HTMLDivElement>;

const StyledRoot = styled.div<OtherProps>`
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: ${({ compact }) => (compact ? 0.375 : 1)}rem 1rem;

    border-radius: inherit;

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
        `}

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    justify-content: flex-end;
`;

/**
 * Компонент для отображения как текстового, так и любого другого контента.
 */
export const CardContent: React.FC<CardContentProps> = ({ children, ...rest }) => {
    return <StyledRoot {...rest}>{children}</StyledRoot>;
};
