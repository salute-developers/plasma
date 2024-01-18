import React from 'react';

import { IconProps } from '../IconRoot';

export const DishwasherFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 2C4.45507 2 3 3.45508 3 5.25V8H21V5.25C21 3.45507 19.5449 2 17.75 2H6.25ZM8 6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5C7.55228 5 8 5.44772 8 6ZM12.75 5.25C12.3358 5.25 12 5.58579 12 6C12 6.41421 12.3358 6.75 12.75 6.75H17.25C17.6642 6.75 18 6.41421 18 6C18 5.58579 17.6642 5.25 17.25 5.25H12.75Z"
            fill="currentColor"
        />
        <path
            d="M21 18.75V9.5H3V18.75C3 20.5449 4.45508 22 6.25 22H17.75C19.5449 22 21 20.5449 21 18.75Z"
            fill="currentColor"
        />
    </svg>
);
