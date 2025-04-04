import React from 'react';

import { IconProps } from '../IconRoot';

export const DisclosureUpCentered: React.FC<IconProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0303 14.0285C16.7374 14.3214 16.2626 14.3214 15.9697 14.0285L12 10.0588L8.03033 14.0285C7.73744 14.3214 7.26256 14.3214 6.96967 14.0285C6.67678 13.7356 6.67678 13.2607 6.96967 12.9678L12 7.9375L17.0303 12.9678C17.3232 13.2607 17.3232 13.7356 17.0303 14.0285Z"
                fill="black"
            />
        </svg>
    );
};
