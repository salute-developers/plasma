import React from 'react';

import { IconProps } from '../IconRoot';

export const ArrowDiagLeftDown: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M20.25 3.75L3.75 20.25M3.75 20.25V10.75M3.75 20.25H13.25"
            stroke="white"
            strokeOpacity="0.96"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
