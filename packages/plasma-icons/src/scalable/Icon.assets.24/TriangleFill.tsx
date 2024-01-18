import React from 'react';

import { IconProps } from '../IconRoot';

export const TriangleFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 3.25C12.2679 3.25 12.5155 3.39295 12.6494 3.625L22.1757 20.125C22.3097 20.357 22.3097 20.643 22.1757 20.875C22.0417 21.107 21.7941 21.25 21.5262 21.25H2.47363C2.20568 21.25 1.95809 21.107 1.82411 20.875C1.69014 20.643 1.69014 20.357 1.82411 20.125L11.3504 3.625C11.4844 3.39295 11.732 3.25 11.9999 3.25Z"
            fill="currentColor"
        />
    </svg>
);
