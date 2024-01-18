import React from 'react';

import { IconProps } from '../IconRoot';

export const ParkingFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13 12H10V9H13C13.8284 9 14.5 9.67157 14.5 10.5C14.5 11.3284 13.8284 12 13 12Z" fill="currentColor" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 3C4.45507 3 3 4.45508 3 6.25V17.75C3 19.5449 4.45508 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM9.25 7.5C8.83579 7.5 8.5 7.83579 8.5 8.25V15.75C8.5 16.1642 8.83579 16.5 9.25 16.5C9.66421 16.5 10 16.1642 10 15.75V13.5H13C14.6569 13.5 16 12.1569 16 10.5C16 8.84315 14.6569 7.5 13 7.5H9.25Z"
            fill="currentColor"
        />
    </svg>
);
