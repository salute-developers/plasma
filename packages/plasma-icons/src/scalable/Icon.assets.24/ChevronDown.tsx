import React from 'react';

import { IconProps } from '../IconRoot';

export const ChevronDown: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46967 7.46967C3.76256 7.17678 4.23744 7.17678 4.53033 7.46967L12 14.9393L19.4697 7.46967C19.7626 7.17678 20.2374 7.17678 20.5303 7.46967C20.8232 7.76256 20.8232 8.23744 20.5303 8.53033L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L3.46967 8.53033C3.17678 8.23744 3.17678 7.76256 3.46967 7.46967Z"
            fill="currentColor"
        />
    </svg>
);
