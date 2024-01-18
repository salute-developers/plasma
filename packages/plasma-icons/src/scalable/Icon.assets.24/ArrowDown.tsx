import React from 'react';

import { IconProps } from '../IconRoot';

export const ArrowDown: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V16.1893L18.4697 10.4697C18.7626 10.1768 19.2374 10.1768 19.5303 10.4697C19.8232 10.7626 19.8232 11.2374 19.5303 11.5303L12.5303 18.5303C12.2374 18.8232 11.7626 18.8232 11.4697 18.5303L4.46967 11.5303C4.17678 11.2374 4.17678 10.7626 4.46967 10.4697C4.76256 10.1768 5.23744 10.1768 5.53033 10.4697L11.25 16.1893V5C11.25 4.58579 11.5858 4.25 12 4.25Z"
            fill="currentColor"
        />
    </svg>
);
