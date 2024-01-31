import React from 'react';

import { IconProps } from '../IconRoot';

export const ChevronDown: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2929 9.88286C15.6834 9.49233 16.3166 9.49233 16.7071 9.88286C17.0976 10.2734 17.0976 10.9065 16.7071 11.2971L12 16.0042L7.29289 11.2971C6.90237 10.9065 6.90237 10.2734 7.29289 9.88286C7.68342 9.49233 8.31658 9.49233 8.70711 9.88286L12 13.1758L15.2929 9.88286Z"
            fill="currentColor"
        />
    </svg>
);
