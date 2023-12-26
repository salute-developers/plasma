import React from 'react';

import { IconProps } from '../IconRoot';

export const ChevronUp: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4697 7.46967C11.7626 7.17678 12.2374 7.17678 12.5303 7.46967L20.5303 15.4697C20.8232 15.7626 20.8232 16.2374 20.5303 16.5303C20.2374 16.8232 19.7626 16.8232 19.4697 16.5303L12 9.06066L4.53033 16.5303C4.23744 16.8232 3.76256 16.8232 3.46967 16.5303C3.17678 16.2374 3.17678 15.7626 3.46967 15.4697L11.4697 7.46967Z"
            fill="currentColor"
        />
    </svg>
);
