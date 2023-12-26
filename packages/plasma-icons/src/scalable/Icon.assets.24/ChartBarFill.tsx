import React from 'react';

import { IconProps } from '../IconRoot';

export const ChartBarFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16 4.5V21H21V4.5C21 3.67157 20.3284 3 19.5 3H17.5C16.6716 3 16 3.67157 16 4.5Z" fill="currentColor" />
        <path
            d="M9.5 7.5V21H14.5V7.5C14.5 6.67157 13.8284 6 13 6H11C10.1716 6 9.5 6.67157 9.5 7.5Z"
            fill="currentColor"
        />
        <path d="M3 21V13.5C3 12.6716 3.67157 12 4.5 12H6.5C7.32843 12 8 12.6716 8 13.5V21H3Z" fill="currentColor" />
    </svg>
);
