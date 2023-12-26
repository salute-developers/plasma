import React from 'react';

import { IconProps } from '../IconRoot';

export const ArrowUp: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967L19.5303 12.4697C19.8232 12.7626 19.8232 13.2374 19.5303 13.5303C19.2374 13.8232 18.7626 13.8232 18.4697 13.5303L12.75 7.81066V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V7.81066L5.53033 13.5303C5.23744 13.8232 4.76256 13.8232 4.46967 13.5303C4.17678 13.2374 4.17678 12.7626 4.46967 12.4697L11.4697 5.46967Z"
            fill="currentColor"
        />
    </svg>
);
