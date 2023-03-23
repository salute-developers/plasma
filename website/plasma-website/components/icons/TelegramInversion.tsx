import React from 'react';
import styled from 'styled-components';

const StyledRoot = styled.svg`
    display: inline-flex;
    width: 1rem;
    height: 1rem;
    flex: 0 0 1rem;
`;

export const TelegramInversion: React.FC<{ color?: string; className?: string }> = ({ color, className }) => {
    return (
        <StyledRoot
            width="100%"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            className={className}
        >
            <path
                d="M1.57809 7.90466L8.98567 4.85262C9.7169 4.53472 12.1968 3.5174 12.1968 3.5174C12.1968 3.5174 13.3413 3.07236 13.2459 4.1532C13.2141 4.59824 12.9599 6.15612 12.7054 7.84095L11.9107 12.8322C11.9107 12.8322 11.847 13.5634 11.3057 13.6906C10.7643 13.8177 9.87502 13.2455 9.71616 13.1183C9.58902 13.023 7.33173 11.5923 6.50508 10.8929C6.28251 10.7022 6.02823 10.3206 6.53689 9.87559C7.68144 8.82646 9.04856 7.52296 9.87502 6.6964C10.2565 6.31488 10.6381 5.42471 9.04846 6.50573L4.56578 9.52597C4.56578 9.52597 4.05703 9.84387 3.10333 9.55778C2.14963 9.27169 1.03689 8.89017 1.03689 8.89017C1.03689 8.89017 0.273856 8.41332 1.57736 7.90475L1.57809 7.90466Z"
                fill="currentColor"
            />
        </StyledRoot>
    );
};
