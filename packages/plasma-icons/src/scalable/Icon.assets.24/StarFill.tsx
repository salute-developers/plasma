import React from 'react';

import { IconProps } from '../IconRoot';

export const StarFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0688 2.68209C11.4585 1.91847 12.5496 1.91847 12.9393 2.68209L15.4964 7.69265L21.0519 8.5762C21.8985 8.71086 22.2357 9.74856 21.6299 10.3552L17.6547 14.3354L18.5311 19.892C18.6647 20.7389 17.782 21.3802 17.0179 20.9915L12.004 18.4409L6.99021 20.9915C6.22609 21.3802 5.34337 20.7389 5.47694 19.892L6.35337 14.3354L2.37822 10.3552C1.7724 9.74856 2.10957 8.71086 2.95623 8.5762L8.51173 7.69265L11.0688 2.68209Z"
            fill="currentColor"
        />
    </svg>
);
