import React from 'react';

import { IconProps } from '../IconRoot';

export const DoneCircleFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.695 9.71899C18.0921 9.33514 18.1028 8.70206 17.719 8.30498C17.3351 7.90789 16.7021 7.89716 16.305 8.28101L9.75862 14.6092L7.69502 12.6143C7.29794 12.2305 6.66486 12.2412 6.28101 12.6383C5.89716 13.0354 5.90789 13.6685 6.30498 14.0523L9.0636 16.719C9.4512 17.0937 10.066 17.0937 10.4536 16.719L17.695 9.71899Z"
            fill="currentColor"
        />
    </svg>
);
