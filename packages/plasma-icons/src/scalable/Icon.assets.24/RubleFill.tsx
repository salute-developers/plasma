import React from 'react';

import { IconProps } from '../IconRoot';

export const RubleFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M13 11.5H11.5V8.5H13C13.8284 8.5 14.5 9.17157 14.5 10C14.5 10.8284 13.8284 11.5 13 11.5Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.75 7C10.3358 7 10 7.33579 10 7.75V11.5H9.25C8.83579 11.5 8.5 11.8358 8.5 12.25C8.5 12.6642 8.83579 13 9.25 13H10V14H9.25C8.83579 14 8.5 14.3358 8.5 14.75C8.5 15.1642 8.83579 15.5 9.25 15.5H10V17H11.5V15.5H13.25C13.6642 15.5 14 15.1642 14 14.75C14 14.3358 13.6642 14 13.25 14H11.5V13H13C14.6569 13 16 11.6569 16 10C16 8.34315 14.6569 7 13 7H10.75Z"
            fill="currentColor"
        />
    </svg>
);
