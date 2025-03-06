import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const StyledRoot = styled.svg``;

export const ArrowRight: React.FC<{ color?: string; className?: string; style?: CSSProperties }> = ({
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.65176 4.16662C8.83588 3.96082 9.15198 3.94325 9.35778 4.12737L13.0836 7.4607C13.1865 7.5528 13.2468 7.68337 13.2501 7.82145C13.2533 7.95954 13.1994 8.09283 13.1009 8.18971L9.37511 11.8564C9.17829 12.0501 8.86172 12.0475 8.66802 11.8507C8.47433 11.6539 8.47686 11.3373 8.67368 11.1436L11.5293 8.33334H3.5C3.22386 8.33334 3 8.10948 3 7.83334C3 7.5572 3.22386 7.33334 3.5 7.33334H11.4414L8.69101 4.87264C8.48521 4.68852 8.46764 4.37242 8.65176 4.16662Z"
                fill="currentColor"
            />
        </StyledRoot>
    );
};
