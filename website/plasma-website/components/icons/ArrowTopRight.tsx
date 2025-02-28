import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const StyledRoot = styled.svg``;

export const ArrowTopRight: React.FC<{ color?: string; className?: string; style?: CSSProperties }> = ({
    color,
    className,
    style,
}) => {
    return (
        <StyledRoot
            width="100%"
            height="100%"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            className={className}
            style={style}
        >
            <path
                d="M11.2358 9.83896L11.2776 4.61169M11.2776 4.61169L6.28602 4.88921M11.2776 4.61169L4.73671 11.1526"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </StyledRoot>
    );
};
