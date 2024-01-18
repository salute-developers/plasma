import React from 'react';

import { IconProps } from '../IconRoot';

export const SquareFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M3 4.75C3 3.7835 3.7835 3 4.75 3H19.25C20.2165 3 21 3.7835 21 4.75V19.25C21 20.2165 20.2165 21 19.25 21H4.75C3.7835 21 3 20.2165 3 19.25V4.75Z"
            fill="currentColor"
        />
    </svg>
);
