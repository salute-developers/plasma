import React from 'react';

import { IconProps } from '../IconRoot';

export const LineWeight: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M2 7H22V4H2V7Z" fill="currentColor" />
        <path d="M22 12H2V10H22V12Z" fill="currentColor" />
        <path d="M2 16.5H22V15H2V16.5Z" fill="currentColor" />
        <path d="M2 20H22V19H2V20Z" fill="currentColor" />
    </svg>
);
