import React from 'react';

import { IconProps } from '../IconRoot';

export const ClockFilled: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 6a1 1 0 112 0v4.423l2.098 1.211a1 1 0 11-1 1.732l-2.58-1.49a1 1 0 01-.518-.892V8z"
            fill="currentColor"
        />
    </svg>
);
