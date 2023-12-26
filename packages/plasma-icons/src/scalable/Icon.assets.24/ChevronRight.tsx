import React from 'react';

import { IconProps } from '../IconRoot';

export const ChevronRight: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.46967 3.46967C9.76256 3.17678 10.2374 3.17678 10.5303 3.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L10.5303 20.5303C10.2374 20.8232 9.76256 20.8232 9.46967 20.5303C9.17678 20.2374 9.17678 19.7626 9.46967 19.4697L16.9393 12L9.46967 4.53033C9.17678 4.23744 9.17678 3.76256 9.46967 3.46967Z"
            fill="currentColor"
        />
    </svg>
);
