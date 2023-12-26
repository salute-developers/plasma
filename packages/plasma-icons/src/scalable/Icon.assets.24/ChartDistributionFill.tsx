import React from 'react';

import { IconProps } from '../IconRoot';

export const ChartDistributionFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M9 5.25V21H15V5.25C15 4.00736 13.9926 3 12.75 3H11.25C10.0074 3 9 4.00736 9 5.25Z"
            fill="currentColor"
        />
        <path d="M16.5 7V21H21V9.25C21 8.00736 19.9926 7 18.75 7H16.5Z" fill="currentColor" />
        <path d="M3 21V12.25C3 11.0074 4.00736 10 5.25 10H7.5V21H3Z" fill="currentColor" />
    </svg>
);
