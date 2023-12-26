import React from 'react';

import { IconProps } from '../IconRoot';

export const DropFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4529 2.18161C11.7744 1.93946 12.2256 1.93946 12.5471 2.18161L12.7138 2.31129L13.0742 2.60514C13.2744 2.77226 13.4893 2.95776 13.716 3.16074C14.5775 3.93218 15.4385 4.80122 16.2439 5.75167C18.5837 8.5129 20 11.3939 20 14.2856C20 18.5459 16.418 22 12 22C7.58197 22 4 18.5459 4 14.2856C4 11.3939 5.41633 8.5129 7.75612 5.75167C8.56151 4.80122 9.42252 3.93218 10.284 3.16074C10.5107 2.95776 10.7256 2.77226 10.9258 2.60514L11.121 2.44418L11.4529 2.18161Z"
            fill="currentColor"
        />
    </svg>
);
