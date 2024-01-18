import React from 'react';

import { IconProps } from '../IconRoot';

export const ChevronLeft: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5303 3.46967C14.8232 3.76256 14.8232 4.23744 14.5303 4.53033L7.06066 12L14.5303 19.4697C14.8232 19.7626 14.8232 20.2374 14.5303 20.5303C14.2374 20.8232 13.7626 20.8232 13.4697 20.5303L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L13.4697 3.46967C13.7626 3.17678 14.2374 3.17678 14.5303 3.46967Z"
            fill="currentColor"
        />
    </svg>
);
