import React from 'react';

import { IconProps } from '../IconRoot';

export const BoxFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M5.25 3C4.00736 3 3 4.00736 3 5.25V8H21V5.25C21 4.00736 19.9926 3 18.75 3H5.25Z" fill="currentColor" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 9.5H4V17.75C4 19.5449 5.45507 21 7.25 21H16.75C18.5449 21 20 19.5449 20 17.75V9.5ZM12.25 12C11.8358 12 11.5 12.3358 11.5 12.75C11.5 13.1642 11.8358 13.5 12.25 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75C17 12.3358 16.6642 12 16.25 12H12.25ZM13.5 15.75C13.5 15.3358 13.8358 15 14.25 15H16.25C16.6642 15 17 15.3358 17 15.75C17 16.1642 16.6642 16.5 16.25 16.5H14.25C13.8358 16.5 13.5 16.1642 13.5 15.75Z"
            fill="currentColor"
        />
    </svg>
);
