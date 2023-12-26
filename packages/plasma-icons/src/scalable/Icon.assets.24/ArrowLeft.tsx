import React from 'react';

import { IconProps } from '../IconRoot';

export const ArrowLeft: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0303 4.46967C13.3232 4.76256 13.3232 5.23744 13.0303 5.53033L7.31066 11.25H18.5C18.9142 11.25 19.25 11.5858 19.25 12C19.25 12.4142 18.9142 12.75 18.5 12.75H7.31066L13.0303 18.4697C13.3232 18.7626 13.3232 19.2374 13.0303 19.5303C12.7374 19.8232 12.2626 19.8232 11.9697 19.5303L4.96967 12.5303C4.67678 12.2374 4.67678 11.7626 4.96967 11.4697L11.9697 4.46967C12.2626 4.17678 12.7374 4.17678 13.0303 4.46967Z"
            fill="currentColor"
        />
    </svg>
);
