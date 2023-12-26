import React from 'react';

import { IconProps } from '../IconRoot';

export const Text: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4 4H20V6H13V22H11V6H4V4Z" fill="currentColor" />
    </svg>
);
